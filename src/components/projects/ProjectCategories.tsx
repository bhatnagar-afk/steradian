'use client'

import { useState } from 'react'

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
        <button
          key={cat}
          onClick={() => handleClick(cat)}
          className={`
    relative px-3 py-1 text-sm font-medium
    text-white rounded-md transition-colors
    hover:bg-sky-700 focus:outline-none
    ${active === cat ? 'border-b-2 border-blue-500' : ''}
  `}
        >
          {cat}
        </button>
      ))}
    </div>
  )
}
