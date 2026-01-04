'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { fonts, colors } from '@/config/theme'
import { Button } from '../ui/button'
import clsx from 'clsx'

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

  const handleClick = (id: string) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set('category', id)
    router.push(`?${params.toString()}`)
  }

  return (
    <div className="mb-6 flex gap-2 sm:gap-4 flex-wrap sm:flex-nowrap sm:overflow-x-auto">
      {categories.map((id) => {
        const title = categoryMap[id]
        const isActive = id === activeCategory

        return (
          <Button
            key={id}
            onClick={() => handleClick(id)}
            className={clsx(
              'px-3 sm:px-4 py-2 rounded-md font-semibold transition-all duration-200',
              'text-sm sm:text-base',
              'focus-visible:outline-none focus-visible:ring-2',
              !isActive && 'hover:scale-105 hover:text-white',
              isActive && 'scale-110 sm:scale-125'
            )}
            style={{
              fontFamily: fonts.sans,
              color: isActive ? colors.white : colors.gray[400],
            }}
          >
            {title}
          </Button>
        )
      })}
    </div>
  )
}
