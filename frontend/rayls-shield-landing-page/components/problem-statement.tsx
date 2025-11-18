import { AlertCircle } from 'lucide-react'
import { TriangularDivider } from '@/components/triangular-divider'

const problems = [
  'Total transparency exposes strategies',
  'Lack of regulation-compatible privacy',
  'Front-running risks',
  'Lack of automatic compliance',
]

export function ProblemStatement() {
  return (
    <>
      <TriangularDivider />
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#05071F]">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8 justify-center">
            <AlertCircle className="w-8 h-8 text-[#F4FF4A]" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              The problem: DeFi is not suitable for institutions
            </h2>
          </div>
          
          <div className="space-y-4">
            {problems.map((problem, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 border-l-2 border-[#C7A9FF]/50 bg-[#03051A]/50"
              >
                <div className="w-2 h-2 mt-2 bg-[#C7A9FF] rounded-full flex-shrink-0" />
                <p className="text-lg text-gray-300">{problem}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
