import { StructuredData } from '@/components/seo/structured-data'
import { getAbsoluteUrl, siteConfig } from '@/config/site'

export const HomeSchema = () => {
  const homePageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': getAbsoluteUrl('/#webpage'),
    url: siteConfig.url,
    name: `${siteConfig.name} - Architecture Firm in Moradabad`,
    description: siteConfig.description,
    isPartOf: {
      '@id': `${siteConfig.url}/#website`,
    },
    about: {
      '@id': `${siteConfig.url}/#business`,
    },
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: getAbsoluteUrl('/home-page-bg.jpeg'),
    },
    inLanguage: 'en-IN',
  }

  return (
    <StructuredData data={homePageSchema} />
  )
}
