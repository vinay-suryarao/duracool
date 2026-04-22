import { NavLink, Outlet } from 'react-router-dom'
import { siteConfig } from '../config/siteConfig'

const navItems = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About Us' },
  { to: '/awards', label: 'Awards' },
  { to: '/products', label: 'Products' },
  { to: '/contact', label: 'Contact Us' },
  { to: '/booking', label: 'Booking' },
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
                  className={({ isActive }) => (isActive ? 'active' : undefined)}
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
                href={siteConfig.facebookUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                title="Facebook"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fill="currentColor"
                    d="M13.5 9H16V6h-2.5A4.5 4.5 0 0 0 9 10.5V13H6v3h3v6h3v-6h3l1-3h-4v-2.5A1.5 1.5 0 0 1 13.5 9"
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
            <p>{siteConfig.contactEmail}</p>
            <p>{siteConfig.contactPhone}</p>
            <p>Thane, Maharashtra, India</p>
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
