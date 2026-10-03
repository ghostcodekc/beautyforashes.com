import React, { useState } from 'react'
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      q: 'How far in advance should I reserve our wedding date?',
      a: 'We recommend inquiring 6 to 12 months before your wedding date, particularly for peak spring and autumn weekend dates. Because we dedicate our full focus and schedule to one bridal party at a time to avoid rushed transitions, dates fill quickly upon contract signing.',
    },
    {
      q: 'What is included in the Bridal Consultation & Trial session?',
      a: 'Your trial is an intimate 90-minute to 2-hour appointment where we analyze your skin barrier, evaluate lighting considerations for your venue, test lip and lash options, and document the exact product formulations used. We recommend scheduling your trial 6 to 10 weeks prior to your wedding day, ideally coordinated with a dress fitting or bridal shower.',
    },
    {
      q: 'Do you travel on-location on our wedding morning?',
      a: 'Yes, absolutely! All our bridal party services are strictly on-location. We bring our full professional makeup kits, sanitized tools, ring lighting, and directors chairs directly to your bridal suite, hotel, or venue across Kansas City and regional destinations.',
    },
    {
      q: 'How does Jesi’s chemistry background benefit brides with sensitive skin?',
      a: 'Many brides struggle with reactive skin, rosacea, or allergic responses to fragrance and heavy silicones. With Jesi’s formal cosmetic chemistry background, we review your ingredient sensitivities in advance and curate hypoallergenic, high-performance skincare and setting formulas that nourish rather than clog pores.',
    },
    {
      q: 'How long does each makeup application take on wedding morning?',
      a: 'We allocate 60 to 75 minutes for the bride to guarantee a relaxed, pampering experience, and 35 to 45 minutes for each bridesmaid and mother. With our Signature Bridal Suite package, two lead artists work simultaneously to ensure everyone finishes ahead of your photographer’s arrival.',
    },
    {
      q: 'What if someone in our party has oily skin or cries during vows?',
      a: 'All our products are waterproof, tear-resistant, and tested for high-definition photography without white flashback. We also provide our brides with a complimentary bridal emergency touch-up kit including matching lip color and blotting sheets.',
    },
  ]

  return (
    <section id="faq" className="py-24 bg-[#FCFAF8] border-t border-[#DEB3AD]/20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#DEB3AD]/20 border border-[#DEB3AD]/40">
            <HelpCircle className="w-3.5 h-3.5 text-[#BA857E]" />
            <span className="text-xs uppercase tracking-[0.2em] text-[#1E272C] font-sans-ui font-semibold">
              Bridal Guidance
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1E272C] font-bold">
            Frequently Asked Questions
          </h2>

          <p className="text-base text-[#343434]/80 font-body">
            Everything you need to know about preparing for your wedding morning with Beauty For Ashes.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4 font-sans-ui">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={index}
                className="bg-white rounded-xl border border-[#DEB3AD]/30 overflow-hidden shadow-sm transition-colors duration-200"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-serif text-lg sm:text-xl font-semibold text-[#1E272C] hover:text-[#BA857E] transition-colors"
                  aria-expanded={isOpen}
                >
                  <span>{item.q}</span>
                  <div className={`p-1.5 rounded-full bg-[#FCFAF8] border border-[#DEB3AD]/30 transition-transform duration-300 shrink-0 ${
                    isOpen ? 'rotate-180 bg-[#DEB3AD]/20' : ''
                  }`}>
                    <ChevronDown className="w-4 h-4 text-[#1E272C]" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-[#343434]/85 font-body text-base leading-relaxed border-t border-gray-100 pt-4">
                    {item.a}
                  </div>
                )}
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
