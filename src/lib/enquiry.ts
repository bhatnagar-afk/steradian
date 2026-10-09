export const PROJECT_TYPES = ['Residential', 'Interiors', 'Institutional', 'Hospitality', 'Other']

export interface Enquiry {
  name: string
  email: string
  type: string
  message: string
}

const LIMITS = { name: 100, email: 200, message: 5000 }
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// Checks an untrusted request body. Returns the cleaned enquiry, or an error
// message suitable for showing to the visitor.
export function parseEnquiry(body: unknown): { enquiry: Enquiry } | { error: string } {
  if (typeof body !== 'object' || body === null) return { error: 'Invalid request.' }
  const raw = body as Record<string, unknown>
  const field = (key: string) => (typeof raw[key] === 'string' ? (raw[key] as string).trim() : '')

  const enquiry = {
    name: field('name'),
    email: field('email'),
    type: field('type'),
    message: field('message'),
  }

  if (!enquiry.name || !enquiry.email || !enquiry.message) {
    return { error: 'Please fill in your name, email and message.' }
  }
  if (!EMAIL_PATTERN.test(enquiry.email)) return { error: 'Please enter a valid email address.' }
  if (
    enquiry.name.length > LIMITS.name ||
    enquiry.email.length > LIMITS.email ||
    enquiry.message.length > LIMITS.message
  ) {
    return { error: 'Your message is too long.' }
  }
  if (!PROJECT_TYPES.includes(enquiry.type)) enquiry.type = 'Other'

  return { enquiry }
}
