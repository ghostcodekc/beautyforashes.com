import React from 'react'
import { Sparkles, FlaskConical, Palette, CheckCircle, Heart, Globe, Award } from 'lucide-react'

export default function MeetArtists() {
  return (
    <section id="artists" className="py-24 bg-[#1E272C] text-white relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-[#DEB3AD]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-32 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-[#DEB3AD]/30">
            <Sparkles className="w-3.5 h-3.5 text-[#DEB3AD]" />
            <span className="text-xs uppercase tracking-[0.2em] text-[#DEB3AD] font-sans-ui font-medium">
              The Visionaries Behind Beauty For Ashes
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-bold">
            Meet Your Bridal Artists
          </h2>

          <p className="text-base sm:text-lg text-white/80 font-body leading-relaxed">
            At Beauty for Ashes, we believe beauty is an intimate, deeply personal journey. 
            Founded by <span className="text-[#DEB3AD] font-semibold">Jesi Dang-Machuca</span> and <span className="text-[#DEB3AD] font-semibold">Rochelle Rodriquez</span>, 
            our artistry unites scientific cosmetic understanding with runway-level precision so you feel completely like yourself—only unforgettable.
          </p>
        </div>

        {/* Team Banner Showcase */}
        <div className="mb-20 rounded-2xl overflow-hidden bg-[#253036] border border-[#DEB3AD]/25 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="lg:col-span-5 relative h-72 sm:h-96 lg:h-full min-h-[360px]">
              <img
                src="/assets/images/about/team.webp"
                alt="Jesi Dang-Machuca and Rochelle Rodriquez, Founders of Beauty For Ashes"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#253036] via-transparent to-transparent lg:hidden" />
            </div>

            <div className="lg:col-span-7 p-8 sm:p-12 lg:p-14 space-y-6">
              <span className="font-script text-[#DEB3AD] text-3xl sm:text-4xl">Our Mission & Promise</span>
              <h3 className="font-serif text-2xl sm:text-3xl text-white font-bold leading-snug">
                "Beauty for Ashes is built on the belief that makeup should never mask—it should celebrate and elevate."
              </h3>
              <p className="text-white/80 font-body text-base sm:text-lg leading-relaxed">
                Whether you envision understated romantic dewy skin, sculpted classic Hollywood bridal glam, or a vibrant coordinated look for your 10 bridesmaids, 
                we combine a decade of chemistry-backed formulation safety with genuine joy to ensure your wedding morning is calm, pampering, and unforgettable.
              </p>
              
              <div className="pt-2 flex flex-wrap gap-4 text-xs font-sans-ui text-white/90">
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                  <CheckCircle className="w-3.5 h-3.5 text-[#DEB3AD]" /> Inclusive of all skin tones & textures
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                  <CheckCircle className="w-3.5 h-3.5 text-[#DEB3AD]" /> On-location Midwest & destination
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                  <CheckCircle className="w-3.5 h-3.5 text-[#DEB3AD]" /> Custom skin prep regimens
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Individual Artist Bios */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* Jesi Dang-Machuca */}
          <div className="bg-[#253036] rounded-2xl overflow-hidden border border-white/10 hover:border-[#DEB3AD]/40 transition-all duration-300 shadow-xl flex flex-col justify-between">
            <div>
              <div className="h-80 sm:h-96 w-full overflow-hidden relative">
                <img
                  src="/assets/images/about/jesi_profile.webp"
                  alt="Jesi Dang-Machuca, Co-Founder & Lead Artist"
                  className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#1E272C]/80 backdrop-blur-md border border-[#DEB3AD]/40 text-xs font-sans-ui text-[#DEB3AD] flex items-center gap-1.5">
                  <FlaskConical className="w-3.5 h-3.5" />
                  <span>Chemistry & Formulation Expert</span>
                </div>
              </div>

              <div className="p-8 space-y-4">
                <div className="border-b border-white/10 pb-4">
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                    Jesi Dang-Machuca
                  </h3>
                  <p className="text-xs uppercase tracking-widest font-sans-ui text-[#DEB3AD] mt-1">
                    Co-Founder · Lead Bridal Artist · Product Specialist
                  </p>
                </div>

                <p className="text-white/80 font-body text-base leading-relaxed">
                  Jesi brings over a decade of excellence in the beauty industry, grounded in a formal background in chemistry. 
                  Her deep understanding of skincare ingredients, pH balance, and cosmetic formulation ensures that the products touching your skin are safe, hypoallergenic, and proven to withstand the physical and environmental demands of a wedding day.
                </p>

                <p className="text-white/80 font-body text-base leading-relaxed">
                  Having collaborated directly with iconic prestige houses including <strong>Chanel, NARS, Elizabeth Arden, IT Cosmetics</strong>, and <strong>First Aid Beauty</strong>, 
                  Jesi has specialized in bridal beauty since 2015. She is passionate about empowering brides across all ethnicities and skin types to feel deeply confident.
                </p>
              </div>
            </div>

            <div className="p-8 pt-0">
              <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-2">
                <p className="text-xs font-sans-ui font-semibold text-[#DEB3AD] uppercase tracking-wider">
                  Specialties:
                </p>
                <div className="flex flex-wrap gap-2 text-xs font-sans-ui text-white/70">
                  <span className="px-2.5 py-1 rounded bg-[#1E272C]">Bridal Skin Barrier Prep</span>
                  <span className="px-2.5 py-1 rounded bg-[#1E272C]">HD Waterproof Longevity</span>
                  <span className="px-2.5 py-1 rounded bg-[#1E272C]">Sensitive & Reactive Skin</span>
                  <span className="px-2.5 py-1 rounded bg-[#1E272C]">Master Classes</span>
                </div>
              </div>
            </div>
          </div>

          {/* Rochelle Rodriquez */}
          <div className="bg-[#253036] rounded-2xl overflow-hidden border border-white/10 hover:border-[#DEB3AD]/40 transition-all duration-300 shadow-xl flex flex-col justify-between">
            <div>
              <div className="h-80 sm:h-96 w-full overflow-hidden relative">
                <img
                  src="/assets/images/about/rochelle_profile.webp"
                  alt="Rochelle Rodriquez, Co-Founder & Lead Artist"
                  className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#1E272C]/80 backdrop-blur-md border border-[#DEB3AD]/40 text-xs font-sans-ui text-[#DEB3AD] flex items-center gap-1.5">
                  <Palette className="w-3.5 h-3.5" />
                  <span>Editorial & Bridal Artistry</span>
                </div>
              </div>

              <div className="p-8 space-y-4">
                <div className="border-b border-white/10 pb-4">
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                    Rochelle Rodriquez
                  </h3>
                  <p className="text-xs uppercase tracking-widest font-sans-ui text-[#DEB3AD] mt-1">
                    Co-Founder · Lead Bridal Artist · Educator
                  </p>
                </div>

                <p className="text-white/80 font-body text-base leading-relaxed">
                  Based in Kansas City, Rochelle Rodriquez is an acclaimed creative makeup artist with prestigious artistry credentials with top beauty brands 
                  such as <strong>NARS, Anastasia Beverly Hills</strong>, and <strong>Too Faced Cosmetics</strong>. 
                  She is renowned for her innate artistic eye and ability to translate each client's dream vision into seamless, breathable reality.
                </p>

                <p className="text-white/80 font-body text-base leading-relaxed">
                  Her warm presence, bilingual fluency (English/Spanish), and genuine care create an effortless, joyful environment on what can otherwise be a hectic morning. 
                  Rochelle consistently holds a perfect 100% Brand Partner Survey satisfaction rating from clients and beauty peers alike.
                </p>
              </div>
            </div>

            <div className="p-8 pt-0">
              <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-2">
                <p className="text-xs font-sans-ui font-semibold text-[#DEB3AD] uppercase tracking-wider">
                  Specialties:
                </p>
                <div className="flex flex-wrap gap-2 text-xs font-sans-ui text-white/70">
                  <span className="px-2.5 py-1 rounded bg-[#1E272C]">Signature Brow Architecture</span>
                  <span className="px-2.5 py-1 rounded bg-[#1E272C]">Candlelight Radiance</span>
                  <span className="px-2.5 py-1 rounded bg-[#1E272C]">Bilingual Bridal Consults</span>
                  <span className="px-2.5 py-1 rounded bg-[#1E272C]">Full Bridal Party Sync</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
