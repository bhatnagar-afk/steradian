import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ProjectHero } from '@/components/projects/project-hero'
import { ProjectGallery } from '@/components/projects/project-gallery'
import { ProjectNav } from '@/components/projects/project-nav'
import { StructuredData } from '@/components/seo/structured-data'
import { listProjects, getProjectBySlug, getAdjacentProjects } from '@/lib/sanity/projects'
import { getAbsoluteUrl } from '@/config/site'

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

  const title = project.category ? `${project.title} — ${project.category}` : project.title
  const description =
    project.description ??
    `${project.title}, an architecture project by Steradian Architects.`

  return {
    title: project.title,
    description,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title,
      description,
      url: `/projects/${project.slug}`,
      images: project.heroImage ? [{ url: project.heroImage }] : undefined,
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
      image: project.heroImage ?? undefined,
      creator: { '@id': getAbsoluteUrl('/#business') },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Projects', item: getAbsoluteUrl('/projects') },
        {
          '@type': 'ListItem',
          position: 2,
          name: project.title,
          item: getAbsoluteUrl(`/projects/${project.slug}`),
        },
      ],
    },
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
