import React from 'react'
import { Check, Star, Sparkles, HeartHandshake, Clock, ShieldCheck, ArrowRight } from 'lucide-react'

export default function Services({ onSelectPackage }) {
  const packages = [
    {
      id: 'bridal-party',
      name: 'Bridal Party & Mothers',
      tagline: 'Customized bespoke glam for attendants & honored family',
      price: '$175',
      period: 'per person',
      isPopular: false,
      orderClass: 'order-1 lg:order-3',
      features: [
        'Bridesmaids, Mothers of Bride & Groom, Family Guests',
        'On-Location Travel to Your Bridal Getting-Ready Suite',
        'Skin Consultation Tailored to Skin Tone & Texture',
        'High-End Luxury Products & High-Def Camera Setting',
        'Lashes Included with Every Makeup Application',
        'Timely Schedule Execution keeping you on wedding timeline',
      ],
      idealFor: 'Adding extra bridesmaids, grandmothers, or attendants',
    },
    {
      id: 'bride-only',
      name: 'The Bride Experience',
      tagline: 'Intimate, focused perfection for the woman of the hour',
      price: '$300',
      period: 'flat rate',
      isPopular: false,
      orderClass: 'order-2 lg:order-1',
      features: [
        'Custom In-Depth Bridal Consultation',
        'Bridal Trial Session Included in Studio',
        'Day-of On-Location Travel to Your Venue/Suite',
        'Signature Luxury Skin Prep & Hydration Mask',
        'Custom Lash Application & Lip Retouch Kit',
        'Transfer-Resistant, 16+ Hour HD Waterproof Finish',
      ],
      idealFor: 'Brides getting ready solo or with small intimate parties',
    },
    {
      id: 'bridal-package',
      name: 'Full Signature Bridal Suite',
      tagline: 'Our premier all-inclusive package for bride & 7 loved ones',
      price: '$1,200',
      period: 'all-inclusive party package',
      isPopular: true,
      orderClass: 'order-3 lg:order-2',
      features: [
        'Complete Glam for 8: Bride + MOB + MOG + 5 Bridesmaids',
        'Two Dedicated Lead Artists for relaxed, timely flow',
        'Custom Bridal Consultation & Full Trial for Bride',
        'Luxury Skin Preparation for Every Party Member',
        'Coordinated Cohesive Aesthetic Across All Attendants',
        'Premium Custom Lashes for Entire Party',
        'Touch-Up Essentials Kit for Bride on Wedding Day',
      ],
      idealFor: 'Full bridal parties seeking luxury, synchronized pacing',
    },
  ]

  const specialtyServices = [
    {
      title: 'Quinceañera & Sweet 16 Glam',
      description: 'Sophisticated yet youthful artistry celebrating milestone birthdays with camera-ready glow.',
      highlight: 'Full Day Wear',
    },
    {
      title: 'Personalized Master Classes',
      description: 'One-on-one or group lessons teaching everyday radiance, professional blending, and proper skincare.',
      highlight: 'Cosmetic Chemistry Focused',
    },
    {
      title: 'Reception Touch-Up & Second Look',
      description: 'Artist on standby during photos and ceremony to transition you into a dramatic evening reception glam.',
      highlight: 'VIP Standby',
    },
  ]

  return (
    <section id="services" className="py-24 bg-[#FCFAF8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#DEB3AD]/20 border border-[#DEB3AD]/40">
            <Sparkles className="w-3.5 h-3.5 text-[#BA857E]" />
            <span className="text-xs uppercase tracking-[0.2em] text-[#1E272C] font-sans-ui font-semibold">
              Curated Bridal Packages
            </span>
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1E272C] font-bold">
            Tailored Experiences for Your Wedding Morning
          </h2>
          
          <p className="text-base sm:text-lg text-[#343434]/80 font-body leading-relaxed">
            Every bride deserves a morning filled with joy, calm confidence, and unhurried luxury. 
            All our bridal services combine high-performance skin prep with world-class artistry that photographs seamlessly in natural daylight and romantic candlelight.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-20">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative rounded-2xl transition-all duration-300 flex flex-col justify-between ${pkg.orderClass} ${
                pkg.isPopular
                  ? 'bg-[#1E272C] text-white shadow-2xl scale-100 lg:-translate-y-2 border-2 border-[#DEB3AD]'
                  : 'bg-white text-[#343434] shadow-lg hover:shadow-xl border border-[#DEB3AD]/30'
              }`}
            >
              {pkg.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#DEB3AD] text-[#1E272C] text-xs font-sans-ui font-bold uppercase tracking-widest shadow-md flex items-center gap-1.5">
                  <Star className="w-3 h-3 fill-current" />
                  <span>Most Popular Choice</span>
                </div>
              )}

              <div className="p-8 sm:p-10">
                <p className={`text-xs uppercase tracking-widest font-sans-ui font-semibold ${
                  pkg.isPopular ? 'text-[#DEB3AD]' : 'text-[#BA857E]'
                }`}>
                  {pkg.name}
                </p>
                
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="font-serif text-4xl sm:text-5xl font-bold tracking-tight">
                    {pkg.price}
                  </span>
                  <span className={`text-xs uppercase font-sans-ui tracking-wider ${
                    pkg.isPopular ? 'text-white/60' : 'text-[#343434]/60'
                  }`}>
                    / {pkg.period}
                  </span>
                </div>

                <p className={`mt-3 text-sm font-body italic ${
                  pkg.isPopular ? 'text-white/75' : 'text-[#343434]/75'
                }`}>
                  {pkg.tagline}
                </p>

                <div className="my-8 border-t border-current/10" />

                <ul className="space-y-3.5 font-sans-ui text-sm">
                  {pkg.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className={`mt-0.5 w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${
                        pkg.isPopular ? 'bg-[#DEB3AD] text-[#1E272C]' : 'bg-[#DEB3AD]/25 text-[#1E272C]'
                      }`}>
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span className={pkg.isPopular ? 'text-white/90' : 'text-[#343434]'}>
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-8 pt-0">
                <button
                  type="button"
                  onClick={() => onSelectPackage(pkg.name)}
                  className={`w-full py-4 px-6 rounded-full text-xs uppercase tracking-wider font-semibold transition-all duration-300 flex items-center justify-center gap-2 font-sans-ui ${
                    pkg.isPopular
                      ? 'bg-[#DEB3AD] text-[#1E272C] hover:bg-white hover:text-[#1E272C] shadow-lg shadow-[#DEB3AD]/20'
                      : 'bg-[#1E272C] text-white hover:bg-[#DEB3AD] hover:text-[#1E272C]'
                  }`}
                >
                  <span>Select & Inquire Availability</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Specialty Services */}
        <div className="bg-white rounded-2xl p-8 sm:p-12 border border-[#DEB3AD]/30 shadow-md">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h3 className="font-serif text-2xl sm:text-3xl text-[#1E272C] font-bold">
              Special Event & Masterclass Offerings
            </h3>
            <p className="text-sm text-[#343434]/70 font-sans-ui mt-2">
              Beyond wedding mornings, we bring professional beauty expertise to every stage of life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {specialtyServices.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-[#FCFAF8] border border-[#DEB3AD]/20 hover:border-[#DEB3AD]/50 transition-colors"
              >
                <span className="text-[10px] uppercase tracking-widest font-sans-ui font-bold text-[#BA857E] bg-[#DEB3AD]/20 px-2.5 py-1 rounded-full">
                  {item.highlight}
                </span>
                <h4 className="font-serif text-lg font-bold text-[#1E272C] mt-3">
                  {item.title}
                </h4>
                <p className="text-sm text-[#343434]/80 font-body mt-2 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
