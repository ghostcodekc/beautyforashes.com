import React, { useState } from 'react'
import { Calculator, Sparkles, Plus, Minus, Check, ArrowRight, ShieldCheck } from 'lucide-react'

export default function PricingCalculator({ onApplyEstimate }) {
  const [includeBride, setIncludeBride] = useState(true)
  const [bridesmaids, setBridesmaids] = useState(4)
  const [mothers, setMothers] = useState(2)
  const [juniorAttendants, setJuniorAttendants] = useState(0)
  const [touchUpStandby, setTouchUpStandby] = useState(false)

  // Pricing constants based on service rates
  const BRIDE_PRICE = 300
  const ADULT_ATTENDANT_PRICE = 175
  const JUNIOR_PRICE = 75
  const TOUCHUP_STANDBY_PRICE = 250
  const FULL_PACKAGE_PRICE = 1200 // Covers bride + 7 adults (8 people)

  // Calculations
  const totalAdultAttendants = bridesmaids + mothers
  const totalPeople = (includeBride ? 1 : 0) + totalAdultAttendants + juniorAttendants

  // Calculate standard itemized cost
  const itemizedTotal =
    (includeBride ? BRIDE_PRICE : 0) +
    totalAdultAttendants * ADULT_ATTENDANT_PRICE +
    juniorAttendants * JUNIOR_PRICE +
    (touchUpStandby ? TOUCHUP_STANDBY_PRICE : 0)

  // Check if they qualify for the 8-person Bridal Suite Package discount
  const qualifiesForSuite = includeBride && totalAdultAttendants >= 7
  let finalCalculatedTotal = itemizedTotal
  let savings = 0

  if (qualifiesForSuite) {
    const includedAdults = 7
    const extraAdults = totalAdultAttendants - includedAdults
    finalCalculatedTotal =
      FULL_PACKAGE_PRICE +
      extraAdults * ADULT_ATTENDANT_PRICE +
      juniorAttendants * JUNIOR_PRICE +
      (touchUpStandby ? TOUCHUP_STANDBY_PRICE : 0)
    savings = itemizedTotal - finalCalculatedTotal
  }

  const handleApply = () => {
    const summary = `Estimated Party of ${totalPeople} (${includeBride ? 'Bride' : ''}${bridesmaids ? `, ${bridesmaids} Bridesmaids` : ''}${mothers ? `, ${mothers} Mothers/Honored Guests` : ''}${juniorAttendants ? `, ${juniorAttendants} Junior/Flower Girls` : ''}${touchUpStandby ? ', Reception Standby' : ''}) - Estimated Total: $${finalCalculatedTotal.toLocaleString()}`
    if (onApplyEstimate) {
      onApplyEstimate(summary, finalCalculatedTotal)
    }
  }

  return (
    <section id="estimator" className="py-20 bg-[#1E272C] text-white relative overflow-hidden">
      {/* Glow elements */}
      <div className="absolute top-1/2 -left-40 w-80 h-80 bg-[#DEB3AD]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-[#DEB3AD]/30">
            <Calculator className="w-3.5 h-3.5 text-[#DEB3AD]" />
            <span className="text-xs uppercase tracking-[0.2em] text-[#DEB3AD] font-sans-ui font-medium">
              Transparent Wedding Planning
            </span>
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl text-white font-bold">
            Interactive Bridal Party Estimator
          </h2>
          
          <p className="text-sm sm:text-base text-white/75 font-body">
            Plan your wedding morning investment with total clarity. Adjust your party size below for an instant, transparent estimate.
          </p>
        </div>

        {/* Calculator Body */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 bg-[#253036] rounded-2xl p-6 sm:p-8 border border-white/10 shadow-xl space-y-6">
            
            {/* Bride Toggle */}
            <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5">
              <div>
                <p className="font-serif text-lg font-semibold text-white">The Bride Look & Trial</p>
                <p className="text-xs text-white/60 font-sans-ui">Includes in-studio trial session & day-of on-location glam ($300)</p>
              </div>
              <button
                type="button"
                onClick={() => setIncludeBride(!includeBride)}
                className={`w-12 h-7 rounded-full transition-colors relative p-1 ${
                  includeBride ? 'bg-[#DEB3AD]' : 'bg-white/20'
                }`}
                aria-label="Toggle Bride Service"
              >
                <div
                  className={`w-5 h-5 rounded-full bg-[#1E272C] transition-transform ${
                    includeBride ? 'translate-x-5' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>

            {/* Bridesmaids Counter */}
            <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5">
              <div>
                <p className="font-serif text-lg font-semibold text-white">Bridesmaids</p>
                <p className="text-xs text-white/60 font-sans-ui">Full camera-ready look with lashes ($175 each)</p>
              </div>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setBridesmaids(Math.max(0, bridesmaids - 1))}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                  aria-label="Decrease bridesmaids"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-8 text-center font-serif text-xl font-bold">{bridesmaids}</span>
                <button
                  type="button"
                  onClick={() => setBridesmaids(bridesmaids + 1)}
                  className="w-8 h-8 rounded-full bg-[#DEB3AD] text-[#1E272C] hover:bg-[#C9968F] flex items-center justify-center transition-colors font-bold"
                  aria-label="Increase bridesmaids"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Mothers / Honored Guests */}
            <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5">
              <div>
                <p className="font-serif text-lg font-semibold text-white">Mothers of Bride & Groom</p>
                <p className="text-xs text-white/60 font-sans-ui">Gentle ageless skin prep & soft glam ($175 each)</p>
              </div>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setMothers(Math.max(0, mothers - 1))}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                  aria-label="Decrease mothers"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-8 text-center font-serif text-xl font-bold">{mothers}</span>
                <button
                  type="button"
                  onClick={() => setMothers(mothers + 1)}
                  className="w-8 h-8 rounded-full bg-[#DEB3AD] text-[#1E272C] hover:bg-[#C9968F] flex items-center justify-center transition-colors font-bold"
                  aria-label="Increase mothers"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Junior / Flower Girls */}
            <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5">
              <div>
                <p className="font-serif text-lg font-semibold text-white">Junior Bridesmaids / Flower Girls</p>
                <p className="text-xs text-white/60 font-sans-ui">Light shimmer, blush & lip gloss ($75 each)</p>
              </div>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setJuniorAttendants(Math.max(0, juniorAttendants - 1))}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                  aria-label="Decrease juniors"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-8 text-center font-serif text-xl font-bold">{juniorAttendants}</span>
                <button
                  type="button"
                  onClick={() => setJuniorAttendants(juniorAttendants + 1)}
                  className="w-8 h-8 rounded-full bg-[#DEB3AD] text-[#1E272C] hover:bg-[#C9968F] flex items-center justify-center transition-colors font-bold"
                  aria-label="Increase juniors"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Add-on: Reception Standby */}
            <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5">
              <div>
                <p className="font-serif text-lg font-semibold text-white">Reception Touch-Up & Second Look</p>
                <p className="text-xs text-white/60 font-sans-ui">Artist on standby for post-ceremony photo refresh ($250)</p>
              </div>
              <button
                type="button"
                onClick={() => setTouchUpStandby(!touchUpStandby)}
                className={`w-12 h-7 rounded-full transition-colors relative p-1 ${
                  touchUpStandby ? 'bg-[#DEB3AD]' : 'bg-white/20'
                }`}
                aria-label="Toggle Reception Touch-up"
              >
                <div
                  className={`w-5 h-5 rounded-full bg-[#1E272C] transition-transform ${
                    touchUpStandby ? 'translate-x-5' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>

          </div>

          {/* Breakdown & Summary Column */}
          <div className="lg:col-span-5 bg-gradient-to-b from-[#2A363D] to-[#202A30] rounded-2xl p-6 sm:p-8 border border-[#DEB3AD]/40 shadow-2xl relative">
            <p className="text-xs uppercase tracking-widest font-sans-ui text-[#DEB3AD] font-semibold">
              Estimated Investment
            </p>

            <div className="mt-4 flex items-baseline gap-2">
              <span className="font-serif text-5xl font-bold text-white tracking-tight">
                ${finalCalculatedTotal.toLocaleString()}
              </span>
              <span className="text-xs uppercase font-sans-ui text-white/60 tracking-wider">
                USD
              </span>
            </div>

            {/* Package Qualification Banner */}
            {qualifiesForSuite && (
              <div className="mt-4 p-3 rounded-lg bg-[#DEB3AD]/15 border border-[#DEB3AD]/40 text-xs font-sans-ui text-[#DEB3AD] flex items-start gap-2">
                <Sparkles className="w-4 h-4 shrink-0 mt-0.5" />
                <span>
                  <strong>Full Suite Bundle Applied:</strong> Your party size of 8+ qualifies for our Signature Bridal Package, saving you <strong>${savings}</strong>!
                </span>
              </div>
            )}

            <div className="my-6 border-t border-white/10" />

            {/* Line items */}
            <div className="space-y-3 font-sans-ui text-sm text-white/80">
              <div className="flex justify-between">
                <span>Party Size:</span>
                <span className="text-white font-medium">{totalPeople} people</span>
              </div>
              {includeBride && (
                <div className="flex justify-between">
                  <span>Bride (Trial & Day-of):</span>
                  <span className="text-white font-medium">${BRIDE_PRICE}</span>
                </div>
              )}
              {totalAdultAttendants > 0 && (
                <div className="flex justify-between">
                  <span>Adult Attendants ({totalAdultAttendants}):</span>
                  <span className="text-white font-medium">
                    ${(totalAdultAttendants * ADULT_ATTENDANT_PRICE).toLocaleString()}
                  </span>
                </div>
              )}
              {juniorAttendants > 0 && (
                <div className="flex justify-between">
                  <span>Junior/Flower Girls ({juniorAttendants}):</span>
                  <span className="text-white font-medium">${juniorAttendants * JUNIOR_PRICE}</span>
                </div>
              )}
              {touchUpStandby && (
                <div className="flex justify-between">
                  <span>Evening Touch-up Standby:</span>
                  <span className="text-white font-medium">${TOUCHUP_STANDBY_PRICE}</span>
                </div>
              )}
              {savings > 0 && (
                <div className="flex justify-between text-[#DEB3AD]">
                  <span>Signature Suite Discount:</span>
                  <span className="font-medium">-${savings}</span>
                </div>
              )}
            </div>

            <div className="mt-8 pt-4 border-t border-white/10">
              <button
                type="button"
                onClick={handleApply}
                className="w-full py-4 px-6 rounded-full text-xs uppercase tracking-wider font-semibold bg-[#DEB3AD] hover:bg-[#C9968F] text-[#1E272C] transition-all duration-300 flex items-center justify-center gap-2 font-sans-ui shadow-lg shadow-[#DEB3AD]/20"
              >
                <span>Check Date for this Party</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="mt-4 flex items-center justify-center gap-2 text-white/60 text-xs font-sans-ui">
                <ShieldCheck className="w-4 h-4 text-[#DEB3AD]" />
                <span>Zero obligation · In-studio trials scheduled on deposit</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
