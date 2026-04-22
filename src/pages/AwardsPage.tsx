import { awards } from '../config/siteConfig'

function AwardsPage() {
  return (
    <section className="content-section">
      <div className="section-head">
        <p className="section-badge">Recognition</p>
        <h2>Awards and achievements</h2>
      </div>

      <div className="card-grid">
        {awards.map((award) => (
          <article key={award.title} className="card">
            <img src={award.imagePath} alt={`${award.title} award`} />
            <div>
              <h3>{award.title}</h3>
              <p>{award.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default AwardsPage
