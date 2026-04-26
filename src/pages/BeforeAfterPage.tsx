import { useCallback, useEffect, useRef, useState } from 'react'
import car1After from '../assets/beforeafter/car1a.jpeg'
import car1Before from '../assets/beforeafter/car1b.jpeg'

function BeforeAfterPage() {
  const [dividerPosition, setDividerPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const compareRef = useRef<HTMLDivElement | null>(null)

  const updateDividerFromPointer = useCallback((clientX: number) => {
    if (!compareRef.current) return

    const rect = compareRef.current.getBoundingClientRect()
    const nextPosition = ((clientX - rect.left) / rect.width) * 100
    const clampedPosition = Math.max(0, Math.min(100, nextPosition))

    setDividerPosition(clampedPosition)
  }, [])

  useEffect(() => {
    if (!isDragging) return

    const handlePointerMove = (event: PointerEvent) => {
      updateDividerFromPointer(event.clientX)
    }

    const handlePointerUp = () => {
      setIsDragging(false)
    }

    window.addEventListener('pointermove', handlePointerMove)
    window.addEventListener('pointerup', handlePointerUp)

    return () => {
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('pointerup', handlePointerUp)
    }
  }, [isDragging, updateDividerFromPointer])

  const handleDividerPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    event.preventDefault()
    setIsDragging(true)
    updateDividerFromPointer(event.clientX)
  }

  const handleDividerKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault()
      setDividerPosition((previous) => Math.max(0, previous - 2))
    }

    if (event.key === 'ArrowRight') {
      event.preventDefault()
      setDividerPosition((previous) => Math.min(100, previous + 2))
    }
  }

  return (
    <section className="content-section before-after-page">
      <div className="section-head">
        <p className="section-badge">Real Work</p>
        <h2>Before / After Suncontrol Film Results</h2>
        <p>
          Drag the center slider left or right to compare how a vehicle looks before and
          after our suncontrol film application.
        </p>
      </div>

      <div className="ba-showcase-grid">
        <article className="ba-compare-card">
          <div className="ba-card-copy">
            <h3>Car Transformation 01</h3>
            <p>
              Real installation example from our workshop. Drag the center line to
              compare result clearly.
            </p>
          </div>

          <div className="ba-compare" ref={compareRef}>
            <img
              className="ba-image"
              src={car1After}
              alt="Car after suncontrol film application"
            />
            <div
              className="ba-before-layer"
              style={{ clipPath: `inset(0 ${100 - dividerPosition}% 0 0)` }}
            >
              <img
                className="ba-image"
                src={car1Before}
                alt="Car before suncontrol film application"
              />
            </div>

            <div
              className="ba-divider"
              style={{ left: `${dividerPosition}%` }}
              onPointerDown={handleDividerPointerDown}
              onKeyDown={handleDividerKeyDown}
              role="slider"
              tabIndex={0}
              aria-label="Before and after comparison"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={Math.round(dividerPosition)}
            >
              <span className="ba-handle" />
            </div>

            <div className="ba-tag ba-tag-before">Before</div>
            <div className="ba-tag ba-tag-after">After</div>
          </div>
        </article>
      </div>
    </section>
  )
}

export default BeforeAfterPage
