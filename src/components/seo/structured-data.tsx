import { getAbsoluteUrl, siteConfig, socialLinks } from '@/config/site'

type StructuredDataProps = {
  data?: Record<string, unknown> | Record<string, unknown>[]
}

function serializeJsonLd(data: Record<string, unknown> | Record<string, unknown>[]) {
  const jsonLd = Array.isArray(data)
    ? {
        '@context': 'https://schema.org',
        '@graph': data,
      }
    : data

  return JSON.stringify(jsonLd).replace(/</g, '\\u003c')
}

const businessId = `${siteConfig.url}/#business`
const websiteId = `${siteConfig.url}/#website`

export const organizationSchema = {
  '@type': ['LocalBusiness', 'ProfessionalService'],
  '@id': businessId,
  name: siteConfig.name,
  alternateName: [siteConfig.shortName, 'Steradian architect'],
  url: siteConfig.url,
  logo: getAbsoluteUrl('/logo.png'),
  image: getAbsoluteUrl('/home-page-bg.jpeg'),
  description: siteConfig.description,
  foundingDate: siteConfig.foundingYear,
  email: siteConfig.email,
  telephone: siteConfig.phone,
  addresses: [{
    '@type': 'PostalAddress',
    streetAddress: siteConfig.addresses[0].streetAddress,
    addressLocality: siteConfig.addresses[0].addressLocality,
    postalCode: siteConfig.addresses[0].postalCode,
    addressRegion: siteConfig.addresses[0].addressRegion,
    addressCountry: siteConfig.addresses[0].addressCountry,
  },{
    streetAddress: siteConfig.addresses[1].streetAddress,
    addressLocality: siteConfig.addresses[1].addressLocality,
    postalCode: siteConfig.addresses[1].postalCode,
    addressRegion: siteConfig.addresses[1].addressRegion,
    addressCountry: siteConfig.addresses[1].addressCountry,
  }],
  areaServed: siteConfig.areaServed.map((name) => ({
    '@type': 'Place',
    name,
  })),
  knowsAbout: [
    'Architecture',
    'Architect-led design and build',
    'Residential architecture',
    'Institutional architecture',
    'Hotel architecture',
    'Religious architecture',
    'Community architecture',
  ],
  sameAs: socialLinks,
}

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

export function StructuredData({ data = [organizationSchema, websiteSchema] }: StructuredDataProps) {
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
