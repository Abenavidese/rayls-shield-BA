'use client'

import { useState, useEffect } from 'react'

export function Header() {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        setIsVisible(true)
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="bg-[#03051A]/95 backdrop-blur-md border-b border-[#F4FF4A]/10">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <button
              onClick={() => scrollToSection('home')}
              className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            >
              <img 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-VppUk6C0PqXEejmhm4odcKCCDOIUKm.png" 
                alt="RaylsShield Logo"
                className="h-8"
              />
            </button>

            <div className="flex items-center gap-8">
              <button
                onClick={() => scrollToSection('home')}
                className="text-gray-300 hover:text-[#F4FF4A] transition-colors text-sm font-medium"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-300 hover:text-[#F4FF4A] transition-colors text-sm font-medium"
              >
                About Us
              </button>
              <a
                href="/docs"
                className="text-gray-300 hover:text-[#F4FF4A] transition-colors text-sm font-medium"
              >
                Docs
              </a>
              <a
                href="/pool"
                className="bg-[#C7A9FF] text-[#03051A] hover:bg-[#C7A9FF]/90 transition-colors text-sm font-bold px-4 py-2 rounded-md shadow-lg shadow-[#C7A9FF]/25"
              >
                Launch App
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
