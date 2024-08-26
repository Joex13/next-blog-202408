import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { ModeToggle } from "@/features/ModeToggle"

const routes = ["HOME", "AUTHORS", "CONTACT"]

export default function Header() {
  return (
    <header className="fixed top-0 left-0 p-4 w-full flex justify-between">
      <NavigationMenu>
        <NavigationMenuList className="flex gap-2">
          {routes.map((route) => (
            <NavigationMenuLink href={route === "HOME" ? "/" : route}>
              {route}
            </NavigationMenuLink>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      <ModeToggle />
    </header>
  )
}
