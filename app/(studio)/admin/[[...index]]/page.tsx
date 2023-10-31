'use client'

import config from '@root/sanity.config'
import { NextStudio } from 'next-sanity/studio'

export default function AdminPage() {
  return <NextStudio config={config} />
}
