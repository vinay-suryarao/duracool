import { Link } from 'react-router-dom'

function CeramicSeriesPage() {
  return (
    <section className="content-section series-detail-page">
      <div className="series-detail-head">
        <p className="section-badge">Products</p>
        <h2>Ceramic Series</h2>
        <p>
          This page will contain all products from the Ceramic Series with real images.
        </p>
      </div>

      <div className="series-detail-placeholder">
        <p>Ceramic Series product list will be added here.</p>
      </div>

      <Link to="/products" className="series-back-link">
        Back to All Series
      </Link>
    </section>
  )
}

export default CeramicSeriesPage
