import { sanityClient } from './client'
import { slugify } from '@/lib/slugify'
import type { Project, ProjectSummary } from '@/types/project'

interface RawProjectDoc {
  _createdAt: string
  title: string
  subtitle: string | null
  category: { title: string } | null
  imageUrl: string | null
  additionalImages: string[]
}

const PROJECT_DOC_FIELDS = `
  _createdAt,
  title,
  subtitle,
  "category": category->{ title },
  "imageUrl": image.asset->url,
  "additionalImages": additionalImages[].asset->url
`

async function fetchAllProjectDocs(): Promise<RawProjectDoc[]> {
  const docs: RawProjectDoc[] = await sanityClient.fetch(
    `*[_type == "hero"] | order(_createdAt desc){${PROJECT_DOC_FIELDS}}`,
  )
  return docs || []
}

function toSummary(doc: RawProjectDoc): ProjectSummary {
  return {
    slug: slugify(doc.title),
    title: doc.title,
    category: doc.category?.title ?? null,
    description: doc.subtitle ?? null,
    heroImage: doc.imageUrl ?? null,
    publishedAt: doc._createdAt,
  }
}

export async function listProjects(): Promise<ProjectSummary[]> {
  const docs = await fetchAllProjectDocs()
  return docs.map(toSummary)
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const docs = await fetchAllProjectDocs()
  const match = docs.find((doc) => slugify(doc.title) === slug)
  if (!match) return null
  return { ...toSummary(match), gallery: match.additionalImages || [] }
}

export async function getAdjacentProjects(slug: string): Promise<{
  previous: ProjectSummary | null
  next: ProjectSummary | null
}> {
  const projects = await listProjects()
  const index = projects.findIndex((project) => project.slug === slug)
  if (index === -1) return { previous: null, next: null }
  return {
    previous: projects[index - 1] ?? null,
    next: projects[index + 1] ?? null,
  }
}
