'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { colors, themes } from '@/config/theme'
import { Button } from './ui/button'
export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  return (
    <nav
      className="border-b"
      style={{
        backgroundColor: themes.dark.background,
        color: themes.dark.text,
        borderColor: themes.dark.border,
      }}
    >
      <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between p-4">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="mx-2">
            <Image
              src="/logo.png"
              width={32}
              height={32}
              alt="Steradian Logo"
              className="rounded-full"
            />
          </span>
          <span className="text-xl font-semibold">Steradian Architects</span>
        </Link>

        {/* Hamburger */}
        <Button
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          className="md:hidden p-2 rounded-lg"
          style={{ color: 'var(--fg)' }}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 17 14"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </Button>

        {/* Menu */}
        <div
          ref={menuRef}
          className={`${isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`}
        >
          <ul
            className="flex flex-col md:flex-row md:gap-8 mt-4 md:mt-0 rounded-lg md:rounded-none"
            style={{ backgroundColor: 'var(--bg)' }}
          >
            {['/', '/about', '/projects', '/contact'].map((href, i) => (
              <li key={i}>
                <Link
                  href={href}
                  className="block px-3 py-2 transition-colors"
                  style={{
                    color: themes.dark.foreground,
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = colors.accent)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = colors.darkForeground)
                  }
                >
                  {href === '/'
                    ? 'Home'
                    : href.slice(1).charAt(0).toUpperCase() + href.slice(2)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}
