const snarkjs = require("snarkjs");
const { buildPoseidon } = require("circomlibjs");
const fs = require("fs");
const path = require("path");

/**
 * Generate a ZK proof for the privacy circuit
 * @param {Object} params - Parameters for proof generation
 * @param {bigint} params.secret - Secret value
 * @param {bigint} params.nullifier - Nullifier to prevent replay
 * @param {bigint} params.recipient - Recipient address (as bigint)
 * @param {bigint} params.amount - Amount being transferred
 * @returns {Object} Proof and public signals
 */
async function generateProof({
  secret,
  nullifier,
  recipient,
  amount
}) {
  console.log("Generating ZK proof...\n");
  console.log("Private inputs:");
  console.log("  secret:", secret.toString());
  console.log("  nullifier:", nullifier.toString());
  console.log("  recipient:", recipient.toString());
  console.log("  amount:", amount.toString());
  console.log();

  // Initialize Poseidon hash
  const poseidon = await buildPoseidon();
  const F = poseidon.F;

  // Compute public inputs
  // NEW: Commitment includes recipient to lock funds to specific address
  const commitment = poseidon([secret, nullifier, amount, recipient]);
  const commitmentBigInt = F.toObject(commitment);

  const nullifierHash = poseidon([nullifier]);
  const nullifierHashBigInt = F.toObject(nullifierHash);

  const recipientHash = poseidon([recipient]);
  const recipientHashBigInt = F.toObject(recipientHash);

  console.log("Public inputs:");
  console.log("  nullifierHash:", nullifierHashBigInt.toString());
  console.log("  commitment:", commitmentBigInt.toString());
  console.log("  recipientHash:", recipientHashBigInt.toString());
  console.log();

  // Prepare circuit inputs
  const inputs = {
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

  // Paths to circuit files
  const wasmPath = path.join(__dirname, "../circuits/privacy.wasm");
  const zkeyPath = path.join(__dirname, "../circuits/privacy.zkey");

  // Generate proof
  console.log("Computing witness and generating proof...");
  const { proof, publicSignals } = await snarkjs.groth16.fullProve(
    inputs,
    wasmPath,
    zkeyPath
  );

  console.log("✅ Proof generated successfully!\n");

  return {
    proof,
    publicSignals,
    inputs: {
      nullifierHash: nullifierHashBigInt.toString(),
      commitment: commitmentBigInt.toString(),
      recipientHash: recipientHashBigInt.toString(),
    }
  };
}

/**
 * Format proof for Solidity contract call
 * @param {Object} proof - Proof from snarkjs
 * @param {Array} publicSignals - Public signals from snarkjs
 * @returns {Object} Formatted proof data
 */
function formatProofForSolidity(proof, publicSignals) {
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
 * Verify a proof locally before sending to chain
 * @param {Object} proof - Proof from snarkjs
 * @param {Array} publicSignals - Public signals
 * @returns {Promise<boolean>} True if proof is valid
 */
async function verifyProof(proof, publicSignals) {
  const vkeyPath = path.join(__dirname, "../circuits/verification_key.json");

  // Export verification key if it doesn't exist
  if (!fs.existsSync(vkeyPath)) {
    console.log("Exporting verification key...");
    const zkeyPath = path.join(__dirname, "../circuits/privacy.zkey");
    const vkey = await snarkjs.zKey.exportVerificationKey(zkeyPath);
    fs.writeFileSync(vkeyPath, JSON.stringify(vkey, null, 2));
    console.log("✅ Verification key exported\n");
  }

  const vkey = JSON.parse(fs.readFileSync(vkeyPath, "utf8"));
  const isValid = await snarkjs.groth16.verify(vkey, publicSignals, proof);

  return isValid;
}

// CLI usage
if (require.main === module) {
  (async () => {
    // Example usage with default values
    const secret = BigInt(123456789);
    const nullifier = BigInt(987654321);
    const recipient = BigInt(555555555);
    const amount = BigInt(1000);

    try {
      // Generate proof
      const { proof, publicSignals, inputs } = await generateProof({
        secret,
        nullifier,
        recipient,
        amount,
      });

      // Verify proof locally
      console.log("Verifying proof locally...");
      const isValid = await verifyProof(proof, publicSignals);
      console.log("Proof valid:", isValid ? "✅ YES" : "❌ NO");
      console.log();

      if (!isValid) {
        console.error("❌ Proof verification failed!");
        process.exit(1);
      }

      // Format for Solidity
      const solidityProof = formatProofForSolidity(proof, publicSignals);

      // Save proof to file
      const proofData = {
        proof,
        publicSignals,
        solidityProof,
        inputs,
        timestamp: new Date().toISOString(),
      };

      const outputPath = path.join(__dirname, "../circuits/generated-proof.json");
      fs.writeFileSync(outputPath, JSON.stringify(proofData, null, 2));
      console.log("✅ Proof saved to:", outputPath);

      console.log("\nSolidity call data:");
      console.log("a:", JSON.stringify(solidityProof.a));
      console.log("b:", JSON.stringify(solidityProof.b));
      console.log("c:", JSON.stringify(solidityProof.c));
      console.log("publicSignals:", JSON.stringify(solidityProof.publicSignals));

    } catch (error) {
      console.error("❌ Error generating proof:", error);
      process.exit(1);
    }
  })();
}

module.exports = {
  generateProof,
  verifyProof,
  formatProofForSolidity,
};
