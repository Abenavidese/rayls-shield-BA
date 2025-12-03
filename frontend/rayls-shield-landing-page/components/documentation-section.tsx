import { BookOpen, Code, FileText, Terminal } from 'lucide-react'
import Link from 'next/link'

export function DocumentationSection() {
  return (
    <section id="documentation" className="relative py-32 px-6 bg-[#0A0F2C]/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="text-[#F4FF4A]">Documentation</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Everything you need to integrate RaylsShield into your blockchain infrastructure.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Link href="/docs">
            <div className="relative group cursor-pointer">
              <div className="absolute inset-0 bg-[#F4FF4A]/5 rounded-lg blur-xl group-hover:bg-[#F4FF4A]/10 transition-all" />
              <div className="relative bg-[#03051A] border border-[#F4FF4A]/20 rounded-lg p-8 hover:border-[#F4FF4A]/40 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#F4FF4A]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-6 h-6 text-[#F4FF4A]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">Getting Started</h3>
                    <p className="text-gray-400 leading-relaxed mb-4">
                      Quick start guide to integrate RaylsShield protection into your blockchain 
                      network in minutes. Step-by-step tutorials for all major platforms.
                    </p>
                    <span className="text-[#F4FF4A] text-sm font-medium">Read Guide →</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          <Link href="/api-docs">
            <div className="relative group cursor-pointer">
              <div className="absolute inset-0 bg-[#F4FF4A]/5 rounded-lg blur-xl group-hover:bg-[#F4FF4A]/10 transition-all" />
              <div className="relative bg-[#03051A] border border-[#F4FF4A]/20 rounded-lg p-8 hover:border-[#F4FF4A]/40 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#F4FF4A]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Code className="w-6 h-6 text-[#F4FF4A]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">API Reference</h3>
                    <p className="text-gray-400 leading-relaxed mb-4">
                      Complete API documentation with code examples in multiple languages. 
                      Smart contract ABIs and JavaScript SDK integration.
                    </p>
                    <span className="text-[#F4FF4A] text-sm font-medium">View API Docs →</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          <Link href="/pool">
            <div className="relative group cursor-pointer">
              <div className="absolute inset-0 bg-[#F4FF4A]/5 rounded-lg blur-xl group-hover:bg-[#F4FF4A]/10 transition-all" />
              <div className="relative bg-[#03051A] border border-[#F4FF4A]/20 rounded-lg p-8 hover:border-[#F4FF4A]/40 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#F4FF4A]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Terminal className="w-6 h-6 text-[#F4FF4A]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">Live Demo</h3>
                    <p className="text-gray-400 leading-relaxed mb-4">
                      Try RaylsShield on Rayls Devnet. Create private payment links and 
                      test zero-knowledge proof generation in your browser.
                    </p>
                    <span className="text-[#F4FF4A] text-sm font-medium">Launch App →</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          <a href="https://github.com/Abenavidese/rayls-shield-BA" target="_blank" rel="noopener noreferrer">
            <div className="relative group cursor-pointer">
              <div className="absolute inset-0 bg-[#F4FF4A]/5 rounded-lg blur-xl group-hover:bg-[#F4FF4A]/10 transition-all" />
              <div className="relative bg-[#03051A] border border-[#F4FF4A]/20 rounded-lg p-8 hover:border-[#F4FF4A]/40 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#F4FF4A]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 text-[#F4FF4A]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">GitHub Repository</h3>
                    <p className="text-gray-400 leading-relaxed mb-4">
                      Full source code, smart contracts, and circuits. Open-source implementation 
                      with examples and comprehensive tests.
                    </p>
                    <span className="text-[#F4FF4A] text-sm font-medium">View on GitHub →</span>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
