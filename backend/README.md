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

**Rayls Devnet (Chain ID: 123123)**

- **RaylsShield**: `0x648B7FfD8a5Dd9C901B6569E7a0DC9A2eAF4c9F1`
- **Groth16Verifier** (Privacy): `0xfD0b399898efC0186E32eb81B630d7Cf7Bb6f217`
- **ComplianceVerifier** (AML): `0xdd51b116F202a4878E84b17327C0B1b32A6ce644`

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
