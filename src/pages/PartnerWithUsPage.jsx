import PageBanner from '@/components/common/PageBanner'
import Section from '@/components/common/Section'
import Button from '@/components/common/Button'
import siteData from '@content/site.json'

export default function PartnerWithUsPage() {
  const mailtoLink = `mailto:${siteData.contact.email}?subject=${encodeURIComponent(
    'Partnership Proposal with EHCO'
  )}`

  return (
    <>
      <PageBanner
        title="Partner With Us"
        breadcrumbs={[
          { label: 'Get Involved', href: '/get-involved' },
          { label: 'Partner' },
        ]}
      />

      <Section bg="white" className="py-8 sm:py-12">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-5 rounded-2xl bg-[#F5F6F1] border border-[#E5EAE4]">
              <span className="text-xl block mb-2">🏫</span>
              <h3 className="text-sm font-bold text-[#064D3B] mb-1">Schools & Campuses</h3>
              <p className="text-xs text-[#738078] leading-relaxed">
                Invite EHCO to run student plastic audits, waste segregation workshops, or mentor campus eco clubs.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#F5F6F1] border border-[#E5EAE4]">
              <span className="text-xl block mb-2">🤝</span>
              <h3 className="text-sm font-bold text-[#064D3B] mb-1">NGOs & Networks</h3>
              <p className="text-xs text-[#738078] leading-relaxed">
                Collaborate on flood relief camps, emergency kit assembly, and ecological advocacy coalitions.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#F5F6F1] border border-[#E5EAE4]">
              <span className="text-xl block mb-2">🌱</span>
              <h3 className="text-sm font-bold text-[#064D3B] mb-1">Sponsors & Donors</h3>
              <p className="text-xs text-[#738078] leading-relaxed">
                Directly fund student measurement kits, upcycled paper planters, or sponsor school workshops.
              </p>
            </div>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl bg-[#064D3B] text-white flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-0.5 text-center sm:text-left">
              <h3 className="text-base font-bold">Have an initiative in mind?</h3>
              <p className="text-xs text-[#D0DFD7]">Reach out to our partnership committee today.</p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button href={mailtoLink} variant="lime" withArrow className="!font-bold !py-2 !px-4 !text-xs">
                Email Proposals
              </Button>
              <Button to="/contact" variant="outline" className="!text-white !border-white/30 hover:!bg-white/10 !py-2 !px-4 !text-xs">
                Contact Page
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
