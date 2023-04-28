'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function Tabs() {
  const pathname = usePathname()

  return (
    <nav
      className="flex justify-center border-b border-stone-300"
      aria-label="page navigation"
    >
      <Link
        className={`px-8 py-4 font-semibold border-b-4 ${
          pathname === '/'
            ? 'border-blue-600 text-blue-700'
            : 'text-stone-600 border-transparent'
        }`}
        href="/"
      >
        Feed
      </Link>
      <Link
        className={`px-8 py-4 font-semibold border-b-4 ${
          pathname === '/settings'
            ? 'border-blue-600 text-blue-700'
            : 'text-stone-600 border-transparent'
        }`}
        href="/settings"
      >
        Settings
      </Link>
      <Link
        className={`px-8 py-4 font-semibold border-b-4 ${
          pathname === '/profile'
            ? 'border-blue-600 text-blue-700'
            : 'text-stone-600 border-transparent'
        }`}
        href="/profile"
      >
        Profile
      </Link>
    </nav>
  )
}
