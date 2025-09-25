import { getHeroData } from '@/lib/services/sanity-queries'
import ProjectLayout from '@/components/projects/ProjectLayout'
import ProjectCategories from '@/components/projects/ProjectCategories'
import './globals.css'

export default async function ProjectsPage() {
  const heroes = await getHeroData()

  const categories = ['Project 1', 'Project 2', 'Project 3']

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
      <ProjectCategories categories={categories} />
      <ProjectLayout heroes={heroes} />
    </div>
  )
}
