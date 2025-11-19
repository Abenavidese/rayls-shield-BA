import { buildPoseidon } from 'circomlibjs';
import * as snarkjs from 'snarkjs';

export interface ProofInputs {
  secret: bigint;
  nullifier: bigint;
  recipient: bigint;
  amount: bigint;
}

export interface ProofOutput {
  proof: {
    pi_a: string[];
    pi_b: string[][];
    pi_c: string[];
  };
  publicSignals: string[];
  solidityProof: {
    a: [string, string];
    b: [[string, string], [string, string]];
    c: [string, string];
    publicSignals: string[];
  };
}

/**
 * Generate ZK proof inputs (client-side)
 * This computes the public signals needed for the circuit
 */
export async function generateProofInputs(params: {
  secret: bigint;
  nullifier: bigint;
  recipient: bigint;
  amount: bigint;
}): Promise<{
  nullifierHash: string;
  commitment: string;
  recipientHash: string;
}> {
  const poseidon = await buildPoseidon();
  const F = poseidon.F;

  // Compute public inputs using Poseidon hash
  const commitment = poseidon([params.secret, params.nullifier, params.amount]);
  const commitmentBigInt = F.toObject(commitment);

  const nullifierHash = poseidon([params.nullifier]);
  const nullifierHashBigInt = F.toObject(nullifierHash);

  const recipientHash = poseidon([params.recipient]);
  const recipientHashBigInt = F.toObject(recipientHash);

  return {
    nullifierHash: nullifierHashBigInt.toString(),
    commitment: commitmentBigInt.toString(),
    recipientHash: recipientHashBigInt.toString(),
  };
}

/**
 * Format proof for Solidity contract call
 */
function formatProofForSolidity(proof: any, publicSignals: any[]): ProofOutput['solidityProof'] {
  return {
    a: [proof.pi_a[0], proof.pi_a[1]],
    b: [
      [proof.pi_b[0][1], proof.pi_b[0][0]],
      [proof.pi_b[1][1], proof.pi_b[1][0]],
    ],
    c: [proof.pi_c[0], proof.pi_c[1]],
    publicSignals: publicSignals.map(s => BigInt(s).toString()),
  };
}

/**
 * Generate a complete ZK proof for private messaging
 * Uses real Groth16 proof generation with snarkjs
 */
export async function generateZKProof(params: ProofInputs): Promise<ProofOutput> {
  console.log('🔐 Generating real ZK proof...');
  
  try {
    // Compute public signals
    const inputs = await generateProofInputs(params);
    
    // Prepare circuit inputs
    const circuitInputs = {
      nullifierHash: inputs.nullifierHash,
      commitment: inputs.commitment,
      recipientHash: inputs.recipientHash,
      secret: params.secret.toString(),
      nullifier: params.nullifier.toString(),
      recipient: params.recipient.toString(),
      amount: params.amount.toString(),
    };
    
    console.log('📊 Circuit inputs prepared');
    
    // Generate proof using snarkjs
    const wasmPath = '/circuits/privacy.wasm';
    const zkeyPath = '/circuits/privacy.zkey';
    
    console.log('⚙️ Computing witness and generating proof...');
    const { proof, publicSignals } = await snarkjs.groth16.fullProve(
      circuitInputs,
      wasmPath,
      zkeyPath
    );
    
    console.log('✅ Proof generated successfully!');
    
    // Format for Solidity
    const solidityProof = formatProofForSolidity(proof, publicSignals);
    
    return {
      proof,
      publicSignals,
      solidityProof,
    };
  } catch (error) {
    console.error('❌ Error generating ZK proof:', error);
    throw new Error(`Failed to generate ZK proof: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

/**
 * Helper to convert address to BigInt for circuit
 */
export function addressToBigInt(address: string): bigint {
  return BigInt(address);
}

/**
 * Helper to generate random secret
 */
export function generateRandomSecret(): bigint {
  return BigInt('0x' + Array.from({ length: 64 }, () =>
    Math.floor(Math.random() * 16).toString(16)
  ).join(''));
}

/**
 * Helper to generate random nullifier
 */
export function generateRandomNullifier(): bigint {
  return BigInt('0x' + Array.from({ length: 64 }, () =>
    Math.floor(Math.random() * 16).toString(16)
  ).join(''));
}
