import type { Enquiry } from '@/lib/enquiry'

// Posts the contact form to /api/contact. Throws with the server's message if
// the enquiry could not be sent.
export async function sendEnquiry(payload: Enquiry & { website?: string }) {
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })

  if (!response.ok) {
    const data = await response.json().catch(() => null)
    throw new Error(data?.error || 'Could not send your message.')
  }
}
