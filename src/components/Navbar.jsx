import React, { useState, useEffect } from 'react'
import { Menu, X, Sparkles, Phone, Calendar } from 'lucide-react'

export default function Navbar({ onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Estimator', href: '#estimator' },
    { name: 'Portfolio', href: '#gallery' },
    { name: 'The Artists', href: '#artists' },
    { name: 'Love Notes', href: '#reviews' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#1E272C]/90 backdrop-blur-md py-3 shadow-lg border-b border-[#DEB3AD]/20'
          : 'bg-gradient-to-b from-[#1E272C]/80 via-[#1E272C]/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-[#DEB3AD]/20 border border-[#DEB3AD]/40 flex items-center justify-center p-1.5 transition-transform duration-300 group-hover:scale-105">
              <img
                src="/assets/images/favicon.png"
                alt="Beauty For Ashes emblem"
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.target.style.display = 'none'
                }}
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-wider text-white group-hover:text-[#DEB3AD] transition-colors">
                Beauty For Ashes
              </span>
              <span className="text-[10px] tracking-[0.25em] uppercase text-[#DEB3AD] font-sans-ui -mt-1">
                Luxury Bridal Artistry
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 font-sans-ui text-sm">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white/85 hover:text-[#DEB3AD] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#DEB3AD] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href="#contact"
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold bg-[#DEB3AD] hover:bg-[#C9968F] text-[#1E272C] transition-all duration-300 transform hover:-translate-y-0.5 shadow-md shadow-[#DEB3AD]/20 font-sans-ui"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Inquire Date</span>
            </a>
          </div>

          {/* Mobile hamburger */}
          <div className="lg:hidden flex items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-white hover:text-[#DEB3AD] hover:bg-white/10 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#1E272C] border-b border-[#DEB3AD]/20 px-6 py-6 space-y-4 shadow-2xl animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col space-y-3 font-sans-ui">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-white/90 hover:text-[#DEB3AD] text-base py-1 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="pt-4 border-t border-white/10">
            <a
              href="#contact"
              onClick={() => {
                setMobileMenuOpen(false)
                if (onOpenBooking) onOpenBooking()
              }}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm uppercase tracking-wider font-semibold bg-[#DEB3AD] text-[#1E272C] transition-all"
            >
              <Calendar className="w-4 h-4" />
              <span>Check Wedding Availability</span>
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
