import { useState } from 'react'
import type { FormEvent } from 'react'
import { siteConfig } from '../config/siteConfig'

type BookingStatus = {
  kind: 'idle' | 'success' | 'error'
  message: string
}

function BookingPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [bookingStatus, setBookingStatus] = useState<BookingStatus>({
    kind: 'idle',
    message: '',
  })

  const onBookingSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)

    if (!siteConfig.bookingScriptUrl) {
      setBookingStatus({
        kind: 'error',
        message:
          'Booking endpoint missing. Add VITE_BOOKING_SCRIPT_URL to your .env file.',
      })
      return
    }

    formData.append('submittedAt', new Date().toISOString())
    formData.append('source', 'duracool-website')

    const body = new URLSearchParams()
    formData.forEach((value, key) => {
      body.append(key, String(value))
    })

    try {
      setIsSubmitting(true)
      setBookingStatus({ kind: 'idle', message: '' })

      let submitted = false

      try {
        const response = await fetch(siteConfig.bookingScriptUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
            Accept: 'application/json',
          },
          body,
        })

        if (!response.ok) {
          throw new Error('Endpoint returned non-OK status.')
        }

        const responseText = await response.text()
        if (responseText) {
          const data = JSON.parse(responseText) as {
            success?: boolean
            message?: string
          }
          if (data.success === false) {
            throw new Error(data.message || 'Endpoint reported failure.')
          }
        }

        submitted = true
      } catch {
        // Some Apps Script deployments reject CORS reads; this fallback still submits.
        await fetch(siteConfig.bookingScriptUrl, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
          },
          body,
        })
        submitted = true
      }

      if (submitted) {
        form.reset()
        setBookingStatus({
          kind: 'success',
          message:
            'Appointment request submitted successfully. Our team will contact you soon.',
        })
      }
    } catch {
      setBookingStatus({
        kind: 'error',
        message:
          'Unable to submit right now. Please try again or contact us directly on WhatsApp.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="content-section">
      <div className="section-head">
        <p className="section-badge">Book Appointment</p>
        <h2>Reserve your slot in less than a minute</h2>
      </div>

      <form className="booking-form" onSubmit={onBookingSubmit}>
        <label>
          Full Name
          <input name="name" type="text" required placeholder="Enter full name" />
        </label>

        <label>
          Phone Number
          <input name="phone" type="tel" required placeholder="Enter phone number" />
        </label>

        <label>
          Car Model
          <input name="carModel" type="text" required placeholder="Ex: Hyundai Creta" />
        </label>

        <label>
          Product Interested
          <select name="product" required defaultValue="">
            <option value="" disabled>
              Select product
            </option>
            {siteConfig.products.map((product) => (
              <option key={product} value={product}>
                {product}
              </option>
            ))}
          </select>
        </label>

        <label>
          Preferred Date
          <input name="preferredDate" type="date" required />
        </label>

        <label>
          Preferred Time
          <input name="preferredTime" type="time" required />
        </label>

        <label className="full-width">
          Additional Notes
          <textarea
            name="message"
            rows={4}
            placeholder="Any specific requirement for tint level or heat rejection"
          ></textarea>
        </label>

        <button type="submit" className="submit-btn" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Confirm Booking'}
        </button>

        {bookingStatus.kind !== 'idle' && (
          <p
            className={
              bookingStatus.kind === 'success'
                ? 'status-message success'
                : 'status-message error'
            }
          >
            {bookingStatus.message}
          </p>
        )}
      </form>
    </section>
  )
}

export default BookingPage
