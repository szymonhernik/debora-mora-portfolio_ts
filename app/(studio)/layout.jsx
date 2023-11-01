import '@/global.css'
export const metadata = {
  title: 'Name of the site',
  description: 'Description of the site',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='antialiased'>
      <body>{children}</body>
    </html>
  )
}
