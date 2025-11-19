const hre = require("hardhat");

async function main() {
  console.log("Deploying RaylsShield to Rayls Devnet...");

  // Get the deployer account
  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying contracts with account:", deployer.address);

  const balance = await hre.ethers.provider.getBalance(deployer.address);
  console.log("Account balance:", hre.ethers.formatEther(balance), "USDgas");

  // Deploy Groth16Verifier first (use the real one generated from circuit)
  console.log("\nDeploying Groth16Verifier...");
  const Groth16Verifier = await hre.ethers.getContractFactory("contracts/Groth16Verifier.sol:Groth16Verifier");
  const verifier = await Groth16Verifier.deploy();
  await verifier.waitForDeployment();
  const verifierAddress = await verifier.getAddress();
  console.log("Groth16Verifier deployed to:", verifierAddress);

  // Rayls Devnet Endpoint Address (replace with actual address from Rayls docs)
  // This is a placeholder - you'll need to get the actual endpoint address
  const RAYLS_ENDPOINT_ADDRESS = process.env.RAYLS_ENDPOINT_ADDRESS || "0x0000000000000000000000000000000000000000";

  if (RAYLS_ENDPOINT_ADDRESS === "0x0000000000000000000000000000000000000000") {
    console.warn("\n⚠️  WARNING: Using placeholder endpoint address!");
    console.warn("Set RAYLS_ENDPOINT_ADDRESS in your .env file with the actual Rayls endpoint address");
  }

  // Deploy RaylsShield
  console.log("\nDeploying RaylsShield...");
  const RaylsShield = await hre.ethers.getContractFactory("RaylsShield");
  const raylsShield = await RaylsShield.deploy(
    RAYLS_ENDPOINT_ADDRESS,
    verifierAddress
  );
  await raylsShield.waitForDeployment();
  const raylsShieldAddress = await raylsShield.getAddress();
  console.log("RaylsShield deployed to:", raylsShieldAddress);

  // Verification info
  console.log("\n" + "=".repeat(60));
  console.log("Deployment Summary");
  console.log("=".repeat(60));
  console.log("Network:", hre.network.name);
  console.log("Groth16Verifier:", verifierAddress);
  console.log("RaylsShield:", raylsShieldAddress);
  console.log("Rayls Endpoint:", RAYLS_ENDPOINT_ADDRESS);
  console.log("=".repeat(60));

  // Save deployment addresses
  const fs = require("fs");
  const deploymentInfo = {
    network: hre.network.name,
    chainId: hre.network.config.chainId,
    contracts: {
      Groth16Verifier: verifierAddress,
      RaylsShield: raylsShieldAddress,
    },
    raylsEndpoint: RAYLS_ENDPOINT_ADDRESS,
    timestamp: new Date().toISOString(),
  };

  const deploymentsDir = "./deployments";
  if (!fs.existsSync(deploymentsDir)) {
    fs.mkdirSync(deploymentsDir);
  }

  fs.writeFileSync(
    `${deploymentsDir}/${hre.network.name}.json`,
    JSON.stringify(deploymentInfo, null, 2)
  );

  console.log(`\nDeployment info saved to ${deploymentsDir}/${hre.network.name}.json`);

  // Wait for block confirmations if on mainnet/testnet
  if (hre.network.name === "raylsDevnet") {
    console.log("\nWaiting for block confirmations...");
    await verifier.deploymentTransaction().wait(3);
    await raylsShield.deploymentTransaction().wait(3);
    console.log("✅ Confirmed!");
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
