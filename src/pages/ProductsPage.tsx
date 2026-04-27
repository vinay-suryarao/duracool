import { Link } from 'react-router-dom'
import productCeramic from '../assets/productceramic.png'
import productEconomic from '../assets/producteconomic.png'
import productPremium from '../assets/productpremium.png  '

type SeriesCard = {
  id: 'economic' | 'ceramic' | 'premium'
  title: string
  image: string
  to: string
}

const seriesCards: SeriesCard[] = [
  {
    id: 'economic',
    title: 'Economic Series',
    image: productEconomic,
    to: '/products/economic',
  },
  {
    id: 'ceramic',
    title: 'Ceramic Series',
    image: productCeramic,
    to: '/products/ceramic',
  },
  {
    id: 'premium',
    title: 'Premium Series',
    image: productPremium,
    to: '/products/premium',
  },
]

function ProductsPage() {
  return (
    <section className="content-section products-series-section">
      <div className="section-head">
        <p className="section-badge">Products</p>
        <h2>Choose Your Suncontrol Film Series</h2>
        <p>
          Select any series card below to open its dedicated products page.
        </p>
      </div>

      <div className="series-grid">
        {seriesCards.map((series) => (
          <article key={series.id} className="series-card">
            <h3>{series.title}</h3>

            <img className="series-card-image" src={series.image} alt={`${series.title} film`} />

            <Link to={series.to} className="series-card-button">
              View Products
            </Link>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ProductsPage
