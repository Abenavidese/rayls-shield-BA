# 🛡️ RaylsShield

**Zero-Knowledge Privacy Layer for Rayls Protocol**

RaylsShield adds privacy-preserving capabilities to cross-chain messaging on Rayls using ZK-SNARKs (Groth16 proofs). Send encrypted transactions across blockchains while maintaining verifiability and compliance.

[![Deployed on Rayls](https://img.shields.io/badge/Deployed-Rayls%20Testnet-blue)](https://devnet-explorer.rayls.com)
[![Tests](https://img.shields.io/badge/Tests-13%2F13%20Passing-success)]()
[![Solidity](https://img.shields.io/badge/Solidity-0.8.20-orange)]()

## 🌐 Deployed Contracts

**Rayls Testnet (Chain ID: 123123)**

| Contract | Address | Explorer |
|----------|---------|----------|
| Groth16Verifier | `0xaF7B67b88128820Fae205A07aDC055ed509Bdb12` | [View](https://devnet-explorer.rayls.com/address/0xaF7B67b88128820Fae205A07aDC055ed509Bdb12) |
| RaylsShield | `0x71E3a04c9Ecc624656334756f70dAAA1fc4F985D` | [View](https://devnet-explorer.rayls.com/address/0x71E3a04c9Ecc624656334756f70dAAA1fc4F985D) |

**Network Details:**
- RPC: `https://devnet-rpc.rayls.com`
- Explorer: `https://devnet-explorer.rayls.com`
- Chain ID: `123123`
- Gas Token: USDgas

---

## 🌟 Key Features

### Privacy
- **Hidden Transaction Amounts**: Cryptographic commitments hide actual values
- **Private Recipients**: Recipient addresses are hashed for privacy
- **Secret Nullifiers**: Prevent double-spending and replay attacks
- **Cross-Chain Privacy**: Maintain confidentiality across different blockchains

### Compliance
- **AML Threshold Proofs**: Prove `amount < $10,000` without revealing exact amount
- **Regulatory-Friendly**: Built for institutional use cases
- **Verifiable On-Chain**: All proofs verified via Groth16 verifier contract
- **Audit Trail**: Nullifier tracking provides compliance-friendly history

### Performance
- **Sub-Second Finality**: Leverages Rayls L1's high-performance consensus
- **Gas-Efficient**: Optimized Solidity contracts (~272k gas per transaction)
- **Fast Proof Generation**: 1-2 seconds per proof
- **Scalable**: Cross-chain messaging via Rayls Protocol

---

## 🚀 Quick Start

### Installation

```bash
# Clone the repository
git clone https://github.com/Abenavidese/rayls-shield-BA.git
cd rayls-shield-BA

# Install backend dependencies
cd backend
npm install
```

### Run the Demo

```bash
# Start local Hardhat node (Terminal 1)
npm run node

# Run the demo flow (Terminal 2)
npm run demo
```

**Demo Output:**
```
🛡️  RaylsShield - Zero-Knowledge Privacy Demo

✅ Contracts Deployed
✅ ZK Proof Generated
✅ Private Message Sent Cross-Chain
✅ Privacy Preserved!

💡 Alice sent $7,500 to Bob - amount hidden from everyone!
```

---

## 📋 Available Commands

```bash
# Development
npm run compile          # Compile Solidity contracts
npm run circom           # Compile Circom ZK circuits
npm run clean            # Clean build artifacts

# Testing
npm test                 # Run all tests
npm run test:integration # Run integration tests (13 tests)

# ZK Proofs
npm run generate:proof   # Generate a ZK proof
npm run generate:inputs  # Generate valid circuit inputs

# Deployment
npm run node             # Start local Hardhat node
npm run deploy:local     # Deploy to local network
npm run deploy:devnet    # Deploy to Rayls Devnet

# Demo
npm run demo             # Run complete E2E demo
```

---

## 🏗️ Project Structure

```
rayls-shield-BA/
├── backend/                         # Smart contracts and ZK circuits
│   ├── contracts/
│   │   ├── RaylsShield.sol         # Main privacy contract
│   │   ├── PrivacyVerifier.sol     # Groth16 verifier (auto-generated)
│   │   └── MockRaylsEndpoint.sol   # Local testing mock
│   │
│   ├── circuits/
│   │   ├── privacy.circom          # Core privacy circuit
│   │   ├── compliance.circom       # AML compliance circuit
│   │   ├── privacy.wasm            # Compiled witness calculator
│   │   ├── privacy.zkey            # Proving key
│   │   └── verification_key.json   # Verification key
│   │
│   ├── scripts/
│   │   ├── generate-inputs.js      # Generate valid circuit inputs
│   │   ├── generate-proof.js       # ZK proof generation
│   │   ├── deploy.js               # Contract deployment
│   │   └── demo-flow.js            # Complete demo workflow
│   │
│   ├── test/
│   │   ├── RaylsShield.test.js     # Basic unit tests
│   │   └── RaylsShield.integration.test.js  # E2E tests (✅ 13 passing)
│   │
│   ├── hardhat.config.js           # Hardhat + Circom configuration
│   ├── package.json                # Dependencies and scripts
│   └── .env.example                # Environment variables template
│
├── README.md                        # Project documentation
├── FRONTEND.md                      # Frontend integration guide
├── CONTRIBUTING.md                  # Contribution guidelines
└── LICENSE                          # MIT License
```

---

## 🔐 How It Works

### 1. Privacy Circuit

The core privacy circuit (`circuits/privacy.circom`) uses:
- **Poseidon Hash**: ZK-friendly hash function
- **Commitment Scheme**: `commitment = Poseidon(secret, nullifier, amount)`
- **Nullifier Hash**: `nullifierHash = Poseidon(nullifier)`
- **Recipient Hash**: `recipientHash = Poseidon(recipient)`

### 2. Groth16 Proofs

- Industry-standard ZK-SNARK system
- Proof generation: ~1-2 seconds
- On-chain verification: ~272k gas
- Proves knowledge of private inputs without revealing them

### 3. Smart Contract Integration

```solidity
function sendPrivateMessage(
    uint256 _dstChainId,
    address _destination,
    bytes calldata _encryptedPayload,
    uint256[2] calldata _pA,      // Proof point A
    uint256[2][2] calldata _pB,   // Proof point B
    uint256[2] calldata _pC,      // Proof point C
    uint256[3] calldata _publicSignals  // [nullifierHash, commitment, recipientHash]
) external payable;
```

### 4. Cross-Chain Privacy

RaylsShield extends `RaylsApp` to leverage:
- `_raylsSend()` for cross-chain messaging
- `_raylsSendToResourceId()` for resourceId-based routing
- Rayls Endpoint integration for multi-chain support

---

## 🧪 Testing

### Run All Tests

```bash
npm test
```

**Test Results:**
```
  RaylsShield Integration Tests with ZK Proofs
    ✓ Deployment tests (3 passing)
    ✓ ZK proof generation and verification (2 passing)
    ✓ Send private messages (2 passing)
    ✓ ResourceId messaging (1 passing)
    ✓ Nullifier tracking (1 passing)
    ✓ Verifier management (3 passing)
    ✓ Complete E2E privacy flow (1 passing)

  13 passing (11s)
```

### Integration Tests

```bash
npm run test:integration
```

Tests include:
- Real ZK proof generation
- On-chain proof verification
- Cross-chain messaging simulation
- Nullifier replay prevention
- End-to-end privacy workflow

---

## 🌐 Deployment

### Local Network

```bash
# Terminal 1: Start local node
npm run node

# Terminal 2: Deploy contracts
npm run deploy:local
```

### Rayls Devnet

1. **Create `.env` file:**

```bash
PRIVATE_KEY=your_wallet_private_key_here
RAYLS_ENDPOINT_ADDRESS=0x...  # Get from Rayls team
```

2. **Deploy:**

```bash
npm run deploy:devnet
```

**Rayls Devnet Details:**
- Chain ID: `123123`
- RPC: `https://devnet-rpc.rayls.com`
- Explorer: `https://devnet-explorer.rayls.com`
- Gas Token: `USDgas`

---

## 💡 Use Cases

### 1. Institutional Trading
- Hide trading amounts from competitors
- Prove compliance with AML regulations
- Maintain privacy while meeting regulatory requirements

### 2. Private Cross-Chain Transfers
- Send encrypted messages across blockchains
- Verify recipient without revealing identity
- Prevent double-spending with nullifiers

### 3. Confidential Settlements
- Private institutional settlements
- Compliance-friendly privacy
- Rayls' sub-second finality for instant settlement

### 4. Private DeFi
- Hidden liquidity provisions
- Anonymous yield farming
- Private DAO voting

---

## 🔧 Technical Details

### Circuit Complexity
- **Privacy Circuit**: 3 Poseidon hashes + 1 range check
- **Compliance Circuit**: Adds 2 comparison constraints for AML
- **Witness Calculation**: < 1 second
- **Proof Generation**: 1-2 seconds
- **Proof Size**: ~128 bytes

### Gas Costs
- Deploy RaylsShield: ~1,037,239 gas
- Deploy Verifier: ~390,033 gas
- Send Private Message: ~272,268 gas (avg)
- Update Verifier: ~30,588 gas

### Security
- ✅ Groth16 ZK-SNARKs (industry standard)
- ✅ Poseidon hash (ZK-optimized)
- ✅ Nullifier system (replay protection)
- ✅ OpenZeppelin contracts (battle-tested)
- ✅ Reentrancy guards
- ✅ Access control (Ownable)

---

## 📚 Documentation

- **[FRONTEND.md](./FRONTEND.md)** - Complete frontend integration guide with React examples
- **[NEXT_STEPS.md](./NEXT_STEPS.md)** - Deployment guide and next steps
- **[CLAUDE.md](./CLAUDE.md)** - Development instructions

### Generate a ZK Proof

```bash
npm run generate:proof
```

**Output:**
```
✅ Proof generated successfully!
Proof valid: ✅ YES

Solidity call data:
a: [...]
b: [...]
c: [...]
publicSignals: [nullifierHash, commitment, recipientHash]
```

### Use in Your Code

```javascript
const { generateProof, formatProofForSolidity } = require("./scripts/generate-proof");

// Generate proof
const { proof, publicSignals } = await generateProof({
  secret: BigInt(123456789),
  nullifier: BigInt(987654321),
  recipient: BigInt("0x..."),
  amount: BigInt(7500),
});

// Format for Solidity
const solidityProof = formatProofForSolidity(proof, publicSignals);

// Send private message
await raylsShield.sendPrivateMessage(
  dstChainId,
  destination,
  encryptedPayload,
  solidityProof.a,
  solidityProof.b,
  solidityProof.c,
  solidityProof.publicSignals
);
```

---

## 🎯 Hackathon Achievements

✅ **Complete ZK Implementation**
- Privacy circuit compiled and tested
- Compliance circuit with AML checks
- Real proof generation working

✅ **Full Rayls Integration**
- Extends RaylsApp correctly
- Cross-chain messaging implemented
- ResourceId support added

✅ **Production-Ready Testing**
- 13 comprehensive tests passing
- Real ZK proofs in tests
- End-to-end flow validated

✅ **Developer Experience**
- Easy proof generation scripts
- Comprehensive documentation
- One-command demo

---

## 📖 Additional Resources

- [Rayls Litepaper](https://www.rayls.com/litepaper)
- [Rayls Public Chain Docs](https://docs.rayls.com/docs/public-chain-reference)
- [Rayls DevNet DApp](https://devnet-dapp.rayls.com/sign-in)
- [Rayls Explorer](https://devnet-explorer.rayls.com/)
- [Rayls Proof-of-Usage](https://pou.rayls.com/)
- [Circom Documentation](https://docs.circom.io/)
- [snarkjs Documentation](https://github.com/iden3/snarkjs)

---

## 🤝 Contributing

This is a hackathon project. Contributions, issues, and feature requests are welcome!

---

## 📝 License

MIT License - See LICENSE file for details

---

## 🎉 Acknowledgments

- **Rayls Team** for the amazing L1 protocol
- **Circom/iden3** for ZK circuit tooling
- **OpenZeppelin** for secure smart contract libraries
- **Hardhat** for development framework

---

## 📬 Contact

For questions about RaylsShield:
- Check `IMPLEMENTATION_COMPLETE.md` for detailed implementation notes
- Review `CLAUDE.md` for architectural decisions
- Run `npm run demo` to see it in action

---

**Built with ❤️ using Zero-Knowledge proofs, Rayls Protocol, and Solidity.**

**Perfect for**: Institutional DeFi • Private Cross-Chain Messaging • Regulatory-Compliant Privacy • Confidential Settlements
