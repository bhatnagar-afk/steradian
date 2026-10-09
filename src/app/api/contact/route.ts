import { Resend } from 'resend'
import { siteConfig } from '@/config/site'
import { parseEnquiry } from '@/lib/enquiry'

// Receives the contact form and emails it to the studio through Resend.
// Needs RESEND_API_KEY and CONTACT_FROM_EMAIL (an address on a domain verified
// in Resend). CONTACT_TO_EMAIL is optional and defaults to the studio inbox.
//
// The email can't be sent from the visitor's own address — Resend only sends
// from verified domains, and Gmail would flag it as spoofed — so it goes out
// from the studio domain under the visitor's name, with Reply-To set to them.
export async function POST(request: Request) {
  const body = await request.json().catch(() => null)

  // Bots fill in every field, including the hidden "website" one.
  if (body?.website) return Response.json({ ok: true })

  const result = parseEnquiry(body)
  if ('error' in result) return Response.json({ error: result.error }, { status: 400 })
  const { enquiry } = result

  const apiKey = process.env.RESEND_API_KEY
  const from = process.env.CONTACT_FROM_EMAIL
  if (!apiKey || !from) {
    console.error('Contact form: RESEND_API_KEY or CONTACT_FROM_EMAIL is not set')
    return Response.json({ error: 'Email is not configured.' }, { status: 500 })
  }

  // Accept either "enquiries@steradian.in" or "Name <enquiries@steradian.in>".
  const fromAddress = from.match(/<([^>]+)>/)?.[1] ?? from
  const senderName = enquiry.name.replace(/["<>\\\r\n]/g, '')

  const { error } = await new Resend(apiKey).emails.send({
    from: `"${senderName} via Steradian Website" <${fromAddress}>`,
    to: process.env.CONTACT_TO_EMAIL || siteConfig.email,
    replyTo: enquiry.email,
    subject: `New enquiry from ${enquiry.name} (${enquiry.type})`,
    text: [
      `Name: ${enquiry.name}`,
      `Email: ${enquiry.email}`,
      `Project type: ${enquiry.type}`,
      '',
      enquiry.message,
    ].join('\n'),
  })

  if (error) {
    console.error('Contact form: Resend rejected the email', error)
    return Response.json({ error: 'Could not send your message.' }, { status: 502 })
  }

  return Response.json({ ok: true })
}
