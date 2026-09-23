import type { MetadataRoute } from 'next'
import { getAbsoluteUrl } from '@/config/site'
import { listProjects } from '@/lib/sanity/projects'
import { safeFetch } from '@/lib/safe-fetch'

const staticRoutes = [
  { path: '/', priority: 1 },
  { path: '/about', priority: 0.8 },
  { path: '/projects', priority: 0.8 },
  { path: '/contact', priority: 0.7 },
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = new Date()
  const projects = await safeFetch(() => listProjects(), [])

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: getAbsoluteUrl(route.path),
    lastModified,
    changeFrequency: 'monthly',
    priority: route.priority,
  }))

  const projectEntries: MetadataRoute.Sitemap = projects.map((project) => ({
    url: getAbsoluteUrl(`/projects/${project.slug}`),
    lastModified: new Date(project.publishedAt),
    changeFrequency: 'yearly',
    priority: 0.6,
  }))

  return [...staticEntries, ...projectEntries]
}
