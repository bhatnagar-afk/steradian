import { ProjectCard } from './project-card'
import type { ProjectSummary } from '@/types/project'

export function ProjectGrid({ projects }: { projects: ProjectSummary[] }) {
  if (!projects.length) {
    return <p className="st-project-grid-empty">No projects in this category yet — check back soon.</p>
  }

  return (
    <div className="st-project-grid">
      {projects.map((project, i) => (
        <ProjectCard key={project.slug} project={project} index={i} />
      ))}
    </div>
  )
}
