import { useState } from 'react'
import { useGender } from '../i18n/GenderContext.jsx'
import { useLang, LANGS } from '../i18n/LanguageContext.jsx'

// First-visit welcome: asks for language, then who is learning, so
// gender-specific rulings (covering, Jumu'ah, monthly exemptions…) display
// correctly site-wide. Returning visitors who already picked a language
// skip straight to the gender step.
export default function GenderGate() {
  const { gender, setGender } = useGender()
  const { setLang, t } = useLang()
  const [step, setStep] = useState(() =>
    localStorage.getItem('salah-lang') ? 'gender' : 'lang',
  )

  if (gender) return null

  if (step === 'lang') {
    return (
      <div className="modal-overlay" role="dialog" aria-modal="true" aria-label="Language">
        <div className="modal-card">
          <div className="gender-btns lang-btns">
            {LANGS.map((l) => (
              <button
                key={l.code}
                className="gender-btn lang-btn"
                onClick={() => {
                  setLang(l.code)
                  setStep('gender')
                }}
              >
                <span aria-hidden="true">{l.flag}</span>
                {l.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true" aria-label={t.gender.title}>
      <div className="modal-card">
        <h2>{t.gender.title}</h2>
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
      </div>
    </div>
  )
}
