import PageBanner from '@/components/common/PageBanner'
import Section from '@/components/common/Section'
import Button from '@/components/common/Button'

export default function CareersPage() {
  return (
    <>
      <PageBanner
        title="Join Our Team"
        breadcrumbs={[
          { label: 'Get Involved', href: '/get-involved' },
          { label: 'Careers & Roles' },
        ]}
      />

      <Section bg="white" className="py-8 sm:py-12">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="bg-[#F5F6F1] rounded-2xl p-5 sm:p-6 border border-[#E5EAE4] space-y-4">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#064D3B] bg-[#E7EDE5] px-2.5 py-0.5 rounded-md inline-block mb-2">
                Pathway
              </span>
              <h2 className="text-xl font-bold text-[#064D3B]">
                Volunteer to Project Lead
              </h2>
              <p className="text-xs text-[#738078] leading-relaxed mt-1">
                EHCO is volunteer-led and youth-driven. Active contributors take on specialized project roles in curriculum delivery, disaster logistics, and digital communications.
              </p>
            </div>

            <div className="space-y-2.5 pt-2">
              <div className="p-3.5 rounded-xl bg-white border border-[#E5EAE4] flex items-start gap-3">
                <span className="w-7 h-7 rounded-lg bg-[#064D3B] text-[#C9F15B] flex items-center justify-center font-bold text-xs shrink-0">
                  01
                </span>
                <div>
                  <h4 className="text-xs font-bold text-[#064D3B]">Curriculum Facilitator</h4>
                  <p className="text-xs text-[#738078] mt-0.5">Run hands-on classroom audits and air monitoring sessions.</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-[#E5EAE4] flex items-start gap-3">
                <span className="w-7 h-7 rounded-lg bg-[#064D3B] text-[#C9F15B] flex items-center justify-center font-bold text-xs shrink-0">
                  02
                </span>
                <div>
                  <h4 className="text-xs font-bold text-[#064D3B]">Disaster Relief Coordinator</h4>
                  <p className="text-xs text-[#738078] mt-0.5">Coordinate emergency kit supply chains and community drills.</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-[#E5EAE4] flex items-start gap-3">
                <span className="w-7 h-7 rounded-lg bg-[#064D3B] text-[#C9F15B] flex items-center justify-center font-bold text-xs shrink-0">
                  03
                </span>
                <div>
                  <h4 className="text-xs font-bold text-[#064D3B]">Digital Media Lead</h4>
                  <p className="text-xs text-[#738078] mt-0.5">Lead podcast production, visual assets, and awareness campaigns.</p>
                </div>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <Button to="/contact" variant="primary" withArrow className="!py-2 !px-4 !text-xs">
                Send Application
              </Button>
              <Button to="/about/team" variant="secondary" className="!py-2 !px-4 !text-xs">
                View Current Team
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
