# RaylsShield Frontend Integration

This document describes the integration between the RaylsShield smart contracts and the Next.js frontend application.

## 🎯 Overview

The frontend provides a user-friendly interface for:
- Connecting Web3 wallets (MetaMask)
- Generating Zero-Knowledge proofs for private transactions
- Sending private cross-chain messages via RaylsShield
- Tracking transaction status in real-time

## 🏗️ Architecture

### Components

```
frontend/rayls-shield-landing-page/
├── components/
│   └── dapp-interface.tsx          # Main DApp UI component
├── hooks/
│   ├── use-wallet.ts               # Wallet connection & management
│   └── use-rayls-shield.ts         # Smart contract interactions
├── lib/
│   ├── contracts/
│   │   ├── RaylsShieldABI.ts       # RaylsShield contract ABI
│   │   ├── Groth16VerifierABI.ts   # Verifier contract ABI
│   │   └── addresses.ts            # Contract addresses
│   ├── web3/
│   │   └── provider.ts             # Web3 provider wrapper
│   └── zk/
│       └── proof-generator.ts      # ZK proof generation
└── .env.local                      # Environment configuration
```

## 🔌 Smart Contract Integration

### Deployed Contracts

**Rayls Testnet (Chain ID: 123123)**

| Contract | Address | Purpose |
|----------|---------|---------|
| RaylsShield | `0x71E3a04c9Ecc624656334756f70dAAA1fc4F985D` | Main privacy contract |
| Groth16Verifier | `0xaF7B67b88128820Fae205A07aDC055ed509Bdb12` | ZK proof verifier |

### Key Functions

#### RaylsShield Contract

```typescript
// Send private message with ZK proof
function sendPrivateMessage(
  dstChainId: number,
  destination: address,
  encryptedPayload: bytes,
  pA: [uint256, uint256],
  pB: [[uint256, uint256], [uint256, uint256]],
  pC: [uint256, uint256],
  publicSignals: [uint256, uint256, uint256]
)

// Check if nullifier has been used
function isNullifierUsed(nullifier: bytes32): bool

// Check if message has been verified
function isMessageVerified(messageHash: bytes32): bool
```

## 🔐 ZK Proof Generation

### Flow

1. **Input Generation**: User provides amount and recipient
2. **Secret Generation**: Random secret and nullifier are generated
3. **Proof Computation**: Poseidon hashes compute public signals
4. **Proof Generation**: ZK proof is generated (currently mock)
5. **Contract Interaction**: Proof is sent to RaylsShield contract

### Implementation Notes

The current implementation uses **mock proofs** for development. To enable real ZK proofs:

1. Compile circuits:
```bash
cd ../../backend
npm run circom
```

2. Copy circuit files to frontend:
```bash
cp backend/circuits/privacy.wasm frontend/rayls-shield-landing-page/public/circuits/
cp backend/circuits/privacy.zkey frontend/rayls-shield-landing-page/public/circuits/
cp backend/circuits/verification_key.json frontend/rayls-shield-landing-page/public/circuits/
```

3. Update `proof-generator.ts` to use real snarkjs:
```typescript
import * as snarkjs from 'snarkjs';

export async function generateZKProof(params: ProofInputs): Promise<ProofOutput> {
  const wasmPath = '/circuits/privacy.wasm';
  const zkeyPath = '/circuits/privacy.zkey';
  
  const { proof, publicSignals } = await snarkjs.groth16.fullProve(
    inputs,
    wasmPath,
    zkeyPath
  );
  
  return formatProofForSolidity(proof, publicSignals);
}
```

## 🎣 React Hooks

### useWallet

Manages wallet connection and network switching.

```typescript
const {
  isConnected,      // Wallet connection status
  address,          // Connected wallet address
  chainId,          // Current chain ID
  isCorrectNetwork, // Is on Rayls Testnet?
  error,            // Error message
  connect,          // Connect wallet function
  switchNetwork,    // Switch to Rayls network
  disconnect,       // Disconnect wallet
} = useWallet();
```

### useRaylsShield

Handles smart contract interactions.

```typescript
const {
  sendPrivateMessage,    // Send private cross-chain message
  isNullifierUsed,       // Check nullifier status
  isMessageVerified,     // Check message verification
  verifyProof,           // Verify proof with verifier contract
  resetStatus,           // Reset transaction status
  txStatus,              // Current transaction status
  isLoading,             // Loading state
} = useRaylsShield();
```

## 📊 Transaction Flow

### User Journey

1. **Connect Wallet**
   - User clicks "Connect Wallet"
   - MetaMask prompts for permission
   - Frontend checks network (Rayls Testnet)

2. **Switch Network** (if needed)
   - Frontend detects wrong network
   - Prompts user to switch to Rayls Testnet
   - Automatically adds network to MetaMask if not present

3. **Enter Transaction Details**
   - Recipient address (Ethereum address)
   - Amount (in USDr tokens)

4. **Generate Proof & Send**
   - Frontend generates random secret & nullifier
   - Computes ZK proof (currently mock)
   - Calls `sendPrivateMessage` on RaylsShield contract
   - User signs transaction in MetaMask

5. **Transaction Confirmation**
   - Frontend tracks transaction status
   - Shows transaction hash with explorer link
   - Displays success/error message

### Transaction States

```typescript
type TransactionStatus = {
  status: 'idle' | 'generating-proof' | 'signing' | 'pending' | 'success' | 'error';
  hash?: string;
  error?: string;
  proof?: ProofOutput;
}
```

## 🛠️ Development

### Prerequisites

```bash
npm install
```

### Environment Setup

Copy `.env.example` to `.env.local` and configure:

```bash
cp .env.example .env.local
```

### Run Development Server

```bash
npm run dev
```

Visit: http://localhost:3000/dapp

### Build for Production

```bash
npm run build
npm start
```

## 🔒 Security Considerations

### Current Implementation

- ⚠️ **Mock Proofs**: Using mock ZK proofs for development
- ⚠️ **Client-Side Keys**: Secret and nullifier generated in browser
- ✅ **No Private Keys Stored**: Uses MetaMask for signing
- ✅ **Contract Verification**: All proofs verified on-chain

### Production Recommendations

1. **Real ZK Proofs**: Implement actual Groth16 proof generation
2. **Web Workers**: Move proof generation to Web Worker for better UX
3. **Encrypted Storage**: Consider encrypting secrets in browser storage
4. **Backend API**: Optional backend API for proof generation (trades privacy for UX)
5. **Rate Limiting**: Implement rate limiting for contract calls
6. **Error Handling**: Enhanced error messages and recovery

## 🧪 Testing

### Manual Testing

1. Install MetaMask browser extension
2. Add Rayls Testnet to MetaMask:
   - Network Name: Rayls Testnet
   - RPC URL: https://devnet-rpc.rayls.com
   - Chain ID: 123123
   - Currency: USDgas
   - Explorer: https://devnet-explorer.rayls.com

3. Get testnet tokens (if faucet available)

4. Connect to DApp and test transaction flow

### Integration Tests

```bash
# Backend contract tests (includes ZK proofs)
cd ../../backend
npm test
```

## 📚 Resources

- [RaylsShield Documentation](../../README.md)
- [Rayls Protocol Docs](https://docs.rayls.com)
- [Circom Documentation](https://docs.circom.io/)
- [snarkjs Documentation](https://github.com/iden3/snarkjs)

## 🤝 Contributing

1. Ensure all TypeScript types are correct
2. Test wallet connection on different networks
3. Verify contract interactions on testnet
4. Document any new features or changes

## 📝 License

MIT
