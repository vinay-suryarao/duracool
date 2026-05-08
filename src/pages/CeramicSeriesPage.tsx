import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ceramicKitImage from '../assets/ceramickit.jpg'
import ceramicRollImage from '../assets/ceramicroll.jpg'

type CeramicProduct = {
  code: string
  infraRedRejection: string
  ultravioletReflected: string
  totalSolarHeatRejection: string
  color?: string
  colorClassName?: string
}

type CeramicCategoryId = 'roll' | 'kit'

type CeramicCategory = {
  id: CeramicCategoryId
  title: string
  image: string
}

const ceramicCategories: CeramicCategory[] = [
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

const ceramicRollProducts: CeramicProduct[] = [
  {
    code: 'CLASSIC 75',
    infraRedRejection: '96%',
    ultravioletReflected: '100%',
    totalSolarHeatRejection: '65%',
    color: 'ICE BLUE',
    colorClassName: 'series-color-ice-blue',
  },
  {
    code: 'CLASSIC 74',
    infraRedRejection: '96%',
    ultravioletReflected: '99%',
    totalSolarHeatRejection: '57%',
    color: 'AQUA GREEN',
    colorClassName: 'series-color-aqua-green',
  },
  {
    code: 'CLASSIC 72',
    infraRedRejection: '97%',
    ultravioletReflected: '100%',
    totalSolarHeatRejection: '60%',
    color: 'LIGHT GREEN',
    colorClassName: 'series-color-light-green',
  },
  {
    code: 'CLASSIC 50',
    infraRedRejection: '95%',
    ultravioletReflected: '100%',
    totalSolarHeatRejection: '68%',
    color: 'CHARCOAL',
    colorClassName: 'series-color-charcoal',
  },
]

const ceramicKitProducts: CeramicProduct[] = [
  {
    code: 'ULTRAMAX 50',
    infraRedRejection: '95%',
    ultravioletReflected: '100%',
    totalSolarHeatRejection: '68%',
  },
  {
    code: 'ULTRAMAX 72',
    infraRedRejection: '97%',
    ultravioletReflected: '100%',
    totalSolarHeatRejection: '60%',
  },
  {
    code: 'ULTRAMAX 75',
    infraRedRejection: '96%',
    ultravioletReflected: '100%',
    totalSolarHeatRejection: '65%',
  },
]

function CeramicSeriesPage() {
  const [activeCategory, setActiveCategory] = useState<CeramicCategoryId | null>(null)

  const selectedProducts =
    activeCategory === 'kit' ? ceramicKitProducts : ceramicRollProducts
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
        <h2>Ceramic Series</h2>
        {activeCategory === null && (
          <p>
            Choose Roll or Kit to explore Ceramic Series product specifications.
          </p>
        )}
      </div>

      {activeCategory === null ? (
        <div className="series-grid series-category-grid">
          {ceramicCategories.map((category) => (
            <article key={category.id} className="series-card">
              <h3>{category.title}</h3>
              <img
                className="series-card-image series-category-image"
                src={category.image}
                alt={`Ceramic ${category.title} option`}
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
            <p className="series-product-kicker">Ceramic Series</p>
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
              aria-label={`${product.code} Ceramic Series specification`}
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

export default CeramicSeriesPage
