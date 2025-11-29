const hre = require("hardhat");
const fs = require("fs");
const path = require("path");

async function main() {
  console.log("\n🛡️  RaylsShield Pool - Deployment Script");
  console.log("=".repeat(70));
  console.log();

  const [deployer] = await hre.ethers.getSigners();
  const network = hre.network.name;

  console.log("Network:", network);
  console.log("Deployer:", deployer.address);
  console.log("Balance:", hre.ethers.formatEther(await hre.ethers.provider.getBalance(deployer.address)), "USDgas");
  console.log();

  // Get configuration from environment or use defaults
  const fixedDenomination = process.env.FIXED_DENOMINATION
    ? hre.ethers.parseEther(process.env.FIXED_DENOMINATION)
    : 0; // 0 = variable amounts

  console.log("Configuration:");
  console.log("  Fixed Denomination:", fixedDenomination === 0n ? "Variable amounts" : hre.ethers.formatEther(fixedDenomination) + " USDgas");
  console.log();

  // Step 1: Deploy Privacy Verifier
  console.log("Step 1: Deploying Privacy Verifier...");
  console.log("-".repeat(70));

  const PrivacyVerifier = await hre.ethers.getContractFactory("contracts/PrivacyVerifier.sol:Verifier");
  const privacyVerifier = await PrivacyVerifier.deploy();
  await privacyVerifier.waitForDeployment();
  const privacyVerifierAddress = await privacyVerifier.getAddress();

  console.log("✅ Privacy Verifier deployed at:", privacyVerifierAddress);
  console.log();

  // Step 2: Deploy Compliance Verifier
  console.log("Step 2: Deploying Compliance Verifier...");
  console.log("-".repeat(70));

  const ComplianceVerifier = await hre.ethers.getContractFactory("contracts/ComplianceVerifier.sol:Verifier");
  const complianceVerifier = await ComplianceVerifier.deploy();
  await complianceVerifier.waitForDeployment();
  const complianceVerifierAddress = await complianceVerifier.getAddress();

  console.log("✅ Compliance Verifier deployed at:", complianceVerifierAddress);
  console.log();

  // Step 3: Deploy PoseidonT2 Library
  console.log("Step 3: Deploying PoseidonT2 Library...");
  console.log("-".repeat(70));

  const PoseidonT2 = await hre.ethers.getContractFactory("PoseidonT2");
  const poseidonT2 = await PoseidonT2.deploy();
  await poseidonT2.waitForDeployment();
  const poseidonT2Address = await poseidonT2.getAddress();

  console.log("✅ PoseidonT2 Library deployed at:", poseidonT2Address);
  console.log();

  // Step 4: Deploy RaylsShieldPool (with library linking)
  console.log("Step 4: Deploying RaylsShieldPool...");
  console.log("-".repeat(70));

  const RaylsShieldPool = await hre.ethers.getContractFactory("RaylsShieldPool", {
    libraries: {
      PoseidonT2: poseidonT2Address,
    },
  });
  const pool = await RaylsShieldPool.deploy(
    privacyVerifierAddress,
    complianceVerifierAddress,
    fixedDenomination
  );
  await pool.waitForDeployment();
  const poolAddress = await pool.getAddress();

  console.log("✅ RaylsShieldPool deployed at:", poolAddress);
  console.log();

  // Step 5: Verify deployment
  console.log("Step 5: Verifying deployment...");
  console.log("-".repeat(70));

  const owner = await pool.owner();
  const pvAddress = await pool.privacyVerifier();
  const cvAddress = await pool.complianceVerifier();
  const denomination = await pool.fixedDenomination();
  const complianceRequired = await pool.complianceRequired();

  console.log("  Owner:", owner);
  console.log("  Privacy Verifier:", pvAddress);
  console.log("  Compliance Verifier:", cvAddress);
  console.log("  Fixed Denomination:", denomination === 0n ? "Variable" : hre.ethers.formatEther(denomination) + " USDgas");
  console.log("  Compliance Required:", complianceRequired);
  console.log();

  // Step 6: Save deployment info
  console.log("Step 6: Saving deployment info...");
  console.log("-".repeat(70));

  const deploymentInfo = {
    network: network,
    chainId: (await hre.ethers.provider.getNetwork()).chainId.toString(),
    timestamp: new Date().toISOString(),
    deployer: deployer.address,
    contracts: {
      RaylsShieldPool: {
        address: poolAddress,
        constructorArgs: [
          privacyVerifierAddress,
          complianceVerifierAddress,
          fixedDenomination.toString()
        ],
        libraries: {
          PoseidonT2: poseidonT2Address
        }
      },
      PrivacyVerifier: {
        address: privacyVerifierAddress
      },
      ComplianceVerifier: {
        address: complianceVerifierAddress
      },
      PoseidonT2: {
        address: poseidonT2Address
      }
    },
    configuration: {
      fixedDenomination: fixedDenomination.toString(),
      complianceRequired: complianceRequired
    }
  };

  // Create deployments directory if it doesn't exist
  const deploymentsDir = path.join(__dirname, "..", "deployments");
  if (!fs.existsSync(deploymentsDir)) {
    fs.mkdirSync(deploymentsDir, { recursive: true });
  }

  // Save with timestamp
  const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
  const filename = `pool-${network}-${timestamp}.json`;
  const filepath = path.join(deploymentsDir, filename);
  fs.writeFileSync(filepath, JSON.stringify(deploymentInfo, null, 2));

  console.log("✅ Deployment info saved to:", filename);

  // Save as latest
  const latestFilepath = path.join(deploymentsDir, `pool-${network}-latest.json`);
  fs.writeFileSync(latestFilepath, JSON.stringify(deploymentInfo, null, 2));

  console.log("✅ Latest deployment info saved to:", `pool-${network}-latest.json`);
  console.log();

  // Summary
  console.log("=".repeat(70));
  console.log("✅ DEPLOYMENT COMPLETED SUCCESSFULLY!");
  console.log("=".repeat(70));
  console.log();
  console.log("Contract Addresses:");
  console.log("  RaylsShieldPool:      ", poolAddress);
  console.log("  Privacy Verifier:     ", privacyVerifierAddress);
  console.log("  Compliance Verifier:  ", complianceVerifierAddress);
  console.log();
  console.log("Next Steps:");
  console.log("  1. Test the pool:");
  console.log("     npx hardhat test test/RaylsShieldPool.integration.test.js");
  console.log();
  console.log("  2. Run the demo:");
  console.log("     npx hardhat run scripts/demo-pool.js --network", network);
  console.log();

  if (network === "raylsDevnet") {
    console.log("  3. Verify contracts on explorer:");
    console.log("     npx hardhat verify --network raylsDevnet", privacyVerifierAddress);
    console.log("     npx hardhat verify --network raylsDevnet", complianceVerifierAddress);
    console.log("     npx hardhat verify --network raylsDevnet", poolAddress,
      `"${privacyVerifierAddress}" "${complianceVerifierAddress}" "${fixedDenomination}"`);
    console.log();
  }

  console.log("=".repeat(70));
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("\n❌ Deployment failed:");
    console.error(error);
    process.exit(1);
  });
