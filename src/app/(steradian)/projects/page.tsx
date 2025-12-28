import { getCategories, getHeroData } from '@/lib/services/sanity-queries'
import ProjectLayout from '@/components/projects/project-layout'
import ProjectCategories from '@/components/projects/project-categories'
import { themes } from '@/config/theme';
export default async function ProjectsPage({
  searchParams,
}: {
  searchParams?: Promise<{ [key: string]: string | string[] }>
}) {
  const params = await searchParams
  const categories = await getCategories()
  const query = params?.category
  const activeCategory = Array.isArray(query)
    ? query[0]
    : query || categories[0].title

  const heroes = await getHeroData(activeCategory)
  const themeConfig = themes.dark;
  const themeStyles = {
    backgroundColor: themeConfig.background,
    color: themeConfig.text,
  };

  return (
<div
  className="min-h-screen flex flex-col p-12"
  style={themeStyles}
>
  <ProjectCategories
    categories={categories.map((category) => category.title)}
  />

  {!heroes || heroes.length === 0 ? (
    /* EMPTY STATE (for now, will not be in live site) */
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
    /* PROJECTS */
    <div className="flex-1 mt-8">
      <ProjectLayout heroes={heroes} />
    </div>
  )}
</div>

  )
}