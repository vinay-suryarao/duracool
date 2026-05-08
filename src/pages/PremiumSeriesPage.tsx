import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ceramicKitImage from '../assets/ceramickit.jpg'
import ceramicRollImage from '../assets/ceramicroll.jpg'

type PremiumProduct = {
  code: string
  infraRedRejection: string
  ultravioletReflected: string
  totalSolarHeatRejection: string
  color?: string
  colorClassName?: string
}

type PremiumCategoryId = 'roll' | 'kit'

type PremiumCategory = {
  id: PremiumCategoryId
  title: string
  image: string
}

const premiumCategories: PremiumCategory[] = [
  {
    id: 'roll',
    title: 'Roll',
    image: ceramicRollImage,
  },
  {
    id: 'kit',
    title: 'Kit',
    image: ceramicKitImage,
  },
]

const premiumRollProducts: PremiumProduct[] = [
  {
    code: 'NANOSHIELD 35',
    infraRedRejection: '98%',
    ultravioletReflected: '99%',
    totalSolarHeatRejection: '73%',
    color: 'LIGHT BLACK',
    colorClassName: 'series-color-light-black',
  },
  {
    code: 'NANOSHIELD 65',
    infraRedRejection: '96%',
    ultravioletReflected: '100%',
    totalSolarHeatRejection: '60%',
    color: 'LIGHT BLACK',
    colorClassName: 'series-color-light-black',
  },
  {
    code: 'NANOSHIELD 75',
    infraRedRejection: '99%',
    ultravioletReflected: '99%',
    totalSolarHeatRejection: '68%',
    color: 'AIR BLUE',
    colorClassName: 'series-color-air-blue',
  },
]

const premiumKitProducts: PremiumProduct[] = [
  {
    code: 'OPTIMUS 35',
    infraRedRejection: '97%',
    ultravioletReflected: '100%',
    totalSolarHeatRejection: '73%',
  },
  {
    code: 'OPTIMUS 65',
    infraRedRejection: '96%',
    ultravioletReflected: '100%',
    totalSolarHeatRejection: '60%',
  },
  {
    code: 'OPTIMUS 75',
    infraRedRejection: '99%',
    ultravioletReflected: '100%',
    totalSolarHeatRejection: '68%',
  },
]

function PremiumSeriesPage() {
  const [activeCategory, setActiveCategory] = useState<PremiumCategoryId | null>(null)

  const selectedProducts =
    activeCategory === 'kit' ? premiumKitProducts : premiumRollProducts
  const selectedTitle = activeCategory === 'kit' ? 'Kit' : 'Roll'

  useEffect(() => {
    if (activeCategory) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [activeCategory])

  return (
    <section className="content-section series-detail-page">
      <div className="series-detail-head">
        <p className="section-badge">Products</p>
        <h2>Nanoshield Series</h2>
        {activeCategory === null && (
          <p>
            Choose Roll or Kit to explore Nanoshield Series product specifications.
          </p>
        )}
      </div>

      {activeCategory === null ? (
        <div className="series-grid series-category-grid">
          {premiumCategories.map((category) => (
            <article key={category.id} className="series-card">
              <h3>{category.title}</h3>
              <img
                className="series-card-image series-category-image"
                src={category.image}
                alt={`Nanoshield ${category.title} option`}
              />
              <button
                type="button"
                className="series-card-button"
                onClick={() => setActiveCategory(category.id)}
              >
                View {category.title}
              </button>
            </article>
          ))}
        </div>
      ) : (
        <>
          <div className="series-products-panel">
            <p className="series-product-kicker">Nanoshield Series</p>
            <h3>{selectedTitle} Products</h3>
            <button
              type="button"
              className="series-card-button"
              onClick={() => setActiveCategory(null)}
            >
              Back to Roll & Kit
            </button>
          </div>

          {selectedProducts.map((product) => (
            <article
              key={product.code}
              className="series-product-card is-spec-only"
              aria-label={`${product.code} Nanoshield Series specification`}
            >
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
                  <p className="series-product-subtitle">Nanoshield Series</p>
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

                {product.color && (
                  <>
                    <div className="series-product-divider" />
                    <p className="series-product-color">
                      COLOUR - <strong className={product.colorClassName}>{product.color}</strong>
                    </p>
                  </>
                )}

                <p className="series-product-note">
                  Typical solar properties with the film mounted to 3mm clear glass. All data has
                  been measured in accordance to AIMCAL standards. All values average from routinely
                  accumulated quality control data.
                </p>
              </div>
            </article>
          ))}
        </>
      )}

      <Link to="/products" className="series-back-link">
        Back to All Series
      </Link>
    </section>
  )
}

export default PremiumSeriesPage
