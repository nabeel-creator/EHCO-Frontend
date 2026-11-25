import PageBanner from '@/components/common/PageBanner'
import Section from '@/components/common/Section'
import Button from '@/components/common/Button'

const roadmap = [
  {
    quarter: 'Q1',
    year: '2026',
    dates: 'Jan – Mar',
    title: 'EHCO Ignite Onboarding',
    desc: 'Recruit and train 50 youth volunteer leads for structured school campus outreach across Lahore.',
    status: 'In Progress',
  },
  {
    quarter: 'Q2',
    year: '2026',
    dates: 'Apr – Jun',
    title: 'Curriculum Guidebook Pilot',
    desc: 'Deploy and test the climate-integrated teaching guidebook across pilot schools in Punjab.',
    status: 'Upcoming',
  },
  {
    quarter: 'Q3',
    year: '2026',
    dates: 'Jul – Sep',
    title: 'Monsoon Resilience Kit Drive',
    desc: 'Assemble and distribute essential emergency flood preparedness kits in vulnerable zones.',
    status: 'Upcoming',
  },
  {
    quarter: 'Q4',
    year: '2026',
    dates: 'Oct – Dec',
    title: 'Eco-Pots Production Launch',
    desc: 'Scale upcycled paper planter production with community artisan partner networks.',
    status: 'Upcoming',
  },
]

export default function StrategyPage() {
  return (
    <>
      <PageBanner
        title="Strategic Plan"
        breadcrumbs={[
          { label: 'What We Do', href: '/what-we-do/services' },
          { label: 'Strategy' },
        ]}
      />

      <Section bg="white" className="py-8 sm:py-12">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="mb-6 text-center max-w-xl mx-auto">
            <h2 className="text-xl font-bold text-[#064D3B]">2026 Operational Milestones</h2>
            <p className="text-xs text-[#738078] mt-1">Multi-year agenda for institutionalizing school climate action.</p>
          </div>

          <div className="space-y-3">
            {roadmap.map((item) => (
              <div
                key={item.quarter}
                className="bg-[#F5F6F1] rounded-2xl p-4 sm:p-5 border border-[#E5EAE4] flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-[#064D3B] text-[#C9F15B] flex flex-col items-center justify-center font-mono font-bold shrink-0">
                    <span className="text-xs">{item.quarter}</span>
                    <span className="text-[10px] text-[#A0BAAC]">{item.year}</span>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-[11px] font-semibold text-[#738078]">{item.dates}</span>
                      <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-white text-[#064D3B] border border-[#E5EAE4]">
                        {item.status}
                      </span>
                    </div>
                    <h3 className="text-sm font-bold text-[#064D3B]">{item.title}</h3>
                    <p className="text-xs text-[#738078] mt-0.5 leading-relaxed">{item.desc}</p>
                  </div>
                </div>

                <div className="shrink-0 self-start sm:self-center">
                  <Button to="/get-involved" variant="secondary" className="!text-xs !py-1.5 !px-3">
                    Get Involved
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  )
}
