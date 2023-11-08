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
      <section className='my-4 mx-auto  w-full flex-col items-center lg:w-4/5'>
        <h2 className=' text-2xl font-bold  leading-tight'>my projects here</h2>
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
      {/* <div className='w-full text-center md:w-3/5'>
        <Suspense>
          <Threejscomp />
        </Suspense>
      </div> */}
    </>
  )
}
