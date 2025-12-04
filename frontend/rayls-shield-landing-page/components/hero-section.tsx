import { Button } from '@/components/ui/button'
import { GeometricBackground } from '@/components/geometric-background'
import Link from 'next/dist/client/link'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
      <GeometricBackground />
      
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <div className="mb-12 flex justify-center">
          <img 
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ds-yTJ1Cs24noICK62b6xx9O8Ok19WaXc.png"
            alt="RaylsShield"
            className="w-64 h-64 md:w-80 md:h-80 object-contain mx-auto mr-27"
          />
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight text-balance">
          Institutional Privacy for
          <br />
          <span className="text-[#F4FF4A]">Rayls Transactions</span>
        </h1>
        
        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto text-pretty">
          Private transactions with regulatory compliance using Zero-Knowledge Proofs.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
      <Link href="/pool">
        <Button 
          size="lg" 
          className="bg-[#C7A9FF] text-[#03051A] hover:bg-[#C7A9FF]/90 font-bold text-xl px-12 py-7 shadow-[0_0_30px_rgba(199,169,255,0.4)] hover:shadow-[0_0_40px_rgba(199,169,255,0.6)] transition-all"
        >
          Launch App
        </Button>
      </Link>
      <Link href="/docs">
        <Button 
          size="lg" 
          variant="outline"
          className="border-[#F4FF4A] text-[#F4FF4A] hover:bg-[#F4FF4A]/10 font-bold text-lg px-8 py-6"
        >
          View Documentation
        </Button>
      </Link>
        </div>
      </div>
    </section>
  )
}
