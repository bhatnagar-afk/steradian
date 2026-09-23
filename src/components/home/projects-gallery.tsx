'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { fadeUpStagger, viewportOnce } from '@/lib/motion'
import { SectionHeading } from '@/components/ui/section-heading'
import { MediaFrame } from '@/components/ui/media-frame'
import {
  ResidenceIllustration,
  QilaIllustration,
  SchoolIllustration,
  FactoryIllustration,
} from '@/components/illustrations'
import type { ProjectSummary } from '@/types/project'

const SLOT_CLASS = ['st-proj--a', 'st-proj--b', 'st-proj--c', 'st-proj--d']
const ILLUSTRATIONS = [
  <ResidenceIllustration key="residence" />,
  <QilaIllustration key="qila" />,
  <SchoolIllustration key="school" />,
  <FactoryIllustration key="factory" />,
]

export function ProjectsGallery({ projects }: { projects: ProjectSummary[] }) {
  if (!projects.length) return null

  return (
    <section className="st-work" id="projects" aria-label="Selected projects">
      <div className="st-wrap">
        <SectionHeading
          eyebrow="Selected Work"
          title="Projects"
          description="A short survey of recent work, spanning residences, institutions and hospitality."
        />

        <div className="st-gallery">
          {projects.slice(0, 4).map((project, i) => (
            <motion.article
              key={project.slug}
              className={`st-proj ${SLOT_CLASS[i]}`}
              variants={fadeUpStagger(i * 0.06)}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              <Link href={`/projects/${project.slug}`} className="st-proj-link">
                <div className="st-proj-frame">
                  <MediaFrame
                    src={project.heroImage}
                    alt={project.title}
                    illustration={ILLUSTRATIONS[i % ILLUSTRATIONS.length]}
                  />
                </div>
                <div className="st-proj-meta">
                  <div>
                    <h3 className="st-proj-title">{project.title}</h3>
                    {project.category && <p className="st-proj-data">{project.category}</p>}
                  </div>
                  <span className="st-proj-arrow">View Project →</span>
                </div>
                {project.description && <p className="st-proj-dek">{project.description}</p>}
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
