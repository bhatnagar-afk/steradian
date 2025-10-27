'use client'

import { useState } from 'react'
import { Button } from '../ui/button'

type ProjectCategoriesProps = {
  categories: string[]
}

export default function ProjectCategories({
  categories,
}: ProjectCategoriesProps) {
  const [active, setActive] = useState(categories[0])

  const handleClick = (cat: string) => {
    setActive(cat)
  }

  return (
    <div className="flex gap-4 mb-6 flex-wrap">
      {categories.map((cat) => (
        <Button
          key={cat}
          onClick={() => handleClick(cat)}
          className={`
    relative px-3 py-1 text-sm font-medium
    text-white text-2xl rounded-lg transition-colors
    hover:bg-[rgba(255,255,255,0.28)] focus:outline-none
    ${active === cat ? 'border-b-2 border-white-500' : ''}
  `}
        >
          {cat}
        </Button>
      ))}
    </div>
  )
}
