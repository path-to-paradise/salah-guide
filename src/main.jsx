import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { LanguageProvider } from './i18n/LanguageContext.jsx'
import { GenderProvider } from './i18n/GenderContext.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <LanguageProvider>
        <GenderProvider>
          <App />
        </GenderProvider>
      </LanguageProvider>
    </BrowserRouter>
  </StrictMode>,
)
