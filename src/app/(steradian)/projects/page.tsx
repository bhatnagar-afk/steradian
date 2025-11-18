import { getCategories, getHeroData } from '@/lib/services/sanity-queries'
import ProjectLayout from '@/components/projects/project-layout'
import ProjectCategories from '@/components/projects/project-categories'

export default async function ProjectsPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined }
}) {
  const params = searchParams
  const categories = await getCategories()
  const query = params?.category
  const activeCategory = Array.isArray(query)
    ? query[0]
    : query || categories[0].title

  const heroes = await getHeroData(activeCategory)

  return (
    <div className="p-12">
      <ProjectCategories
        categories={categories.map((category) => category.title)}
      />
      {!heroes || heroes.length === 0 ? (
        <div className="p-8 text-center">
          <h1 className="text-2xl font-bold">
            Currently their are no project under this category.
          </h1>
        </div>
      ) : (
        <ProjectLayout heroes={heroes} />
      )}
    </div>
  )
}
