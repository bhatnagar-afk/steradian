import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ProjectHero } from '@/components/projects/project-hero'
import { ProjectGallery } from '@/components/projects/project-gallery'
import { ProjectNav } from '@/components/projects/project-nav'
import { StructuredData, breadcrumbSchema, businessId } from '@/components/seo/structured-data'
import { listProjects, getProjectBySlug, getAdjacentProjects } from '@/lib/sanity/projects'
import { getAbsoluteUrl, defaultOgImage } from '@/config/site'
import type { ProjectSummary } from '@/types/project'

// "Hospitality in Moradabad", "Hospitality", "Moradabad" or null, depending on
// which of the two optional fields the project has.
function projectKind(project: ProjectSummary) {
  if (project.category && project.location) return `${project.category} in ${project.location}`
  return project.category ?? project.location
}

export async function generateStaticParams() {
  const projects = await listProjects()
  return projects.map((project) => ({ slug: project.slug }))
}

type ProjectPageProps = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params
  const project = await getProjectBySlug(slug)
  if (!project) return {}

  const kind = projectKind(project)
  const title = kind ? `${project.title} — ${kind}` : project.title
  const description =
    project.description ??
    `${project.title}${kind ? `, ${kind}` : ''}, a project by Steradian Architects.`

  return {
    title,
    description,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title,
      description,
      url: `/projects/${project.slug}`,
      images: [project.heroImage ? { url: project.heroImage } : defaultOgImage],
    },
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = await getProjectBySlug(slug)
  if (!project) notFound()

  const { previous, next } = await getAdjacentProjects(slug)

  const structuredData = [
    {
      '@type': 'CreativeWork',
      name: project.title,
      description: project.description ?? undefined,
      url: getAbsoluteUrl(`/projects/${project.slug}`),
      image: [project.heroImage, ...project.gallery].filter(Boolean),
      genre: project.category ?? undefined,
      locationCreated: project.location ? { '@type': 'Place', name: project.location } : undefined,
      datePublished: project.publishedAt,
      creator: { '@id': businessId },
    },
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Projects', path: '/projects' },
      { name: project.title, path: `/projects/${project.slug}` },
    ]),
  ]

  return (
    <div className="st-page">
      <StructuredData data={structuredData} />
      <ProjectHero project={project} />
      {project.description && (
        <section className="st-project-description">
          <div className="st-wrap">
            <p>{project.description}</p>
          </div>
        </section>
      )}
      <ProjectGallery images={project.gallery} title={project.title} />
      <ProjectNav previous={previous} next={next} />
    </div>
  )
}
