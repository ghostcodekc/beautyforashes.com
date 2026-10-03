import React, { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import BrandStrip from './components/BrandStrip.jsx'
import Services from './components/Services.jsx'
import PricingCalculator from './components/PricingCalculator.jsx'
import Gallery from './components/Gallery.jsx'
import MeetArtists from './components/MeetArtists.jsx'
import Testimonials from './components/Testimonials.jsx'
import FAQ from './components/FAQ.jsx'
import ContactForm from './components/ContactForm.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  const [selectedPackage, setSelectedPackage] = useState('')
  const [prefilledNote, setPrefilledNote] = useState('')

  const handleSelectPackage = (packageName) => {
    setSelectedPackage(packageName)
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleApplyEstimate = (summaryText, totalCost) => {
    setPrefilledNote(`${summaryText}`)
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleOpenBooking = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#FCFAF8] text-[#343434] selection:bg-[#DEB3AD] selection:text-[#1E272C]">
      {/* Navigation */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Hero Section */}
      <main className="flex-grow">
        <Hero onOpenBooking={handleOpenBooking} />

        {/* Prestigious Brand Affiliation Banner */}
        <BrandStrip />

        {/* Curated Bridal Services & Packages */}
        <Services onSelectPackage={handleSelectPackage} />

        {/* Interactive Bridal Party Investment Estimator */}
        <PricingCalculator onApplyEstimate={handleApplyEstimate} />

        {/* Real Bridal Portfolio Gallery with Modal Lightbox */}
        <Gallery />

        {/* Meet the Founders: Jesi & Rochelle */}
        <MeetArtists />

        {/* Client Love & Reviews */}
        <Testimonials />

        {/* Bridal FAQ */}
        <FAQ />

        {/* Contact & Date Inquiry Form with SES Endpoint */}
        <ContactForm
          prefilledNote={prefilledNote}
          selectedPackage={selectedPackage}
        />
      </main>

      {/* Luxury Footer */}
      <Footer />
    </div>
  )
}
