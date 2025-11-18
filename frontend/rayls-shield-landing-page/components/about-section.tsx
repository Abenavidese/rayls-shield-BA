import { Shield, Users, Target } from 'lucide-react'

export function AboutSection() {
  return (
    <section id="about" className="relative py-32 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="text-[#F4FF4A]">RaylsShield</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            We're pioneering the future of blockchain security with innovative solutions 
            that protect digital assets while maintaining transparency and decentralization.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="relative group">
            <div className="absolute inset-0 bg-[#F4FF4A]/5 rounded-lg blur-xl group-hover:bg-[#F4FF4A]/10 transition-all" />
            <div className="relative bg-[#0A0F2C] border border-[#F4FF4A]/20 rounded-lg p-8 hover:border-[#F4FF4A]/40 transition-colors">
              <div className="w-14 h-14 bg-[#F4FF4A]/10 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-[#F4FF4A]" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-gray-400 leading-relaxed">
                To provide enterprise-grade security solutions for blockchain networks, 
                ensuring every transaction is protected without compromising decentralization.
              </p>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-[#F4FF4A]/5 rounded-lg blur-xl group-hover:bg-[#F4FF4A]/10 transition-all" />
            <div className="relative bg-[#0A0F2C] border border-[#F4FF4A]/20 rounded-lg p-8 hover:border-[#F4FF4A]/40 transition-colors">
              <div className="w-14 h-14 bg-[#F4FF4A]/10 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-[#F4FF4A]" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Team</h3>
              <p className="text-gray-400 leading-relaxed">
                Led by blockchain veterans and security experts with decades of combined 
                experience in cryptography, distributed systems, and financial technology.
              </p>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-[#F4FF4A]/5 rounded-lg blur-xl group-hover:bg-[#F4FF4A]/10 transition-all" />
            <div className="relative bg-[#0A0F2C] border border-[#F4FF4A]/20 rounded-lg p-8 hover:border-[#F4FF4A]/40 transition-colors">
              <div className="w-14 h-14 bg-[#F4FF4A]/10 rounded-lg flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-[#F4FF4A]" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-gray-400 leading-relaxed">
                A future where blockchain technology is secure, scalable, and accessible 
                to everyone, powering the next generation of decentralized applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
