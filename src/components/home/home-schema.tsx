import { StructuredData, faqSchema } from '@/components/seo/structured-data'
import { homeFaqs } from '@/content/home-faqs'
import { getAbsoluteUrl, siteConfig } from '@/config/site'

export const HomeSchema = () => {
  const homePageSchema = {
    '@type': 'WebPage',
    '@id': getAbsoluteUrl('/#webpage'),
    url: siteConfig.url,
    name: `${siteConfig.name} — Architects & Interior Designers in Moradabad`,
    description: siteConfig.description,
    isPartOf: {
      '@id': `${siteConfig.url}/#website`,
    },
    about: {
      '@id': `${siteConfig.url}/#business`,
    },
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: getAbsoluteUrl('/opengraph-image'),
    },
    inLanguage: 'en-IN',
  }

  return (
    <StructuredData data={[homePageSchema, faqSchema(homeFaqs)]} />
  )
}
