'use client'

import { useState } from 'react'
import { sendEnquiry } from '@/lib/email'
import { PROJECT_TYPES } from '@/lib/enquiry'

type Status = 'idle' | 'sending' | 'sent' | 'error'

export function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    type: PROJECT_TYPES[0],
    message: '',
    website: '',
  })
  const [status, setStatus] = useState<Status>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      await sendEnquiry(form)
      setStatus('sent')
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : '')
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return <p className="st-form-note st-form-note--visible">Thank you — we&apos;ll be in touch shortly.</p>
  }

  return (
    <form className="st-contact-form" onSubmit={handleSubmit}>
      <div className="st-field">
        <label htmlFor="cf-name">Name</label>
        <input
          id="cf-name"
          name="name"
          type="text"
          placeholder="Your name"
          value={form.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="st-field">
        <label htmlFor="cf-email">Email</label>
        <input
          id="cf-email"
          name="email"
          type="email"
          placeholder="you@email.com"
          value={form.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="st-field">
        <label htmlFor="cf-type">Project Type</label>
        <select id="cf-type" name="type" value={form.type} onChange={handleChange}>
          {PROJECT_TYPES.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>
      <div className="st-field">
        <label htmlFor="cf-message">Message</label>
        <textarea
          id="cf-message"
          name="message"
          placeholder="Tell us about the project"
          value={form.message}
          onChange={handleChange}
          required
        />
      </div>
      {/* Honeypot: hidden from people, filled in by spam bots. */}
      <input
        name="website"
        type="text"
        value={form.website}
        onChange={handleChange}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ position: 'absolute', left: '-9999px' }}
      />
      <div className="st-submit-row">
        <button type="submit" className="st-submit-btn" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending…' : 'Send Enquiry'}
        </button>
        {status === 'error' && (
          <p className="st-form-note st-form-note--visible st-form-note--error">
            {errorMessage || 'Something went wrong.'} Please try again, or email us directly.
          </p>
        )}
      </div>
    </form>
  )
}
