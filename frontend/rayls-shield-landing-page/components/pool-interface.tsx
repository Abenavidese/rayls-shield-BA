"use client";

import { useState } from "react";
import { useRaylsShieldPool } from "@/hooks/useRaylsShieldPool";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { ethers } from "ethers";
import { generatePaymentURL, copyToClipboard, sharePaymentLink, type PaymentData } from "@/lib/utils/paymentLink";
import { Check, Copy, Share2, ExternalLink } from "lucide-react";

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
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <Card>
          <CardHeader>
            <CardTitle>RaylsShield Pool - Private Payments</CardTitle>
            <CardDescription>
              Send USDgas privately using zero-knowledge proofs and magic links
            </CardDescription>
          </CardHeader>
          <CardContent>
            {!account ? (
              <Button onClick={connectWallet} disabled={loading} className="w-full">
                {loading ? "Connecting..." : "Connect Wallet"}
              </Button>
            ) : (
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-muted-foreground">Connected Account</p>
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
                  <Button onClick={disconnectWallet} variant="outline" size="sm">
                    Disconnect
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Error Display */}
        {error && (
          <Alert variant="destructive">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {/* Pool Stats */}
        {poolStats && (
          <Card>
            <CardHeader>
              <CardTitle>Pool Statistics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Total Deposits</p>
                  <p className="text-2xl font-bold">{poolStats.totalDeposits.toString()}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Active Deposits</p>
                  <p className="text-2xl font-bold">{poolStats.activeDeposits.toString()}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Pool Balance</p>
                  <p className="text-2xl font-bold">{ethers.formatEther(poolStats.balance)} USDgas</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Anonymity Set</p>
                  <p className="text-2xl font-bold">{poolStats.totalDeposits.toString()}</p>
                </div>
              </div>
              <Button onClick={refreshPoolStats} variant="outline" size="sm" className="mt-4">
                Refresh Stats
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Send Payment */}
        {account && !paymentLink && (
          <Card>
            <CardHeader>
              <CardTitle>Send Private Payment</CardTitle>
              <CardDescription>
                Create a payment link to send USDgas privately to anyone
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="recipientAddress">Recipient Address 🔒</Label>
                <Input
                  id="recipientAddress"
                  type="text"
                  placeholder="0x742d35Cc6634C0532925a3b844Bc9e7595f38B31"
                  value={recipientAddress}
                  onChange={(e) => setRecipientAddress(e.target.value)}
                  disabled={loading}
                />
                <p className="text-xs text-muted-foreground">
                  🔐 Only this address will be able to claim the funds
                </p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="depositAmount">Amount (USDgas)</Label>
                <Input
                  id="depositAmount"
                  type="number"
                  step="0.01"
                  placeholder="5.0"
                  value={depositAmount}
                  onChange={(e) => setDepositAmount(e.target.value)}
                  disabled={loading}
                />
              </div>
              <Button
                onClick={handleDeposit}
                disabled={loading || !depositAmount || !recipientAddress || !ethers.isAddress(recipientAddress)}
                className="w-full"
              >
                {loading ? "Creating Payment..." : "Create Payment Link"}
              </Button>
              <p className="text-xs text-muted-foreground">
                ℹ️ You'll receive a magic link to share with the recipient. The link can only be claimed by the specified address.
              </p>
            </CardContent>
          </Card>
        )}

        {/* Payment Link Result */}
        {paymentLink && (
          <Card className="border-green-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Check className="h-5 w-5 text-green-500" />
                Payment Link Created!
              </CardTitle>
              <CardDescription>
                Share this link with the recipient. They can claim to their own wallet.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Payment Link Display */}
              <div className="space-y-2">
                <Label>Payment Link</Label>
                <div className="flex gap-2">
                  <Input
                    value={paymentLink}
                    readOnly
                    className="font-mono text-sm"
                  />
                  <Button
                    onClick={handleCopyLink}
                    variant="outline"
                    size="icon"
                  >
                    {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  </Button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2">
                <Button onClick={handleCopyLink} variant="default" className="flex-1">
                  <Copy className="h-4 w-4 mr-2" />
                  {copied ? "Copied!" : "Copy Link"}
                </Button>
                <Button onClick={handleShareLink} variant="outline" className="flex-1">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
                <Button
                  onClick={() => window.open(paymentLink, "_blank")}
                  variant="outline"
                  className="flex-1"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Open
                </Button>
              </div>

              {/* Instructions */}
              <Alert>
                <AlertDescription className="space-y-2">
                  <p className="font-semibold">✅ Payment Ready!</p>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>Share this link with the recipient (WhatsApp, email, etc.)</li>
                    <li>They click the link and connect their wallet</li>
                    <li>They claim the {depositAmount} USDgas to their address</li>
                    <li>🔒 Privacy: No one can see the connection between you and them</li>
                  </ul>
                </AlertDescription>
              </Alert>

              {/* Create Another Payment */}
              <Button
                onClick={() => setPaymentLink(null)}
                variant="outline"
                className="w-full"
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
    </div>
  );
}
