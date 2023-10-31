import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import Threejscomp from '@/components/Threejscomp'
import { getProjects } from '@root/sanity/sanity-utils'
import Image from 'next/image'
import Link from 'next/link'

export default async function Page() {
  const projects = await getProjects()
  return (
    <>
      <div className='mx-auto flex w-full flex-col flex-wrap items-center md:flex-row  lg:w-4/5'>
        {/* jumbo */}
        <div className='flex w-full flex-col items-start justify-center pt-12 text-center md:w-2/5 md:text-left'>
          <p className='w-full uppercase'>Next + React Three Fiber</p>
          <h1 className='my-4 text-5xl font-bold leading-tight'>Next 3D Starter</h1>
          <p className='mb-8 text-2xl leading-normal'>A minimalist starter for React, React-three-fiber and Threejs.</p>
        </div>
      </div>
      <section className='mx-auto  w-full flex-col items-center lg:w-4/5'>
        <h2 className='my-4 text-2xl font-bold  leading-tight'>my projects here</h2>
        <div>
          {projects.map((project) => (
            <Link href={`/projects/${project.slug}`} key={project._id}>
              <div className='mt-4 flex-col p-4  bg-slate-200 hover:bg-slate-400 trasition'>
                {project.image && (
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={250}
                    height={100}
                    className='object-cover rounded-lg '
                  />
                )}
                <p className=' w-full'>{project.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <div className='w-full text-center md:w-3/5'>
        <Suspense>
          <Threejscomp />
        </Suspense>
      </div>
    </>
  )
}
