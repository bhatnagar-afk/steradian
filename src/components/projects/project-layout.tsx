'use client'

import { useState } from 'react'
import Masonry from 'react-masonry-css'
import ProjectCard from './project-card'
import { HeroData } from '@/lib/services/sanity-queries'
import DetailCard from './detail-card'

interface MasonryGridProps {
  heroes: HeroData[]
}

export default function ProjectLayout({ heroes }: MasonryGridProps) {
  const [selectedHero, setSelectedHero] = useState<HeroData | null>(null)

  const handleClose = () => setSelectedHero(null)

  const breakpointColumnsObj = {
    default: 5,
    1536: 4,
    1280: 3,
    1024: 3,
    768: 2,
    640: 2,
    480: 1,
  }

  return (
    <>
      {selectedHero && <DetailCard data={selectedHero} onClose={handleClose} />}
      <div className="w-full">
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="masonry-grid"
          columnClassName="masonry-grid_column"
        >
          {heroes.map((hero, index) => (
            <ProjectCard
              key={`${hero.title}-${index}`}
              {...hero}
              onClick={() => setSelectedHero(hero)}
            />
          ))}
        </Masonry>
      </div>
    </>
  )
}
