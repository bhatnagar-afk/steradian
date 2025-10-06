'use client'

import Masonry from 'react-masonry-css'
import ProjectCard from './ProjectCard'
import {HeroData} from '@/lib/services/sanity-queries'
interface MasonryGridProps {
  heroes: HeroData[]
}

export default function ProjectLayout({ heroes }: MasonryGridProps) {
  // Pinterest-like responsive breakpoints
  const breakpointColumnsObj = {
    default: 5, // 5 columns on very large screens
    1536: 4, // 4 columns on large screens (2xl)
    1280: 3, // 3 columns on desktop (xl)
    1024: 3, // 3 columns on small desktop (lg)
    768: 2, // 2 columns on tablet (md)
    640: 2, // 2 columns on small tablet (sm)
    480: 1, // 1 column on mobile
  }

  return (
    <div className="w-full">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="masonry-grid"
        columnClassName="masonry-grid_column"
      >
        {heroes.map((hero, index) => (
          <ProjectCard key={`${hero.title}-${index}`} {...hero} />
        ))}
      </Masonry>
    </div>
  )
}
