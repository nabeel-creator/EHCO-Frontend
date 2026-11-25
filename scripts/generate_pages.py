import os

BASE_DIR = r"d:\Main Projects\EHCO Frontend"
PAGES_DIR = os.path.join(BASE_DIR, "src", "pages")

os.makedirs(PAGES_DIR, exist_ok=True)

pages = {}

# 1. HomePage
pages["HomePage.jsx"] = """import Hero from '@/components/home/Hero'
import Section from '@/components/common/Section'
import Ledger from '@/components/common/Ledger'
import GetInvolvedPanels from '@/components/home/GetInvolvedPanels'
import PartnerWall from '@/components/partners/PartnerWall'
import Button from '@/components/common/Button'
import ResultsMap from '@/components/results/ResultsMap'
import impactData from '@content/impact.json'
import projectsData from '@content/projects.json'
import partnersData from '@content/partners.json'

const featuredProject = projectsData.projects.find(p => p.slug === 'plastic-audit-phase-1')
const whatWeDo = [
  { title: 'Climate education in schools', desc: 'Hands-on activities in classrooms: waste sorting, air-quality kits, and energy audits run by trained students.' },
  { title: 'Plastic and waste', desc: 'Workshops where young people track their daily plastic use, then learn to cut it and turn waste into products.' },
  { title: 'Flood preparedness', desc: 'Community training, kit distribution, and a multiplier model so each participant teaches their household.' },
  { title: 'Youth leadership', desc: 'Fellowships, volunteer programmes, and partnerships that give young people real responsibility in climate work.' },
]

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* What we do */}
      <Section bg="mint">
        <h2 className="text-forest font-semibold text-2xl md:text-[32px] leading-[1.2] mb-8">
          What we do
        </h2>
        <div className="space-y-6">
          {whatWeDo.map((item) => (
            <div key={item.title} className="border-b border-hairline pb-6">
              <h3 className="text-forest font-medium text-xl">{item.title}</h3>
              <p className="text-navy text-lg mt-2 max-w-[65ch] leading-relaxed">{item.desc}</p>
            </div>
          ))}
          <Button to="/what-we-do/services" variant="quiet">
            See all services and topics
          </Button>
        </div>
      </Section>

      {/* Where we have worked (Results map & ledger) */}
      <Section bg="white">
        <h2 className="text-forest font-semibold text-2xl md:text-[32px] leading-[1.2] mb-3">
          {impactData.headline}
        </h2>
        <p className="text-navy text-lg mb-8 max-w-[65ch]">{impactData.description}</p>
        <ResultsMap />
        <div className="mt-12">
          <Ledger items={impactData.stats} />
        </div>
        <div className="mt-6">
          <Button to="/impact/results" variant="quiet">
            See all results
          </Button>
        </div>
      </Section>

      {/* Featured project */}
      {featuredProject && (
        <Section bg="mint">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-5">
              <div className="aspect-[3/2] bg-white rounded-[12px] flex items-center justify-center">
                <span className="text-navy/50 text-sm">TODO(EHCO): Featured photo</span>
              </div>
            </div>
            <div className="md:col-span-7">
              <h2 className="text-forest font-semibold text-2xl md:text-[32px] leading-[1.2]">
                103 people signed up. 42 tracked their plastic daily.
              </h2>
              <p className="text-navy text-sm mt-2">Online · July 2025 · 103 signed up</p>
              <p className="text-navy text-lg mt-3 max-w-[65ch] leading-relaxed">
                {featuredProject.summary}
              </p>
              <Button to={`/impact/projects/${featuredProject.slug}`} variant="quiet" className="mt-4">
                Read about this project
              </Button>
            </div>
          </div>
        </Section>
      )}

      {/* Get involved (first dark navy band) */}
      <GetInvolvedPanels />

      {/* Partners logo wall */}
      <Section bg="white">
        <h2 className="text-forest font-semibold text-2xl md:text-[32px] leading-[1.2] mb-8">
          Our partners
        </h2>
        <PartnerWall partners={partnersData.partners} />
      </Section>

      {/* Latest */}
      <Section bg="mint">
        <h2 className="text-forest font-semibold text-2xl md:text-[32px] leading-[1.2] mb-6">
          Latest
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-[20px] p-8">
            <span className="text-sm text-navy/70 font-medium">Blog</span>
            <h3 className="text-forest font-semibold text-xl mt-2">TODO(EHCO): Understanding Lahore air quality in winter</h3>
            <p className="text-navy text-lg mt-2">TODO(EHCO): What schools can do when smog hits severe levels.</p>
            <Button to="/impact/blog" variant="quiet" className="mt-3">
              Read all posts
            </Button>
          </div>
          <div className="bg-white rounded-[20px] p-8">
            <span className="text-sm text-navy/70 font-medium">Report</span>
            <h3 className="text-forest font-semibold text-xl mt-2">TODO(EHCO): Plastic Audit 2025 Summary</h3>
            <p className="text-navy text-lg mt-2">TODO(EHCO): Findings from our pilot auditing 500+ students across Lahore.</p>
            <Button to="/impact/reports" variant="quiet" className="mt-3">
              See all reports
            </Button>
          </div>
        </div>
      </Section>
    </>
  )
}
"""

# 2. AboutPage
pages["AboutPage.jsx"] = """import Section from '@/components/common/Section'
import Breadcrumbs from '@/components/common/Breadcrumbs'
import Button from '@/components/common/Button'
import siteData from '@content/site.json'

export default function AboutPage() {
  return (
    <Section bg="white">
      <Breadcrumbs items={[{ label: 'Who we are' }, { label: 'About us' }]} />
      <h1 className="text-forest font-bold text-[32px] md:text-[42px] leading-[1.15] mb-6">
        About EHCO
      </h1>
      <p className="text-navy text-lg leading-relaxed max-w-[65ch] mb-8">
        {siteData.description}
      </p>

      {/* Mission and vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
        <div className="bg-mint rounded-[20px] p-8">
          <h2 className="text-forest font-semibold text-xl md:text-2xl mb-3">Our mission</h2>
          <p className="text-navy text-lg leading-relaxed">{siteData.mission}</p>
        </div>
        <div className="bg-mint rounded-[20px] p-8">
          <h2 className="text-forest font-semibold text-xl md:text-2xl mb-3">Our vision</h2>
          <p className="text-navy text-lg leading-relaxed">{siteData.vision}</p>
        </div>
      </div>

      {/* Core values */}
      <div className="mt-12">
        <h2 className="text-forest font-semibold text-2xl md:text-[32px] leading-[1.2] mb-6">
          Core values
        </h2>
        <div className="space-y-6">
          {siteData.coreValues.map((value) => (
            <div key={value.title} className="border-b border-hairline pb-6">
              <h3 className="text-forest font-medium text-xl">{value.title}</h3>
              <p className="text-navy text-lg mt-2 max-w-[65ch] leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* How we work */}
      <div className="mt-12">
        <h2 className="text-forest font-semibold text-2xl md:text-[32px] leading-[1.2] mb-6">
          How we work
        </h2>
        <ul className="space-y-4">
          {siteData.method.map((m) => (
            <li key={m} className="text-navy text-lg leading-relaxed flex gap-3 items-start">
              <span className="text-olive mt-1.5 shrink-0" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor"><circle cx="10" cy="10" r="4"/></svg>
              </span>
              <span>{m}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Framing */}
      <div className="mt-12 bg-mint rounded-[20px] p-8">
        <p className="text-navy text-lg leading-relaxed font-semibold">{siteData.framingLine}</p>
        <p className="text-navy/70 text-sm mt-2">{siteData.framingLineSource}</p>
      </div>

      {/* Policies placeholder */}
      <div className="mt-12">
        <h2 className="text-forest font-semibold text-2xl md:text-[32px] leading-[1.2] mb-4">
          Our policies
        </h2>
        <div className="divide-y divide-hairline border-t border-hairline">
          <div className="py-4 flex items-center justify-between">
            <span className="text-navy text-lg">Child safeguarding policy</span>
            <span className="text-navy/60 text-sm">TODO(EHCO): Document needed</span>
          </div>
          <div className="py-4 flex items-center justify-between">
            <span className="text-navy text-lg">Environmental code of conduct</span>
            <span className="text-navy/60 text-sm">TODO(EHCO): Document needed</span>
          </div>
          <div className="py-4 flex items-center justify-between">
            <span className="text-navy text-lg">Volunteer guidelines</span>
            <span className="text-navy/60 text-sm">TODO(EHCO): Document needed</span>
          </div>
        </div>
      </div>

      <div className="mt-10 flex gap-4 flex-wrap">
        <Button to="/about/team" variant="primary">Meet our team</Button>
        <Button to="/about/partners" variant="secondary">Our partners</Button>
      </div>
    </Section>
  )
}
"""

# 3. TeamPage
pages["TeamPage.jsx"] = """import Section from '@/components/common/Section'
import Breadcrumbs from '@/components/common/Breadcrumbs'
import TeamCard from '@/components/team/TeamCard'
import teamData from '@content/team.json'

export default function TeamPage() {
  const featured = teamData.members.find(m => m.featured)
  const others = teamData.members.filter(m => !m.featured)

  return (
    <Section bg="white">
      <Breadcrumbs items={[
        { label: 'Who we are', href: '/about' },
        { label: 'Meet our team' },
      ]} />
      <h1 className="text-forest font-bold text-[32px] md:text-[42px] leading-[1.15] mb-4">
        Meet our team
      </h1>
      <p className="text-navy text-lg leading-relaxed max-w-[65ch] mb-10">
        {teamData.intro}
      </p>

      {/* Chairperson wide row */}
      {featured && <TeamCard member={featured} featured />}

      {/* Other six in 3-column grid (2 on tablet, 1 on mobile). align-items: start ensures opening one does not stretch neighbours */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
        {others.map((member) => (
          <TeamCard key={member.slug} member={member} />
        ))}
      </div>
    </Section>
  )
}
"""

# 4. PartnersPage
pages["PartnersPage.jsx"] = """import Section from '@/components/common/Section'
import Breadcrumbs from '@/components/common/Breadcrumbs'
import PartnerWall from '@/components/partners/PartnerWall'
import partnersData from '@content/partners.json'

export default function PartnersPage() {
  return (
    <Section bg="white">
      <Breadcrumbs items={[
        { label: 'Who we are', href: '/about' },
        { label: 'Our partners' },
      ]} />
      <h1 className="text-forest font-bold text-[32px] md:text-[42px] leading-[1.15] mb-4">
        Our partners
      </h1>
      <p className="text-navy text-lg leading-relaxed max-w-[65ch] mb-10">
        {partnersData.intro}
      </p>
      <PartnerWall partners={partnersData.partners} />

      <div className="mt-12 bg-mint rounded-[20px] p-8 max-w-[65ch]">
        <h2 className="text-forest font-semibold text-xl mb-3">Partner with EHCO</h2>
        <p className="text-navy text-lg leading-relaxed">
          We collaborate with grassroots movements, academic institutions, and international youth climate networks.
        </p>
      </div>
    </Section>
  )
}
"""

# 5. ProjectsPage
pages["ProjectsPage.jsx"] = """import Section from '@/components/common/Section'
import Breadcrumbs from '@/components/common/Breadcrumbs'
import ProjectRow from '@/components/projects/ProjectRow'
import projectsData from '@content/projects.json'

export default function ProjectsPage() {
  return (
    <Section bg="white">
      <Breadcrumbs items={[
        { label: 'Our impact', href: '/impact/results' },
        { label: 'Projects' },
      ]} />
      <h1 className="text-forest font-bold text-[32px] md:text-[42px] leading-[1.15] mb-4">
        Projects
      </h1>
      <p className="text-navy text-lg leading-relaxed max-w-[65ch] mb-10">
        Every project below was designed and run by EHCO volunteers, most of them under 25.
      </p>

      {/* Completed projects list */}
      <div>
        {projectsData.projects.map((project) => (
          <ProjectRow key={project.slug} project={project} />
        ))}
      </div>

      {/* In progress projects */}
      {projectsData.inProgress && projectsData.inProgress.length > 0 && (
        <div className="mt-16">
          <h2 className="text-forest font-semibold text-2xl md:text-[32px] leading-[1.2] mb-6">
            In progress
          </h2>
          <div className="space-y-4">
            {projectsData.inProgress.map((item) => (
              <div key={item.slug} className="border-b border-hairline pb-5">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                  <div>
                    <h3 className="text-forest font-medium text-xl">{item.title}</h3>
                    <p className="text-navy text-lg mt-1 max-w-[65ch]">{item.summary}</p>
                  </div>
                  <span className="self-start shrink-0 bg-olive/20 text-navy text-sm font-medium px-3 py-1 rounded-[8px]">
                    {item.progress}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </Section>
  )
}
"""

# 6. ProjectDetailPage
pages["ProjectDetailPage.jsx"] = """import { useParams, Link } from 'react-router-dom'
import Section from '@/components/common/Section'
import Breadcrumbs from '@/components/common/Breadcrumbs'
import FactLine from '@/components/projects/FactLine'
import Button from '@/components/common/Button'
import projectsData from '@content/projects.json'

export default function ProjectDetailPage() {
  const { slug } = useParams()
  const project = projectsData.projects.find(p => p.slug === slug)
  const allProjects = projectsData.projects
  const currentIndex = allProjects.findIndex(p => p.slug === slug)
  const prevProject = currentIndex > 0 ? allProjects[currentIndex - 1] : null
  const nextProject = currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : null

  if (!project) {
    return (
      <Section bg="white">
        <h1 className="text-forest font-bold text-[32px] leading-[1.15]">Project not found</h1>
        <p className="text-navy text-lg mt-4">We could not find that project in our records.</p>
        <Button to="/impact/projects" variant="primary" className="mt-6">View all projects</Button>
      </Section>
    )
  }

  return (
    <Section bg="white">
      <Breadcrumbs items={[
        { label: 'Our impact', href: '/impact/results' },
        { label: 'Projects', href: '/impact/projects' },
        { label: project.title },
      ]} />
      <h1 className="text-forest font-bold text-[32px] md:text-[42px] leading-[1.15] mb-2">
        {project.title}
      </h1>
      <FactLine place={project.place} when={project.when} people={project.people} />

      {/* Hero photo placeholder */}
      <div className="mt-8 aspect-[3/2] bg-mint rounded-[12px] flex items-center justify-center">
        <span className="text-navy/50 text-sm">TODO(EHCO): Project hero photo</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-10">
        {/* Editorial Body: left 7 col */}
        <div className="lg:col-span-7">
          <h2 className="text-forest font-semibold text-2xl mb-3">What happened</h2>
          <p className="text-navy text-lg leading-relaxed max-w-[65ch]">{project.summary}</p>
          <p className="text-navy/70 text-base mt-4">{project.body}</p>

          {project.activities && (
            <div className="mt-8">
              <h2 className="text-forest font-semibold text-2xl mb-3">Activities</h2>
              <ol className="list-decimal pl-6 space-y-2">
                {project.activities.map((a) => (
                  <li key={a} className="text-navy text-lg">{a}</li>
                ))}
              </ol>
            </div>
          )}

          <div className="mt-8">
            <h2 className="text-forest font-semibold text-2xl mb-3">What we learned</h2>
            <p className="text-navy text-lg leading-relaxed max-w-[65ch]">
              TODO(EHCO): Project lessons, data outcomes, and student feedback.
            </p>
          </div>
        </div>

        {/* Facts panel: 4 col, mint background */}
        <div className="lg:col-span-4 lg:col-start-9">
          <div className="bg-mint rounded-[20px] p-6 sticky top-24">
            <h3 className="text-forest font-semibold text-xl mb-4">Project facts</h3>
            <dl className="space-y-4 text-base">
              <div>
                <dt className="text-navy/70 text-sm">Place</dt>
                <dd className="text-navy font-medium text-lg">{project.place}</dd>
              </div>
              <div>
                <dt className="text-navy/70 text-sm">When</dt>
                <dd className="text-navy font-medium text-lg">{project.when}</dd>
              </div>
              <div>
                <dt className="text-navy/70 text-sm">People reached</dt>
                <dd className="text-navy font-medium text-lg">{project.people}</dd>
              </div>
              {project.partners && (
                <div>
                  <dt className="text-navy/70 text-sm">Partners</dt>
                  <dd className="text-navy font-medium text-lg">{project.partners.join(', ')}</dd>
                </div>
              )}
              {project.speaker && (
                <div>
                  <dt className="text-navy/70 text-sm">Speaker</dt>
                  <dd className="text-navy font-medium text-lg">{project.speaker}</dd>
                </div>
              )}
              {project.duration && (
                <div>
                  <dt className="text-navy/70 text-sm">Duration</dt>
                  <dd className="text-navy font-medium text-lg">{project.duration}</dd>
                </div>
              )}
              {project.status && (
                <div>
                  <dt className="text-navy/70 text-sm">Status</dt>
                  <dd className="text-navy font-medium text-lg capitalize">{project.status}</dd>
                </div>
              )}
            </dl>
          </div>
        </div>
      </div>

      {/* Next / previous project links */}
      <div className="mt-16 pt-8 border-t border-hairline flex flex-wrap justify-between gap-4">
        {prevProject ? (
          <Link
            to={`/impact/projects/${prevProject.slug}`}
            className="text-azure underline underline-offset-2 hover:text-azure-hover min-h-[48px] inline-flex items-center text-lg font-medium"
          >
            ← {prevProject.title}
          </Link>
        ) : <span />}
        {nextProject ? (
          <Link
            to={`/impact/projects/${nextProject.slug}`}
            className="text-azure underline underline-offset-2 hover:text-azure-hover min-h-[48px] inline-flex items-center text-lg font-medium"
          >
            {nextProject.title} →
          </Link>
        ) : <span />}
      </div>
    </Section>
  )
}
"""

# 7. ResultsPage
pages["ResultsPage.jsx"] = """import Section from '@/components/common/Section'
import Breadcrumbs from '@/components/common/Breadcrumbs'
import ResultsMap from '@/components/results/ResultsMap'
import ResultsTable from '@/components/results/ResultsTable'
import Ledger from '@/components/common/Ledger'
import impactData from '@content/impact.json'

export default function ResultsPage() {
  return (
    <Section bg="white">
      <Breadcrumbs items={[
        { label: 'Our impact', href: '/impact/projects' },
        { label: 'Results' },
      ]} />
      <h1 className="text-forest font-bold text-[32px] md:text-[42px] leading-[1.15] mb-3">
        Results
      </h1>
      <p className="text-navy text-lg mb-8 max-w-[65ch]">{impactData.description}</p>
      
      {/* Map visual */}
      <ResultsMap />

      {/* Accessible table twin */}
      <div className="mt-14">
        <h2 className="text-forest font-semibold text-2xl md:text-[32px] leading-[1.2] mb-6">
          Project sites table
        </h2>
        <ResultsTable />
      </div>

      {/* Ledger */}
      <div className="mt-14">
        <h2 className="text-forest font-semibold text-2xl md:text-[32px] leading-[1.2] mb-6">
          Key numbers
        </h2>
        <Ledger items={impactData.stats} />
      </div>
    </Section>
  )
}
"""

# 8. ContactPage
pages["ContactPage.jsx"] = """import { useState } from 'react'
import Section from '@/components/common/Section'
import Breadcrumbs from '@/components/common/Breadcrumbs'
import Button from '@/components/common/Button'
import Field from '@/components/form/Field'
import Select from '@/components/form/Select'
import Textarea from '@/components/form/Textarea'
import siteData from '@content/site.json'

const SUBJECT_OPTIONS = [
  { value: 'donating', label: 'Donating' },
  { value: 'joining', label: 'Joining a programme' },
  { value: 'partnering', label: 'Partnering' },
  { value: 'shop', label: 'Eco Shop' },
  { value: 'media', label: 'Media enquiry' },
  { value: 'other', label: 'Other' },
]

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '', _honey: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState(null)

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
    if (errors[e.target.name]) setErrors(prev => ({ ...prev, [e.target.name]: null }))
  }

  const validate = () => {
    const errs = {}
    if (!form.name.trim()) errs.name = 'Please enter your name.'
    if (!form.email.trim()) errs.email = 'Please enter your email address.'
    else if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(form.email)) errs.email = 'Please enter a valid email address.'
    if (!form.message.trim()) errs.message = 'Please enter a message.'
    return errs
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (form._honey) return
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      setStatus('error')
      return
    }
    setStatus('sending')
    try {
      const endpoint = import.meta.env.VITE_FORM_ENDPOINT
      if (endpoint) {
        await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            phone: form.phone,
            subject: form.subject,
            message: form.message
          }),
        })
      }
      setStatus('success')
      setForm({ name: '', email: '', phone: '', subject: '', message: '', _honey: '' })
      setErrors({})
    } catch {
      setStatus('failed')
    }
  }

  return (
    <Section bg="white">
      <Breadcrumbs items={[
        { label: 'Get involved', href: '/get-involved' },
        { label: 'Contact us' },
      ]} />
      <h1 className="text-forest font-bold text-[32px] md:text-[42px] leading-[1.15] mb-6">
        Contact us
      </h1>

      <div className="mb-8 space-y-4">
        <p className="text-navy text-lg">
          Fastest way to reach us:
        </p>
        <Button href={siteData.contact.whatsappLink} variant="primary" target="_blank" rel="noopener noreferrer">
          Message us on WhatsApp
        </Button>
        <p className="text-navy text-lg">
          Or email: <a href={`mailto:${siteData.contact.email}`} className="text-azure underline underline-offset-2 hover:text-azure-hover">{siteData.contact.email}</a>
        </p>
      </div>

      <div className="border-t border-hairline pt-8 max-w-[640px]">
        {/* Accessible status announcements */}
        <div aria-live="polite">
          {status === 'success' && (
            <div className="mb-6 bg-mint rounded-[12px] p-4 text-navy text-lg font-medium" role="status">
              Message sent. We will reply within TODO(EHCO) working days.
            </div>
          )}
          {status === 'failed' && (
            <div className="mb-6 bg-red-50 border border-red-200 rounded-[12px] p-4 text-red-800 text-base" role="alert">
              The message could not be sent. Your text is still preserved above — please try again or email us directly.
            </div>
          )}
          {status === 'error' && (
            <div className="mb-6 bg-red-50 border border-red-200 rounded-[12px] p-4 text-red-800 text-base" role="alert">
              Please fix the errors below and submit again.
            </div>
          )}
        </div>

        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          {/* Honeypot field for bot mitigation */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="_honey">Do not fill this</label>
            <input id="_honey" name="_honey" type="text" value={form._honey} onChange={handleChange} tabIndex={-1} autoComplete="off" />
          </div>

          <Field label="Full name" name="name" required value={form.name} onChange={handleChange} error={errors.name} />
          <Field label="Email address" name="email" type="email" required value={form.email} onChange={handleChange} error={errors.email} />
          <Field label="Phone number (optional)" name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+92 ..." />
          <Select label="I am writing about" name="subject" value={form.subject} onChange={handleChange} options={SUBJECT_OPTIONS} />
          <Textarea label="Message" name="message" required value={form.message} onChange={handleChange} error={errors.message} />

          <Button type="submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending…' : 'Send message'}
          </Button>
        </form>

        <p className="text-navy/70 text-sm mt-6">We reply within TODO(EHCO) working days.</p>
      </div>

      {/* Social channels */}
      <div className="mt-12 pt-8 border-t border-hairline">
        <h2 className="text-forest font-semibold text-xl mb-4">Find us online</h2>
        <ul className="space-y-2 text-base">
          <li>
            <a href={siteData.socials.instagram.url} className="text-azure underline underline-offset-2 hover:text-azure-hover min-h-[48px] inline-flex items-center" target="_blank" rel="noopener noreferrer">
              Instagram {siteData.socials.instagram.handle}
            </a>
          </li>
          <li>
            <a href={siteData.socials.youtube.url} className="text-azure underline underline-offset-2 hover:text-azure-hover min-h-[48px] inline-flex items-center" target="_blank" rel="noopener noreferrer">
              YouTube {siteData.socials.youtube.handle}
            </a>
          </li>
          <li>
            <span className="text-navy/70 min-h-[48px] inline-flex items-center">
              LinkedIn: {siteData.socials.linkedin.url}
            </span>
          </li>
        </ul>
      </div>
    </Section>
  )
}
"""

# 9. DonatePage
pages["DonatePage.jsx"] = """import Section from '@/components/common/Section'
import Breadcrumbs from '@/components/common/Breadcrumbs'
import siteData from '@content/site.json'

export default function DonatePage() {
  return (
    <Section bg="white">
      <Breadcrumbs items={[{ label: 'Donate' }]} />
      <h1 className="text-forest font-bold text-[32px] md:text-[42px] leading-[1.15] mb-4">
        Donate to EHCO
      </h1>
      <p className="text-navy text-lg leading-relaxed max-w-[65ch] mb-10">
        Your donation funds practical climate training in schools, flood preparedness kits, and youth leadership workshops in Lahore.
      </p>

      {/* Donation Amount Selection */}
      <div className="bg-mint rounded-[20px] p-8 max-w-[640px] mb-8">
        <h2 className="text-forest font-semibold text-xl md:text-2xl mb-4">Select an amount</h2>
        <p className="text-navy/70 text-base mb-6">TODO(EHCO): Standard donation tiers to be verified.</p>
        <div className="flex flex-wrap gap-3">
          <span className="bg-white text-navy font-semibold px-6 py-3 rounded-[8px] text-base border border-hairline">PKR 1,000 (unverified)</span>
          <span className="bg-white text-navy font-semibold px-6 py-3 rounded-[8px] text-base border border-hairline">PKR 3,000 (unverified)</span>
          <span className="bg-white text-navy font-semibold px-6 py-3 rounded-[8px] text-base border border-hairline">PKR 5,000 (unverified)</span>
        </div>
      </div>

      {/* Payment methods */}
      <div className="max-w-[640px] mb-8">
        <h2 className="text-forest font-semibold text-xl md:text-2xl mb-4">Payment methods</h2>
        <div className="space-y-4">
          <div className="border border-hairline rounded-[12px] p-5">
            <h3 className="text-navy font-medium text-lg">Bank transfer</h3>
            <p className="text-navy/70 text-base mt-1">TODO(EHCO): Bank name, title, IBAN unverified.</p>
          </div>
          <div className="border border-hairline rounded-[12px] p-5">
            <h3 className="text-navy font-medium text-lg">JazzCash</h3>
            <p className="text-navy/70 text-base mt-1">TODO(EHCO): Account title and mobile number unverified.</p>
          </div>
          <div className="border border-hairline rounded-[12px] p-5">
            <h3 className="text-navy font-medium text-lg">Easypaisa</h3>
            <p className="text-navy/70 text-base mt-1">TODO(EHCO): Account title and mobile number unverified.</p>
          </div>
        </div>
      </div>

      {/* What your donation does */}
      <div className="max-w-[640px] mb-8">
        <h2 className="text-forest font-semibold text-xl md:text-2xl mb-4">What your donation does</h2>
        <div className="space-y-3">
          <p className="text-navy text-lg leading-relaxed">
            Materials for one school workshop: notebooks, measurement kits, printed activity sheets.
          </p>
          <p className="text-navy text-lg leading-relaxed">
            One flood preparedness kit for a family: first aid, waterproof document carrier, water purification supplies.
          </p>
          <p className="text-navy text-lg leading-relaxed">
            Training one student multiplier who goes on to educate 20 to 30 people in their classroom and household.
          </p>
        </div>
      </div>

      {/* Registration info */}
      <div className="bg-mint rounded-[20px] p-8 max-w-[640px] mb-8">
        <h2 className="text-forest font-semibold text-xl mb-3">Registration details</h2>
        <p className="text-navy text-base">{siteData.ngoRegistration}</p>
      </div>

      {/* Questions */}
      <div className="max-w-[640px]">
        <p className="text-navy text-lg">
          Questions about donating? Reach out at{' '}
          <a href={`mailto:${siteData.contact.email}`} className="text-azure underline underline-offset-2 hover:text-azure-hover">
            {siteData.contact.email}
          </a>{' '}
          or on{' '}
          <a href={siteData.contact.whatsappLink} className="text-azure underline underline-offset-2 hover:text-azure-hover" target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>.
        </p>
      </div>
    </Section>
  )
}
"""

# 10. ShopPage
pages["ShopPage.jsx"] = """import { Link } from 'react-router-dom'
import Section from '@/components/common/Section'
import Breadcrumbs from '@/components/common/Breadcrumbs'
import productsData from '@content/products.json'
import { productPath } from '@/routes/paths'

export default function ShopPage() {
  return (
    <Section bg="white">
      <Breadcrumbs items={[{ label: 'Eco Shop' }]} />
      <h1 className="text-forest font-bold text-[32px] md:text-[42px] leading-[1.15] mb-4">
        Eco Shop
      </h1>
      <p className="text-navy text-lg leading-relaxed max-w-[65ch] mb-10">
        {productsData.intro}
      </p>

      {/* Product grid: 2 cols mobile, 3 cols desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {productsData.products.map((product) => (
          <Link
            key={product.slug}
            to={productPath(product.slug)}
            className="group block bg-white border border-hairline rounded-[12px] overflow-hidden hover:shadow-md transition-shadow"
          >
            <div className="aspect-square bg-mint flex items-center justify-center">
              <span className="text-navy/50 text-sm">TODO(EHCO): Product photo</span>
            </div>
            <div className="p-6">
              <h2 className="text-forest font-semibold text-xl group-hover:text-forest-hover">
                {product.name}
              </h2>
              {product.status === 'coming-soon' && (
                <span className="inline-block mt-3 bg-olive/20 text-navy text-sm font-medium px-3 py-1 rounded-[8px]">
                  Coming soon
                </span>
              )}
              {product.price && product.status !== 'coming-soon' && (
                <p className="text-navy font-semibold text-lg mt-3">{product.price}</p>
              )}
            </div>
          </Link>
        ))}
      </div>
    </Section>
  )
}
"""

# 11. ProductDetailPage
pages["ProductDetailPage.jsx"] = """import { useParams } from 'react-router-dom'
import Section from '@/components/common/Section'
import Breadcrumbs from '@/components/common/Breadcrumbs'
import Button from '@/components/common/Button'
import productsData from '@content/products.json'
import siteData from '@content/site.json'

export default function ProductDetailPage() {
  const { slug } = useParams()
  const product = productsData.products.find(p => p.slug === slug)

  if (!product) {
    return (
      <Section bg="white">
        <h1 className="text-forest font-bold text-[32px] leading-[1.15]">Product not found</h1>
        <Button to="/shop" variant="primary" className="mt-6">View all products</Button>
      </Section>
    )
  }

  return (
    <Section bg="white">
      <Breadcrumbs items={[
        { label: 'Eco Shop', href: '/shop' },
        { label: product.name },
      ]} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Photo container */}
        <div className="aspect-square bg-mint rounded-[12px] flex items-center justify-center">
          <span className="text-navy/50 text-base">TODO(EHCO): Product photos</span>
        </div>

        {/* Product info */}
        <div>
          <h1 className="text-forest font-bold text-[32px] md:text-[42px] leading-[1.15] mb-3">
            {product.name}
          </h1>
          {product.status === 'coming-soon' && (
            <span className="inline-block mb-4 bg-olive/20 text-navy text-sm font-medium px-3 py-1 rounded-[8px]">
              Coming soon
            </span>
          )}
          <p className="text-navy text-lg leading-relaxed mb-6">{product.description}</p>
          <dl className="space-y-3 mb-8">
            <div>
              <dt className="text-navy/70 text-sm">Material</dt>
              <dd className="text-navy font-medium text-lg">{product.material}</dd>
            </div>
            {product.price && (
              <div>
                <dt className="text-navy/70 text-sm">Price</dt>
                <dd className="text-navy font-semibold text-2xl">{product.price}</dd>
              </div>
            )}
          </dl>
          <Button
            href={`${siteData.contact.whatsappLink}?text=${encodeURIComponent(`Hi, I am interested in inquiring about ${product.name}`)}`}
            variant="primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Enquire on WhatsApp
          </Button>
        </div>
      </div>
    </Section>
  )
}
"""

# 12. GetInvolvedPage
pages["GetInvolvedPage.jsx"] = """import Section from '@/components/common/Section'
import Breadcrumbs from '@/components/common/Breadcrumbs'
import Button from '@/components/common/Button'

export default function GetInvolvedPage() {
  return (
    <Section bg="white">
      <Breadcrumbs items={[{ label: 'Get involved' }]} />
      <h1 className="text-forest font-bold text-[32px] md:text-[42px] leading-[1.15] mb-6">
        Get involved
      </h1>
      <p className="text-navy text-lg leading-relaxed max-w-[65ch] mb-10">
        There are several ways to support EHCO's climate education and community action in Lahore.
      </p>

      {/* Three unequal panels per spec */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-forest rounded-[20px] p-8 text-white flex flex-col justify-between min-h-[300px] dark-bg">
          <div>
            <h2 className="font-semibold text-2xl mb-3 text-white">Donate</h2>
            <p className="text-mint text-lg leading-relaxed">
              Help fund hands-on school workshops, flood readiness kits, and student audits.
            </p>
          </div>
          <Button to="/donate" className="mt-6 !bg-white !text-forest hover:!bg-mint">
            Donate now
          </Button>
        </div>

        <div className="bg-mint rounded-[20px] p-8 flex flex-col justify-between min-h-[300px]">
          <div>
            <h2 className="text-forest font-semibold text-2xl mb-3">Become a member</h2>
            <p className="text-navy text-lg leading-relaxed">
              Join EHCO as a volunteer. We are currently onboarding for EHCO Ignite 2026.
            </p>
          </div>
          <Button to="/get-involved/membership" variant="secondary" className="mt-6">
            Learn more
          </Button>
        </div>

        <div className="bg-mint rounded-[20px] p-8 flex flex-col justify-between min-h-[300px]">
          <div>
            <h2 className="text-forest font-semibold text-2xl mb-3">Partner with us</h2>
            <p className="text-navy text-lg leading-relaxed">
              Collaborate on school workshops, community resilience, and curriculum development.
            </p>
          </div>
          <Button to="/get-involved/partner" variant="secondary" className="mt-6">
            Partner with us
          </Button>
        </div>
      </div>
    </Section>
  )
}
"""

# 13. MembershipPage
pages["MembershipPage.jsx"] = """import Section from '@/components/common/Section'
import Breadcrumbs from '@/components/common/Breadcrumbs'
import Button from '@/components/common/Button'
import siteData from '@content/site.json'

export default function MembershipPage() {
  return (
    <Section bg="white">
      <Breadcrumbs items={[
        { label: 'Get involved', href: '/get-involved' },
        { label: 'Become a member' },
      ]} />
      <h1 className="text-forest font-bold text-[32px] md:text-[42px] leading-[1.15] mb-4">
        Become a member
      </h1>
      <p className="text-navy text-lg leading-relaxed max-w-[65ch] mb-8">
        EHCO is built by young volunteers who want to make practical changes to climate literacy in Pakistan.
      </p>

      <div className="bg-mint rounded-[20px] p-8 max-w-[640px] mb-8">
        <h2 className="text-forest font-semibold text-2xl mb-3">EHCO Ignite 2026</h2>
        <p className="text-navy text-lg leading-relaxed mb-4">
          Our annual volunteer programme is currently in onboarding. Cohort members lead school sessions, run audits, and coordinate community events.
        </p>
        <p className="text-navy/70 text-sm">TODO(EHCO): Volunteer application process details.</p>
      </div>

      <div className="max-w-[640px] mb-8">
        <h2 className="text-forest font-semibold text-2xl mb-4">What members do</h2>
        <ul className="space-y-3 text-navy text-lg">
          <li className="flex gap-2 items-start">
            <span className="text-olive mt-1.5">•</span>
            <span>Lead hands-on student activities in classrooms</span>
          </li>
          <li className="flex gap-2 items-start">
            <span className="text-olive mt-1.5">•</span>
            <span>Distribute and demonstrate flood preparedness kits</span>
          </li>
          <li className="flex gap-2 items-start">
            <span className="text-olive mt-1.5">•</span>
            <span>Support content for podcast and educational guides</span>
          </li>
        </ul>
      </div>

      <Button
        href={`${siteData.contact.whatsappLink}?text=${encodeURIComponent("Hi, I want to apply for EHCO Ignite 2026")}`}
        variant="primary"
        target="_blank"
        rel="noopener noreferrer"
      >
        Apply on WhatsApp
      </Button>
    </Section>
  )
}
"""

# 14. CareersPage
pages["CareersPage.jsx"] = """import Section from '@/components/common/Section'
import Breadcrumbs from '@/components/common/Breadcrumbs'
import Button from '@/components/common/Button'

export default function CareersPage() {
  return (
    <Section bg="white">
      <Breadcrumbs items={[
        { label: 'Get involved', href: '/get-involved' },
        { label: 'Why work for EHCO' },
      ]} />
      <h1 className="text-forest font-bold text-[32px] md:text-[42px] leading-[1.15] mb-4">
        Why work for EHCO
      </h1>
      <p className="text-navy text-lg leading-relaxed max-w-[65ch] mb-8">
        EHCO is volunteer-led and youth-driven. Joining us gives you direct experience running environmental programmes in communities.
      </p>

      <div className="bg-mint rounded-[20px] p-8 max-w-[640px] mb-8">
        <h2 className="text-forest font-semibold text-2xl mb-3">Current roles</h2>
        <p className="text-navy text-lg leading-relaxed mb-3">
          All team members start as volunteers through EHCO Ignite. Active contributors take on coordination and officer roles as new initiatives launch.
        </p>
        <p className="text-navy/70 text-sm">TODO(EHCO): Listing of active volunteer coordinator roles.</p>
      </div>

      <Button to="/contact" variant="primary">Get in touch</Button>
    </Section>
  )
}
"""

# 15. PartnerWithUsPage
pages["PartnerWithUsPage.jsx"] = """import Section from '@/components/common/Section'
import Breadcrumbs from '@/components/common/Breadcrumbs'
import Button from '@/components/common/Button'
import siteData from '@content/site.json'

export default function PartnerWithUsPage() {
  return (
    <Section bg="white">
      <Breadcrumbs items={[
        { label: 'Get involved', href: '/get-involved' },
        { label: 'Partner with us' },
      ]} />
      <h1 className="text-forest font-bold text-[32px] md:text-[42px] leading-[1.15] mb-4">
        Partner with us
      </h1>
      <p className="text-navy text-lg leading-relaxed max-w-[65ch] mb-8">
        We collaborate with schools, civil society organisations, and local enterprises to multiply the impact of environmental education.
      </p>

      <div className="space-y-6 max-w-[640px] mb-10">
        <div className="border-b border-hairline pb-6">
          <h2 className="text-forest font-medium text-2xl">Schools & campuses</h2>
          <p className="text-navy text-lg mt-2 leading-relaxed">
            Invite EHCO to run plastic audits, waste sorting workshops, or establish student green clubs with hands-on curriculums.
          </p>
        </div>
        <div className="border-b border-hairline pb-6">
          <h2 className="text-forest font-medium text-2xl">NGOs & community networks</h2>
          <p className="text-navy text-lg mt-2 leading-relaxed">
            Collaborate on relief camps, flood kit packaging, and joint advocacy initiatives like Ravi Bachao Tehreek.
          </p>
        </div>
        <div className="border-b border-hairline pb-6">
          <h2 className="text-forest font-medium text-2xl">Businesses & sponsors</h2>
          <p className="text-navy text-lg mt-2 leading-relaxed">
            Support school kit distribution, upcycled product development, or sponsor workshop materials for underprivileged communities.
          </p>
        </div>
      </div>

      <Button href={`mailto:${siteData.contact.email}?subject=${encodeURIComponent("Partnership with EHCO")}`} variant="primary">
        Email our partnerships team
      </Button>
    </Section>
  )
}
"""

# 16. ExpertisePage
pages["ExpertisePage.jsx"] = """import Section from '@/components/common/Section'
import Breadcrumbs from '@/components/common/Breadcrumbs'

export default function ExpertisePage() {
  return (
    <Section bg="white">
      <Breadcrumbs items={[
        { label: 'What we do', href: '/what-we-do/services' },
        { label: 'Our expertise' },
      ]} />
      <h1 className="text-forest font-bold text-[32px] md:text-[42px] leading-[1.15] mb-4">
        Our expertise
      </h1>
      <p className="text-navy text-lg leading-relaxed max-w-[65ch] mb-10">
        Our team combines environmental science, community organizing, and practical workshop design for youth.
      </p>

      <div className="space-y-8 max-w-[65ch]">
        <div>
          <h2 className="text-forest font-semibold text-2xl mb-3">Climate education in classrooms</h2>
          <p className="text-navy text-lg leading-relaxed">
            TODO(EHCO): Curriculum-aligned modules for schools on single-use plastics, air quality, and resource stewardship.
          </p>
        </div>
        <div>
          <h2 className="text-forest font-semibold text-2xl mb-3">Community plastic audits</h2>
          <p className="text-navy text-lg leading-relaxed">
            TODO(EHCO): Audit methodologies tracking gram-level consumption over multi-week participant trials.
          </p>
        </div>
        <div>
          <h2 className="text-forest font-semibold text-2xl mb-3">Disaster resilience & flood response</h2>
          <p className="text-navy text-lg leading-relaxed">
            TODO(EHCO): Grassroots flood kit design, family emergency protocols, and flood relief camp organisation.
          </p>
        </div>
        <div>
          <h2 className="text-forest font-semibold text-2xl mb-3">Youth leadership development</h2>
          <p className="text-navy text-lg leading-relaxed">
            TODO(EHCO): Peer-to-peer multiplier training frameworks for students aged 16 to 25.
          </p>
        </div>
      </div>
    </Section>
  )
}
"""

# 17. ServicesPage
pages["ServicesPage.jsx"] = """import Section from '@/components/common/Section'
import Breadcrumbs from '@/components/common/Breadcrumbs'

export default function ServicesPage() {
  return (
    <Section bg="white">
      <Breadcrumbs items={[
        { label: 'What we do', href: '/what-we-do/expertise' },
        { label: 'Our services and topics' },
      ]} />
      <h1 className="text-forest font-bold text-[32px] md:text-[42px] leading-[1.15] mb-4">
        Our services and topics
      </h1>
      <p className="text-navy text-lg leading-relaxed max-w-[65ch] mb-10">
        We provide structured programmes for schools, youth groups, and partner institutions.
      </p>

      <div className="space-y-6 max-w-[65ch]">
        <div className="border-b border-hairline pb-6">
          <h2 className="text-forest font-medium text-2xl">School workshop sessions</h2>
          <p className="text-navy text-lg mt-2 leading-relaxed">
            Interactive sessions covering waste segregation, cutting plastic footprints, and building simple air quality monitors.
          </p>
        </div>
        <div className="border-b border-hairline pb-6">
          <h2 className="text-forest font-medium text-2xl">Plastic audit campaigns</h2>
          <p className="text-navy text-lg mt-2 leading-relaxed">
            Guided 7-day to 20-day measurement exercises where students weigh household plastic and design reduction strategies.
          </p>
        </div>
        <div className="border-b border-hairline pb-6">
          <h2 className="text-forest font-medium text-2xl">Flood preparedness workshops</h2>
          <p className="text-navy text-lg mt-2 leading-relaxed">
            Community sessions teaching evacuation planning, emergency kit readiness, and hygiene maintenance during monsoon events.
          </p>
        </div>
        <div className="border-b border-hairline pb-6">
          <h2 className="text-forest font-medium text-2xl">Environmental fellowships</h2>
          <p className="text-navy text-lg mt-2 leading-relaxed">
            Cohort programmes like Ehsas-e-Zameen that mentor students through self-directed school greening projects.
          </p>
        </div>
        <div className="border-b border-hairline pb-6">
          <h2 className="text-forest font-medium text-2xl">Digital podcasts & webinars</h2>
          <p className="text-navy text-lg mt-2 leading-relaxed">
            Youth discussions featuring environmental scientists, civic leaders, and youth activists addressing climate realities in Pakistan.
          </p>
        </div>
      </div>
    </Section>
  )
}
"""

# 18. StrategyPage
pages["StrategyPage.jsx"] = """import Section from '@/components/common/Section'
import Breadcrumbs from '@/components/common/Breadcrumbs'

export default function StrategyPage() {
  return (
    <Section bg="white">
      <Breadcrumbs items={[
        { label: 'What we do', href: '/what-we-do/expertise' },
        { label: 'Strategic plan and annual agenda' },
      ]} />
      <h1 className="text-forest font-bold text-[32px] md:text-[42px] leading-[1.15] mb-4">
        Strategic plan and annual agenda
      </h1>
      <p className="text-navy text-lg leading-relaxed max-w-[65ch] mb-10">
        Our multi-year agenda focuses on institutionalizing climate education across government and private schools in Lahore.
      </p>

      {/* Simple dated list per spec 3.6 — no complex charts */}
      <div className="max-w-[65ch]">
        <h2 className="text-forest font-semibold text-2xl mb-6">2026 roadmap</h2>
        <div className="space-y-6">
          <div className="border-b border-hairline pb-6">
            <p className="text-navy/70 text-sm font-semibold">Q1 2026 (January – March)</p>
            <h3 className="text-forest font-medium text-xl mt-1">EHCO Ignite onboarding</h3>
            <p className="text-navy text-lg mt-2">Recruit and train 50 youth volunteer leads for campus outreach.</p>
          </div>
          <div className="border-b border-hairline pb-6">
            <p className="text-navy/70 text-sm font-semibold">Q2 2026 (April – June)</p>
            <h3 className="text-forest font-medium text-xl mt-1">Curriculum guidebook pilot</h3>
            <p className="text-navy text-lg mt-2">Test the climate-integrated teaching guidebook in selected public schools.</p>
          </div>
          <div className="border-b border-hairline pb-6">
            <p className="text-navy/70 text-sm font-semibold">Q3 2026 (July – September)</p>
            <h3 className="text-forest font-medium text-xl mt-1">Monsoon resilience kit drive</h3>
            <p className="text-navy text-lg mt-2">Distribute emergency flood kits in flood-vulnerable zones across Lahore.</p>
          </div>
          <div>
            <p className="text-navy/70 text-sm font-semibold">Q4 2026 (October – December)</p>
            <h3 className="text-forest font-medium text-xl mt-1">Eco-Pots production launch</h3>
            <p className="text-navy text-lg mt-2">Scale upcycled paper planter production with artisan partner networks.</p>
          </div>
        </div>
      </div>
    </Section>
  )
}
"""

# 19. StoriesPage
pages["StoriesPage.jsx"] = """import Section from '@/components/common/Section'
import Breadcrumbs from '@/components/common/Breadcrumbs'

export default function StoriesPage() {
  return (
    <Section bg="white">
      <Breadcrumbs items={[
        { label: 'Our impact', href: '/impact/results' },
        { label: 'Stories' },
      ]} />
      <h1 className="text-forest font-bold text-[32px] md:text-[42px] leading-[1.15] mb-4">
        Stories
      </h1>
      <p className="text-navy text-lg leading-relaxed max-w-[65ch] mb-10">
        Personal accounts from student auditors, workshop participants, and community volunteers across Lahore.
      </p>

      {/* Editorial layout: 1 large feature, then list */}
      <div className="space-y-8 max-w-[700px]">
        <div className="bg-mint rounded-[20px] p-8">
          <span className="text-sm font-medium text-navy/70">Featured student experience</span>
          <h2 className="text-forest font-semibold text-2xl mt-2">
            "Counting every single plastic wrapper opened our eyes"
          </h2>
          <p className="text-navy text-lg mt-3 leading-relaxed">
            During the 20-day Plastic Audit Phase 2, student teams weighed their daily waste and developed alternatives to single-use wrappers.
          </p>
          <p className="text-navy/70 text-sm mt-4">TODO(EHCO): Direct quote and participant attribution.</p>
        </div>

        <div className="border-b border-hairline pb-6">
          <h3 className="text-forest font-medium text-xl">
            Training community responders in Chung
          </h3>
          <p className="text-navy text-lg mt-2 leading-relaxed">
            How young volunteers worked with Al-Khidmat Foundation to prepare children for monsoon flooding risks.
          </p>
          <p className="text-navy/70 text-sm mt-2">TODO(EHCO): Story write-up and verification.</p>
        </div>
      </div>
    </Section>
  )
}
"""

# 20. BlogPage
pages["BlogPage.jsx"] = """import Section from '@/components/common/Section'
import Breadcrumbs from '@/components/common/Breadcrumbs'

export default function BlogPage() {
  return (
    <Section bg="white">
      <Breadcrumbs items={[
        { label: 'Our impact', href: '/impact/results' },
        { label: 'Blogs' },
      ]} />
      <h1 className="text-forest font-bold text-[32px] md:text-[42px] leading-[1.15] mb-4">
        Blog
      </h1>
      <p className="text-navy text-lg leading-relaxed max-w-[65ch] mb-10">
        Articles on climate action, school sustainability, and environmental healthcare in Pakistan.
      </p>

      <div className="space-y-6 max-w-[65ch]">
        <div className="border-b border-hairline pb-6">
          <span className="text-sm text-navy/70">November 2025</span>
          <h2 className="text-forest font-medium text-2xl mt-1">
            Why plastic audits work better than lectures
          </h2>
          <p className="text-navy text-lg mt-2 leading-relaxed">
            When students measure their own footprint in grams, sustainable habits form naturally through tangible data.
          </p>
          <p className="text-navy/70 text-sm mt-3">TODO(EHCO): Article copy.</p>
        </div>

        <div className="border-b border-hairline pb-6">
          <span className="text-sm text-navy/70">October 2025</span>
          <h2 className="text-forest font-medium text-2xl mt-1">
            Conserving the Ravi: World Migratory Bird Day observations
          </h2>
          <p className="text-navy text-lg mt-2 leading-relaxed">
            Reflections from Dr. Atif Yaqub's talk at Kamran Baradari on ecosystem decline and bird transit routes.
          </p>
          <p className="text-navy/70 text-sm mt-3">TODO(EHCO): Article copy.</p>
        </div>
      </div>
    </Section>
  )
}
"""

# 21. ReportsPage
pages["ReportsPage.jsx"] = """import Section from '@/components/common/Section'
import Breadcrumbs from '@/components/common/Breadcrumbs'
import Button from '@/components/common/Button'
import reportsData from '@content/reports.json'

export default function ReportsPage() {
  return (
    <Section bg="white">
      <Breadcrumbs items={[
        { label: 'Our impact', href: '/impact/results' },
        { label: 'Reports and publications' },
      ]} />
      <h1 className="text-forest font-bold text-[32px] md:text-[42px] leading-[1.15] mb-4">
        Reports and publications
      </h1>
      <p className="text-navy text-lg leading-relaxed max-w-[65ch] mb-10">
        Documentation of our project audits, curriculum frameworks, and annual activity summaries.
      </p>

      {/* Table-like list per spec 3.6 */}
      <div className="max-w-[750px] divide-y divide-hairline border-t border-hairline">
        {reportsData.reports.map((report, idx) => (
          <div key={idx} className="py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-navy font-semibold text-lg">{report.title}</h2>
              <p className="text-navy/70 text-sm mt-1">
                {report.year} {report.sizeKB ? `· ${report.sizeKB} KB` : '· Document pending'}
              </p>
            </div>
            {report.file && !report.file.startsWith('TODO') ? (
              <Button href={report.file} variant="secondary" download className="!min-h-[44px] !px-4 !py-2 !text-sm">
                Download PDF
              </Button>
            ) : (
              <span className="text-navy/50 text-sm font-medium">Pending release</span>
            )}
          </div>
        ))}
      </div>
    </Section>
  )
}
"""

# 22. NotFoundPage
pages["NotFoundPage.jsx"] = """import { Link } from 'react-router-dom'
import Section from '@/components/common/Section'
import Button from '@/components/common/Button'

export default function NotFoundPage() {
  return (
    <Section bg="white">
      <div className="text-center max-w-[540px] mx-auto py-12">
        <p className="text-azure text-base font-semibold mb-2">404 error</p>
        <h1 className="text-forest font-bold text-[32px] md:text-[42px] leading-[1.15] mb-4">
          Page not found
        </h1>
        <p className="text-navy text-lg mb-8 leading-relaxed">
          The page you are looking for does not exist or has been moved. Use the links below to find what you need:
        </p>

        <div className="bg-mint rounded-[20px] p-6 text-left max-w-[360px] mx-auto mb-8 space-y-3">
          <Link to="/about" className="block text-azure font-medium text-lg underline underline-offset-2 hover:text-azure-hover min-h-[44px] flex items-center">
            Who we are
          </Link>
          <Link to="/what-we-do/services" className="block text-azure font-medium text-lg underline underline-offset-2 hover:text-azure-hover min-h-[44px] flex items-center">
            What we do
          </Link>
          <Link to="/impact/projects" className="block text-azure font-medium text-lg underline underline-offset-2 hover:text-azure-hover min-h-[44px] flex items-center">
            Our impact
          </Link>
          <Link to="/shop" className="block text-azure font-medium text-lg underline underline-offset-2 hover:text-azure-hover min-h-[44px] flex items-center">
            Eco Shop
          </Link>
          <Link to="/get-involved" className="block text-azure font-medium text-lg underline underline-offset-2 hover:text-azure-hover min-h-[44px] flex items-center">
            Get involved
          </Link>
        </div>

        <Button to="/" variant="primary">Return to home</Button>
      </div>
    </Section>
  )
}
"""

# Write all pages
for filename, content in pages.items():
    filepath = os.path.join(PAGES_DIR, filename)
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content.strip() + "\n")
    print(f"Wrote {filename}")

print("All 22 pages written successfully!")
