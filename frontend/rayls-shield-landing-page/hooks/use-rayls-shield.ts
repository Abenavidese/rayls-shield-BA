import { useState, useCallback } from 'react';
import { Contract } from 'ethers';
import { web3Provider } from '@/lib/web3/provider';
import { RAYLS_SHIELD_ABI } from '@/lib/contracts/RaylsShieldABI';
import { GROTH16_VERIFIER_ABI } from '@/lib/contracts/Groth16VerifierABI';
import { DEFAULT_NETWORK } from '@/lib/contracts/addresses';
import {
  generateZKProof,
  generateRandomSecret,
  generateRandomNullifier,
  addressToBigInt,
  type ProofOutput,
} from '@/lib/zk/proof-generator';

export interface SendPrivateMessageParams {
  destinationChainId: number;
  destinationAddress: string;
  amount: bigint;
  encryptedPayload?: string;
}

export interface TransactionStatus {
  hash?: string;
  status: 'idle' | 'generating-proof' | 'signing' | 'pending' | 'success' | 'error';
  error?: string;
  proof?: ProofOutput;
}

export function useRaylsShield() {
  const [txStatus, setTxStatus] = useState<TransactionStatus>({ status: 'idle' });
  const [isLoading, setIsLoading] = useState(false);

  const getContract = useCallback(async () => {
    if (!web3Provider.isConnected()) {
      throw new Error('Wallet not connected');
    }
    const signer = await web3Provider.getSigner();
    return new Contract(
      DEFAULT_NETWORK.contracts.RaylsShield,
      RAYLS_SHIELD_ABI,
      signer
    );
  }, []);

  const getVerifierContract = useCallback(async () => {
    if (!web3Provider.isConnected()) {
      throw new Error('Wallet not connected');
    }
    const signer = await web3Provider.getSigner();
    return new Contract(
      DEFAULT_NETWORK.contracts.Groth16Verifier,
      GROTH16_VERIFIER_ABI,
      signer
    );
  }, []);

  /**
   * Send a private cross-chain message with ZK proof
   */
  const sendPrivateMessage = useCallback(
    async (params: SendPrivateMessageParams) => {
      setIsLoading(true);
      setTxStatus({ status: 'generating-proof' });

      try {
        // Step 1: Generate random secret and nullifier
        const secret = generateRandomSecret();
        const nullifier = generateRandomNullifier();
        const recipient = addressToBigInt(params.destinationAddress);

        console.log('🔑 Private inputs:', {
          secret: secret.toString(),
          nullifier: nullifier.toString(),
          recipient: recipient.toString(),
          amount: params.amount.toString(),
        });

        // Step 2: Generate ZK proof
        console.log('🔐 Generating ZK proof...');
        const proofOutput = await generateZKProof({
          secret,
          nullifier,
          recipient,
          amount: params.amount,
        });

        console.log('📊 Proof output:', {
          publicSignals: proofOutput.publicSignals,
          solidityProof: proofOutput.solidityProof,
        });

        // Step 2.5: Verify proof locally before sending
        console.log('🔍 Verifying proof with verifier contract...');
        try {
          const isValid = await verifyProof(proofOutput);
          console.log('✅ Local verification result:', isValid);
          if (!isValid) {
            throw new Error('Proof verification failed locally');
          }
        } catch (verifyError) {
          console.error('❌ Proof verification error:', verifyError);
          throw new Error(`Proof verification failed: ${verifyError instanceof Error ? verifyError.message : 'Unknown error'}`);
        }

        setTxStatus({ status: 'generating-proof', proof: proofOutput });

        // Step 3: Prepare encrypted payload (in production, encrypt the actual message)
        const encryptedPayload =
          params.encryptedPayload || '0x' + Buffer.from('encrypted_data').toString('hex');

        // Step 4: Send transaction
        setTxStatus({ status: 'signing', proof: proofOutput });
        const contract = await getContract();

        console.log('📤 Sending transaction with params:', {
          dstChainId: params.destinationChainId,
          destination: params.destinationAddress,
          encryptedPayload,
          proof: {
            a: proofOutput.solidityProof.a,
            b: proofOutput.solidityProof.b,
            c: proofOutput.solidityProof.c,
            publicSignals: proofOutput.solidityProof.publicSignals,
          },
        });

        const tx = await contract.sendPrivateMessage(
          params.destinationChainId,
          params.destinationAddress,
          encryptedPayload,
          proofOutput.solidityProof.a,
          proofOutput.solidityProof.b,
          proofOutput.solidityProof.c,
          proofOutput.solidityProof.publicSignals,
          {
            value: 0, // Add gas payment if needed
            gasLimit: 500000,
          }
        );
        
        console.log('✅ Transaction sent:', tx.hash);

        setTxStatus({
          status: 'pending',
          hash: tx.hash,
          proof: proofOutput,
        });

        // Wait for confirmation
        const receipt = await tx.wait();

        setTxStatus({
          status: 'success',
          hash: receipt.hash,
          proof: proofOutput,
        });

        setIsLoading(false);
        return receipt;
      } catch (error: any) {
        console.error('Error sending private message:', error);
        setTxStatus({
          status: 'error',
          error: error.message || 'Transaction failed',
        });
        setIsLoading(false);
        throw error;
      }
    },
    [getContract]
  );

  /**
   * Check if a nullifier has been used
   */
  const isNullifierUsed = useCallback(
    async (nullifier: string): Promise<boolean> => {
      try {
        const contract = await getContract();
        return await contract.isNullifierUsed(nullifier);
      } catch (error) {
        console.error('Error checking nullifier:', error);
        throw error;
      }
    },
    [getContract]
  );

  /**
   * Check if a message has been verified
   */
  const isMessageVerified = useCallback(
    async (messageHash: string): Promise<boolean> => {
      try {
        const contract = await getContract();
        return await contract.isMessageVerified(messageHash);
      } catch (error) {
        console.error('Error checking message:', error);
        throw error;
      }
    },
    [getContract]
  );

  /**
   * Verify a proof using the Groth16 verifier
   */
  const verifyProof = useCallback(
    async (proof: ProofOutput): Promise<boolean> => {
      try {
        const verifier = await getVerifierContract();
        return await verifier.verifyProof(
          proof.solidityProof.a,
          proof.solidityProof.b,
          proof.solidityProof.c,
          proof.solidityProof.publicSignals
        );
      } catch (error) {
        console.error('Error verifying proof:', error);
        throw error;
      }
    },
    [getVerifierContract]
  );

  /**
   * Reset transaction status
   */
  const resetStatus = useCallback(() => {
    setTxStatus({ status: 'idle' });
  }, []);

  return {
    sendPrivateMessage,
    isNullifierUsed,
    isMessageVerified,
    verifyProof,
    resetStatus,
    txStatus,
    isLoading,
  };
}
