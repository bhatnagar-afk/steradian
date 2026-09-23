import type { Metadata } from 'next'
import { MotionConfig } from 'framer-motion'
import { HomeSchema } from '@/components/home/home-schema'
import { Hero } from '@/components/home/hero'
import { WordmarkStrip } from '@/components/home/wordmark-strip'
import { Intro } from '@/components/home/intro'
import { EditorialBlocks } from '@/components/home/editorial-blocks'
import { ProjectsGallery } from '@/components/home/projects-gallery'
import { Practice } from '@/components/home/practice'
import { ApproachSection } from '@/components/practice/approach-section'
import { Journal } from '@/components/home/journal'
import { ContactSection } from '@/components/contact/contact-section'
import { Grain } from '@/components/site/grain'
import { listProjects } from '@/lib/sanity/projects'
import { listEditorialStories } from '@/lib/sanity/stories'
import { safeFetch } from '@/lib/safe-fetch'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  title: 'Steradian Architects — Architects & Interior Designers in Moradabad',
  description: siteConfig.description,
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Steradian Architects — Architecture that holds its ground in time',
    description: siteConfig.description,
    url: '/',
  },
}

export default async function HomePage() {
  const [projects, stories] = await Promise.all([
    safeFetch(() => listProjects(), []),
    safeFetch(() => listEditorialStories(), []),
  ])

  return (
    <MotionConfig reducedMotion="user">
      <div className="st-page">
        <HomeSchema />
        <Grain />
        <Hero />
        <WordmarkStrip />
        <Intro />
        <EditorialBlocks stories={stories} />
        <ProjectsGallery projects={projects} />
        <Practice />
        <ApproachSection />
        <Journal />
        <ContactSection />
      </div>
    </MotionConfig>
  )
}
