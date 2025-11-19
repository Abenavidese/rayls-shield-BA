const hre = require("hardhat");
const fs = require("fs");

async function main() {
  console.log("=".repeat(60));
  console.log("RaylsShield Deployment Validation");
  console.log("=".repeat(60));

  // Read deployment info
  const network = hre.network.name;
  const deploymentPath = `./deployments/${network}.json`;

  if (!fs.existsSync(deploymentPath)) {
    console.error(`❌ Deployment file not found: ${deploymentPath}`);
    process.exit(1);
  }

  const deployment = JSON.parse(fs.readFileSync(deploymentPath, "utf8"));
  console.log("\n📋 Deployment Information:");
  console.log(`   Network: ${deployment.network}`);
  console.log(`   Chain ID: ${deployment.chainId}`);
  console.log(`   Timestamp: ${deployment.timestamp}`);

  // Get contract addresses
  const verifierAddress = deployment.contracts.Groth16Verifier;
  const raylsShieldAddress = deployment.contracts.RaylsShield;

  console.log("\n📍 Contract Addresses:");
  console.log(`   Groth16Verifier: ${verifierAddress}`);
  console.log(`   RaylsShield: ${raylsShieldAddress}`);

  // Validate Groth16Verifier
  console.log("\n🔍 Validating Groth16Verifier...");
  const verifierCode = await hre.ethers.provider.getCode(verifierAddress);
  if (verifierCode === "0x" || verifierCode === "0x0") {
    console.error("   ❌ Verifier contract not found at address");
    process.exit(1);
  }
  console.log("   ✅ Verifier contract deployed");

  // Validate RaylsShield
  console.log("\n🔍 Validating RaylsShield...");
  const raylsShieldCode = await hre.ethers.provider.getCode(raylsShieldAddress);
  if (raylsShieldCode === "0x" || raylsShieldCode === "0x0") {
    console.error("   ❌ RaylsShield contract not found at address");
    process.exit(1);
  }
  console.log("   ✅ RaylsShield contract deployed");

  // Get RaylsShield contract instance
  const RaylsShield = await hre.ethers.getContractFactory("RaylsShield");
  const raylsShield = RaylsShield.attach(raylsShieldAddress);

  // Check owner
  console.log("\n🔍 Checking RaylsShield configuration...");
  const [deployer] = await hre.ethers.getSigners();
  const owner = await raylsShield.owner();
  console.log(`   Owner: ${owner}`);
  console.log(`   Deployer: ${deployer.address}`);
  if (owner.toLowerCase() === deployer.address.toLowerCase()) {
    console.log("   ✅ Owner matches deployer");
  } else {
    console.log("   ⚠️  Owner does not match deployer");
  }

  // Check verifier
  const configuredVerifier = await raylsShield.verifier();
  console.log(`   Configured Verifier: ${configuredVerifier}`);
  if (configuredVerifier.toLowerCase() === verifierAddress.toLowerCase()) {
    console.log("   ✅ Verifier configured correctly");
  } else {
    console.error("   ❌ Verifier mismatch!");
  }

  // Check endpoint
  const endpoint = await raylsShield.endpoint();
  console.log(`   Rayls Endpoint: ${endpoint}`);
  if (endpoint === "0x0000000000000000000000000000000000000000") {
    console.log("   ⚠️  Using placeholder endpoint address");
    console.log("   📝 Note: Update RAYLS_ENDPOINT_ADDRESS in .env for production");
  } else {
    console.log("   ✅ Endpoint configured");
  }

  // Explorer links
  console.log("\n🌐 Block Explorer Links:");
  console.log(`   Groth16Verifier:`);
  console.log(`   https://devnet-explorer.rayls.com/address/${verifierAddress}`);
  console.log(`   RaylsShield:`);
  console.log(`   https://devnet-explorer.rayls.com/address/${raylsShieldAddress}`);

  console.log("\n" + "=".repeat(60));
  console.log("✅ Deployment validation completed successfully!");
  console.log("=".repeat(60));
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("\n❌ Validation failed:");
    console.error(error);
    process.exit(1);
  });
