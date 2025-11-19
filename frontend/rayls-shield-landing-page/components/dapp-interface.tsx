'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Wallet, Zap, CheckCircle2, Circle, ArrowLeft, AlertCircle, ExternalLink, Network } from 'lucide-react'
import { useWallet } from '@/hooks/use-wallet'
import { useRaylsShield } from '@/hooks/use-rayls-shield'
import { DEFAULT_NETWORK } from '@/lib/contracts/addresses'

export default function DappInterface() {
  const { isConnected, address, isCorrectNetwork, error: walletError, connect, switchNetwork } = useWallet()
  const { sendPrivateMessage, txStatus, isLoading } = useRaylsShield()
  
  const [amount, setAmount] = useState('')
  const [recipient, setRecipient] = useState('')
  const [destinationChainId, setDestinationChainId] = useState('123123')

  const handleConnectWallet = async () => {
    try {
      await connect()
    } catch (err: any) {
      console.error('Error connecting wallet:', err)
    }
  }

  const handleSwitchNetwork = async () => {
    try {
      await switchNetwork()
    } catch (err: any) {
      console.error('Error switching network:', err)
    }
  }

  const formatAddress = (address: string) => {
    if (!address) return '—'
    return `${address.slice(0, 6)}...${address.slice(-4)}`
  }

  const handleSendPrivateMessage = async () => {
    if (!amount || parseFloat(amount) <= 0 || !recipient || !isConnected) return

    try {
      // Convert amount to wei (18 decimals)
      const amountInWei = BigInt(Math.floor(parseFloat(amount) * 1e18))
      
      await sendPrivateMessage({
        destinationChainId: parseInt(destinationChainId),
        destinationAddress: recipient,
        amount: amountInWei,
      })
    } catch (err: any) {
      console.error('Error sending private message:', err)
    }
  }

  const getStatusText = () => {
    if (!isConnected) return 'Status: Connect your wallet to begin'
    if (!isCorrectNetwork) return 'Status: Switch to Rayls Testnet'
    if (!amount || !recipient) return 'Status: Enter amount and recipient'
    
    switch (txStatus.status) {
      case 'generating-proof':
        return 'Status: Generating ZK proof...'
      case 'signing':
        return 'Status: Please sign the transaction'
      case 'pending':
        return 'Status: Transaction pending...'
      case 'success':
        return 'Status: Private message sent successfully! ✅'
      case 'error':
        return `Status: Error - ${txStatus.error}`
      default:
        return 'Status: Ready to send private message'
    }
  }

  const isReadyToSend = isConnected && isCorrectNetwork && amount && recipient && parseFloat(amount) > 0 && !isLoading

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
                      1. Connect Wallet & Network
                    </Label>
                    {walletError && (
                      <div className="flex items-start gap-2 p-3 rounded-md bg-destructive/10 border border-destructive/20">
                        <AlertCircle className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-destructive">{walletError}</p>
                      </div>
                    )}
                    <div className="space-y-2">
                      <Button
                        id="wallet"
                        onClick={handleConnectWallet}
                        disabled={isConnected}
                        className="w-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_rgba(244,255,74,0.3)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(244,255,74,0.5)] font-bold"
                        size="lg"
                      >
                        <Wallet className="mr-2 h-5 w-5" />
                        {isConnected ? `Connected: ${formatAddress(address)}` : 'Connect Wallet'}
                      </Button>
                      {isConnected && !isCorrectNetwork && (
                        <Button
                          onClick={handleSwitchNetwork}
                          variant="outline"
                          className="w-full"
                          size="lg"
                        >
                          <Network className="mr-2 h-5 w-5" />
                          Switch to {DEFAULT_NETWORK.networkName}
                        </Button>
                      )}
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

                  {/* Recipient Address */}
                  <div className="space-y-3">
                    <Label htmlFor="recipient" className="text-foreground font-semibold">
                      2. Recipient Address
                    </Label>
                    <Input
                      id="recipient"
                      type="text"
                      placeholder="0x..."
                      value={recipient}
                      onChange={(e) => setRecipient(e.target.value)}
                      disabled={!isConnected || !isCorrectNetwork}
                      className="bg-muted border-primary/30 focus:border-primary focus:shadow-[0_0_15px_rgba(244,255,74,0.2)] font-mono"
                    />
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

                  {/* Enter Amount */}
                  <div className="space-y-3">
                    <Label htmlFor="amount" className="text-foreground font-semibold">
                      3. Enter Amount
                    </Label>
                    <div className="relative">
                      <Input
                        id="amount"
                        type="number"
                        placeholder="0.00"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        disabled={!isConnected || !isCorrectNetwork}
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

                  {/* Generate ZK Proof & Send */}
                  <div className="space-y-3">
                    <Label htmlFor="proof" className="text-foreground font-semibold">
                      4. Send Private Message with ZK Proof
                    </Label>
                    <Button
                      id="proof"
                      onClick={handleSendPrivateMessage}
                      disabled={!isReadyToSend}
                      className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-[0_0_20px_rgba(199,169,255,0.3)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(199,169,255,0.5)] font-bold"
                      size="lg"
                    >
                      <Zap className="mr-2 h-5 w-5" />
                      {isLoading ? 'Processing...' : 'Generate Proof & Send'}
                    </Button>
                    
                    {/* Status Text */}
                    <p className="text-sm text-muted-foreground text-center font-mono">
                      {getStatusText()}
                    </p>

                    {/* Transaction Hash Link */}
                    {txStatus.status === 'success' && txStatus.hash && (
                      <a
                        href={`${DEFAULT_NETWORK.explorerUrl}/tx/${txStatus.hash}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 text-sm text-primary hover:underline"
                      >
                        View on Explorer
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Status Panel */}
            <div className="md:col-span-1">
              <div className="border border-secondary/30 bg-card/50 backdrop-blur-sm rounded-lg p-6 space-y-6">
                <h3 className="text-lg font-bold text-secondary">Transaction Status</h3>

                {/* Network Info */}
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Network</p>
                  <p className="text-sm font-medium text-foreground">
                    {isCorrectNetwork ? (
                      <span className="text-primary">✓ {DEFAULT_NETWORK.networkName}</span>
                    ) : (
                      <span className="text-destructive">Wrong Network</span>
                    )}
                  </p>
                </div>

                {/* Connected Wallet */}
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Connected Wallet</p>
                  <p className="text-sm font-mono text-foreground break-all">
                    {isConnected ? address : '—'}
                  </p>
                </div>

                {/* Contract Info */}
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">RaylsShield Contract</p>
                  <a
                    href={`${DEFAULT_NETWORK.explorerUrl}/address/${DEFAULT_NETWORK.contracts.RaylsShield}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-secondary hover:underline break-all flex items-start gap-1"
                  >
                    {formatAddress(DEFAULT_NETWORK.contracts.RaylsShield)}
                    <ExternalLink className="h-3 w-3 flex-shrink-0 mt-0.5" />
                  </a>
                </div>

                {/* Progress Timeline */}
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">Progress</p>
                  
                  {/* Step 1 */}
                  <div className="flex items-start gap-3">
                    {isConnected && isCorrectNetwork ? (
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
                    {recipient && amount && parseFloat(amount) > 0 ? (
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    ) : (
                      <Circle className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                    )}
                    <div>
                      <p className="text-sm font-medium">Details Entered</p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex items-start gap-3">
                    {txStatus.status === 'generating-proof' || txStatus.proof ? (
                      <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    ) : (
                      <Circle className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                    )}
                    <div>
                      <p className="text-sm font-medium">ZK Proof Generated</p>
                    </div>
                  </div>

                  {/* Step 4 */}
                  <div className="flex items-start gap-3">
                    {txStatus.status === 'success' ? (
                      <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    ) : (
                      <Circle className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                    )}
                    <div>
                      <p className="text-sm font-medium">Transaction Sent</p>
                    </div>
                  </div>
                </div>

                {/* Last Transaction Hash */}
                {txStatus.hash && (
                  <div className="space-y-2 pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground">Last Transaction</p>
                    <a
                      href={`${DEFAULT_NETWORK.explorerUrl}/tx/${txStatus.hash}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono text-secondary hover:underline break-all flex items-start gap-1"
                    >
                      {formatAddress(txStatus.hash)}
                      <ExternalLink className="h-3 w-3 flex-shrink-0 mt-0.5" />
                    </a>
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
