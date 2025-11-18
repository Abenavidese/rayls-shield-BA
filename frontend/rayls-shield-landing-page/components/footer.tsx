import { RaylsShieldLogo } from '@/components/rayls-shield-logo'
import { Github, FileText, Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-[#F4FF4A]/20 bg-[#03051A] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4">
            <RaylsShieldLogo size="small" />
            <span className="text-white font-bold text-xl">RaylsShield</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            <a href="#" className="flex items-center gap-2 text-gray-400 hover:text-[#F4FF4A] transition-colors">
              <FileText className="w-4 h-4" />
              Docs
            </a>
            <a href="#" className="flex items-center gap-2 text-gray-400 hover:text-[#F4FF4A] transition-colors">
              <Github className="w-4 h-4" />
              GitHub
            </a>
            <a href="#" className="flex items-center gap-2 text-gray-400 hover:text-[#F4FF4A] transition-colors">
              <Mail className="w-4 h-4" />
              Contact
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-[#F4FF4A]/10 text-center text-sm text-gray-500">
          © 2025 RaylsShield. Institutional privacy for the future of DeFi.
        </div>
      </div>
    </footer>
  )
}
