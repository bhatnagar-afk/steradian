import { getCategories, getHeroData } from '@/lib/services/sanity-queries'
import ProjectLayout from '@/components/projects/project-layout'
import { Construction } from 'lucide-react'
import ProjectCategories from '@/components/projects/project-categories'
import { themes } from '@/config/theme'
import Description from '@/components/projects/description'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects'
}

const TEMPORARILY_DISABLED = true

export default async function ProjectsPage({
  searchParams,
}: {
  searchParams?: Promise<{ [key: string]: string | string[] }>
}) {
  if (TEMPORARILY_DISABLED) {
    const themeConfig = themes.dark
    const themeStyles = {
      backgroundColor: themeConfig.background,
      color: themeConfig.text,
    }

    return (
      <div 
        className="min-h-screen flex flex-col items-center justify-center p-8 text-center" 
        style={themeStyles}
      >
        <div className="flex flex-col items-center space-y-6 max-w-2xl mx-auto -mt-20">
          <div className="p-5 rounded-3xl bg-white/5 border border-white/10 shadow-xl backdrop-blur-sm">
            <Construction className="w-12 h-12 text-white/80" strokeWidth={1.5} />
          </div>
          
          <h1 className="text-[36px] md:text-[48px] font-semibold tracking-tight text-white">
            Projects Coming Soon
          </h1>
          
          <p className="text-[16px] md:text-[18px] text-gray-400 leading-relaxed max-w-xl mt-4">
            We're currently curating our finest work to showcase here. 
            Check back shortly to see our latest projects.
          </p>

          <div className="pt-8">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/20 bg-[#1a1a1a]/40 text-sm font-medium text-white/90 backdrop-blur-md transition-all hover:bg-white/10">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-40"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-white/80"></span>
              </span>
              Work in Progress
            </div>
          </div>
        </div>
      </div>
    )
  }

  const params = await searchParams
  const categories = await getCategories()

  // Map numeric IDs to category titles
  const categoryMap: Record<string, string> = {}
  categories.forEach((cat, index) => {
    categoryMap[(index + 1).toString()] = cat.title
  })

  // Determine active category
  const query = params?.category
  const activeCategory =
    typeof query === 'string'
      ? (categoryMap[query] ?? categories[0]?.title)
      : categories[0]?.title

  const heroes = await getHeroData(activeCategory)
  const themeConfig = themes.dark
  const themeStyles = {
    backgroundColor: themeConfig.background,
    color: themeConfig.text,
  }

  return (
    <div className="min-h-screen flex flex-col p-8" style={themeStyles}>
      <ProjectCategories
        categories={categories.map((_, i) => (i + 1).toString())} // numeric IDs
        categoryMap={categoryMap} // pass the map for display
        activeCategory={
          Object.keys(categoryMap).find(
            (key) => categoryMap[key] === activeCategory,
          ) ?? '1'
        }
      />
      <h1 className="text-[36px] max-[620px]:text-[24px] pl-4 font-semibold text-white mt-4 mb-1">
        {activeCategory}
      </h1>
      <Description
        text={
          categories.find((cat) => cat.title === activeCategory)?.description ||
          ''
        }
      />
      {!heroes || heroes.length === 0 ? (
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center max-w-xl">
            <h1 className="text-2xl font-semibold mb-2">
              No projects available
            </h1>
            <p className="text-sm opacity-80">
              Projects under this category will appear here once added.
            </p>
          </div>
        </div>
      ) : (
        <div className="flex-1 mt-8">
          <ProjectLayout heroes={heroes} />
        </div>
      )}
    </div>
  )
}
