import PageBanner from '@/components/common/PageBanner'
import Section from '@/components/common/Section'
import Button from '@/components/common/Button'

const services = [
  {
    id: 'school-workshops',
    title: 'School Workshop Sessions',
    category: 'Classroom',
    duration: '2 to 4 hours',
    desc: 'Hands-on classroom modules covering waste segregation, cutting single-use plastics, and DIY air-quality kits.',
    deliverables: ['Audit kits', 'Measurement logs', 'Certificates'],
  },
  {
    id: 'plastic-audits',
    title: 'Plastic Audit Campaigns',
    category: 'Field Research',
    duration: '7 to 20 days',
    desc: 'Empirical campaigns where students log household plastic generation, followed by classroom reduction scorecards.',
    deliverables: ['Weight logs', 'Reduction charts', 'School scorecards'],
  },
  {
    id: 'flood-preparedness',
    title: 'Flood Preparedness',
    category: 'Disaster Risk',
    duration: 'Half-day session',
    desc: 'Equipping students and community youth with emergency kit assembly skills, water purification, and safety protocols.',
    deliverables: ['Emergency checklists', 'Purification guides', 'Action plans'],
  },
  {
    id: 'environmental-fellowships',
    title: 'Youth Fellowships',
    category: 'Leadership',
    duration: 'Multi-week',
    desc: 'Flagship cohorts like Ehsas-e-Zameen that guide student teams through self-directed campus greening.',
    deliverables: ['Campus projects', 'Peer training', 'Ambassador badges'],
  },
  {
    id: 'digital-podcasts',
    title: 'Podcasts & Public Dialogues',
    category: 'Media Outreach',
    duration: 'Continuous',
    desc: 'Public youth dialogues featuring climate researchers and grassroots organizers exploring actionable solutions.',
    deliverables: ['Podcast episodes', 'Live webinars', 'Open teaching slides'],
  },
]

export default function ServicesPage() {
  return (
    <>
      <PageBanner
        title="Services & Programs"
        breadcrumbs={[{ label: 'Services' }]}
      />

      <Section bg="white" className="py-8 sm:py-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#064D3B] tracking-tight">
              Action-driven curriculum for schools and youth cohorts
            </h2>
            <p className="text-xs sm:text-sm text-[#738078] mt-2">
              Structured modules delivered across Lahore and Punjab by trained EHCO youth facilitators.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((item) => (
              <div
                key={item.id}
                className="bg-[#F5F6F1] rounded-2xl p-5 border border-[#E5EAE4] flex flex-col justify-between hover:border-[#064D3B]/40 hover:shadow-sm transition-all duration-200"
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] mb-2">
                    <span className="font-bold text-[#064D3B] bg-[#E7EDE5] px-2 py-0.5 rounded-md">
                      {item.category}
                    </span>
                    <span className="text-[#738078] font-mono">{item.duration}</span>
                  </div>

                  <h3 className="text-base font-bold text-[#064D3B] mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#738078] leading-relaxed mb-4">
                    {item.desc}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#E5EAE4]">
                    {item.deliverables.map((d) => (
                      <span key={d} className="text-[11px] bg-white px-2 py-0.5 rounded border border-[#E5EAE4] text-[#173D2D]">
                        ✓ {d}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-[#E5EAE4]">
                  <Button to="/contact" variant="quiet" className="!p-0 !text-xs !font-bold text-[#064D3B]">
                    Book Programme →
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
