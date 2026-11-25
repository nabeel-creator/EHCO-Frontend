import PageBanner from '@/components/common/PageBanner'
import Section from '@/components/common/Section'
import ProjectRow from '@/components/projects/ProjectRow'
import projectsData from '@content/projects.json'

export default function ProjectsPage() {
  return (
    <>
      <PageBanner
        title="Case Studies"
        breadcrumbs={[{ label: 'Case Studies' }]}
      />

      <Section bg="white" className="py-8 sm:py-12">
        <div className="max-w-4xl mx-auto">
          {/* Completed Initiatives */}
          <div className="space-y-4">
            {projectsData.projects.map((project) => (
              <ProjectRow key={project.slug} project={project} />
            ))}
          </div>

          {/* In Progress Initiatives */}
          {projectsData.inProgress && projectsData.inProgress.length > 0 && (
            <div className="mt-10 pt-8 border-t border-[#E5EAE4]">
              <h3 className="text-lg sm:text-xl font-extrabold text-[#064D3B] mb-4">
                Ongoing Initiatives
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {projectsData.inProgress.map((item) => (
                  <div
                    key={item.slug}
                    className="bg-[#F5F6F1] rounded-2xl p-4 border border-[#E5EAE4]"
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[11px] font-bold uppercase text-[#064D3B]">
                        Active Field Work
                      </span>
                      <span className="text-[11px] font-mono font-bold text-[#064D3B] bg-[#C9F15B]/40 px-2 py-0.5 rounded">
                        {item.progress}
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-[#064D3B] mb-1">{item.title}</h4>
                    <p className="text-xs text-[#738078] leading-relaxed line-clamp-2">{item.summary}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </Section>
    </>
  )
}
