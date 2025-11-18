import { Button } from '@/components/ui/button'
import { GeometricMesh } from '@/components/geometric-mesh'
import Link from 'next/dist/client/link'

export function FinalCTA() {
  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-[#05071F] overflow-hidden">
      <GeometricMesh />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-8 text-balance">
          Start using <span className="text-[#F4FF4A]">RaylsShield</span>
        </h2>
        
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto text-pretty">
          Join the institutions that already trust privacy with regulatory compliance
        </p>
        
      <Link href="/dapp">
        <Button 
          size="lg" 
          className="bg-[#F4FF4A] text-[#03051A] hover:bg-[#F4FF4A]/90 font-bold text-xl px-12 py-7 shadow-[0_0_30px_rgba(244,255,74,0.4)] hover:shadow-[0_0_40px_rgba(244,255,74,0.6)] transition-all"
        >
          Launch Dapp
        </Button>
      </Link>
      </div>
    </section>
  )
}
