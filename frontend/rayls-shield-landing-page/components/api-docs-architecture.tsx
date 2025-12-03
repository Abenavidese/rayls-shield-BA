import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { AlertCircle } from 'lucide-react'

export function ArchitectureDiagrams() {
  return (
    <div className="space-y-8">
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
          <div className="bg-gradient-to-r from-green-500/20 to-green-700/20 rounded-lg p-4 border border-green-500/40 mt-6">
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
            {/* Steps 1-8 continue similarly... */}
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
    </div>
  )
}
