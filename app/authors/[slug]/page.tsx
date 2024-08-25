import { getAuthors, getAuthorBySlug } from "@/libs/newt"
import type { Metadata } from "next"
import type { Author } from "@/types/author"

type Props = {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const authors = await getAuthors()
  return authors.map((author) => ({
    slug: author.slug,
  }))
}
export const dynamicParams = false

// metadataを返すんだろうね
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params
  const author = await getAuthorBySlug(slug)

  return {
    title: author?.slug,
    description: author?.slug,
  }
}

export default async function Author({ params }: Props) {
  const { slug } = params
  const author = await getAuthorBySlug(slug)
  if (!author) return

  return (
    <>
      <h1>{author.fullName}</h1>
      {/* <div dangerouslySetInnerHTML={{ __html: author.body }} /> */}
    </>
  )
}
