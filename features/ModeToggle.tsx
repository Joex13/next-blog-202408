"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  const handleClick = () => {
    if (theme === "light") setTheme("dark")
    if (theme === "dark") setTheme("light")
  }

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  const SunIcon = () => (
    <Sun className="h-[1.2rem] w-[1.4rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
  )

  const MoonIcon = () => (
    <Moon className="h-[1.2rem] w-[1.4rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-10" />
  )

  return (
    <Button className="bg-transparent text-white" onClick={handleClick}>
      {theme === "light" ? <SunIcon /> : <MoonIcon />}
    </Button>
  )
}
