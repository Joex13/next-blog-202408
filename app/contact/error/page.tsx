"use client"
import { useRouter } from "next/navigation"

export default function Error() {
  const router = useRouter()

  return (
    <>
      <h1>Error!</h1>
      <div>
        <button type="button" onClick={() => router.back()}>
          Back to Previous Page
        </button>
      </div>
    </>
  )
}
