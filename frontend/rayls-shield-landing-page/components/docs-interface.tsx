'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, BookOpen, Code, Shield, Zap, AlertCircle, CheckCircle, Terminal, FileCode, Link as LinkIcon } from 'lucide-react'

export function DocsInterface() {
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
              <Link href="/api-docs">
                <Button variant="outline" size="sm" className="border-[#C7A9FF] text-[#C7A9FF] hover:bg-[#C7A9FF]/10">
                  <Code className="h-4 w-4 mr-2" />
                  API Reference
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
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="h-10 w-10 text-[#F4FF4A]" />
                <h1 className="text-4xl md:text-5xl font-bold text-white">
                  Getting Started
                </h1>
              </div>
              <p className="text-xl text-gray-400">
                Learn how to integrate RaylsShield privacy pools into your application in minutes
              </p>
            </div>

            {/* Quick Start */}
            <Card className="mb-8 border-[#F4FF4A]/20 bg-gradient-to-br from-[#05071F] to-[#03051A]">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-[#F4FF4A]">
                  <Zap className="h-6 w-6" />
                  Quick Start
                </CardTitle>
                <CardDescription>Deploy and use RaylsShield in under 5 minutes</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-[#03051A] rounded-lg p-4 font-mono text-sm">
                  <div className="text-gray-400"># Install dependencies</div>
                  <div className="text-[#F4FF4A]">npm install ethers snarkjs circomlibjs</div>
                  <div className="text-gray-400 mt-3"># Clone the repository</div>
                  <div className="text-[#F4FF4A]">git clone https://github.com/Abenavidese/rayls-shield-BA</div>
                </div>
              </CardContent>
            </Card>

            {/* Table of Contents */}
            <div className="grid md:grid-cols-3 gap-4 mb-12">
              <Card className="border-[#C7A9FF]/20 hover:border-[#C7A9FF]/50 transition-all cursor-pointer">
                <CardHeader>
                  <Shield className="h-8 w-8 text-[#C7A9FF] mb-2" />
                  <CardTitle className="text-lg">Architecture</CardTitle>
                  <CardDescription>Understand the system design</CardDescription>
                </CardHeader>
              </Card>
              <Card className="border-[#C7A9FF]/20 hover:border-[#C7A9FF]/50 transition-all cursor-pointer">
                <CardHeader>
                  <Code className="h-8 w-8 text-[#C7A9FF] mb-2" />
                  <CardTitle className="text-lg">Integration</CardTitle>
                  <CardDescription>Connect to your app</CardDescription>
                </CardHeader>
              </Card>
              <Card className="border-[#C7A9FF]/20 hover:border-[#C7A9FF]/50 transition-all cursor-pointer">
                <CardHeader>
                  <Terminal className="h-8 w-8 text-[#C7A9FF] mb-2" />
                  <CardTitle className="text-lg">Examples</CardTitle>
                  <CardDescription>Code samples & demos</CardDescription>
                </CardHeader>
              </Card>
            </div>

            {/* Main Content */}
            <div className="space-y-8">
              {/* Section 1: Overview */}
              <section>
                <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#F4FF4A]/20 flex items-center justify-center text-[#F4FF4A] font-bold">
                    1
                  </div>
                  Overview
                </h2>
                <Card className="border-border/50">
                  <CardContent className="pt-6 space-y-4">
                    <p className="text-gray-300 leading-relaxed">
                      <strong className="text-white">RaylsShield Pool</strong> is a privacy-preserving mixer for native USDgas on the Rayls Protocol. 
                      It uses <strong className="text-[#C7A9FF]">Zero-Knowledge Proofs (ZK-SNARKs)</strong> to enable completely anonymous deposits 
                      and withdrawals while maintaining AML compliance.
                    </p>
                    
                    <div className="bg-[#05071F] rounded-lg p-6 border border-[#F4FF4A]/20">
                      <h3 className="text-lg font-semibold text-[#F4FF4A] mb-3">Key Features</h3>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-[#C7A9FF] flex-shrink-0 mt-0.5" />
                          <span><strong>Tornado Cash-style Privacy:</strong> Deposit and withdraw with complete anonymity</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-[#C7A9FF] flex-shrink-0 mt-0.5" />
                          <span><strong>ZK-SNARKs (Groth16):</strong> Cryptographic proofs ensure privacy without trust</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-[#C7A9FF] flex-shrink-0 mt-0.5" />
                          <span><strong>Payment Links:</strong> Generate shareable magic links for private transfers</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-[#C7A9FF] flex-shrink-0 mt-0.5" />
                          <span><strong>AML Compliance:</strong> Optional compliance mode with $10,000 threshold</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-[#C7A9FF] flex-shrink-0 mt-0.5" />
                          <span><strong>Permissionless:</strong> Anyone can deposit/withdraw without approval</span>
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Section 2: How It Works */}
              <section>
                <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#F4FF4A]/20 flex items-center justify-center text-[#F4FF4A] font-bold">
                    2
                  </div>
                  How It Works
                </h2>
                <Card className="border-border/50">
                  <CardContent className="pt-6 space-y-6">
                    {/* Step 1 */}
                    <div className="border-l-4 border-[#C7A9FF] pl-6 py-2">
                      <h3 className="text-xl font-semibold text-white mb-2">Step 1: Deposit</h3>
                      <p className="text-gray-300 mb-3">
                        User generates a secret and nullifier, then creates a commitment using Poseidon hash:
                      </p>
                      <div className="bg-[#05071F] rounded-lg p-4 font-mono text-sm">
                        <div className="text-gray-400">// Generate random values</div>
                        <div className="text-[#F4FF4A]">const secret = randomBytes(32)</div>
                        <div className="text-[#F4FF4A]">const nullifier = randomBytes(32)</div>
                        <div className="text-gray-400 mt-2">// Create commitment</div>
                        <div className="text-[#F4FF4A]">const commitment = poseidon([secret, nullifier, amount, recipient])</div>
                        <div className="text-gray-400 mt-2">// Deposit to contract</div>
                        <div className="text-[#F4FF4A]">{`await contract.deposit(commitment, { value: amount })`}</div>
                      </div>
                    </div>

                    {/* Step 2 */}
                    <div className="border-l-4 border-[#C7A9FF] pl-6 py-2">
                      <h3 className="text-xl font-semibold text-white mb-2">Step 2: Generate Payment Link</h3>
                      <p className="text-gray-300 mb-3">
                        The frontend generates a secure magic link containing encrypted credentials:
                      </p>
                      <div className="bg-[#05071F] rounded-lg p-4 font-mono text-sm">
                        <div className="text-[#F4FF4A]">const paymentData = {'{'}</div>
                        <div className="text-[#F4FF4A] ml-4">secret: secret.toString(),</div>
                        <div className="text-[#F4FF4A] ml-4">nullifier: nullifier.toString(),</div>
                        <div className="text-[#F4FF4A] ml-4">amount: amount.toString(),</div>
                        <div className="text-[#F4FF4A] ml-4">recipient: recipientAddress,</div>
                        <div className="text-[#F4FF4A] ml-4">chainId: 123123</div>
                        <div className="text-[#F4FF4A]">{'}'}</div>
                        <div className="text-gray-400 mt-2">// Generate URL</div>
                        <div className="text-[#F4FF4A]">const url = `https://raylsshield.com/claim/${'${'}token{'}'}`</div>
                      </div>
                    </div>

                    {/* Step 3 */}
                    <div className="border-l-4 border-[#C7A9FF] pl-6 py-2">
                      <h3 className="text-xl font-semibold text-white mb-2">Step 3: Recipient Claims</h3>
                      <p className="text-gray-300 mb-3">
                        Recipient clicks the link, generates a ZK proof, and withdraws funds:
                      </p>
                      <div className="bg-[#05071F] rounded-lg p-4 font-mono text-sm">
                        <div className="text-gray-400">// Generate ZK proof (browser-side)</div>
                        <div className="text-[#F4FF4A]">const proof = await generateProof(secret, nullifier, recipient)</div>
                        <div className="text-gray-400 mt-2">// Withdraw to recipient address</div>
                        <div className="text-[#F4FF4A]">await contract.withdraw(proof, nullifierHash, recipient, amount)</div>
                      </div>
                    </div>

                    <div className="bg-[#F4FF4A]/10 border border-[#F4FF4A]/30 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <Shield className="h-6 w-6 text-[#F4FF4A] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold text-white mb-1">Privacy Guarantee</h4>
                          <p className="text-sm text-gray-300">
                            The ZK proof proves the recipient knows a valid secret without revealing which deposit it corresponds to. 
                            This breaks the on-chain link between sender and receiver.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Section 3: Smart Contracts */}
              <section>
                <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#F4FF4A]/20 flex items-center justify-center text-[#F4FF4A] font-bold">
                    3
                  </div>
                  Smart Contracts
                </h2>
                <Card className="border-border/50">
                  <CardContent className="pt-6 space-y-4">
                    <p className="text-gray-300">
                      RaylsShield is deployed on <strong className="text-white">Rayls Devnet</strong> with the following contracts:
                    </p>

                    <div className="grid gap-4">
                      {/* RaylsShieldPool */}
                      <div className="bg-[#05071F] rounded-lg p-4 border border-[#C7A9FF]/20">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="text-lg font-semibold text-white">RaylsShieldPool</h3>
                          <span className="text-xs bg-[#C7A9FF]/20 text-[#C7A9FF] px-2 py-1 rounded">Main Contract</span>
                        </div>
                        <p className="text-sm text-gray-400 mb-3">
                          Core privacy pool contract handling deposits and withdrawals
                        </p>
                        <div className="font-mono text-xs text-[#C7A9FF] break-all flex items-center gap-2">
                          <FileCode className="h-4 w-4 flex-shrink-0" />
                          0x7DF45676cb5Cc92DF8DD71b72745065391c7C6Be
                        </div>
                      </div>

                      {/* Privacy Verifier */}
                      <div className="bg-[#05071F] rounded-lg p-4 border border-border/50">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="text-lg font-semibold text-white">PrivacyVerifier</h3>
                          <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded">ZK Verifier</span>
                        </div>
                        <p className="text-sm text-gray-400 mb-3">
                          Groth16 verifier for privacy proofs
                        </p>
                        <div className="font-mono text-xs text-[#C7A9FF] break-all flex items-center gap-2">
                          <FileCode className="h-4 w-4 flex-shrink-0" />
                          0xc853De1e8a8a3Ead0e2A4A39084B792e1e58Dd53
                        </div>
                      </div>

                      {/* Compliance Verifier */}
                      <div className="bg-[#05071F] rounded-lg p-4 border border-border/50">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="text-lg font-semibold text-white">ComplianceVerifier</h3>
                          <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded">ZK Verifier</span>
                        </div>
                        <p className="text-sm text-gray-400 mb-3">
                          Groth16 verifier for AML compliance proofs
                        </p>
                        <div className="font-mono text-xs text-[#C7A9FF] break-all flex items-center gap-2">
                          <FileCode className="h-4 w-4 flex-shrink-0" />
                          0xF1925bE98A8Cb667CD65b5FadD171011E2832bca
                        </div>
                      </div>
                    </div>

                    <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 mt-4">
                      <div className="flex items-start gap-3">
                        <AlertCircle className="h-6 w-6 text-blue-400 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold text-white mb-1">Network Information</h4>
                          <div className="text-sm text-gray-300 space-y-1">
                            <div><strong>Chain ID:</strong> 123123</div>
                            <div><strong>RPC URL:</strong> https://devnet-rpc.rayls.com</div>
                            <div><strong>Explorer:</strong> https://devnet-explorer.rayls.com</div>
                            <div><strong>Currency:</strong> USDgas</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Section 4: Frontend Integration */}
              <section>
                <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#F4FF4A]/20 flex items-center justify-center text-[#F4FF4A] font-bold">
                    4
                  </div>
                  Frontend Integration
                </h2>
                <Card className="border-border/50">
                  <CardContent className="pt-6 space-y-4">
                    <p className="text-gray-300 mb-4">
                      Integrate RaylsShield into your React/Next.js application:
                    </p>

                    <div className="space-y-4">
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-3">1. Install Dependencies</h3>
                        <div className="bg-[#05071F] rounded-lg p-4 font-mono text-sm">
                          <div className="text-[#F4FF4A]">npm install ethers@6 snarkjs circomlibjs</div>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-white mb-3">2. Setup Contract Connection</h3>
                        <div className="bg-[#05071F] rounded-lg p-4 font-mono text-sm overflow-x-auto">
                          <pre className="text-[#F4FF4A]">{`import { BrowserProvider, Contract } from 'ethers'

const CONTRACT_ADDRESS = '0x7DF45676cb5Cc92DF8DD71b72745065391c7C6Be'
const RPC_URL = 'https://devnet-rpc.rayls.com'

const provider = new BrowserProvider(window.ethereum)
const contract = new Contract(CONTRACT_ADDRESS, ABI, provider)`}</pre>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-white mb-3">3. Make a Deposit</h3>
                        <div className="bg-[#05071F] rounded-lg p-4 font-mono text-sm overflow-x-auto">
                          <pre className="text-[#F4FF4A]">{`import { poseidon } from 'circomlibjs'
import { randomBytes } from 'crypto'

// Generate secrets
const secret = randomBytes(32)
const nullifier = randomBytes(32)
const amount = ethers.parseEther('100')
const recipient = '0x...'

// Create commitment
const commitment = poseidon([secret, nullifier, amount, recipient])

// Deposit
const tx = await contract.deposit(commitment, { value: amount })
await tx.wait()`}</pre>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-white mb-3">4. Generate Payment Link</h3>
                        <div className="bg-[#05071F] rounded-lg p-4 font-mono text-sm overflow-x-auto">
                          <pre className="text-[#F4FF4A]">{`const paymentData = {
  secret: secret.toString('hex'),
  nullifier: nullifier.toString('hex'),
  amount: amount.toString(),
  recipient: recipient,
  chainId: 123123,
  timestamp: Date.now()
}

const encoded = btoa(JSON.stringify(paymentData))
const url = \`https://raylsshield.com/claim/\${encoded}\``}</pre>
                        </div>
                      </div>
                    </div>

                    <div className="bg-[#C7A9FF]/10 border border-[#C7A9FF]/30 rounded-lg p-4 mt-6">
                      <div className="flex items-start gap-3">
                        <LinkIcon className="h-6 w-6 text-[#C7A9FF] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold text-white mb-1">Complete Example</h4>
                          <p className="text-sm text-gray-300 mb-2">
                            Check out our complete React hook implementation for a production-ready solution.
                          </p>
                          <Link href="/api-docs">
                            <Button variant="outline" size="sm" className="border-[#C7A9FF] text-[#C7A9FF] hover:bg-[#C7A9FF]/10">
                              View API Reference →
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Next Steps */}
              <Card className="border-[#F4FF4A]/30 bg-gradient-to-br from-[#F4FF4A]/5 to-transparent">
                <CardHeader>
                  <CardTitle className="text-2xl text-white">Next Steps</CardTitle>
                  <CardDescription>Continue your integration journey</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Link href="/api-docs">
                      <div className="p-4 rounded-lg border border-[#C7A9FF]/30 hover:border-[#C7A9FF]/60 transition-all cursor-pointer bg-[#05071F]/50">
                        <Code className="h-8 w-8 text-[#C7A9FF] mb-2" />
                        <h3 className="font-semibold text-white mb-2">API Reference</h3>
                        <p className="text-sm text-gray-400">Detailed technical documentation with code examples</p>
                      </div>
                    </Link>
                    <Link href="/pool">
                      <div className="p-4 rounded-lg border border-[#C7A9FF]/30 hover:border-[#C7A9FF]/60 transition-all cursor-pointer bg-[#05071F]/50">
                        <Zap className="h-8 w-8 text-[#C7A9FF] mb-2" />
                        <h3 className="font-semibold text-white mb-2">Try Live Demo</h3>
                        <p className="text-sm text-gray-400">Test RaylsShield with real transactions on Devnet</p>
                      </div>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
