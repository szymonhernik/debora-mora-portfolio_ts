'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/' },
  {
    name: 'about',
    href: '/about',
  },
]

export default function NavLinks() {
  const pathname = usePathname()
  return (
    <>
      <Link
        key={'home'}
        href={'/'}
        className={clsx(
          'flex h-[48px] grow items-center justify-center gap-2 text-sm font-medium hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
          {
            ' text-blue-600': pathname === '/',
          },
        )}
      >
        <p className='hidden md:block'>home</p>
      </Link>
      <div className='flex gap-2'>
        <p>on</p>
        <p>off</p>
      </div>
      <Link
        key={'about'}
        href={'/about'}
        className={clsx(
          'flex h-[48px] grow items-center justify-center gap-2 text-sm font-medium hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
          {
            ' text-blue-600': pathname === '/about',
          },
        )}
      >
        <p className='hidden md:block'>about</p>
      </Link>
    </>
  )
}
