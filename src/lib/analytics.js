// Thin wrapper around GA4 (gtag.js). Nothing loads until the visitor accepts
// the cookie-consent banner (see src/components/Analytics.jsx), and nothing
// loads at all if VITE_GA_MEASUREMENT_ID isn't set (e.g. local dev).
const MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID

let loaded = false

export function isConfigured() {
  return Boolean(MEASUREMENT_ID)
}

export function loadAnalytics() {
  if (loaded || !MEASUREMENT_ID) return
  loaded = true

  window.dataLayer = window.dataLayer || []
  function gtag() {
    window.dataLayer.push(arguments)
  }
  window.gtag = gtag

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`
  document.head.appendChild(script)

  gtag('js', new Date())
  // send_page_view is off here — RouteTracker sends an explicit page_view on
  // every route change (including the first), so nothing is double-counted.
  gtag('config', MEASUREMENT_ID, { send_page_view: false, anonymize_ip: true })
}

export function trackPageView(path, title) {
  if (!loaded || typeof window.gtag !== 'function') return
  window.gtag('event', 'page_view', {
    page_path: path,
    page_title: title,
    page_location: window.location.href,
  })
}

export function trackEvent(name, params = {}) {
  if (!loaded || typeof window.gtag !== 'function') return
  window.gtag('event', name, params)
}
