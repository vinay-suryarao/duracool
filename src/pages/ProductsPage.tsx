import { productShowcase, siteConfig } from '../config/siteConfig'

function ProductsPage() {
  return (
    <section className="content-section">
      <div className="section-head">
        <p className="section-badge">Products</p>
        <h2>Film options and before/after transformation</h2>
      </div>

      <div className="products-list">
        {productShowcase.map((item) => (
          <article key={item.name} className="product-card">
            <div className="product-info">
              <h3>{item.name}</h3>
              <p>{item.summary}</p>
            </div>

            <div className="before-after">
              <figure>
                <img src={item.beforeImage} alt={`${item.name} before application`} />
                <figcaption>Before</figcaption>
              </figure>
              <figure>
                <img src={item.afterImage} alt={`${item.name} after application`} />
                <figcaption>After</figcaption>
              </figure>
            </div>
          </article>
        ))}
      </div>

      <div className="product-pills" aria-label="Product list">
        {siteConfig.products.map((product) => (
          <span key={product}>{product}</span>
        ))}
      </div>
    </section>
  )
}

export default ProductsPage
