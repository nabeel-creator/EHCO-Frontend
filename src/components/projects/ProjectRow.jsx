import { Link } from 'react-router-dom'
import { projectPath } from '../../routes/paths'
import ImagePlaceholder from '../common/ImagePlaceholder'

export default function ProjectRow({ project }) {
  return (
    <div className="bg-white rounded-2xl p-4 sm:p-5 border border-[#E5EAE4] hover:border-[#064D3B]/40 hover:shadow-sm mb-4 grid grid-cols-1 md:grid-cols-12 gap-5 items-center transition-all duration-200 group">
      {/* Project Photo (4 cols) */}
      <div className="md:col-span-4">
        <Link to={projectPath(project.slug)} className="block overflow-hidden rounded-xl border border-[#E5EAE4]">
          <ImagePlaceholder
            id={`PROJ_${project.slug.toUpperCase().replace(/-/g, '_')}`}
            label={project.title}
            description={`Field documentary photo of ${project.title} in Lahore.`}
            aspectRatio="16/10"
            dimensions="600 × 375"
            rounded="rounded-xl"
            className="w-full transition-transform duration-300 group-hover:scale-105"
          />
        </Link>
      </div>

      {/* Project Info (8 cols) */}
      <div className="md:col-span-8 flex flex-col justify-between">
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-1.5">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#064D3B] bg-[#E7EDE5] px-2.5 py-0.5 rounded-md">
              {project.status === 'completed' ? 'Case Study' : 'In Progress'}
            </span>
            <span className="text-[11px] text-[#738078]">
              {project.place} · {project.when || '2025'}
            </span>
          </div>

          <h3 className="text-base sm:text-lg font-bold text-[#064D3B] group-hover:text-[#04392B] leading-snug mb-1.5">
            <Link to={projectPath(project.slug)}>
              {project.title}
            </Link>
          </h3>

          <p className="text-xs sm:text-sm text-[#738078] leading-relaxed line-clamp-2">
            {project.summary}
          </p>
        </div>

        <div className="mt-3 pt-2.5 border-t border-[#E5EAE4] flex items-center justify-between">
          <Link
            to={projectPath(project.slug)}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#064D3B] hover:text-[#04392B] group/link"
          >
            <span>Read More</span>
            <span className="transition-transform group-link:translate-x-0.5">→</span>
          </Link>

          {project.people && (
            <span className="text-[11px] text-[#738078]">
              Reach: <strong className="text-[#173D2D]">{project.people}</strong>
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
