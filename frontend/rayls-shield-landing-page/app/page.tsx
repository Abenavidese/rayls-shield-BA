import { Header } from '@/components/header'
import { HeroSection } from '@/components/hero-section'
import { ValueProposition } from '@/components/value-proposition'
import { ProblemStatement } from '@/components/problem-statement'
import { Solution } from '@/components/solution'
import { HowItWorks } from '@/components/how-it-works'
import { ProsAndCons } from '@/components/pros-and-cons'
import { AboutSection } from '@/components/about-section'
import { DocumentationSection } from '@/components/documentation-section'
import { FinalCTA } from '@/components/final-cta'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#03051A]">
        <div id="home">
          <HeroSection />
          <ValueProposition />
          <ProblemStatement />
          <Solution />
          <HowItWorks />
          <ProsAndCons />
        </div>
        <AboutSection />
        <DocumentationSection />
        <FinalCTA />
        <Footer />
      </main>
    </>
  )
}
