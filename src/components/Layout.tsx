import { NavLink, Outlet } from 'react-router-dom'
import { siteConfig } from '../config/siteConfig'

const navItems = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About Us' },
  { to: '/awards', label: 'Awards' },
  { to: '/products', label: 'Products' },
  { to: '/contact', label: 'Contact Us' },
  { to: '/booking', label: 'Book Now' },
]

function Layout() {
  return (
    <>
      <header className="site-header-wrap">
        <div className="site-header">
          <div className="top-strip" aria-label="Announcement">
            <div className="ticker-track">
              <span>
                DURACOOL | Premium Window and Sun Protection Films | Heat Rejection |
                UV Protection |
              </span>
              <span>
                DURACOOL | Premium Window and Sun Protection Films | Heat Rejection |
                UV Protection |
              </span>
              <span>
                DURACOOL | Premium Window and Sun Protection Films | Heat Rejection |
                UV Protection |
              </span>
              <span>
                DURACOOL | Premium Window and Sun Protection Films | Heat Rejection |
                UV Protection |
              </span>
            </div>
          </div>

          <div className="header-inner">
            <NavLink className="brand" to="/" aria-label="Go to home page" end>
              <img src="/images/duracoollogo.png" alt={`${siteConfig.companyName} logo`} />
              <div className="brand-copy">
                <small>Premium Suncontrol Film</small>
              </div>
            </NavLink>

            <nav className="site-nav" aria-label="Primary">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) => {
                    const classes = [isActive ? 'active' : '', item.to === '/booking' ? 'nav-booking' : '']
                      .filter(Boolean)
                      .join(' ')

                    return classes || undefined
                  }}
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <main className="page-main">
        <div className="page-inner">
          <Outlet />
        </div>
      </main>

      <footer className="footer-shell">
        <div className="footer-inner">
          <section className="footer-col brand-col">
            <div className="brand-logo-row">
              <img src="/images/duracoollogo.png" alt={`${siteConfig.companyName} logo`} />
            </div>
            <p className="brand-tagline">
              <span>Premium window film solutions</span>
              <span>for UV defense, glare control,</span>
              <span>and long-lasting cabin comfort.</span>
            </p>
            <div className="social-row">
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                title="Instagram"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fill="currentColor"
                    d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2m0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9M17 5.5A1.5 1.5 0 1 1 15.5 7 1.5 1.5 0 0 1 17 5.5M12 7a5 5 0 1 1-5 5 5 5 0 0 1 5-5m0 2a3 3 0 1 0 3 3 3 3 0 0 0-3-3Z"
                  />
                </svg>
              </a>
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                title="WhatsApp"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fill="currentColor"
                    d="M12.04 2C6.55 2 2.1 6.44 2.1 11.92c0 1.76.46 3.48 1.33 4.99L2 22l5.25-1.37a9.9 9.9 0 0 0 4.78 1.22h.01c5.48 0 9.93-4.45 9.93-9.93A9.93 9.93 0 0 0 12.04 2m0 17.93h-.01a8 8 0 0 1-4.08-1.12l-.29-.17-3.12.81.83-3.04-.19-.31a8 8 0 1 1 6.86 3.83m4.39-5.98c-.24-.12-1.4-.69-1.61-.77s-.37-.12-.53.12-.61.77-.75.93-.28.18-.52.06a6.54 6.54 0 0 1-1.93-1.19 7.24 7.24 0 0 1-1.33-1.65c-.14-.24-.01-.37.11-.49.11-.11.24-.28.36-.42a1.6 1.6 0 0 0 .24-.4.44.44 0 0 0-.02-.42c-.06-.12-.53-1.29-.73-1.77s-.38-.4-.53-.4h-.45a.86.86 0 0 0-.63.3 2.62 2.62 0 0 0-.82 1.95c0 1.15.84 2.26.95 2.42.12.15 1.66 2.53 4.02 3.54a13.6 13.6 0 0 0 1.34.5c.56.18 1.07.15 1.47.09.45-.07 1.4-.57 1.6-1.13.2-.55.2-1.03.14-1.13s-.22-.17-.46-.29"
                  />
                </svg>
              </a>
              <a
                href={`mailto:${siteConfig.contactEmail}`}
                aria-label="Email"
                title="Email"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fill="currentColor"
                    d="M2 6.5A2.5 2.5 0 0 1 4.5 4h15A2.5 2.5 0 0 1 22 6.5v11a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 17.5v-11Zm2.2-.38a.5.5 0 0 0-.2.4v.27l8 5.72 8-5.72v-.27a.5.5 0 0 0-.5-.5h-15a.5.5 0 0 0-.3.1Zm15.8 3.1-7.42 5.3a1 1 0 0 1-1.16 0L4 9.22v8.28c0 .28.22.5.5.5h15a.5.5 0 0 0 .5-.5V9.22Z"
                  />
                </svg>
              </a>
            </div>
          </section>

          <section className="footer-col links-col">
            <h3>Quick Links</h3>
            <nav aria-label="Footer links" className="footer-links">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) => (isActive ? 'active' : undefined)}
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </section>

          <section className="footer-col contact-col">
            <h3>Contact Us</h3>
            <div className="footer-contact-line">
              <span className="footer-contact-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M2 6.5A2.5 2.5 0 0 1 4.5 4h15A2.5 2.5 0 0 1 22 6.5v11a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 17.5v-11Zm2.2-.38a.5.5 0 0 0-.2.4v.27l8 5.72 8-5.72v-.27a.5.5 0 0 0-.5-.5h-15a.5.5 0 0 0-.3.1Zm15.8 3.1-7.42 5.3a1 1 0 0 1-1.16 0L4 9.22v8.28c0 .28.22.5.5.5h15a.5.5 0 0 0 .5-.5V9.22Z"
                  />
                </svg>
              </span>
              <p>{siteConfig.contactEmail}</p>
            </div>
            <div className="footer-contact-line">
              <span className="footer-contact-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M6.62 10.8a15.98 15.98 0 0 0 6.58 6.58l2.2-2.2c.27-.27.67-.36 1.03-.24 1.12.37 2.32.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.61 21 3 13.39 3 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.12.36.03.76-.24 1.03l-2.2 2.2Z"
                  />
                </svg>
              </span>
              <p>{siteConfig.contactPhone}</p>
            </div>
            <div className="footer-contact-line">
              <span className="footer-contact-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M12 2a7 7 0 0 0-7 7c0 5.13 7 13 7 13s7-7.87 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z"
                  />
                </svg>
              </span>
              <p>K 218 ansha industries sakhivihar road sakhinaka, Near Shivsagar hotel</p>
            </div>
          </section>
        </div>

        <div className="footer-bottom">
          <p>
            Copyright {new Date().getFullYear()} {siteConfig.companyName}. All rights
            reserved.
          </p>
        </div>
      </footer>
    </>
  )
}

export default Layout
