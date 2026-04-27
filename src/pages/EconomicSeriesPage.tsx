import { Link } from 'react-router-dom'
import ch70Image from '../assets/products/ch70.png'
import dc05Image from '../assets/products/dc05.png'
import dc35Image from '../assets/products/dc35.png'
import dc50Image from '../assets/products/dc50.png'
import gn70Image from '../assets/products/gn70.png'

type EconomicProduct = {
  code: string
  image: string
  uvRejection: string
  description: string
}

const economicProducts: EconomicProduct[] = [
  {
    code: 'DC 05',
    image: dc05Image,
    uvRejection: '100%',
    description: 'Deep shade option for stronger privacy with dependable daily UV protection.',
  },
  {
    code: 'DC 35',
    image: dc35Image,
    uvRejection: '100%',
    description: 'Balanced tint that keeps cabin comfort steady while maintaining a clean exterior look.',
  },
  {
    code: 'DC 50',
    image: dc50Image,
    uvRejection: '100%',
    description: 'Comfort-oriented value film for day-to-day driving and consistent UV defense.',
  },
  {
    code: 'CH 70',
    image: ch70Image,
    uvRejection: '100%',
    description: 'Lighter transparency profile with clear visibility and reliable UV rejection.',
  },
  {
    code: 'GN 70',
    image: gn70Image,
    uvRejection: '100%',
    description: 'Green-tint economic variant crafted for visual comfort and long-journey ease.',
  },
]

function EconomicSeriesPage() {
  return (
    <section className="content-section series-detail-page economic-series-page">
      <div className="series-detail-head">
        <p className="section-badge">Products</p>
        <h2>Economic Series</h2>
        <p>
          Value-focused films in a compact single-card layout with real product images.
        </p>
      </div>

      <div className="economic-products-grid">
        {economicProducts.map((product) => (
          <article key={product.code} className="economic-product-card">
            <div className="economic-product-image-wrap">
              <img className="economic-product-image" src={product.image} alt={`${product.code} Economic Series`} />
            </div>

            <div className="economic-product-body">
              <p className="economic-product-code">{product.code}</p>
              <p className="economic-product-series">Economic Series</p>

              <div className="economic-product-rule" />

              <p className="economic-product-spec-title">Solar Properties</p>
              <ul className="economic-product-spec-list">
                <li>
                  <span>Ultraviolet Rejection</span>
                  <strong>{product.uvRejection}</strong>
                </li>
              </ul>

              <p className="economic-product-note">{product.description}</p>
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
