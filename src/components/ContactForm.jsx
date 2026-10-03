import React, { useState, useEffect } from 'react'
import { Calendar, Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Sparkles, Heart } from 'lucide-react'
import confetti from 'canvas-confetti'

export default function ContactForm({ prefilledNote, selectedPackage }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    weddingDate: '',
    venue: '',
    partySize: '1-4',
    selectedPkg: selectedPackage || 'The Bride Experience ($300)',
    notes: '',
  })

  const [status, setStatus] = useState('idle') // 'idle' | 'submitting' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    if (selectedPackage) {
      setFormData((prev) => ({ ...prev, selectedPkg: selectedPackage }))
    }
  }, [selectedPackage])

  useEffect(() => {
    if (prefilledNote) {
      setFormData((prev) => ({
        ...prev,
        notes: prev.notes ? `${prev.notes}\n\n[Estimator Selection]: ${prefilledNote}` : `[Estimator Selection]: ${prefilledNote}`,
      }))
    }
  }, [prefilledNote])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')
    setErrorMessage('')

    const combinedMessage = [
      `Wedding / Event Date: ${formData.weddingDate || 'Not specified yet'}`,
      `Venue / Location: ${formData.venue || 'Not specified'}`,
      `Selected Package: ${formData.selectedPkg}`,
      `Estimated Party Size: ${formData.partySize}`,
      `Client Notes & Vision:`,
      formData.notes || 'No additional notes provided.',
    ].join('\n\n')

    try {
      const response = await fetch(
        'https://4jq8k99ik2.execute-api.us-east-1.amazonaws.com/Stage/send-email',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: formData.fullName,
            email: formData.email,
            phone: formData.phone,
            message: combinedMessage,
          }),
        }
      )

      if (!response.ok) {
        throw new Error(`Server returned ${response.status}`)
      }

      setStatus('success')
      // Fire celebration confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#DEB3AD', '#C5A059', '#1E272C', '#FFFFFF'],
        })
      } catch (err) {
        // Confetti fallback
      }
    } catch (err) {
      console.error('Contact form submission error:', err)
      // If CORS or network issue, fallback gracefully
      setStatus('error')
      setErrorMessage(
        'We encountered a connection issue sending your inquiry directly. Please email us directly at andrewmgrube@gmail.com or call us.'
      )
    }
  }

  return (
    <section id="contact" className="py-24 bg-[#1E272C] text-white relative overflow-hidden">
      {/* Glow elements */}
      <div className="absolute top-1/4 -right-32 w-80 h-80 bg-[#DEB3AD]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-32 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-[#DEB3AD]/30">
            <Sparkles className="w-3.5 h-3.5 text-[#DEB3AD]" />
            <span className="text-xs uppercase tracking-[0.2em] text-[#DEB3AD] font-sans-ui font-medium">
              Inquire Your Date
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-bold">
            Let’s Create Your Dream Wedding Look
          </h2>

          <p className="text-base text-white/80 font-body">
            Dates for 2025 and 2026 are currently booking. Please fill out the consultation form below, and Jesi or Rochelle will respond within 24 to 48 business hours with availability and next steps.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Direct Info & Reassurance */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-[#253036] rounded-2xl p-8 border border-white/10 shadow-xl space-y-6">
              <h3 className="font-serif text-2xl font-bold text-white">
                Contact & Studio Info
              </h3>
              
              <div className="space-y-5 text-sm font-sans-ui text-white/80">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-full bg-[#DEB3AD]/15 text-[#DEB3AD] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Location & Travel</p>
                    <p className="text-xs text-white/60 mt-0.5">
                      Based in Kansas City, MO · Serving the greater Midwest & worldwide destination weddings
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-full bg-[#DEB3AD]/15 text-[#DEB3AD] flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Email Consultation</p>
                    <a
                      href="mailto:andrewmgrube@gmail.com"
                      className="text-xs text-[#DEB3AD] hover:underline mt-0.5 block"
                    >
                      andrewmgrube@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-full bg-[#DEB3AD]/15 text-[#DEB3AD] flex items-center justify-center shrink-0 mt-0.5">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Booking Policy</p>
                    <p className="text-xs text-white/60 mt-0.5">
                      Dates secured upon signed agreement and retainer deposit. Full trials scheduled 6-10 weeks prior.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial snippet */}
            <div className="p-6 rounded-2xl bg-[#253036]/60 border border-[#DEB3AD]/30 text-white/80 font-body text-sm italic relative">
              <Heart className="w-4 h-4 text-[#DEB3AD] fill-current mb-2" />
              "Booking Jesi and Rochelle made our entire wedding day flow with zero stress. They truly treat you like family!"
              <p className="text-xs font-sans-ui font-semibold text-[#DEB3AD] not-italic mt-3">
                — Lauren M., Bride
              </p>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7 bg-[#253036] rounded-2xl p-8 sm:p-10 border border-[#DEB3AD]/30 shadow-2xl">
            {status === 'success' ? (
              <div className="text-center py-12 space-y-5 animate-in fade-in duration-500">
                <div className="w-16 h-16 rounded-full bg-[#DEB3AD]/20 border border-[#DEB3AD] flex items-center justify-center mx-auto text-[#DEB3AD]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-3xl font-bold text-white">
                  Inquiry Received!
                </h3>
                <p className="text-base text-white/80 font-body max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out to Beauty For Ashes, <strong>{formData.fullName}</strong>. We are checking our calendar for <strong>{formData.weddingDate || 'your wedding date'}</strong> and will respond shortly.
                </p>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => {
                      setStatus('idle')
                      setFormData({
                        fullName: '',
                        email: '',
                        phone: '',
                        weddingDate: '',
                        venue: '',
                        partySize: '1-4',
                        selectedPkg: 'The Bride Experience ($300)',
                        notes: '',
                      })
                    }}
                    className="px-6 py-2.5 rounded-full text-xs font-sans-ui uppercase tracking-wider font-semibold bg-white/10 hover:bg-white/20 text-white transition-colors"
                  >
                    Send Another Note
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 font-sans-ui">
                {status === 'error' && (
                  <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 flex items-start gap-3 text-red-200 text-xs">
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-red-400" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-medium text-white/80 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Lauren Miller"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 focus:border-[#DEB3AD] focus:ring-1 focus:ring-[#DEB3AD] text-white text-sm outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-medium text-white/80 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. lauren@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 focus:border-[#DEB3AD] focus:ring-1 focus:ring-[#DEB3AD] text-white text-sm outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-medium text-white/80 mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(555) 123-4567"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 focus:border-[#DEB3AD] focus:ring-1 focus:ring-[#DEB3AD] text-white text-sm outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-medium text-white/80 mb-1.5">
                      Wedding / Event Date *
                    </label>
                    <input
                      type="date"
                      name="weddingDate"
                      required
                      value={formData.weddingDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 focus:border-[#DEB3AD] focus:ring-1 focus:ring-[#DEB3AD] text-white text-sm outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-medium text-white/80 mb-1.5">
                      Venue / Getting-Ready City
                    </label>
                    <input
                      type="text"
                      name="venue"
                      value={formData.venue}
                      onChange={handleChange}
                      placeholder="e.g. The Abbott, Kansas City"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 focus:border-[#DEB3AD] focus:ring-1 focus:ring-[#DEB3AD] text-white text-sm outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-medium text-white/80 mb-1.5">
                      Estimated Party Size
                    </label>
                    <select
                      name="partySize"
                      value={formData.partySize}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-[#1E272C] border border-white/15 focus:border-[#DEB3AD] focus:ring-1 focus:ring-[#DEB3AD] text-white text-sm outline-none transition-colors"
                    >
                      <option value="Bride Only (1)">Bride Only (1)</option>
                      <option value="2-4 People">2-4 People</option>
                      <option value="5-7 People">5-7 People</option>
                      <option value="8+ People (Qualifies for Full Suite)">8+ People (Qualifies for Full Suite)</option>
                      <option value="12+ People (Large Party)">12+ People (Large Party)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-medium text-white/80 mb-1.5">
                    Preferred Package
                  </label>
                  <select
                    name="selectedPkg"
                    value={formData.selectedPkg}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-[#1E272C] border border-white/15 focus:border-[#DEB3AD] focus:ring-1 focus:ring-[#DEB3AD] text-white text-sm outline-none transition-colors"
                  >
                    <option value="The Bride Experience ($300)">The Bride Experience ($300)</option>
                    <option value="Full Signature Bridal Suite Package ($1,200)">Full Signature Bridal Suite Package ($1,200 - 8 People)</option>
                    <option value="Bridal Party / Attendant Glam ($175/person)">Bridal Party / Attendant Glam ($175/person)</option>
                    <option value="Specialty Event / Masterclass / Other">Specialty Event / Masterclass / Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-medium text-white/80 mb-1.5">
                    Your Vision, Skin Goals & Details
                  </label>
                  <textarea
                    rows={4}
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    placeholder="Tell us about your wedding style, vibe, desired look (dewy natural, romantic, full glam), and any skin sensitivities..."
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 focus:border-[#DEB3AD] focus:ring-1 focus:ring-[#DEB3AD] text-white text-sm outline-none transition-colors resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full py-4 px-6 rounded-full text-xs uppercase tracking-wider font-semibold bg-[#DEB3AD] hover:bg-[#C9968F] text-[#1E272C] transition-all duration-300 flex items-center justify-center gap-2 font-sans-ui shadow-xl shadow-[#DEB3AD]/25 disabled:opacity-50"
                  >
                    {status === 'submitting' ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-[#1E272C] border-t-transparent rounded-full animate-spin" />
                        <span>Sending Consultation Request...</span>
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="w-4 h-4" />
                        <span>Submit Wedding Date Inquiry</span>
                      </span>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  )
}
