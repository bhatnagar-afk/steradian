import { themes } from '@/config/theme'
import Link from 'next/link'
import * as fa from 'react-icons/fa'

export default function Footer() {
  const themeConfig = themes.dark

  return (
    <footer
      style={{
        backgroundColor: themeConfig.background,
        color: themeConfig.text,
        borderTop: `1px solid ${themeConfig.border}`,
      }}
      className="p-8"
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-bold text-lg mb-2">Steradian Architects</h3>
          <p style={{ color: themeConfig.textMuted }}>
            Designing the future, one building at a time.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-2">Sitemap</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:underline">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-2">Contact Us</h3>
          <address
            style={{ color: themeConfig.textMuted }}
            className="not-italic space-y-2"
          >
            <address className="not-italic text-sm">
              <a
                href="https://www.google.com/maps?q=SteradianArchitects"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white underline underline-offset-2"
              >
                Steradian Architects,
                <br />
                Hotel New Castle Compound, <br />
                Moradabad - 244001 <br />
                Uttar Pradesh, India
              </a>
            </address>
            <p>
              Email:{' '}
              <a href="mailto:contact@steradian.in" className="hover:underline">
                contact@steradian.in
              </a>
            </p>
            <p>Phone: +91 97616 74409</p>
          </address>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-2">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href={process.env.NEXT_PUBLIC_INSTAGRAM_URL || "#"}
              aria-label="Instagram"
              style={{ color: themeConfig.text }}
            >
              <fa.FaInstagram />
            </a>
            <a
              href={process.env.NEXT_PUBLIC_LINKEDIN_URL || "#"}
              aria-label="LinkedIn"
              style={{ color: themeConfig.text }}
            >
              <fa.FaLinkedin />
            </a>
            <a
              href={process.env.NEXT_PUBLIC_FACEBOOK_URL || '#'}
              aria-label="Facebook"
              style={{ color: themeConfig.text }}
            >
              <fa.FaFacebookF />
            </a>
          </div>
        </div>
      </div>
      <div
        className="text-center mt-8"
        style={{ color: themeConfig.textMuted }}
      >
        <p>© 2026 Steradian Architects. All rights reserved.</p>
      </div>
    </footer>
  )
}
