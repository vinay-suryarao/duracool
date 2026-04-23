import { siteConfig } from '../config/siteConfig'

const contactInfo = {
  email: siteConfig.contactPageEmail,
  phone: siteConfig.contactPagePhone,
  whatsappUrl: siteConfig.contactPageWhatsappUrl,
  instagramUrl: siteConfig.contactPageInstagramUrl,
  mapUrl: siteConfig.contactPageMapUrl,
  mapEmbedUrl: siteConfig.contactPageMapEmbedUrl,
  addressLines: [siteConfig.contactPageAddressLine1, siteConfig.contactPageAddressLine2],
}

function ContactPage() {
  return (
    <section className="content-section contact-page">
      <div className="contact-noise" aria-hidden="true" />
      <div className="contact-reference-layout">
        <article className="contact-panel contact-left-panel">
          <div className="contact-panel-head">
            <p className="section-badge">Contact Us</p>
            <h2>Get In Touch</h2>
            <p>Choose the fastest way to connect with DuraCool.</p>
          </div>

          <div className="contact-method-grid">
            <a
              className="contact-method-card"
              href={contactInfo.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Chat on WhatsApp"
            >
              <span className="contact-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.52 3.49A11.85 11.85 0 0 0 12.08 0C5.55 0 .21 5.26.2 11.74c0 2.06.54 4.07 1.57 5.84L0 24l6.61-1.73a11.92 11.92 0 0 0 5.46 1.39h.01c6.53 0 11.87-5.27 11.88-11.75a11.66 11.66 0 0 0-3.44-8.42Zm-8.44 18.2h-.01a9.88 9.88 0 0 1-5.03-1.38l-.36-.21-3.92 1.03 1.05-3.79-.23-.39a9.78 9.78 0 0 1-1.5-5.2c0-5.4 4.48-9.8 10-9.8a9.86 9.86 0 0 1 7.04 2.91 9.71 9.71 0 0 1 2.9 6.93c0 5.4-4.48 9.9-9.94 9.9ZM17.5 14.2c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.46-.88-.77-1.48-1.72-1.65-2.02-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.48-.5-.67-.51l-.57-.01c-.2 0-.52.08-.8.37-.27.3-1.04 1.01-1.04 2.46 0 1.45 1.07 2.85 1.22 3.05.15.2 2.1 3.22 5.23 4.39.75.32 1.33.5 1.78.64.75.23 1.43.2 1.97.12.6-.09 1.77-.72 2.02-1.4.25-.68.25-1.27.17-1.39-.07-.12-.27-.2-.57-.35Z" />
                </svg>
              </span>
              <strong>WhatsApp</strong>
              <small>Chat on {contactInfo.phone}</small>
            </a>

            <a
              className="contact-method-card"
              href={contactInfo.instagramUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Open Instagram"
            >
              <span className="contact-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7.75 2h8.5C19.42 2 22 4.58 22 7.75v8.5c0 3.17-2.58 5.75-5.75 5.75h-8.5C4.58 22 2 19.42 2 16.25v-8.5C2 4.58 4.58 2 7.75 2Zm-.2 2A3.56 3.56 0 0 0 4 7.55v8.9A3.56 3.56 0 0 0 7.55 20h8.9A3.56 3.56 0 0 0 20 16.45v-8.9A3.56 3.56 0 0 0 16.45 4h-8.9Zm9.95 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
                </svg>
              </span>
              <strong>Instagram</strong>
              <small>@dura.cool</small>
            </a>

            <a className="contact-method-card" href={`mailto:${contactInfo.email}`}>
              <span className="contact-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M2 6.5A2.5 2.5 0 0 1 4.5 4h15A2.5 2.5 0 0 1 22 6.5v11a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 17.5v-11Zm2.2-.38a.5.5 0 0 0-.2.4v.27l8 5.72 8-5.72v-.27a.5.5 0 0 0-.5-.5h-15a.5.5 0 0 0-.3.1Zm15.8 3.1-7.42 5.3a1 1 0 0 1-1.16 0L4 9.22v8.28c0 .28.22.5.5.5h15a.5.5 0 0 0 .5-.5V9.22Z" />
                </svg>
              </span>
              <strong>Email</strong>
              <small>{contactInfo.email}</small>
            </a>

            <a className="contact-method-card" href={`tel:${contactInfo.phone}`}>
              <span className="contact-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.8a15.98 15.98 0 0 0 6.58 6.58l2.2-2.2c.27-.27.67-.36 1.03-.24 1.12.37 2.32.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.61 21 3 13.39 3 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.12.36.03.76-.24 1.03l-2.2 2.2Z" />
                </svg>
              </span>
              <strong>Phone</strong>
              <small>{contactInfo.phone}</small>
            </a>
          </div>
        </article>

        <article className="contact-panel contact-right-panel">
          <div className="contact-panel-head">
            <p className="section-badge">Location</p>
            <h2>Visit Our Workshop</h2>
            <p>Tap map for direct navigation on Google Maps.</p>
          </div>

          <div className="contact-map-card">
            <iframe
              src={contactInfo.mapEmbedUrl}
              title="DuraCool Location Map"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <a
              href={contactInfo.mapUrl}
              className="contact-map-overlay"
              target="_blank"
              rel="noreferrer"
              aria-label="Open map location in Google Maps"
            >
              Open In Maps
            </a>
          </div>

          <div className="contact-address-card">
            <span className="contact-address-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2a7 7 0 0 0-7 7c0 5.13 7 13 7 13s7-7.87 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z" />
              </svg>
            </span>
            <div>
              <h3>Address</h3>
              <p>{contactInfo.addressLines[0]}</p>
              <p>{contactInfo.addressLines[1]}</p>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}

export default ContactPage
