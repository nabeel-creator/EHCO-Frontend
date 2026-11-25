import { useState } from 'react'
import PageBanner from '@/components/common/PageBanner'
import Section from '@/components/common/Section'
import Button from '@/components/common/Button'
import siteData from '@content/site.json'

const tiers = [
  {
    amount: 'PKR 1,000',
    title: 'Student Audit Kit',
    impact: 'Funds scales, notebooks, and air testing cards for one student.',
  },
  {
    amount: 'PKR 3,000',
    title: 'Flood Kit',
    impact: 'Supplies a vulnerable family with waterproof storage and water purification.',
  },
  {
    amount: 'PKR 5,000',
    title: 'School Workshop',
    impact: 'Covers workshop logistics and supplies for a 30-student classroom.',
  },
]

export default function DonatePage() {
  const [selectedTier, setSelectedTier] = useState('PKR 3,000')

  const whatsappDonateLink = `${siteData.contact.whatsappLink}?text=${encodeURIComponent(
    `Hello EHCO team, I would like to make a donation of ${selectedTier} to support youth climate initiatives.`
  )}`

  return (
    <>
      <PageBanner
        title="Support Our Work"
        breadcrumbs={[{ label: 'Donate' }]}
      />

      <Section bg="white" className="py-8 sm:py-12">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Tier Selection */}
          <div className="bg-[#F5F6F1] rounded-2xl p-5 sm:p-6 border border-[#E5EAE4]">
            <h2 className="text-base font-bold text-[#064D3B] mb-3">
              1. Select a donation tier
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {tiers.map((tier) => (
                <button
                  key={tier.amount}
                  type="button"
                  onClick={() => setSelectedTier(tier.amount)}
                  className={`p-4 rounded-xl border text-left transition-colors cursor-pointer ${
                    selectedTier === tier.amount
                      ? 'bg-[#064D3B] text-white border-[#064D3B]'
                      : 'bg-white text-[#173D2D] border-[#E5EAE4] hover:border-[#064D3B]/40'
                  }`}
                >
                  <span className={`text-xl font-bold font-mono block ${selectedTier === tier.amount ? 'text-[#C9F15B]' : 'text-[#064D3B]'}`}>
                    {tier.amount}
                  </span>
                  <span className="text-xs font-bold block mt-0.5">{tier.title}</span>
                  <p className={`text-[11px] mt-1.5 leading-relaxed ${selectedTier === tier.amount ? 'text-[#D0DFD7]' : 'text-[#738078]'}`}>
                    {tier.impact}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Payment Channels */}
          <div className="bg-[#F5F6F1] rounded-2xl p-5 sm:p-6 border border-[#E5EAE4]">
            <h2 className="text-base font-bold text-[#064D3B] mb-3">
              2. Transfer details (Pakistan)
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="p-4 rounded-xl bg-white border border-[#E5EAE4]">
                <h3 className="text-xs font-bold text-[#064D3B]">Bank Transfer</h3>
                <p className="text-[11px] text-[#738078] mt-0.5">EHCO Operational Account</p>
                <p className="text-xs font-mono text-[#173D2D] mt-2 font-semibold">
                  TODO(EHCO): IBAN
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#E5EAE4]">
                <h3 className="text-xs font-bold text-[#064D3B]">JazzCash</h3>
                <p className="text-[11px] text-[#738078] mt-0.5">Title: EHCO Lahore</p>
                <p className="text-xs font-mono text-[#173D2D] mt-2 font-semibold">
                  {siteData.contact.whatsapp}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#E5EAE4]">
                <h3 className="text-xs font-bold text-[#064D3B]">Easypaisa</h3>
                <p className="text-[11px] text-[#738078] mt-0.5">Title: EHCO Lahore</p>
                <p className="text-xs font-mono text-[#173D2D] mt-2 font-semibold">
                  {siteData.contact.whatsapp}
                </p>
              </div>
            </div>

            <div className="mt-4 pt-3 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-[#E5EAE4]">
              <p className="text-xs text-[#738078]">
                Send receipt via WhatsApp for official acknowledgment.
              </p>
              <Button href={whatsappDonateLink} variant="lime" withArrow target="_blank" rel="noopener noreferrer" className="!font-bold shrink-0 !py-2 !px-4 !text-xs">
                Confirm on WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
