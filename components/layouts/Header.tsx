import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { ModeToggle } from "@/features/_common/ModeToggle"
import Link from "next/link"

const navLinks = ["home", "authors", "contact"]

export default function Header() {
  return (
    <header className="fixed top-0 left-0 p-4 w-full flex justify-between">
      <NavigationMenu>
        <NavigationMenuList className="flex gap-2">
          {navLinks.map((navLink) => (
            <Link key={navLink} href={navLink === "home" ? "/" : "/" + navLink}>
              {navLink.toUpperCase()}
            </Link>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      <ModeToggle />
    </header>
  )
}
