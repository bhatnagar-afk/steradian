import { siteConfig } from '@/config/site'

export function ContactInfo() {
  const instagram = process.env.NEXT_PUBLIC_INSTAGRAM_URL

  return (
    <div className="st-contact-info">
      {siteConfig.addresses.map((address) => (
        <div className="st-contact-block" key={address.addressLocality}>
          <span className="st-eyebrow st-eyebrow--on-ink">Studio — {address.addressLocality}</span>
          <p>
            {address.streetAddress}
            <br />
            {address.addressLocality} {address.postalCode}
            <br />
            {address.addressRegion}, {address.addressCountry === 'IN' ? 'India' : address.addressCountry}
          </p>
        </div>
      ))}
      <div className="st-contact-block">
        <span className="st-eyebrow st-eyebrow--on-ink">Email</span>
        <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
      </div>
      <div className="st-contact-block">
        <span className="st-eyebrow st-eyebrow--on-ink">Phone</span>
        <a href={`tel:${siteConfig.telephoneHref}`}>{siteConfig.phone}</a>
      </div>
      {instagram && (
        <div className="st-contact-block">
          <span className="st-eyebrow st-eyebrow--on-ink">Instagram</span>
          <a href={instagram} target="_blank" rel="noopener noreferrer">
            Follow the studio
          </a>
        </div>
      )}
    </div>
  )
}
