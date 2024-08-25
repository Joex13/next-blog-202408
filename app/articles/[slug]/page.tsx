import { getArticles, getArticleBySlug } from "@/libs/newt"
import type { Metadata } from "next"
import type { Article } from "@/types/article"

type Props = {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const articles = await getArticles()
  return articles.map((article) => ({
    slug: article.slug,
  }))
}
export const dynamicParams = false

// metadataを返すんだろうね
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params
  const article = await getArticleBySlug(slug)

  return {
    title: article?.title,
    description: article?.meta.description,
  }
}

export default async function Article({ params }: Props) {
  const { slug } = params
  const article = await getArticleBySlug(slug)
  if (!article) return

  return (
    <>
      <h1>{article.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: article.body }} />
    </>
  )
}
