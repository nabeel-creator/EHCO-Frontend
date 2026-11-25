import PageBanner from '@/components/common/PageBanner'
import Section from '@/components/common/Section'
import Button from '@/components/common/Button'
import ImagePlaceholder from '@/components/common/ImagePlaceholder'
import siteData from '@content/site.json'

export default function AboutPage() {
  return (
    <>
      <PageBanner
        title="About Us"
        breadcrumbs={[{ label: 'About Us' }]}
      />

      <Section bg="white" className="py-8 sm:py-12">
        {/* Story Section: Asymmetrical Image + Concise Copy */}
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#064D3B] tracking-tight mb-6">
            Journey Behind EHCO
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-6">
              <ImagePlaceholder
                id="ABOUT_STORY_IMG"
                label="EHCO Community Outreach in Lahore"
                description="EHCO organizers conducting community environmental audits with young women and students in Lahore."
                aspectRatio="16/10"
                dimensions="1000 × 625"
                rounded="rounded-2xl"
                className="w-full card-shadow"
              />
            </div>

            <div className="lg:col-span-6 space-y-4 text-sm sm:text-base text-[#738078] leading-relaxed">
              <p>
                {siteData.description}
              </p>
              <p>
                Founded in Lahore in 2024, EHCO emerged from the reality that climate change in Pakistan is not a distant forecast — it is an everyday crisis of hazardous seasonal smog, erratic monsoons, and urban environmental degradation.
              </p>
              <p>
                Rather than relying on one-off symposiums or passive seminars, our youth-led teams deliver interactive curriculum kits, DIY air monitors, and school waste audits that equip students to lead environmental change in their own neighborhoods.
              </p>

              <div className="pt-2 flex flex-wrap gap-3">
                <Button to="/about/team" variant="primary" withArrow className="!py-2 !px-5 !text-xs">
                  Meet our team
                </Button>
                <Button to="/about/partners" variant="secondary" className="!py-2 !px-5 !text-xs">
                  View partners
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Core Features: 4 Clean, Low-Height Cards (Matches Panel 4) */}
        <div className="pt-8 border-t border-[#E5EAE4]">
          <h3 className="text-xl sm:text-2xl font-extrabold text-[#064D3B] tracking-tight mb-6">
            Our Core Pillars & Standards
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="p-5 rounded-2xl bg-[#F5F6F1] border border-[#E5EAE4] hover:border-[#064D3B]/30 transition-colors">
              <span className="text-xs font-bold uppercase tracking-wider text-[#064D3B] block mb-1.5">
                01. Hands-on Education
              </span>
              <h4 className="text-sm font-bold text-[#173D2D] mb-1.5">Action-First Literacy</h4>
              <p className="text-xs text-[#738078] leading-relaxed">
                Replacing passive lectures with tangible student-led waste and smog audits in local classrooms.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#F5F6F1] border border-[#E5EAE4] hover:border-[#064D3B]/30 transition-colors">
              <span className="text-xs font-bold uppercase tracking-wider text-[#064D3B] block mb-1.5">
                02. Community Leadership
              </span>
              <h4 className="text-sm font-bold text-[#173D2D] mb-1.5">Youth & Women-Led</h4>
              <p className="text-xs text-[#738078] leading-relaxed">
                Equitable volunteer leadership mobilizing girls and boys across Lahore and vulnerable districts.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#F5F6F1] border border-[#E5EAE4] hover:border-[#064D3B]/30 transition-colors">
              <span className="text-xs font-bold uppercase tracking-wider text-[#064D3B] block mb-1.5">
                03. Tangible Metrics
              </span>
              <h4 className="text-sm font-bold text-[#173D2D] mb-1.5">Data-Driven Insights</h4>
              <p className="text-xs text-[#738078] leading-relaxed">
                Tracking particulate levels and plastic footprints in grams, turning observations into habits.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#F5F6F1] border border-[#E5EAE4] hover:border-[#064D3B]/30 transition-colors">
              <span className="text-xs font-bold uppercase tracking-wider text-[#064D3B] block mb-1.5">
                04. Governance
              </span>
              <h4 className="text-sm font-bold text-[#173D2D] mb-1.5">Strict Field Safeguards</h4>
              <p className="text-xs text-[#738078] leading-relaxed">
                Child safeguarding protocols, zero single-use plastics, and complete volunteer training ethics.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
