import React from 'react'
import { Heart, Mail, Phone, MapPin, ArrowUp } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#12181B] text-white border-t border-[#DEB3AD]/20 pt-16 pb-12 font-sans-ui relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-14 border-b border-white/10">
          
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#DEB3AD]/20 border border-[#DEB3AD]/40 flex items-center justify-center p-1.5">
                <img
                  src="/assets/images/favicon.png"
                  alt="Beauty For Ashes emblem"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none'
                  }}
                />
              </div>
              <div>
                <span className="font-serif text-2xl font-bold tracking-wider text-white">
                  Beauty For Ashes
                </span>
                <p className="text-[10px] tracking-[0.25em] uppercase text-[#DEB3AD]">
                  Luxury Bridal Makeup Artistry
                </p>
              </div>
            </div>

            <p className="text-white/70 font-body text-base max-w-md leading-relaxed italic">
              "To bestow on them a crown of beauty instead of ashes, the oil of joy instead of mourning, and a garment of praise instead of a spirit of despair."
            </p>

            <p className="text-white/60 text-xs font-sans-ui">
              Founded by Jesi Dang-Machuca & Rochelle Rodriquez · Dedicated to celebrating your authentic radiance.
            </p>
          </div>

          {/* Quick Nav */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif text-base font-semibold text-white tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs uppercase tracking-wider text-white/70">
              <li>
                <a href="#services" className="hover:text-[#DEB3AD] transition-colors">
                  Bridal Packages
                </a>
              </li>
              <li>
                <a href="#estimator" className="hover:text-[#DEB3AD] transition-colors">
                  Party Estimator
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#DEB3AD] transition-colors">
                  Bridal Portfolio
                </a>
              </li>
              <li>
                <a href="#artists" className="hover:text-[#DEB3AD] transition-colors">
                  The Artists
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#DEB3AD] transition-colors">
                  Reviews & Love
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#DEB3AD] transition-colors">
                  Bridal FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Offerings */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif text-base font-semibold text-white tracking-wider">
              Experiences
            </h4>
            <ul className="space-y-2.5 text-xs uppercase tracking-wider text-white/70">
              <li>
                <span className="hover:text-[#DEB3AD] cursor-pointer">
                  Bride Only ($300)
                </span>
              </li>
              <li>
                <span className="hover:text-[#DEB3AD] cursor-pointer">
                  Signature Suite ($1,200)
                </span>
              </li>
              <li>
                <span className="hover:text-[#DEB3AD] cursor-pointer">
                  Bridal Party Glam ($175)
                </span>
              </li>
              <li>
                <span className="hover:text-[#DEB3AD] cursor-pointer">
                  Quinceañera & Prom
                </span>
              </li>
              <li>
                <span className="hover:text-[#DEB3AD] cursor-pointer">
                  Master Classes
                </span>
              </li>
            </ul>
          </div>

          {/* Contact / Service Areas */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-base font-semibold text-white tracking-wider">
              Studio & Booking
            </h4>
            <div className="space-y-2.5 text-xs text-white/70">
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#DEB3AD] shrink-0" />
                <span>Kansas City, MO & Surrounding Midwest</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#DEB3AD] shrink-0" />
                <a href="mailto:andrewmgrube@gmail.com" className="hover:text-[#DEB3AD]">
                  andrewmgrube@gmail.com
                </a>
              </p>
              <p className="pt-2 text-white/50 text-[11px] leading-relaxed">
                On-location wedding morning arrival across all regional venues and private residences.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Beauty For Ashes. All rights reserved.</p>
          
          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-white/70 hover:text-[#DEB3AD] transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  )
}
