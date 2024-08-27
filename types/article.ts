import type { Content } from "newt-client-js"

export type Article = {
  _id: string
  title: string
  slug: string
  body: string
  meta: {
    title: string
    description: string
  }
  author: {
    _id: string
    fullName: string
    slug: string
  }
} & Content
