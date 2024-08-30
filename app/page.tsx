import ArticleCard from "@/features/_common/ArticleCard"
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
      <ul className="flex flex-col gap-4">
        {articles.map((article) => {
          return (
            <li key={article._id}>
              <Link href={`articles/${article.slug}`}>
                <ArticleCard
                  title={article.title}
                  img={article.coverImage.src}
                />
              </Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}
