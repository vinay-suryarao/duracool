import { siteConfig } from '../config/siteConfig'
import aboutImageOne from '../assets/about1.jpg'
import aboutImageTwo from '../assets/about2.jpg'
import aboutImageThree from '../assets/about3.jpg'

function AboutPage() {
  return (
    <section className="content-section about-page">
      <div className="section-head about-head">
        <p className="section-badge">About Us</p>
        <h2>Built for comfort, clarity, and long-term protection.</h2>
        <p>
          Duracool delivers advanced sun protection films with precision
          installation and trusted after-support for every vehicle owner.
        </p>
      </div>

      <div className="about-vision-mission-grid">
        <article className="about-focus-card about-vision-card">
          <div className="about-focus-head">
            <span className="about-focus-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 12C4.8 7.6 8 5.5 12 5.5C16 5.5 19.2 7.6 22 12C19.2 16.4 16 18.5 12 18.5C8 18.5 4.8 16.4 2 12Z" stroke="currentColor" strokeWidth="1.7"/>
                <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.7"/>
              </svg>
            </span>
            <h3>Vision</h3>
          </div>
          <p>
            To become India&apos;s most trusted name for automotive and architectural
            sun protection, known for cooler cabins, safer interiors, and premium
            finish quality.
          </p>
          <small>Driven by innovation in film technology.</small>
        </article>

        <article className="about-focus-card about-mission-card">
          <div className="about-focus-head">
            <span className="about-focus-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L20 6.5V11.8C20 16.6 16.8 20.9 12 22C7.2 20.9 4 16.6 4 11.8V6.5L12 2Z" stroke="currentColor" strokeWidth="1.7"/>
                <path d="M8.6 12.3L10.9 14.6L15.5 10" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            <h3>Mission</h3>
          </div>
          <p>
            To provide the right film, precise fitment, and transparent guidance
            so every Duracool customer gets long-lasting UV protection, heat
            reduction, and confident driving comfort.
          </p>
          <small>
            Protecting vehicles with quality standards since {siteConfig.establishedYear}.
          </small>
        </article>
      </div>

      <section className="about-why-section" aria-labelledby="why-choose-duracool">
        <div className="about-why-copy">
          <h3 id="why-choose-duracool">Why Choose Us?</h3>
          <p>
            We combine premium sun film products, expert installation, and
            customer-first service to keep your vehicle protected in every
            season.
          </p>

          <div className="about-why-list" role="list">
            <article className="about-why-item" role="listitem">
              <span className="about-why-icon" aria-hidden="true">
                UV
              </span>
              <div>
                <h4>High UV Protection</h4>
                <p>
                  Blocks harmful UV rays to help protect your skin and prevent
                  dashboard fading.
                </p>
              </div>
            </article>

            <article className="about-why-item" role="listitem">
              <span className="about-why-icon" aria-hidden="true">
                FIT
              </span>
              <div>
                <h4>Precision Installation</h4>
                <p>
                  Clean-edge application and bubble-free fitting by trained
                  professionals.
                </p>
              </div>
            </article>

            <article className="about-why-item" role="listitem">
              <span className="about-why-icon" aria-hidden="true">
                CARE
              </span>
              <div>
                <h4>Trusted Support</h4>
                <p>
                  Honest recommendations, reliable service, and consistent
                  quality after installation.
                </p>
              </div>
            </article>
          </div>
        </div>

        <div className="about-why-visual" aria-label="Duracool installation showcase">
          <img src={aboutImageThree} alt="Duracool professional applying sun protection film" className="about-image-main" />
          <img src={aboutImageOne} alt="Close-up of Duracool film installation process" className="about-image-small about-image-top" />
          <img src={aboutImageTwo} alt="Detailing of sun protection film placement" className="about-image-small about-image-middle" />
        </div>
      </section>
    </section>
  )
}

export default AboutPage
