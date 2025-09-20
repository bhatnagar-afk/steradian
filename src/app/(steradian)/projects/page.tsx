'use client'

import { getHeroData } from '@/lib/services/sanity-queries'
import HeroSection from '@/components/hero-section'
import Masonry from 'react-masonry-css'
import './globals.css'

export default async function ProjectsPage() {
  const heroes = await getHeroData()

  if (!heroes || heroes.length === 0) {
    return (
      <div className="p-8 text-center">
        <h1 className="text-2xl font-bold">No hero data found.</h1>
        <p className="text-gray-500">
          Please add hero content in Sanity Studio.
        </p>
      </div>
    )
  }

  return (
    //   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-8 auto-rows-auto">
    //     {heroes.map((hero, index) => (
    //     <HeroSection key={index} {...hero} />
    //   ))}
    // </div>

    // <div className="columns-2 md:columns-3 lg:columns-4 gap-6">
    //   {heroes.map((hero, index) => (
    //     <div key={index} className="break-inside-avoid mb-6">
    //       <HeroSection key={index} {...hero} />
    //     </div>
    //   ))}
    // </div>
    <div>
      <Masonry
        breakpointCols={{ default: 4, 1100: 3, 700: 2 }}
        className="masonry-grid"
        columnClassName="masonry-grid_column"
      >
        {heroes.map((hero, index) => (
          <HeroSection key={index} {...hero} />
        ))}
      </Masonry>
    </div>
  )
}
