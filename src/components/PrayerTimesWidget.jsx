import { useEffect, useState } from 'react'
import { useLang } from '../i18n/LanguageContext.jsx'

const PRAYERS = [
  { key: 'Fajr', ar: 'الفجر' },
  { key: 'Sunrise', ar: 'الشروق' },
  { key: 'Dhuhr', ar: 'الظهر' },
  { key: 'Asr', ar: 'العصر' },
  { key: 'Maghrib', ar: 'المغرب' },
  { key: 'Isha', ar: 'العشاء' },
]

// Live prayer times from the free AlAdhan API (aladhan.com).
export default function PrayerTimesWidget() {
  const { t } = useLang()
  const [times, setTimes] = useState(null)
  const [label, setLabel] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [city, setCity] = useState('')
  const [country, setCountry] = useState('')

  async function loadByCoords(lat, lon) {
    setLoading(true)
    setError('')
    try {
      const res = await fetch(
        `https://api.aladhan.com/v1/timings?latitude=${lat}&longitude=${lon}&method=3`,
      )
      const json = await res.json()
      setTimes(json.data.timings)
      setLabel(`${json.data.date.readable}`)
    } catch {
      setError(t.pt.errGeneric)
    } finally {
      setLoading(false)
    }
  }

  async function loadByCity(e) {
    e.preventDefault()
    if (!city.trim() || !country.trim()) return
    setLoading(true)
    setError('')
    try {
      const res = await fetch(
        `https://api.aladhan.com/v1/timingsByCity?city=${encodeURIComponent(city)}&country=${encodeURIComponent(country)}&method=3`,
      )
      const json = await res.json()
      if (json.code !== 200) throw new Error('bad response')
      setTimes(json.data.timings)
      setLabel(`${city}, ${country} · ${json.data.date.readable}`)
    } catch {
      setError(t.pt.errCity)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (!navigator.geolocation) return
    navigator.geolocation.getCurrentPosition(
      (pos) => loadByCoords(pos.coords.latitude, pos.coords.longitude),
      () => {}, // declined — user can type a city instead
      { timeout: 8000 },
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Find the next upcoming prayer (Sunrise excluded — it is not a prayer).
  let nextKey = null
  if (times) {
    const now = new Date()
    const nowMin = now.getHours() * 60 + now.getMinutes()
    for (const p of PRAYERS) {
      if (p.key === 'Sunrise') continue
      const [h, m] = times[p.key].split(':').map(Number)
      if (h * 60 + m > nowMin) {
        nextKey = p.key
        break
      }
    }
    if (!nextKey) nextKey = 'Fajr' // after Isha, the next prayer is tomorrow's Fajr
  }

  return (
    <div className="pt-widget">
      <h3>{t.pt.title}</h3>
      <p className="pt-meta">{label || t.pt.meta}</p>
      <form className="pt-form" onSubmit={loadByCity}>
        <input
          placeholder={t.pt.city}
          value={city}
          onChange={(e) => setCity(e.target.value)}
          aria-label="City"
        />
        <input
          placeholder={t.pt.country}
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          aria-label="Country"
        />
        <button className="btn btn-gold" type="submit" disabled={loading}>
          {loading ? t.pt.loading : t.pt.get}
        </button>
      </form>
      {error && <p className="pt-error">{error}</p>}
      {times && (
        <div className="pt-grid">
          {PRAYERS.map((p) => (
            <div key={p.key} className={`pt-cell ${p.key === nextKey ? 'next' : ''}`}>
              <div className="pt-name">
                {p.key === 'Sunrise' ? t.pt.sunrise : t.pt.names[p.key]}
              </div>
              <div className="pt-ar">{p.ar}</div>
              <div className="pt-time">{times[p.key]}</div>
              {p.key === nextKey && (
                <div style={{ fontSize: '0.72rem', fontWeight: 700 }}>{t.pt.next}</div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
