import React, { useState, useEffect } from 'react'
import { Sparkles, Eye, X, ChevronLeft, ChevronRight } from 'lucide-react'

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const galleryItems = [
    { id: 1, src: '/assets/images/gallery/gallery-1.webp', title: 'Classic Radiant Bridal Glow', category: 'classic', caption: 'Luminous skin with softly defined neutral tones for a timeless morning ceremony.' },
    { id: 2, src: '/assets/images/gallery/gallery-2.webp', title: 'Soft Romantic Glam', category: 'romantic', caption: 'Velvety complexion with sculpted cheekbones and rose gold eye detailing.' },
    { id: 3, src: '/assets/images/gallery/gallery-3.webp', title: 'Golden Hour Bridal Elegance', category: 'romantic', caption: 'Warm champagne shimmer tailored to complement sunset outdoor vows.' },
    { id: 4, src: '/assets/images/gallery/gallery-4.webp', title: 'Dewy Complexion Mastery', category: 'details', caption: 'Flawless skin prep formulated for high-definition photography.' },
    { id: 5, src: '/assets/images/gallery/gallery-5.webp', title: 'Sophisticated Neutral Eye', category: 'details', caption: 'Muted taupe and espresso shadows that frame and accentuate hazel eyes.' },
    { id: 6, src: '/assets/images/gallery/gallery-6.webp', title: 'Full Bridal Party Coordinated Glam', category: 'party', caption: 'Harmonious beauty ensuring the entire bridal party looks cohesive.' },
    { id: 7, src: '/assets/images/gallery/gallery-7.webp', title: 'Regal Modern Bride', category: 'classic', caption: 'Clean winged liner paired with velvety nude lips and polished brows.' },
    { id: 8, src: '/assets/images/gallery/gallery-8.webp', title: 'Fresh & Ageless Mother of the Bride', category: 'party', caption: 'Hydrated, gentle coverage emphasizing natural elegance and longevity.' },
    { id: 9, src: '/assets/images/gallery/gallery-9.webp', title: 'Candlelight Evening Glam', category: 'romantic', caption: 'Smoky soft tones designed to glow under warm reception lighting.' },
    { id: 10, src: '/assets/images/gallery/gallery-10.webp', title: 'Natural Feathered Brow & Lash Detailing', category: 'details', caption: 'Custom individual lash clusters tailored to the bride eye contour.' },
    { id: 11, src: '/assets/images/gallery/gallery-11.webp', title: 'Editorial Chic Bridal', category: 'classic', caption: 'Clean architectural structure inspired by modern couture runway.' },
    { id: 12, src: '/assets/images/gallery/gallery-12.webp', title: 'Sunset Outdoor Wedding Glow', category: 'romantic', caption: 'Sweat and tear resistant formulation designed for summer nuptials.' },
    { id: 13, src: '/assets/images/gallery/gallery-13.webp', title: 'Bridesmaid Rose Petal Look', category: 'party', caption: 'Soft pink and blush hues matching the bridal floral palette.' },
    { id: 14, src: '/assets/images/gallery/gallery-14.webp', title: 'High-Definition Bridal Radiance', category: 'classic', caption: 'Seamless color matching across delicate necklines and collarbones.' },
    { id: 15, src: '/assets/images/gallery/gallery-15.webp', title: 'Velvet Lip & Defined Cheek', category: 'details', caption: 'Long-wearing transfer-proof lip blend that withstands the first kiss.' },
    { id: 16, src: '/assets/images/gallery/gallery-16.webp', title: 'Effortless Bohème Bride', category: 'romantic', caption: 'Airy, illuminated texture celebrating unpretentious bohemian beauty.' },
    { id: 17, src: '/assets/images/gallery/gallery-17.webp', title: 'Celebration Send-Off Perfection', category: 'party', caption: 'Enduring 14 hours later through sparklers and late night dancing.' },
  ]

  const categories = [
    { id: 'all', label: 'All Portfolio' },
    { id: 'classic', label: 'Classic Bridal' },
    { id: 'romantic', label: 'Romantic Glow' },
    { id: 'party', label: 'Bridal Party & Mothers' },
    { id: 'details', label: 'Artistry Details' },
  ]

  const filteredItems = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory)

  // Lightbox keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return
      if (e.key === 'Escape') setLightboxIndex(null)
      if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev + 1) % filteredItems.length)
      }
      if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [lightboxIndex, filteredItems.length])

  return (
    <section id="gallery" className="py-24 bg-[#FCFAF8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#DEB3AD]/20 border border-[#DEB3AD]/40">
            <Sparkles className="w-3.5 h-3.5 text-[#BA857E]" />
            <span className="text-xs uppercase tracking-[0.2em] text-[#1E272C] font-sans-ui font-semibold">
              The Bridal Portfolio
            </span>
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1E272C] font-bold">
            Real Brides. Real Radiance.
          </h2>
          
          <p className="text-base text-[#343434]/80 font-body">
            Explore authentic wedding morning transformations created by Jesi & Rochelle. Each look is customized to skin tone, face shape, and wedding aesthetic.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-sans-ui uppercase tracking-wider font-semibold transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-[#1E272C] text-[#DEB3AD] shadow-md'
                  : 'bg-white text-[#343434]/70 hover:text-[#1E272C] hover:bg-[#DEB3AD]/20 border border-[#DEB3AD]/30'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(index)}
              className="group relative cursor-pointer overflow-hidden rounded-xl bg-[#1E272C] shadow-md hover:shadow-2xl transition-all duration-500 border border-[#DEB3AD]/20"
            >
              <div className="aspect-[4/5] w-full overflow-hidden">
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                />
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E272C] via-[#1E272C]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="w-8 h-8 rounded-full bg-[#DEB3AD] text-[#1E272C] flex items-center justify-center mb-2">
                    <Eye className="w-4 h-4" />
                  </div>
                  <h3 className="font-serif text-lg text-white font-semibold leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#DEB3AD] font-sans-ui mt-1 line-clamp-2">
                    {item.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-[#1E272C]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            type="button"
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white hover:bg-[#DEB3AD] hover:text-[#1E272C] transition-colors z-20"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length)
            }}
            className="absolute left-4 sm:left-8 p-3 rounded-full bg-white/10 text-white hover:bg-[#DEB3AD] hover:text-[#1E272C] transition-colors z-20"
            aria-label="Previous Photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              setLightboxIndex((lightboxIndex + 1) % filteredItems.length)
            }}
            className="absolute right-4 sm:right-8 p-3 rounded-full bg-white/10 text-white hover:bg-[#DEB3AD] hover:text-[#1E272C] transition-colors z-20"
            aria-label="Next Photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div
            className="relative max-w-4xl max-h-[85vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredItems[lightboxIndex].src}
              alt={filteredItems[lightboxIndex].title}
              className="max-h-[72vh] w-auto object-contain rounded-xl shadow-2xl border border-white/10"
            />
            <div className="mt-4 text-center max-w-xl text-white">
              <h3 className="font-serif text-xl font-bold text-[#DEB3AD]">
                {filteredItems[lightboxIndex].title}
              </h3>
              <p className="text-sm text-white/80 font-body mt-1">
                {filteredItems[lightboxIndex].caption}
              </p>
              <p className="text-[11px] font-sans-ui text-white/50 mt-2">
                Photo {lightboxIndex + 1} of {filteredItems.length} · Use arrow keys to navigate
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
