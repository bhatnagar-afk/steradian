const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://steradian.in'
).replace(/\/$/, '')

export type StudioAddress = {
  id: string
  streetAddress: string
  addressLocality: string
  postalCode: string
  addressRegion: string
  addressCountry: string
  // Optional until the firm supplies them — structured data only emits what
  // is set here, so nothing is guessed.
  geo?: { latitude: number; longitude: number }
  mapUrl?: string
  openingHours?: string[]
}

const addresses: StudioAddress[] = [
  {
    id: 'moradabad',
    streetAddress: 'Hotel New Castle Compound',
    addressLocality: 'Moradabad',
    postalCode: '244001',
    addressRegion: 'Uttar Pradesh',
    addressCountry: 'IN',
    mapUrl: 'https://share.google/LpJ5NGEqAPNmCU47n',
    openingHours: ['Mo-Sa 11:00-19:30'],
  },
  {
    id: 'greater-noida',
    streetAddress: 'A-722, T3, NX One, TechZone IV',
    addressLocality: 'Greater Noida',
    postalCode: '201318',
    addressRegion: 'Uttar Pradesh',
    addressCountry: 'IN',
    mapUrl: 'https://share.google/6m6T2upiaidmdmy1R',
    openingHours: ['Mo-Sa 11:00-19:30'],
  },
]

export const siteConfig = {
  name: 'Steradian Architects',
  shortName: 'Steradian',
  legalName: 'Steradian Architects',
  url: siteUrl,
  description:
    'Steradian Architects is an architecture, interior design and design-build practice in Moradabad, Uttar Pradesh, established in 1984, with a second studio in Greater Noida.',
  tagline: 'Designing spaces that endure, inspire, and belong.',
  email: 'steradianarchitects@gmail.com',
  phone: '+91 97616 74409',
  telephoneHref: '+919761674409',
  addresses,
  areaServed: {
    cities: [
      'Moradabad',
      'Greater Noida',
      'Noida',
      'Ghaziabad',
      'Rampur',
      'Amroha',
      'Sambhal',
      'Bijnor',
      'Nainital',
      'Kashipur',
      'Rudrapur',
    ],
    states: ['Uttar Pradesh', 'Uttarakhand'],
  },
  foundingYear: '1984',
}

export type Principal = {
  name: string
  role: string
  linkedin: string
  alumniOf?: string
  bio: string[]
}

export const principals: Principal[] = [
  {
    name: 'Ar. Rajesh Bhatnagar',
    role: 'Founding Principal',
    linkedin: 'https://www.linkedin.com/in/rajesh-bhatnagar-82085734/',
    alumniOf: 'Indian Institute of Technology Roorkee',
    bio: [
      'With over four decades of architectural practice, Rajesh Bhatnagar brings unmatched depth, discipline and vision to Steradian Architects. An alumnus of IIT Roorkee, his work balances timeless design with functional clarity.',
      'Since 1984, he has led projects spanning residences, institutions, and religious and community buildings, defined by precision and contextual sensitivity.',
    ],
  },
  {
    name: 'Ar. Nitin Bhatnagar',
    role: 'Principal',
    linkedin: 'https://www.linkedin.com/in/nitin-bhatnagar-7112457a/',
    bio: [
      'As the next generation of leadership, Nitin Bhatnagar brings innovation, experimentation and a sensory-driven design philosophy to the practice.',
      'His work emphasises human scale, sustainability and material honesty — blending contemporary thinking with the studio’s legacy.',
    ],
  },
]

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'Practice' },
  { href: '/contact', label: 'Contact' },
]

export const getAbsoluteUrl = (path = '/') =>
  new URL(path, siteConfig.url).toString()

// Pages that don't have a more specific image (a project's own photo, say)
// fall back to this generated brand card. Referenced explicitly on every
// page's metadata — Next's automatic opengraph-image convention isn't
// reliably merged into routes that define their own `openGraph` object.
export const defaultOgImage = { url: '/opengraph-image', width: 1200, height: 630 }

export const socialLinks = [
  process.env.NEXT_PUBLIC_INSTAGRAM_URL,
  process.env.NEXT_PUBLIC_LINKEDIN_URL,
  process.env.NEXT_PUBLIC_FACEBOOK_URL,
].filter(Boolean) as string[]
