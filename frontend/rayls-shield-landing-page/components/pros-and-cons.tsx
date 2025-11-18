import { Check, X } from 'lucide-react'

const pros = [
  'Real institutional privacy',
  'Automatic regulatory compliance',
  'Protection against front-running',
  'Institutional-grade infrastructure',
  'Sub-second transactions',
  'On-chain verification without intermediaries',
]

const cons = [
  'Requires whitelist (not permissionless)',
  'Slightly higher gas costs for ZK proofs',
  'Learning curve for integration',
  'Limited to verified participants',
]

export function ProsAndCons() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#03051A] to-[#05071F]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-16 text-center">
          Benefits and Considerations
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Pros */}
          <div className="border-2 border-[#F4FF4A]/30 rounded-lg p-8 bg-[#05071F]">
            <h3 className="text-2xl font-bold text-[#F4FF4A] mb-6 flex items-center gap-2">
              <Check className="w-6 h-6" />
              Benefits
            </h3>
            <ul className="space-y-3">
              {pros.map((pro, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#F4FF4A] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">{pro}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Cons */}
          <div className="border-2 border-[#C7A9FF]/30 rounded-lg p-8 bg-[#05071F]">
            <h3 className="text-2xl font-bold text-[#C7A9FF] mb-6 flex items-center gap-2">
              <X className="w-6 h-6" />
              Considerations
            </h3>
            <ul className="space-y-3">
              {cons.map((con, index) => (
                <li key={index} className="flex items-start gap-3">
                  <X className="w-5 h-5 text-[#C7A9FF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">{con}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
