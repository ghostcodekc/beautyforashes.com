import React from 'react'
import { Sparkles, Calendar, Heart, ShieldCheck, ArrowRight } from 'lucide-react'

export default function Hero({ onOpenBooking }) {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 lg:pt-36 lg:pb-24 bg-[#1E272C] overflow-hidden text-white">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#DEB3AD]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-32 w-[30rem] h-[30rem] bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Subtle geometric lines */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#DEB3AD_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & Copy */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-[#DEB3AD]/30 backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#DEB3AD]" />
              <span className="text-xs uppercase tracking-[0.2em] text-[#DEB3AD] font-sans-ui font-medium">
                Premier Bridal Makeup Artistry
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-[68px] leading-[1.12] tracking-tight text-white">
              Embrace Your Natural{' '}
              <span className="font-script text-[#DEB3AD] block sm:inline font-normal text-5xl sm:text-6xl lg:text-7xl">
                Radiance
              </span>{' '}
              on Your Most Unforgettable Day
            </h1>

            <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto lg:mx-0 font-body leading-relaxed">
              Founded by industry veterans <span className="text-[#DEB3AD] font-semibold">Jesi Dang-Machuca</span> and <span className="text-[#DEB3AD] font-semibold">Rochelle Rodriquez</span>, 
              Beauty For Ashes delivers bespoke on-location makeup artistry that accentuates your authentic features and endures through every tear, hug, and first dance.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 font-sans-ui">
              <a
                href="#contact"
                onClick={onOpenBooking}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-sm uppercase tracking-wider font-semibold bg-[#DEB3AD] hover:bg-[#C9968F] text-[#1E272C] transition-all duration-300 transform hover:-translate-y-0.5 shadow-xl shadow-[#DEB3AD]/25"
              >
                <Calendar className="w-4 h-4" />
                <span>Reserve Your Wedding Date</span>
              </a>

              <a
                href="#estimator"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-sm uppercase tracking-wider font-medium text-white/90 hover:text-white bg-white/5 hover:bg-white/10 border border-white/20 transition-all duration-300"
              >
                <span>Estimate Bridal Investment</span>
                <ArrowRight className="w-4 h-4 text-[#DEB3AD]" />
              </a>
            </div>

            {/* Trust points */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-4 text-center sm:text-left">
              <div>
                <p className="font-serif text-2xl sm:text-3xl font-bold text-[#DEB3AD]">10+ Yrs</p>
                <p className="text-xs uppercase tracking-wider text-white/60 font-sans-ui">Bridal Artistry</p>
              </div>
              <div>
                <p className="font-serif text-2xl sm:text-3xl font-bold text-[#DEB3AD]">500+</p>
                <p className="text-xs uppercase tracking-wider text-white/60 font-sans-ui">Happy Brides</p>
              </div>
              <div>
                <p className="font-serif text-2xl sm:text-3xl font-bold text-[#DEB3AD]">100%</p>
                <p className="text-xs uppercase tracking-wider text-white/60 font-sans-ui">On-Location</p>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Showcase Image with Luxury Accents */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative Frame Border */}
              <div className="absolute -inset-3 rounded-2xl border border-[#DEB3AD]/30 -rotate-2 pointer-events-none" />

              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-[#161D21] group">
                <img
                  src="/assets/images/hero/hero.webp"
                  alt="Radiant bride makeup look by Beauty For Ashes"
                  className="w-full h-auto object-cover max-h-[520px] transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    // Fallback to gallery-1 if hero path issues occur
                    e.target.src = '/assets/images/gallery/gallery-1.webp'
                  }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#1E272C] via-transparent to-transparent opacity-60" />

                {/* Floating pill: Signature Style */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-[#1E272C]/85 backdrop-blur-md border border-[#DEB3AD]/30 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#DEB3AD]/20 flex items-center justify-center text-[#DEB3AD] shrink-0">
                      <Heart className="w-5 h-5 fill-current" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white font-serif">Timeless, Radiant & Tear-Proof</p>
                      <p className="text-xs text-[#DEB3AD] font-sans-ui">Luxury luxury formulas for HD photography</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Artist Badge */}
              <div className="hidden sm:flex absolute -top-5 -right-5 items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#1E272C] border border-[#DEB3AD]/50 shadow-xl backdrop-blur-md animate-float-slow">
                <ShieldCheck className="w-4 h-4 text-[#DEB3AD]" />
                <span className="text-xs font-sans-ui text-white font-medium">Licensed & Certified Artistry</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
