import { Layout } from '@/components/dom/Layout'
import '@/global.css'
import Link from 'next/link'

export const metadata = {
  title: 'Name of the site',
  description: 'Description of the site',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='antialiased'>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        {/* To avoid FOUT with styled-components wrap Layout with StyledComponentsRegistry https://beta.nextjs.org/docs/styling/css-in-js#styled-components */}
        <header className='m-4 fixed'>
          <Link href='/'>+++</Link>
        </header>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
