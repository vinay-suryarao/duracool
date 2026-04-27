import { Link } from 'react-router-dom'
import classic50Image from '../assets/products/classic50.png'
import classic72Image from '../assets/products/classic72.png'
import classic74Image from '../assets/products/classic74.png'
import classic75Image from '../assets/products/classic75.png'

type CeramicProduct = {
  code: string
  image: string
  infraRedRejection: string
  ultravioletReflected: string
  totalSolarHeatRejection: string
  color: string
  colorClassName?: string
}

const ceramicProducts: CeramicProduct[] = [
  {
    code: 'CLASSIC 75',
    image: classic75Image,
    infraRedRejection: '96%',
    ultravioletReflected: '100%',
    totalSolarHeatRejection: '65%',
    color: 'ICE BLUE',
    colorClassName: 'series-color-ice-blue',
  },
  {
    code: 'CLASSIC 74',
    image: classic74Image,
    infraRedRejection: '96%',
    ultravioletReflected: '99%',
    totalSolarHeatRejection: '57%',
    color: 'AQUA GREEN',
    colorClassName: 'series-color-aqua-green',
  },
  {
    code: 'CLASSIC 72',
    image: classic72Image,
    infraRedRejection: '97%',
    ultravioletReflected: '100%',
    totalSolarHeatRejection: '60%',
    color: 'LIGHT GREEN',
    colorClassName: 'series-color-light-green',
  },
  {
    code: 'CLASSIC 50',
    image: classic50Image,
    infraRedRejection: '95%',
    ultravioletReflected: '100%',
    totalSolarHeatRejection: '68%',
    color: 'CHARCOAL',
    colorClassName: 'series-color-charcoal',
  },
]

function CeramicSeriesPage() {
  return (
    <section className="content-section series-detail-page">
      <div className="series-detail-head">
        <p className="section-badge">Products</p>
        <h2>Ceramic Series</h2>
        <p>
          Explore Ceramic Series product specifications.
        </p>
      </div>

      {ceramicProducts.map((product) => (
        <article
          key={product.code}
          className="series-product-card"
          aria-label={`${product.code} Ceramic Series specification`}
        >
          <div className="series-product-image-slot" aria-label={`${product.code} product image`}>
            <img
              className="series-product-image"
              src={product.image}
              alt={`${product.code} Ceramic Series`}
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
              <p className="series-product-subtitle">Ceramic Series</p>
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

export default CeramicSeriesPage
