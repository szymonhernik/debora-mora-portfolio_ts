import { Layout } from '@/components/dom/Layout'
import NavLinks from '@/components/dom/nav-links'
import '@/global.css'
import { getPages } from '@root/sanity/sanity-utils'
import Link from 'next/link'

export const revalidate = 5 // revalidate at most every minute

export const metadata = {
  title: 'Name of the site',
  description: 'Description of the site',
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  //get all out pages

  const pages = await getPages()
  return (
    <html lang='en' className='antialiased'>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className='bg-indigo-200'>
        {/* To avoid FOUT with styled-components wrap Layout with StyledComponentsRegistry https://beta.nextjs.org/docs/styling/css-in-js#styled-components */}
        <header className='py-4 px-8 fixed z-20 flex items-center justify-between w-full'>
          {/* <Link href='/' className='text-amber-700 '>
            +++
          </Link> */}
          <NavLinks />
          {/* <div className='flex gap-5'>
            <Link href='/about'>about</Link>
          </div> */}
        </header>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
