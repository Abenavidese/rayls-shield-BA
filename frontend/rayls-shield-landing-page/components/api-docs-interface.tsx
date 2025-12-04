'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ArrowLeft, Code, Terminal, FileCode, Book, Copy, Check, AlertCircle } from 'lucide-react'

export function ApiDocsInterface() {
  const searchParams = useSearchParams()
  const tabParam = searchParams.get('tab')
  const [activeTab, setActiveTab] = useState(tabParam || 'contracts')
  const [copiedCode, setCopiedCode] = useState<string | null>(null)

  useEffect(() => {
    if (tabParam) {
      setActiveTab(tabParam)
    }
  }, [tabParam])

  const copyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(id)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  return (
    <>
      {/* Navigation Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#03051A]/95 backdrop-blur-md border-b border-[#F4FF4A]/10">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <img 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-VppUk6C0PqXEejmhm4odcKCCDOIUKm.png" 
                alt="RaylsShield Logo"
                className="h-8"
              />
            </Link>

            <div className="flex items-center gap-4">
              <Link href="/">
                <Button variant="ghost" size="sm" className="text-gray-300 hover:text-[#F4FF4A] gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Back to Home
                </Button>
              </Link>
              <Link href="/docs">
                <Button variant="outline" size="sm" className="border-[#F4FF4A] text-[#F4FF4A] hover:bg-[#F4FF4A]/10">
                  <Book className="h-4 w-4 mr-2" />
                  Getting Started
                </Button>
              </Link>
              <Link href="/pool">
                <Button size="sm" className="bg-[#C7A9FF] text-[#03051A] hover:bg-[#C7A9FF]/90">
                  Launch App
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      </header>

      <div className="min-h-screen bg-[#03051A] pt-24">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Terminal className="h-10 w-10 text-[#C7A9FF]" />
                <h1 className="text-4xl md:text-5xl font-bold text-white">
                  API Reference
                </h1>
              </div>
              <p className="text-xl text-gray-400">
                Complete technical documentation for RaylsShield smart contracts and SDK
              </p>
            </div>

            {/* Main Content */}
            <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
              <TabsList className="bg-[#05071F] border border-[#C7A9FF]/20">
                <TabsTrigger value="contracts" className="data-[state=active]:bg-[#C7A9FF]/20 data-[state=active]:text-[#C7A9FF]">
                  Smart Contracts
                </TabsTrigger>
                <TabsTrigger value="sdk" className="data-[state=active]:bg-[#C7A9FF]/20 data-[state=active]:text-[#C7A9FF]">
                  JavaScript SDK
                </TabsTrigger>
                <TabsTrigger value="circuits" className="data-[state=active]:bg-[#C7A9FF]/20 data-[state=active]:text-[#C7A9FF]">
                  ZK Circuits
                </TabsTrigger>
                <TabsTrigger value="architecture" className="data-[state=active]:bg-[#C7A9FF]/20 data-[state=active]:text-[#C7A9FF]">
                  Architecture
                </TabsTrigger>
              </TabsList>

              {/* Smart Contracts Tab */}
              <TabsContent value="contracts" className="space-y-8">
                {/* RaylsShieldPool Contract */}
                <Card className="border-[#C7A9FF]/20">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-2xl text-white flex items-center gap-2">
                          <FileCode className="h-6 w-6 text-[#C7A9FF]" />
                          RaylsShieldPool
                        </CardTitle>
                        <CardDescription className="mt-2">
                          Core privacy pool contract for deposits and withdrawals
                        </CardDescription>
                      </div>
                      <span className="text-xs bg-[#C7A9FF]/20 text-[#C7A9FF] px-3 py-1 rounded font-mono">
                        v1.0.0
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Contract Info */}
                    <div className="bg-[#05071F] rounded-lg p-4 border border-border/50">
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-400">Address:</span>
                          <div className="font-mono text-[#C7A9FF] mt-1">0x7DF45676cb5Cc92DF8DD71b72745065391c7C6Be</div>
                        </div>
                        <div>
                          <span className="text-gray-400">Solidity Version:</span>
                          <div className="font-mono text-white mt-1">^0.8.20</div>
                        </div>
                        <div>
                          <span className="text-gray-400">Chain:</span>
                          <div className="font-mono text-white mt-1">Rayls Devnet (123123)</div>
                        </div>
                        <div>
                          <span className="text-gray-400">License:</span>
                          <div className="font-mono text-white mt-1">MIT</div>
                        </div>
                      </div>
                    </div>

                    {/* deposit() Function */}
                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold text-white">deposit()</h3>
                      <p className="text-gray-300 text-sm">
                        Deposit USDgas into the pool with a cryptographic commitment
                      </p>
                      
                      <div className="bg-[#05071F] rounded-lg overflow-hidden border border-[#C7A9FF]/20">
                        <div className="flex items-center justify-between px-4 py-2 bg-[#C7A9FF]/10 border-b border-[#C7A9FF]/20">
                          <span className="text-sm font-mono text-[#C7A9FF]">Solidity</span>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => copyCode('function deposit(bytes32 commitment) external payable', 'deposit-sol')}
                            className="h-6 text-xs"
                          >
                            {copiedCode === 'deposit-sol' ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                          </Button>
                        </div>
                        <pre className="p-4 overflow-x-auto">
                          <code className="text-sm text-[#F4FF4A]">{`function deposit(bytes32 commitment) external payable nonReentrant {
    require(msg.value > 0, "Must send USDgas");
    require(!commitments[commitment], "Commitment already exists");
    
    // Store commitment
    commitments[commitment] = true;
    deposits[commitment] = Deposit({
        amount: msg.value,
        timestamp: block.timestamp,
        depositor: msg.sender,
        withdrawn: false
    });
    
    totalDeposits++;
    activeDeposits++;
    
    emit DepositMade(commitment, msg.value, block.timestamp, totalDeposits);
}`}</code>
                        </pre>
                      </div>

                      <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                        <h4 className="font-semibold text-white mb-2 text-sm">Parameters</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex gap-3">
                            <code className="text-[#C7A9FF]">commitment</code>
                            <span className="text-gray-400">Poseidon hash of (secret, nullifier, amount, recipient)</span>
                          </div>
                          <div className="flex gap-3">
                            <code className="text-[#C7A9FF]">msg.value</code>
                            <span className="text-gray-400">Amount of USDgas to deposit (payable)</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                        <h4 className="font-semibold text-white mb-2 text-sm">Events</h4>
                        <code className="text-sm text-green-400">
                          DepositMade(bytes32 commitment, uint256 amount, uint256 timestamp, uint256 totalDeposits)
                        </code>
                      </div>
                    </div>

                    {/* withdraw() Function */}
                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold text-white">withdraw()</h3>
                      <p className="text-gray-300 text-sm">
                        Withdraw USDgas using a zero-knowledge proof
                      </p>
                      
                      <div className="bg-[#05071F] rounded-lg overflow-hidden border border-[#C7A9FF]/20">
                        <div className="flex items-center justify-between px-4 py-2 bg-[#C7A9FF]/10 border-b border-[#C7A9FF]/20">
                          <span className="text-sm font-mono text-[#C7A9FF]">Solidity</span>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => copyCode('function withdraw(...)', 'withdraw-sol')}
                            className="h-6 text-xs"
                          >
                            {copiedCode === 'withdraw-sol' ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                          </Button>
                        </div>
                        <pre className="p-4 overflow-x-auto">
                          <code className="text-sm text-[#F4FF4A]">{`function withdraw(
    uint256[2] calldata pA,
    uint256[2][2] calldata pB,
    uint256[2] calldata pC,
    bytes32 nullifierHash,
    address payable recipient,
    uint256 amount
) external nonReentrant {
    require(!nullifiers[nullifierHash], "Already withdrawn");
    
    // Verify ZK proof
    uint256[3] memory pubSignals = [
        uint256(nullifierHash),
        uint256(uint160(recipient)),
        amount
    ];
    
    bool valid = privacyVerifier.verifyProof(pA, pB, pC, pubSignals);
    require(valid, "Invalid proof");
    
    // Mark as withdrawn
    nullifiers[nullifierHash] = true;
    totalWithdrawals++;
    activeDeposits--;
    
    // Transfer USDgas
    (bool success, ) = recipient.call{value: amount}("");
    require(success, "Transfer failed");
    
    emit WithdrawalMade(nullifierHash, recipient, amount, block.timestamp);
}`}</code>
                        </pre>
                      </div>

                      <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                        <h4 className="font-semibold text-white mb-2 text-sm">Parameters</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex gap-3">
                            <code className="text-[#C7A9FF]">pA, pB, pC</code>
                            <span className="text-gray-400">Groth16 proof components</span>
                          </div>
                          <div className="flex gap-3">
                            <code className="text-[#C7A9FF]">nullifierHash</code>
                            <span className="text-gray-400">Hash of the nullifier (prevents double-spending)</span>
                          </div>
                          <div className="flex gap-3">
                            <code className="text-[#C7A9FF]">recipient</code>
                            <span className="text-gray-400">Address to receive the USDgas</span>
                          </div>
                          <div className="flex gap-3">
                            <code className="text-[#C7A9FF]">amount</code>
                            <span className="text-gray-400">Amount to withdraw (must match deposit)</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* View Functions */}
                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold text-white">View Functions</h3>
                      
                      <div className="bg-[#05071F] rounded-lg p-4 space-y-3 text-sm">
                        <div className="flex items-start justify-between">
                          <div>
                            <code className="text-[#C7A9FF]">totalDeposits()</code>
                            <p className="text-gray-400 mt-1">Returns total number of deposits made</p>
                          </div>
                          <span className="text-xs text-gray-500">→ uint256</span>
                        </div>
                        <div className="h-px bg-border/50" />
                        <div className="flex items-start justify-between">
                          <div>
                            <code className="text-[#C7A9FF]">activeDeposits()</code>
                            <p className="text-gray-400 mt-1">Returns current anonymity set size</p>
                          </div>
                          <span className="text-xs text-gray-500">→ uint256</span>
                        </div>
                        <div className="h-px bg-border/50" />
                        <div className="flex items-start justify-between">
                          <div>
                            <code className="text-[#C7A9FF]">commitments(bytes32)</code>
                            <p className="text-gray-400 mt-1">Check if commitment exists</p>
                          </div>
                          <span className="text-xs text-gray-500">→ bool</span>
                        </div>
                        <div className="h-px bg-border/50" />
                        <div className="flex items-start justify-between">
                          <div>
                            <code className="text-[#C7A9FF]">nullifiers(bytes32)</code>
                            <p className="text-gray-400 mt-1">Check if nullifier was used</p>
                          </div>
                          <span className="text-xs text-gray-500">→ bool</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Verifier Contracts */}
                <Card className="border-border/50">
                  <CardHeader>
                    <CardTitle className="text-xl text-white">Verifier Contracts</CardTitle>
                    <CardDescription>ZK-SNARK proof verification</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-[#05071F] rounded-lg p-4 border border-green-500/20">
                        <h3 className="font-semibold text-white mb-2">PrivacyVerifier</h3>
                        <p className="text-sm text-gray-400 mb-3">Verifies withdrawal proofs</p>
                        <code className="text-xs text-[#C7A9FF] break-all">0xc853De1e8a8a3Ead0e2A4A39084B792e1e58Dd53</code>
                      </div>
                      <div className="bg-[#05071F] rounded-lg p-4 border border-blue-500/20">
                        <h3 className="font-semibold text-white mb-2">ComplianceVerifier</h3>
                        <p className="text-sm text-gray-400 mb-3">Verifies AML compliance proofs</p>
                        <code className="text-xs text-[#C7A9FF] break-all">0xF1925bE98A8Cb667CD65b5FadD171011E2832bca</code>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* JavaScript SDK Tab */}
              <TabsContent value="sdk" className="space-y-8">
                <Card className="border-[#F4FF4A]/20">
                  <CardHeader>
                    <CardTitle className="text-2xl text-white">JavaScript SDK</CardTitle>
                    <CardDescription>Client-side integration for web applications</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Installation */}
                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold text-white">Installation</h3>
                      <div className="bg-[#05071F] rounded-lg overflow-hidden border border-[#F4FF4A]/20">
                        <div className="flex items-center justify-between px-4 py-2 bg-[#F4FF4A]/10 border-b border-[#F4FF4A]/20">
                          <span className="text-sm font-mono text-[#F4FF4A]">bash</span>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => copyCode('npm install ethers@6 snarkjs circomlibjs', 'install')}
                            className="h-6 text-xs"
                          >
                            {copiedCode === 'install' ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                          </Button>
                        </div>
                        <pre className="p-4">
                          <code className="text-sm text-[#F4FF4A]">npm install ethers@6 snarkjs circomlibjs</code>
                        </pre>
                      </div>
                    </div>

                    {/* Connect to Contract */}
                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold text-white">Connect to Contract</h3>
                      <div className="bg-[#05071F] rounded-lg overflow-hidden border border-[#C7A9FF]/20">
                        <div className="flex items-center justify-between px-4 py-2 bg-[#C7A9FF]/10 border-b border-[#C7A9FF]/20">
                          <span className="text-sm font-mono text-[#C7A9FF]">TypeScript</span>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => copyCode('const provider = new BrowserProvider...', 'connect')}
                            className="h-6 text-xs"
                          >
                            {copiedCode === 'connect' ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                          </Button>
                        </div>
                        <pre className="p-4 overflow-x-auto">
                          <code className="text-sm text-[#F4FF4A]">{`import { BrowserProvider, Contract, parseEther } from 'ethers'
import RaylsShieldPoolABI from './RaylsShieldPoolABI.json'

const CONTRACT_ADDRESS = '0x7DF45676cb5Cc92DF8DD71b72745065391c7C6Be'

// Connect to MetaMask
const provider = new BrowserProvider(window.ethereum)
const signer = await provider.getSigner()

// Load contract
const contract = new Contract(CONTRACT_ADDRESS, RaylsShieldPoolABI, signer)`}</code>
                        </pre>
                      </div>
                    </div>

                    {/* Generate Commitment */}
                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold text-white">Generate Commitment</h3>
                      <div className="bg-[#05071F] rounded-lg overflow-hidden border border-[#C7A9FF]/20">
                        <div className="flex items-center justify-between px-4 py-2 bg-[#C7A9FF]/10 border-b border-[#C7A9FF]/20">
                          <span className="text-sm font-mono text-[#C7A9FF]">TypeScript</span>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => copyCode('import { buildPoseidon }...', 'commitment')}
                            className="h-6 text-xs"
                          >
                            {copiedCode === 'commitment' ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                          </Button>
                        </div>
                        <pre className="p-4 overflow-x-auto">
                          <code className="text-sm text-[#F4FF4A]">{`import { buildPoseidon } from 'circomlibjs'
import { randomBytes } from 'crypto'

// Generate random secrets
const secret = BigInt('0x' + randomBytes(32).toString('hex'))
const nullifier = BigInt('0x' + randomBytes(32).toString('hex'))
const amount = parseEther('100')
const recipient = '0x742d35Cc6634C0532925a3b844Bc9e7595f38B31'

// Build Poseidon hash
const poseidon = await buildPoseidon()

// Create commitment
const commitment = poseidon.F.toString(
  poseidon([
    secret,
    nullifier,
    BigInt(amount.toString()),
    BigInt(recipient)
  ])
)

console.log('Commitment:', commitment)
// Save secret and nullifier for withdrawal!`}</code>
                        </pre>
                      </div>
                    </div>

                    {/* Make Deposit */}
                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold text-white">Make Deposit</h3>
                      <div className="bg-[#05071F] rounded-lg overflow-hidden border border-[#C7A9FF]/20">
                        <div className="flex items-center justify-between px-4 py-2 bg-[#C7A9FF]/10 border-b border-[#C7A9FF]/20">
                          <span className="text-sm font-mono text-[#C7A9FF]">TypeScript</span>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => copyCode('const tx = await contract.deposit...', 'deposit')}
                            className="h-6 text-xs"
                          >
                            {copiedCode === 'deposit' ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                          </Button>
                        </div>
                        <pre className="p-4 overflow-x-auto">
                          <code className="text-sm text-[#F4FF4A]">{`// Deposit USDgas with commitment
const tx = await contract.deposit(commitment, {
  value: amount
})

console.log('Transaction hash:', tx.hash)

// Wait for confirmation
const receipt = await tx.wait()
console.log('Deposit confirmed in block:', receipt.blockNumber)

// Generate payment link
const paymentData = {
  secret: secret.toString(),
  nullifier: nullifier.toString(),
  amount: amount.toString(),
  recipient: recipient,
  chainId: 123123,
  timestamp: Date.now()
}

const encoded = btoa(JSON.stringify(paymentData))
const paymentLink = \`https://raylsshield.com/claim/\${encoded}\`
console.log('Payment link:', paymentLink)`}</code>
                        </pre>
                      </div>
                    </div>

                    {/* Generate ZK Proof */}
                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold text-white">Generate ZK Proof</h3>
                      <div className="bg-[#05071F] rounded-lg overflow-hidden border border-[#C7A9FF]/20">
                        <div className="flex items-center justify-between px-4 py-2 bg-[#C7A9FF]/10 border-b border-[#C7A9FF]/20">
                          <span className="text-sm font-mono text-[#C7A9FF]">TypeScript</span>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => copyCode('import { groth16 }...', 'proof')}
                            className="h-6 text-xs"
                          >
                            {copiedCode === 'proof' ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                          </Button>
                        </div>
                        <pre className="p-4 overflow-x-auto">
                          <code className="text-sm text-[#F4FF4A]">{`import { groth16 } from 'snarkjs'

// Compute nullifier hash
const nullifierHash = poseidon([nullifier])

// Prepare circuit inputs
const input = {
  secret: secret.toString(),
  nullifier: nullifier.toString(),
  nullifierHash: nullifierHash.toString(),
  recipient: BigInt(recipient).toString(),
  amount: amount.toString()
}

// Generate proof (takes 1-2 seconds)
const { proof, publicSignals } = await groth16.fullProve(
  input,
  '/circuits/privacy.wasm',
  '/circuits/privacy_final.zkey'
)

// Format for contract
const proofCalldata = {
  pA: [proof.pi_a[0], proof.pi_a[1]],
  pB: [
    [proof.pi_b[0][1], proof.pi_b[0][0]],
    [proof.pi_b[1][1], proof.pi_b[1][0]]
  ],
  pC: [proof.pi_c[0], proof.pi_c[1]]
}

console.log('ZK Proof generated successfully')`}</code>
                        </pre>
                      </div>
                    </div>

                    {/* Withdraw */}
                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold text-white">Withdraw Funds</h3>
                      <div className="bg-[#05071F] rounded-lg overflow-hidden border border-[#C7A9FF]/20">
                        <div className="flex items-center justify-between px-4 py-2 bg-[#C7A9FF]/10 border-b border-[#C7A9FF]/20">
                          <span className="text-sm font-mono text-[#C7A9FF]">TypeScript</span>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => copyCode('const tx = await contract.withdraw...', 'withdraw')}
                            className="h-6 text-xs"
                          >
                            {copiedCode === 'withdraw' ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                          </Button>
                        </div>
                        <pre className="p-4 overflow-x-auto">
                          <code className="text-sm text-[#F4FF4A]">{`// Submit withdrawal transaction
const tx = await contract.withdraw(
  proofCalldata.pA,
  proofCalldata.pB,
  proofCalldata.pC,
  nullifierHash,
  recipient,
  amount
)

console.log('Withdrawal transaction:', tx.hash)

// Wait for confirmation
const receipt = await tx.wait()
console.log('Withdrawal complete!')
console.log('Recipient received', amount, 'USDgas')`}</code>
                        </pre>
                      </div>
                    </div>

                    <div className="bg-[#C7A9FF]/10 border border-[#C7A9FF]/30 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <AlertCircle className="h-6 w-6 text-[#C7A9FF] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold text-white mb-1">Security Note</h4>
                          <p className="text-sm text-gray-300">
                            Never share your secret or nullifier. These values are required to withdraw funds and should be stored securely.
                            The payment link contains these encrypted values, so treat it like cash.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* ZK Circuits Tab */}
              <TabsContent value="circuits" className="space-y-8">
                <Card className="border-[#C7A9FF]/20">
                  <CardHeader>
                    <CardTitle className="text-2xl text-white">Zero-Knowledge Circuits</CardTitle>
                    <CardDescription>Circom circuit specifications and proof generation</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Privacy Circuit */}
                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold text-white">Privacy Circuit</h3>
                      <p className="text-gray-300 text-sm">
                        Proves knowledge of a valid deposit without revealing which one
                      </p>
                      
                      <div className="bg-[#05071F] rounded-lg p-4 space-y-3 text-sm border border-[#C7A9FF]/20">
                        <div>
                          <span className="text-gray-400">Circuit File:</span>
                          <code className="ml-2 text-[#C7A9FF]">privacy.circom</code>
                        </div>
                        <div>
                          <span className="text-gray-400">Constraints:</span>
                          <code className="ml-2 text-white">~2,500</code>
                        </div>
                        <div>
                          <span className="text-gray-400">Proof Generation Time:</span>
                          <code className="ml-2 text-white">1-2 seconds</code>
                        </div>
                        <div>
                          <span className="text-gray-400">Verification Gas:</span>
                          <code className="ml-2 text-white">~250,000</code>
                        </div>
                      </div>

                      <div className="bg-[#05071F] rounded-lg overflow-hidden border border-[#C7A9FF]/20">
                        <div className="flex items-center justify-between px-4 py-2 bg-[#C7A9FF]/10 border-b border-[#C7A9FF]/20">
                          <span className="text-sm font-mono text-[#C7A9FF]">Circom</span>
                        </div>
                        <pre className="p-4 overflow-x-auto">
                          <code className="text-sm text-[#F4FF4A]">{`pragma circom 2.0.0;

include "poseidon.circom";

template PrivacyProof() {
    // Private inputs (known only to prover)
    signal input secret;
    signal input nullifier;
    
    // Public inputs (visible on-chain)
    signal input nullifierHash;
    signal input recipient;
    signal input amount;
    
    // Compute nullifier hash
    component nullifierHasher = Poseidon(1);
    nullifierHasher.inputs[0] <== nullifier;
    nullifierHasher.out === nullifierHash;
    
    // Commitment verification happens off-chain
    // The contract checks if commitment exists
}

component main {public [nullifierHash, recipient, amount]} = PrivacyProof();`}</code>
                        </pre>
                      </div>
                    </div>

                    {/* Circuit Inputs/Outputs */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-[#05071F] rounded-lg p-4 border border-blue-500/20">
                        <h3 className="font-semibold text-white mb-3">Private Inputs</h3>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <code className="text-[#C7A9FF]">secret</code>
                            <span className="text-gray-400">254 bits</span>
                          </div>
                          <div className="flex justify-between">
                            <code className="text-[#C7A9FF]">nullifier</code>
                            <span className="text-gray-400">254 bits</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-[#05071F] rounded-lg p-4 border border-green-500/20">
                        <h3 className="font-semibold text-white mb-3">Public Signals</h3>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <code className="text-[#C7A9FF]">nullifierHash</code>
                            <span className="text-gray-400">254 bits</span>
                          </div>
                          <div className="flex justify-between">
                            <code className="text-[#C7A9FF]">recipient</code>
                            <span className="text-gray-400">160 bits</span>
                          </div>
                          <div className="flex justify-between">
                            <code className="text-[#C7A9FF]">amount</code>
                            <span className="text-gray-400">256 bits</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Files */}
                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold text-white">Circuit Artifacts</h3>
                      <div className="bg-[#05071F] rounded-lg p-4 space-y-3 text-sm">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <FileCode className="h-4 w-4 text-[#C7A9FF]" />
                            <code className="text-[#C7A9FF]">privacy.wasm</code>
                          </div>
                          <span className="text-gray-400">WASM executor (~2MB)</span>
                        </div>
                        <div className="h-px bg-border/50" />
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <FileCode className="h-4 w-4 text-[#C7A9FF]" />
                            <code className="text-[#C7A9FF]">privacy_final.zkey</code>
                          </div>
                          <span className="text-gray-400">Proving key (~15MB)</span>
                        </div>
                        <div className="h-px bg-border/50" />
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <FileCode className="h-4 w-4 text-[#C7A9FF]" />
                            <code className="text-[#C7A9FF]">verification_key.json</code>
                          </div>
                          <span className="text-gray-400">Verification key (~1KB)</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <AlertCircle className="h-6 w-6 text-yellow-400 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold text-white mb-1">Trusted Setup</h4>
                          <p className="text-sm text-gray-300">
                            The circuit uses Groth16 which requires a trusted setup ceremony. For production use, 
                            a multi-party computation (MPC) ceremony should be conducted to ensure security.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Architecture Tab */}
              <TabsContent value="architecture" className="space-y-8">
                {/* System Overview */}
                <Card className="border-[#C7A9FF]/20">
                  <CardHeader>
                    <CardTitle className="text-2xl text-white">System Architecture</CardTitle>
                    <CardDescription>
                      High-level overview of RaylsShield's privacy protocol
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* User Layer */}
                    <div className="bg-gradient-to-br from-[#C7A9FF]/10 to-[#C7A9FF]/5 rounded-lg p-6 border border-[#C7A9FF]/30">
                      <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-[#C7A9FF]"></div>
                        User Layer
                      </h3>
                      <div className="grid grid-cols-3 gap-4">
                        <div className="bg-[#03051A] rounded-lg p-4 border border-[#C7A9FF]/40 text-center hover:border-[#C7A9FF]/60 transition-colors">
                          <div className="text-3xl mb-2">👤</div>
                          <h4 className="font-semibold text-white mb-1">Depositor</h4>
                          <p className="text-xs text-gray-400">(Alice)</p>
                          <div className="mt-3 text-sm text-[#C7A9FF]">
                            1. Deposit + commitment
                          </div>
                        </div>
                        <div className="bg-[#03051A] rounded-lg p-4 border border-[#C7A9FF]/40 text-center hover:border-[#C7A9FF]/60 transition-colors">
                          <div className="text-3xl mb-2">💸</div>
                          <h4 className="font-semibold text-white mb-1">Recipient</h4>
                          <p className="text-xs text-gray-400">(Bob)</p>
                          <div className="mt-3 text-sm text-[#C7A9FF]">
                            3. Withdraw + ZK proof
                          </div>
                        </div>
                        <div className="bg-[#03051A] rounded-lg p-4 border border-[#C7A9FF]/40 text-center hover:border-[#C7A9FF]/60 transition-colors">
                          <div className="text-3xl mb-2">👁️</div>
                          <h4 className="font-semibold text-white mb-1">Observer</h4>
                          <p className="text-xs text-gray-400">(Public)</p>
                          <div className="mt-3 text-sm text-[#C7A9FF]">
                            4. View stats (read-only)
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Arrow Down */}
                    <div className="flex justify-center">
                      <div className="flex flex-col items-center">
                        <div className="text-[#C7A9FF] text-2xl">↓</div>
                        <div className="h-8 w-px bg-gradient-to-b from-[#C7A9FF] to-transparent"></div>
                      </div>
                    </div>

                    {/* Frontend Layer */}
                    <div className="bg-gradient-to-br from-[#F4FF4A]/10 to-[#F4FF4A]/5 rounded-lg p-6 border border-[#F4FF4A]/30">
                      <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-[#F4FF4A]"></div>
                        Frontend Layer (Next.js)
                      </h3>
                      <div className="space-y-4">
                        <div className="bg-[#03051A] rounded-lg p-4 border border-[#F4FF4A]/40">
                          <div className="grid grid-cols-2 gap-4 mb-4">
                            <div className="text-center p-3 rounded-lg bg-[#F4FF4A]/5 border border-[#F4FF4A]/20 hover:border-[#F4FF4A]/40 transition-colors">
                              <div className="text-2xl mb-2">📥</div>
                              <h4 className="font-semibold text-white text-sm">/pool</h4>
                              <p className="text-xs text-gray-400">Deposit UI</p>
                            </div>
                            <div className="text-center p-3 rounded-lg bg-[#F4FF4A]/5 border border-[#F4FF4A]/20 hover:border-[#F4FF4A]/40 transition-colors">
                              <div className="text-2xl mb-2">📤</div>
                              <h4 className="font-semibold text-white text-sm">/claim/[token]</h4>
                              <p className="text-xs text-gray-400">Withdraw UI</p>
                            </div>
                          </div>
                        </div>
                        <div className="bg-[#03051A] rounded-lg p-4 border border-[#F4FF4A]/40">
                          <h4 className="font-semibold text-white mb-3 text-center flex items-center justify-center gap-2">
                            <span className="text-[#F4FF4A]">⚙️</span> useRaylsShieldPool Hook
                          </h4>
                          <div className="grid grid-cols-2 gap-3 text-sm text-gray-300">
                            <div className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#F4FF4A]"></div>
                              Connect wallet (ethers.js)
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#F4FF4A]"></div>
                              Generate commitments (Poseidon)
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#F4FF4A]"></div>
                              Generate ZK proofs (snarkjs)
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#F4FF4A]"></div>
                              Submit transactions
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Arrow Down */}
                    <div className="flex justify-center gap-16">
                      <div className="text-center">
                        <div className="flex flex-col items-center">
                          <div className="text-[#F4FF4A] text-2xl">↓</div>
                          <div className="h-8 w-px bg-gradient-to-b from-[#F4FF4A] to-transparent"></div>
                        </div>
                        <p className="text-xs text-gray-400 mt-2 px-3 py-1 rounded bg-[#F4FF4A]/10 border border-[#F4FF4A]/20">
                          2. Generate Commitment<br/>(off-chain)
                        </p>
                      </div>
                      <div className="text-center">
                        <div className="flex flex-col items-center">
                          <div className="text-[#F4FF4A] text-2xl">↓</div>
                          <div className="h-8 w-px bg-gradient-to-b from-[#F4FF4A] to-transparent"></div>
                        </div>
                        <p className="text-xs text-gray-400 mt-2 px-3 py-1 rounded bg-[#F4FF4A]/10 border border-[#F4FF4A]/20">
                          5. Generate ZK Proof<br/>(off-chain)
                        </p>
                      </div>
                    </div>

                    {/* ZK Layer */}
                    <div className="bg-gradient-to-br from-[#C7A9FF]/15 to-[#C7A9FF]/5 rounded-lg p-6 border border-[#C7A9FF]/40">
                      <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-[#C7A9FF]"></div>
                        Zero-Knowledge Proof Layer
                      </h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-[#03051A] rounded-lg p-5 border border-[#C7A9FF]/50 hover:border-[#C7A9FF]/70 transition-colors">
                          <div className="text-2xl mb-3 text-center">🔐</div>
                          <h4 className="font-semibold text-white mb-2 text-center">Poseidon Hash</h4>
                          <p className="text-xs text-gray-400 mb-3 text-center">(circomlibjs)</p>
                          <div className="bg-[#C7A9FF]/10 rounded p-3 border border-[#C7A9FF]/30">
                            <code className="text-xs text-[#C7A9FF] block">
                              commitment = Poseidon(<br/>
                              &nbsp;&nbsp;secret,<br/>
                              &nbsp;&nbsp;nullifier,<br/>
                              &nbsp;&nbsp;amount,<br/>
                              &nbsp;&nbsp;recipient<br/>
                              )
                            </code>
                          </div>
                        </div>
                        <div className="bg-[#03051A] rounded-lg p-5 border border-[#C7A9FF]/50 hover:border-[#C7A9FF]/70 transition-colors">
                          <div className="text-2xl mb-3 text-center">⚡</div>
                          <h4 className="font-semibold text-white mb-2 text-center">Groth16 Proof Gen</h4>
                          <p className="text-xs text-gray-400 mb-3 text-center">(snarkjs)</p>
                          <div className="space-y-2 text-xs text-gray-300">
                            <div className="flex items-center gap-2 bg-[#C7A9FF]/5 p-2 rounded">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#C7A9FF]"></div>
                              privacy.wasm
                            </div>
                            <div className="flex items-center gap-2 bg-[#C7A9FF]/5 p-2 rounded">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#C7A9FF]"></div>
                              privacy_final.zkey
                            </div>
                            <div className="flex items-center gap-2 bg-[#C7A9FF]/5 p-2 rounded">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#C7A9FF]"></div>
                              ~1-2 sec generation
                            </div>
                            <div className="text-[#C7A9FF] font-semibold mt-2 text-center bg-[#C7A9FF]/10 p-2 rounded border border-[#C7A9FF]/30">
                              Output: pA, pB, pC
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Arrow Down */}
                    <div className="flex justify-center">
                      <div className="flex flex-col items-center">
                        <div className="text-[#C7A9FF] text-2xl">↓</div>
                        <div className="h-8 w-px bg-gradient-to-b from-[#C7A9FF] to-[#F4FF4A]/50"></div>
                      </div>
                    </div>

                    {/* Blockchain Layer */}
                    <div className="bg-gradient-to-br from-[#F4FF4A]/15 to-[#F4FF4A]/5 rounded-lg p-6 border border-[#F4FF4A]/40">
                      <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-[#F4FF4A]"></div>
                        Blockchain Layer (Rayls Devnet)
                      </h3>
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-xs text-gray-400 bg-[#F4FF4A]/10 px-2 py-1 rounded border border-[#F4FF4A]/30">Chain ID: 123123</span>
                        <span className="text-xs text-gray-400 bg-[#F4FF4A]/10 px-2 py-1 rounded border border-[#F4FF4A]/30">RPC: https://devnet-rpc.rayls.com</span>
                      </div>
                      
                      <div className="bg-[#03051A] rounded-lg p-5 border border-[#F4FF4A]/50 mb-4">
                        <div className="flex items-center justify-center gap-2 mb-3">
                          <span className="text-2xl">⛓️</span>
                          <h4 className="font-semibold text-white text-center">RaylsShieldPool Contract</h4>
                        </div>
                        <p className="text-xs text-gray-400 text-center mb-4 font-mono bg-[#F4FF4A]/10 py-2 rounded border border-[#F4FF4A]/30">0x7DF45...C6Be</p>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-[#F4FF4A]/5 rounded-lg p-4 border border-[#F4FF4A]/30 hover:border-[#F4FF4A]/50 transition-colors">
                            <h5 className="font-semibold text-white text-sm mb-3 text-center">deposit()</h5>
                            <div className="text-xs text-gray-300 space-y-2">
                              <div className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#F4FF4A]"></div>
                                Store commitment
                              </div>
                              <div className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#F4FF4A]"></div>
                                Lock USDgas
                              </div>
                              <div className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#F4FF4A]"></div>
                                Emit event
                              </div>
                            </div>
                          </div>
                          <div className="bg-[#F4FF4A]/5 rounded-lg p-4 border border-[#F4FF4A]/30 hover:border-[#F4FF4A]/50 transition-colors">
                            <h5 className="font-semibold text-white text-sm mb-3 text-center">withdraw()</h5>
                            <div className="text-xs text-gray-300 space-y-2">
                              <div className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#F4FF4A]"></div>
                                Verify ZK proof
                              </div>
                              <div className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#F4FF4A]"></div>
                                Check nullifier
                              </div>
                              <div className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#F4FF4A]"></div>
                                Transfer USDgas
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-[#03051A] rounded-lg p-4 border border-[#F4FF4A]/40 text-center hover:border-[#F4FF4A]/60 transition-colors">
                          <div className="text-xl mb-2">🔗</div>
                          <h5 className="font-semibold text-white text-sm">PoseidonT2 Library</h5>
                          <p className="text-xs text-gray-400 mt-1">On-chain hashing</p>
                        </div>
                        <div className="bg-[#03051A] rounded-lg p-4 border border-[#F4FF4A]/40 text-center hover:border-[#F4FF4A]/60 transition-colors">
                          <div className="text-xl mb-2">✅</div>
                          <h5 className="font-semibold text-white text-sm">Groth16 Verifiers</h5>
                          <p className="text-xs text-gray-400 mt-1">Privacy & Compliance</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Deposit Flow */}
                <Card className="border-[#C7A9FF]/20">
                  <CardHeader>
                    <CardTitle className="text-2xl text-white">Deposit Flow</CardTitle>
                    <CardDescription>
                      Step-by-step process for making a private deposit
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Actors */}
                    <div className="grid grid-cols-4 gap-3 mb-6">
                      <div className="text-center p-3 rounded-lg bg-[#C7A9FF]/10 border border-[#C7A9FF]/30">
                        <div className="text-2xl mb-1">👤</div>
                        <h4 className="font-semibold text-white text-sm">User</h4>
                        <p className="text-xs text-gray-400">(Wallet)</p>
                      </div>
                      <div className="text-center p-3 rounded-lg bg-[#F4FF4A]/10 border border-[#F4FF4A]/30">
                        <div className="text-2xl mb-1">💻</div>
                        <h4 className="font-semibold text-white text-sm">Frontend</h4>
                        <p className="text-xs text-gray-400">(Next.js)</p>
                      </div>
                      <div className="text-center p-3 rounded-lg bg-[#C7A9FF]/10 border border-[#C7A9FF]/30">
                        <div className="text-2xl mb-1">🔐</div>
                        <h4 className="font-semibold text-white text-sm">ZK Layer</h4>
                        <p className="text-xs text-gray-400">(Circuits)</p>
                      </div>
                      <div className="text-center p-3 rounded-lg bg-[#F4FF4A]/10 border border-[#F4FF4A]/30">
                        <div className="text-2xl mb-1">⛓️</div>
                        <h4 className="font-semibold text-white text-sm">Blockchain</h4>
                        <p className="text-xs text-gray-400">(Contract)</p>
                      </div>
                    </div>

                    {/* Steps */}
                    <div className="space-y-3">
                      {/* Step 1 */}
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#C7A9FF] text-white flex items-center justify-center text-sm font-bold">1</div>
                        <div className="flex-1 bg-[#C7A9FF]/10 rounded-lg p-4 border border-[#C7A9FF]/30">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-white font-semibold">Connect Wallet</span>
                            <span className="text-xs text-gray-400 bg-[#C7A9FF]/20 px-2 py-0.5 rounded">User → Frontend</span>
                          </div>
                          <p className="text-sm text-gray-300">User initiates wallet connection via MetaMask</p>
                        </div>
                      </div>

                      {/* Step 2 */}
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#F4FF4A] text-[#03051A] flex items-center justify-center text-sm font-bold">2</div>
                        <div className="flex-1 bg-[#F4FF4A]/10 rounded-lg p-4 border border-[#F4FF4A]/30">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-white font-semibold">Load Contract & Stats</span>
                            <span className="text-xs text-gray-400 bg-[#F4FF4A]/20 px-2 py-0.5 rounded">Frontend → Blockchain</span>
                          </div>
                          <p className="text-sm text-gray-300">Fetch pool statistics and contract state</p>
                        </div>
                      </div>

                      {/* Step 3 */}
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#C7A9FF] text-white flex items-center justify-center text-sm font-bold">3</div>
                        <div className="flex-1 bg-[#C7A9FF]/10 rounded-lg p-4 border border-[#C7A9FF]/30">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-white font-semibold">Initiate Deposit</span>
                            <span className="text-xs text-gray-400 bg-[#C7A9FF]/20 px-2 py-0.5 rounded">User → Frontend</span>
                          </div>
                          <p className="text-sm text-gray-300">User enters deposit amount and recipient address</p>
                        </div>
                      </div>

                      {/* Step 4 */}
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#C7A9FF] text-white flex items-center justify-center text-sm font-bold">4</div>
                        <div className="flex-1 bg-[#C7A9FF]/10 rounded-lg p-4 border border-[#C7A9FF]/30">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-white font-semibold">Generate Commitment</span>
                            <span className="text-xs text-gray-400 bg-[#C7A9FF]/20 px-2 py-0.5 rounded">Frontend → ZK Layer</span>
                          </div>
                          <div className="bg-[#03051A] rounded p-3 border border-[#C7A9FF]/40">
                            <code className="text-xs text-[#C7A9FF] block">
                              commitment = Poseidon(secret, nullifier, amount, recipient)
                            </code>
                          </div>
                        </div>
                      </div>

                      {/* Step 5 */}
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#F4FF4A] text-[#03051A] flex items-center justify-center text-sm font-bold">5</div>
                        <div className="flex-1 bg-[#F4FF4A]/10 rounded-lg p-4 border border-[#F4FF4A]/30">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-white font-semibold">Sign Transaction</span>
                            <span className="text-xs text-gray-400 bg-[#F4FF4A]/20 px-2 py-0.5 rounded">User → Blockchain</span>
                          </div>
                          <p className="text-sm text-gray-300">User signs deposit transaction with commitment hash</p>
                        </div>
                      </div>

                      {/* Step 6 */}
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#F4FF4A] text-[#03051A] flex items-center justify-center text-sm font-bold">6</div>
                        <div className="flex-1 bg-[#F4FF4A]/10 rounded-lg p-4 border border-[#F4FF4A]/30">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-white font-semibold">Store Commitment & Lock Funds</span>
                            <span className="text-xs text-gray-400 bg-[#F4FF4A]/20 px-2 py-0.5 rounded">Blockchain</span>
                          </div>
                          <div className="grid grid-cols-2 gap-2 text-xs text-gray-300">
                            <div className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#F4FF4A]"></div>
                              Store commitment in mapping
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#F4FF4A]"></div>
                              Lock USDgas in contract
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#F4FF4A]"></div>
                              Emit DepositMade event
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#F4FF4A]"></div>
                              Return transaction receipt
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Step 7 */}
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#C7A9FF] text-white flex items-center justify-center text-sm font-bold">7</div>
                        <div className="flex-1 bg-[#C7A9FF]/10 rounded-lg p-4 border border-[#C7A9FF]/30">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-white font-semibold">Generate Payment Link</span>
                            <span className="text-xs text-gray-400 bg-[#C7A9FF]/20 px-2 py-0.5 rounded">Frontend</span>
                          </div>
                          <p className="text-sm text-gray-300">Create encrypted link with withdrawal credentials (secret, nullifier, amount, recipient)</p>
                        </div>
                      </div>
                    </div>

                    {/* Result */}
                    <div className="bg-gradient-to-r from-[#F4FF4A]/20 to-[#F4FF4A]/10 rounded-lg p-4 border border-[#F4FF4A]/40 mt-6">
                      <div className="flex items-center gap-3">
                        <div className="text-2xl">✅</div>
                        <div>
                          <h4 className="font-semibold text-white mb-1">Result</h4>
                          <p className="text-sm text-gray-300">User receives encrypted payment link with withdrawal credentials</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Withdrawal Flow */}
                <Card className="border-[#C7A9FF]/20">
                  <CardHeader>
                    <CardTitle className="text-2xl text-white">Withdrawal Flow</CardTitle>
                    <CardDescription>
                      Step-by-step process for anonymous withdrawal
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Actors */}
                    <div className="grid grid-cols-4 gap-3 mb-6">
                      <div className="text-center p-3 rounded-lg bg-[#C7A9FF]/10 border border-[#C7A9FF]/30">
                        <div className="text-2xl mb-1">👤</div>
                        <h4 className="font-semibold text-white text-sm">User</h4>
                        <p className="text-xs text-gray-400">(Wallet)</p>
                      </div>
                      <div className="text-center p-3 rounded-lg bg-[#F4FF4A]/10 border border-[#F4FF4A]/30">
                        <div className="text-2xl mb-1">💻</div>
                        <h4 className="font-semibold text-white text-sm">Frontend</h4>
                        <p className="text-xs text-gray-400">(Next.js)</p>
                      </div>
                      <div className="text-center p-3 rounded-lg bg-[#C7A9FF]/10 border border-[#C7A9FF]/30">
                        <div className="text-2xl mb-1">🔐</div>
                        <h4 className="font-semibold text-white text-sm">ZK Layer</h4>
                        <p className="text-xs text-gray-400">(Circuits)</p>
                      </div>
                      <div className="text-center p-3 rounded-lg bg-[#F4FF4A]/10 border border-[#F4FF4A]/30">
                        <div className="text-2xl mb-1">⛓️</div>
                        <h4 className="font-semibold text-white text-sm">Blockchain</h4>
                        <p className="text-xs text-gray-400">(Contract)</p>
                      </div>
                    </div>

                    {/* Steps */}
                    <div className="space-y-3">
                      {/* Step 1 */}
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#C7A9FF] text-white flex items-center justify-center text-sm font-bold">1</div>
                        <div className="flex-1 bg-[#C7A9FF]/10 rounded-lg p-4 border border-[#C7A9FF]/30">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-white font-semibold">Open Payment Link</span>
                            <span className="text-xs text-gray-400 bg-[#C7A9FF]/20 px-2 py-0.5 rounded">User → Frontend</span>
                          </div>
                          <p className="text-sm text-gray-300">User visits /claim/[token] URL with encrypted credentials</p>
                        </div>
                      </div>

                      {/* Step 2 */}
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#F4FF4A] text-[#03051A] flex items-center justify-center text-sm font-bold">2</div>
                        <div className="flex-1 bg-[#F4FF4A]/10 rounded-lg p-4 border border-[#F4FF4A]/30">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-white font-semibold">Decrypt Link & Extract Credentials</span>
                            <span className="text-xs text-gray-400 bg-[#F4FF4A]/20 px-2 py-0.5 rounded">Frontend</span>
                          </div>
                          <div className="grid grid-cols-2 gap-2 text-xs text-gray-300">
                            <div className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#F4FF4A]"></div>
                              Extract secret
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#F4FF4A]"></div>
                              Extract nullifier
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#F4FF4A]"></div>
                              Extract amount
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#F4FF4A]"></div>
                              Extract recipient
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Step 3 */}
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#C7A9FF] text-white flex items-center justify-center text-sm font-bold">3</div>
                        <div className="flex-1 bg-[#C7A9FF]/10 rounded-lg p-4 border border-[#C7A9FF]/30">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-white font-semibold">Connect Wallet</span>
                            <span className="text-xs text-gray-400 bg-[#C7A9FF]/20 px-2 py-0.5 rounded">User → Frontend</span>
                          </div>
                          <p className="text-sm text-gray-300">User connects wallet to receive withdrawn funds</p>
                        </div>
                      </div>

                      {/* Step 4 */}
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#C7A9FF] text-white flex items-center justify-center text-sm font-bold">4</div>
                        <div className="flex-1 bg-[#C7A9FF]/10 rounded-lg p-4 border border-[#C7A9FF]/30">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-white font-semibold">Initiate Withdrawal</span>
                            <span className="text-xs text-gray-400 bg-[#C7A9FF]/20 px-2 py-0.5 rounded">User → Frontend</span>
                          </div>
                          <p className="text-sm text-gray-300">User confirms withdrawal to their connected address</p>
                        </div>
                      </div>

                      {/* Step 5 */}
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#C7A9FF] text-white flex items-center justify-center text-sm font-bold">5</div>
                        <div className="flex-1 bg-[#C7A9FF]/10 rounded-lg p-4 border border-[#C7A9FF]/30">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-white font-semibold">Request ZK Proof Generation</span>
                            <span className="text-xs text-gray-400 bg-[#C7A9FF]/20 px-2 py-0.5 rounded">Frontend → ZK Layer</span>
                          </div>
                          <p className="text-sm text-gray-300">Send private inputs to circuit for proof computation</p>
                        </div>
                      </div>

                      {/* Step 6 */}
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#C7A9FF] text-white flex items-center justify-center text-sm font-bold">6</div>
                        <div className="flex-1 bg-[#C7A9FF]/10 rounded-lg p-4 border border-[#C7A9FF]/30">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-white font-semibold">Generate Zero-Knowledge Proof</span>
                            <span className="text-xs text-gray-400 bg-[#C7A9FF]/20 px-2 py-0.5 rounded">ZK Layer (~1-2 sec)</span>
                          </div>
                          <div className="bg-[#03051A] rounded p-3 border border-[#C7A9FF]/40 mb-2">
                            <p className="text-xs text-[#C7A9FF] mb-2">Prove: "I know secret for valid commitment"</p>
                            <code className="text-xs text-gray-300 block">
                              Without revealing: secret, nullifier, or which deposit
                            </code>
                          </div>
                          <div className="text-xs text-gray-300 bg-[#C7A9FF]/5 p-2 rounded">
                            Output: proof (pA, pB, pC) + public signals
                          </div>
                        </div>
                      </div>

                      {/* Step 7 */}
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#F4FF4A] text-[#03051A] flex items-center justify-center text-sm font-bold">7</div>
                        <div className="flex-1 bg-[#F4FF4A]/10 rounded-lg p-4 border border-[#F4FF4A]/30">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-white font-semibold">Sign Withdrawal Transaction</span>
                            <span className="text-xs text-gray-400 bg-[#F4FF4A]/20 px-2 py-0.5 rounded">User → Blockchain</span>
                          </div>
                          <p className="text-sm text-gray-300">User signs transaction with ZK proof and public signals</p>
                        </div>
                      </div>

                      {/* Step 8 */}
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#F4FF4A] text-[#03051A] flex items-center justify-center text-sm font-bold">8</div>
                        <div className="flex-1 bg-[#F4FF4A]/10 rounded-lg p-4 border border-[#F4FF4A]/30">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-white font-semibold">Verify Proof & Transfer Funds</span>
                            <span className="text-xs text-gray-400 bg-[#F4FF4A]/20 px-2 py-0.5 rounded">Blockchain</span>
                          </div>
                          <div className="grid grid-cols-2 gap-2 text-xs text-gray-300">
                            <div className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#F4FF4A]"></div>
                              Verify ZK proof validity
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#F4FF4A]"></div>
                              Check nullifier not used
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#F4FF4A]"></div>
                              Mark nullifier as spent
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#F4FF4A]"></div>
                              Transfer USDgas to recipient
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Result */}
                    <div className="bg-gradient-to-r from-green-500/20 to-green-700/20 rounded-lg p-4 border border-green-500/40 mt-6">
                      <div className="flex items-center gap-3">
                        <div className="text-2xl">✅</div>
                        <div>
                          <h4 className="font-semibold text-white mb-1">Result</h4>
                          <p className="text-sm text-gray-300">User receives USDgas anonymously (unlinked from original deposit)</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Privacy Model */}
                <Card className="border-[#C7A9FF]/20">
                  <CardHeader>
                    <CardTitle className="text-2xl text-white">Privacy Model</CardTitle>
                    <CardDescription>
                      How Tornado Cash-style privacy works
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Traditional Transfer */}
                    <div>
                      <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                        <span className="text-gray-400">❌</span> Traditional Transfer (No Privacy)
                      </h4>
                      <div className="bg-gray-500/10 rounded-lg p-6 border border-gray-500/30">
                        <div className="flex items-center justify-between max-w-2xl mx-auto">
                          <div className="text-center p-4 rounded-lg bg-[#03051A] border border-gray-400/40">
                            <div className="text-3xl mb-2">👤</div>
                            <h5 className="font-semibold text-white">Alice</h5>
                            <p className="text-xs text-gray-400 font-mono">0x123...</p>
                          </div>
                          <div className="flex-1 mx-6 text-center">
                            <div className="text-2xl mb-1">→</div>
                            <p className="text-sm text-white font-semibold">100 USDgas</p>
                            <p className="text-xs text-gray-400 mt-1">Fully visible on-chain</p>
                          </div>
                          <div className="text-center p-4 rounded-lg bg-[#03051A] border border-gray-400/40">
                            <div className="text-3xl mb-2">👤</div>
                            <h5 className="font-semibold text-white">Bob</h5>
                            <p className="text-xs text-gray-400 font-mono">0x456...</p>
                          </div>
                        </div>
                        <p className="text-center text-gray-300 mt-4 text-sm">
                          ❌ Everyone can see: Alice sent 100 USDgas to Bob
                        </p>
                      </div>
                    </div>

                    {/* RaylsShield Transfer */}
                    <div>
                      <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                        <span className="text-[#C7A9FF]">✅</span> RaylsShield Pool (With Privacy)
                      </h4>
                      <div className="bg-[#C7A9FF]/10 rounded-lg p-6 border border-[#C7A9FF]/30">
                        <div className="grid grid-cols-3 gap-6 mb-6">
                          {/* Alice */}
                          <div className="text-center">
                            <div className="p-4 rounded-lg bg-[#03051A] border border-[#C7A9FF]/40 mb-3">
                              <div className="text-3xl mb-2">👤</div>
                              <h5 className="font-semibold text-white">Alice</h5>
                              <p className="text-xs text-gray-400 font-mono">0x123...</p>
                            </div>
                            <div className="text-xs text-[#C7A9FF] bg-[#C7A9FF]/10 p-2 rounded border border-[#C7A9FF]/30">
                              1. Deposit 100 USDgas<br/>+ commitment
                            </div>
                          </div>

                          {/* Pool */}
                          <div className="flex flex-col">
                            <div className="flex-1 rounded-lg bg-[#03051A] border border-[#F4FF4A]/40 p-4">
                              <h5 className="font-semibold text-white text-center mb-3">⛓️ RaylsShieldPool</h5>
                              <div className="space-y-1.5 text-xs text-gray-300">
                                <div className="bg-[#C7A9FF]/10 p-2 rounded border border-[#C7A9FF]/30">Deposit 1: commitment_A</div>
                                <div className="bg-[#C7A9FF]/10 p-2 rounded border border-[#C7A9FF]/30">Deposit 2: commitment_B</div>
                                <div className="bg-[#C7A9FF]/10 p-2 rounded border border-[#C7A9FF]/30">Deposit 3: commitment_C</div>
                                <div className="bg-[#C7A9FF]/10 p-2 rounded border border-[#C7A9FF]/30">Deposit 4: commitment_D</div>
                                <div className="text-center text-gray-400">...</div>
                                <div className="bg-[#C7A9FF]/10 p-2 rounded border border-[#C7A9FF]/30">Deposit N: commitment_N</div>
                              </div>
                            </div>
                            <p className="text-xs text-center text-gray-400 mt-2">
                              2. Anonymity set grows
                            </p>
                          </div>

                          {/* Bob */}
                          <div className="text-center">
                            <div className="p-4 rounded-lg bg-[#03051A] border border-[#C7A9FF]/40 mb-3">
                              <div className="text-3xl mb-2">👤</div>
                              <h5 className="font-semibold text-white">Bob</h5>
                              <p className="text-xs text-gray-400 font-mono">0x456...</p>
                            </div>
                            <div className="text-xs text-[#C7A9FF] bg-[#C7A9FF]/10 p-2 rounded border border-[#C7A9FF]/30">
                              4. Withdraw 100 USDgas<br/>with ZK proof
                            </div>
                            <p className="text-xs text-gray-400 mt-2">
                              3. Proves knowledge of<br/>secret (doesn't reveal which)
                            </p>
                          </div>
                        </div>

                        <div className="bg-[#F4FF4A]/20 rounded-lg p-4 border border-[#F4FF4A]/40">
                          <h5 className="font-semibold text-white mb-2">✅ Outcome:</h5>
                          <div className="space-y-1 text-sm text-gray-300">
                            <div className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#F4FF4A]"></div>
                              Bob received 100 USDgas to 0x456...
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#F4FF4A]"></div>
                              NO ONE can link this withdrawal to Alice's deposit
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#F4FF4A]"></div>
                              The larger the anonymity set (N), the better the privacy
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#F4FF4A]"></div>
                              Even Alice can't prove she sent it (plausible deniability)
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Anonymity Set */}
                    <div className="bg-[#C7A9FF]/10 border border-[#C7A9FF]/30 rounded-lg p-5">
                      <div className="flex items-start gap-3">
                        <AlertCircle className="h-6 w-6 text-[#C7A9FF] flex-shrink-0 mt-0.5" />
                        <div className="flex-1">
                          <h4 className="font-semibold text-white mb-3">Anonymity Set</h4>
                          <p className="text-sm text-gray-300 mb-3">
                            Privacy strength depends on the number of deposits in the pool:
                          </p>
                          <div className="space-y-2">
                            <div className="flex items-center gap-3 p-2 rounded bg-gray-500/10 border border-gray-500/30">
                              <span className="text-xl">⚪</span>
                              <div className="flex-1">
                                <span className="text-white font-semibold">1-5 deposits:</span>
                                <span className="text-gray-300 text-sm ml-2">Weak privacy (20-100% linkable)</span>
                              </div>
                            </div>
                            <div className="flex items-center gap-3 p-2 rounded bg-[#C7A9FF]/5 border border-[#C7A9FF]/20">
                              <span className="text-xl">🟣</span>
                              <div className="flex-1">
                                <span className="text-white font-semibold">10-50 deposits:</span>
                                <span className="text-gray-300 text-sm ml-2">Moderate privacy (2-10% linkable)</span>
                              </div>
                            </div>
                            <div className="flex items-center gap-3 p-2 rounded bg-[#C7A9FF]/10 border border-[#C7A9FF]/30">
                              <span className="text-xl">🟣</span>
                              <div className="flex-1">
                                <span className="text-white font-semibold">100-1000 deposits:</span>
                                <span className="text-gray-300 text-sm ml-2">Strong privacy (0.1-1% linkable)</span>
                              </div>
                            </div>
                            <div className="flex items-center gap-3 p-2 rounded bg-[#C7A9FF]/15 border border-[#C7A9FF]/40">
                              <span className="text-xl">🟣</span>
                              <div className="flex-1">
                                <span className="text-white font-semibold">10,000+ deposits:</span>
                                <span className="text-gray-300 text-sm ml-2">Very strong privacy (&lt;0.01% linkable)</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Tech Stack */}
                <Card className="border-[#C7A9FF]/20">
                  <CardHeader>
                    <CardTitle className="text-2xl text-white">Technology Stack</CardTitle>
                    <CardDescription>
                      Components that power RaylsShield
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Visual Stack */}
                    <div className="space-y-4">
                      {/* Frontend */}
                      <div className="relative">
                        <div className="bg-gradient-to-br from-[#F4FF4A]/15 to-[#F4FF4A]/5 rounded-lg p-5 border border-[#F4FF4A]/40">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-3 h-3 rounded-full bg-[#F4FF4A]"></div>
                            <h4 className="font-semibold text-white text-lg">Frontend Layer</h4>
                          </div>
                          <div className="grid grid-cols-2 gap-2 text-sm text-gray-300">
                            <div className="bg-[#03051A] p-2 rounded border border-[#F4FF4A]/20">Next.js 16 (App Router)</div>
                            <div className="bg-[#03051A] p-2 rounded border border-[#F4FF4A]/20">React 19</div>
                            <div className="bg-[#03051A] p-2 rounded border border-[#F4FF4A]/20">TypeScript</div>
                            <div className="bg-[#03051A] p-2 rounded border border-[#F4FF4A]/20">TailwindCSS</div>
                            <div className="bg-[#03051A] p-2 rounded border border-[#F4FF4A]/20">ethers.js v6</div>
                            <div className="bg-[#03051A] p-2 rounded border border-[#F4FF4A]/20">snarkjs</div>
                          </div>
                        </div>
                        <div className="flex justify-center my-2">
                          <div className="text-[#F4FF4A]">↓ Web3 RPC</div>
                        </div>
                      </div>

                      {/* Blockchain */}
                      <div className="relative">
                        <div className="bg-gradient-to-br from-[#F4FF4A]/15 to-[#F4FF4A]/5 rounded-lg p-5 border border-[#F4FF4A]/40">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-3 h-3 rounded-full bg-[#F4FF4A]"></div>
                            <h4 className="font-semibold text-white text-lg">Blockchain Layer</h4>
                          </div>
                          <div className="grid grid-cols-2 gap-2 text-sm text-gray-300">
                            <div className="bg-[#03051A] p-2 rounded border border-[#F4FF4A]/20">Solidity 0.8.20</div>
                            <div className="bg-[#03051A] p-2 rounded border border-[#F4FF4A]/20">Hardhat</div>
                            <div className="bg-[#03051A] p-2 rounded border border-[#F4FF4A]/20">OpenZeppelin</div>
                            <div className="bg-[#03051A] p-2 rounded border border-[#F4FF4A]/20">Groth16 Verifiers</div>
                            <div className="bg-[#03051A] p-2 rounded border border-[#F4FF4A]/20">RaylsShieldPool</div>
                            <div className="bg-[#03051A] p-2 rounded border border-[#F4FF4A]/20">Poseidon Hash</div>
                          </div>
                        </div>
                        <div className="flex justify-center my-2">
                          <div className="text-[#F4FF4A]">↓ Verifies</div>
                        </div>
                      </div>

                      {/* ZK Layer */}
                      <div className="bg-gradient-to-br from-[#C7A9FF]/15 to-[#C7A9FF]/5 rounded-lg p-5 border border-[#C7A9FF]/40">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-3 h-3 rounded-full bg-[#C7A9FF]"></div>
                          <h4 className="font-semibold text-white text-lg">Zero-Knowledge Layer</h4>
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-sm text-gray-300">
                          <div className="bg-[#03051A] p-2 rounded border border-[#C7A9FF]/20">Circom 2.0.0</div>
                          <div className="bg-[#03051A] p-2 rounded border border-[#C7A9FF]/20">snarkjs</div>
                          <div className="bg-[#03051A] p-2 rounded border border-[#C7A9FF]/20">Groth16 Protocol</div>
                          <div className="bg-[#03051A] p-2 rounded border border-[#C7A9FF]/20">circomlibjs</div>
                          <div className="bg-[#03051A] p-2 rounded border border-[#C7A9FF]/20">Privacy Circuit</div>
                          <div className="bg-[#03051A] p-2 rounded border border-[#C7A9FF]/20">Powers of Tau</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            {/* Additional Resources */}
            <Card className="border-[#F4FF4A]/30 bg-gradient-to-br from-[#F4FF4A]/5 to-transparent mt-8">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Additional Resources</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  <Link href="/docs">
                    <div className="p-4 rounded-lg border border-border/50 hover:border-[#F4FF4A]/50 transition-all cursor-pointer">
                      <Book className="h-8 w-8 text-[#F4FF4A] mb-2" />
                      <h3 className="font-semibold text-white mb-2">Getting Started</h3>
                      <p className="text-sm text-gray-400">Quick start guide and tutorials</p>
                    </div>
                  </Link>
                  <a href="https://github.com/Abenavidese/rayls-shield-BA" target="_blank" rel="noopener noreferrer">
                    <div className="p-4 rounded-lg border border-border/50 hover:border-[#C7A9FF]/50 transition-all cursor-pointer">
                      <Code className="h-8 w-8 text-[#C7A9FF] mb-2" />
                      <h3 className="font-semibold text-white mb-2">GitHub Repository</h3>
                      <p className="text-sm text-gray-400">Full source code and examples</p>
                    </div>
                  </a>
                  <Link href="/pool">
                    <div className="p-4 rounded-lg border border-border/50 hover:border-[#C7A9FF]/50 transition-all cursor-pointer">
                      <Terminal className="h-8 w-8 text-[#C7A9FF] mb-2" />
                      <h3 className="font-semibold text-white mb-2">Live Demo</h3>
                      <p className="text-sm text-gray-400">Try it on Rayls Devnet</p>
                    </div>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  )
}
