import { getCategories, getHeroData } from '@/lib/services/sanity-queries'
import ProjectLayout from '@/components/projects/ProjectLayout'
import ProjectCategories from '@/components/projects/ProjectCategories'

export default async function ProjectsPage() {
  const categories = await getCategories()
  const heroes = await getHeroData()
  if (!heroes || heroes.length === 0) {
    return (
      <div className="p-8 text-center">
        <h1 className="text-2xl font-bold">No hero data found.</h1>
        <p className="text-gray-500">
          Please add hero content in Sanity Studio.
        </p>
      </div>
    )
  }

  return (
    <div className="p-12">
      <ProjectCategories
        categories={categories.map((category) => category.title)}
      />
      <ProjectLayout heroes={heroes} />
    </div>
  )
}
