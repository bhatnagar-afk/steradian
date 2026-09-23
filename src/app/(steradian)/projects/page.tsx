import type { Metadata } from 'next'
import { PageHeader } from '@/components/site/page-header'
import { CategoryFilter } from '@/components/projects/category-filter'
import { ProjectGrid } from '@/components/projects/project-grid'
import { StructuredData } from '@/components/seo/structured-data'
import { listProjects } from '@/lib/sanity/projects'
import { listCategories } from '@/lib/sanity/categories'
import { safeFetch } from '@/lib/safe-fetch'
import { slugify } from '@/lib/slugify'
import { getAbsoluteUrl, siteConfig } from '@/config/site'

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'A portfolio of architecture, interiors and design-build projects by Steradian Architects — residences, institutions, hospitality and community buildings across Moradabad, Greater Noida and Uttar Pradesh.',
  alternates: { canonical: '/projects' },
  openGraph: {
    title: 'Projects — Steradian Architects',
    description:
      'Selected architecture, interiors and design-build work from Moradabad and Greater Noida, Uttar Pradesh.',
    url: '/projects',
  },
}

type ProjectsPageProps = {
  searchParams: Promise<{ category?: string }>
}

export default async function ProjectsPage({ searchParams }: ProjectsPageProps) {
  const { category: activeSlug } = await searchParams
  const [allProjects, categories] = await Promise.all([
    safeFetch(() => listProjects(), []),
    safeFetch(() => listCategories(), []),
  ])

  const projects = activeSlug
    ? allProjects.filter((project) => project.category && slugify(project.category) === activeSlug)
    : allProjects

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: projects.map((project, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      url: getAbsoluteUrl(`/projects/${project.slug}`),
      name: project.title,
    })),
  }

  return (
    <div className="st-page">
      <StructuredData data={itemListSchema} />
      <PageHeader
        eyebrow="Selected Work"
        title="Projects"
        description={`Architecture, interiors and design-build work from ${siteConfig.addresses.map((a) => a.addressLocality).join(' and ')}, Uttar Pradesh.`}
      />
      <section className="st-project-listing">
        <div className="st-wrap">
          <CategoryFilter categories={categories} activeSlug={activeSlug} />
          <ProjectGrid projects={projects} />
        </div>
      </section>
    </div>
  )
}
