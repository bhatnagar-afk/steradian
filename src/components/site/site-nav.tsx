'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Glyph } from './glyph'
import { navLinks } from '@/config/site'

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <>
      <header className={`st-nav ${scrolled ? 'st-nav--compact' : 'st-nav--on-dark'}`}>
        <div className="st-nav-inner">
          <Link href="/" className="st-nav-mark" aria-label="Steradian Architects, home">
            <Glyph className="st-nav-mark-glyph" />
            <span className="st-nav-word">
              STERADIAN
              <small>ARCHITECTS</small>
            </span>
          </Link>
          <nav className="st-nav-links" aria-label="Primary">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>
          <button
            type="button"
            className="st-nav-toggle"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen(true)}
          >
            <span />
          </button>
        </div>
      </header>

      <div
        id="mobile-menu"
        className={`st-mobile-menu ${menuOpen ? 'st-mobile-menu--open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
      >
        <div className="st-mobile-menu-top">
          <button type="button" className="st-mobile-menu-mark" aria-label="Close menu" onClick={() => setMenuOpen(false)}>
            <Glyph className="st-mobile-menu-glyph" />
          </button>
        </div>
        <nav aria-label="Mobile">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="st-mobile-menu-foot">
          Moradabad, Uttar Pradesh, India
          <br />
          steradianarchitects@gmail.com
        </div>
      </div>
    </>
  )
}
