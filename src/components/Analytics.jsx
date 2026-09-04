import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useLang } from '../i18n/LanguageContext.jsx'
import { isConfigured, loadAnalytics, trackPageView } from '../lib/analytics.js'

const CONSENT_KEY = 'salah-consent'

// Owns both the cookie-consent banner and GA4 route tracking, since they're
// two halves of the same concern: nothing tracks until the visitor accepts.
export default function Analytics() {
  const { t } = useLang()
  const location = useLocation()
  const [consent, setConsent] = useState(() => localStorage.getItem(CONSENT_KEY))

  useEffect(() => {
    if (consent === 'accepted') loadAnalytics()
  }, [consent])

  useEffect(() => {
    if (consent === 'accepted') {
      trackPageView(location.pathname + location.search, document.title)
    }
  }, [location, consent])

  const choose = (value) => {
    localStorage.setItem(CONSENT_KEY, value)
    setConsent(value)
  }

  if (!isConfigured() || consent) return null

  return (
    <div className="consent-banner" role="dialog" aria-label={t.consent.message}>
      <p>{t.consent.message}</p>
      <div className="consent-actions">
        <button className="btn btn-outline" onClick={() => choose('declined')}>
          {t.consent.decline}
        </button>
        <button className="btn btn-gold" onClick={() => choose('accepted')}>
          {t.consent.accept}
        </button>
      </div>
    </div>
  )
}
