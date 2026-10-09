import { describe, it, expect, vi, beforeEach } from 'vitest'
import { parseEnquiry } from '../src/lib/enquiry'

const send = vi.fn()
vi.mock('resend', () => ({
  Resend: class {
    emails = { send }
  },
}))

const { POST } = await import('../src/app/api/contact/route')

const valid = { name: 'Asha', email: 'asha@example.com', type: 'Interiors', message: 'A flat in Dehradun' }

const post = (body: unknown) =>
  POST(new Request('http://localhost/api/contact', { method: 'POST', body: JSON.stringify(body) }))

describe('parseEnquiry', () => {
  it('accepts and trims a complete enquiry', () => {
    expect(parseEnquiry({ ...valid, name: '  Asha ' })).toEqual({ enquiry: valid })
  })

  it('rejects missing fields and bad emails', () => {
    expect(parseEnquiry({ ...valid, message: ' ' })).toHaveProperty('error')
    expect(parseEnquiry({ ...valid, email: 'not-an-email' })).toHaveProperty('error')
    expect(parseEnquiry(null)).toHaveProperty('error')
  })

  it('falls back to Other for an unknown project type', () => {
    expect(parseEnquiry({ ...valid, type: 'Spaceship' })).toEqual({ enquiry: { ...valid, type: 'Other' } })
  })
})

describe('POST /api/contact', () => {
  beforeEach(() => {
    send.mockReset().mockResolvedValue({ data: { id: '1' }, error: null })
    vi.stubEnv('RESEND_API_KEY', 're_test')
    vi.stubEnv('CONTACT_FROM_EMAIL', 'Website <enquiries@steradian.in>')
  })

  it('emails the studio with the visitor as reply-to', async () => {
    const response = await post(valid)
    expect(response.status).toBe(200)
    expect(send).toHaveBeenCalledWith(
      expect.objectContaining({
        to: 'steradianarchitects@gmail.com',
        replyTo: valid.email,
        from: '"Asha via Steradian Website" <enquiries@steradian.in>',
      }),
    )
  })

  it('rejects an invalid enquiry without sending', async () => {
    expect((await post({ ...valid, email: '' })).status).toBe(400)
    expect(send).not.toHaveBeenCalled()
  })

  it('quietly drops honeypot submissions', async () => {
    expect((await post({ ...valid, website: 'spam.example' })).status).toBe(200)
    expect(send).not.toHaveBeenCalled()
  })

  it('reports a failure when Resend rejects the email', async () => {
    send.mockResolvedValue({ data: null, error: { message: 'domain not verified' } })
    vi.spyOn(console, 'error').mockImplementation(() => {})
    expect((await post(valid)).status).toBe(502)
  })

  it('reports a failure when the API key is missing', async () => {
    vi.stubEnv('RESEND_API_KEY', '')
    vi.spyOn(console, 'error').mockImplementation(() => {})
    expect((await post(valid)).status).toBe(500)
  })
})
