import { Link } from 'react-router-dom'

function EconomicSeriesPage() {
  return (
    <section className="content-section series-detail-page">
      <div className="series-detail-head">
        <p className="section-badge">Products</p>
        <h2>Economic Series</h2>
        <p>
          This page will contain all products from the Economic Series with real images.
        </p>
      </div>

      <div className="series-detail-placeholder">
        <p>Economic Series product list will be added here.</p>
      </div>

      <Link to="/products" className="series-back-link">
        Back to All Series
      </Link>
    </section>
  )
}

export default EconomicSeriesPage
