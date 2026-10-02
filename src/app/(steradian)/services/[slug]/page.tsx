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
  faqSchema,
  serviceSchema,
} from '@/components/seo/structured-data'
import { services, getService } from '@/content/services'
import { locations } from '@/content/locations'
import { listProjects } from '@/lib/sanity/projects'
import { safeFetch } from '@/lib/safe-fetch'
import { defaultOgImage } from '@/config/site'

export const dynamicParams = false

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }))
}

type ServicePageProps = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params
  const service = getService(slug)
  if (!service) return {}

  const url = `/services/${service.slug}`
  return {
    title: { absolute: service.metaTitle },
    description: service.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url,
      images: [defaultOgImage],
    },
  }
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params
  const service = getService(slug)
  if (!service) notFound()

  const projects = (await safeFetch(() => listProjects(), [])).slice(0, 3)
  const relatedLocations = locations.filter((location) =>
    service.relatedLocations.includes(location.slug),
  )

  return (
    <div className="st-page">
      <StructuredData
        data={[
          serviceSchema(service),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services' },
            { name: service.name, path: `/services/${service.slug}` },
          ]),
          faqSchema(service.faqs),
        ]}
      />
      <PageHeader eyebrow={service.eyebrow} title={service.h1} description={service.summary} />
      <ProseSection intro={service.intro} sections={service.sections} />
      {projects.length > 0 && (
        <section className="st-related-work" aria-label="Selected work">
          <div className="st-wrap">
            <p className="st-eyebrow">Selected Work</p>
            <h2>Recent projects</h2>
            <ProjectGrid projects={projects} />
          </div>
        </section>
      )}
      <FaqList faqs={service.faqs} title={`${service.name}: questions`} />
      <LinkList
        eyebrow="Where we work"
        title="Areas we serve"
        links={relatedLocations.map((location) => ({
          href: `/architects/${location.slug}`,
          label: location.name,
          description: location.metaDescription,
        }))}
      />
      <ContactSection />
    </div>
  )
}
