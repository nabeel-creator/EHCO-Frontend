import PageBanner from '@/components/common/PageBanner'
import Section from '@/components/common/Section'
import Button from '@/components/common/Button'
import siteData from '@content/site.json'

export default function MembershipPage() {
  const whatsappUrl = `${siteData.contact.whatsappLink}?text=${encodeURIComponent(
    'Hi EHCO team, I am interested in applying for the EHCO Ignite 2026 volunteer membership cohort.'
  )}`

  return (
    <>
      <PageBanner
        title="Become a Member"
        breadcrumbs={[
          { label: 'Get Involved', href: '/get-involved' },
          { label: 'Membership' },
        ]}
      />

      <Section bg="white" className="py-8 sm:py-12">
        <div className="max-w-3xl mx-auto space-y-6">
          {/* Ignite Cohort Feature Card */}
          <div className="bg-[#064D3B] text-white rounded-2xl p-5 sm:p-6 border border-[#0B6B52] shadow-sm">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#C9F15B] block mb-1">
              Active Intake
            </span>
            <h2 className="text-xl font-bold text-white mb-2">
              EHCO Ignite 2026 Onboarding
            </h2>
            <p className="text-xs text-[#D0DFD7] leading-relaxed mb-4">
              Our flagship volunteer cohort is now onboarding. Members facilitate school workshop modules, run plastic audits, coordinate flood relief drives, and produce digital educational media.
            </p>
            <Button href={whatsappUrl} variant="lime" withArrow target="_blank" rel="noopener noreferrer" className="!font-bold !py-2 !px-4 !text-xs">
              Apply via WhatsApp
            </Button>
          </div>

          {/* Member Responsibilities */}
          <div className="bg-[#F5F6F1] rounded-2xl p-5 sm:p-6 border border-[#E5EAE4]">
            <h3 className="text-base font-bold text-[#064D3B] mb-4">
              What EHCO Members Do
            </h3>
            <div className="space-y-3">
              {[
                {
                  title: 'Facilitate Hands-On Classroom Sessions',
                  desc: 'Run interactive waste sorting, air-quality monitoring, and energy reduction workshops.',
                },
                {
                  title: 'Demonstrate & Distribute Flood Kits',
                  desc: 'Work directly with vulnerable communities and relief partners to explain emergency protocols.',
                },
                {
                  title: 'Author Research Logs & Digital Podcasts',
                  desc: 'Contribute to data collection for air quality studies and youth discussions on social media.',
                },
              ].map((item, i) => (
                <div key={item.title} className="flex items-start gap-3 p-3 rounded-xl bg-white border border-[#E5EAE4]">
                  <span className="w-6 h-6 rounded-lg bg-[#064D3B] text-[#C9F15B] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    0{i + 1}
                  </span>
                  <div>
                    <h4 className="text-xs font-bold text-[#064D3B]">{item.title}</h4>
                    <p className="text-xs text-[#738078] mt-0.5 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
