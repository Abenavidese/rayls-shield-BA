# RaylsShield Pool - Complete Setup Guide

> **Complete environment setup for Backend (Circuits + Contracts) and Frontend**
>
> Follow this guide step-by-step to configure your development environment from scratch.

---

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [System Requirements](#system-requirements)
3. [Backend Setup](#backend-setup)
   - [Installation](#backend-installation)
   - [Powers of Tau Setup](#powers-of-tau-setup)
   - [Circuit Compilation](#circuit-compilation)
   - [Smart Contract Compilation](#smart-contract-compilation)
   - [Local Testing](#backend-local-testing)
   - [Deployment](#backend-deployment)
4. [Frontend Setup](#frontend-setup)
   - [Installation](#frontend-installation)
   - [Environment Configuration](#frontend-environment-configuration)
   - [Development Server](#frontend-development-server)
   - [Production Build](#frontend-production-build)
5. [Integration Testing](#integration-testing)
6. [Troubleshooting](#troubleshooting)
7. [Common Issues](#common-issues)

---

## Prerequisites

### Required Software

Before starting, ensure you have the following installed:

```bash
# Node.js (v18.x or later)
node --version  # Should output v18.x.x or higher

# npm (v9.x or later)
npm --version   # Should output 9.x.x or higher

# Git
git --version   # Should output 2.x.x or higher

# Python (for node-gyp, required by some dependencies)
python3 --version  # Should output 3.x.x
```

### Install Node.js (if not installed)

**macOS (using Homebrew):**
```bash
brew install node@18
```

**Linux (Ubuntu/Debian):**
```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

**Windows:**
- Download from: https://nodejs.org/en/download/
- Install LTS version (18.x)

### Install Git (if not installed)

**macOS:**
```bash
brew install git
```

**Linux (Ubuntu/Debian):**
```bash
sudo apt-get install git
```

**Windows:**
- Download from: https://git-scm.com/download/win

### Clone Repository

```bash
git clone https://github.com/Abenavidese/rayls-shield-BA.git
cd rayls-shield-BA
git checkout feature/privacy-pool-updates
```

---

## System Requirements

### Minimum Requirements

| Component | Minimum | Recommended |
|-----------|---------|-------------|
| **CPU** | 4 cores | 8+ cores (for faster proof generation) |
| **RAM** | 8 GB | 16+ GB (circuits compilation requires memory) |
| **Disk Space** | 5 GB | 10+ GB |
| **OS** | macOS 10.15+ / Ubuntu 20.04+ / Windows 10+ | Latest versions |
| **Node.js** | v18.0.0 | v18.x.x LTS |

### For Circuit Compilation

**Additional Requirements:**
- **C++ Compiler:** Required for circom and snarkjs
  - macOS: Xcode Command Line Tools
  - Linux: `build-essential` package
  - Windows: Visual Studio Build Tools

**Install C++ Compiler:**

**macOS:**
```bash
xcode-select --install
```

**Linux (Ubuntu/Debian):**
```bash
sudo apt-get install build-essential
```

**Windows:**
- Download Visual Studio Build Tools: https://visualstudio.microsoft.com/downloads/
- Install "Desktop development with C++"

---

## Backend Setup

### Backend Installation

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install
```

**Expected output:**
```
added 523 packages, and audited 524 packages in 45s

89 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

### Powers of Tau Setup

The **Powers of Tau** is a trusted setup ceremony required for Groth16 ZK-SNARKs. We use a pre-generated ceremony for development.

#### Download Powers of Tau File

```bash
# Create ptau directory if it doesn't exist
mkdir -p ptau

# Download Powers of Tau file (14 constraints, ~8 MB)
cd ptau
wget https://hermez.s3-eu-west-1.amazonaws.com/powersOfTau28_hez_final_14.ptau

# Verify file size (should be ~8.4 MB)
ls -lh powersOfTau28_hez_final_14.ptau
```

**Expected output:**
```
-rw-r--r--  1 user  staff   8.4M Nov 29 12:00 powersOfTau28_hez_final_14.ptau
```

#### Alternative Download Methods

**Using curl:**
```bash
curl -o ptau/powersOfTau28_hez_final_14.ptau \
  https://hermez.s3-eu-west-1.amazonaws.com/powersOfTau28_hez_final_14.ptau
```

**Manual Download:**
- URL: https://hermez.s3-eu-west-1.amazonaws.com/powersOfTau28_hez_final_14.ptau
- Save to: `backend/ptau/powersOfTau28_hez_final_14.ptau`

#### Verify Powers of Tau (Optional)

```bash
# Go back to backend directory
cd ..

# Verify the ptau file
npx snarkjs powersoftau verify ptau/powersOfTau28_hez_final_14.ptau
```

**Expected output:**
```
[INFO]  snarkJS: Verifying powers of tau file...
[INFO]  snarkJS: Powers of tau file OK!
```

### Circuit Compilation

Now we'll compile the Circom circuits and generate the necessary artifacts.

```bash
# From backend directory
npm run circom
```

**What this does:**
1. Compiles `circuits/privacy.circom` → generates R1CS, WASM, symbols
2. Compiles `circuits/compliance.circom` → generates R1CS, WASM, symbols
3. Generates proving keys (`.zkey` files)
4. Generates verification keys (`.vkey.json` files)
5. Exports Solidity verifiers (`Groth16Verifier.sol`, `ComplianceVerifier.sol`)

**Expected output:**
```
> hardhat circom

Compiling circuits...
[INFO]  snarkJS: Circuit info
[INFO]  snarkJS: ────────────
[INFO]  snarkJS: # of Wires: 256
[INFO]  snarkJS: # of Constraints: 152
[INFO]  snarkJS: # of Private Inputs: 4
[INFO]  snarkJS: # of Public Inputs: 3
[INFO]  snarkJS: # of Labels: 412
[INFO]  snarkJS: # of Outputs: 0

Generating proving key...
[INFO]  snarkJS: Generating zKey...
[INFO]  snarkJS: Circuit hash:
         0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef
[INFO]  snarkJS: Contribution:
         0xabcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890

Generating verification key...
[INFO]  snarkJS: Verification key generated

Exporting Solidity verifier...
[INFO]  snarkJS: Verifier exported to contracts/Groth16Verifier.sol

✅ Privacy circuit compiled successfully!

[Compliance circuit compilation follows same pattern...]

✅ All circuits compiled successfully!
```

**Generated Files:**

```
backend/
├── circuits/
│   ├── privacy.r1cs              # Rank-1 Constraint System
│   ├── privacy.wasm              # WebAssembly witness calculator
│   ├── privacy.sym               # Symbol file
│   ├── privacy_final.zkey        # Proving key
│   ├── privacy.vkey.json         # Verification key
│   ├── compliance.r1cs
│   ├── compliance.wasm
│   ├── compliance.sym
│   ├── compliance_final.zkey
│   └── compliance.vkey.json
├── contracts/
│   ├── Groth16Verifier.sol       # Auto-generated verifier
│   └── ComplianceVerifier.sol    # Auto-generated verifier
└── ptau/
    └── powersOfTau28_hez_final_14.ptau
```

**Time Estimate:** ~2-5 minutes (depends on CPU)

### Smart Contract Compilation

Compile the Solidity smart contracts:

```bash
# From backend directory
npm run compile
```

**Expected output:**
```
Compiled 15 Solidity files successfully (evm target: paris)
```

**Generated Files:**

```
backend/
├── artifacts/
│   └── contracts/
│       ├── RaylsShieldPool.sol/
│       │   └── RaylsShieldPool.json
│       ├── Groth16Verifier.sol/
│       │   └── Groth16Verifier.json
│       └── ComplianceVerifier.sol/
│           └── ComplianceVerifier.json
└── cache/
    └── solidity-files-cache.json
```

### Environment Configuration

Create a `.env` file in the `backend` directory:

```bash
# From backend directory
touch .env
```

**Edit `.env` file:**

```bash
# Required for deployment to Rayls Devnet
PRIVATE_KEY=your_wallet_private_key_here

# Optional: Fixed denomination (0 = variable amounts)
FIXED_DENOMINATION=0

# Optional: Enable compliance mode at deployment
COMPLIANCE_REQUIRED=false

# RPC URLs (already configured in hardhat.config.js, but can override)
RAYLS_DEVNET_RPC=https://devnet-rpc.rayls.com
```

**Get Private Key from MetaMask:**
1. Open MetaMask
2. Click account menu → Account Details
3. Click "Show private key"
4. Enter password
5. Copy private key (64 hex characters)
6. Paste into `.env` file

**Important:** Never commit `.env` to Git!

```bash
# Verify .env is in .gitignore
cat .gitignore | grep .env
```

### Backend Local Testing

#### Start Local Hardhat Node

```bash
# Terminal 1 - Start local node
npm run node
```

**Expected output:**
```
Started HTTP and WebSocket JSON-RPC server at http://127.0.0.1:8545/

Accounts
========
Account #0: 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266 (10000 ETH)
Private Key: 0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80

Account #1: 0x70997970C51812dc3A010C7d01b50e0d17dc79C8 (10000 ETH)
...

WARNING: These accounts, and their private keys, are publicly known.
Any funds sent to them on Mainnet or any other live network WILL BE LOST.
```

**Keep this terminal running.**

#### Deploy to Local Node

Open a new terminal:

```bash
# Terminal 2 - Deploy contracts
cd backend
npx hardhat run scripts/deploy-pool.js --network localhost
```

**Expected output:**
```
Deploying RaylsShieldPool...

Deploying Privacy Verifier...
Privacy Verifier deployed to: 0x5FbDB2315678afecb367f032d93F642f64180aa3

Deploying Compliance Verifier...
Compliance Verifier deployed to: 0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512

Deploying PoseidonT2 Library...
PoseidonT2 deployed to: 0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0

Deploying RaylsShieldPool...
RaylsShieldPool deployed to: 0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9

Deployment Summary:
- Privacy Verifier: 0x5FbDB2315678afecb367f032d93F642f64180aa3
- Compliance Verifier: 0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512
- PoseidonT2: 0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0
- RaylsShieldPool: 0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9

Deployment saved to: deployments/pool-localhost-latest.json
```

#### Run Integration Tests

```bash
# Terminal 2 - Run tests
npm test
```

**Expected output:**
```
RaylsShieldPool Integration Tests
  Deployment
    ✓ Should deploy with correct verifiers (1523ms)
    ✓ Should initialize with correct configuration (89ms)
    ✓ Should have zero deposits initially (45ms)

  Deposits
    ✓ Should accept deposit with valid commitment (234ms)
    ✓ Should reject duplicate commitments (178ms)
    ✓ Should track total deposits correctly (312ms)
    ✓ Should update anonymity set size (298ms)
    ✓ Should reject zero-value deposits (67ms)
    ✓ Should enforce fixed denomination if set (145ms)

  Withdrawals
    ✓ Should allow withdrawal with valid ZK proof (2145ms)
    ✓ Should reject withdrawal with invalid proof (1234ms)
    ✓ Should reject withdrawal with used nullifier (1567ms)
    ✓ Should reject withdrawal with non-existent commitment (134ms)

  Compliance
    ✓ Should verify compliance proof when enabled (2234ms)
    ✓ Should reject withdrawal exceeding AML threshold (1456ms)

15 passing (12s)
```

#### Run End-to-End Demo

```bash
# Terminal 2 - Run demo
npm run demo
```

**Expected output:**
```
RaylsShieldPool End-to-End Demo
================================

Step 1: Deploying contracts...
✓ Contracts deployed

Step 2: User1 deposits 5 USDgas...
  - Generating commitment...
  - Secret: 0x123456789abcdef...
  - Nullifier: 0xfedcba987654321...
  - Commitment: 0x7a3f8e9c1b2d4a5e...
  - Depositing on-chain...
✓ Deposit successful!

Step 3: User2 deposits 10 USDgas...
✓ Deposit successful!

Step 4: Anonymity set size: 2

Step 5: User1 withdraws to different address...
  - Generating ZK proof...
  - Proof generation time: 1.523s
  - Submitting withdrawal...
✓ Withdrawal successful!

Step 6: Verifying final balances...
  - Recipient balance: 5 USDgas
  - Pool balance: 10 USDgas
✓ All checks passed!

Demo completed successfully! 🎉
```

### Backend Deployment

#### Deploy to Rayls Devnet

```bash
# Ensure .env has PRIVATE_KEY configured
npx hardhat run scripts/deploy-pool.js --network raylsDevnet
```

**Expected output:**
```
Deploying to Rayls Devnet (Chain ID: 123123)...

Privacy Verifier deployed to: 0xc853De1e8a8a3Ead0e2A4A39084B792e1e58Dd53
Compliance Verifier deployed to: 0xF1925bE98A8Cb667CD65b5FadD171011E2832bca
PoseidonT2 deployed to: 0x7A3C527d48390c5690Fe7d81D021d83B278b6Eae
RaylsShieldPool deployed to: 0x7DF45676cb5Cc92DF8DD71b72745065391c7C6Be

Deployment saved to: deployments/pool-raylsDevnet-latest.json

Verify contracts on explorer:
https://devnet-explorer.rayls.com/address/0x7DF45676cb5Cc92DF8DD71b72745065391c7C6Be
```

#### Enable Compliance Mode (Optional)

```bash
# Enable compliance mode after deployment
npx hardhat run scripts/enable-compliance.js --network raylsDevnet
```

**Expected output:**
```
Enabling compliance mode on RaylsShieldPool...
Contract address: 0x7DF45676cb5Cc92DF8DD71b72745065391c7C6Be
AML Threshold: 10000 USDgas

Transaction sent: 0xabc123...
Waiting for confirmation...
✓ Compliance mode enabled!
```

---

## Frontend Setup

### Frontend Installation

```bash
# Navigate to frontend directory
cd frontend/rayls-shield-landing-page

# Install dependencies
npm install
```

**Expected output:**
```
added 423 packages, and audited 424 packages in 38s

156 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

### Frontend Environment Configuration

Create `.env.local` file in the frontend directory:

```bash
# From frontend directory
touch .env.local
```

**Edit `.env.local` file:**

```bash
# Public variables (accessible in browser)
NEXT_PUBLIC_CHAIN_ID=31337
NEXT_PUBLIC_CHAIN_NAME="Localhost"
NEXT_PUBLIC_RPC_URL="http://127.0.0.1:8545"

# Contract address (update after deployment)
NEXT_PUBLIC_POOL_ADDRESS="0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9"
NEXT_PUBLIC_PRIVACY_VERIFIER="0x5FbDB2315678afecb367f032d93F642f64180aa3"
NEXT_PUBLIC_COMPLIANCE_VERIFIER="0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512"

# For Rayls Devnet (uncomment when using devnet)
# NEXT_PUBLIC_CHAIN_ID=123123
# NEXT_PUBLIC_CHAIN_NAME="Rayls Devnet"
# NEXT_PUBLIC_RPC_URL="https://devnet-rpc.rayls.com"
# NEXT_PUBLIC_POOL_ADDRESS="0x7DF45676cb5Cc92DF8DD71b72745065391c7C6Be"
# NEXT_PUBLIC_PRIVACY_VERIFIER="0xc853De1e8a8a3Ead0e2A4A39084B792e1e58Dd53"
# NEXT_PUBLIC_COMPLIANCE_VERIFIER="0xF1925bE98A8Cb667CD65b5FadD171011E2832bca"
```

**Update Contract Addresses:**

After deploying contracts (see Backend Deployment), update the addresses in `.env.local`:

**For Localhost:**
```bash
# Copy from backend/deployments/pool-localhost-latest.json
cat ../../backend/deployments/pool-localhost-latest.json
```

**For Rayls Devnet:**
```bash
# Copy from backend/deployments/pool-raylsDevnet-latest.json
cat ../../backend/deployments/pool-raylsDevnet-latest.json
```

### Copy Circuit Artifacts

The frontend needs the compiled circuit artifacts (WASM, zkey, vkey) for ZK proof generation:

```bash
# From frontend directory
# Create circuits directory in public/
mkdir -p public/circuits

# Copy circuit artifacts from backend
cp ../../backend/circuits/privacy.wasm public/circuits/
cp ../../backend/circuits/privacy_final.zkey public/circuits/
cp ../../backend/circuits/privacy.vkey.json public/circuits/

cp ../../backend/circuits/compliance.wasm public/circuits/
cp ../../backend/circuits/compliance_final.zkey public/circuits/
cp ../../backend/circuits/compliance.vkey.json public/circuits/
```

**Verify files are copied:**

```bash
ls -lh public/circuits/
```

**Expected output:**
```
-rw-r--r--  1 user  staff   234K Nov 29 12:00 privacy.wasm
-rw-r--r--  1 user  staff   2.1M Nov 29 12:00 privacy_final.zkey
-rw-r--r--  1 user  staff   1.2K Nov 29 12:00 privacy.vkey.json
-rw-r--r--  1 user  staff   256K Nov 29 12:00 compliance.wasm
-rw-r--r--  1 user  staff   2.3M Nov 29 12:00 compliance_final.zkey
-rw-r--r--  1 user  staff   1.3K Nov 29 12:00 compliance.vkey.json
```

**Important:** These files are required for client-side ZK proof generation!

### Update Contract Addresses in Code

Update the contract addresses in `lib/contracts/addresses.ts`:

```typescript
// lib/contracts/addresses.ts
export const CONTRACT_ADDRESSES = {
  LOCALHOST: {
    chainId: 31337,
    RaylsShieldPool: "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9", // Update
    PrivacyVerifier: "0x5FbDB2315678afecb367f032d93F642f64180aa3", // Update
    ComplianceVerifier: "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512", // Update
  },
  RAYLS_DEVNET: {
    chainId: 123123,
    RaylsShieldPool: "0x7DF45676cb5Cc92DF8DD71b72745065391c7C6Be",
    PrivacyVerifier: "0xc853De1e8a8a3Ead0e2A4A39084B792e1e58Dd53",
    ComplianceVerifier: "0xF1925bE98A8Cb667CD65b5FadD171011E2832bca",
  },
};
```

### Frontend Development Server

Start the development server:

```bash
# From frontend directory
npm run dev
```

**Expected output:**
```
   ▲ Next.js 16.0.3
   - Local:        http://localhost:3000
   - Network:      http://192.168.1.100:3000

 ✓ Starting...
 ✓ Ready in 2.3s
 ○ Compiling / ...
 ✓ Compiled / in 1.2s (523 modules)
```

**Open browser:** http://localhost:3000

**Expected pages:**
- `/` - Landing page
- `/pool` - Deposit interface
- `/claim/[token]` - Withdrawal interface
- `/dapp` - DApp interface

### Configure MetaMask for Localhost

1. **Open MetaMask**
2. **Add Network:**
   - Network Name: `Localhost 8545`
   - RPC URL: `http://127.0.0.1:8545`
   - Chain ID: `31337`
   - Currency Symbol: `ETH`
3. **Import Test Account:**
   - Copy private key from Hardhat node output (see Backend Local Testing)
   - MetaMask → Import Account → Private Key
   - Paste: `0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80`

### Configure MetaMask for Rayls Devnet

1. **Open MetaMask**
2. **Add Network:**
   - Network Name: `Rayls Devnet`
   - RPC URL: `https://devnet-rpc.rayls.com`
   - Chain ID: `123123`
   - Currency Symbol: `USDgas`
   - Block Explorer: `https://devnet-explorer.rayls.com`
3. **Import Your Account:**
   - Use your actual private key (from `.env` PRIVATE_KEY)
   - Ensure you have USDgas balance for transactions

### Frontend Production Build

Build for production:

```bash
# From frontend directory
npm run build
```

**Expected output:**
```
   ▲ Next.js 16.0.3

   Creating an optimized production build ...
 ✓ Compiled successfully
 ✓ Linting and checking validity of types
 ✓ Collecting page data
 ✓ Generating static pages (5/5)
 ✓ Collecting build traces
 ✓ Finalizing page optimization

Route (app)                              Size     First Load JS
┌ ○ /                                    142 kB          234 kB
├ ○ /claim/[token]                       156 kB          248 kB
├ ○ /dapp                                145 kB          237 kB
└ ○ /pool                                158 kB          250 kB

○  (Static)  prerendered as static content

✨  Done in 45.23s
```

**Start production server:**

```bash
npm run start
```

---

## Integration Testing

### Full Stack Integration Test

Test the complete flow: Backend → Frontend → ZK Proofs → Smart Contracts

#### Step 1: Start Backend

```bash
# Terminal 1 - Backend
cd backend
npm run node
```

#### Step 2: Deploy Contracts

```bash
# Terminal 2 - Backend deployment
cd backend
npx hardhat run scripts/deploy-pool.js --network localhost
```

**Copy contract addresses to frontend `.env.local`**

#### Step 3: Copy Circuit Artifacts

```bash
# Terminal 2
cd frontend/rayls-shield-landing-page
mkdir -p public/circuits
cp ../../backend/circuits/*.wasm public/circuits/
cp ../../backend/circuits/*.zkey public/circuits/
cp ../../backend/circuits/*.vkey.json public/circuits/
```

#### Step 4: Start Frontend

```bash
# Terminal 3 - Frontend
cd frontend/rayls-shield-landing-page
npm run dev
```

#### Step 5: Test in Browser

1. **Open:** http://localhost:3000/pool
2. **Connect MetaMask** (use test account)
3. **Deposit 5 USDgas:**
   - Enter amount: `5`
   - Click "Deposit"
   - Confirm MetaMask transaction
   - **Save** the payment link displayed
4. **Wait for confirmation** (~3 seconds)
5. **Navigate to payment link:** `/claim/[token]`
6. **Connect different MetaMask account** (recipient)
7. **Click "Generate Proof"** (takes ~1-2 seconds)
8. **Click "Withdraw"**
9. **Confirm MetaMask transaction**
10. **Verify recipient received 5 USDgas**

**Success Indicators:**
- ✓ Deposit transaction confirmed
- ✓ Pool stats updated (totalDeposits, balance)
- ✓ ZK proof generated successfully
- ✓ Withdrawal transaction confirmed
- ✓ Recipient balance increased by 5 USDgas

---

## Troubleshooting

### Backend Issues

#### Issue: "Cannot find module 'hardhat'"

**Solution:**
```bash
cd backend
npm install
```

#### Issue: "Powers of Tau file not found"

**Solution:**
```bash
cd backend
mkdir -p ptau
cd ptau
wget https://hermez.s3-eu-west-1.amazonaws.com/powersOfTau28_hez_final_14.ptau
cd ..
```

#### Issue: "Circuit compilation failed"

**Error:**
```
Error: Cannot find module 'circomlib'
```

**Solution:**
```bash
cd backend
npm install circomlib
npm run circom
```

#### Issue: "Contract deployment failed"

**Error:**
```
Error: insufficient funds for gas
```

**Solution:**
- For localhost: Use test accounts from Hardhat node (pre-funded)
- For Rayls Devnet: Ensure your account has USDgas balance

#### Issue: "Test timeout"

**Error:**
```
Error: Timeout of 10000ms exceeded
```

**Solution:**
Tests timeout is configured in `hardhat.config.js`. ZK proof generation takes time.

```javascript
// hardhat.config.js
mocha: {
  timeout: 100000  // 100 seconds (already configured)
}
```

### Frontend Issues

#### Issue: "Module not found: Can't resolve 'snarkjs'"

**Solution:**
```bash
cd frontend/rayls-shield-landing-page
npm install snarkjs circomlibjs
```

#### Issue: "Circuit files not found (404)"

**Error in browser console:**
```
Failed to load resource: the server responded with a status of 404 (Not Found)
http://localhost:3000/circuits/privacy.wasm
```

**Solution:**
```bash
# Copy circuit artifacts to public/circuits/
cd frontend/rayls-shield-landing-page
mkdir -p public/circuits
cp ../../backend/circuits/*.wasm public/circuits/
cp ../../backend/circuits/*.zkey public/circuits/
cp ../../backend/circuits/*.vkey.json public/circuits/
```

#### Issue: "Contract address not found"

**Error in browser console:**
```
Error: Contract not deployed on this network
```

**Solution:**
1. Check `.env.local` has correct `NEXT_PUBLIC_POOL_ADDRESS`
2. Verify contract is deployed on the network you're connected to
3. Update `lib/contracts/addresses.ts`

#### Issue: "MetaMask not detected"

**Solution:**
1. Install MetaMask extension
2. Refresh page
3. Click "Connect Wallet"

#### Issue: "Wrong network in MetaMask"

**Solution:**
1. Open MetaMask
2. Switch to correct network (Localhost 31337 or Rayls Devnet 123123)
3. Refresh page

#### Issue: "Transaction rejected"

**Solution:**
- Check gas limit in MetaMask
- Ensure sufficient balance
- Try increasing gas limit manually

### ZK Proof Issues

#### Issue: "Proof generation failed"

**Error:**
```
Error: Cannot read properties of undefined (reading 'wasm')
```

**Solution:**
- Verify circuit files are in `public/circuits/`
- Check browser console for 404 errors
- Ensure WASM files are not blocked by CSP headers

#### Issue: "Proof generation too slow"

**Solution:**
- ZK proof generation is CPU-intensive
- Expected time: 1-2 seconds (desktop), 3-5 seconds (laptop), 5-10 seconds (mobile)
- Upgrade hardware or optimize circuit (reduce constraints)

#### Issue: "Invalid proof"

**Error:**
```
Error: RaylsShield: Invalid privacy proof
```

**Solution:**
- Verify circuit inputs match commitment
- Check nullifier, secret, amount, recipient are correct
- Ensure using correct circuit (privacy vs compliance)

---

## Common Issues

### Dependency Issues

#### Issue: Node.js version mismatch

**Solution:**
```bash
# Use nvm to manage Node versions
nvm install 18
nvm use 18
```

#### Issue: Python not found (for node-gyp)

**Solution:**
```bash
# macOS
brew install python3

# Linux (Ubuntu/Debian)
sudo apt-get install python3

# Windows
# Download from https://www.python.org/downloads/
```

#### Issue: C++ compiler not found

**Solution:**
See [System Requirements](#system-requirements) section

### Performance Issues

#### Issue: Slow circuit compilation

**Solution:**
- Circuit compilation is CPU and memory intensive
- Increase RAM allocation for Node.js:
  ```bash
  export NODE_OPTIONS="--max-old-space-size=8192"
  npm run circom
  ```

#### Issue: Slow proof generation

**Solution:**
- Use faster hardware (more CPU cores)
- Reduce circuit constraints (not recommended, affects security)
- Use pre-computed proofs for testing (demo mode)

### Network Issues

#### Issue: Cannot connect to Rayls Devnet

**Error:**
```
Error: Failed to fetch
```

**Solution:**
- Check internet connection
- Verify RPC URL: `https://devnet-rpc.rayls.com`
- Try alternative RPC (if available)
- Check firewall settings

#### Issue: Transactions stuck pending

**Solution:**
- Check block explorer for transaction status
- Increase gas price
- Reset MetaMask nonce: Settings → Advanced → Reset Account

---

## Verification Checklist

### Backend Checklist

- [ ] Node.js v18+ installed
- [ ] Backend dependencies installed (`npm install`)
- [ ] Powers of Tau file downloaded (`ptau/powersOfTau28_hez_final_14.ptau`)
- [ ] Circuits compiled (`npm run circom`)
- [ ] Contracts compiled (`npm run compile`)
- [ ] `.env` file configured with `PRIVATE_KEY`
- [ ] Local Hardhat node running (`npm run node`)
- [ ] Contracts deployed to localhost (`npx hardhat run scripts/deploy-pool.js --network localhost`)
- [ ] Integration tests passing (`npm test`)

### Frontend Checklist

- [ ] Frontend dependencies installed (`npm install`)
- [ ] `.env.local` file configured
- [ ] Circuit artifacts copied to `public/circuits/`
- [ ] Contract addresses updated in `lib/contracts/addresses.ts`
- [ ] MetaMask installed and configured
- [ ] Development server running (`npm run dev`)
- [ ] Can connect wallet on http://localhost:3000
- [ ] Can deposit successfully
- [ ] Can generate ZK proof
- [ ] Can withdraw successfully

---

## Additional Resources

### Documentation

- **Hardhat:** https://hardhat.org/docs
- **Circom:** https://docs.circom.io/
- **snarkjs:** https://github.com/iden3/snarkjs
- **Next.js:** https://nextjs.org/docs
- **ethers.js:** https://docs.ethers.org/v6/

### Tutorials

- **Circom Tutorial:** https://docs.circom.io/getting-started/installation/
- **ZK-SNARKs Explained:** https://z.cash/technology/zksnarks/
- **Groth16 Protocol:** https://eprint.iacr.org/2016/260.pdf

### Community

- **Discord:** (Add your Discord link)
- **Telegram:** (Add your Telegram link)
- **GitHub Issues:** https://github.com/Abenavidese/rayls-shield-BA/issues

---

## Quick Start Summary

**Fastest path to get running:**

```bash
# 1. Clone repository
git clone https://github.com/Abenavidese/rayls-shield-BA.git
cd rayls-shield-BA
git checkout feature/privacy-pool-updates

# 2. Backend setup
cd backend
npm install
mkdir -p ptau && cd ptau
wget https://hermez.s3-eu-west-1.amazonaws.com/powersOfTau28_hez_final_14.ptau
cd ..
npm run circom
npm run compile

# 3. Start local node (Terminal 1)
npm run node

# 4. Deploy contracts (Terminal 2)
npx hardhat run scripts/deploy-pool.js --network localhost

# 5. Frontend setup (Terminal 2)
cd ../frontend/rayls-shield-landing-page
npm install
mkdir -p public/circuits
cp ../../backend/circuits/*.wasm public/circuits/
cp ../../backend/circuits/*.zkey public/circuits/
cp ../../backend/circuits/*.vkey.json public/circuits/

# 6. Configure .env.local (update contract addresses)
touch .env.local
# (Edit .env.local with contract addresses from step 4)

# 7. Start frontend (Terminal 3)
npm run dev

# 8. Open browser
# http://localhost:3000
```

**Total Time:** ~15-20 minutes (including downloads)

---

## Support

If you encounter issues not covered in this guide:

1. **Check logs:** Look for error messages in terminal output
2. **Search documentation:** Review relevant sections above
3. **GitHub Issues:** https://github.com/Abenavidese/rayls-shield-BA/issues
4. **Community:** Join Discord/Telegram for help

---

**Last Updated:** December 2025
**Version:** 1.0.0
