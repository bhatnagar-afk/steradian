import * as fa from 'react-icons/fa'
import { themes } from '@/config/theme'

export default function ContactTextPage() {
  const themeConfig = themes.dark

  return (
    <div className="flex flex-col justify-center">
      <h1
        className="text-3xl md:text-4xl font-bold mb-6"
        style={{ color: themeConfig.text }}
      >
        Let&apos;s design something extraordinary together.
      </h1>

      <div className="space-y-5" style={{ color: themeConfig.textMuted }}>
        {/* Address */}
        <div>
          <p>
            <fa.FaMapMarkerAlt className="inline-block mr-2" />
            <span className="font-bold">Office Address:</span>
          </p>

          <div className="pl-6">
            <a
              href="https://www.google.com/maps?q=SteradianArchitects"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white underline underline-offset-2 block"
            >
              Steradian Architects,<br />
              Hotel New Castle Compound,<br />
              Moradabad – 244001
            </a>
          </div>
        </div>

        {/* Email */}
        <div>
          <p>
            <fa.FaEnvelope className="inline-block mr-2" />
            <span className="font-bold">Email:</span>
          </p>

          <div className="pl-6">
            <a
              href="mailto:contact@steradian.in"
              className="hover:text-white underline underline-offset-2"
            >
              contact@steradian.in
            </a>
          </div>
        </div>

        {/* Phone */}
        <div>
          <p>
            <fa.FaPhoneAlt className="inline-block mr-2" />
            <span className="font-bold">Phone:</span>
          </p>

          <div className="pl-6">
            <a
              href="tel:+919761674409"
              className="hover:text-white underline underline-offset-2"
            >
              +91 97616 74409
            </a>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="mt-6 flex space-x-4">
        <a
          href={process.env.NEXT_PUBLIC_FACEBOOK_URL || '#'}
          className="p-3 rounded-full hover:opacity-80 transition"
          style={{ backgroundColor: themeConfig.cardBackground }}
        >
          <fa.FaFacebookF style={{ color: themeConfig.textMuted }} />
        </a>
        <a
          href={process.env.NEXT_PUBLIC_LINKEDIN_URL || "#"}
          className="p-3 rounded-full hover:opacity-80 transition"
          style={{ backgroundColor: themeConfig.cardBackground }}
        >
          <fa.FaLinkedinIn style={{ color: themeConfig.textMuted }} />
        </a>
        <a
          href={process.env.NEXT_PUBLIC_INSTAGRAM_URL || '#'}
          className="p-3 rounded-full hover:opacity-80 transition"
          style={{ backgroundColor: themeConfig.cardBackground }}
        >
          <fa.FaInstagram style={{ color: themeConfig.textMuted }} />
        </a>
      </div>
    </div>
  )
}
