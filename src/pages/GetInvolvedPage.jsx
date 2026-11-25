import PageBanner from '@/components/common/PageBanner'
import Section from '@/components/common/Section'
import Button from '@/components/common/Button'

export default function GetInvolvedPage() {
  return (
    <>
      <PageBanner
        title="Get Involved"
        breadcrumbs={[{ label: 'Get Involved' }]}
      />

      <Section bg="white" className="py-8 sm:py-12">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Card 1: Donate */}
          <div className="bg-[#064D3B] text-white rounded-2xl p-5 sm:p-6 border border-[#0B6B52] shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#C9F15B] block mb-2">
                Financial Support
              </span>
              <h2 className="text-lg font-bold text-white mb-2">
                Donate to Programs
              </h2>
              <p className="text-xs text-[#D0DFD7] leading-relaxed">
                Directly fund hands-on school workshops, emergency flood kits, and student audit measurement tools.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-[#0B6B52]">
              <Button to="/donate" variant="lime" withArrow className="w-full justify-center !font-bold !py-2 !text-xs">
                Donate Now
              </Button>
            </div>
          </div>

          {/* Card 2: Volunteer Membership */}
          <div className="bg-[#F5F6F1] rounded-2xl p-5 sm:p-6 border border-[#E5EAE4] flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#064D3B] bg-[#E7EDE5] px-2 py-0.5 rounded-md inline-block mb-2">
                Fellowships
              </span>
              <h2 className="text-lg font-bold text-[#064D3B] mb-2">
                Become a Member
              </h2>
              <p className="text-xs text-[#738078] leading-relaxed">
                Join EHCO as a youth organizer or campus fellow. We onboard student leaders for active field campaigns.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-[#E5EAE4]">
              <Button to="/get-involved/membership" variant="secondary" withArrow className="w-full justify-center !py-2 !text-xs">
                Explore Membership
              </Button>
            </div>
          </div>

          {/* Card 3: Institutional Partner */}
          <div className="bg-[#F5F6F1] rounded-2xl p-5 sm:p-6 border border-[#E5EAE4] flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#064D3B] bg-[#E7EDE5] px-2 py-0.5 rounded-md inline-block mb-2">
                Alliances
              </span>
              <h2 className="text-lg font-bold text-[#064D3B] mb-2">
                Partner With Us
              </h2>
              <p className="text-xs text-[#738078] leading-relaxed">
                Collaborate on school workshop deployments, community disaster relief, academic studies, and youth outreach.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-[#E5EAE4]">
              <Button to="/get-involved/partner" variant="secondary" withArrow className="w-full justify-center !py-2 !text-xs">
                Partner Inquiry
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
