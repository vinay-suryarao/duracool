type OpeningSplashProps = {
  isVisible: boolean
}

function OpeningSplash({ isVisible }: OpeningSplashProps) {
  return (
    <div className={`opening-splash ${isVisible ? 'is-visible' : 'is-hidden'}`}>
      <div className="opening-splash-bg" aria-hidden="true" />
      <div className="opening-splash-center">
        <img
          src="/images/duracoollogo.png"
          alt="DuraCool"
          className="opening-splash-logo"
        />
        <p className="opening-splash-tagline">Premium Suncontrol Film</p>
        <div className="opening-splash-loader" aria-hidden="true">
          <span />
        </div>
      </div>
    </div>
  )
}

export default OpeningSplash
