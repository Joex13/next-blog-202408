import { getAuthors } from "@/libs/newt"
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "newt&nextブログ",
  description: "NewtとNext.jsを利用したお試しブログです",
}

export default async function Home() {
  const authors = await getAuthors()
  return (
    <>
      <ul className="">
        {authors.map((author) => {
          return (
            <li
              key={author.fullName}
              className="text-blue-400 hover:text-blue-600  dark:text-green-400 dark:hover:text-green-600 transition"
            >
              <Link href={`authors/${author.slug}`}>{author.fullName}</Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}
