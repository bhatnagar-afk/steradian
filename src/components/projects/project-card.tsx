'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { fadeUpStagger, viewportOnce } from '@/lib/motion'
import { MediaFrame } from '@/components/ui/media-frame'
import {
  ResidenceIllustration,
  QilaIllustration,
  SchoolIllustration,
  FactoryIllustration,
} from '@/components/illustrations'
import type { ProjectSummary } from '@/types/project'

const ILLUSTRATIONS = [
  <ResidenceIllustration key="residence" />,
  <QilaIllustration key="qila" />,
  <SchoolIllustration key="school" />,
  <FactoryIllustration key="factory" />,
]

export function ProjectCard({ project, index }: { project: ProjectSummary; index: number }) {
  return (
    <motion.article
      className="st-proj"
      variants={fadeUpStagger((index % 6) * 0.05)}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      <Link href={`/projects/${project.slug}`} className="st-proj-link">
        <div className="st-proj-frame">
          <MediaFrame
            src={project.heroImage}
            alt={project.title}
            illustration={ILLUSTRATIONS[index % ILLUSTRATIONS.length]}
          />
        </div>
        <div className="st-proj-meta">
          <div>
            <h3 className="st-proj-title">{project.title}</h3>
            {project.category && <p className="st-proj-data">{project.category}</p>}
          </div>
          <span className="st-proj-arrow">View Project →</span>
        </div>
      </Link>
    </motion.article>
  )
}
