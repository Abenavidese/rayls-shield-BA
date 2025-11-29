# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

RaylsShieldPool is a **single-chain privacy mixer** for native USDgas on Rayls Protocol using ZK-SNARKs (Groth16 proofs). Similar to Tornado Cash, it enables private deposits and withdrawals with complete anonymity.

The project consists of:
- **Backend**: Solidity smart contracts + Circom ZK circuits (Hardhat project)
- **Frontend**: Next.js landing page with dApp interface (React/TypeScript)

### Key Features
- ✅ **Native USDgas privacy** - Privacy mixer for Rayls gas token
- ✅ **Tornado Cash-style** - Deposit/withdraw with ZK proofs
- ✅ **No endpoint required** - Works on any EVM chain
- ✅ **Anonymity set** - Privacy grows with more deposits
- ✅ **ZK-SNARKs** - Groth16 proofs with Circom circuits
- ✅ **Compliance-ready** - Optional AML threshold checks
- ✅ **Nullifier system** - Prevents replay attacks and double-spending
- ✅ **Flexible denominations** - Variable or fixed amounts

## Repository Structure

```
rayls-shield-BA/
├── backend/                      # Smart contracts + ZK circuits
│   ├── contracts/
│   │   ├── RaylsShieldPool.sol       # ⭐ Main: Privacy mixer contract
│   │   ├── Groth16Verifier.sol       # ZK privacy verifier (auto-generated)
│   │   └── ComplianceVerifier.sol    # ZK compliance verifier (auto-generated)
│   ├── circuits/
│   │   ├── privacy.circom            # Privacy circuit (Poseidon hashes)
│   │   └── compliance.circom         # Compliance circuit (with AML check)
│   ├── scripts/
│   │   ├── deploy-pool.js            # ⭐ Deploy Pool
│   │   ├── demo-pool.js              # ⭐ E2E demo
│   │   ├── generate-proof.js         # ZK proof generation
│   │   └── generate-inputs.js        # Circuit input generation
│   ├── test/
│   │   └── RaylsShieldPool.integration.test.js  # ⭐ Integration tests
│   ├── POOL_QUICKSTART.md            # ⭐ Quick start guide
│   ├── README.md                     # Project documentation
│   └── deployments/                  # Deployment records (auto-generated)
└── frontend/rayls-shield-landing-page/
    ├── app/                          # Next.js app directory
    ├── components/                   # React components
    └── lib/                          # Web3 utilities
```

## Development Commands

### Backend (Smart Contracts + ZK Circuits)

All commands run from `./rayls-shield-BA/backend/`:

```bash
# Installation
npm install

# Smart Contract Development
npm run compile          # Compile Solidity contracts
npm run clean            # Clean artifacts
npm test                 # Run integration tests

# ZK Circuit Development
npm run circom           # Compile Circom circuits (generates WASM, zkey, verifier)
npm run generate:proof   # Generate a sample ZK proof
npm run generate:inputs  # Generate valid circuit inputs

# Local Development & Testing
npm run node             # Start Hardhat node (Terminal 1)
npx hardhat run scripts/deploy-pool.js --network localhost     # Deploy Pool
npx hardhat run scripts/demo-pool.js --network localhost       # Run E2E demo
npx hardhat test test/RaylsShieldPool.integration.test.js      # Run tests

# Rayls Devnet Deployment
npx hardhat run scripts/deploy-pool.js --network raylsDevnet   # Deploy to Rayls Devnet

# With fixed denomination (e.g., 5 USDgas)
FIXED_DENOMINATION=5 npx hardhat run scripts/deploy-pool.js --network raylsDevnet
```

### Frontend (Next.js Landing Page)

All commands run from `./rayls-shield-BA/frontend/rayls-shield-landing-page/`:

```bash
npm install
npm run dev              # Start dev server (http://localhost:3000)
npm run build            # Production build
npm run start            # Start production server
npm run lint             # Run ESLint
```

## Architecture Details

### RaylsShieldPool - Privacy Mixer

**Purpose**: Single-chain privacy mixer for native USDgas using ZK proofs (Tornado Cash style)

**Architecture Pattern**: Deposit/Withdraw Pool
- Users deposit USDgas with a commitment (hides identity)
- Commitments stored on-chain (nullifiers hidden)
- Users withdraw to any address with ZK proof
- Larger anonymity set = stronger privacy

**Key Contract Features**:
```solidity
contract RaylsShieldPool is Ownable, ReentrancyGuard {
    // Deposit USDgas with commitment
    function deposit(bytes32 commitment) external payable nonReentrant;

    // Withdraw USDgas with ZK proof
    function withdraw(
        address recipient,
        uint256 amount,
        uint256[2] calldata _pA,      // ZK proof
        uint256[2][2] calldata _pB,
        uint256[2] calldata _pC,
        uint256[3] calldata _publicSignals  // [nullifierHash, commitment, recipientHash]
    ) external nonReentrant;

    // Admin functions
    function setComplianceRequired(bool _required) external onlyOwner;
    function setFixedDenomination(uint256 _denomination) external onlyOwner;
}
```

**User Flow**:
1. Alice generates secret + nullifier off-chain
2. Alice computes commitment = Poseidon(secret, nullifier, amount)
3. Alice deposits USDgas + commitment to pool
4. Pool stores commitment (Alice's identity hidden)
5. Time passes, Bob and Charlie also deposit (anonymity set grows)
6. Alice generates ZK proof proving knowledge of secret/nullifier
7. Alice withdraws to new address using proof
8. No one can link Alice's deposit to her withdrawal

**Privacy Guarantees**:
- ✅ Deposit-withdrawal link broken (via anonymity set)
- ✅ Recipient hidden (only recipientHash visible)
- ✅ Amount optionally hidden (use fixed denomination)
- ✅ Replay attacks prevented (nullifier tracking)
- ✅ No endpoint address required

### ZK Circuit Architecture

**Privacy Circuit** (`circuits/privacy.circom`):
- **Public inputs**: nullifierHash, commitment, recipientHash
- **Private inputs**: secret, nullifier, recipient, amount
- **Constraints**:
  - `commitment = Poseidon(secret, nullifier, amount)`
  - `nullifierHash = Poseidon(nullifier)`
  - `recipientHash = Poseidon(recipient)`
  - Amount range check (64-bit non-negative)

**Compliance Circuit** (`circuits/compliance.circom`):
- Adds AML threshold check: `amount < amlThreshold`
- Adds positivity check: `amount > 0`
- 4th public input: `amlThreshold`

**Circuit compilation flow:**
```bash
npm run circom
# 1. Compiles .circom → R1CS
# 2. Generates WASM witness calculator
# 3. Generates proving/verification keys
# 4. Creates Solidity verifier contract
```

### Smart Contract Flow

**Sending private message:**
1. User generates ZK proof off-chain (`scripts/generate-proof.js`)
2. Calls `sendPrivateMessage(dstChainId, destination, encryptedPayload, proof, publicSignals)`
3. Contract verifies proof via `verifier.verifyProof()`
4. Checks nullifier hasn't been used (`nullifiers` mapping)
5. Marks nullifier as used and message as verified
6. Calls `_raylsSend()` to send cross-chain

**Receiving private message:**
1. Rayls Endpoint calls `receivePrivateMessage()` with `receiveMethod` modifier
2. Extracts metadata: `_getMessageIdOnReceiveMethod()`, `_getFromChainIdOnReceiveMethod()`
3. Verifies proof again on destination chain
4. Processes encrypted payload
5. Emits `PrivateMessageReceived` event

### Test Structure

**Integration tests** (`test/RaylsShield.integration.test.js`):
- Real ZK proof generation (not mocked)
- Full contract interaction testing
- Deployment, proof verification, cross-chain simulation
- 13 tests covering all functionality

**Key test patterns:**
```javascript
// Generate real proof
const { proof, publicSignals } = await generateProof({
  secret: BigInt(123456789),
  nullifier: BigInt(987654321),
  recipient: BigInt("0x" + user2.address.slice(2).padStart(64, "0")),
  amount: BigInt(1000)
});

// Format for Solidity
const formattedProof = formatProofForSolidity(proof, publicSignals);

// Send private message
await raylsShield.sendPrivateMessage(
  dstChainId,
  destination,
  encryptedPayload,
  formattedProof.a,
  formattedProof.b,
  formattedProof.c,
  formattedProof.publicSignals
);
```

## Environment Configuration

Create `backend/.env`:
```bash
PRIVATE_KEY=your_wallet_private_key
FIXED_DENOMINATION=0  # Optional: 0 = variable, or set fixed amount (e.g., 5 for 5 USDgas)
```

**Rayls Devnet Details:**
- Chain ID: `123123`
- RPC: `https://devnet-rpc.rayls.com`
- Explorer: `https://devnet-explorer.rayls.com`
- Gas Token: `USDgas`

## Deployment Workflow

### Local Testing
```bash
# Terminal 1 - Start local node
cd backend
npm run node

# Terminal 2 - Deploy and test
npx hardhat run scripts/deploy-pool.js --network localhost
npx hardhat test test/RaylsShieldPool.integration.test.js
npx hardhat run scripts/demo-pool.js --network localhost
```

### Rayls Devnet
```bash
cd backend
# Ensure .env is configured with PRIVATE_KEY
npx hardhat run scripts/deploy-pool.js --network raylsDevnet

# Or with fixed denomination
FIXED_DENOMINATION=5 npx hardhat run scripts/deploy-pool.js --network raylsDevnet
```

**Deployment creates:**
1. `Groth16Verifier.sol` (privacy verifier)
2. `ComplianceVerifier.sol` (compliance verifier)
3. `RaylsShieldPool.sol` (main contract)

## Testing Best Practices

- Run full integration tests before any deployment
- Integration tests use real ZK proof generation (~2 seconds per proof)
- Test timeout: 100 seconds (configured in hardhat.config.js)
- All tests must pass before deployment

```bash
npx hardhat test test/RaylsShieldPool.integration.test.js
```

## Common Development Tasks

### Adding a New Circuit
1. Create `.circom` file in `circuits/`
2. Add circuit config to `hardhat.config.js` under `circom.circuits[]`
3. Run `npm run circom` to compile
4. Update verifier import in `RaylsShieldPool.sol` if needed
5. Add proof generation logic to `scripts/generate-proof.js`
6. Write integration tests

### Modifying RaylsShieldPool Contract
1. Edit `contracts/RaylsShieldPool.sol`
2. Run `npm run compile`
3. Update tests in `test/RaylsShieldPool.integration.test.js`
4. Run `npm test` to verify
5. Test with demo: `npx hardhat run scripts/demo-pool.js --network localhost`

### Updating ZK Proof Generation
1. Modify `scripts/generate-proof.js`
2. Test: `npm run generate:proof`
3. Verify integration: `npx hardhat test`

## Important Notes

- **Never commit `.env` files** - Contains private keys
- **ZK proof generation is CPU-intensive** - Takes 1-2 seconds per proof
- **Circom circuits require setup ceremony** - Use proper Powers of Tau for production
- **Nullifiers prevent replay attacks** - Never reuse nullifiers
- **All proofs verified on-chain** - Gas cost ~250k per withdrawal
- **Anonymity set size matters** - More deposits = stronger privacy
- **Secret storage** - Users must keep secret + nullifier to withdraw

## Frontend Integration

Frontend is a Next.js 16 app with:
- **shadcn/ui** components (Radix UI primitives)
- **ethers.js v6** for Web3 interactions
- **snarkjs** for client-side proof generation
- **TailwindCSS** for styling

Key files:
- `app/pool/page.tsx` - Pool deposit interface
- `app/claim/[token]/page.tsx` - Claim/withdrawal interface
- `components/pool-interface.tsx` - Pool transaction UI
- `lib/contracts/addresses.ts` - Contract addresses configuration
- `lib/contracts/RaylsShieldPoolABI.ts` - Contract ABI
- `lib/zk/proof.ts` - ZK proof generation utilities
- `lib/web3/pool.ts` - Pool contract interactions
- `lib/utils/paymentLink.ts` - Payment link encoding/decoding
- `hooks/useRaylsShieldPool.ts` - React hook for pool operations

## Hardhat Configuration

**Solidity versions:**
- 0.8.20 (main contracts, RaylsShield)
- 0.6.11 (legacy verifier contracts)

**Compiler optimization:** 200 runs

**Networks:**
- `hardhat` - Local testing (chainId: 31337)
- `localhost` - Hardhat node (chainId: 31337)
- `raylsDevnet` - Rayls Devnet (chainId: 123123)

**Circom config:**
- Input path: `./circuits`
- PTAU: `ptau/powersOfTau28_hez_final_14.ptau`
- Two circuits: privacy, compliance

## Security Considerations

- Groth16 proofs require trusted setup (use appropriate Powers of Tau)
- Poseidon hash is ZK-friendly but ensure proper implementation
- Nullifier system prevents double-spending - critical for security
- ReentrancyGuard on deposit/withdraw prevents reentrancy
- Ownable pattern for verifier updates (admin function)
- All ZK proofs verified on-chain before state changes

## Deployed Contracts (Rayls Devnet)

### RaylsShieldPool (Latest Deployment: 2025-11-29 - With Full AML Protection)
- **RaylsShieldPool**: `0x7DF45676cb5Cc92DF8DD71b72745065391c7C6Be`
- **Privacy Verifier**: `0xc853De1e8a8a3Ead0e2A4A39084B792e1e58Dd53`
- **Compliance Verifier**: `0xF1925bE98A8Cb667CD65b5FadD171011E2832bca`
- **PoseidonT2 Library**: `0x7A3C527d48390c5690Fe7d81D021d83B278b6Eae`

Explorer: https://devnet-explorer.rayls.com

**Network Details:**
- Chain ID: 123123
- RPC: https://devnet-rpc.rayls.com
- Gas Token: USDgas
- **Compliance Mode: ENABLED ✅** - Full AML protection active
- **AML Threshold: 10,000 USDgas** - Maximum amount per transaction
- Fixed Denomination: VARIABLE (0 = any amount allowed, up to AML threshold)

**Compliance Features:**
- ✅ Deposits blocked if amount >= $10,000 USDgas
- ✅ Withdrawals require compliance ZK proof
- ✅ ZK circuit enforces amount < AML threshold
- ✅ Enhanced circuit with 128-bit comparisons (supports large wei amounts)

Deployment records available in `backend/deployments/pool-raylsDevnet-latest.json`
