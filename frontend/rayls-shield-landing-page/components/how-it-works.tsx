import { Wallet, DollarSign, Cpu, FileCheck, ShieldCheck, ArrowRight } from 'lucide-react'

const steps = [
  {
    icon: Wallet,
    title: 'Connect wallet',
    subtitle: '(whitelisted)',
  },
  {
    icon: DollarSign,
    title: 'Enter amount',
    subtitle: '',
  },
  {
    icon: Cpu,
    title: 'Generate ZK Proof',
    subtitle: '(browser)',
  },
  {
    icon: FileCheck,
    title: 'Sign message',
    subtitle: '',
  },
  {
    icon: ShieldCheck,
    title: 'verifyProof()',
    subtitle: 'on-chain',
  },
  {
    icon: ShieldCheck,
    title: 'Private settlement',
    subtitle: '',
  },
]

export function HowItWorks() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#03051A]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-16 text-center">
          How it works
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="relative">
                <div className="w-20 h-20 border-2 border-[#F4FF4A] rounded-lg flex items-center justify-center bg-[#05071F] mb-4 hover:bg-[#F4FF4A]/10 transition-all duration-300">
                  <step.icon className="w-8 h-8 text-[#F4FF4A]" />
                </div>
                
                {index < steps.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute top-1/2 -right-8 -translate-y-1/2 w-6 h-6 text-[#C7A9FF]" />
                )}
              </div>
              
              <h3 className="text-sm font-bold text-white text-center mb-1">
                {step.title}
              </h3>
              {step.subtitle && (
                <p className="text-xs text-[#C7A9FF] text-center">
                  {step.subtitle}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
