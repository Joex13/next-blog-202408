import { getArticles } from "@/libs/newt"
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "newt&nextブログ",
  description: "NewtとNext.jsを利用したお試しブログです",
}

export default async function Home() {
  const articles = await getArticles()
  return (
    <>
      <ul className="">
        {articles.map((article) => {
          return (
            <li key={article._id}>
              <Link href={`articles/${article.slug}`}>{article.title}</Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}
