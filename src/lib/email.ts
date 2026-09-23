import emailjs from 'emailjs-com'

export interface EnquiryPayload {
  name: string
  email: string
  message: string
  [key: string]: unknown
}

export function sendEnquiry(payload: EnquiryPayload) {
  return emailjs.send(
    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
    payload,
    process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '',
  )
}
