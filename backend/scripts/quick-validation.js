const hre = require("hardhat");
const fs = require("fs");

async function main() {
  console.log("\n" + "=".repeat(70));
  console.log("🚀 RaylsShield - Quick Validation Check");
  console.log("=".repeat(70) + "\n");

  let allPassed = true;

  // 1. Check deployment file
  console.log("1️⃣ Checking deployment information...");
  const deploymentPath = "./deployments/raylsDevnet.json";
  if (fs.existsSync(deploymentPath)) {
    const deployment = JSON.parse(fs.readFileSync(deploymentPath, "utf8"));
    console.log("   ✅ Deployment file exists");
    console.log(`   📅 Deployed: ${deployment.timestamp}`);
    console.log(`   🔗 Chain ID: ${deployment.chainId}`);
  } else {
    console.log("   ❌ Deployment file not found");
    allPassed = false;
  }

  // 2. Check network connection
  console.log("\n2️⃣ Checking network connection...");
  try {
    const blockNumber = await hre.ethers.provider.getBlockNumber();
    console.log(`   ✅ Connected to Rayls Devnet`);
    console.log(`   📦 Current block: ${blockNumber}`);
  } catch (error) {
    console.log("   ❌ Failed to connect to network");
    console.log(`   Error: ${error.message}`);
    allPassed = false;
  }

  // 3. Check contracts on-chain
  console.log("\n3️⃣ Checking deployed contracts...");
  const deployment = JSON.parse(fs.readFileSync(deploymentPath, "utf8"));

  // Check Verifier
  const verifierAddress = deployment.contracts.Groth16Verifier;
  const verifierCode = await hre.ethers.provider.getCode(verifierAddress);
  if (verifierCode !== "0x" && verifierCode !== "0x0") {
    console.log(`   ✅ Groth16Verifier deployed at ${verifierAddress}`);
  } else {
    console.log(`   ❌ Groth16Verifier not found`);
    allPassed = false;
  }

  // Check RaylsShield
  const shieldAddress = deployment.contracts.RaylsShield;
  const shieldCode = await hre.ethers.provider.getCode(shieldAddress);
  if (shieldCode !== "0x" && shieldCode !== "0x0") {
    console.log(`   ✅ RaylsShield deployed at ${shieldAddress}`);
  } else {
    console.log(`   ❌ RaylsShield not found`);
    allPassed = false;
  }

  // 4. Check contract configuration
  console.log("\n4️⃣ Checking contract configuration...");
  try {
    const RaylsShield = await hre.ethers.getContractFactory("RaylsShield");
    const shield = RaylsShield.attach(shieldAddress);

    const owner = await shield.owner();
    console.log(`   ✅ Owner configured: ${owner}`);

    const verifier = await shield.verifier();
    if (verifier.toLowerCase() === verifierAddress.toLowerCase()) {
      console.log(`   ✅ Verifier correctly configured`);
    } else {
      console.log(`   ❌ Verifier mismatch`);
      allPassed = false;
    }
  } catch (error) {
    console.log(`   ❌ Failed to read contract state`);
    console.log(`   Error: ${error.message}`);
    allPassed = false;
  }

  // 5. Check circuit files
  console.log("\n5️⃣ Checking ZK circuit files...");
  const circuitFiles = [
    { path: "./circuits/privacy.circom", name: "Circuit source" },
    { path: "./circuits/privacy.wasm", name: "Witness calculator" },
    { path: "./circuits/privacy.zkey", name: "Proving key" },
    { path: "./circuits/privacy.vkey.json", name: "Verification key" },
  ];

  circuitFiles.forEach(file => {
    if (fs.existsSync(file.path)) {
      const stats = fs.statSync(file.path);
      const sizeKB = (stats.size / 1024).toFixed(2);
      console.log(`   ✅ ${file.name}: ${sizeKB} KB`);
    } else {
      console.log(`   ⚠️  ${file.name} not found (regenerate with 'npx hardhat circom')`);
    }
  });

  // 6. Check compiled contracts
  console.log("\n6️⃣ Checking compiled contracts...");
  const artifactFiles = [
    "./artifacts/contracts/RaylsShield.sol/RaylsShield.json",
    "./artifacts/contracts/Groth16Verifier.sol/Groth16Verifier.json",
  ];

  artifactFiles.forEach(file => {
    if (fs.existsSync(file)) {
      console.log(`   ✅ ${file.split('/').pop()}`);
    } else {
      console.log(`   ❌ ${file.split('/').pop()} not found`);
      allPassed = false;
    }
  });

  // 7. Check balance
  console.log("\n7️⃣ Checking deployer balance...");
  try {
    const [deployer] = await hre.ethers.getSigners();
    const balance = await hre.ethers.provider.getBalance(deployer.address);
    const balanceFormatted = hre.ethers.formatEther(balance);
    console.log(`   💰 Balance: ${balanceFormatted} USDgas`);
    if (parseFloat(balanceFormatted) > 0.01) {
      console.log(`   ✅ Sufficient balance for operations`);
    } else {
      console.log(`   ⚠️  Low balance, consider topping up`);
    }
  } catch (error) {
    console.log(`   ❌ Failed to check balance`);
    allPassed = false;
  }

  // Summary
  console.log("\n" + "=".repeat(70));
  if (allPassed) {
    console.log("✅ ALL CHECKS PASSED - RaylsShield is ready!");
  } else {
    console.log("⚠️  SOME CHECKS FAILED - Review errors above");
  }
  console.log("=".repeat(70));

  // Quick links
  console.log("\n📍 Quick Links:");
  console.log(`   RaylsShield Explorer:`);
  console.log(`   https://devnet-explorer.rayls.com/address/${shieldAddress}`);
  console.log(`\n   Groth16Verifier Explorer:`);
  console.log(`   https://devnet-explorer.rayls.com/address/${verifierAddress}`);

  console.log("\n🔍 Next Steps:");
  console.log("   - View contracts in explorer (URLs above)");
  console.log("   - Run tests: npm test");
  console.log("   - Generate proof: npm run generate:proof");
  console.log("   - Run demo: npm run demo");
  console.log("   - Full validation: See VALIDATION_GUIDE.md");
  console.log("");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("\n❌ Validation check failed:");
    console.error(error);
    process.exit(1);
  });
