import { useState, useEffect, useCallback } from "react";
import { ethers } from "ethers";
import { RaylsShieldPoolContract, PoolStats, generateSecretAndNullifier, generateCommitment } from "@/lib/web3/pool";
import { CONTRACT_ADDRESSES, getNetworkByChainId } from "@/lib/contracts/addresses";

export function useRaylsShieldPool() {
  const [poolContract, setPoolContract] = useState<RaylsShieldPoolContract | null>(null);
  const [poolStats, setPoolStats] = useState<PoolStats | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [provider, setProvider] = useState<ethers.BrowserProvider | null>(null);
  const [signer, setSigner] = useState<ethers.JsonRpcSigner | null>(null);
  const [account, setAccount] = useState<string | null>(null);
  const [chainId, setChainId] = useState<number | null>(null);

  // Connect wallet
  const connectWallet = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      if (!window.ethereum) {
        throw new Error("MetaMask is not installed");
      }

      const browserProvider = new ethers.BrowserProvider(window.ethereum);
      const accounts = await browserProvider.send("eth_requestAccounts", []);
      const network = await browserProvider.getNetwork();
      const signerInstance = await browserProvider.getSigner();

      setProvider(browserProvider);
      setSigner(signerInstance);
      setAccount(accounts[0]);
      setChainId(Number(network.chainId));

      // Initialize contract
      const networkConfig = getNetworkByChainId(Number(network.chainId));
      if (!networkConfig) {
        throw new Error(`Unsupported network. Please switch to Localhost (31337) or Rayls Devnet (123123)`);
      }

      const poolAddress = networkConfig.contracts.RaylsShieldPool;
      if (!poolAddress) {
        throw new Error("Pool contract not deployed on this network yet");
      }

      const contract = new RaylsShieldPoolContract(poolAddress, signerInstance);
      setPoolContract(contract);

      // Load initial stats
      const stats = await contract.getPoolStats();
      setPoolStats(stats);

    } catch (err: any) {
      const errorMessage = err.message || String(err);
      const cleanError = errorMessage.split('\n')[0].substring(0, 200);
      
      setError(cleanError);
      console.log("⚠️ Connect wallet error:", cleanError);
    } finally {
      setLoading(false);
    }
  }, []);

  // Disconnect wallet
  const disconnectWallet = useCallback(() => {
    setProvider(null);
    setSigner(null);
    setAccount(null);
    setChainId(null);
    setPoolContract(null);
    setPoolStats(null);
  }, []);

  // Refresh pool stats
  const refreshPoolStats = useCallback(async () => {
    if (!poolContract) return;
    try {
      const stats = await poolContract.getPoolStats();
      setPoolStats(stats);
    } catch (err: any) {
      const errorMessage = err.message || String(err);
      console.log("⚠️ Error refreshing stats:", errorMessage.split('\n')[0].substring(0, 100));
    }
  }, [poolContract]);

  // Deposit
  const deposit = useCallback(async (
    amount: bigint,
    recipient: string
  ): Promise<{ commitment: string; secret: string; nullifier: string; txHash: string }> => {
    if (!poolContract) throw new Error("Pool contract not initialized");

    try {
      setLoading(true);
      setError(null);

      // Generate secret and nullifier
      const { secret, nullifier } = generateSecretAndNullifier();

      // Generate commitment using Poseidon hash (includes recipient to lock funds)
      const commitment = await generateCommitment(secret, nullifier, amount, recipient);

      // Make deposit
      const tx = await poolContract.deposit(commitment, amount);
      const receipt = await tx.wait();

      // Refresh stats
      await refreshPoolStats();

      return { commitment, secret, nullifier, txHash: receipt?.hash || tx.hash };
    } catch (err: any) {
      // Extract clean error message
      const errorMessage = err.message || err.reason || String(err);
      const cleanError = errorMessage.split('\n')[0].substring(0, 200);
      
      // Don't show error for user rejection or insufficient funds
      if (errorMessage.includes("user rejected") || 
          errorMessage.includes("User rejected") || 
          errorMessage.includes("User denied") ||
          errorMessage.includes("ethers-user-denied") ||
          errorMessage.includes("4001") ||
          errorMessage.includes("missing revert data") ||
          errorMessage.includes("CALL_EXCEPTION") ||
          errorMessage.includes("insufficient funds")) {
        console.log("⚠️ Transaction cancelled or insufficient funds");
        setError(null);
      } else {
        console.log("⚠️ Deposit error:", cleanError);
        setError(cleanError);
      }
      
      throw err;
    } finally {
      setLoading(false);
    }
  }, [poolContract, refreshPoolStats]);

  // Withdraw (requires ZK proof - simplified for now)
  const withdraw = useCallback(async (
    recipient: string,
    amount: bigint,
    proof: any
  ): Promise<ethers.ContractTransactionResponse> => {
    if (!poolContract) throw new Error("Pool contract not initialized");

    try {
      setLoading(true);
      setError(null);

      const tx = await poolContract.withdraw(recipient, amount, proof);
      await tx.wait();

      // Refresh stats
      await refreshPoolStats();

      return tx;
    } catch (err: any) {
      // Extract clean error message
      const errorMessage = err.message || err.reason || String(err);
      const cleanError = errorMessage.split('\n')[0].substring(0, 200);
      
      // Only log simplified error, don't show full stack trace
      if (errorMessage.includes("Nullifier already used")) {
        console.log("⚠️ Payment already claimed");
        setError(null); // Don't show error for already claimed
      } else if (errorMessage.includes("user rejected") || 
                 errorMessage.includes("User rejected") || 
                 errorMessage.includes("User denied") ||
                 errorMessage.includes("ethers-user-denied") ||
                 errorMessage.includes("4001") ||
                 errorMessage.includes("sendTransaction")) {
        console.log("⚠️ User rejected transaction");
        setError(null); // Don't show error for user rejection
      } else {
        console.log("⚠️ Withdrawal error:", cleanError);
        setError(cleanError);
      }
      
      throw err; // Re-throw for component to handle
    } finally {
      setLoading(false);
    }
  }, [poolContract, refreshPoolStats]);

  // Listen to account changes
  useEffect(() => {
    if (!window.ethereum) return;

    const handleAccountsChanged = async (accounts: string[]) => {
      if (accounts.length === 0) {
        disconnectWallet();
      } else {
        // Account changed - reinitialize signer and contract
        if (provider) {
          try {
            const newSigner = await provider.getSigner();
            setSigner(newSigner);
            setAccount(accounts[0]);

            // Reinitialize contract with new signer
            if (chainId) {
              const networkConfig = getNetworkByChainId(chainId);
              if (networkConfig?.contracts.RaylsShieldPool) {
                const contract = new RaylsShieldPoolContract(
                  networkConfig.contracts.RaylsShieldPool,
                  newSigner
                );
                setPoolContract(contract);
              }
            }
          } catch (err) {
            console.log("⚠️ Error updating signer");
          }
        }
      }
    };

    const handleChainChanged = () => {
      window.location.reload();
    };

    window.ethereum.on("accountsChanged", handleAccountsChanged);
    window.ethereum.on("chainChanged", handleChainChanged);

    return () => {
      window.ethereum.removeListener("accountsChanged", handleAccountsChanged);
      window.ethereum.removeListener("chainChanged", handleChainChanged);
    };
  }, [disconnectWallet, provider, chainId]);

  return {
    // State
    poolContract,
    poolStats,
    loading,
    error,
    account,
    chainId,
    provider,
    signer,

    // Actions
    connectWallet,
    disconnectWallet,
    deposit,
    withdraw,
    refreshPoolStats,
  };
}
