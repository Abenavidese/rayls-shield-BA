'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Wallet, Zap, CheckCircle2, Circle, ArrowLeft, AlertCircle } from 'lucide-react'

type ProofStatus = 'idle' | 'generating' | 'generated'

declare global {
  interface Window {
    ethereum?: any
  }
}

export default function DappInterface() {
  const [walletConnected, setWalletConnected] = useState(false)
  const [amount, setAmount] = useState('')
  const [proofStatus, setProofStatus] = useState<ProofStatus>('idle')
  const [walletAddress, setWalletAddress] = useState('')
  const [proofHash] = useState('0xabcd...ef01')
  const [isMetaMaskInstalled, setIsMetaMaskInstalled] = useState(false)
  const [error, setError] = useState('')

  // Check if MetaMask is installed
  useEffect(() => {
    if (typeof window !== 'undefined' && window.ethereum) {
      setIsMetaMaskInstalled(true)
      
      // Check if already connected
      window.ethereum.request({ method: 'eth_accounts' })
        .then((accounts: string[]) => {
          if (accounts.length > 0) {
            setWalletAddress(accounts[0])
            setWalletConnected(true)
          }
        })
        .catch((err: any) => console.error(err))

      // Listen for account changes
      window.ethereum.on('accountsChanged', (accounts: string[]) => {
        if (accounts.length > 0) {
          setWalletAddress(accounts[0])
          setWalletConnected(true)
          setError('')
        } else {
          setWalletAddress('')
          setWalletConnected(false)
        }
      })

      // Listen for chain changes
      window.ethereum.on('chainChanged', () => {
        window.location.reload()
      })
    }

    return () => {
      if (window.ethereum) {
        window.ethereum.removeListener('accountsChanged', () => {})
        window.ethereum.removeListener('chainChanged', () => {})
      }
    }
  }, [])

  const handleConnectWallet = async () => {
    if (!isMetaMaskInstalled) {
      setError('MetaMask no está instalado. Por favor instala MetaMask desde metamask.io')
      window.open('https://metamask.io/download/', '_blank')
      return
    }

    try {
      setError('')
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts'
      })
      
      if (accounts.length > 0) {
        setWalletAddress(accounts[0])
        setWalletConnected(true)
      }
    } catch (err: any) {
      console.error('Error connecting to MetaMask:', err)
      if (err.code === 4001) {
        setError('Conexión rechazada. Por favor acepta la solicitud en MetaMask.')
      } else {
        setError('Error al conectar con MetaMask. Por favor intenta de nuevo.')
      }
    }
  }

  const formatAddress = (address: string) => {
    if (!address) return '—'
    return `${address.slice(0, 6)}...${address.slice(-4)}`
  }

  const handleGenerateProof = () => {
    if (!amount || parseFloat(amount) <= 0) return
    
    setProofStatus('generating')
    
    // Simulate proof generation
    setTimeout(() => {
      setProofStatus('generated')
    }, 2000)
  }

  const getStatusText = () => {
    if (!walletConnected) return 'Status: Connect your wallet to begin'
    if (!amount) return 'Status: Enter an amount'
    if (proofStatus === 'generating') return 'Status: Generating proof...'
    if (proofStatus === 'generated') return 'Status: Proof generated ✅'
    return 'Status: Ready to generate proof'
  }

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated geometric background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-64 h-64 border border-primary/30 rotate-45 animate-spin-slow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 border border-secondary/20 rotate-12 animate-pulse" />
        <div className="absolute top-1/2 left-1/4 w-32 h-32 border border-primary/20 -rotate-12" />
      </div>

      {/* Header */}
      <header className="relative z-10 border-b border-border bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-VppUk6C0PqXEejmhm4odcKCCDOIUKm.png"
                alt="RaylsShield"
                width={200}
                height={50}
                className="h-8 w-auto"
              />
            </Link>
            <Link href="/">
              <Button variant="ghost" size="sm" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Page Title */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
              RaylsShield Dapp
            </h1>
            <p className="text-lg text-muted-foreground">
              Generate your ZK Proof and send a private transfer
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Main Form Card */}
            <div className="md:col-span-2">
              <div className="relative border border-primary/30 bg-card/50 backdrop-blur-sm rounded-lg p-8 shadow-[0_0_30px_rgba(244,255,74,0.1)]">
                {/* Geometric corner decorations */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary" />
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary" />

                <div className="space-y-6">
                  {/* Connect Wallet */}
                  <div className="space-y-3">
                    <Label htmlFor="wallet" className="text-foreground font-semibold">
                      1. Connect Wallet
                    </Label>
                    {error && (
                      <div className="flex items-start gap-2 p-3 rounded-md bg-destructive/10 border border-destructive/20">
                        <AlertCircle className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-destructive">{error}</p>
                      </div>
                    )}
                    <Button
                      id="wallet"
                      onClick={handleConnectWallet}
                      disabled={walletConnected}
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_rgba(244,255,74,0.3)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(244,255,74,0.5)] font-bold"
                      size="lg"
                    >
                      <Wallet className="mr-2 h-5 w-5" />
                      {walletConnected ? `Connected: ${formatAddress(walletAddress)}` : 'Connect Wallet'}
                    </Button>
                    {!isMetaMaskInstalled && !walletConnected && (
                      <p className="text-xs text-muted-foreground text-center">
                        MetaMask no detectado. Haz clic para instalar.
                      </p>
                    )}
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

                  {/* Enter Amount */}
                  <div className="space-y-3">
                    <Label htmlFor="amount" className="text-foreground font-semibold">
                      2. Enter Amount
                    </Label>
                    <div className="relative">
                      <Input
                        id="amount"
                        type="number"
                        placeholder="0.00"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        disabled={!walletConnected}
                        className="pr-20 bg-muted border-primary/30 focus:border-primary focus:shadow-[0_0_15px_rgba(244,255,74,0.2)] text-lg font-mono h-12"
                        step="0.01"
                        min="0"
                      />
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground font-semibold">
                        USDr
                      </div>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

                  {/* Generate ZK Proof */}
                  <div className="space-y-3">
                    <Label htmlFor="proof" className="text-foreground font-semibold">
                      3. Generate ZK Proof
                    </Label>
                    <Button
                      id="proof"
                      onClick={handleGenerateProof}
                      disabled={!walletConnected || !amount || parseFloat(amount) <= 0 || proofStatus === 'generating'}
                      className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-[0_0_20px_rgba(199,169,255,0.3)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(199,169,255,0.5)] font-bold"
                      size="lg"
                    >
                      <Zap className="mr-2 h-5 w-5" />
                      {proofStatus === 'generating' ? 'Generating...' : 'Generate ZK Proof'}
                    </Button>
                    
                    {/* Status Text */}
                    <p className="text-sm text-muted-foreground text-center font-mono">
                      {getStatusText()}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Status Panel */}
            <div className="md:col-span-1">
              <div className="border border-secondary/30 bg-card/50 backdrop-blur-sm rounded-lg p-6 space-y-6">
                <h3 className="text-lg font-bold text-secondary">Transaction Status</h3>

                {/* Connected Wallet */}
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Connected Wallet</p>
                  <p className="text-sm font-mono text-foreground break-all">
                    {walletConnected ? walletAddress : '—'}
                  </p>
                </div>

                {/* Progress Timeline */}
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">Progress</p>
                  
                  {/* Step 1 */}
                  <div className="flex items-start gap-3">
                    {walletConnected ? (
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    ) : (
                      <Circle className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                    )}
                    <div>
                      <p className="text-sm font-medium">Wallet Connected</p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex items-start gap-3">
                    {amount && parseFloat(amount) > 0 ? (
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    ) : (
                      <Circle className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                    )}
                    <div>
                      <p className="text-sm font-medium">Amount Entered</p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex items-start gap-3">
                    {proofStatus === 'generated' ? (
                      <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    ) : (
                      <Circle className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                    )}
                    <div>
                      <p className="text-sm font-medium">ZK Proof Generated</p>
                    </div>
                  </div>
                </div>

                {/* Last Proof Hash */}
                {proofStatus === 'generated' && (
                  <div className="space-y-2 pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground">Last Proof Hash</p>
                    <p className="text-xs font-mono text-secondary break-all">
                      {proofHash}
                    </p>
                  </div>
                )}
              </div>

              {/* Geometric decoration */}
              <div className="mt-8 relative h-32">
                <div className="absolute inset-0 flex items-center justify-center opacity-20">
                  <div className="w-24 h-24 border border-primary rotate-45" />
                  <div className="absolute w-16 h-16 border border-secondary -rotate-12" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
