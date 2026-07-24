import { useGender } from '../i18n/GenderContext.jsx'
import { useLang, LANGS } from '../i18n/LanguageContext.jsx'

// First-visit welcome: asks who is learning so gender-specific rulings
// (covering, Jumu'ah, monthly exemptions…) display correctly site-wide.
export default function GenderGate() {
  const { gender, setGender } = useGender()
  const { lang, setLang, t } = useLang()

  if (gender) return null

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true" aria-label={t.gender.title}>
      <div className="modal-card">
        <div className="lang-switch modal-lang" role="group" aria-label="Language">
          {LANGS.map((l) => (
            <button
              key={l.code}
              className={lang === l.code ? 'active' : ''}
              onClick={() => setLang(l.code)}
            >
              {l.short}
            </button>
          ))}
        </div>
        <p className="modal-salam" lang="ar">السَّلَامُ عَلَيْكُمْ</p>
        <h2>{t.gender.title}</h2>
        <p className="modal-body">{t.gender.body}</p>
        <div className="gender-btns">
          <button className="gender-btn" onClick={() => setGender('male')}>
            <span aria-hidden="true">👨</span>
            {t.gender.male}
          </button>
          <button className="gender-btn" onClick={() => setGender('female')}>
            <span aria-hidden="true">🧕</span>
            {t.gender.female}
          </button>
        </div>
        <p className="modal-note">{t.gender.note}</p>
      </div>
    </div>
  )
}
