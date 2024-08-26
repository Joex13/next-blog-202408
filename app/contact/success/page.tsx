"use client"
import { useRouter } from "next/navigation"

export default function Thanks() {
  const router = useRouter()

  return (
    <>
      <h1>Thank you!</h1>
      <div>
        <button type="button" onClick={() => router.back()}>
          Back to Previous Page
        </button>
      </div>
    </>
  )
}
