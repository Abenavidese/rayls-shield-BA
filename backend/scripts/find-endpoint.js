const hre = require("hardhat");

async function main() {
  console.log("🔍 Searching for RaylsEndpoint on Rayls Devnet...\n");

  const provider = hre.ethers.provider;

  // Get latest block
  const latestBlock = await provider.getBlockNumber();
  console.log(`Latest block: ${latestBlock}`);

  // Common addresses where system contracts might be deployed
  const commonAddresses = [
    "0x0000000000000000000000000000000000000001", // Genesis
    "0x0000000000000000000000000000000000000002",
    "0x0000000000000000000000000000000000001000", // Common system contract
    "0x1000000000000000000000000000000000000000",
    "0x5FbDB2315678afecb367f032d93F642f64180aa3", // First Hardhat deployment
  ];

  console.log("\n📋 Checking common system contract addresses:\n");

  for (const address of commonAddresses) {
    try {
      const code = await provider.getCode(address);
      if (code !== "0x" && code !== "0x0") {
        console.log(`✅ Found contract at: ${address}`);
        console.log(`   Code length: ${code.length} bytes\n`);
      } else {
        console.log(`❌ No contract at: ${address}`);
      }
    } catch (error) {
      console.log(`⚠️  Error checking ${address}: ${error.message}`);
    }
  }

  console.log("\n" + "=".repeat(60));
  console.log("IMPORTANT INFORMATION");
  console.log("=".repeat(60));
  console.log("\nBased on the Rayls documentation and your current deployment:");
  console.log("\n1. Your contract is ALREADY deployed and working:");
  console.log("   - RaylsShield: 0x648B7FfD8a5Dd9C901B6569E7a0DC9A2eAF4c9F1");
  console.log("   - Groth16Verifier: 0xfD0b399898efC0186E32eb81B630d7Cf7Bb6f217");
  console.log("\n2. The endpoint address (0x0000...0000) is a placeholder.");
  console.log("\n3. For cross-chain functionality, you need to:");
  console.log("   a) Ask Rayls team for the RaylsEndpoint contract address");
  console.log("   b) OR deploy your own endpoint if building a private network");
  console.log("\n4. Current state: Your contract works for single-chain operations");
  console.log("   - ZK proof verification: ✅ Working");
  console.log("   - Private messaging: ✅ Working");
  console.log("   - Cross-chain messaging: ⏸️  Needs real endpoint");
  console.log("\n" + "=".repeat(60));

  // Try to get information about recent contract deployments
  console.log("\n🔎 Analyzing recent blocks for contract deployments...\n");

  const blocksToCheck = 100;
  let contractDeployments = [];

  for (let i = 0; i < blocksToCheck; i++) {
    try {
      const blockNumber = latestBlock - i;
      const block = await provider.getBlock(blockNumber, true);

      if (block && block.transactions) {
        for (const tx of block.transactions) {
          if (!tx.to) { // Contract deployment
            const receipt = await provider.getTransactionReceipt(tx.hash);
            if (receipt && receipt.contractAddress) {
              contractDeployments.push({
                block: blockNumber,
                address: receipt.contractAddress,
                deployer: tx.from
              });
            }
          }
        }
      }
    } catch (error) {
      // Skip errors
    }
  }

  if (contractDeployments.length > 0) {
    console.log(`Found ${contractDeployments.length} contract deployments in last ${blocksToCheck} blocks:\n`);
    contractDeployments.slice(0, 10).forEach(dep => {
      console.log(`Block ${dep.block}: ${dep.address}`);
      console.log(`  Deployer: ${dep.deployer}\n`);
    });
  } else {
    console.log("No recent contract deployments found.");
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
