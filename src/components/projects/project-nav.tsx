import Link from 'next/link'
import type { ProjectSummary } from '@/types/project'

type ProjectNavProps = {
  previous: ProjectSummary | null
  next: ProjectSummary | null
}

export function ProjectNav({ previous, next }: ProjectNavProps) {
  if (!previous && !next) return null

  return (
    <nav className="st-project-nav" aria-label="More projects">
      {previous ? (
        <Link href={`/projects/${previous.slug}`} className="st-project-nav-link">
          <span className="st-eyebrow st-eyebrow--on-ink">Previous</span>
          <strong>{previous.title}</strong>
        </Link>
      ) : (
        <span />
      )}
      {next ? (
        <Link
          href={`/projects/${next.slug}`}
          className="st-project-nav-link st-project-nav-link--next"
        >
          <span className="st-eyebrow st-eyebrow--on-ink">Next</span>
          <strong>{next.title}</strong>
        </Link>
      ) : (
        <span />
      )}
    </nav>
  )
}
