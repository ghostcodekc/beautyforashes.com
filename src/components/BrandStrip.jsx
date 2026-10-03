import React from 'react'
import { Sparkles, Award } from 'lucide-react'

export default function BrandStrip() {
  const brands = [
    { name: 'CHANEL', note: 'Luxury High-Fashion Artistry' },
    { name: 'NARS', note: 'Editorial Complexion Mastery' },
    { name: 'ANASTASIA BEVERLY HILLS', note: 'Architectural Brow & Glow' },
    { name: 'TOO FACED', note: 'Flawless Camera-Ready Glam' },
    { name: 'ELIZABETH ARDEN', note: 'Timeless Elegant Beauty' },
    { name: 'IT COSMETICS', note: 'Clinical Skin-First Formulations' },
  ]

  return (
    <div className="bg-[#161D21] border-y border-[#DEB3AD]/20 py-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-5">
          <p className="text-xs uppercase tracking-[0.25em] text-[#DEB3AD] font-sans-ui font-medium flex items-center justify-center gap-2">
            <Award className="w-3.5 h-3.5" />
            <span>Trained with & Endorsed by World-Renowned Beauty Houses</span>
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center justify-center">
          {brands.map((b) => (
            <div
              key={b.name}
              className="text-center p-3 rounded-lg bg-white/[0.02] border border-white/5 hover:border-[#DEB3AD]/40 transition-all duration-300 group"
            >
              <p className="font-serif text-sm md:text-base font-semibold tracking-wider text-white/90 group-hover:text-[#DEB3AD] transition-colors">
                {b.name}
              </p>
              <p className="text-[10px] text-white/50 tracking-wider font-sans-ui mt-0.5 group-hover:text-white/80 transition-colors">
                {b.note}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
