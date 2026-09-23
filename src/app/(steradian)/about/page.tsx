import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHeader } from '@/components/site/page-header'
import { StorySection } from '@/components/practice/story-section'
import { ApproachSection } from '@/components/practice/approach-section'
import { TeamSection } from '@/components/practice/team-section'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  title: 'Practice',
  description:
    'Steradian Architects is an architect-led architecture, interiors and design-build practice in Moradabad, Uttar Pradesh, established in 1984, with a second studio in Greater Noida serving clients across North India.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'Practice — Steradian Architects',
    description:
      'An architect-led design and design-build practice in Moradabad and Greater Noida, Uttar Pradesh, established in 1984.',
    url: '/about',
  },
}

export default function AboutPage() {
  return (
    <div className="st-page">
      <PageHeader
        eyebrow="Practice"
        title="Steradian Architects"
        description={siteConfig.description}
      />
      <StorySection />
      <ApproachSection />
      <TeamSection />
      <section className="st-page-cta" aria-label="Explore further">
        <div className="st-wrap st-page-cta-inner">
          <Link href="/projects">See Our Work →</Link>
          <Link href="/contact">Start a Project →</Link>
        </div>
      </section>
    </div>
  )
}
