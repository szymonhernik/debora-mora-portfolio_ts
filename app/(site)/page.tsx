import { getProjects } from '@root/sanity/sanity-utils'
import Image from 'next/image'
import Link from 'next/link'
import ProjectsGrid from '@/components/dom/ProjectsGrid'
import { Suspense } from 'react'
import { CardSkeleton } from '@/components/canvas/CardSkeleton'

export default async function Page() {
  const projects = await getProjects()
  return (
    <>
      <Suspense>
        <ProjectsGrid />
      </Suspense>
      {/* <div className='w-full text-center md:w-3/5'>
        <Suspense>
          <Threejscomp />
        </Suspense>
      </div> */}
    </>
  )
}
