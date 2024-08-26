import {
  getAuthors,
  getAuthorBySlug,
  getAllArticlesBySlug,
  getArticles,
} from "@/libs/newt"
import type { Metadata } from "next"
import type { Author } from "@/types/author"
import Link from "next/link"

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
  const articles = await getArticles()
  const authorsArticles = articles.filter(
    (article) => article.author.slug === slug,
  )
  if (!articles) return

  return (
    <>
      <h1 className="text-2xl">{author?.fullName}の書いた記事一覧</h1>
      <ul>
        {authorsArticles.map((article) => {
          return (
            <li key={article.slug}>
              <Link href={`/articles/${article.slug}`}>{article.title}</Link>
            </li>
          )
        })}
      </ul>
      {/* <div dangerouslySetInnerHTML={{ __html: author.body }} /> */}
    </>
  )
}
