import type { ReactNode } from 'react'
import { siteConfig } from '../config/siteConfig'
import heroImage from '../assets/image.png'
import homeInfoImage from '../assets/home4.jpg'

function HomePage() {
  const benefitIcons: ReactNode[] = [
    <>
      <path
        d="M6 24V10l8-4 8 4v14"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 24v-8h4v8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.5 10.5 14 5l10.5 5.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>,
    <>
      <circle
        cx="15"
        cy="15"
        r="6.8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M15 4v2.2M15 23.8V26M4 15h2.2M23.8 15H26"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M7.4 7.4 9 9M21 21l-1.6-1.6M7.4 22.6 9 21M21 9l-1.6-1.6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </>,
    <>
      <path
        d="M7.5 22h11"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M10 22v-6.5M16 22v-9"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M5.5 12.4a9 9 0 0 1 18 0"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M12.5 9.8 15 12h-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>,
    <>
      <path
        d="M15 4 6.2 7.5v6.4c0 5.5 3.6 10.2 8.8 11.9 5.2-1.7 8.8-6.4 8.8-11.9V7.5Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="m10.8 15 2.4 2.3 5.2-5.3"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>,
    <>
      <path
        d="M3.8 15.5a11.6 11.6 0 0 1 22.4 0"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle
        cx="15"
        cy="15.5"
        r="3"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M15 5v2M8 8l1.4 1.4M22 8l-1.4 1.4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </>,
    <>
      <path
        d="M7 9h16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <rect
        x="5"
        y="9"
        width="20"
        height="12"
        rx="2.3"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M9.5 13h11"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M9.5 17h7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </>,
  ]

  const benefitCards = siteConfig.homeRealBenefitHeadings.map((title, index) => ({
    title,
    description:
      siteConfig.homeRealBenefitDescriptions[index] ||
      siteConfig.homeRealBenefitDescriptions[siteConfig.homeRealBenefitDescriptions.length - 1] ||
      '',
    icon: benefitIcons[index % benefitIcons.length],
  }))

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

      <section className="home-benefits-section" aria-label="Benefits of Sun Control Films">
        <div className="home-benefits-shell">
          <div className="home-benefits-heading">
            <h2>{siteConfig.homeRealBenefitsTitle}</h2>
            <p>{siteConfig.homeRealBenefitsIntro}</p>
          </div>

          <div className="home-benefits-grid">
            {benefitCards.map((benefit) => (
              <article key={benefit.title} className="home-benefit-card">
                <span className="home-benefit-icon" aria-hidden="true">
                  <svg viewBox="0 0 30 30" role="presentation" focusable="false">
                    {benefit.icon}
                  </svg>
                </span>
                <div className="home-benefit-copy">
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePage
