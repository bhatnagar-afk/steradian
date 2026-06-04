import ContactTextPage from "@/components/contact/contact-details";
import ContactForm from "@/components/contact/contact-form";
import MapSection from "@/components/contact/map-section";
import {themes} from "@/config/theme";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Steradian Architects',
  description:
    'Contact Steradian Architects for architecture and architect-led design build services in Moradabad, Uttar Pradesh.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Steradian Architects',
    description:
      'Reach Steradian Architects in Moradabad for residential, institutional, hotel, religious and community architecture work.',
    url: '/contact',
  },
}

export default function ContactPage() {
 const themeConfig = themes.dark;
 const themeStyle ={
    backgroundColor: themeConfig.background,
    color: themeConfig.text,
 }
  return (
    <div className="min-h-screen py-16 px-6" style={themeStyle}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left side: text */}
          <ContactTextPage />

          {/* Right side: form */}
          <ContactForm />
        </div>
        <div className="mt-12">
          <MapSection />
        </div>
      </div>
    </div>
  );
}
