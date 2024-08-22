import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import ModeToggler from "@/features/ModeToggler"

export default function Header() {
  return (
    <header className="fixed top-0 left-0 p-4 w-full flex justify-between">
      <NavigationMenu>
        <NavigationMenuList className="flex gap-2">
          <NavigationMenuLink href="/">HOME</NavigationMenuLink>
          <NavigationMenuLink href="/test">TEST</NavigationMenuLink>
          <NavigationMenuLink href="/matsuokashuzo">
            松岡修造
          </NavigationMenuLink>
        </NavigationMenuList>
      </NavigationMenu>
      <ModeToggler />
    </header>
  )
}
