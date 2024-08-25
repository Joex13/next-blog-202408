import "server-only"
import { createClient } from "newt-client-js"
import { cache } from "react"
import type { Article } from "@/types/article"
import type { Author } from "@/types/author"

const client = createClient({
  spaceUid: process.env.NEWT_SPACE_UID + "",
  token: process.env.NEWT_CDN_API_TOKEN + "",
  apiType: "cdn",
})

export const getArticles = cache(async () => {
  const { items } = await client.getContents<Article>({
    appUid: "blog",
    modelUid: "article",
    query: {
      select: ["_id", "title", "slug", "body"],
    },
  })
  return items
})

export const getArticleBySlug = cache(async (slug: string) => {
  const article = await client.getFirstContent<Article>({
    appUid: "blog",
    modelUid: "article",
    query: {
      slug,
      select: ["_id", "title", "slug", "body", "meta"],
    },
  })
  return article
})

export const getAuthors = cache(async () => {
  const { items } = await client.getContents<Author>({
    appUid: "blog",
    modelUid: "author",
    query: {
      select: ["fullName", "slug"],
    },
  })
  return items
})

export const getAuthorBySlug = cache(async (slug: string) => {
  const author = await client.getFirstContent<Author>({
    appUid: "blog",
    modelUid: "author",
    query: {
      slug,
      select: ["fullName", "slug"],
    },
  })
  return author
})
