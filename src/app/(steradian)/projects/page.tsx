import { getCategories, getHeroData } from '@/lib/services/sanity-queries'
import ProjectLayout from '@/components/projects/project-layout'
import ProjectCategories from '@/components/projects/project-categories'
import { themes } from '@/config/theme'
import Description from '@/components/projects/description'

export default async function ProjectsPage({
  searchParams,
}: {
  searchParams?: Promise<{ [key: string]: string | string[] }>
}) {
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
      <h1 className="text-[36px] pl-4 font-semibold text-white mt-4 mb-1">
        {activeCategory}
      </h1>
      <Description
        text={
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.'
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
