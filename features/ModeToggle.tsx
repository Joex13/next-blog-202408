"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import { useEffect } from "react"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  const handleClick = () => {
    if (theme === "light") setTheme("dark")
    if (theme === "dark") setTheme("light")
  }

  useEffect(() => {
    switch (theme) {
      case "light":
        setTheme("light")
        break
      case "dark":
        setTheme("dark")
        break
      default:
        setTheme("dark")
    }
  }, [])

  const SunIcon = () => (
    <Sun className="h-[1.2rem] w-[1.4rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
  )

  const MoonIcon = () => (
    <Moon className="h-[1.2rem] w-[1.4rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-10" />
  )

  return (
    <Button onClick={handleClick}>
      {theme === "light" ? <SunIcon /> : <MoonIcon />}
    </Button>
  )
}
