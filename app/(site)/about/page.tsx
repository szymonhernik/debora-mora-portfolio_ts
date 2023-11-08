import { PortableText } from '@portabletext/react'
import { getPage } from '@root/sanity/sanity-utils'

type Props = {
  params: { slug: string }
}

export default async function Page({ params }: Props) {
  const page = await getPage('about')
  //   console.log(`This is params slug no: ${params.slug}`)

  return (
    <div className='pt-12 mx-auto  w-full flex-col items-center lg:w-4/5'>
      <h1>{page.title}</h1>
      <h1>{page.title}</h1>
      <h1>{page.title}</h1>
      <PortableText value={page.content}></PortableText>
    </div>
  )
}
