'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { fonts, colors, themes } from '@/config/theme'
import { Button } from '../ui/button'

type ProjectCategoriesProps = {
  categories: string[]
}

export default function ProjectCategories({
  categories,
}: ProjectCategoriesProps) {
  const router = useRouter()
  const themeConfig = themes.dark

  const [active, setActive] = useState(categories[0])

  const handleClick = (cat: string) => {
    setActive(cat)
    router.push(`?category=${cat}`)
  }

  return (
    <div className="flex gap-4 mb-6 flex-wrap">
      {categories.map((cat) => (
        <Button
          key={cat}
          onClick={() => handleClick(cat)}
          className={`
    px-4 py-2
    rounded-md
    text-sm font-semibold
    transition-all duration-200
    focus-visible:outline-none
    focus-visible:ring-2
  `}
          style={{
            fontFamily: fonts.sans,
            color: active === cat ? themes.light.background : themeConfig.text,

            backgroundColor: active === cat ? colors.primary : 'transparent',
          }}
          onMouseEnter={(e) => {
            if (active !== cat) {
              e.currentTarget.style.backgroundColor = themeConfig.hover
            }
          }}
          onMouseLeave={(e) => {
            if (active !== cat) {
              e.currentTarget.style.backgroundColor = 'transparent'
            }
          }}
        >
          {cat}
        </Button>
      ))}
    </div>
  )
}
