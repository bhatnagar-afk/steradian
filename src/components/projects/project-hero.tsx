import { MediaFrame } from '@/components/ui/media-frame'
import { ResidenceIllustration } from '@/components/illustrations'
import type { Project } from '@/types/project'

export function ProjectHero({ project }: { project: Project }) {
  return (
    <header className="st-project-hero">
      <div className="st-project-hero-media">
        <MediaFrame
          src={project.heroImage}
          alt={project.title}
          illustration={<ResidenceIllustration />}
          sizes="100vw"
          priority
        />
      </div>
      <div className="st-project-hero-veil" aria-hidden="true" />
      <div className="st-wrap st-project-hero-content">
        {project.category && <p className="st-eyebrow st-eyebrow--on-ink">{project.category}</p>}
        <h1>{project.title}</h1>
      </div>
    </header>
  )
}
