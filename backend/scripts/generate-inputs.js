const { buildPoseidon } = require("circomlibjs");
const fs = require("fs");

async function generateInputs() {
  console.log("Generating valid circuit inputs...\n");

  // Initialize Poseidon hash
  const poseidon = await buildPoseidon();
  const F = poseidon.F;

  // Private inputs
  const secret = BigInt(123456789);
  const nullifier = BigInt(987654321);
  const recipient = BigInt(555555555);
  const amount = BigInt(1000);

  // Compute commitment: Poseidon(secret, nullifier, amount, recipient)
  // NEW: Includes recipient to lock funds to specific address
  const commitment = poseidon([secret, nullifier, amount, recipient]);
  const commitmentBigInt = F.toObject(commitment);

  // Compute nullifier hash: Poseidon(nullifier)
  const nullifierHash = poseidon([nullifier]);
  const nullifierHashBigInt = F.toObject(nullifierHash);

  // Compute recipient hash: Poseidon(recipient)
  const recipientHash = poseidon([recipient]);
  const recipientHashBigInt = F.toObject(recipientHash);

  // Create input object
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

  // Save to file
  fs.writeFileSync(
    "./circuits/input.json",
    JSON.stringify(inputs, null, 2)
  );

  console.log("Generated inputs:");
  console.log(JSON.stringify(inputs, null, 2));
  console.log("\nInputs saved to circuits/input.json");

  return inputs;
}

// Run if called directly
if (require.main === module) {
  generateInputs()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
}

module.exports = { generateInputs };
