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
          <h3 className="font-bold text-lg mb-4">Steradian Architects</h3>
          <p style={{ color: themeConfig.textMuted }}>
            Designing the future, one building at a time.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-4">Sitemap</h3>
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
          <h3 className="font-bold text-lg mb-4">Contact Us</h3>
          <address
            style={{ color: themeConfig.textMuted }}
            className="not-italic space-y-2"
          >
            <p>
              Steradian Architects, Hotel New Castle Compound, Civil Lines,
              Moradabad - 244001
            </p>
            <p>
              Email:{' '}
              <a
                href="mailto:contact@steradian.com"
                className="hover:underline"
              >
                contact@steradian.com
              </a>
            </p>
            <p>Phone: (123) 456-7890</p>
          </address>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="https://www.instagram.com/steradianarchitects/"
              className="p-3 rounded-full hover:opacity-80 transition"
              style={{ backgroundColor: themeConfig.cardBackground }}
            >
              <fa.FaInstagram style={{ color: themeConfig.textMuted }} />
            </a>
            <a
              href="https://www.linkedin.com/in/nitin-bhatnagar-7112457a/"
              className="p-3 rounded-full hover:opacity-80 transition"
              style={{ backgroundColor: themeConfig.cardBackground }}
            >
              <fa.FaLinkedin style={{ color: themeConfig.textMuted }} />
            </a>
            <a
              href="#"
              className="p-3 rounded-full hover:opacity-80 transition"
              style={{ backgroundColor: themeConfig.cardBackground }}
            >
              <fa.FaFacebookF style={{ color: themeConfig.textMuted }} />
            </a>
          </div>
        </div>
      </div>
      <div
        className="text-center mt-8"
        style={{ color: themeConfig.textMuted }}
      >
        <p>© 2025 Steradian Architects. All rights reserved.</p>
      </div>
    </footer>
  )
}
