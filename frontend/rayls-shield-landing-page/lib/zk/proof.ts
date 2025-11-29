import * as snarkjs from "snarkjs";
import { buildPoseidon } from "circomlibjs";

export interface ProofInputs {
  secret: string;
  nullifier: string;
  recipient: string;
  amount: bigint;
}

export interface ZKProof {
  a: [bigint, bigint];
  b: [[bigint, bigint], [bigint, bigint]];
  c: [bigint, bigint];
  publicSignals: [bigint, bigint, bigint] | [bigint, bigint, bigint, bigint]; // Privacy: [nullifierHash, commitment, recipientHash] | Compliance: [nullifierHash, commitment, recipientHash, amlThreshold]
}

export interface ProofGenerationResult {
  proof: ZKProof;
  commitment: string;
  nullifierHash: string;
  recipientHash: string;
}

/**
 * Generate ZK proof for private withdrawal
 * @param inputs - Proof inputs (secret, nullifier, recipient, amount)
 * @returns Proof and computed hashes
 */
export async function generateWithdrawalProof(
  inputs: ProofInputs
): Promise<ProofGenerationResult> {
  console.log("🔐 Generating ZK proof for withdrawal...");

  // Initialize Poseidon hash
  const poseidon = await buildPoseidon();
  const F = poseidon.F;

  // Convert inputs to BigInt
  const secret = BigInt(inputs.secret);
  const nullifier = BigInt(inputs.nullifier);
  const recipient = BigInt(inputs.recipient);
  const amount = inputs.amount;

  // Compute public inputs using Poseidon hash
  // NEW: Commitment now includes recipient to lock funds to specific address
  const commitment = poseidon([secret, nullifier, amount, recipient]);
  const commitmentBigInt = F.toObject(commitment);

  const nullifierHash = poseidon([nullifier]);
  const nullifierHashBigInt = F.toObject(nullifierHash);

  const recipientHash = poseidon([recipient]);
  const recipientHashBigInt = F.toObject(recipientHash);

  console.log("📊 Public inputs computed:");
  console.log("  - Commitment:", commitmentBigInt.toString());
  console.log("  - Nullifier Hash:", nullifierHashBigInt.toString());
  console.log("  - Recipient Hash:", recipientHashBigInt.toString());

  // Prepare circuit inputs
  const circuitInputs = {
    // Public inputs
    nullifierHash: nullifierHashBigInt.toString(),
    commitment: commitmentBigInt.toString(),
    recipientHash: recipientHashBigInt.toString(),

    // Private inputs
    secret: secret.toString(),
    nullifier: nullifier.toString(),
    recipient: recipient.toString(),
    amount: amount.toString(),
  };

  try {
    // Generate proof using circuit files from public folder
    console.log("⚙️ Computing witness and generating proof...");

    const { proof, publicSignals } = await snarkjs.groth16.fullProve(
      circuitInputs,
      "/circuits/privacy.wasm",
      "/circuits/privacy.zkey"
    );

    console.log("✅ Proof generated successfully!");

    // Format proof for Solidity
    const formattedProof: ZKProof = {
      a: [BigInt(proof.pi_a[0]), BigInt(proof.pi_a[1])],
      b: [
        [BigInt(proof.pi_b[0][1]), BigInt(proof.pi_b[0][0])],
        [BigInt(proof.pi_b[1][1]), BigInt(proof.pi_b[1][0])],
      ],
      c: [BigInt(proof.pi_c[0]), BigInt(proof.pi_c[1])],
      publicSignals: [
        BigInt(publicSignals[0]),
        BigInt(publicSignals[1]),
        BigInt(publicSignals[2]),
      ],
    };

    return {
      proof: formattedProof,
      commitment: "0x" + commitmentBigInt.toString(16).padStart(64, "0"),
      nullifierHash: "0x" + nullifierHashBigInt.toString(16).padStart(64, "0"),
      recipientHash: "0x" + recipientHashBigInt.toString(16).padStart(64, "0"),
    };
  } catch (error) {
    console.error("❌ Error generating proof:", error);
    throw new Error(`Proof generation failed: ${error instanceof Error ? error.message : "Unknown error"}`);
  }
}

/**
 * Generate ZK proof for compliant private withdrawal (with AML threshold check)
 * @param inputs - Proof inputs (secret, nullifier, recipient, amount)
 * @param amlThreshold - AML threshold in wei (e.g., 10000 USDgas)
 * @returns Proof and computed hashes
 */
export async function generateComplianceWithdrawalProof(
  inputs: ProofInputs,
  amlThreshold: bigint
): Promise<ProofGenerationResult> {
  console.log("🔐 Generating compliance ZK proof for withdrawal...");
  console.log("💰 AML Threshold:", amlThreshold.toString());

  // Initialize Poseidon hash
  const poseidon = await buildPoseidon();
  const F = poseidon.F;

  // Convert inputs to BigInt
  const secret = BigInt(inputs.secret);
  const nullifier = BigInt(inputs.nullifier);
  const recipient = BigInt(inputs.recipient);
  const amount = inputs.amount;

  // Compute public inputs using Poseidon hash
  // NEW: Commitment now includes recipient to lock funds to specific address
  const commitment = poseidon([secret, nullifier, amount, recipient]);
  const commitmentBigInt = F.toObject(commitment);

  const nullifierHash = poseidon([nullifier]);
  const nullifierHashBigInt = F.toObject(nullifierHash);

  const recipientHash = poseidon([recipient]);
  const recipientHashBigInt = F.toObject(recipientHash);

  console.log("📊 Public inputs computed:");
  console.log("  - Commitment:", commitmentBigInt.toString());
  console.log("  - Nullifier Hash:", nullifierHashBigInt.toString());
  console.log("  - Recipient Hash:", recipientHashBigInt.toString());
  console.log("  - AML Threshold:", amlThreshold.toString());

  // Prepare circuit inputs (compliance has amlThreshold as 4th public input)
  const circuitInputs = {
    // Public inputs
    nullifierHash: nullifierHashBigInt.toString(),
    commitment: commitmentBigInt.toString(),
    recipientHash: recipientHashBigInt.toString(),
    amlThreshold: amlThreshold.toString(),

    // Private inputs
    secret: secret.toString(),
    nullifier: nullifier.toString(),
    recipient: recipient.toString(),
    amount: amount.toString(),
  };

  try {
    // Generate proof using compliance circuit files from public folder
    console.log("⚙️ Computing witness and generating compliance proof...");

    const { proof, publicSignals } = await snarkjs.groth16.fullProve(
      circuitInputs,
      "/circuits/compliance.wasm",
      "/circuits/compliance.zkey"
    );

    console.log("✅ Compliance proof generated successfully!");

    // Format proof for Solidity
    // IMPORTANT: Only send first 3 public signals to contract
    // Contract adds AML_THRESHOLD as 4th signal internally
    const formattedProof: ZKProof = {
      a: [BigInt(proof.pi_a[0]), BigInt(proof.pi_a[1])],
      b: [
        [BigInt(proof.pi_b[0][1]), BigInt(proof.pi_b[0][0])],
        [BigInt(proof.pi_b[1][1]), BigInt(proof.pi_b[1][0])],
      ],
      c: [BigInt(proof.pi_c[0]), BigInt(proof.pi_c[1])],
      publicSignals: [
        BigInt(publicSignals[0]), // nullifierHash
        BigInt(publicSignals[1]), // commitment
        BigInt(publicSignals[2]), // recipientHash
        // Note: publicSignals[3] (amlThreshold) is NOT sent to contract
        // Contract adds it internally from AML_THRESHOLD constant
      ],
    };

    return {
      proof: formattedProof,
      commitment: "0x" + commitmentBigInt.toString(16).padStart(64, "0"),
      nullifierHash: "0x" + nullifierHashBigInt.toString(16).padStart(64, "0"),
      recipientHash: "0x" + recipientHashBigInt.toString(16).padStart(64, "0"),
    };
  } catch (error) {
    console.error("❌ Error generating compliance proof:", error);
    throw new Error(`Compliance proof generation failed: ${error instanceof Error ? error.message : "Unknown error"}`);
  }
}

/**
 * Verify a proof locally before sending to chain (optional)
 * @param proof - The proof to verify
 * @param publicSignals - Public signals
 * @returns True if proof is valid
 */
export async function verifyProofLocally(
  proof: any,
  publicSignals: any[]
): Promise<boolean> {
  try {
    // Fetch verification key from public folder
    const response = await fetch("/circuits/verification_key.json");
    const vkey = await response.json();

    const isValid = await snarkjs.groth16.verify(vkey, publicSignals, proof);
    console.log("🔍 Local verification:", isValid ? "✅ VALID" : "❌ INVALID");

    return isValid;
  } catch (error) {
    console.error("❌ Error verifying proof:", error);
    return false;
  }
}

/**
 * Compute commitment hash (used during deposit)
 * @param secret - Secret value
 * @param nullifier - Nullifier value
 * @param amount - Amount in wei
 * @param recipient - Recipient address (locks funds to this address)
 * @returns Commitment hash as hex string
 */
export async function computeCommitment(
  secret: string,
  nullifier: string,
  amount: bigint,
  recipient: string
): Promise<string> {
  const poseidon = await buildPoseidon();
  const F = poseidon.F;

  // NEW: Commitment includes recipient to lock funds
  const recipientBigInt = BigInt(recipient);
  const commitment = poseidon([BigInt(secret), BigInt(nullifier), amount, recipientBigInt]);
  const commitmentBigInt = F.toObject(commitment);

  return "0x" + commitmentBigInt.toString(16).padStart(64, "0");
}

/**
 * Compute nullifier hash
 * @param nullifier - Nullifier value
 * @returns Nullifier hash as hex string
 */
export async function computeNullifierHash(nullifier: string): Promise<string> {
  const poseidon = await buildPoseidon();
  const F = poseidon.F;

  const hash = poseidon([BigInt(nullifier)]);
  const hashBigInt = F.toObject(hash);

  return "0x" + hashBigInt.toString(16).padStart(64, "0");
}

/**
 * Convert address to BigInt for circuit
 * @param address - Ethereum address
 * @returns Address as BigInt
 */
export function addressToBigInt(address: string): string {
  // Remove 0x prefix and convert to BigInt
  const cleanAddress = address.toLowerCase().replace("0x", "");
  return BigInt("0x" + cleanAddress).toString();
}

/**
 * Generate random secret and nullifier
 * @returns Object with secret and nullifier as hex strings
 */
export function generateRandomSecretAndNullifier(): {
  secret: string;
  nullifier: string;
} {
  // Generate cryptographically secure random values
  const secret = BigInt(
    "0x" +
      Array.from(crypto.getRandomValues(new Uint8Array(31)))
        .map((b) => b.toString(16).padStart(2, "0"))
        .join("")
  );

  const nullifier = BigInt(
    "0x" +
      Array.from(crypto.getRandomValues(new Uint8Array(31)))
        .map((b) => b.toString(16).padStart(2, "0"))
        .join("")
  );

  return {
    secret: "0x" + secret.toString(16),
    nullifier: "0x" + nullifier.toString(16),
  };
}
