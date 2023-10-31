import schemas from '@root/sanity/schemas'
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'

const config = defineConfig({
  projectId: 'lmlevnah',
  dataset: 'production',
  title: 'Portfolio website',
  apiVersion: '2023-10-31',
  basePath: '/admin',
  plugins: [deskTool()],
  schema: { types: schemas },
})

export default config
