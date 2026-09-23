import Link from 'next/link'
import { siteConfig } from '@/config/site'
import { Glyph } from './glyph'

const socials = [
  { label: 'Instagram', href: process.env.NEXT_PUBLIC_INSTAGRAM_URL },
  { label: 'LinkedIn', href: process.env.NEXT_PUBLIC_LINKEDIN_URL },
  { label: 'Facebook', href: process.env.NEXT_PUBLIC_FACEBOOK_URL },
].filter((s): s is { label: string; href: string } => Boolean(s.href))

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="st-footer">
      <div className="st-wrap">
        <div className="st-footer-top">
          <div className="st-footer-mark">
            <Glyph className="st-footer-mark-glyph" />
            <span>Steradian Architects</span>
          </div>
          <div className="st-footer-cols">
            <div className="st-footer-col">
              <span className="st-eyebrow st-eyebrow--on-ink">Practice</span>
              <span>Architecture</span>
              <span>Interiors</span>
              <span>Design-Build</span>
            </div>
            <div className="st-footer-col">
              <span className="st-eyebrow st-eyebrow--on-ink">Studios</span>
              {siteConfig.addresses.map((address) => (
                <span key={address.addressLocality}>{address.addressLocality}</span>
              ))}
              <span>India</span>
            </div>
            <nav className="st-footer-col" aria-label="Footer">
              <span className="st-eyebrow st-eyebrow--on-ink">Connect</span>
              {socials.map((social) => (
                <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer">
                  {social.label}
                </a>
              ))}
              <a href={`mailto:${siteConfig.email}`}>Email</a>
              <Link href="/#contact">Contact</Link>
            </nav>
          </div>
        </div>
        <div className="st-footer-bottom">
          <span>
            © {year} Steradian Architects — Architects and interior designers in Moradabad, Uttar Pradesh
          </span>
          <span>Est. {siteConfig.foundingYear} — Moradabad, India</span>
        </div>
      </div>
    </footer>
  )
}
