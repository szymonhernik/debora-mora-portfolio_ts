import { Project } from '@root/types/Project'
import { Page } from '@root/types/Page'
import { createClient, groq } from 'next-sanity'
import clientConfig from './config/client-config'
import { revalidateSecret } from './sanity.api'

// Helper function to centralize the fetching logic including revalidation tags
async function sanityFetch<QueryResponse>({
  query,
  params = {},
  tags = [],
}: {
  query: string
  params?: Record<string, any>
  tags: string[]
}): Promise<QueryResponse> {
  const client = createClient(clientConfig).withConfig({
    useCdn: process.env.NODE_ENV === 'production' && !revalidateSecret, // Use CDN if in production and no revalidateSecret set
  })

  return client.fetch<QueryResponse>(query, params, {
    next: {
      tags,
    },
  })
}

// export async function getProjects(): Promise<Project[]> {
//   return createClient(clientConfig).fetch(
//     groq`*[_type == "project"]{
//         _id,
//         _createdAt,
//         name,
//         "slug":slug.current,
//         "image": image.asset->url,
//         url,
//         content
//     }`,
//   )
// }
export function getProjects() {
  const query = groq`*[_type == "project"]{
        _id,
        _createdAt,
        name,
        "slug":slug.current,
        "image": image.asset->url,
        url,
        content }`
  const tags = ['project', 'page'] // Use appropriate tags for your content
  return sanityFetch<Project[]>({
    query,
    tags,
  })
}

export async function getProject(slug: string): Promise<Project> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
        _id,
        _createdAt,
        name,
        "slug":slug.current,
        "image": image.asset->url,
        url,
        content
    }`,
    { slug: slug },
  )
}

export async function getPages(): Promise<Page[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "page"]{
      _id,
      _createdAt,
      title,
      "slug": slug.current
    }`,
  )
}

export async function getPage(slug: string): Promise<Page> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "page" && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      content
    }`,
    { slug },
  )
}
