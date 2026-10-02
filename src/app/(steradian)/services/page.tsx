import type { Metadata } from 'next'
import { PageHeader } from '@/components/site/page-header'
import { LinkList } from '@/components/site/link-list'
import { ContactSection } from '@/components/contact/contact-section'
import { StructuredData, breadcrumbSchema } from '@/components/seo/structured-data'
import { services } from '@/content/services'
import { locations } from '@/content/locations'
import { defaultOgImage } from '@/config/site'

const title = 'Architecture & Interior Design Services | Steradian'
const description =
  'Architecture, interior design, landscape and planning, and architect-led design-build from Steradian Architects in Moradabad and Greater Noida, Uttar Pradesh.'

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: '/services' },
  openGraph: { title, description, url: '/services', images: [defaultOgImage] },
}

export default function ServicesPage() {
  return (
    <div className="st-page">
      <StructuredData
        data={[
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services' },
          ]),
        ]}
      />
      <PageHeader eyebrow="Services" title="What We Do" description={description} />
      <LinkList
        eyebrow="Services"
        title="Four ways to work with us"
        links={services.map((service) => ({
          href: `/services/${service.slug}`,
          label: service.name,
          description: service.summary,
        }))}
      />
      <LinkList
        eyebrow="Where we work"
        title="Areas we serve"
        links={locations.map((location) => ({
          href: `/architects/${location.slug}`,
          label: location.name,
          description: location.metaDescription,
        }))}
      />
      <ContactSection />
    </div>
  )
}
