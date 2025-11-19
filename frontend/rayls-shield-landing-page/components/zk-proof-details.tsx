'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { CheckCircle2, Lock, Shield, Hash, Eye, EyeOff } from 'lucide-react'

interface ZKProofDetailsProps {
  proofData?: {
    privateInputs?: {
      secret?: string
      nullifier?: string
      recipient?: string
      amount?: number
    }
    publicOutputs?: {
      nullifierHash?: string
      commitment?: string
      recipientHash?: string
    }
    complianceCheck?: {
      amlThreshold?: number
      passed?: boolean
      amountUnderThreshold?: boolean
    }
    proofGenerated?: boolean
    locallyVerified?: boolean
  }
  show?: boolean
}

export function ZKProofDetails({ proofData, show = false }: ZKProofDetailsProps) {
  if (!show || !proofData) return null

  return (
    <div className="space-y-4 mt-6">
      {/* Private Inputs Section */}
      <Card className="border-[#F4FF4A]/30 bg-[#05071F]/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-[#F4FF4A]">
            <Lock className="w-5 h-5" />
            Private Inputs (Hidden from Blockchain)
          </CardTitle>
          <CardDescription className="text-gray-400">
            These values are known only to you and never revealed
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-start justify-between p-3 rounded-lg bg-[#03051A]/50 border border-[#F4FF4A]/10">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <EyeOff className="w-4 h-4 text-[#C7A9FF]" />
                <span className="text-sm font-medium text-white">Secret</span>
              </div>
              <code className="text-xs text-gray-400 break-all">
                {proofData.privateInputs?.secret || 'Generating...'}
              </code>
            </div>
            <Badge variant="secondary" className="bg-[#C7A9FF]/20 text-[#C7A9FF] border-[#C7A9FF]/30">
              Private
            </Badge>
          </div>

          <div className="flex items-start justify-between p-3 rounded-lg bg-[#03051A]/50 border border-[#F4FF4A]/10">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <EyeOff className="w-4 h-4 text-[#C7A9FF]" />
                <span className="text-sm font-medium text-white">Nullifier</span>
              </div>
              <code className="text-xs text-gray-400 break-all">
                {proofData.privateInputs?.nullifier || 'Generating...'}
              </code>
            </div>
            <Badge variant="secondary" className="bg-[#C7A9FF]/20 text-[#C7A9FF] border-[#C7A9FF]/30">
              Private
            </Badge>
          </div>

          <div className="flex items-start justify-between p-3 rounded-lg bg-[#03051A]/50 border border-[#F4FF4A]/10">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <EyeOff className="w-4 h-4 text-[#C7A9FF]" />
                <span className="text-sm font-medium text-white">Recipient Address</span>
              </div>
              <code className="text-xs text-gray-400 break-all">
                {proofData.privateInputs?.recipient || 'Not set'}
              </code>
            </div>
            <Badge variant="secondary" className="bg-[#C7A9FF]/20 text-[#C7A9FF] border-[#C7A9FF]/30">
              Private
            </Badge>
          </div>

          <div className="flex items-start justify-between p-3 rounded-lg bg-[#03051A]/50 border border-[#F4FF4A]/10">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <EyeOff className="w-4 h-4 text-[#C7A9FF]" />
                <span className="text-sm font-medium text-white">Amount</span>
              </div>
              <code className="text-xs text-gray-400">
                {proofData.privateInputs?.amount ? `${proofData.privateInputs.amount} USDr` : 'Not set'}
              </code>
            </div>
            <Badge variant="secondary" className="bg-[#C7A9FF]/20 text-[#C7A9FF] border-[#C7A9FF]/30">
              Private
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* Public Outputs Section */}
      <Card className="border-[#F4FF4A]/30 bg-[#05071F]/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-[#F4FF4A]">
            <Hash className="w-5 h-5" />
            Public Outputs (Visible On-Chain)
          </CardTitle>
          <CardDescription className="text-gray-400">
            Cryptographic hashes that prove knowledge without revealing data
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-start justify-between p-3 rounded-lg bg-[#03051A]/50 border border-[#F4FF4A]/10">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <Eye className="w-4 h-4 text-[#F4FF4A]" />
                <span className="text-sm font-medium text-white">Nullifier Hash</span>
              </div>
              <code className="text-xs text-gray-400 break-all">
                {proofData.publicOutputs?.nullifierHash || 'Calculating...'}
              </code>
            </div>
            <Badge className="bg-[#F4FF4A]/20 text-[#F4FF4A] border-[#F4FF4A]/30">
              Public
            </Badge>
          </div>

          <div className="flex items-start justify-between p-3 rounded-lg bg-[#03051A]/50 border border-[#F4FF4A]/10">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <Eye className="w-4 h-4 text-[#F4FF4A]" />
                <span className="text-sm font-medium text-white">Commitment</span>
              </div>
              <code className="text-xs text-gray-400 break-all">
                {proofData.publicOutputs?.commitment || 'Calculating...'}
              </code>
            </div>
            <Badge className="bg-[#F4FF4A]/20 text-[#F4FF4A] border-[#F4FF4A]/30">
              Public
            </Badge>
          </div>

          <div className="flex items-start justify-between p-3 rounded-lg bg-[#03051A]/50 border border-[#F4FF4A]/10">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <Eye className="w-4 h-4 text-[#F4FF4A]" />
                <span className="text-sm font-medium text-white">Recipient Hash</span>
              </div>
              <code className="text-xs text-gray-400 break-all">
                {proofData.publicOutputs?.recipientHash || 'Calculating...'}
              </code>
            </div>
            <Badge className="bg-[#F4FF4A]/20 text-[#F4FF4A] border-[#F4FF4A]/30">
              Public
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* Compliance Check Section */}
      {proofData.complianceCheck && (
        <Card className="border-green-500/30 bg-[#05071F]/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-400">
              <Shield className="w-5 h-5" />
              Compliance Verification
            </CardTitle>
            <CardDescription className="text-gray-400">
              Automatic AML compliance check without revealing exact amount
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/30">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-white">AML Threshold</span>
                <span className="text-lg font-bold text-green-400">
                  ${proofData.complianceCheck.amlThreshold?.toLocaleString() || '10,000'} USD
                </span>
              </div>
              <Separator className="bg-green-500/20 my-3" />
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-300">Compliance Status</span>
                {proofData.complianceCheck.passed ? (
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-400" />
                    <span className="text-sm font-medium text-green-400">PASSED</span>
                  </div>
                ) : (
                  <span className="text-sm font-medium text-yellow-400">Checking...</span>
                )}
              </div>
              {proofData.complianceCheck.amountUnderThreshold !== undefined && (
                <div className="mt-3 p-3 rounded bg-green-500/5 border border-green-500/20">
                  <p className="text-xs text-gray-300">
                    <CheckCircle2 className="w-4 h-4 inline mr-1 text-green-400" />
                    Proof mathematically verified:{' '}
                    <span className="font-medium text-green-400">
                      0 &lt; amount &lt; ${proofData.complianceCheck.amlThreshold?.toLocaleString()}
                    </span>
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    ℹ️ The exact amount remains private and is never revealed
                  </p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Proof Status */}
      {proofData.proofGenerated && (
        <div className="p-4 rounded-lg bg-[#F4FF4A]/10 border border-[#F4FF4A]/30">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-6 h-6 text-[#F4FF4A]" />
            <div className="flex-1">
              <p className="text-sm font-medium text-white">
                ZK Proof Generated Successfully
              </p>
              {proofData.locallyVerified && (
                <p className="text-xs text-gray-400 mt-1">
                  ✓ Locally verified before sending to blockchain
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
