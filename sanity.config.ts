import schemas from 'app/sanity/schemas'
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'

const config = defineConfig({
  projectId: '5juh4upx',
  dataset: 'production',
  title: 'portfolio website',
  apiVersion: '2023-10-30',
  basePath: '/admin',
  plugins: [deskTool()],
  schemas: { types: schemas },
})

export default config
