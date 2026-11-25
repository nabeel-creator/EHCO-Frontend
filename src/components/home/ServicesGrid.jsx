import { Link } from 'react-router-dom'
import SectionHeading from '../common/SectionHeading'
import Button from '../common/Button'

const services = [
  {
    id: 'school-workshops',
    title: 'School Workshop Sessions',
    category: 'Classroom Outreach',
    desc: 'Hands-on activities covering waste segregation, cutting single-use plastic, and building DIY air-quality kits in Lahore classrooms.',
    link: '/what-we-do/services',
    tag: 'Primary & Secondary',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
  },
  {
    id: 'plastic-audits',
    title: 'Plastic Audit Campaigns',
    category: 'Data Measurement',
    desc: 'Guided measurement programmes where youth log and weigh household plastic usage for 7-20 days, transforming data into reduction plans.',
    link: '/impact/projects',
    tag: 'Empirical Research',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
  },
  {
    id: 'flood-preparedness',
    title: 'Flood Preparedness Workshops',
    category: 'Disaster Risk Reduction',
    desc: 'Community sessions teaching evacuation planning, water purification, and emergency kit assembly in partnership with frontline relief networks.',
    link: '/what-we-do/expertise',
    tag: 'Climate Resilience',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
      </svg>
    ),
  },
  {
    id: 'youth-fellowships',
    title: 'Ehsas-e-Zameen Fellowships',
    category: 'Cohort Programs',
    desc: 'Mentored school programmes training youth leaders in energy conservation, native tree planting, and peer sustainability education.',
    link: '/get-involved/membership',
    tag: 'Leadership',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <line x1="9" y1="9" x2="9.01" y2="9" />
        <line x1="15" y1="9" x2="15.01" y2="9" />
      </svg>
    ),
  },
  {
    id: 'digital-podcasts',
    title: "Let's Talk Climate Digital Outreach",
    category: 'Media & Awareness',
    desc: 'Digital podcast series and educational webinars featuring environmental scientists, youth activists, and civic policy leaders.',
    link: '/what-we-do/services',
    tag: 'Digital Reach',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
        <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
        <line x1="12" y1="19" x2="12" y2="23" />
        <line x1="8" y1="23" x2="16" y2="23" />
      </svg>
    ),
  },
  {
    id: 'eco-shop-initiatives',
    title: 'Sustainable Products & Upcycling',
    category: 'Circular Economy',
    desc: 'Transforming waste awareness into practical eco-products: seed packets, reusable carriers, and student-crafted merchandise.',
    link: '/shop',
    tag: 'Eco Shop',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="9" cy="21" r="1" />
        <circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
      </svg>
    ),
  },
]

export default function ServicesGrid() {
  return (
    <section className="py-16 sm:py-24 bg-white border-b border-[#E5EAE4]">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What We Do"
          title="Practical climate solutions for classrooms and communities."
          description="EHCO delivers action-oriented programmes that replace passive lectures with hands-on environmental problem solving."
          action={
            <Button to="/what-we-do/services" variant="secondary" withArrow>
              See all services & topics
            </Button>
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((item) => (
            <Link
              key={item.id}
              to={item.link}
              className="group flex flex-col justify-between p-7 rounded-3xl bg-[#F5F6F1] hover:bg-[#E7EDE5] border border-[#E5EAE4] hover:border-[#064D3B]/30 transition-all duration-300 card-shadow hover:-translate-y-1 hover:shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-white text-[#064D3B] group-hover:bg-[#064D3B] group-hover:text-[#C9F15B] flex items-center justify-center transition-colors shadow-xs">
                    {item.icon}
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#064D3B] bg-white/80 px-3 py-1 rounded-full border border-[#E5EAE4]">
                    {item.tag}
                  </span>
                </div>

                <span className="text-xs font-semibold text-[#738078] block mb-1">
                  {item.category}
                </span>

                <h3 className="text-xl font-bold text-[#064D3B] group-hover:text-[#04392B] tracking-tight mb-3">
                  {item.title}
                </h3>

                <p className="text-sm text-[#738078] leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E5EAE4] flex items-center justify-between text-xs font-bold text-[#064D3B]">
                <span>Explore details</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="transition-transform duration-200 group-hover:translate-x-1"
                >
                  <path d="M3.333 8h9.334M8.667 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
