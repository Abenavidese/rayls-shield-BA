# RaylsShield Backend

Smart contracts, ZK circuits, and deployment scripts for RaylsShield.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Compile contracts and circuits
npm run compile
npx hardhat circom

# Run tests
npm test

# Generate ZK proof
npm run generate:proof

# Deploy to Rayls Devnet
npm run deploy:devnet
```

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

## 🏗️ Structure

```
backend/
├── contracts/           # Solidity smart contracts
├── circuits/           # Circom ZK circuits
├── scripts/            # Deployment and utility scripts
├── test/               # Contract and circuit tests
├── deployments/        # Deployment records
└── hardhat.config.js   # Hardhat configuration
```

## 🌐 Deployed Contracts

**Rayls Devnet (Chain ID: 123123)** - Latest: Nov 29, 2025

- **RaylsShieldPool**: `0x7DF45676cb5Cc92DF8DD71b72745065391c7C6Be`
- **Privacy Verifier**: `0xc853De1e8a8a3Ead0e2A4A39084B792e1e58Dd53`
- **Compliance Verifier**: `0xF1925bE98A8Cb667CD65b5FadD171011E2832bca`
- **PoseidonT2 Library**: `0x7A3C527d48390c5690Fe7d81D021d83B278b6Eae`

**Configuration:**
- Compliance Mode: **ENABLED** ✅
- AML Threshold: **10,000 USDgas**
- Fixed Denomination: **Variable** (any amount up to threshold)

Explorer: https://devnet-explorer.rayls.com

## 🔧 Environment Setup

Create `.env` file:

```bash
PRIVATE_KEY=your_wallet_private_key
RAYLS_ENDPOINT_ADDRESS=0x...  # Get from Rayls team
```

## 📚 Documentation

See parent directory for complete documentation:
- `../README.md` - Project overview
- `../FRONTEND.md` - Frontend integration
- `../CONTRIBUTING.md` - Contribution guidelines
