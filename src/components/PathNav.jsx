import { Link, useLocation, useNavigate } from 'react-router-dom'
import { stations, usePathProgress } from '../data/path.js'
import { useLang } from '../i18n/LanguageContext.jsx'

// Bottom bar on every station page: shows where you are on the path,
// links back to the previous station, and marks this one complete
// before moving on to the next.
export default function PathNav() {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const { t } = useLang()
  const { done, markDone } = usePathProgress()

  const idx = stations.findIndex((s) => s.route === pathname)
  if (idx === -1) return null

  const station = stations[idx]
  const prev = stations[idx - 1]
  const next = stations[idx + 1]
  const isDone = done.includes(station.key)

  const complete = () => {
    markDone(station.key)
    navigate(next ? next.route : '/')
  }

  return (
    <section className="path-nav-wrap">
      <div className="container path-nav">
        <div className="path-nav-info">
          <span className="path-nav-count">
            {station.icon} {t.path.stepLabel} {idx + 1} {t.common.of} {stations.length}
          </span>
          <div className="path-nav-dots" aria-hidden="true">
            {stations.map((s, i) => (
              <i
                key={s.key}
                className={done.includes(s.key) ? 'd' : i === idx ? 'c' : ''}
              />
            ))}
          </div>
        </div>
        <div className="path-nav-actions">
          {prev && (
            <Link to={prev.route} className="btn btn-outline path-nav-prev">
              ← {t.nav[prev.navKey]}
            </Link>
          )}
          <button className="btn btn-gold" onClick={complete}>
            {isDone && next
              ? `${t.nav[next.navKey]} →`
              : next
                ? t.path.markDone
                : t.path.finish}
          </button>
        </div>
      </div>
    </section>
  )
}
