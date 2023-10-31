import { getProject } from '@/sanity/sanity-utils'
import Image from 'next/image'
import Link from 'next/link'
import { PortableText } from '@portabletext/react'

type Props = {
  params: { project: string }
}

export default async function Project({ params }: Props) {
  const slug = params.project
  const project = await getProject(slug)
  return (
    <div className='m-4'>
      <Link href={'/'} className='font-bold '>
        {' '}
        Back
      </Link>
      {project.image && (
        <Image src={project.image} alt={project.name} width={250} height={100} className='object-cover rounded-lg ' />
      )}

      {project.name}
      <div>
        <PortableText value={project.content} />
      </div>
    </div>
  )
}
