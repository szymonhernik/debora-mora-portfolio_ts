import { getProjects } from '@root/sanity/sanity-utils'
import Image from 'next/image'
import Link from 'next/link'
import ProjectsGrid from '@/components/dom/ProjectsGrid'

export default async function Page() {
  const projects = await getProjects()
  return (
    <>
      <ProjectsGrid />
      {/* <div className='w-full text-center md:w-3/5'>
        <Suspense>
          <Threejscomp />
        </Suspense>
      </div> */}
    </>
  )
}
