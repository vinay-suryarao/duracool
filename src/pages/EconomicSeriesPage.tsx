import { Link } from 'react-router-dom'

type EconomicProduct = {
  code: string
  ultravioletRejection: string
  tser: string
}

const economicProducts: EconomicProduct[] = [
  {
    code: 'DC 05',
    ultravioletRejection: '100%',
    tser: '50%',
  },
  {
    code: 'DC 35',
    ultravioletRejection: '100%',
    tser: '40%',
  },
  {
    code: 'DC 50',
    ultravioletRejection: '100%',
    tser: '40%',
  },
  {
    code: 'CH 70',
    ultravioletRejection: '100%',
    tser: '30%',
  },
  {
    code: 'GN 70',
    ultravioletRejection: '100%',
    tser: '50%',
  },
  {
    code: 'DC 70',
    ultravioletRejection: '100%',
    tser: '30%',
  },
  {
    code: 'DC CHARCOAL 70',
    ultravioletRejection: '100%',
    tser: '25%',
  },
  {
    code: 'DC GREY 70',
    ultravioletRejection: '100%',
    tser: '30%',
  },
]

function EconomicSeriesPage() {
  return (
    <section className="content-section series-detail-page economic-series-page">
      <div className="series-detail-head">
        <p className="section-badge">Products</p>
        <h2>Economic Series</h2>
        <p>
          Value-focused films highlighted with UV rejection and TSER ratings.
        </p>
      </div>

      <div className="economic-products-grid">
        {economicProducts.map((product) => (
          <article key={product.code} className="economic-product-card">
            <div className="series-product-spec-card economic-product-spec-card">
              <div className="series-product-spec-head">
                <div className="series-product-spec-visual" aria-hidden="true">
                  <span className="spec-hex spec-hex-accent" />
                  <span className="spec-hex spec-hex-dark spec-hex-1" />
                  <span className="spec-hex spec-hex-dark spec-hex-2" />
                  <span className="spec-hex spec-hex-dark spec-hex-3" />
                  <span className="spec-hex spec-hex-dark spec-hex-4" />
                  <span className="spec-hex spec-hex-dark spec-hex-5" />
                  <span className="spec-dot spec-dot-1" />
                  <span className="spec-dot spec-dot-2" />
                  <span className="spec-dot spec-dot-3" />
                  <span className="spec-dot spec-dot-4" />
                  <span className="spec-dot spec-dot-5" />
                </div>
                <p className="series-product-kicker">Product Specifications</p>
                <h3>{product.code}</h3>
                <p className="series-product-subtitle">Economic Series</p>
              </div>

              <div className="series-product-divider" />

              <div className="series-product-spec-block">
                <h4>Solar Properties</h4>
                <ul className="series-product-spec-list">
                  <li>
                    <span>Ultraviolet Rejection</span>
                    <strong>{product.ultravioletRejection}</strong>
                  </li>
                  <li>
                    <span>TSER</span>
                    <strong>{product.tser}</strong>
                  </li>
                </ul>
              </div>

              <p className="series-product-note economic-product-note">
                Typical solar properties with the film mounted to 3mm clear glass.
              </p>
            </div>
          </article>
        ))}
      </div>

      <Link to="/products" className="series-back-link">
        Back to All Series
      </Link>
    </section>
  )
}

export default EconomicSeriesPage
