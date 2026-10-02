import {
  getAbsoluteUrl,
  principals,
  siteConfig,
  socialLinks,
  type StudioAddress,
} from '@/config/site'
import { services } from '@/content/services'
import type { Faq, ServicePage } from '@/content/types'

type JsonLd = Record<string, unknown>

type StructuredDataProps = {
  data?: JsonLd | JsonLd[]
}

function serializeJsonLd(data: JsonLd | JsonLd[]) {
  const jsonLd = Array.isArray(data)
    ? {
        '@context': 'https://schema.org',
        '@graph': data,
      }
    : data

  return JSON.stringify(jsonLd).replace(/</g, '\\u003c')
}

export const businessId = `${siteConfig.url}/#business`
export const websiteId = `${siteConfig.url}/#website`

const [headOffice, ...otherStudios] = siteConfig.addresses

const areaServed = [
  ...siteConfig.areaServed.cities.map((name) => ({ '@type': 'City', name })),
  ...siteConfig.areaServed.states.map((name) => ({ '@type': 'State', name })),
]

// Location details shared by every studio. Optional fields are left out
// entirely (JSON.stringify drops undefined) rather than emitted empty.
function studioLocation(studio: StudioAddress) {
  return {
    address: {
      '@type': 'PostalAddress',
      streetAddress: studio.streetAddress,
      addressLocality: studio.addressLocality,
      postalCode: studio.postalCode,
      addressRegion: studio.addressRegion,
      addressCountry: studio.addressCountry,
    },
    geo: studio.geo && { '@type': 'GeoCoordinates', ...studio.geo },
    hasMap: studio.mapUrl,
    openingHours: studio.openingHours,
  }
}

const people = principals.map((person) => ({
  '@type': 'Person',
  name: person.name.replace(/^Ar\.\s*/, ''),
  honorificPrefix: 'Ar.',
  jobTitle: person.role,
  worksFor: { '@id': businessId },
  alumniOf: person.alumniOf && { '@type': 'CollegeOrUniversity', name: person.alumniOf },
  sameAs: [person.linkedin],
}))

export const organizationSchema = {
  '@type': ['LocalBusiness', 'ProfessionalService'],
  '@id': businessId,
  name: siteConfig.name,
  alternateName: [siteConfig.shortName, 'Steradian architect'],
  url: siteConfig.url,
  logo: getAbsoluteUrl('/logo.png'),
  image: getAbsoluteUrl('/opengraph-image'),
  description: siteConfig.description,
  slogan: siteConfig.tagline,
  foundingDate: siteConfig.foundingYear,
  email: siteConfig.email,
  telephone: siteConfig.telephoneHref,
  ...studioLocation(headOffice),
  areaServed,
  founder: people[0],
  employee: people,
  knowsAbout: [
    'Architecture',
    'Interior design',
    'Architect-led design and build',
    'Landscape design',
    'Site planning',
    'Residential architecture',
    'Institutional architecture',
    'Hotel architecture',
    'Religious architecture',
    'Community architecture',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Services',
    itemListElement: services.map((service) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: service.name,
        description: service.summary,
        url: getAbsoluteUrl(`/services/${service.slug}`),
      },
    })),
  },
  sameAs: socialLinks,
}

const studioSchemas = otherStudios.map((studio) => ({
  '@type': ['LocalBusiness', 'ProfessionalService'],
  '@id': `${siteConfig.url}/#${studio.id}`,
  name: `${siteConfig.name} — ${studio.addressLocality}`,
  url: siteConfig.url,
  image: getAbsoluteUrl('/opengraph-image'),
  email: siteConfig.email,
  telephone: siteConfig.telephoneHref,
  ...studioLocation(studio),
  parentOrganization: { '@id': businessId },
}))

export const websiteSchema = {
  '@type': 'WebSite',
  '@id': websiteId,
  name: siteConfig.name,
  alternateName: siteConfig.shortName,
  url: siteConfig.url,
  publisher: {
    '@id': businessId,
  },
  inLanguage: 'en-IN',
}

export function faqSchema(faqs: Faq[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  }
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: getAbsoluteUrl(item.path),
    })),
  }
}

export function serviceSchema(service: ServicePage) {
  return {
    '@type': 'Service',
    name: service.name,
    serviceType: service.name,
    description: service.metaDescription,
    url: getAbsoluteUrl(`/services/${service.slug}`),
    provider: { '@id': businessId },
    areaServed,
  }
}

export function StructuredData({
  data = [organizationSchema, ...studioSchemas, websiteSchema],
}: StructuredDataProps) {
  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{
        __html: serializeJsonLd(data),
      }}
    />
  )
}
