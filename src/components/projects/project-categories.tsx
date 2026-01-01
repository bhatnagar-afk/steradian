'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { fonts, colors, themes } from '@/config/theme'
import { Button } from '../ui/button'

type ProjectCategoriesProps = {
  categories: string[]
  categoryMap: Record<string, string>
  activeCategory: string
}

export default function ProjectCategories({
  categories,
  categoryMap,
  activeCategory,
}: ProjectCategoriesProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const themeConfig = themes.dark

  const handleClick = (id: string) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set('category', id)
    router.push(`?${params.toString()}`)
  }

  return (
    <div className="flex gap-4 mb-6 flex-wrap">
      {categories.map((id) => {
        const title = categoryMap[id]
        const isActive = id === activeCategory

        return (
          <Button
            key={id}
            onClick={() => handleClick(id)}
            className="px-4 py-2 rounded-md text-[16px] font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2"
            style={{
              fontFamily: fonts.sans,
              color: isActive
                ? themes.light.background
                : 'rgba(255, 255, 255, 0.75)',
              // backgroundColor: isActive ? colors.primary : 'transparent',
              transform: isActive ? 'scale(1.1)' : 'scale(1)',
            }}
            onMouseEnter={(e) => {
              if (!isActive) {
                // e.currentTarget.style.backgroundColor = themeConfig.hover
                e.currentTarget.style.transform = 'scale(1.1)'
                e.currentTarget.style.color = themes.light.background
              }
            }}
            onMouseLeave={(e) => {
              if (!isActive) {
                // e.currentTarget.style.backgroundColor = 'transparent'
                e.currentTarget.style.transform = 'scale(1)'
                e.currentTarget.style.color = 'rgba(255, 255, 255, 0.75)'
              }
            }}
          >
            {title}
          </Button>
        )
      })}
    </div>
  )
}
