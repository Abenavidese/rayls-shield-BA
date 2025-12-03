import { AlertCircle, TrendingDown, Shield, Zap, FileX } from 'lucide-react'
import { TriangularDivider } from '@/components/triangular-divider'

const problems = [
  {
    icon: TrendingDown,
    title: 'Total transparency exposes strategies',
    description: 'Every transaction is visible, allowing competitors to copy trading strategies and front-run positions'
  },
  {
    icon: FileX,
    title: 'Lack of regulation-compatible privacy',
    description: 'No way to prove compliance while maintaining transaction privacy for institutional requirements'
  },
  {
    icon: Zap,
    title: 'Front-running risks',
    description: 'Public mempools expose transaction intents, leading to MEV exploitation and value extraction'
  },
  {
    icon: Shield,
    title: 'Lack of automatic compliance',
    description: 'No built-in mechanisms to verify regulatory requirements without manual audits'
  },
]

export function ProblemStatement() {
  return (
    <>
      <TriangularDivider />
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#05071F] relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-64 h-64 border border-[#F4FF4A] rotate-45" />
          <div className="absolute bottom-20 right-10 w-96 h-96 border border-[#C7A9FF] rotate-12" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 rounded-full bg-destructive/10 border border-destructive/20">
              <AlertCircle className="w-6 h-6 text-destructive" />
              <span className="text-destructive font-semibold text-lg">The Challenge</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              DeFi is not suitable for institutions
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Traditional DeFi lacks the privacy and compliance features required by institutional players
            </p>
          </div>
          
          {/* Problems Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {problems.map((problem, index) => (
              <div
                key={index}
                className="group relative p-6 rounded-lg bg-gradient-to-br from-[#03051A] to-[#05071F] border border-[#C7A9FF]/20 hover:border-[#C7A9FF]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#C7A9FF]/10"
              >
                {/* Icon */}
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-[#C7A9FF]/10 group-hover:bg-[#C7A9FF]/20 transition-colors">
                  <problem.icon className="w-6 h-6 text-[#C7A9FF]" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#C7A9FF] transition-colors">
                  {problem.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {problem.description}
                </p>

                {/* Corner decoration */}
                <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-[#C7A9FF]/20 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
