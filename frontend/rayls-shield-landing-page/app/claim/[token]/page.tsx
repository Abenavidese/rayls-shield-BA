"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useRaylsShieldPool } from "@/hooks/useRaylsShieldPool";
import { decodePaymentLink, type PaymentData } from "@/lib/utils/paymentLink";
import { generateWithdrawalProof, generateComplianceWithdrawalProof, addressToBigInt } from "@/lib/zk/proof";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { ethers } from "ethers";
import { Check, Wallet, Gift, AlertTriangle, Loader2, Shield } from "lucide-react";

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

  // Decode payment link on mount
  useEffect(() => {
    if (!token) return;

    const decoded = decodePaymentLink(token);
    if (!decoded) {
      setClaimError("Invalid payment link. Please check the URL.");
      return;
    }

    setPaymentData(decoded);
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

      // Execute withdrawal to connected wallet (must be same as paymentData.recipient)
      const tx = await withdraw(account, amount, proof);

      setTxHash(tx.hash);
      setClaimSuccess(true);
    } catch (err: any) {
      console.error("Claim error:", err);
      setClaimError(err.message || "Failed to claim payment. Please try again.");
    } finally {
      setClaiming(false);
    }
  };

  // Invalid link
  if (!paymentData && !loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <Card className="border-destructive">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-destructive">
                <AlertTriangle className="h-5 w-5" />
                Invalid Payment Link
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                This payment link is invalid or has been corrupted. Please check the URL or contact the sender.
              </p>
              <Button onClick={() => router.push("/pool")} variant="outline">
                Go to Pool
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // Success state
  if (claimSuccess && txHash) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <Card className="border-green-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-500">
                <Check className="h-5 w-5" />
                Payment Claimed Successfully!
              </CardTitle>
              <CardDescription>
                {paymentData?.amount} USDgas has been sent to your wallet
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Alert>
                <AlertDescription>
                  <p className="font-semibold mb-2">✅ Transaction Confirmed</p>
                  <p className="text-sm text-muted-foreground break-all">
                    Transaction Hash: {txHash}
                  </p>
                </AlertDescription>
              </Alert>

              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  The USDgas has been privately transferred to your wallet address:
                </p>
                <p className="font-mono text-sm bg-muted p-2 rounded">
                  {account?.slice(0, 6)}...{account?.slice(-4)}
                </p>
              </div>

              <div className="space-y-2">
                <p className="text-sm font-semibold">What happened?</p>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                  <li>Zero-knowledge proof was verified on-chain</li>
                  <li>No one can link this payment to the sender</li>
                  <li>Your privacy is preserved by the anonymity set</li>
                  <li>The payment link is now used and cannot be claimed again</li>
                </ul>
              </div>

              <div className="flex gap-2">
                <Button onClick={() => router.push("/pool")} className="flex-1">
                  Send a Payment
                </Button>
                <Button
                  onClick={() => window.open(`https://devnet-explorer.rayls.com/tx/${txHash}`, "_blank")}
                  variant="outline"
                  className="flex-1"
                >
                  View on Explorer
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // Main claim interface
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto space-y-6">
        {/* Header */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Gift className="h-5 w-5 text-primary" />
              You Received a Private Payment!
            </CardTitle>
            <CardDescription>
              Someone sent you USDgas privately using RaylsShield
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Payment Details */}
        {paymentData && (
          <Card>
            <CardHeader>
              <CardTitle>Payment Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Amount</p>
                  <p className="text-2xl font-bold">{paymentData.amount} USDgas</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Network</p>
                  <p className="text-lg font-medium">
                    {paymentData.chainId === 123123 ? "Rayls Devnet" : `Chain ${paymentData.chainId}`}
                  </p>
                </div>
              </div>

              <div>
                <p className="text-sm text-muted-foreground">Created</p>
                <p className="text-sm">
                  {new Date(paymentData.timestamp).toLocaleString()}
                </p>
              </div>

              {complianceRequired && (
                <div className="flex items-center gap-2 p-3 bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg">
                  <Shield className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-blue-700 dark:text-blue-300">Compliance Mode Active</p>
                    <p className="text-xs text-blue-600 dark:text-blue-400">
                      AML threshold: {ethers.formatEther(amlThreshold)} USDgas
                    </p>
                  </div>
                </div>
              )}

              <Alert>
                <AlertDescription className="text-sm space-y-2">
                  <p>🔒 This payment is private. No one can see who sent it to you on the blockchain.</p>
                  <p className="font-semibold text-orange-600">
                    ⚠️ This payment is locked to wallet: {paymentData.recipient.slice(0, 6)}...{paymentData.recipient.slice(-4)}
                  </p>
                  <p className="text-xs">You must connect this specific wallet to claim the payment.</p>
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        )}

        {/* Error Display */}
        {(error || claimError) && (
          <Alert variant="destructive">
            <AlertDescription>{error || claimError}</AlertDescription>
          </Alert>
        )}

        {/* Wallet Connection */}
        {!account ? (
          <Card>
            <CardHeader>
              <CardTitle>Connect Your Wallet</CardTitle>
              <CardDescription>
                Connect your wallet to claim the {paymentData?.amount} USDgas to your address
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button onClick={connectWallet} disabled={loading} className="w-full" size="lg">
                <Wallet className="h-4 w-4 mr-2" />
                {loading ? "Connecting..." : "Connect Wallet"}
              </Button>
            </CardContent>
          </Card>
        ) : (
          <>
            {/* Connected Wallet Info */}
            <Card>
              <CardHeader>
                <CardTitle>Your Wallet</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-muted-foreground">Connected Address</p>
                    <p className="font-mono text-sm">
                      {account.slice(0, 6)}...{account.slice(-4)}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Network</p>
                    <p className="text-sm font-medium">
                      {chainId === 31337 ? "Localhost" : chainId === 123123 ? "Rayls Devnet" : `Chain ${chainId}`}
                    </p>
                  </div>
                </div>

                {/* Wallet Mismatch Warning */}
                {account && paymentData && account.toLowerCase() !== paymentData.recipient.toLowerCase() && (
                  <Alert variant="destructive">
                    <AlertDescription>
                      ⚠️ Wrong Wallet! This payment is locked to {paymentData.recipient.slice(0, 6)}...{paymentData.recipient.slice(-4)}. Please switch to the correct wallet in MetaMask.
                    </AlertDescription>
                  </Alert>
                )}

                {/* Network Warning */}
                {!isCorrectNetwork && paymentData && (
                  <Alert variant="destructive">
                    <AlertDescription>
                      ⚠️ Wrong Network! Please switch to {paymentData.chainId === 123123 ? "Rayls Devnet" : `Chain ${paymentData.chainId}`} in your wallet.
                    </AlertDescription>
                  </Alert>
                )}
              </CardContent>
            </Card>

            {/* Claim Button */}
            <Card>
              <CardHeader>
                <CardTitle>Claim Payment</CardTitle>
                <CardDescription>
                  Click below to claim the {paymentData?.amount} USDgas to your wallet
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button
                  onClick={handleClaim}
                  disabled={claiming || !isCorrectNetwork || !isCorrectWallet || loading}
                  className="w-full"
                  size="lg"
                >
                  {claiming ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Claiming...
                    </>
                  ) : (
                    <>
                      <Gift className="h-4 w-4 mr-2" />
                      Claim {paymentData?.amount} USDgas
                    </>
                  )}
                </Button>

                {/* Instructions */}
                <Alert>
                  <AlertDescription className="space-y-2">
                    <p className="font-semibold">What happens when you claim?</p>
                    <ul className="list-disc list-inside text-sm space-y-1">
                      <li>A zero-knowledge proof is generated</li>
                      <li>The proof is verified on-chain</li>
                      <li>USDgas is sent to your connected wallet</li>
                      <li>Your privacy is protected - no one can link you to the sender</li>
                    </ul>
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>
          </>
        )}

        {/* How It Works */}
        <Card>
          <CardHeader>
            <CardTitle>How RaylsShield Works</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-sm">
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">
                  1
                </div>
                <div>
                  <p className="font-semibold">Sender Creates Payment</p>
                  <p className="text-muted-foreground">They deposit USDgas into the privacy pool</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">
                  2
                </div>
                <div>
                  <p className="font-semibold">You Receive Link</p>
                  <p className="text-muted-foreground">The sender shares a magic link with you privately</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">
                  3
                </div>
                <div>
                  <p className="font-semibold">You Claim</p>
                  <p className="text-muted-foreground">Connect wallet and claim to your address</p>
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
      </div>
    </div>
  );
}
