'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { borderRadius } from '@/config/theme'
import { usePathname } from 'next/navigation'
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

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <header
        className="pointer-events-auto flex items-center gap-10 px-8 py-3 rounded-full
                   bg-white/10 backdrop-blur-md border border-white/20 shadow-lg"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div
  className="w-8 h-8 relative overflow-hidden"
  style={{
    borderRadius: borderRadius.full,
  }}
>
  <Image
    src="/logo.png" // adjust path if needed
    alt="Steradian Architects Logo"
    fill
    className="object-contain"
    priority
  />
</div>

          <div className="flex flex-col leading-none">
            <span className="text-xs uppercase tracking-widest text-white">
              Steradian
            </span>
            <span className="text-[10px] text-gray-400">
              Architects
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-wide text-gray-300">
          {links.map(link => {
            const active = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors ${
                  active
                    ? 'text-white'
                    : 'hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        {/* Mobile Toggle */}
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 bg-transparent hover:bg-white/10"
          aria-label="Toggle menu"
        >
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </Button>

        {/* Mobile Menu */}
        {isOpen && (
          <div
            ref={menuRef}
            className="absolute top-16 left-1/2 -translate-x-1/2
                       bg-black/90 backdrop-blur-md border border-white/10
                       rounded-xl px-6 py-4 md:hidden"
          >
            <ul className="flex flex-col gap-4 text-sm text-gray-300">
              {links.map(link => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>
    </div>
  )
}
