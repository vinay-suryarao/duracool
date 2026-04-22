import { siteConfig } from '../config/siteConfig'

function AboutPage() {
  return (
    <section className="content-section">
      <div className="section-head">
        <p className="section-badge">About Us</p>
        <h2>Built for comfort, clarity, and long-term protection.</h2>
      </div>

      <div className="about-grid">
        <article className="panel">
          <h3>Vision</h3>
          <p>
            To become the most trusted automotive film studio for heat control,
            UV safety, and premium visual finish.
          </p>
        </article>

        <article className="panel">
          <h3>Mission</h3>
          <p>
            To deliver precision installations, honest recommendations, and
            lasting film performance for every customer.
          </p>
        </article>

        <article className="panel">
          <h3>Company Snapshot</h3>
          <p>Active since {siteConfig.establishedYear}.</p>
          <p>
            Specialized in window tinting, sun control films, and quality-driven
            detailing services.
          </p>
        </article>

        <article className="panel">
          <h3>Owner Details</h3>
          <p>
            {siteConfig.ownerName} - {siteConfig.ownerRole}
          </p>
          <p>{siteConfig.ownerBio}</p>
        </article>
      </div>
    </section>
  )
}

export default AboutPage
