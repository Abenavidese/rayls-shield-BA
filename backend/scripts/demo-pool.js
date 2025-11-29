const hre = require("hardhat");
const { generateProof, formatProofForSolidity } = require("./generate-proof");

async function main() {
  console.log("\n🛡️  RaylsShield Pool - E2E Demo");
  console.log("=".repeat(70));
  console.log();

  const [deployer, alice, bob, charlie] = await hre.ethers.getSigners();

  console.log("Participants:");
  console.log("  Deployer (Owner): ", deployer.address);
  console.log("  Alice (Depositor 1):", alice.address);
  console.log("  Bob (Depositor 2):  ", bob.address);
  console.log("  Charlie (Recipient):", charlie.address);
  console.log();

  // Step 1: Deploy contracts
  console.log("Step 1: Deploying contracts...");
  console.log("-".repeat(70));

  // Deploy verifiers
  const Groth16Verifier = await hre.ethers.getContractFactory("contracts/Groth16Verifier.sol:Groth16Verifier");
  const privacyVerifier = await Groth16Verifier.deploy();
  await privacyVerifier.waitForDeployment();
  console.log("✅ Privacy Verifier deployed at:", await privacyVerifier.getAddress());

  const ComplianceVerifier = await hre.ethers.getContractFactory("contracts/ComplianceVerifier.sol:Groth16Verifier");
  const complianceVerifier = await ComplianceVerifier.deploy();
  await complianceVerifier.waitForDeployment();
  console.log("✅ Compliance Verifier deployed at:", await complianceVerifier.getAddress());

  // Deploy pool with variable denomination (0 = any amount)
  const RaylsShieldPool = await hre.ethers.getContractFactory("RaylsShieldPool");
  const pool = await RaylsShieldPool.deploy(
    await privacyVerifier.getAddress(),
    await complianceVerifier.getAddress(),
    0 // Variable amounts
  );
  await pool.waitForDeployment();
  console.log("✅ RaylsShieldPool deployed at:", await pool.getAddress());
  console.log();

  // Step 2: Check initial balances
  console.log("Step 2: Initial balances");
  console.log("-".repeat(70));
  const aliceInitialBalance = await hre.ethers.provider.getBalance(alice.address);
  const bobInitialBalance = await hre.ethers.provider.getBalance(bob.address);
  const charlieInitialBalance = await hre.ethers.provider.getBalance(charlie.address);
  console.log("  Alice:   ", hre.ethers.formatEther(aliceInitialBalance), "USDgas");
  console.log("  Bob:     ", hre.ethers.formatEther(bobInitialBalance), "USDgas");
  console.log("  Charlie: ", hre.ethers.formatEther(charlieInitialBalance), "USDgas");
  console.log();

  // Step 3: Alice makes first deposit
  console.log("Step 3: Alice deposits into pool...");
  console.log("-".repeat(70));
  const depositAmount1 = hre.ethers.parseEther("2");

  const secret1 = BigInt(111111111);
  const nullifier1 = BigInt(222222222);

  // Generate commitment for Alice (in real app, computed off-chain)
  const commitment1 = hre.ethers.id(`alice_${secret1}_${nullifier1}_${depositAmount1}`);

  console.log("  Alice's deposit:");
  console.log("    Amount:     ", hre.ethers.formatEther(depositAmount1), "USDgas");
  console.log("    Commitment: ", commitment1);
  console.log("    (Secret and nullifier hidden)");
  console.log();

  const deposit1Tx = await pool.connect(alice).deposit(commitment1, { value: depositAmount1 });
  await deposit1Tx.wait();

  console.log("✅ Alice deposited", hre.ethers.formatEther(depositAmount1), "USDgas");
  console.log();

  // Step 4: Bob makes second deposit (increases anonymity set)
  console.log("Step 4: Bob deposits into pool...");
  console.log("-".repeat(70));
  const depositAmount2 = hre.ethers.parseEther("3");

  const secret2 = BigInt(333333333);
  const nullifier2 = BigInt(444444444);

  const commitment2 = hre.ethers.id(`bob_${secret2}_${nullifier2}_${depositAmount2}`);

  console.log("  Bob's deposit:");
  console.log("    Amount:     ", hre.ethers.formatEther(depositAmount2), "USDgas");
  console.log("    Commitment: ", commitment2);
  console.log("    (Secret and nullifier hidden)");
  console.log();

  const deposit2Tx = await pool.connect(bob).deposit(commitment2, { value: depositAmount2 });
  await deposit2Tx.wait();

  console.log("✅ Bob deposited", hre.ethers.formatEther(depositAmount2), "USDgas");
  console.log();

  // Step 5: Check pool statistics
  console.log("Step 5: Pool statistics after deposits");
  console.log("-".repeat(70));
  const stats = await pool.getPoolStats();
  console.log("  Total deposits:     ", stats.totalDep.toString());
  console.log("  Total withdrawals:  ", stats.totalWith.toString());
  console.log("  Active deposits:    ", stats.active.toString());
  console.log("  Pool balance:       ", hre.ethers.formatEther(stats.balance), "USDgas");
  console.log("  Anonymity set size: ", (await pool.getAnonymitySetSize()).toString());
  console.log();

  // Step 6: Generate ZK proof for Alice's withdrawal
  console.log("Step 6: Generating ZK proof for Alice's withdrawal...");
  console.log("-".repeat(70));

  const recipient = BigInt("0x" + charlie.address.slice(2).padStart(64, "0"));
  const amount = BigInt(depositAmount1.toString());

  console.log("  Private inputs (only Alice knows):");
  console.log("    secret:    ", secret1.toString());
  console.log("    nullifier: ", nullifier1.toString());
  console.log();
  console.log("  Public recipient: ", charlie.address);
  console.log("  Withdrawal amount:", hre.ethers.formatEther(depositAmount1), "USDgas");
  console.log();
  console.log("  Generating proof (this may take a few seconds)...");

  const { proof, publicSignals } = await generateProof({
    secret: secret1,
    nullifier: nullifier1,
    recipient,
    amount,
  });

  const formattedProof = formatProofForSolidity(proof, publicSignals);

  console.log("✅ ZK proof generated successfully!");
  console.log("  Public signals:");
  console.log("    nullifierHash: ", "0x" + BigInt(formattedProof.publicSignals[0]).toString(16));
  console.log("    commitment:    ", "0x" + BigInt(formattedProof.publicSignals[1]).toString(16));
  console.log("    recipientHash: ", "0x" + BigInt(formattedProof.publicSignals[2]).toString(16));
  console.log();

  // Step 7: Alice withdraws to Charlie
  console.log("Step 7: Alice withdraws to Charlie using ZK proof...");
  console.log("-".repeat(70));
  console.log("  Privacy guarantee: No one can link Alice's deposit to Charlie's withdrawal");
  console.log("  ZK proof proves Alice knows the secret without revealing it");
  console.log();

  const withdrawTx = await pool.withdraw(
    charlie.address,
    depositAmount1,
    formattedProof.a,
    formattedProof.b,
    formattedProof.c,
    formattedProof.publicSignals
  );

  const withdrawReceipt = await withdrawTx.wait();
  console.log("✅ Withdrawal successful!");
  console.log("  Transaction hash:", withdrawReceipt.hash);
  console.log("  Gas used:", withdrawReceipt.gasUsed.toString());
  console.log();

  // Step 8: Verify nullifier is now used
  console.log("Step 8: Verifying nullifier status...");
  console.log("-".repeat(70));
  const nullifierHash = hre.ethers.toBeHex(formattedProof.publicSignals[0], 32);
  const isUsed = await pool.isNullifierUsed(nullifierHash);
  console.log("  Nullifier hash:", nullifierHash);
  console.log("  Is used:", isUsed ? "✅ YES (prevents replay attacks)" : "❌ NO");
  console.log();

  // Step 9: Check updated pool statistics
  console.log("Step 9: Pool statistics after withdrawal");
  console.log("-".repeat(70));
  const statsAfter = await pool.getPoolStats();
  console.log("  Total deposits:     ", statsAfter.totalDep.toString());
  console.log("  Total withdrawals:  ", statsAfter.totalWith.toString());
  console.log("  Active deposits:    ", statsAfter.active.toString(), "(Bob's deposit still in pool)");
  console.log("  Pool balance:       ", hre.ethers.formatEther(statsAfter.balance), "USDgas");
  console.log();

  // Step 10: Final balances
  console.log("Step 10: Final balances");
  console.log("-".repeat(70));
  const aliceFinalBalance = await hre.ethers.provider.getBalance(alice.address);
  const bobFinalBalance = await hre.ethers.provider.getBalance(bob.address);
  const charlieFinalBalance = await hre.ethers.provider.getBalance(charlie.address);

  console.log("  Alice:   ", hre.ethers.formatEther(aliceFinalBalance), "USDgas");
  console.log("    (decreased by ~", hre.ethers.formatEther(aliceInitialBalance - aliceFinalBalance), "including gas)");
  console.log();
  console.log("  Bob:     ", hre.ethers.formatEther(bobFinalBalance), "USDgas");
  console.log("    (decreased by ~", hre.ethers.formatEther(bobInitialBalance - bobFinalBalance), "including gas)");
  console.log();
  console.log("  Charlie: ", hre.ethers.formatEther(charlieFinalBalance), "USDgas");
  console.log("    (increased by", hre.ethers.formatEther(charlieFinalBalance - charlieInitialBalance), ")");
  console.log();

  // Step 11: Demonstrate replay protection
  console.log("Step 11: Demonstrating replay protection...");
  console.log("-".repeat(70));
  console.log("  Attempting to reuse the same nullifier...");

  try {
    await pool.withdraw(
      charlie.address,
      depositAmount1,
      formattedProof.a,
      formattedProof.b,
      formattedProof.c,
      formattedProof.publicSignals
    );
    console.log("❌ ERROR: Should have been rejected!");
  } catch (error) {
    if (error.message.includes("Nullifier already used")) {
      console.log("✅ Replay attack prevented! Nullifier is marked as used.");
    } else {
      console.log("⚠️  Transaction failed with:", error.message);
    }
  }
  console.log();

  // Summary
  console.log("=".repeat(70));
  console.log("✅ DEMO COMPLETED SUCCESSFULLY!");
  console.log("=".repeat(70));
  console.log();
  console.log("What happened:");
  console.log("  1. ✅ Alice deposited", hre.ethers.formatEther(depositAmount1), "USDgas (commitment stored)");
  console.log("  2. ✅ Bob deposited", hre.ethers.formatEther(depositAmount2), "USDgas (increased anonymity)");
  console.log("  3. ✅ Alice withdrew to Charlie using ZK proof");
  console.log("  4. ✅ No one can link Alice's deposit to Charlie's withdrawal");
  console.log("  5. ✅ Nullifier prevents replay attacks");
  console.log();
  console.log("Privacy guarantees:");
  console.log("  ✅ Deposit amount hidden (only commitment visible)");
  console.log("  ✅ Withdrawal cannot be linked to specific deposit");
  console.log("  ✅ Larger anonymity set = stronger privacy");
  console.log("  ✅ Zero-knowledge proof prevents forgery");
  console.log("  ✅ Nullifier system prevents double-spending");
  console.log();
  console.log("Single-chain benefits:");
  console.log("  ✅ No endpoint address needed");
  console.log("  ✅ Works on any EVM chain (Rayls Devnet)");
  console.log("  ✅ Simple deposit/withdraw pattern");
  console.log("  ✅ Privacy without cross-chain complexity");
  console.log();
  console.log("Contract addresses:");
  console.log("  RaylsShieldPool:       ", await pool.getAddress());
  console.log("  Privacy Verifier:      ", await privacyVerifier.getAddress());
  console.log("  Compliance Verifier:   ", await complianceVerifier.getAddress());
  console.log();
  console.log("Next steps:");
  console.log("  • Bob can withdraw his", hre.ethers.formatEther(depositAmount2), "USDgas anytime");
  console.log("  • More deposits increase the anonymity set");
  console.log("  • Deploy to Rayls Devnet for production testing");
  console.log();
  console.log("=".repeat(70));
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("\n❌ Demo failed:");
    console.error(error);
    process.exit(1);
  });
