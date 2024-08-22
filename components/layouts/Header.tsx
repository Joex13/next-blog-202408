import ModeToggler from "@/features/ModeToggler"
import Link from "next/link"

export default function Header() {
  return (
    <header className="fixed top-0 left-0 p-4 w-full flex justify-between">
      <ModeToggler />
      <nav>
        <ul className="flex gap-2 h-full items-center">
          <li>
            <Link href="/">HOME</Link>
          </li>
          <li>
            <Link href="test">TEST</Link>
          </li>
          <li>
            <Link href="matsuokashuzo">ERROR</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
