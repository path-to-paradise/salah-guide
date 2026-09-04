import { createContext, useContext, useEffect, useState } from 'react'
import { ui } from './ui.js'

// To add another language: add it here, add a ui.<code> dictionary, and add
// <code> fields to the data files. L() falls back to English for any field
// that has no translation yet.
export const LANGS = [
  { code: 'en', label: 'English', short: 'EN', flag: '🇬🇧' },
  { code: 'bg', label: 'Български', short: 'БГ', flag: '🇧🇬' },
  { code: 'fr', label: 'Français', short: 'FR', flag: '🇫🇷' },
  { code: 'de', label: 'Deutsch', short: 'DE', flag: '🇩🇪' },
  { code: 'nl', label: 'Nederlands', short: 'NL', flag: '🇳🇱' },
  { code: 'tr', label: 'Türkçe', short: 'TR', flag: '🇹🇷' },
  { code: 'ur', label: 'اردو', short: 'UR', flag: '🇵🇰' },
]

const LangContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    const saved = localStorage.getItem('salah-lang')
    return LANGS.some((l) => l.code === saved) ? saved : 'en'
  })

  useEffect(() => {
    localStorage.setItem('salah-lang', lang)
    document.documentElement.lang = lang
  }, [lang])

  // L(field): picks the current language from a {en, bg, ...} object,
  // falling back to English. Plain strings pass through unchanged.
  const L = (field) => {
    if (field == null) return field
    if (typeof field === 'object' && !Array.isArray(field)) {
      return field[lang] ?? field.en
    }
    return field
  }

  const t = ui[lang] || ui.en

  return (
    <LangContext.Provider value={{ lang, setLang, L, t }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  return useContext(LangContext)
}
