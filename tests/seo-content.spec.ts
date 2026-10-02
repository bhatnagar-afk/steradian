import { describe, it, expect } from 'vitest'
import { services } from '../src/content/services'
import { locations } from '../src/content/locations'

const pages = [
  ...services.map((page) => ({ ...page, path: `/services/${page.slug}` })),
  ...locations.map((page) => ({ ...page, path: `/architects/${page.slug}` })),
]

describe('service and location pages are fit to be indexed', () => {
  it('have unique slugs, titles and descriptions', () => {
    for (const key of ['path', 'metaTitle', 'metaDescription', 'h1'] as const) {
      const values = pages.map((page) => page[key])
      expect(new Set(values).size, `duplicate ${key}`).toBe(values.length)
    }
  })

  for (const page of pages) {
    describe(page.path, () => {
      it('has a title that fits in a search result', () => {
        expect(page.metaTitle.length).toBeLessThanOrEqual(60)
      })

      it('has a description that fits in a search result', () => {
        expect(page.metaDescription.length).toBeGreaterThanOrEqual(70)
        expect(page.metaDescription.length).toBeLessThanOrEqual(160)
      })

      it('has enough body copy and questions to stand on its own', () => {
        expect(page.sections.length).toBeGreaterThanOrEqual(3)
        expect(page.faqs.length).toBeGreaterThanOrEqual(3)
      })

      it('has a valid updatedAt date', () => {
        expect(Number.isNaN(Date.parse(page.updatedAt))).toBe(false)
      })
    })
  }

  it('only cross-link to pages that exist', () => {
    const serviceSlugs = services.map((service) => service.slug)
    const locationSlugs = locations.map((location) => location.slug)
    for (const service of services) {
      for (const slug of service.relatedLocations) expect(locationSlugs).toContain(slug)
    }
    for (const location of locations) {
      for (const slug of location.relatedServices) expect(serviceSlugs).toContain(slug)
    }
  })
})
