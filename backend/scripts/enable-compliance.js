const hre = require("hardhat");
const { ethers } = require("hardhat");

async function main() {
  console.log("\n🔒 Enabling Compliance Mode on RaylsShieldPool");
  console.log("=".repeat(70));

  // Get deployer account
  const [deployer] = await ethers.getSigners();
  const balance = await ethers.provider.getBalance(deployer.address);

  console.log("\nDeployer:", deployer.address);
  console.log("Balance:", ethers.formatEther(balance), "USDgas\n");

  // Load latest deployment
  const deploymentData = require("../deployments/pool-raylsDevnet-latest.json");
  const poolAddress = deploymentData.contracts.RaylsShieldPool.address;
  const poseidonAddress = deploymentData.contracts.RaylsShieldPool.libraries.PoseidonT2;

  console.log("Pool Address:", poolAddress);
  console.log("Poseidon Library:", poseidonAddress);
  console.log("Network:", hre.network.name);
  console.log();

  // Get contract instance (with library linking)
  const RaylsShieldPool = await ethers.getContractFactory("RaylsShieldPool", {
    libraries: {
      "contracts/PoseidonT2.sol:PoseidonT2": poseidonAddress
    }
  });
  const pool = RaylsShieldPool.attach(poolAddress);

  // Check current compliance status
  const currentStatus = await pool.complianceRequired();
  console.log("Current Compliance Mode:", currentStatus ? "ENABLED ✅" : "DISABLED ❌");

  if (currentStatus) {
    console.log("\n⚠️  Compliance is already enabled!");
    return;
  }

  // Enable compliance
  console.log("\nEnabling compliance mode...");
  const tx = await pool.setComplianceRequired(true);
  console.log("Transaction hash:", tx.hash);

  console.log("Waiting for confirmation...");
  await tx.wait();

  // Verify
  const newStatus = await pool.complianceRequired();
  console.log("\n✅ Compliance Mode:", newStatus ? "ENABLED ✅" : "DISABLED ❌");

  // Get AML threshold
  const amlThreshold = await pool.AML_THRESHOLD();
  console.log("AML Threshold:", ethers.formatEther(amlThreshold), "USDgas");

  console.log("\n" + "=".repeat(70));
  console.log("✅ COMPLIANCE MODE ACTIVATED");
  console.log("=".repeat(70));
  console.log("\nImportant:");
  console.log("- All withdrawals now require compliance proofs");
  console.log("- Amounts must be below $10,000 USDgas");
  console.log("- Frontend will automatically generate compliance proofs");
  console.log();
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
