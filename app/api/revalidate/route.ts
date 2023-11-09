// ./src/app/api/revalidate/route.ts
import { revalidateSecret } from '@root/sanity/sanity.api'
import { revalidateTag } from 'next/cache'
import { type NextRequest, NextResponse } from 'next/server'
import { parseBody } from 'next-sanity/webhook'

export async function POST(req: NextRequest) {
  try {
    const { isValidSignature, body } = await parseBody<{
      _type: string
      slug?: string | undefined
    }>(req, revalidateSecret)

    if (!isValidSignature) {
      const message = 'Invalid signature'
      return new Response(JSON.stringify({ message, isValidSignature, body }), { status: 401 })
    }

    if (!body?._type) {
      const message = 'Bad Request'
      return new Response(message, { status: 400 })
    }

    // If the `_type` is `page`, then all `client.fetch` calls with
    // `{next: {tags: ['page']}}` will be revalidated
    // console.log(body._type)
    revalidateTag('project')
    if (body.slug) {
      revalidateTag(`${body._type}:${body.slug}`)
    }

    return NextResponse.json({ body })
  } catch (err: any) {
    console.error(err)
    return new Response(err.message, { status: 500 })
  }
}
