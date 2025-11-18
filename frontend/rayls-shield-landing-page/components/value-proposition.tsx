import { Shield, CheckCircle, Building, Zap } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Privacy without anonymity',
    description: 'Protection of sensitive data while maintaining verifiable identity for regulatory compliance.',
  },
  {
    icon: CheckCircle,
    title: 'Automatic compliance',
    description: 'On-chain verification through ZK proofs that guarantee compliance without revealing information.',
  },
  {
    icon: Building,
    title: 'Institutional infrastructure',
    description: 'Designed specifically for financial institutions with advanced security requirements.',
  },
  {
    icon: Zap,
    title: 'Sub-second finality',
    description: 'Private transactions with institutional speed thanks to Rayls optimized infrastructure.',
  },
]

export function ValueProposition() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#03051A] to-[#05071F]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-[#05071F] border border-[#F4FF4A]/20 rounded-lg p-6 hover:border-[#F4FF4A] transition-all duration-300 hover:shadow-[0_0_20px_rgba(244,255,74,0.15)]"
            >
              <div className="absolute inset-0 bg-[#F4FF4A]/0 group-hover:bg-[#F4FF4A]/5 rounded-lg transition-all duration-300" />
              
              <div className="relative">
                <div className="mb-4 inline-flex p-3 rounded-lg bg-[#F4FF4A]/10 border border-[#F4FF4A]/30">
                  <feature.icon className="w-6 h-6 text-[#F4FF4A]" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
