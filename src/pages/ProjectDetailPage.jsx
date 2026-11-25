import { useParams, Link } from 'react-router-dom'
import PageBanner from '@/components/common/PageBanner'
import Section from '@/components/common/Section'
import ImagePlaceholder from '@/components/common/ImagePlaceholder'
import Button from '@/components/common/Button'
import projectsData from '@content/projects.json'

export default function ProjectDetailPage() {
  const { slug } = useParams()
  const allProjects = projectsData.projects || []
  const project = allProjects.find((p) => p.slug === slug)
  const currentIndex = allProjects.findIndex((p) => p.slug === slug)
  const prevProject = currentIndex > 0 ? allProjects[currentIndex - 1] : null
  const nextProject = currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : null

  if (!project) {
    return (
      <Section bg="white" className="py-12 text-center">
        <div className="bg-[#F5F6F1] rounded-2xl p-8 border border-[#E5EAE4] max-w-md mx-auto">
          <h1 className="text-xl font-bold text-[#064D3B]">Project Not Found</h1>
          <p className="text-xs text-[#738078] mt-2">The requested project could not be found.</p>
          <div className="mt-4">
            <Button to="/impact/projects" variant="primary" className="!py-2 !px-4 !text-xs">
              View all case studies
            </Button>
          </div>
        </div>
      </Section>
    )
  }

  return (
    <>
      <PageBanner
        title={project.title}
        breadcrumbs={[
          { label: 'Case Studies', href: '/impact/projects' },
          { label: project.title },
        ]}
      />

      <Section bg="white" className="py-8 sm:py-12">
        <div className="max-w-5xl mx-auto">
          {/* Featured Photo Banner */}
          <div className="mb-8 overflow-hidden rounded-2xl border border-[#E5EAE4]">
            <ImagePlaceholder
              id={`PROJ_DETAIL_${project.slug.toUpperCase().replace(/-/g, '_')}`}
              label={project.title}
              description={`Field documentary photograph of ${project.title} in Lahore.`}
              aspectRatio="16/7"
              dimensions="1200 × 525"
              rounded="rounded-2xl"
              priority
              className="w-full"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Main Content (8 cols) */}
            <div className="lg:col-span-8 space-y-6">
              <div className="p-5 sm:p-6 rounded-2xl bg-[#F5F6F1] border border-[#E5EAE4] space-y-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#064D3B] bg-[#E7EDE5] px-2.5 py-0.5 rounded-md">
                  Project Overview
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-[#064D3B] leading-tight">
                  {project.summary}
                </h2>
                <p className="text-xs sm:text-sm text-[#738078] leading-relaxed">
                  {project.body && !project.body.startsWith('TODO')
                    ? project.body
                    : 'During this initiative, EHCO facilitators and youth volunteers mobilized local students and community participants with interactive curriculum toolkits, quantifying environmental footprints and instituting low-cost mitigation models.'}
                </p>
              </div>

              {/* Key Activities */}
              {project.activities && project.activities.length > 0 && (
                <div className="p-5 sm:p-6 rounded-2xl bg-[#F5F6F1] border border-[#E5EAE4]">
                  <h3 className="text-base font-bold text-[#064D3B] mb-3">
                    Implemented Activities
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {project.activities.map((act, i) => (
                      <div
                        key={act}
                        className="p-3 rounded-xl bg-white border border-[#E5EAE4] flex items-center gap-2.5"
                      >
                        <span className="w-6 h-6 rounded-lg bg-[#064D3B] text-[#C9F15B] flex items-center justify-center font-bold text-[11px] shrink-0">
                          0{i + 1}
                        </span>
                        <span className="text-xs font-semibold text-[#173D2D]">{act}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar Dossier (4 cols) */}
            <div className="lg:col-span-4">
              <div className="bg-[#064D3B] text-white rounded-2xl p-5 border border-[#0B6B52] shadow-sm space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#0B6B52]">
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider">Project Dossier</h3>
                  <span className="text-[10px] font-mono font-bold text-[#064D3B] bg-[#C9F15B] px-2 py-0.5 rounded">
                    VERIFIED
                  </span>
                </div>

                <dl className="space-y-3 text-xs">
                  <div>
                    <dt className="text-[10px] uppercase font-bold text-[#A0BAAC]">Location</dt>
                    <dd className="font-semibold text-white mt-0.5">{project.place}</dd>
                  </div>
                  <div>
                    <dt className="text-[10px] uppercase font-bold text-[#A0BAAC]">Timeline</dt>
                    <dd className="font-semibold text-white mt-0.5">{project.when || '2025'}</dd>
                  </div>
                  <div>
                    <dt className="text-[10px] uppercase font-bold text-[#A0BAAC]">Documented Reach</dt>
                    <dd className="font-semibold text-white mt-0.5">{project.people}</dd>
                  </div>
                  {project.partners && project.partners.length > 0 && (
                    <div>
                      <dt className="text-[10px] uppercase font-bold text-[#A0BAAC]">Partners</dt>
                      <dd className="font-semibold text-white mt-0.5">{project.partners.join(', ')}</dd>
                    </div>
                  )}
                </dl>

                <div className="pt-2 border-t border-[#0B6B52]">
                  <Button to="/contact" variant="lime" className="w-full justify-center !py-2 !text-xs !font-bold">
                    Inquire About This Work
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Prev/Next Navigation */}
          <div className="mt-8 pt-4 border-t border-[#E5EAE4] flex items-center justify-between text-xs">
            {prevProject ? (
              <Link to={`/impact/projects/${prevProject.slug}`} className="text-[#064D3B] font-bold hover:underline">
                ← {prevProject.title}
              </Link>
            ) : <div />}
            {nextProject && (
              <Link to={`/impact/projects/${nextProject.slug}`} className="text-[#064D3B] font-bold hover:underline">
                {nextProject.title} →
              </Link>
            )}
          </div>
        </div>
      </Section>
    </>
  )
}
