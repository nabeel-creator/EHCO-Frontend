import PageBanner from '@/components/common/PageBanner'
import Section from '@/components/common/Section'
import PartnerWall from '@/components/partners/PartnerWall'
import Button from '@/components/common/Button'
import partnersData from '@content/partners.json'

export default function PartnersPage() {
  return (
    <>
      <PageBanner
        title="Our Partners"
        breadcrumbs={[
          { label: 'About Us', href: '/about' },
          { label: 'Partners' },
        ]}
      />

      <Section bg="white" className="py-8 sm:py-12">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="bg-[#F5F6F1] rounded-2xl p-5 sm:p-6 border border-[#E5EAE4]">
            <div className="mb-4 text-center max-w-xl mx-auto">
              <h2 className="text-lg font-bold text-[#064D3B]">Verified Institutional Collaborations</h2>
              <p className="text-xs text-[#738078] mt-1">{partnersData.intro}</p>
            </div>
            <PartnerWall partners={partnersData.partners} />
          </div>

          {/* Partnership Callout */}
          <div className="p-5 sm:p-6 rounded-2xl bg-[#064D3B] text-white flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center md:text-left">
              <h3 className="text-lg font-bold text-white">
                Partner with EHCO on youth & climate initiatives
              </h3>
              <p className="text-xs text-[#D0DFD7] max-w-xl">
                We collaborate with grassroots movements, humanitarian relief foundations, and academic faculties across Pakistan.
              </p>
            </div>

            <Button to="/get-involved/partner" variant="lime" withArrow className="!font-bold shrink-0 !py-2 !px-4 !text-xs">
              Partner Inquiry
            </Button>
          </div>
        </div>
      </Section>
    </>
  )
}
