import { siteConfig } from '../config/siteConfig'

function ContactPage() {
  return (
    <section className="content-section">
      <div className="section-head">
        <p className="section-badge">Contact Us</p>
        <h2>Reach us instantly on social media</h2>
      </div>

      <div className="contact-grid">
        <a href={siteConfig.instagramUrl} target="_blank" rel="noreferrer">
          Instagram
        </a>
        <a href={siteConfig.whatsappUrl} target="_blank" rel="noreferrer">
          WhatsApp
        </a>
        <a href={siteConfig.facebookUrl} target="_blank" rel="noreferrer">
          Facebook
        </a>
      </div>

      <div className="contact-lines">
        <p>Email: {siteConfig.contactEmail}</p>
        <p>Phone: {siteConfig.contactPhone}</p>
      </div>
    </section>
  )
}

export default ContactPage
