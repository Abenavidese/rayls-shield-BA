# RaylsShield Pool - Quick Start Guide

## 🎯 What is RaylsShield Pool?

A **single-chain privacy mixer** for native USDgas using Zero-Knowledge proofs on Rayls Protocol. Similar to Tornado Cash, it allows users to deposit and withdraw USDgas with complete privacy.

### Key Features
✅ **Privacy for USDgas** (native gas token)
✅ **ZK-SNARKs** (Groth16 proofs with 128-bit support)
✅ **Single-chain** (no endpoint needed)
✅ **Nullifier system** prevents replay attacks
✅ **Variable or fixed denominations**
✅ **Full AML compliance** - Deposits and withdrawals protected
✅ **Compliance ZK proofs** - Prove amount < threshold without revealing exact amount
✅ **Enhanced circuit** - Supports large wei amounts (up to 10^38)

---

## 🚀 Quick Start

### Prerequisites
```bash
cd rayls-shield-BA/backend
npm install
```

### 1. Compile Contracts & Circuits
```bash
# Compile Solidity contracts
npm run compile

# Compile ZK circuits (if not already done)
npm run circom
```

### 2. Run Tests
```bash
# Run Pool integration tests
npx hardhat test test/RaylsShieldPool.integration.test.js
```

### 3. Run Local Demo
```bash
# Terminal 1: Start local Hardhat node
npm run node

# Terminal 2: Run E2E demo
npx hardhat run scripts/demo-pool.js --network localhost
```

### 4. Deploy to Rayls Devnet
```bash
# Setup .env file first
cp .env.example .env
# Edit .env and add:
# PRIVATE_KEY=your_private_key_here

# Deploy with variable denomination (any amount)
npx hardhat run scripts/deploy-pool.js --network raylsDevnet

# Deploy with fixed denomination (e.g., 5 USDgas)
FIXED_DENOMINATION=5 npx hardhat run scripts/deploy-pool.js --network raylsDevnet
```

---

## 📋 Contract Architecture

### Main Contract: `RaylsShieldPool.sol`

```
Privacy Pool Pattern:
┌─────────────────────────────────────────────────────────────┐
│  Deposit Phase                                              │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ 1. Alice generates secret + nullifier off-chain     │   │
│  │ 2. Alice computes commitment = Poseidon(s, n, amt)  │   │
│  │ 3. Alice deposits X USDgas + commitment to pool     │   │
│  │ 4. Pool stores commitment (hides Alice's identity)  │   │
│  └─────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
                            ⬇️  Time passes, anonymity grows
┌─────────────────────────────────────────────────────────────┐
│  Withdrawal Phase                                           │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ 5. Alice generates ZK proof (knows secret+nullifier)│   │
│  │ 6. Alice withdraws to Bob's address with proof      │   │
│  │ 7. Pool verifies proof ✓                            │   │
│  │ 8. Pool checks nullifier not used ✓                 │   │
│  │ 9. Pool sends X USDgas to Bob                       │   │
│  │ 10. No link between Alice's deposit and Bob         │   │
│  └─────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

---

## 🔐 Privacy Guarantees

| What's Hidden | How |
|---------------|-----|
| **Depositor-Recipient Link** | Commitment breaks correlation between deposit and withdrawal |
| **Amount** (optional) | Use fixed denomination to hide amounts in anonymity set |
| **Withdrawal Timing** | Can withdraw anytime, no time-lock required |
| **Replay Protection** | Nullifier prevents double-spending of same deposit |

---

## 💻 Usage Examples

### Deposit USDgas (JavaScript)

```javascript
const { ethers } = require("hardhat");

// 1. Generate commitment off-chain
const secret = BigInt(123456789);
const nullifier = BigInt(987654321);
const amount = ethers.parseEther("5");

// In real app, compute commitment with Poseidon hash
const commitment = computeCommitment(secret, nullifier, amount);

// 2. Deposit to pool
await pool.deposit(commitment, { value: amount });

console.log("Deposited! Keep secret and nullifier safe for withdrawal.");
```

### Withdraw USDgas with ZK Proof

```javascript
const { generateProof, formatProofForSolidity } = require("./scripts/generate-proof");

// 1. Generate ZK proof (proves you know secret + nullifier)
const { proof, publicSignals } = await generateProof({
  secret: BigInt(123456789),
  nullifier: BigInt(987654321),
  recipient: BigInt("0x" + recipientAddress.slice(2)),
  amount: BigInt(ethers.parseEther("5").toString())
});

const formattedProof = formatProofForSolidity(proof, publicSignals);

// 2. Withdraw to any address
await pool.withdraw(
  recipientAddress,
  ethers.parseEther("5"),
  formattedProof.a,
  formattedProof.b,
  formattedProof.c,
  formattedProof.publicSignals
);

console.log("Withdrawn! Privacy preserved via ZK proof.");
```

### Check Pool Statistics

```javascript
const stats = await pool.getPoolStats();

console.log("Total deposits:", stats.totalDep);
console.log("Active deposits:", stats.active);
console.log("Anonymity set size:", stats.active); // Larger = better privacy
console.log("Pool balance:", ethers.formatEther(stats.balance), "USDgas");
```

---

## 📊 Deployment Info

Deployment creates 4 contracts:
1. **PoseidonT2 Library** (ZK-friendly hash library)
2. **Privacy Verifier** (Groth16Verifier.sol)
3. **Compliance Verifier** (ComplianceVerifier.sol)
4. **RaylsShieldPool** (main contract)

Deployment info saved to:
- `deployments/pool-{network}-{timestamp}.json`
- `deployments/pool-{network}-latest.json`

### Latest Deployment (Rayls Devnet - Nov 29, 2025)

**Deployed Contracts:**
- **RaylsShieldPool**: `0x7DF45676cb5Cc92DF8DD71b72745065391c7C6Be`
- **Privacy Verifier**: `0xc853De1e8a8a3Ead0e2A4A39084B792e1e58Dd53`
- **Compliance Verifier**: `0xF1925bE98A8Cb667CD65b5FadD171011E2832bca`
- **PoseidonT2 Library**: `0x7A3C527d48390c5690Fe7d81D021d83B278b6Eae`

**Configuration:**
- **Chain ID**: 123123 (Rayls Devnet)
- **Compliance Mode**: ✅ ENABLED
- **AML Threshold**: 10,000 USDgas (10^22 wei)
- **Fixed Denomination**: Variable (0 = any amount allowed, up to AML threshold)

**Explorer**: https://devnet-explorer.rayls.com

---

## 🔒 Compliance Mode

### AML Protection (ENABLED by default on Devnet)

The RaylsShieldPool includes full AML (Anti-Money Laundering) protection:

**How it works:**
1. **Deposit Protection**: Deposits >= $10,000 USDgas are automatically rejected
2. **Withdrawal Protection**: ZK proof must prove `amount < AML_THRESHOLD`
3. **No Hardcoded Amounts**: AML threshold is a constant in the contract (10,000 USDgas)
4. **Privacy Preserved**: Exact amount is never revealed, only that it's below threshold

**Circuit Enhancement:**
- Uses 128-bit comparisons (supports amounts up to 10^38)
- Handles large wei values (10,000 USDgas = 10^22 wei)
- Compliance circuit has 4 public signals vs 3 in privacy circuit

**Activating Compliance:**
```bash
# Enable compliance mode on deployed contract
npx hardhat run scripts/enable-compliance.js --network raylsDevnet

# Disable compliance mode (owner only)
npx hardhat run scripts/disable-compliance.js --network raylsDevnet
```

**Frontend Integration:**
- Auto-detects compliance mode from contract
- Generates compliance proofs when required
- Shows AML threshold in UI

---

## ⚙️ Configuration

### Environment Variables (`.env`)
```bash
PRIVATE_KEY=your_wallet_private_key
FIXED_DENOMINATION=5              # Optional: 5 USDgas fixed deposits
```

### Fixed vs Variable Denomination

**Variable Denomination (default: 0)**
- Allows deposits of any amount
- Less privacy (amount visible on-chain)
- Flexible for users

**Fixed Denomination (e.g., 5 USDgas)**
- All deposits must be exactly 5 USDgas
- Better privacy (amount hidden in anonymity set)
- More restrictive but stronger privacy

---

## 🧪 Testing

### Run All Tests
```bash
npx hardhat test test/RaylsShieldPool.integration.test.js
```

### Test Coverage
- ✅ Deployment verification
- ✅ Deposit with commitments
- ✅ Withdrawal with ZK proofs
- ✅ Nullifier tracking (replay protection)
- ✅ Fixed denomination enforcement
- ✅ Admin functions (compliance, verifiers)
- ✅ Pool statistics and view functions

---

## 🔍 Verification (Rayls Devnet)

After deployment, verify contracts:

```bash
# Privacy Verifier
npx hardhat verify --network raylsDevnet <PRIVACY_VERIFIER_ADDRESS>

# Compliance Verifier
npx hardhat verify --network raylsDevnet <COMPLIANCE_VERIFIER_ADDRESS>

# Pool
npx hardhat verify --network raylsDevnet <POOL_ADDRESS> \
  "<PRIVACY_VERIFIER_ADDRESS>" \
  "<COMPLIANCE_VERIFIER_ADDRESS>" \
  "0"  # or fixed denomination amount
```

---

## 🆚 Comparison: Pool vs Bridge

| Feature | RaylsShieldPool | RaylsShieldNativeBridge |
|---------|-----------------|-------------------------|
| **Architecture** | Single-chain mixer | Cross-chain lock/unlock |
| **Endpoint Required** | ❌ No | ✅ Yes |
| **Use Case** | Privacy on same chain | Privacy + cross-chain transfer |
| **Liquidity** | Not needed | Required on destination |
| **Complexity** | Simpler | More complex |
| **Privacy Model** | Tornado Cash style | Cross-chain + privacy |

---

## 🚨 Important Notes

1. **Anonymity Set Size**: Privacy improves with more deposits (larger anonymity set)
2. **Secret Storage**: Users MUST keep secret + nullifier safe to withdraw
3. **Nullifiers**: Never reuse nullifiers (prevents double-spending)
4. **Gas Costs**: ~250k gas per withdrawal
5. **Fixed Denomination**: Better privacy but less flexible

---

## 📚 Additional Resources

- **CLAUDE.md** - Full development documentation
- **contracts/RaylsShieldPool.sol** - Main contract source
- **test/RaylsShieldPool.integration.test.js** - Test suite
- **scripts/demo-pool.js** - E2E demo script

---

## 🎯 How Privacy Works

### Without RaylsShieldPool
```
Alice --[5 USDgas]--> Bob
❌ Link visible on-chain: everyone knows Alice sent to Bob
```

### With RaylsShieldPool
```
Step 1: Alice deposits 5 USDgas + commitment
Step 2: Bob deposits 3 USDgas + commitment
Step 3: Charlie deposits 10 USDgas + commitment
(Anonymity set = 3 deposits)

Step 4: Alice withdraws 5 USDgas to new address
✅ No one knows which deposit (Alice, Bob, or Charlie) was withdrawn
✅ Privacy protected by ZK proof + anonymity set
```

---

## 🔐 Security Considerations

1. **ZK Proofs**: Uses Groth16 (requires trusted setup with Powers of Tau)
2. **Poseidon Hash**: ZK-friendly hash function for commitments
3. **Nullifier System**: Critical for preventing double-spending
4. **ReentrancyGuard**: Prevents reentrancy attacks on withdraw
5. **Ownable**: Admin functions for verifier updates and emergency withdrawals

---

## 🎯 Next Steps

1. ✅ Deploy to Rayls Devnet
2. ✅ Test deposits and withdrawals
3. ✅ Build anonymity set (encourage deposits)
4. ⬜ Integrate with frontend
5. ⬜ Production audit
6. ⬜ Mainnet deployment

---

**Built with ❤️ using Zero-Knowledge proofs and Solidity**
