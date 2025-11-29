const { expect } = require("chai");
const { ethers } = require("hardhat");
const { generateProof, formatProofForSolidity } = require("../scripts/generate-proof");

describe("RaylsShieldPool Integration Tests", function () {
  let pool;
  let privacyVerifier;
  let complianceVerifier;
  let owner;
  let alice;
  let bob;

  // Test amounts
  const DEPOSIT_AMOUNT = ethers.parseEther("1"); // 1 USDgas
  const FIXED_DENOMINATION = ethers.parseEther("5"); // 5 USDgas for fixed tests

  beforeEach(async function () {
    [owner, alice, bob] = await ethers.getSigners();

    // Deploy real Groth16 Privacy Verifier
    const Groth16Verifier = await ethers.getContractFactory("contracts/Groth16Verifier.sol:Groth16Verifier");
    privacyVerifier = await Groth16Verifier.deploy();
    await privacyVerifier.waitForDeployment();

    // Deploy Compliance Verifier
    const ComplianceVerifierContract = await ethers.getContractFactory("contracts/ComplianceVerifier.sol:Groth16Verifier");
    complianceVerifier = await ComplianceVerifierContract.deploy();
    await complianceVerifier.waitForDeployment();

    // Deploy RaylsShieldPool with variable denomination (0)
    const RaylsShieldPool = await ethers.getContractFactory("RaylsShieldPool");
    pool = await RaylsShieldPool.deploy(
      await privacyVerifier.getAddress(),
      await complianceVerifier.getAddress(),
      0 // Variable amounts
    );
    await pool.waitForDeployment();
  });

  describe("Deployment", function () {
    it("Should set the correct owner", async function () {
      expect(await pool.owner()).to.equal(owner.address);
    });

    it("Should set the correct verifiers", async function () {
      expect(await pool.privacyVerifier()).to.equal(await privacyVerifier.getAddress());
      expect(await pool.complianceVerifier()).to.equal(await complianceVerifier.getAddress());
    });

    it("Should have compliance disabled by default", async function () {
      expect(await pool.complianceRequired()).to.equal(false);
    });

    it("Should have zero initial deposits", async function () {
      const stats = await pool.getPoolStats();
      expect(stats.totalDep).to.equal(0);
      expect(stats.totalWith).to.equal(0);
      expect(stats.active).to.equal(0);
      expect(stats.balance).to.equal(0);
    });

    it("Should have correct denomination setting", async function () {
      expect(await pool.fixedDenomination()).to.equal(0);
    });
  });

  describe("Deposits", function () {
    it("Should allow deposit with valid commitment", async function () {
      const commitment = ethers.id("test_commitment_1");

      await expect(
        pool.connect(alice).deposit(commitment, { value: DEPOSIT_AMOUNT })
      ).to.emit(pool, "DepositMade")
        .withArgs(commitment, DEPOSIT_AMOUNT, await pool.totalDeposits());
    });

    it("Should reject deposit without USDgas", async function () {
      const commitment = ethers.id("test_commitment_2");

      await expect(
        pool.connect(alice).deposit(commitment, { value: 0 })
      ).to.be.revertedWith("Must send USDgas");
    });

    it("Should reject duplicate commitment", async function () {
      const commitment = ethers.id("test_commitment_3");

      // First deposit succeeds
      await pool.connect(alice).deposit(commitment, { value: DEPOSIT_AMOUNT });

      // Second deposit with same commitment fails
      await expect(
        pool.connect(bob).deposit(commitment, { value: DEPOSIT_AMOUNT })
      ).to.be.revertedWith("Commitment already exists");
    });

    it("Should track commitment as used", async function () {
      const commitment = ethers.id("test_commitment_4");

      expect(await pool.isCommitmentUsed(commitment)).to.be.false;

      await pool.connect(alice).deposit(commitment, { value: DEPOSIT_AMOUNT });

      expect(await pool.isCommitmentUsed(commitment)).to.be.true;
    });

    it("Should store deposit information correctly", async function () {
      const commitment = ethers.id("test_commitment_5");

      const tx = await pool.connect(alice).deposit(commitment, { value: DEPOSIT_AMOUNT });
      const receipt = await tx.wait();
      const block = await ethers.provider.getBlock(receipt.blockNumber);

      const depositInfo = await pool.getDepositInfo(commitment);

      expect(depositInfo.amount).to.equal(DEPOSIT_AMOUNT);
      expect(depositInfo.timestamp).to.equal(block.timestamp);
      expect(depositInfo.depositor).to.equal(alice.address);
      expect(depositInfo.withdrawn).to.be.false;
    });

    it("Should update pool statistics", async function () {
      const commitment = ethers.id("test_commitment_6");

      const statsBefore = await pool.getPoolStats();

      await pool.connect(alice).deposit(commitment, { value: DEPOSIT_AMOUNT });

      const statsAfter = await pool.getPoolStats();

      expect(statsAfter.totalDep).to.equal(statsBefore.totalDep + 1n);
      expect(statsAfter.active).to.equal(statsBefore.active + 1n);
      expect(statsAfter.balance).to.equal(statsBefore.balance + DEPOSIT_AMOUNT);
    });

    it("Should increase anonymity set size", async function () {
      const initialSize = await pool.getAnonymitySetSize();

      const commitment = ethers.id("test_commitment_7");
      await pool.connect(alice).deposit(commitment, { value: DEPOSIT_AMOUNT });

      const finalSize = await pool.getAnonymitySetSize();
      expect(finalSize).to.equal(initialSize + 1n);
    });
  });

  describe("Fixed Denomination", function () {
    let fixedPool;

    beforeEach(async function () {
      const RaylsShieldPool = await ethers.getContractFactory("RaylsShieldPool");
      fixedPool = await RaylsShieldPool.deploy(
        await privacyVerifier.getAddress(),
        await complianceVerifier.getAddress(),
        FIXED_DENOMINATION
      );
      await fixedPool.waitForDeployment();
    });

    it("Should accept deposit matching fixed denomination", async function () {
      const commitment = ethers.id("fixed_commitment_1");

      await expect(
        fixedPool.connect(alice).deposit(commitment, { value: FIXED_DENOMINATION })
      ).to.emit(fixedPool, "DepositMade");
    });

    it("Should reject deposit not matching fixed denomination", async function () {
      const commitment = ethers.id("fixed_commitment_2");

      await expect(
        fixedPool.connect(alice).deposit(commitment, { value: DEPOSIT_AMOUNT })
      ).to.be.revertedWith("Must match fixed denomination");
    });
  });

  describe("Withdrawals with ZK Proofs", function () {
    let commitment;
    let secret;
    let nullifier;
    let recipient;
    let amount;

    beforeEach(async function () {
      // Setup deposit first
      secret = BigInt(123456789);
      nullifier = BigInt(987654321);
      recipient = BigInt("0x" + bob.address.slice(2).padStart(64, "0"));
      amount = BigInt(DEPOSIT_AMOUNT.toString());

      // Generate commitment off-chain (simplified for testing)
      commitment = ethers.id(`${secret}_${nullifier}_${amount}`);

      // Alice deposits
      await pool.connect(alice).deposit(commitment, { value: DEPOSIT_AMOUNT });
    });

    it("Should withdraw with valid ZK proof", async function () {
      // Generate real ZK proof
      const { proof, publicSignals } = await generateProof({
        secret,
        nullifier,
        recipient,
        amount,
      });

      const formattedProof = formatProofForSolidity(proof, publicSignals);

      const bobBalanceBefore = await ethers.provider.getBalance(bob.address);

      await expect(
        pool.withdraw(
          bob.address,
          DEPOSIT_AMOUNT,
          formattedProof.a,
          formattedProof.b,
          formattedProof.c,
          formattedProof.publicSignals
        )
      ).to.emit(pool, "WithdrawalMade");

      const bobBalanceAfter = await ethers.provider.getBalance(bob.address);
      expect(bobBalanceAfter).to.be.gt(bobBalanceBefore);
    });

    it("Should mark nullifier as used after withdrawal", async function () {
      const { proof, publicSignals } = await generateProof({
        secret,
        nullifier,
        recipient,
        amount,
      });

      const formattedProof = formatProofForSolidity(proof, publicSignals);
      const nullifierHash = ethers.toBeHex(formattedProof.publicSignals[0], 32);

      expect(await pool.isNullifierUsed(nullifierHash)).to.be.false;

      await pool.withdraw(
        bob.address,
        DEPOSIT_AMOUNT,
        formattedProof.a,
        formattedProof.b,
        formattedProof.c,
        formattedProof.publicSignals
      );

      expect(await pool.isNullifierUsed(nullifierHash)).to.be.true;
    });

    it("Should prevent double withdrawal with same nullifier", async function () {
      const { proof, publicSignals } = await generateProof({
        secret,
        nullifier,
        recipient,
        amount,
      });

      const formattedProof = formatProofForSolidity(proof, publicSignals);

      // First withdrawal succeeds
      await pool.withdraw(
        bob.address,
        DEPOSIT_AMOUNT,
        formattedProof.a,
        formattedProof.b,
        formattedProof.c,
        formattedProof.publicSignals
      );

      // Second withdrawal with same nullifier fails
      await expect(
        pool.withdraw(
          bob.address,
          DEPOSIT_AMOUNT,
          formattedProof.a,
          formattedProof.b,
          formattedProof.c,
          formattedProof.publicSignals
        )
      ).to.be.revertedWith("RaylsShield: Nullifier already used");
    });

    it("Should update pool statistics after withdrawal", async function () {
      const { proof, publicSignals } = await generateProof({
        secret,
        nullifier,
        recipient,
        amount,
      });

      const formattedProof = formatProofForSolidity(proof, publicSignals);

      const statsBefore = await pool.getPoolStats();

      await pool.withdraw(
        bob.address,
        DEPOSIT_AMOUNT,
        formattedProof.a,
        formattedProof.b,
        formattedProof.c,
        formattedProof.publicSignals
      );

      const statsAfter = await pool.getPoolStats();

      expect(statsAfter.totalWith).to.equal(statsBefore.totalWith + 1n);
      expect(statsAfter.active).to.equal(statsBefore.active - 1n);
      expect(statsAfter.balance).to.equal(statsBefore.balance - DEPOSIT_AMOUNT);
    });

    it("Should reject withdrawal with invalid recipient", async function () {
      const { proof, publicSignals } = await generateProof({
        secret,
        nullifier,
        recipient,
        amount,
      });

      const formattedProof = formatProofForSolidity(proof, publicSignals);

      await expect(
        pool.withdraw(
          ethers.ZeroAddress,
          DEPOSIT_AMOUNT,
          formattedProof.a,
          formattedProof.b,
          formattedProof.c,
          formattedProof.publicSignals
        )
      ).to.be.revertedWith("Invalid recipient");
    });

    it("Should reject withdrawal with zero amount", async function () {
      const { proof, publicSignals } = await generateProof({
        secret,
        nullifier,
        recipient,
        amount,
      });

      const formattedProof = formatProofForSolidity(proof, publicSignals);

      await expect(
        pool.withdraw(
          bob.address,
          0,
          formattedProof.a,
          formattedProof.b,
          formattedProof.c,
          formattedProof.publicSignals
        )
      ).to.be.revertedWith("Invalid amount");
    });
  });

  describe("Admin Functions", function () {
    it("Should allow owner to toggle compliance", async function () {
      expect(await pool.complianceRequired()).to.be.false;

      await pool.setComplianceRequired(true);

      expect(await pool.complianceRequired()).to.be.true;
    });

    it("Should not allow non-owner to toggle compliance", async function () {
      await expect(
        pool.connect(alice).setComplianceRequired(true)
      ).to.be.revertedWithCustomError(pool, "OwnableUnauthorizedAccount");
    });

    it("Should allow owner to update fixed denomination", async function () {
      const newDenomination = ethers.parseEther("10");

      await expect(
        pool.setFixedDenomination(newDenomination)
      ).to.emit(pool, "DenominationChanged")
        .withArgs(0, newDenomination);

      expect(await pool.fixedDenomination()).to.equal(newDenomination);
    });

    it("Should allow owner to update verifiers", async function () {
      const newVerifier = await privacyVerifier.getAddress();

      await pool.updatePrivacyVerifier(newVerifier);
      expect(await pool.privacyVerifier()).to.equal(newVerifier);

      await pool.updateComplianceVerifier(newVerifier);
      expect(await pool.complianceVerifier()).to.equal(newVerifier);
    });

    it("Should not allow non-owner to update verifiers", async function () {
      const newVerifier = await privacyVerifier.getAddress();

      await expect(
        pool.connect(alice).updatePrivacyVerifier(newVerifier)
      ).to.be.revertedWithCustomError(pool, "OwnableUnauthorizedAccount");
    });

    it("Should reject emergency withdrawal with active deposits", async function () {
      const commitment = ethers.id("test_emergency");
      await pool.connect(alice).deposit(commitment, { value: DEPOSIT_AMOUNT });

      await expect(
        pool.emergencyWithdraw()
      ).to.be.revertedWith("Cannot withdraw with active deposits");
    });

    it("Should allow emergency withdrawal with no active deposits", async function () {
      // Send some ETH directly to contract
      await owner.sendTransaction({
        to: await pool.getAddress(),
        value: DEPOSIT_AMOUNT
      });

      expect(await pool.getBalance()).to.be.gt(0);

      // Emergency withdraw should work (no active deposits)
      await pool.emergencyWithdraw();

      expect(await pool.getBalance()).to.equal(0);
    });
  });

  describe("View Functions", function () {
    it("Should return correct balance", async function () {
      const commitment = ethers.id("test_balance");
      await pool.connect(alice).deposit(commitment, { value: DEPOSIT_AMOUNT });

      const balance = await pool.getBalance();
      expect(balance).to.equal(DEPOSIT_AMOUNT);
    });

    it("Should return correct anonymity set size", async function () {
      const initialSize = await pool.getAnonymitySetSize();

      const commitment1 = ethers.id("test_anon_1");
      const commitment2 = ethers.id("test_anon_2");

      await pool.connect(alice).deposit(commitment1, { value: DEPOSIT_AMOUNT });
      await pool.connect(bob).deposit(commitment2, { value: DEPOSIT_AMOUNT });

      const finalSize = await pool.getAnonymitySetSize();
      expect(finalSize).to.equal(initialSize + 2n);
    });

    it("Should return correct pool stats", async function () {
      const commitment = ethers.id("test_stats");
      await pool.connect(alice).deposit(commitment, { value: DEPOSIT_AMOUNT });

      const stats = await pool.getPoolStats();

      expect(stats.totalDep).to.equal(1);
      expect(stats.totalWith).to.equal(0);
      expect(stats.active).to.equal(1);
      expect(stats.balance).to.equal(DEPOSIT_AMOUNT);
      expect(stats.denomination).to.equal(0);
    });
  });

  describe("Receive Function", function () {
    it("Should reject direct USDgas transfers", async function () {
      await expect(
        alice.sendTransaction({
          to: await pool.getAddress(),
          value: DEPOSIT_AMOUNT
        })
      ).to.be.revertedWith("Use deposit() function");
    });
  });
});
