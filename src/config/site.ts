const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://steradian.in'
).replace(/\/$/, '')

export const siteConfig = {
  name: 'Steradian Architects',
  shortName: 'Steradian',
  legalName: 'Steradian Architects',
  url: siteUrl,
  description:
    'Steradian Architects is an architect-led design and build practice in Moradabad, Uttar Pradesh, creating residences, institutions, hotels, religious and community spaces.',
  tagline: 'Designing spaces that endure, inspire, and belong.',
  email: 'steradianarchitects@gmail.com',
  phone: '+91 97616 74409',
  telephoneHref: '+919761674409',
  addresses: [
    {
    streetAddress: 'Hotel New Castle Compound',
    addressLocality: 'Moradabad',
    postalCode: '244001',
    addressRegion: 'Uttar Pradesh',
    addressCountry: 'IN',
    },
    {
    streetAddress: 'A-722, T3, NX One, TechZone IV',
    addressLocality: 'Greater Noida',
    postalCode: '201318',
    addressRegion: 'Uttar Pradesh',
    addressCountry: 'IN',
  }],
  areaServed: ['Moradabad', 'Noida', 'Ghaziabad', 'Nainital', 'Bijnor', 'Uttar Pradesh', 'India'],
  foundingYear: '1984',
}

export const getAbsoluteUrl = (path = '/') =>
  new URL(path, siteConfig.url).toString()

export const socialLinks = [
  process.env.NEXT_PUBLIC_INSTAGRAM_URL,
  process.env.NEXT_PUBLIC_LINKEDIN_URL,
  process.env.NEXT_PUBLIC_FACEBOOK_URL,
].filter(Boolean) as string[]
