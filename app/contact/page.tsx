"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form"

type FormValues = {
  name: string
  email: string
  message: string
}

export default function Contact() {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ mode: "onChange" })

  const onSubmit = handleSubmit(async (data) => {
    const formData = new FormData()
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value)
    })

    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_NEWT_FORM_ENDPOINT ?? "",
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        },
      )

      if (response.ok) {
        router.push("/contact/success")
      } else {
        router.push("/contact/error")
      }
    } catch (err) {
      router.push("/contact/error")
    }
  })

  return (
    <>
      <div className="[&>*]:font-bold">
        <h1 className="text-2xl">Contact</h1>
        <p>下記内容を入力してください</p>
        <p className="text-red-600 font-black">すべて必須項目です</p>
      </div>
      <form
        className="flex flex-col mt-2 gap-2 [&>input]:p-2 [&>input]:border-2 [&>input]border-solid [&>input]:rounded-md"
        onSubmit={onSubmit}
      >
        <label htmlFor="name">Name*</label>
        <input
          id="name"
          {...register("name", { required: "Name is required" })}
          aria-describedby="error-name-required"
        />
        {errors?.name && (
          <span
            className="text-red-600"
            id="error-name-required"
            aria-live="assertive"
          >
            {errors.name.message}
          </span>
        )}
        <label htmlFor="email">Email*</label>
        <input
          id="email"
          {...register("email", { required: "email is required" })}
          aria-describedby="error-email-required"
        />
        {errors?.email && (
          <span
            className="text-red-600"
            id="error-email-required"
            aria-live="assertive"
          >
            {errors.email.message}
          </span>
        )}
        <label htmlFor="message">Message*</label>
        <textarea
          rows={8}
          id="message"
          className="p-2 border-2 rounded-md"
          {...register("message", { required: "message is required" })}
          aria-describedby="error-message-required"
        />
        {errors?.message && (
          <span
            className="text-red-600"
            id="error-email-required"
            aria-live="assertive"
          >
            {errors.message.message}
          </span>
        )}
        <Button>Submit</Button>
      </form>
    </>
  )
}
