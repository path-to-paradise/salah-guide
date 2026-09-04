import { createContext, useContext, useEffect, useRef, useState } from 'react'
import { trackEvent } from '../lib/analytics.js'

// gender: 'male' | 'female' | null (not chosen yet — the welcome modal shows).
// Rulings that differ between men and women (covering, Jumu'ah, monthly
// exemptions, wudu videos, istinja method) read this to show the right guidance.
const GenderContext = createContext(null)

export function GenderProvider({ children }) {
  const [gender, setGender] = useState(() => {
    const saved = localStorage.getItem('salah-gender')
    return saved === 'male' || saved === 'female' ? saved : null
  })

  const isFirstRender = useRef(true)
  useEffect(() => {
    if (gender) {
      localStorage.setItem('salah-gender', gender)
      document.documentElement.dataset.gender = gender
      if (!isFirstRender.current) trackEvent('gender_select', { gender })
    } else {
      delete document.documentElement.dataset.gender
    }
    isFirstRender.current = false
  }, [gender])

  return (
    <GenderContext.Provider value={{ gender, setGender }}>
      {children}
    </GenderContext.Provider>
  )
}

export function useGender() {
  return useContext(GenderContext)
}
