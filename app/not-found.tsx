"use client"

import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function NOTFOUND() {
  const router = useRouter()
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/")
    }, 5000)
    return () => clearTimeout(timer)
  }, [router])

  return (
    <>
      <h1>404ページです。</h1>
      <h2>5秒後にホームへリダイレクトします。</h2>
    </>
  )
}
