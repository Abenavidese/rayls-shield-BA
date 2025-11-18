import { CrystalObelisk } from '@/components/crystal-obelisk'

const features = [
  {
    title: 'Shielded transfers',
    description: 'Private transfers that hide amounts and participants',
  },
  {
    title: 'ZK compliance proofs',
    description: 'Cryptographic verification without revealing sensitive data',
  },
  {
    title: 'Institutional whitelist',
    description: 'Only verified participants can operate',
  },
  {
    title: 'On-chain verification',
    description: 'All compliance happens on-chain transparently',
  },
]

export function Solution() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#05071F] to-[#03051A]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-16 text-center">
          Solution: <span className="text-[#F4FF4A]">RaylsShield</span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <CrystalObelisk />
          </div>
          
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="border border-[#F4FF4A]/20 rounded-lg p-6 bg-[#05071F]/50 hover:border-[#F4FF4A]/50 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-[#F4FF4A] mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
