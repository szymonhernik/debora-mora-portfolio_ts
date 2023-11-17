import { Layout } from '@/components/dom/Layout'
import Header from '@/components/dom/header'
import '@/global.css'
import { getPages } from '@root/sanity/sanity-utils'
import { GeistMono } from 'geist/font'

// export const revalidate = 5 // revalidate at most every minute

export const metadata = {
  title: 'Name of the site',
  description: 'Description of the site',
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  //get all out pages

  return (
    <html lang='en' className={`antialiased ${GeistMono.className}`}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className=''>
        <Header />
        <div>{children}</div>
        {/* <Layout>{children}</Layout> */}
      </body>
    </html>
  )
}
