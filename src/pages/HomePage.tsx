import { siteConfig } from '../config/siteConfig'
import heroImage from '../assets/image.png'
import homeInfoImage from '../assets/home3.jpg'
import homeEndImage from '../assets/home4.jpg'

function HomePage() {
  const highlights = [
    siteConfig.homeHighlights[0] || 'UV protection with premium film combinations',
    siteConfig.homeHighlights[1] || 'Cabin temperature management for city and highway drives',
    siteConfig.homeHighlights[2] || 'Professional fitment and support for long-term performance',
  ]

  return (
    <>
      <section
        className="home-hero"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(4, 6, 9, 0.84) 0%, rgba(4, 6, 9, 0.56) 42%, rgba(4, 6, 9, 0.2) 72%), url('${heroImage}')`,
        }}
      >
        <div className="home-hero-overlay" />
        <div className="home-hero-content">
          <p className="section-badge">Window & Sun Protection Films</p>
          <h1>{siteConfig.companyName}</h1>
          <p className="tagline">{siteConfig.tagline}</p>
          <p className="quote">"{siteConfig.heroQuote}"</p>
        </div>
      </section>

      <section className="home-info-section">
        <div className="home-info-grid">
          <div className="home-info-copy">
            <h2>{siteConfig.homeInfoTitle}</h2>
            <p>{siteConfig.homeInfoIntro}</p>
            <h3>{siteConfig.homeInfoWhyTitle}</h3>
            <ul className="home-benefits-list">
              {siteConfig.homeBenefits.map((benefit) => (
                <li key={benefit}>{benefit}</li>
              ))}
            </ul>
          </div>
          <div className="home-info-media">
            <img
              src={homeInfoImage}
              alt="Suncontrol film installation work on car window"
              className="home-info-image"
            />
          </div>
        </div>
      </section>

      <section className="home-end-section">
        <div
          className="home-end-banner"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(5, 7, 10, 0.84) 0%, rgba(5, 7, 10, 0.56) 46%, rgba(5, 7, 10, 0.28) 100%), url('${homeEndImage}')`,
          }}
        >
          <div className="section-head home-end-head">
            <h2>{siteConfig.homeEndTitle}</h2>
            <p>{siteConfig.homeEndText.replace('DURACOOL', siteConfig.companyName)}</p>
          </div>
        </div>
        <div className="home-highlight-grid">
          <article className="home-highlight-item">
            <p className="highlight-value">99%</p>
            <p className="highlight-label">{highlights[0]}</p>
          </article>
          <article className="home-highlight-item">
            <p className="highlight-value">Cooler</p>
            <p className="highlight-label">{highlights[1]}</p>
          </article>
          <article className="home-highlight-item">
            <p className="highlight-value">Trusted</p>
            <p className="highlight-label">{highlights[2]}</p>
          </article>
        </div>
      </section>
    </>
  )
}

export default HomePage
