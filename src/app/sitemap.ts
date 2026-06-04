import type { MetadataRoute } from 'next'
import { getAbsoluteUrl } from '@/config/site'

const routes = [
  { path: '/', priority: 1 },
  { path: '/about', priority: 0.8 },
  { path: '/contact', priority: 0.7 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return routes.map((route) => ({
    url: getAbsoluteUrl(route.path),
    lastModified,
    changeFrequency: 'monthly',
    priority: route.priority,
  }))
}
