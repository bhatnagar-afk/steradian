import type { Metadata } from 'next'
import { ContactSection } from '@/components/contact/contact-section'
import { Map } from '@/components/contact/map'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact Steradian Architects for architecture, interiors and design-build work in Moradabad, Greater Noida and across Uttar Pradesh, North India.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact — Steradian Architects',
    description: 'Reach Steradian Architects in Moradabad and Greater Noida, Uttar Pradesh.',
    url: '/contact',
  },
}

export default function ContactPage() {
  return (
    <div className="st-page">
      <ContactSection headingLevel="h1" />
      <Map />
    </div>
  )
}
