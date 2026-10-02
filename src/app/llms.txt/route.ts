import { getAbsoluteUrl, principals, siteConfig } from '@/config/site'
import { services } from '@/content/services'
import { locations } from '@/content/locations'
import { homeFaqs } from '@/content/home-faqs'
import { listProjects } from '@/lib/sanity/projects'
import { safeFetch } from '@/lib/safe-fetch'

export const dynamic = 'force-static'

// A plain-text summary of the practice for AI assistants and crawlers,
// following the llms.txt convention (https://llmstxt.org).
export async function GET() {
  const projects = await safeFetch(() => listProjects(), [])

  const lines = [
    `# ${siteConfig.name}`,
    '',
    `> ${siteConfig.description}`,
    '',
    `- Founded: ${siteConfig.foundingYear}, in Moradabad, Uttar Pradesh, India`,
    `- Phone: ${siteConfig.phone}`,
    `- Email: ${siteConfig.email}`,
    `- Website: ${siteConfig.url}`,
    '',
    '## Studios',
    '',
    ...siteConfig.addresses.map(
      (address) =>
        `- ${address.addressLocality}: ${address.streetAddress}, ${address.addressLocality} ${address.postalCode}, ${address.addressRegion}, India`,
    ),
    '',
    '## Principals',
    '',
    ...principals.map(
      (person) =>
        `- ${person.name}, ${person.role}${person.alumniOf ? ` (alumnus of ${person.alumniOf})` : ''}`,
    ),
    '',
    '## Services',
    '',
    ...services.map(
      (service) =>
        `- [${service.name}](${getAbsoluteUrl(`/services/${service.slug}`)}): ${service.summary}`,
    ),
    '',
    '## Areas served',
    '',
    ...locations.map(
      (location) =>
        `- [${location.name}](${getAbsoluteUrl(`/architects/${location.slug}`)}): ${location.places.join(', ')}`,
    ),
    '',
    '## Projects',
    '',
    ...projects.map(
      (project) =>
        `- [${project.title}](${getAbsoluteUrl(`/projects/${project.slug}`)})${
          [project.category, project.location].filter(Boolean).length
            ? `: ${[project.category, project.location].filter(Boolean).join(', ')}`
            : ''
        }`,
    ),
    '',
    '## Pages',
    '',
    `- [Practice](${getAbsoluteUrl('/about')}): history, approach and principals`,
    `- [Projects](${getAbsoluteUrl('/projects')}): portfolio of built work`,
    `- [Contact](${getAbsoluteUrl('/contact')}): addresses, phone, email and enquiry form`,
    '',
    '## Common questions',
    '',
    ...homeFaqs.flatMap((faq) => [`### ${faq.question}`, '', faq.answer, '']),
  ]

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}
