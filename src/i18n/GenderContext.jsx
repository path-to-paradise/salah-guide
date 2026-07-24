import { createContext, useContext, useEffect, useState } from 'react'

// gender: 'male' | 'female' | null (not chosen yet — the welcome modal shows).
// Rulings that differ between men and women (covering, Jumu'ah, monthly
// exemptions, wudu videos, istinja method) read this to show the right guidance.
const GenderContext = createContext(null)

export function GenderProvider({ children }) {
  const [gender, setGender] = useState(() => {
    const saved = localStorage.getItem('salah-gender')
    return saved === 'male' || saved === 'female' ? saved : null
  })

  useEffect(() => {
    if (gender) {
      localStorage.setItem('salah-gender', gender)
      document.documentElement.dataset.gender = gender
    } else {
      delete document.documentElement.dataset.gender
    }
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
