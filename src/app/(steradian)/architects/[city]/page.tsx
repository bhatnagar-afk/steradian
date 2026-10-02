import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { PageHeader } from '@/components/site/page-header'
import { ProseSection } from '@/components/site/prose-section'
import { LinkList } from '@/components/site/link-list'
import { FaqList } from '@/components/seo/faq-list'
import { ProjectGrid } from '@/components/projects/project-grid'
import { ContactSection } from '@/components/contact/contact-section'
import {
  StructuredData,
  breadcrumbSchema,
  businessId,
  faqSchema,
  websiteId,
} from '@/components/seo/structured-data'
import { locations, getLocation } from '@/content/locations'
import { services } from '@/content/services'
import { listProjects } from '@/lib/sanity/projects'
import { safeFetch } from '@/lib/safe-fetch'
import { getAbsoluteUrl, defaultOgImage } from '@/config/site'

export const dynamicParams = false

export function generateStaticParams() {
  return locations.map((location) => ({ city: location.slug }))
}

type LocationPageProps = {
  params: Promise<{ city: string }>
}

export async function generateMetadata({ params }: LocationPageProps): Promise<Metadata> {
  const { city } = await params
  const location = getLocation(city)
  if (!location) return {}

  const url = `/architects/${location.slug}`
  return {
    title: { absolute: location.metaTitle },
    description: location.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: location.metaTitle,
      description: location.metaDescription,
      url,
      images: [defaultOgImage],
    },
  }
}

export default async function LocationPage({ params }: LocationPageProps) {
  const { city } = await params
  const location = getLocation(city)
  if (!location) notFound()

  const url = `/architects/${location.slug}`
  const allProjects = await safeFetch(() => listProjects(), [])
  // Prefer work built in this area; until projects carry a location in Sanity
  // (or when none match) fall back to the most recent work.
  const places = location.places.map((place) => place.toLowerCase())
  const localProjects = allProjects.filter(
    (project) => project.location && places.some((place) => project.location!.toLowerCase().includes(place)),
  )
  const projects = (localProjects.length ? localProjects : allProjects).slice(0, 3)

  const relatedServices = services.filter((service) =>
    location.relatedServices.includes(service.slug),
  )

  return (
    <div className="st-page">
      <StructuredData
        data={[
          {
            '@type': 'WebPage',
            '@id': `${getAbsoluteUrl(url)}#webpage`,
            url: getAbsoluteUrl(url),
            name: location.h1,
            description: location.metaDescription,
            isPartOf: { '@id': websiteId },
            about: { '@id': businessId },
            inLanguage: 'en-IN',
          },
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: location.h1, path: url },
          ]),
          faqSchema(location.faqs),
        ]}
      />
      <PageHeader eyebrow={location.eyebrow} title={location.h1} />
      <ProseSection intro={location.intro} sections={location.sections} />
      {projects.length > 0 && (
        <section className="st-related-work" aria-label="Selected work">
          <div className="st-wrap">
            <p className="st-eyebrow">Selected Work</p>
            <h2>{localProjects.length ? `Projects in ${location.name}` : 'Recent projects'}</h2>
            <ProjectGrid projects={projects} />
          </div>
        </section>
      )}
      <FaqList faqs={location.faqs} title={`${location.name}: questions`} />
      <LinkList
        eyebrow="Services"
        title={`What we do in ${location.name}`}
        links={relatedServices.map((service) => ({
          href: `/services/${service.slug}`,
          label: service.name,
          description: service.summary,
        }))}
      />
      <ContactSection />
    </div>
  )
}
