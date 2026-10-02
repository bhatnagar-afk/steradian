import type { MetadataRoute } from 'next'
import { getAbsoluteUrl } from '@/config/site'
import { services } from '@/content/services'
import { locations } from '@/content/locations'
import { listProjects } from '@/lib/sanity/projects'
import { safeFetch } from '@/lib/safe-fetch'

const staticRoutes = [
  { path: '/', priority: 1 },
  { path: '/services', priority: 0.9 },
  { path: '/about', priority: 0.8 },
  { path: '/projects', priority: 0.8 },
  { path: '/contact', priority: 0.7 },
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const projects = await safeFetch(() => listProjects(), [])
  const contentPages = [
    ...services.map((service) => ({ path: `/services/${service.slug}`, updatedAt: service.updatedAt })),
    ...locations.map((location) => ({ path: `/architects/${location.slug}`, updatedAt: location.updatedAt })),
  ]

  // Static pages change when their copy or the project list does, so they
  // take the newest of those dates rather than the time of the build.
  const lastModified = new Date(
    Math.max(
      ...contentPages.map((page) => Date.parse(page.updatedAt)),
      ...projects.map((project) => Date.parse(project.publishedAt)),
    ),
  )

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: getAbsoluteUrl(route.path),
    lastModified,
    changeFrequency: 'monthly',
    priority: route.priority,
  }))

  const contentEntries: MetadataRoute.Sitemap = contentPages.map((page) => ({
    url: getAbsoluteUrl(page.path),
    lastModified: new Date(page.updatedAt),
    changeFrequency: 'monthly',
    priority: 0.9,
  }))

  const projectEntries: MetadataRoute.Sitemap = projects.map((project) => ({
    url: getAbsoluteUrl(`/projects/${project.slug}`),
    lastModified: new Date(project.publishedAt),
    changeFrequency: 'yearly',
    priority: 0.6,
  }))

  return [...staticEntries, ...contentEntries, ...projectEntries]
}
