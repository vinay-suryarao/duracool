import { Link } from 'react-router-dom'
import nanoShield35Image from '../assets/products/nanoshield35.png'
import nanoShield75Image from '../assets/products/nanoshield75.png'

type PremiumProduct = {
  code: string
  image: string
  infraRedRejection: string
  ultravioletReflected: string
  totalSolarHeatRejection: string
  color: string
  colorClassName?: string
}

const premiumProducts: PremiumProduct[] = [
  {
    code: 'NANOSHIELD 35',
    image: nanoShield35Image,
    infraRedRejection: '98%',
    ultravioletReflected: '99%',
    totalSolarHeatRejection: '73%',
    color: 'LIGHT BLACK',
    colorClassName: 'series-color-light-black',
  },
  {
    code: 'NANOSHIELD 75',
    image: nanoShield75Image,
    infraRedRejection: '99%',
    ultravioletReflected: '99%',
    totalSolarHeatRejection: '68%',
    color: 'AIR BLUE',
    colorClassName: 'series-color-air-blue',
  },
]

function PremiumSeriesPage() {
  return (
    <section className="content-section series-detail-page">
      <div className="series-detail-head">
        <p className="section-badge">Products</p>
        <h2>Premium Series</h2>
        <p>
          Explore Premium Series product specifications.
        </p>
      </div>

      {premiumProducts.map((product) => (
        <article
          key={product.code}
          className="series-product-card"
          aria-label={`${product.code} Premium Series specification`}
        >
          <div className="series-product-image-slot" aria-label={`${product.code} product image`}>
            <img
              className="series-product-image"
              src={product.image}
              alt={`${product.code} Premium Series`}
            />
          </div>

          <div className="series-product-spec-card">
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
              <p className="series-product-subtitle">Premium Series</p>
            </div>

            <div className="series-product-divider" />

            <div className="series-product-spec-block">
              <h4>Solar Properties</h4>
              <ul className="series-product-spec-list">
                <li>
                  <span>Infra-Red Rejection</span>
                  <strong>{product.infraRedRejection}</strong>
                </li>
                <li>
                  <span>Ultraviolet Reflected</span>
                  <strong>{product.ultravioletReflected}</strong>
                </li>
                <li>
                  <span>Total Solar Heat Rejection</span>
                  <strong>{product.totalSolarHeatRejection}</strong>
                </li>
              </ul>
            </div>

            <div className="series-product-divider" />

            <p className="series-product-color">
              COLOUR - <strong className={product.colorClassName}>{product.color}</strong>
            </p>
            <p className="series-product-note">
              Typical solar properties with the film mounted to 3mm clear glass. All data has
              been measured in accordance to AIMCAL standards. All values average from routinely
              accumulated quality control data.
            </p>
          </div>
        </article>
      ))}

      <Link to="/products" className="series-back-link">
        Back to All Series
      </Link>
    </section>
  )
}

export default PremiumSeriesPage
