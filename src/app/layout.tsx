import './globals.css'
import { Fraunces, Archivo, IBM_Plex_Mono } from 'next/font/google'
import { SiteNav } from '@/components/site/site-nav'
import { SiteFooter } from '@/components/site/site-footer'
import type { Metadata } from 'next'
import { siteConfig } from '@/config/site'
import { StructuredData } from '@/components/seo/structured-data'

const serif = Fraunces({
  subsets: ['latin'],
  variable: '--font-st-serif',
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  display: 'swap',
})
const sans = Archivo({
  subsets: ['latin'],
  variable: '--font-st-sans',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})
const mono = IBM_Plex_Mono({
  subsets: ['latin'],
  variable: '--font-st-mono',
  weight: ['400', '500'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  title: {
    default: `${siteConfig.name} | Architect Firm in Moradabad`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: '/',
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Architect Firm in Moradabad`,
    description: siteConfig.description,
    images: [
      {
        url: '/home-page-bg.jpeg',
        width: 2560,
        height: 1491,
        alt: `${siteConfig.name} architecture portfolio`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} | Architect Firm in Moradabad`,
    description: siteConfig.description,
    images: ['/home-page-bg.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  category: 'Architecture',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable} ${mono.variable}`}>
      <body>
        <StructuredData />
        <SiteNav />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  )
}
