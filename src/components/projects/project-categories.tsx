'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { colors, themes } from '@/config/theme'

type ProjectCategoriesProps = {
  categories: string[]
}

export default function ProjectCategories({
  categories,
}: ProjectCategoriesProps) {
  const router = useRouter()
  const themeConfig = themes.dark;

  const [active, setActive] = useState(categories[0])

  const handleClick = (cat: string) => {
    setActive(cat)
    router.push(`?category=${cat}`)
  }

  return (
    <div className="flex gap-4 mb-6 flex-wrap">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => handleClick(cat)}
          className={`
    relative px-3 py-1 text-sm font-medium
    text-2xl rounded-lg transition-colors
    focus:outline-none
    ${active === cat ? 'border-b-2' : ''}
  `}
          style={{
            color: themeConfig.text,
            borderColor: active === cat ? colors.primary : 'transparent'
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = themeConfig.hover}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
        >
          {cat}
        </button>
      ))}
    </div>
  )
}