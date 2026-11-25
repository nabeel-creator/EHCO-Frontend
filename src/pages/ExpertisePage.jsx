import PageBanner from '@/components/common/PageBanner'
import Section from '@/components/common/Section'
import Button from '@/components/common/Button'

const pillars = [
  {
    title: 'Climate Education in Classrooms',
    desc: 'Curriculum-aligned modules for schools covering single-use plastics, air quality indices, smog survival, and resource stewardship.',
    metrics: '8+ schools engaged',
  },
  {
    title: 'Community Plastic Audits',
    desc: 'Scientific audit methodologies tracking gram-level consumption over multi-week participant trials, yielding empirical data.',
    metrics: '500+ participants',
  },
  {
    title: 'Disaster Resilience & Floods',
    desc: 'Grassroots emergency flood kit design, household disaster protocols, and relief camp operations across flood-prone areas.',
    metrics: '200+ kits distributed',
  },
  {
    title: 'Youth Multiplier Training',
    desc: 'Peer-to-peer multiplier frameworks for students aged 16 to 25, empowering them to initiate campus sustainability clubs.',
    metrics: '1:20 multiplier ratio',
  },
]

export default function ExpertisePage() {
  return (
    <>
      <PageBanner
        title="Our Expertise"
        breadcrumbs={[
          { label: 'What We Do', href: '/what-we-do/services' },
          { label: 'Expertise' },
        ]}
      />

      <Section bg="white" className="py-8 sm:py-12">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          {pillars.map((item, idx) => (
            <div
              key={item.title}
              className="p-5 rounded-2xl bg-[#F5F6F1] border border-[#E5EAE4] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="w-8 h-8 rounded-lg bg-[#064D3B] text-[#C9F15B] flex items-center justify-center font-mono font-bold text-xs">
                    0{idx + 1}
                  </span>
                  <span className="text-[11px] font-bold text-[#064D3B] bg-[#E7EDE5] px-2 py-0.5 rounded">
                    {item.metrics}
                  </span>
                </div>

                <h3 className="text-base font-bold text-[#064D3B] mb-1.5">
                  {item.title}
                </h3>

                <p className="text-xs text-[#738078] leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#E5EAE4] flex items-center justify-between text-xs">
                <span className="text-[#738078] text-[11px]">Core Discipline</span>
                <Button to="/what-we-do/services" variant="quiet" className="!p-0 !text-xs !font-bold text-[#064D3B]">
                  Programmes →
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  )
}
