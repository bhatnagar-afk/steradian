'use client'

import Masonry from 'react-masonry-css'
import ProjectCard from './ProjectCard'

interface MasonryGridProps {
  heroes: any[]
}

export default function ProjectLayout({ heroes }: MasonryGridProps) {
  return (
    <Masonry
      breakpointCols={{ default: 4, 1100: 3, 700: 2 }}
      className="masonry-grid"
      columnClassName="masonry-grid_column"
    >
      {heroes.map((hero, index) => (
        <ProjectCard key={index} {...hero} />
      ))}
    </Masonry>
  )
}
