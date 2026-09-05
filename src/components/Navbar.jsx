import { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useLang, LANGS } from '../i18n/LanguageContext.jsx'
import { useGender } from '../i18n/GenderContext.jsx'
import InstallButton from './InstallButton.jsx'

const routes = [
  { to: '/basics', key: 'basics' },
  { to: '/purity', key: 'purity' },
  { to: '/times', key: 'times' },
  { to: '/how-to-pray', key: 'howto' },
  { to: '/types', key: 'types' },
  { to: '/duas', key: 'duas' },
  { to: '/beyond', key: 'beyond' },
  { to: '/quiz', key: 'quiz' },
  { to: '/glossary', key: 'glossary' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { lang, setLang, t } = useLang()
  const { gender, setGender } = useGender()

  // Shadow once the page is scrolled, so the sticky header lifts off content.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Escape closes the mobile menu.
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const switches = (
    <>
      <div className="lang-switch" role="group" aria-label={t.gender.switchTitle}>
        <button
          className={gender === 'male' ? 'active' : ''}
          onClick={() => setGender('male')}
          aria-pressed={gender === 'male'}
          title={`${t.gender.switchTitle}: ${t.gender.maleShort}`}
        >
          👨
        </button>
        <button
          className={gender === 'female' ? 'active' : ''}
          onClick={() => setGender('female')}
          aria-pressed={gender === 'female'}
          title={`${t.gender.switchTitle}: ${t.gender.femaleShort}`}
        >
          🧕
        </button>
      </div>
      <select
        className="lang-select"
        aria-label="Language"
        value={lang}
        onChange={(e) => setLang(e.target.value)}
      >
        {LANGS.map((l) => (
          <option key={l.code} value={l.code}>
            {l.flag} {l.short}
          </option>
        ))}
      </select>
      <InstallButton />
    </>
  )

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-top">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark" aria-hidden="true">🕌</span>
          <span className="brand-text">
            {t.brand.main}<span className="brand-accent">{t.brand.accent}</span>
          </span>
        </Link>
        <div className="nav-controls">
          <div className="nav-controls-switches">{switches}</div>
          <button
            className={`nav-toggle ${open ? 'open' : ''}`}
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
      <div className={`nav-row ${open ? 'open' : ''}`}>
        <div className="mobile-switches">{switches}</div>
        <nav className="nav-links">
          {routes.map((r) => (
            <NavLink
              key={r.to}
              to={r.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              {t.nav[r.key]}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
