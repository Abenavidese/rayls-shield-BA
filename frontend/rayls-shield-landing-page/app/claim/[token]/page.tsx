"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { useRaylsShieldPool } from "@/hooks/useRaylsShieldPool";
import { decodePaymentLink, type PaymentData } from "@/lib/utils/paymentLink";
import { generateWithdrawalProof, generateComplianceWithdrawalProof, addressToBigInt } from "@/lib/zk/proof";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ethers } from "ethers";
import { Check, Wallet, Gift, AlertTriangle, Loader2, Shield, ArrowLeft, Sparkles, Lock, Zap } from "lucide-react";

export default function ClaimPage() {
  const params = useParams();
  const router = useRouter();
  const token = params.token as string;

  const {
    account,
    chainId,
    loading,
    error,
    connectWallet,
    withdraw,
  } = useRaylsShieldPool();

  const [paymentData, setPaymentData] = useState<PaymentData | null>(null);
  const [claiming, setClaiming] = useState(false);
  const [claimSuccess, setClaimSuccess] = useState(false);
  const [claimError, setClaimError] = useState<string | null>(null);
  const [txHash, setTxHash] = useState<string | null>(null);
  const [complianceRequired, setComplianceRequired] = useState(false);
  const [amlThreshold, setAmlThreshold] = useState<bigint>(BigInt(0));
  const [showWelcomePopup, setShowWelcomePopup] = useState(false);
  const [showAlreadyClaimedPopup, setShowAlreadyClaimedPopup] = useState(false);
  const [showWalletErrorPopup, setShowWalletErrorPopup] = useState(false);
  const [validating, setValidating] = useState(true);

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

  // Decode payment link on mount
  useEffect(() => {
    if (!token) {
      setValidating(false);
      return;
    }

    // Add a small delay to prevent flash of invalid state
    const validateLink = async () => {
      const decoded = decodePaymentLink(token);
      
      // Give it a moment to decode
      await new Promise(resolve => setTimeout(resolve, 300));
      
      if (!decoded) {
        setClaimError("Invalid payment link. Please check the URL.");
        setValidating(false);
        return;
      }

      setPaymentData(decoded);
      setValidating(false);
      // Show welcome popup when payment data is loaded
      setShowWelcomePopup(true);
    };

    validateLink();
  }, [token]);

  // Check compliance status when contract is ready
  useEffect(() => {
    const checkCompliance = async () => {
      if (!window.ethereum) return;

      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const network = await provider.getNetwork();

        // Get contract address for current network
        const networkConfig = network.chainId === BigInt(123123)
          ? { address: "0x7DF45676cb5Cc92DF8DD71b72745065391c7C6Be" }
          : null;

        if (!networkConfig) return;

        // Create contract instance
        const poolABI = [
          "function complianceRequired() view returns (bool)",
          "function AML_THRESHOLD() view returns (uint256)"
        ];
        const pool = new ethers.Contract(networkConfig.address, poolABI, provider);

        // Check compliance status
        const isRequired = await pool.complianceRequired();
        setComplianceRequired(isRequired);

        if (isRequired) {
          const threshold = await pool.AML_THRESHOLD();
          setAmlThreshold(threshold);
          console.log("🔒 Compliance Mode ENABLED - AML Threshold:", ethers.formatEther(threshold), "USDgas");
        } else {
          console.log("🔓 Compliance Mode DISABLED");
        }
      } catch (error) {
        console.error("Error checking compliance:", error);
      }
    };

    checkCompliance();
  }, []);

  // Check if user is on correct network
  const isCorrectNetwork = chainId === paymentData?.chainId;

  // Check if connected wallet matches the payment recipient
  const isCorrectWallet = account && paymentData
    ? account.toLowerCase() === paymentData.recipient.toLowerCase()
    : false;

  const handleClaim = async () => {
    if (!paymentData || !account) return;

    try {
      setClaiming(true);
      setClaimError(null);

      // Verify connected wallet matches the recipient in payment link
      if (account.toLowerCase() !== paymentData.recipient.toLowerCase()) {
        throw new Error(
          `Wrong wallet connected! This payment is locked to ${paymentData.recipient.slice(0, 6)}...${paymentData.recipient.slice(-4)}. Please switch to the correct wallet.`
        );
      }

      // Parse amount
      const amount = ethers.parseEther(paymentData.amount);

      // Check if amount exceeds AML threshold when compliance is enabled
      if (complianceRequired && amount >= amlThreshold) {
        throw new Error(
          `Amount ${ethers.formatEther(amount)} USDgas exceeds AML threshold of ${ethers.formatEther(amlThreshold)} USDgas. Compliance mode requires amounts below this limit.`
        );
      }

      console.log(complianceRequired ? "🔒 Generating compliance ZK proof..." : "🔐 Generating privacy ZK proof...");

      // Generate appropriate ZK proof based on compliance mode
      // IMPORTANT: Must use paymentData.recipient (not account) to match the commitment
      const { proof } = complianceRequired
        ? await generateComplianceWithdrawalProof(
            {
              secret: paymentData.secret,
              nullifier: paymentData.nullifier,
              recipient: addressToBigInt(paymentData.recipient),
              amount: amount,
            },
            amlThreshold
          )
        : await generateWithdrawalProof({
            secret: paymentData.secret,
            nullifier: paymentData.nullifier,
            recipient: addressToBigInt(paymentData.recipient),
            amount: amount,
          });

      console.log("✅ Proof generated, executing withdrawal...");

      // Suppress ALL console outputs temporarily to avoid technical errors showing
      const originalError = console.error;
      const originalWarn = console.warn;
      const originalLog = console.log;
      
      console.error = () => {};
      console.warn = () => {};
      console.log = (...args) => {
        // Only allow our custom emoji logs
        const message = args[0]?.toString() || '';
        if (message.includes('⚠️') || message.includes('✅') || message.includes('🔒') || message.includes('🔐')) {
          originalLog(...args);
        }
      };

      try {
        // Execute withdrawal to connected wallet (must be same as paymentData.recipient)
        const tx = await withdraw(account, amount, proof);
        setTxHash(tx.hash);
        setClaimSuccess(true);
      } finally {
        // Restore all console methods
        console.error = originalError;
        console.warn = originalWarn;
        console.log = originalLog;
      }
    } catch (err: any) {
      // Suppress technical error logs for better UX
      const errorMessage = err.message || err.reason || String(err);
      
      // Check if error is "Nullifier already used"
      if (errorMessage.includes("Nullifier already used")) {
        console.log("⚠️ Payment link already claimed");
        setShowAlreadyClaimedPopup(true);
        setClaimError(null); // Clear any other errors
      } else if (errorMessage.includes("Wrong wallet")) {
        console.log("⚠️ Wrong wallet connected");
        setClaimError("Wrong wallet connected. Please switch to the correct wallet.");
      } else if (errorMessage.includes("Wrong Network") || errorMessage.includes("wrong network")) {
        console.log("⚠️ Wrong network");
        setClaimError("Wrong network. Please switch to the correct network in your wallet.");
      } else if (errorMessage.includes("user rejected") || errorMessage.includes("User denied")) {
        console.log("⚠️ Transaction rejected by user");
        setClaimError("Transaction was rejected. Please try again.");
      } else {
        // Log simplified error for debugging
        console.log("⚠️ Claim failed:", errorMessage.split('\n')[0].substring(0, 100));
        setClaimError("Failed to claim payment. Please check your wallet and try again.");
      }
    } finally {
      setClaiming(false);
    }
  };

  // Show loading state while validating
  if (validating) {
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
            </nav>
          </div>
        </header>

        <div className="min-h-screen flex items-center justify-center bg-[#03051A] pt-24">
          <div className="text-center space-y-6">
            <div className="relative inline-flex items-center justify-center">
              <div className="absolute inset-0 bg-[#F4FF4A]/20 blur-3xl rounded-full animate-pulse" />
              <div className="relative bg-gradient-to-br from-[#F4FF4A] to-[#F4FF4A]/60 p-8 rounded-full">
                <Loader2 className="h-12 w-12 text-[#03051A] animate-spin" />
              </div>
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-white">Validating Payment Link</h2>
              <p className="text-gray-400">Please wait while we verify your payment...</p>
            </div>
          </div>
        </div>
      </>
    );
  }

  // Invalid link
  if (!paymentData && !loading) {
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
              <Link href="/">
                <Button variant="ghost" size="sm" className="text-gray-300 hover:text-[#F4FF4A] gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Back to Home
                </Button>
              </Link>
            </nav>
          </div>
        </header>

        <div className="container mx-auto px-4 py-8 pt-24">
          <div className="max-w-2xl mx-auto">
            <Card className="border-red-500/50 bg-gradient-to-br from-red-500/5 to-background">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-red-400">
                  <AlertTriangle className="h-5 w-5" />
                  Invalid Payment Link
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  This payment link is invalid or has been corrupted. Please check the URL or contact the sender.
                </p>
                <Button onClick={() => router.push("/pool")} variant="outline" className="border-[#F4FF4A]/30 hover:border-[#F4FF4A]/60 hover:bg-[#F4FF4A]/10">
                  Go to Pool
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </>
    );
  }

  // Success state
  if (claimSuccess && txHash) {
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
              <Link href="/">
                <Button variant="ghost" size="sm" className="text-gray-300 hover:text-[#F4FF4A] gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Back to Home
                </Button>
              </Link>
            </nav>
          </div>
        </header>

        <div className="container mx-auto px-4 py-8 pt-24">
          <div className="max-w-2xl mx-auto">
            <Card className="border-green-500/50 bg-gradient-to-br from-green-500/10 to-background">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-green-500/30 blur-2xl rounded-full" />
                    <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
                      <Check className="h-10 w-10 text-white" />
                    </div>
                  </div>
                </div>
                <CardTitle className="flex items-center justify-center gap-2 text-green-400 text-2xl">
                  Payment Claimed Successfully!
                </CardTitle>
                <CardDescription className="text-center text-lg mt-2">
                  {paymentData?.amount} USDgas has been sent to your wallet
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-[#05071F] rounded-lg p-4 border border-green-500/30">
                  <p className="text-sm text-gray-400 mb-2">Transaction Hash</p>
                  <p className="font-mono text-xs text-green-400 break-all">{txHash}</p>
                </div>

                <div className="bg-gradient-to-r from-[#C7A9FF]/10 to-[#F4FF4A]/10 rounded-lg p-4 border border-[#C7A9FF]/20">
                  <p className="text-sm font-semibold text-white mb-2">✅ What just happened?</p>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Zero-knowledge proof verified on-chain</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>No one can link this payment to the sender</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Your privacy is preserved by the anonymity set</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Payment link is now used and cannot be claimed again</span>
                    </li>
                  </ul>
                </div>

                <div className="flex gap-3">
                  <Button onClick={() => router.push("/pool")} className="flex-1 bg-gradient-to-r from-[#F4FF4A] to-[#F4FF4A]/80 hover:from-[#F4FF4A]/90 hover:to-[#F4FF4A]/70 text-[#03051A]">
                    Send a Payment
                  </Button>
                  <Button
                    onClick={() => window.open(`https://devnet-explorer.rayls.com/tx/${txHash}`, "_blank")}
                    variant="outline"
                    className="flex-1 border-[#C7A9FF]/30 hover:border-[#C7A9FF]/60 hover:bg-[#C7A9FF]/10"
                  >
                    View on Explorer
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </>
    );
  }

  // Main claim interface
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
            <Link href="/">
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-[#F4FF4A] gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Welcome Popup */}
      <Dialog open={showWelcomePopup} onOpenChange={setShowWelcomePopup}>
        <DialogContent className="sm:max-w-md border-[#F4FF4A]/20 bg-gradient-to-br from-[#03051A] via-[#03051A] to-[#F4FF4A]/5">
          <DialogHeader>
            <div className="flex justify-center mb-4">
              <div className="relative">
                <div className="absolute inset-0 bg-green-500/30 blur-3xl rounded-full animate-pulse" />
                <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
                  <Gift className="h-10 w-10 text-white" />
                </div>
              </div>
            </div>
            <DialogTitle className="text-2xl text-center text-white">
              Your payment is on the way!
            </DialogTitle>
            <DialogDescription className="text-center text-lg font-semibold text-[#F4FF4A]">
              {paymentData?.amount} USDgas waiting for you
            </DialogDescription>
          </DialogHeader>
          <div className="px-6 pb-2">
            <div className="bg-gradient-to-r from-[#C7A9FF]/10 to-[#F4FF4A]/10 rounded-lg p-4 border border-[#C7A9FF]/20">
              <span className="block text-sm text-white font-semibold mb-2 flex items-center justify-center gap-2">
                <Lock className="h-4 w-4 text-[#C7A9FF]" />
                Please prove your identity and get your funds
              </span>
              <span className="block text-xs text-gray-400 text-center">
                Connect your wallet to securely claim this private payment
              </span>
            </div>
          </div>
          <div className="flex justify-center mt-2">
            <Button 
              onClick={() => setShowWelcomePopup(false)}
              className="bg-gradient-to-r from-[#F4FF4A] to-[#F4FF4A]/80 hover:from-[#F4FF4A]/90 hover:to-[#F4FF4A]/70 text-[#03051A] font-semibold"
            >
              <Sparkles className="h-4 w-4 mr-2" />
              Let's Get Started
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Already Claimed Popup */}
      <Dialog open={showAlreadyClaimedPopup} onOpenChange={setShowAlreadyClaimedPopup}>
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
              Sorry!
            </DialogTitle>
            <DialogDescription className="text-center text-lg font-semibold text-red-400">
              You have already claimed this payment link!
            </DialogDescription>
          </DialogHeader>
          <div className="px-6 pb-2">
            <div className="bg-gradient-to-r from-red-500/10 to-red-500/5 rounded-lg p-4 border border-red-500/20">
              <span className="block text-sm text-gray-300 text-center">
                This payment link has been used and cannot be claimed again. Each link can only be claimed once for security reasons.
              </span>
            </div>
          </div>
          <div className="flex gap-2 mt-2">
            <Button 
              onClick={() => setShowAlreadyClaimedPopup(false)}
              variant="outline"
              className="flex-1 border-red-500/30 hover:border-red-500/60 hover:bg-red-500/10"
            >
              Close
            </Button>
            <Button 
              onClick={() => router.push("/pool")}
              className="flex-1 bg-gradient-to-r from-[#F4FF4A] to-[#F4FF4A]/80 hover:from-[#F4FF4A]/90 hover:to-[#F4FF4A]/70 text-[#03051A] font-semibold"
            >
              Send a Payment
            </Button>
          </div>
        </DialogContent>
      </Dialog>

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
      <div className="max-w-2xl mx-auto space-y-6">
        {/* Payment Details Card - Redesigned */}
        {paymentData && (
          <Card className="border-[#F4FF4A]/20 bg-gradient-to-br from-[#03051A] via-[#03051A] to-[#F4FF4A]/5 relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-white/[0.02] [mask-image:linear-gradient(0deg,transparent,black)]" />
            <CardHeader className="relative">
              <div className="flex items-center justify-center mb-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#F4FF4A]/20 blur-2xl rounded-full" />
                  <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-[#F4FF4A] to-[#F4FF4A]/60 flex items-center justify-center">
                    <Gift className="h-8 w-8 text-[#03051A]" />
                  </div>
                </div>
              </div>
              <CardTitle className="text-2xl text-center text-white">
                You Received a Private Payment!
              </CardTitle>
              <CardDescription className="text-center text-base mt-2">
                Someone sent you USDgas privately using RaylsShield
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 relative">
              {/* Amount Display */}
              <div className="bg-gradient-to-r from-[#F4FF4A]/10 to-[#F4FF4A]/5 rounded-lg p-6 border border-[#F4FF4A]/30 text-center">
                <p className="text-sm text-gray-400 mb-2">Payment Amount</p>
                <p className="text-4xl font-bold text-[#F4FF4A]">{paymentData.amount}</p>
                <p className="text-lg text-gray-300 mt-1">USDgas</p>
              </div>

              {/* Details Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#05071F] rounded-lg p-4 border border-[#C7A9FF]/20">
                  <p className="text-xs text-gray-400 mb-1">Network</p>
                  <p className="text-sm font-semibold text-white">
                    {paymentData.chainId === 123123 ? "Rayls Devnet" : `Chain ${paymentData.chainId}`}
                  </p>
                </div>
                <div className="bg-[#05071F] rounded-lg p-4 border border-[#C7A9FF]/20">
                  <p className="text-xs text-gray-400 mb-1">Created</p>
                  <p className="text-sm font-semibold text-white">
                    {new Date(paymentData.timestamp).toLocaleDateString()}
                  </p>
                </div>
              </div>

              {/* Locked Recipient Warning */}
              <div className="bg-gradient-to-r from-[#C7A9FF]/10 to-[#C7A9FF]/5 rounded-lg p-4 border border-[#C7A9FF]/30">
                <div className="flex items-start gap-3">
                  <Lock className="h-5 w-5 text-[#C7A9FF] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white mb-1">Payment Locked to Your Wallet</p>
                    <p className="text-sm text-gray-300 font-mono break-all">
                      {paymentData.recipient}
                    </p>
                    <p className="text-xs text-gray-400 mt-2">
                      You must connect this specific wallet to claim the funds
                    </p>
                  </div>
                </div>
              </div>

              {complianceRequired && (
                <div className="flex items-center gap-2 p-3 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                  <Shield className="h-4 w-4 text-blue-400" />
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-blue-300">Compliance Mode Active</p>
                    <p className="text-xs text-blue-400">
                      AML threshold: {ethers.formatEther(amlThreshold)} USDgas
                    </p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        )}

        {/* Error Display */}
        {(error || claimError) && (
          <Alert variant="destructive">
            <AlertDescription>{error || claimError}</AlertDescription>
          </Alert>
        )}

        {/* Wallet Connection - Redesigned */}
        {!account ? (
          <Card className="border-[#C7A9FF]/20 bg-gradient-to-br from-[#03051A] via-[#03051A] to-[#C7A9FF]/5">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Wallet className="h-5 w-5 text-[#F4FF4A]" />
                Connect Your Wallet
              </CardTitle>
              <CardDescription className="text-base">
                Connect your wallet to claim the {paymentData?.amount} USDgas
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                onClick={handleConnectWallet} 
                disabled={loading} 
                className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-[#F4FF4A] to-[#F4FF4A]/80 hover:from-[#F4FF4A]/90 hover:to-[#F4FF4A]/70 text-[#03051A] shadow-lg shadow-[#F4FF4A]/25"
                size="lg"
              >
                <Wallet className="h-5 w-5 mr-2" />
                {loading ? "Connecting..." : "Connect Wallet to Claim"}
              </Button>
            </CardContent>
          </Card>
        ) : (
          <>
            {/* Connected Wallet Info - Redesigned */}
            <Card className="border-[#C7A9FF]/20 bg-[#03051A]">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-500" />
                  Wallet Connected
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-green-500/20 blur-xl rounded-full" />
                    <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
                      <Wallet className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-gray-400 mb-1">Your Address</p>
                    <p className="font-mono text-sm font-semibold text-white">
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

                {/* Wallet Mismatch Warning */}
                {account && paymentData && account.toLowerCase() !== paymentData.recipient.toLowerCase() && (
                  <Alert variant="destructive" className="bg-red-500/10 border-red-500/30">
                    <AlertDescription className="flex items-start gap-2">
                      <AlertTriangle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold mb-1">Wrong Wallet Connected!</p>
                        <p className="text-sm">
                          This payment is locked to {paymentData.recipient.slice(0, 6)}...{paymentData.recipient.slice(-4)}. 
                          Please switch to the correct wallet in MetaMask.
                        </p>
                      </div>
                    </AlertDescription>
                  </Alert>
                )}

                {/* Network Warning */}
                {!isCorrectNetwork && paymentData && (
                  <Alert variant="destructive" className="bg-red-500/10 border-red-500/30">
                    <AlertDescription className="flex items-start gap-2">
                      <AlertTriangle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold mb-1">Wrong Network!</p>
                        <p className="text-sm">
                          Please switch to {paymentData.chainId === 123123 ? "Rayls Devnet" : `Chain ${paymentData.chainId}`} in your wallet.
                        </p>
                      </div>
                    </AlertDescription>
                  </Alert>
                )}
              </CardContent>
            </Card>

            {/* Claim Button - Redesigned */}
            <Card className="border-[#F4FF4A]/20 bg-gradient-to-br from-[#03051A] via-[#03051A] to-[#F4FF4A]/5 relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-white/[0.02] [mask-image:linear-gradient(0deg,transparent,black)]" />
              <CardHeader className="relative">
                <CardTitle className="text-white flex items-center gap-2">
                  <Zap className="h-5 w-5 text-[#F4FF4A]" />
                  Ready to Claim
                </CardTitle>
                <CardDescription className="text-base">
                  Click below to claim your {paymentData?.amount} USDgas
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 relative">
                <Button
                  onClick={handleClaim}
                  disabled={claiming || !isCorrectNetwork || !isCorrectWallet || loading}
                  className="w-full h-16 text-xl font-bold bg-gradient-to-r from-[#F4FF4A] to-[#F4FF4A]/80 hover:from-[#F4FF4A]/90 hover:to-[#F4FF4A]/70 text-[#03051A] shadow-lg shadow-[#F4FF4A]/25 hover:shadow-xl hover:shadow-[#F4FF4A]/40 transition-all disabled:opacity-50"
                  size="lg"
                >
                  {claiming ? (
                    <>
                      <Loader2 className="h-6 w-6 mr-2 animate-spin" />
                      Claiming Payment...
                    </>
                  ) : (
                    <>
                      <Gift className="h-6 w-6 mr-2" />
                      Claim {paymentData?.amount} USDgas
                    </>
                  )}
                </Button>

                {/* Process Info */}
                <div className="bg-gradient-to-r from-[#C7A9FF]/10 to-[#F4FF4A]/10 rounded-lg p-4 border border-[#C7A9FF]/20">
                  <p className="font-semibold text-white mb-3 flex items-center gap-2">
                    <Shield className="h-4 w-4 text-[#C7A9FF]" />
                    What happens when you claim:
                  </p>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-[#F4FF4A] flex-shrink-0 font-bold">1.</span>
                      <span>Zero-knowledge proof is generated in your browser</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#F4FF4A] flex-shrink-0 font-bold">2.</span>
                      <span>Proof is verified on the blockchain</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#F4FF4A] flex-shrink-0 font-bold">3.</span>
                      <span>USDgas is transferred to your wallet</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 flex-shrink-0">✓</span>
                      <span>No one can link you to the sender on-chain</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </>
        )}

        {/* Error Display */}
        {(error || claimError) && (
          <Alert variant="destructive" className="bg-red-500/10 border-red-500/30">
            <AlertDescription className="flex items-start gap-2">
              <AlertTriangle className="h-5 w-5 flex-shrink-0" />
              <span>{error || claimError}</span>
            </AlertDescription>
          </Alert>
        )}

        {/* How It Works - Compact */}
        <Card className="border-[#C7A9FF]/20 bg-[#03051A]">
          <CardHeader>
            <CardTitle className="text-white text-lg">How RaylsShield Works</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-3 text-sm">
              <div className="flex gap-3 bg-[#05071F] p-3 rounded-lg border border-[#C7A9FF]/10">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-[#C7A9FF] to-[#C7A9FF]/60 flex items-center justify-center text-xs font-bold text-white">
                  1
                </div>
                <div>
                  <p className="font-semibold text-white">Deposit</p>
                  <p className="text-gray-400 text-xs">Sender adds funds to pool</p>
                </div>
              </div>
              <div className="flex gap-3 bg-[#05071F] p-3 rounded-lg border border-[#F4FF4A]/10">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-[#F4FF4A] to-[#F4FF4A]/60 flex items-center justify-center text-xs font-bold text-[#03051A]">
                  2
                </div>
                <div>
                  <p className="font-semibold text-white">Share Link</p>
                  <p className="text-gray-400 text-xs">You receive magic link</p>
                </div>
              </div>
              <div className="flex gap-3 bg-[#05071F] p-3 rounded-lg border border-[#C7A9FF]/10">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-[#C7A9FF] to-[#C7A9FF]/60 flex items-center justify-center text-xs font-bold text-white">
                  3
                </div>
                <div>
                  <p className="font-semibold text-white">Claim</p>
                  <p className="text-gray-400 text-xs">Connect wallet and claim</p>
                </div>
              </div>
              <div className="flex gap-3 bg-gradient-to-br from-green-500/10 to-green-500/5 p-3 rounded-lg border border-green-500/30">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-xs font-bold text-white">
                  ✓
                </div>
                <div>
                  <p className="font-semibold text-green-400">Private</p>
                  <p className="text-gray-400 text-xs">ZK proofs hide link</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
    </>
  );
}
