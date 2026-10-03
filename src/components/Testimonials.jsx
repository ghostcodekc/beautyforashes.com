import React from 'react'
import { Star, Sparkles, Quote, Heart } from 'lucide-react'

export default function Testimonials() {
  const reviews = [
    {
      id: 1,
      name: 'Lauren & Michael',
      role: 'Bride',
      venue: 'The Grand Hall, Kansas City',
      stars: 5,
      quote:
        'Jesi and Rochelle were the calm in the center of my wedding morning! My makeup survived happy tears during the ceremony, 90-degree outdoor photography, and nonstop dancing until 1 AM. I have never felt more radiant or more like myself.',
      look: 'Timeless Romantic Bridal Glam',
    },
    {
      id: 2,
      name: 'Samantha K.',
      role: 'Bride',
      venue: 'The Abbott KC',
      stars: 5,
      quote:
        'Finding an artist who understood both my sensitive acne-prone skin and my dream aesthetic felt impossible until I met Jesi. Her chemistry background gave me so much peace of mind. Not a single breakout, and my skin photographed like velvet.',
      look: 'Skin-First Luminous Complexion',
    },
    {
      id: 3,
      name: 'Elena & David',
      role: 'Bride & 8 Bridesmaids',
      venue: 'Mildred B. Cooper Memorial Chapel',
      stars: 5,
      quote:
        'Booking the Signature Bridal Suite package was the single best decision we made for our wedding morning. Having two lead artists meant we stayed ahead of our hair and photo schedule without any rushing. Every single bridesmaid looked and felt like royalty.',
      look: 'Full Signature Bridal Suite Package',
    },
    {
      id: 4,
      name: 'Brenda M.',
      role: 'Mother of the Bride',
      venue: 'Loose Mansion',
      stars: 5,
      quote:
        'At 58, I was terrified of being overdone or having makeup settle into fine lines. Rochelle was an absolute angel—she prepped my skin so gently and gave me the softest, most flattering glow. My husband could not stop telling me how beautiful I looked.',
      look: 'Ageless Elegance & Soft Radiance',
    },
  ]

  return (
    <section id="reviews" className="py-24 bg-[#FCFAF8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#DEB3AD]/20 border border-[#DEB3AD]/40">
            <Heart className="w-3.5 h-3.5 text-[#BA857E] fill-current" />
            <span className="text-xs uppercase tracking-[0.2em] text-[#1E272C] font-sans-ui font-semibold">
              Words From Our Brides
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1E272C] font-bold">
            Cherished Love Notes
          </h2>

          <p className="text-base text-[#343434]/80 font-body">
            Nothing means more to us than the radiant smiles of our brides and their families when they look in the mirror on their wedding day.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-2xl p-8 sm:p-10 border border-[#DEB3AD]/30 shadow-lg hover:shadow-xl transition-all duration-300 relative flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1 text-[#C5A059]">
                    {[...Array(rev.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] font-sans-ui uppercase tracking-wider text-[#BA857E] bg-[#DEB3AD]/15 px-3 py-1 rounded-full font-semibold">
                    {rev.look}
                  </span>
                </div>

                <Quote className="w-8 h-8 text-[#DEB3AD]/40 mb-3" />

                <p className="font-body text-[#343434] text-base sm:text-lg leading-relaxed italic">
                  "{rev.quote}"
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-[#DEB3AD]/20 flex items-center justify-between font-sans-ui">
                <div>
                  <h4 className="font-serif text-lg font-bold text-[#1E272C]">
                    {rev.name}
                  </h4>
                  <p className="text-xs text-[#343434]/60">
                    {rev.role} · {rev.venue}
                  </p>
                </div>
                <div className="w-9 h-9 rounded-full bg-[#DEB3AD]/20 flex items-center justify-center text-[#BA857E]">
                  <Sparkles className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
