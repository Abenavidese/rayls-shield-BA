"use client";

import { useState } from "react";
import Link from "next/link";
import { useRaylsShieldPool } from "@/hooks/useRaylsShieldPool";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ethers } from "ethers";
import { generatePaymentURL, copyToClipboard, sharePaymentLink, shareToTelegram, shareToWhatsApp, shareToTwitter, type PaymentData } from "@/lib/utils/paymentLink";
import { Check, Copy, Share2, ExternalLink, Shield, Lock, Zap, Users, Eye, Link as LinkIcon, Wallet, ArrowLeft, Home, AlertTriangle, MessageCircle, Send } from "lucide-react";

export function PoolInterface() {
  const {
    account,
    chainId,
    loading,
    error,
    poolStats,
    connectWallet,
    disconnectWallet,
    deposit,
    refreshPoolStats,
  } = useRaylsShieldPool();

  const [depositAmount, setDepositAmount] = useState("");
  const [recipientAddress, setRecipientAddress] = useState("");
  const [paymentLink, setPaymentLink] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [showWalletErrorPopup, setShowWalletErrorPopup] = useState(false);
  const [addressError, setAddressError] = useState("");
  const [amountError, setAmountError] = useState("");
  const [depositDetails, setDepositDetails] = useState<{
    commitment: string;
    secret: string;
    nullifier: string;
    amount: string;
    recipient: string;
    sender: string;
    txHash: string;
  } | null>(null);
  const [showDetailsPopup, setShowDetailsPopup] = useState(false);

  const handleConnectWallet = async () => {
    try {
      await connectWallet();
    } catch (err: any) {
      const errorMessage = err.message || String(err);
      if (errorMessage.includes("rejected") || errorMessage.includes("denied") || errorMessage.includes("4001")) {
        setShowWalletErrorPopup(true);
      }
    }
  };

  const validateRecipientAddress = (address: string) => {
    setRecipientAddress(address);
    setAddressError("");
    
    if (address && !address.startsWith("0x")) {
      setAddressError("Wallet address must start with 0x");
    } else if (address && !ethers.isAddress(address)) {
      setAddressError("Invalid wallet address format");
    }
  };

  const validateAmount = (amount: string) => {
    setDepositAmount(amount);
    setAmountError("");
    
    if (amount && parseFloat(amount) < 0) {
      setAmountError("Amount cannot be negative");
      setDepositAmount("");
    } else if (amount && parseFloat(amount) === 0) {
      setAmountError("Amount must be greater than 0");
    }
  };

  const handleDeposit = async () => {
    try {
      const amount = ethers.parseEther(depositAmount);
      const result = await deposit(amount, recipientAddress);

      // Generate payment link (includes recipient to lock funds)
      const paymentData: PaymentData = {
        secret: result.secret,
        nullifier: result.nullifier,
        amount: depositAmount,
        recipient: recipientAddress,  // NEW: Recipient locked in
        timestamp: Date.now(),
        chainId: chainId || 123123,
      };

      const url = generatePaymentURL(paymentData);
      setPaymentLink(url);
      
      // Save deposit details for the Details popup
      setDepositDetails({
        commitment: result.commitment,
        secret: result.secret,
        nullifier: result.nullifier,
        amount: depositAmount,
        recipient: recipientAddress,
        sender: account || "",
        txHash: result.txHash,
      });
      
      setDepositAmount("");
      setRecipientAddress("");
    } catch (err: any) {
      console.error("Deposit error:", err);
    }
  };

  const handleCopyLink = async () => {
    if (!paymentLink) return;
    const success = await copyToClipboard(paymentLink);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleShareLink = async () => {
    if (!paymentLink || !depositAmount) return;
    const shared = await sharePaymentLink(paymentLink, depositAmount);
    if (!shared) {
      // Fallback to copy
      handleCopyLink();
    }
  };

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
            </div>
          </nav>
        </div>
      </header>

      {/* Wallet Connection Error Popup */}
      <Dialog open={showWalletErrorPopup} onOpenChange={setShowWalletErrorPopup}>
        <DialogContent className="sm:max-w-md border-red-500/20 bg-gradient-to-br from-[#03051A] via-[#03051A] to-red-500/5">
          <DialogHeader>
            <div className="flex justify-center mb-4">
              <div className="relative">
                <div className="absolute inset-0 bg-red-500/30 blur-3xl rounded-full animate-pulse" />
                <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center">
                  <AlertTriangle className="h-10 w-10 text-white" />
                </div>
              </div>
            </div>
            <DialogTitle className="text-2xl text-center text-white">
              Unable to Connect Wallet
            </DialogTitle>
            <DialogDescription className="text-center text-base text-gray-300">
              We couldn't connect to your wallet.
            </DialogDescription>
          </DialogHeader>
          <div className="px-6 pb-2">
            <div className="bg-gradient-to-r from-red-500/10 to-red-500/5 rounded-lg p-4 border border-red-500/20 text-left">
              <span className="block text-sm text-white font-semibold mb-2">Please try the following:</span>
              <ul className="text-sm text-gray-300 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-[#F4FF4A] flex-shrink-0">•</span>
                  <span>Grant permission to connect your wallet</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#F4FF4A] flex-shrink-0">•</span>
                  <span>Make sure MetaMask is installed and unlocked</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#F4FF4A] flex-shrink-0">•</span>
                  <span>Try refreshing the page</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#F4FF4A] flex-shrink-0">•</span>
                  <span>Try using a different browser (Chrome recommended)</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex gap-2 mt-2">
            <Button 
              onClick={() => setShowWalletErrorPopup(false)}
              variant="outline"
              className="flex-1 border-red-500/30 hover:border-red-500/60 hover:bg-red-500/10"
            >
              Close
            </Button>
            <Button 
              onClick={() => {
                setShowWalletErrorPopup(false);
                handleConnectWallet();
              }}
              className="flex-1 bg-gradient-to-r from-[#F4FF4A] to-[#F4FF4A]/80 hover:from-[#F4FF4A]/90 hover:to-[#F4FF4A]/70 text-[#03051A] font-semibold"
            >
              Try Again
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <div className="container mx-auto px-4 py-8 pt-24">
        <div className="max-w-4xl mx-auto space-y-6">
        {/* Hero Section - Not Connected */}
        {!account && (
          <>
            {/* Main Hero Card */}
            <Card className="relative overflow-hidden border-primary/20 bg-gradient-to-br from-background via-background to-primary/5">
              <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(0deg,transparent,black)]" />
              <CardHeader className="relative space-y-4 text-center pb-4">
                <div className="flex justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full" />
                    <Shield className="h-16 w-16 text-primary relative" />
                  </div>
                </div>
                <div>
                  <CardTitle className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                    RaylsShield Pool
                  </CardTitle>
                  <CardDescription className="text-lg mt-3">
                    Send USDgas privately with zero-knowledge proofs
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="relative space-y-6">
                {/* Stats Preview */}
                {poolStats && (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                    <div className="bg-background/50 backdrop-blur-sm rounded-lg p-3 border border-border/50 hover:border-primary/50 transition-colors">
                      <p className="text-xs text-muted-foreground mb-1">Pool Balance</p>
                      <p className="text-lg font-bold text-primary">
                        {ethers.formatEther(poolStats.balance).slice(0, 6)} USDgas
                      </p>
                    </div>
                    <div className="bg-background/50 backdrop-blur-sm rounded-lg p-3 border border-border/50 hover:border-primary/50 transition-colors">
                      <p className="text-xs text-muted-foreground mb-1">Total Deposits</p>
                      <p className="text-lg font-bold">{poolStats.totalDeposits.toString()}</p>
                    </div>
                    <div className="bg-background/50 backdrop-blur-sm rounded-lg p-3 border border-border/50 hover:border-primary/50 transition-colors">
                      <p className="text-xs text-muted-foreground mb-1">Active Users</p>
                      <p className="text-lg font-bold">{poolStats.activeDeposits.toString()}</p>
                    </div>
                    <div className="bg-background/50 backdrop-blur-sm rounded-lg p-3 border border-border/50 hover:border-primary/50 transition-colors">
                      <p className="text-xs text-muted-foreground mb-1">Privacy Level</p>
                      <p className="text-lg font-bold text-green-500">High</p>
                    </div>
                  </div>
                )}

                {/* Feature Highlights */}
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="flex flex-col items-center text-center p-4 rounded-lg bg-background/30 backdrop-blur-sm border border-border/30 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10">
                    <div className="bg-primary/10 p-3 rounded-full mb-3">
                      <Lock className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">100% Private</h3>
                    <p className="text-xs text-muted-foreground">
                      Zero-knowledge proofs hide all transaction links
                    </p>
                  </div>
                  <div className="flex flex-col items-center text-center p-4 rounded-lg bg-background/30 backdrop-blur-sm border border-border/30 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10">
                    <div className="bg-primary/10 p-3 rounded-full mb-3">
                      <Zap className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">Instant Links</h3>
                    <p className="text-xs text-muted-foreground">
                      Create payment links in seconds
                    </p>
                  </div>
                  <div className="flex flex-col items-center text-center p-4 rounded-lg bg-background/30 backdrop-blur-sm border border-border/30 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10">
                    <div className="bg-primary/10 p-3 rounded-full mb-3">
                      <Shield className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">Secure</h3>
                    <p className="text-xs text-muted-foreground">
                      Only specified recipient can claim
                    </p>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="space-y-3">
                  <Button 
                    onClick={handleConnectWallet} 
                    disabled={loading} 
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg h-14 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all"
                  >
                    <Wallet className="mr-2 h-5 w-5" />
                    {loading ? "Connecting..." : "Connect Wallet to Start"}
                  </Button>
                  <p className="text-xs text-center text-muted-foreground">
                    🔒 Secure connection • No registration required • MetaMask supported
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* How It Works - Before Connection */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Eye className="h-5 w-5 text-primary" />
                  How It Works
                </CardTitle>
                <CardDescription>Simple, secure, and completely private</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                      1
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold mb-1 flex items-center gap-2">
                        <Wallet className="h-4 w-4" />
                        Connect Your Wallet
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Quick and secure connection with MetaMask. No personal information required.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                      2
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold mb-1 flex items-center gap-2">
                        <LinkIcon className="h-4 w-4" />
                        Create Payment Link
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Enter amount and recipient address. Get an instant magic link.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                      3
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold mb-1 flex items-center gap-2">
                        <Share2 className="h-4 w-4" />
                        Share Privately
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Send via WhatsApp, email, or any messaging app. Completely private.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center font-bold">
                      ✓
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold mb-1 flex items-center gap-2">
                        <Shield className="h-4 w-4 text-green-500" />
                        Recipient Claims
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        They click the link and receive USDgas directly. Zero-knowledge proofs protect privacy.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Trust Indicators */}
            <Card className="bg-gradient-to-r from-primary/5 to-background border-primary/20">
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <Shield className="h-8 w-8 text-primary" />
                    <div>
                      <p className="font-semibold">Powered by Zero-Knowledge Proofs</p>
                      <p className="text-xs text-muted-foreground">Military-grade cryptographic privacy</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="h-8 w-8 text-primary" />
                    <div>
                      <p className="font-semibold">Join the Privacy Movement</p>
                      <p className="text-xs text-muted-foreground">Trusted by crypto enthusiasts worldwide</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </>
        )}

        {/* Connected State - Redesigned Header */}
        {account && (
          <Card className="border-[#C7A9FF]/20 bg-gradient-to-br from-[#03051A] via-[#03051A] to-[#C7A9FF]/5">
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-[#F4FF4A]/20 blur-xl rounded-full" />
                    <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-[#F4FF4A] to-[#F4FF4A]/60 flex items-center justify-center">
                      <Wallet className="h-6 w-6 text-[#03051A]" />
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-1">Connected Wallet</p>
                    <p className="font-mono text-lg font-semibold text-white">
                      {account.slice(0, 6)}...{account.slice(-4)}
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      <p className="text-xs text-gray-400">
                        {chainId === 31337 ? "Localhost" : chainId === 123123 ? "Rayls Devnet" : `Chain ${chainId}`}
                      </p>
                    </div>
                  </div>
                </div>
                <Button onClick={disconnectWallet} variant="outline" size="sm" className="border-[#C7A9FF]/30 hover:border-[#C7A9FF]/60 hover:bg-[#C7A9FF]/10">
                  Disconnect
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Error Display */}
        {error && (
          <Alert variant="destructive">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {/* Pool Stats - Redesigned */}
        {account && poolStats && (
          <Card className="border-[#C7A9FF]/20 bg-[#03051A]">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-white flex items-center gap-2">
                  <Shield className="h-5 w-5 text-[#C7A9FF]" />
                  Pool Statistics
                </CardTitle>
                <Button onClick={refreshPoolStats} variant="outline" size="sm" className="border-[#F4FF4A]/30 hover:border-[#F4FF4A]/60 hover:bg-[#F4FF4A]/10 text-[#F4FF4A]">
                  Refresh
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-gradient-to-br from-[#C7A9FF]/10 to-[#C7A9FF]/5 rounded-lg p-4 border border-[#C7A9FF]/20 hover:border-[#C7A9FF]/40 transition-all">
                  <p className="text-xs text-gray-400 mb-2">Total Deposits</p>
                  <p className="text-2xl font-bold text-white">{poolStats.totalDeposits.toString()}</p>
                </div>
                <div className="bg-gradient-to-br from-[#F4FF4A]/10 to-[#F4FF4A]/5 rounded-lg p-4 border border-[#F4FF4A]/20 hover:border-[#F4FF4A]/40 transition-all">
                  <p className="text-xs text-gray-400 mb-2">Active Deposits</p>
                  <p className="text-2xl font-bold text-white">{poolStats.activeDeposits.toString()}</p>
                </div>
                <div className="bg-gradient-to-br from-[#C7A9FF]/10 to-[#C7A9FF]/5 rounded-lg p-4 border border-[#C7A9FF]/20 hover:border-[#C7A9FF]/40 transition-all">
                  <p className="text-xs text-gray-400 mb-2">Pool Balance</p>
                  <p className="text-2xl font-bold text-[#F4FF4A]">{ethers.formatEther(poolStats.balance).slice(0, 8)} USDgas</p>
                </div>
                <div className="bg-gradient-to-br from-green-500/10 to-green-500/5 rounded-lg p-4 border border-green-500/20 hover:border-green-500/40 transition-all">
                  <p className="text-xs text-gray-400 mb-2">Anonymity Set</p>
                  <p className="text-2xl font-bold text-green-400">{poolStats.totalDeposits.toString()}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Send Payment - Redesigned */}
        {account && !paymentLink && (
          <Card className="border-[#C7A9FF]/20 bg-gradient-to-br from-[#03051A] via-[#03051A] to-[#F4FF4A]/5 relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-white/[0.02] [mask-image:linear-gradient(0deg,transparent,black)]" />
            <CardHeader className="relative">
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-2xl text-white flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-[#F4FF4A] to-[#F4FF4A]/60">
                      <LinkIcon className="h-6 w-6 text-[#03051A]" />
                    </div>
                    Send Private Payment
                  </CardTitle>
                  <CardDescription className="mt-2 text-base">
                    Create a magic link to send USDgas with complete privacy
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6 relative">
              {/* Recipient Address */}
              <div className="space-y-3">
                <Label htmlFor="recipientAddress" className="text-white text-base flex items-center gap-2">
                  <Lock className="h-4 w-4 text-[#C7A9FF]" />
                  Recipient Wallet Address
                </Label>
                <div className="relative">
                  <Input
                    id="recipientAddress"
                    type="text"
                    placeholder="0x742d35Cc6634C0532925a3b844Bc9e7595f38B31"
                    value={recipientAddress}
                    onChange={(e) => validateRecipientAddress(e.target.value)}
                    disabled={loading}
                    className={`bg-[#05071F] border-[#C7A9FF]/30 focus:border-[#C7A9FF] text-white placeholder:text-gray-500 h-12 pl-4 pr-10 font-mono text-sm ${
                      addressError ? "border-red-500/50 focus:border-red-500" : ""
                    }`}
                  />
                  {recipientAddress && ethers.isAddress(recipientAddress) && !addressError && (
                    <div className="absolute right-3 top-1/2 -translate-y-1/2">
                      <Check className="h-5 w-5 text-green-500" />
                    </div>
                  )}
                  {addressError && (
                    <div className="absolute right-3 top-1/2 -translate-y-1/2">
                      <AlertTriangle className="h-5 w-5 text-red-500" />
                    </div>
                  )}
                </div>
                {addressError && (
                  <div className="flex items-start gap-2 bg-red-500/5 rounded-lg p-3 border border-red-500/20">
                    <AlertTriangle className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-red-400">{addressError}</p>
                  </div>
                )}
                {!addressError && (
                  <div className="flex items-start gap-2 bg-[#C7A9FF]/5 rounded-lg p-3 border border-[#C7A9FF]/20">
                    <Shield className="h-4 w-4 text-[#C7A9FF] flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-gray-300">
                      <span className="font-semibold text-[#C7A9FF]">Recipient locked:</span> Only this address can claim the funds. No one else can intercept.
                    </p>
                  </div>
                )}
              </div>

              {/* Amount */}
              <div className="space-y-3">
                <Label htmlFor="depositAmount" className="text-white text-base flex items-center gap-2">
                  <Zap className="h-4 w-4 text-[#F4FF4A]" />
                  Amount to Send
                </Label>
                <div className="relative">
                  <Input
                    id="depositAmount"
                    type="number"
                    step="0.01"
                    min="0"
                    placeholder="5.0"
                    value={depositAmount}
                    onChange={(e) => validateAmount(e.target.value)}
                    disabled={loading}
                    className={`bg-[#05071F] border-[#F4FF4A]/30 focus:border-[#F4FF4A] text-white placeholder:text-gray-500 h-12 pl-4 pr-24 text-lg font-semibold ${
                      amountError ? "border-red-500/50 focus:border-red-500" : ""
                    }`}
                  />
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 text-[#F4FF4A] font-semibold">
                    USDgas
                  </div>
                </div>
                {amountError && (
                  <div className="flex items-start gap-2 bg-red-500/5 rounded-lg p-3 border border-red-500/20">
                    <AlertTriangle className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-red-400">{amountError}</p>
                  </div>
                )}
                <div className="flex gap-2">
                  {[0.0001, 0.001, 0.01, 1].map((amount) => (
                    <Button
                      key={amount}
                      onClick={() => {
                        setDepositAmount(amount.toString());
                        setAmountError("");
                      }}
                      variant="outline"
                      size="sm"
                      className="flex-1 border-[#F4FF4A]/20 hover:border-[#F4FF4A]/60 hover:bg-[#F4FF4A]/10 text-gray-300 hover:text-[#F4FF4A]"
                    >
                      {amount}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Create Button */}
              <Button
                onClick={handleDeposit}
                disabled={loading || !depositAmount || !recipientAddress || !ethers.isAddress(recipientAddress) || !!addressError || !!amountError || parseFloat(depositAmount) <= 0}
                className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-[#F4FF4A] to-[#F4FF4A]/80 hover:from-[#F4FF4A]/90 hover:to-[#F4FF4A]/70 text-[#03051A] shadow-lg shadow-[#F4FF4A]/25 hover:shadow-xl hover:shadow-[#F4FF4A]/40 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <Zap className="h-5 w-5 mr-2 animate-pulse" />
                    Creating Payment Link...
                  </>
                ) : (
                  <>
                    <LinkIcon className="h-5 w-5 mr-2" />
                    Create Payment Link
                  </>
                )}
              </Button>

              {/* Info Card */}
              <div className="bg-gradient-to-r from-[#C7A9FF]/10 to-[#F4FF4A]/10 rounded-lg p-4 border border-[#C7A9FF]/20">
                <div className="flex items-start gap-3">
                  <Eye className="h-5 w-5 text-[#C7A9FF] flex-shrink-0 mt-0.5" />
                  <div className="space-y-2 text-sm text-gray-300">
                    <p className="font-semibold text-white">How it works:</p>
                    <ul className="space-y-1">
                      <li className="flex items-start gap-2">
                        <span className="text-[#F4FF4A] flex-shrink-0">1.</span>
                        <span>You deposit USDgas into the privacy pool</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#F4FF4A] flex-shrink-0">2.</span>
                        <span>Get a secure magic link locked to recipient's wallet</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#F4FF4A] flex-shrink-0">3.</span>
                        <span>Share via WhatsApp, Telegram, email - completely private</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-400 flex-shrink-0">✓</span>
                        <span>Zero-knowledge proofs hide all connections on-chain</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Payment Link Result */}
        {paymentLink && depositDetails && (
          <Card className="border-[#F4FF4A]/40 bg-gradient-to-br from-[#03051A] via-[#03051A] to-[#F4FF4A]/5">
            <CardHeader>
              <div className="flex justify-center mb-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#F4FF4A]/30 blur-3xl rounded-full animate-pulse" />
                  <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-[#F4FF4A] to-[#F4FF4A]/60 flex items-center justify-center">
                    <Check className="h-10 w-10 text-[#03051A]" />
                  </div>
                </div>
              </div>
              <CardTitle className="text-2xl text-center text-white">
                Payment Link Created!
              </CardTitle>
              <CardDescription className="text-center text-base">
                Share this link with the recipient. They can claim to their own wallet.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Payment Link Display */}
              <div className="space-y-3">
                <Label htmlFor="paymentLink" className="text-white text-base">Payment Link</Label>
                <div className="flex gap-2">
                  <Input
                    id="paymentLink"
                    value={paymentLink}
                    readOnly
                    className="bg-[#05071F] border-[#F4FF4A]/30 text-white font-mono text-sm"
                  />
                  <Button
                    onClick={handleCopyLink}
                    variant="outline"
                    size="icon"
                    className="border-[#F4FF4A]/30 hover:border-[#F4FF4A]/60 hover:bg-[#F4FF4A]/10"
                  >
                    {copied ? <Check className="h-4 w-4 text-[#F4FF4A]" /> : <Copy className="h-4 w-4" />}
                  </Button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-3">
                <Button 
                  onClick={handleCopyLink} 
                  variant="default" 
                  className="bg-[#F4FF4A] text-[#03051A] hover:bg-[#F4FF4A]/90"
                >
                  <Copy className="h-4 w-4 mr-2" />
                  {copied ? "Copied!" : "Copy Link"}
                </Button>
                
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button 
                      variant="outline" 
                      className="border-[#F4FF4A]/30 hover:border-[#F4FF4A]/60 hover:bg-[#F4FF4A]/10"
                    >
                      <Share2 className="h-4 w-4 mr-2" />
                      Share
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-[#05071F] border-[#F4FF4A]/20">
                    <DropdownMenuItem 
                      onClick={handleShareLink}
                      className="text-white hover:bg-[#F4FF4A]/10 cursor-pointer"
                    >
                      <Share2 className="h-4 w-4 mr-2" />
                      Share Menu (Native)
                    </DropdownMenuItem>
                    <DropdownMenuItem 
                      onClick={() => depositDetails && shareToWhatsApp(paymentLink, depositDetails.amount)}
                      className="text-white hover:bg-green-500/10 cursor-pointer"
                    >
                      <MessageCircle className="h-4 w-4 mr-2" />
                      WhatsApp
                    </DropdownMenuItem>
                    <DropdownMenuItem 
                      onClick={() => depositDetails && shareToTelegram(paymentLink, depositDetails.amount)}
                      className="text-white hover:bg-blue-500/10 cursor-pointer"
                    >
                      <Send className="h-4 w-4 mr-2" />
                      Telegram
                    </DropdownMenuItem>
                    <DropdownMenuItem 
                      onClick={() => depositDetails && shareToTwitter(paymentLink, depositDetails.amount)}
                      className="text-white hover:bg-blue-400/10 cursor-pointer"
                    >
                      <svg className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                      X (Twitter)
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                
                <Button
                  onClick={() => window.open(paymentLink, "_blank")}
                  variant="outline"
                  className="border-[#C7A9FF]/30 hover:border-[#C7A9FF]/60 hover:bg-[#C7A9FF]/10"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Open
                </Button>
                <Button
                  onClick={() => setShowDetailsPopup(true)}
                  variant="outline"
                  className="border-[#C7A9FF]/30 hover:border-[#C7A9FF]/60 hover:bg-[#C7A9FF]/10"
                >
                  <Eye className="h-4 w-4 mr-2" />
                  Details
                </Button>
              </div>

              {/* View on Explorer */}
              {depositDetails.txHash && (
                <Button
                  onClick={() => window.open(`https://devnet-explorer.rayls.com/tx/${depositDetails.txHash}`, "_blank")}
                  variant="outline"
                  className="w-full border-[#F4FF4A]/30 hover:border-[#F4FF4A]/60 hover:bg-[#F4FF4A]/10"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View on Explorer
                </Button>
              )}

              {/* Instructions */}
              <div className="bg-gradient-to-r from-[#F4FF4A]/10 to-[#F4FF4A]/5 rounded-lg p-4 border border-[#F4FF4A]/20">
                <p className="font-semibold text-white mb-2">✅ Payment Ready!</p>
                <ul className="text-sm text-gray-300 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-[#F4FF4A] flex-shrink-0">•</span>
                    <span>Share this link with the recipient (WhatsApp, email, etc.)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#F4FF4A] flex-shrink-0">•</span>
                    <span>They click the link and connect their wallet</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#F4FF4A] flex-shrink-0">•</span>
                    <span>They claim the {depositDetails.amount} USDgas to their address</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#C7A9FF] flex-shrink-0">🔒</span>
                    <span>Privacy: No one can see the connection between you and them</span>
                  </li>
                </ul>
              </div>

              {/* Create Another Payment */}
              <Button
                onClick={() => {
                  setPaymentLink(null);
                  setDepositDetails(null);
                }}
                variant="outline"
                className="w-full border-gray-500/30 hover:border-gray-500/60"
              >
                Create Another Payment
              </Button>
            </CardContent>
          </Card>
        )}

        {/* How It Works */}
        {account && (
          <Card>
            <CardHeader>
              <CardTitle>How It Works</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm">
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">
                    1
                  </div>
                  <div>
                    <p className="font-semibold">Create Payment</p>
                    <p className="text-muted-foreground">You deposit USDgas and get a magic link</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">
                    2
                  </div>
                  <div>
                    <p className="font-semibold">Share Privately</p>
                    <p className="text-muted-foreground">Send the link via WhatsApp, email, or any channel</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">
                    3
                  </div>
                  <div>
                    <p className="font-semibold">Recipient Claims</p>
                    <p className="text-muted-foreground">They click, connect wallet, and receive USDgas</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center text-xs font-bold">
                    ✓
                  </div>
                  <div>
                    <p className="font-semibold">Privacy Preserved</p>
                    <p className="text-muted-foreground">Zero-knowledge proofs hide the connection on-chain</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Details Popup */}
      <Dialog open={showDetailsPopup} onOpenChange={setShowDetailsPopup}>
        <DialogContent className="sm:max-w-2xl border-[#C7A9FF]/20 bg-gradient-to-br from-[#03051A] via-[#03051A] to-[#C7A9FF]/5 max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <div className="flex justify-center mb-4">
              <div className="relative">
                <div className="absolute inset-0 bg-[#C7A9FF]/30 blur-3xl rounded-full animate-pulse" />
                <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-[#C7A9FF] to-[#C7A9FF]/60 flex items-center justify-center">
                  <Eye className="h-10 w-10 text-white" />
                </div>
              </div>
            </div>
            <DialogTitle className="text-2xl text-center text-white">
              Deposit Details
            </DialogTitle>
            <DialogDescription className="text-center text-base text-gray-300">
              Technical information about your private payment
            </DialogDescription>
          </DialogHeader>
          
          {depositDetails && (
            <div className="space-y-4 px-6 pb-6">
              {/* Public Information */}
              <div className="bg-[#F4FF4A]/10 rounded-lg p-4 border border-[#F4FF4A]/30">
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <span className="text-[#F4FF4A]">👁️</span> Public Information (On-Chain)
                </h3>
                <div className="space-y-3">
                  <div>
                    <Label className="text-gray-400 text-xs">Commitment (Poseidon Hash)</Label>
                    <div className="bg-[#03051A] rounded p-3 border border-[#F4FF4A]/20 mt-1">
                      <code className="text-[#F4FF4A] text-sm break-all">{depositDetails.commitment}</code>
                    </div>
                    <p className="text-xs text-gray-400 mt-1">✓ Stored on blockchain - hides actual values</p>
                  </div>

                  <div>
                    <Label className="text-gray-400 text-xs">Sender Address</Label>
                    <div className="bg-[#03051A] rounded p-3 border border-[#F4FF4A]/20 mt-1">
                      <code className="text-[#F4FF4A] text-sm break-all">{depositDetails.sender}</code>
                    </div>
                    <p className="text-xs text-gray-400 mt-1">✓ Your wallet address (public)</p>
                  </div>

                  <div>
                    <Label className="text-gray-400 text-xs">Amount Deposited</Label>
                    <div className="bg-[#03051A] rounded p-3 border border-[#F4FF4A]/20 mt-1">
                      <code className="text-[#F4FF4A] text-lg font-bold">{depositDetails.amount} USDgas</code>
                    </div>
                    <p className="text-xs text-gray-400 mt-1">✓ Visible on blockchain</p>
                  </div>

                  {depositDetails.txHash && (
                    <div>
                      <Label className="text-gray-400 text-xs">Transaction Hash</Label>
                      <div className="bg-[#03051A] rounded p-3 border border-[#F4FF4A]/20 mt-1">
                        <code className="text-[#F4FF4A] text-sm break-all">{depositDetails.txHash}</code>
                      </div>
                      <p className="text-xs text-gray-400 mt-1">✓ Deposit transaction on blockchain</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Private Information */}
              <div className="bg-[#C7A9FF]/10 rounded-lg p-4 border border-[#C7A9FF]/30">
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <span className="text-[#C7A9FF]">🔒</span> Private Information (Off-Chain)
                </h3>
                <div className="space-y-3">
                  <div>
                    <Label className="text-gray-400 text-xs">Secret</Label>
                    <div className="bg-[#03051A] rounded p-3 border border-[#C7A9FF]/20 mt-1">
                      <code className="text-[#C7A9FF] text-sm break-all">{depositDetails.secret}</code>
                    </div>
                    <p className="text-xs text-gray-400 mt-1">🔒 Private - needed for withdrawal proof</p>
                  </div>

                  <div>
                    <Label className="text-gray-400 text-xs">Nullifier</Label>
                    <div className="bg-[#03051A] rounded p-3 border border-[#C7A9FF]/20 mt-1">
                      <code className="text-[#C7A9FF] text-sm break-all">{depositDetails.nullifier}</code>
                    </div>
                    <p className="text-xs text-gray-400 mt-1">🔒 Private - prevents double spending</p>
                  </div>

                  <div>
                    <Label className="text-gray-400 text-xs">Locked Recipient</Label>
                    <div className="bg-[#03051A] rounded p-3 border border-[#C7A9FF]/20 mt-1">
                      <code className="text-[#C7A9FF] text-sm break-all">{depositDetails.recipient}</code>
                    </div>
                    <p className="text-xs text-gray-400 mt-1">🔒 Private - only they can claim</p>
                  </div>
                </div>
              </div>

              {/* How it Works */}
              <div className="bg-gradient-to-r from-[#C7A9FF]/5 to-[#F4FF4A]/5 rounded-lg p-4 border border-gray-500/20">
                <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                  <Shield className="h-4 w-4 text-[#C7A9FF]" />
                  Privacy Guarantee
                </h4>
                <ul className="text-sm text-gray-300 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-[#C7A9FF] flex-shrink-0">•</span>
                    <span>The <strong>commitment</strong> is generated using Poseidon hash: <code className="text-[#F4FF4A] text-xs">H(secret, nullifier, amount, recipient)</code></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#C7A9FF] flex-shrink-0">•</span>
                    <span>Only the commitment is stored on-chain - the actual values remain private</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#C7A9FF] flex-shrink-0">•</span>
                    <span>The recipient uses these values to generate a zero-knowledge proof for withdrawal</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#F4FF4A] flex-shrink-0">✓</span>
                    <span>No one can link the deposit to the withdrawal - complete privacy!</span>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
    </>
  );
}
