import { Wallet, DollarSign, Cpu, FileCheck, ShieldCheck, ArrowRight, Link as LinkIcon } from 'lucide-react'

const paymentLinkSteps = [
  {
    icon: Wallet,
    title: 'Connect & Deposit',
    subtitle: 'USDgas to pool',
    description: 'Connect your wallet and deposit funds to the privacy pool'
  },
  {
    icon: LinkIcon,
    title: 'Get Magic Link',
    subtitle: 'secure payment URL',
    description: 'Receive an encrypted payment link with ZK proof credentials'
  },
  {
    icon: ShieldCheck,
    title: 'Share Privately',
    subtitle: 'WhatsApp, email, etc',
    description: 'Send the link through any messaging platform securely'
  },
  {
    icon: FileCheck,
    title: 'Recipient Claims',
    subtitle: 'with ZK proof',
    description: 'Recipient verifies and claims funds with zero-knowledge proof'
  },
]

export function HowItWorks() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#03051A]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            How it works
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Send private payments with shareable magic links powered by zero-knowledge proofs
          </p>
        </div>
        
        {/* Payment Links Flow */}
        <div className="relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-10 left-0 right-0 h-0.5 bg-gradient-to-r from-[#C7A9FF] via-[#F4FF4A] to-[#C7A9FF]" style={{ top: '40px' }} />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {paymentLinkSteps.map((step, index) => (
              <div key={index} className="relative flex flex-col items-center">
                {/* Step number badge */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#C7A9FF] text-[#03051A] font-bold flex items-center justify-center text-lg z-10 shadow-lg shadow-[#C7A9FF]/50">
                  {index + 1}
                </div>

                {/* Icon container */}
                <div className="relative mt-6 mb-6">
                  <div className="w-24 h-24 border-2 border-[#C7A9FF] rounded-lg flex items-center justify-center bg-[#05071F] hover:bg-[#C7A9FF]/10 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#C7A9FF]/30">
                    <step.icon className="w-10 h-10 text-[#C7A9FF]" />
                  </div>
                  
                  {/* Arrow for desktop */}
                  {index < paymentLinkSteps.length - 1 && (
                    <ArrowRight className="hidden lg:block absolute top-1/2 -right-10 xl:-right-12 -translate-y-1/2 w-8 h-8 text-[#F4FF4A]" />
                  )}
                </div>
                
                {/* Content */}
                <div className="text-center space-y-2">
                  <h3 className="text-lg font-bold text-white">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#C7A9FF] font-medium">
                    {step.subtitle}
                  </p>
                  <p className="text-sm text-gray-400 max-w-[200px] mx-auto">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional info */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#C7A9FF]/10 border border-[#C7A9FF]/30">
            <ShieldCheck className="w-5 h-5 text-[#C7A9FF]" />
            <span className="text-white font-semibold">100% Private</span>
            <span className="text-gray-400">•</span>
            <span className="text-gray-400">Zero-Knowledge Proofs</span>
            <span className="text-gray-400">•</span>
            <span className="text-white font-semibold">No On-Chain Traces</span>
          </div>
        </div>
      </div>
    </section>
  )
}
