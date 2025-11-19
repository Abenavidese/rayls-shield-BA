const { buildPoseidon } = require("circomlibjs");
const fs = require("fs");
const path = require("path");

async function main() {
  console.log("Generating compliance circuit input with Poseidon hashes...\n");

  // Initialize Poseidon
  const poseidon = await buildPoseidon();

  // Private inputs
  const secret = BigInt("123456789012345678901234567890");
  const nullifier = BigInt("987654321098765432109876543210");
  const recipient = BigInt("742735890663456321925384448641");
  const amount = BigInt("7500");

  // Public input (AML threshold)
  const amlThreshold = BigInt("10000");

  console.log("Private Inputs:");
  console.log("  secret:     ", secret.toString());
  console.log("  nullifier:  ", nullifier.toString());
  console.log("  recipient:  ", recipient.toString());
  console.log("  amount:     ", amount.toString(), "USDr");
  console.log();

  // Calculate public outputs using Poseidon hash
  const F = poseidon.F;

  // Commitment: Poseidon(secret, nullifier, amount)
  const commitment = poseidon([secret, nullifier, amount]);
  const commitmentStr = F.toString(commitment);

  // NullifierHash: Poseidon(nullifier)
  const nullifierHash = poseidon([nullifier]);
  const nullifierHashStr = F.toString(nullifierHash);

  // RecipientHash: Poseidon(recipient)
  const recipientHash = poseidon([recipient]);
  const recipientHashStr = F.toString(recipientHash);

  console.log("Public Outputs (Hashes):");
  console.log("  nullifierHash: ", nullifierHashStr);
  console.log("  commitment:    ", commitmentStr);
  console.log("  recipientHash: ", recipientHashStr);
  console.log("  amlThreshold:  ", amlThreshold.toString(), "USD");
  console.log();

  // Create input object for circuit
  const input = {
    // Public inputs
    nullifierHash: nullifierHashStr,
    commitment: commitmentStr,
    recipientHash: recipientHashStr,
    amlThreshold: amlThreshold.toString(),
    // Private inputs
    secret: secret.toString(),
    nullifier: nullifier.toString(),
    recipient: recipient.toString(),
    amount: amount.toString()
  };

  // Save to file
  const inputPath = path.join(__dirname, "../circuits/input-compliance.json");
  fs.writeFileSync(inputPath, JSON.stringify(input, null, 2));

  console.log("✅ Input file generated:", inputPath);
  console.log();
  console.log("Compliance Check:");
  console.log("  Amount:", amount.toString(), "USDr");
  console.log("  Threshold:", amlThreshold.toString(), "USD");
  console.log("  Compliant:", amount < amlThreshold ? "✅ YES" : "❌ NO");
  console.log("  (", amount.toString(), "<", amlThreshold.toString(), "=", amount < amlThreshold, ")");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
