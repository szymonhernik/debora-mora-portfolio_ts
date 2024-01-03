import { getProjects } from '@root/sanity/sanity-utils'
import Image from 'next/image'
import Link from 'next/link'

export default async function ProjectsGrid() {
  const projects = await getProjects()
  return (
    <>
      <section className='w-5/5 flex-col items-center mx-4 mt-36  max-w-screen-2xl 2xl:mx-auto'>
        <div className='grid grid-cols-4 gap-0 w-full h-[calc(100vh-9rem)]  '>
          {projects.map((project) => (
            <Link href={`/projects/${project.slug}`} key={project._id}>
              <div className='bg-slate-200 relative h-full group'>
                <p className=' w-full text-2xl'>{project.name}</p>
                <div className='mt-4 flex-col p-4 absolute top-0 left-0'>
                  {project.image && (
                    <Image
                      src={project.image}
                      alt={project.name}
                      width={250}
                      height={100}
                      className='object-cover opacity-0 z-[0] group-hover:opacity-100 transition-opacity'
                    />
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
