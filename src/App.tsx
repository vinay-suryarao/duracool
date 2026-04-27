import { useEffect, useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import OpeningSplash from './components/OpeningSplash'
import AboutPage from './pages/AboutPage'
import BeforeAfterPage from './pages/BeforeAfterPage.tsx'
import BookingPage from './pages/BookingPage'
import CeramicSeriesPage from './pages/CeramicSeriesPage.tsx'
import ContactPage from './pages/ContactPage'
import EconomicSeriesPage from './pages/EconomicSeriesPage.tsx'
import HomePage from './pages/HomePage'
import PremiumSeriesPage from './pages/PremiumSeriesPage.tsx'
import ProductsPage from './pages/ProductsPage'

function App() {
  const [isSplashVisible, setIsSplashVisible] = useState(true)

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsSplashVisible(false)
    }, 3500)

    return () => {
      window.clearTimeout(timer)
    }
  }, [])

  return (
    <>
      <OpeningSplash isVisible={isSplashVisible} />

      <div className={`app-shell ${isSplashVisible ? 'is-hidden' : 'is-ready'}`}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="before-after" element={<BeforeAfterPage />} />
              <Route path="awards" element={<Navigate to="/before-after" replace />} />
              <Route path="products" element={<ProductsPage />} />
              <Route path="products/economic" element={<EconomicSeriesPage />} />
              <Route path="products/ceramic" element={<CeramicSeriesPage />} />
              <Route path="products/premium" element={<PremiumSeriesPage />} />
              <Route path="contact" element={<ContactPage />} />
              <Route path="booking" element={<BookingPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
