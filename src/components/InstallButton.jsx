import { useEffect, useState } from 'react'
import { useLang } from '../i18n/LanguageContext.jsx'

const isStandalone = () =>
  window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true

// Chrome/Edge/Android fire `beforeinstallprompt` when the site qualifies as
// installable; we stash that event and trigger it ourselves from a normal
// navbar button instead of leaving it to the browser's own (easy-to-miss)
// address-bar icon. Hidden entirely on browsers that never fire the event
// (iOS Safari, Firefox) or once the app is already installed.
export default function InstallButton() {
  const { t } = useLang()
  const [prompt, setPrompt] = useState(null)
  const [installed, setInstalled] = useState(isStandalone)

  useEffect(() => {
    const onBeforeInstall = (e) => {
      e.preventDefault()
      setPrompt(e)
    }
    const onInstalled = () => {
      setInstalled(true)
      setPrompt(null)
    }
    window.addEventListener('beforeinstallprompt', onBeforeInstall)
    window.addEventListener('appinstalled', onInstalled)
    return () => {
      window.removeEventListener('beforeinstallprompt', onBeforeInstall)
      window.removeEventListener('appinstalled', onInstalled)
    }
  }, [])

  if (installed || !prompt) return null

  const install = async () => {
    try {
      prompt.prompt()
      await prompt.userChoice
    } catch {
      // The browser fires beforeinstallprompt once per page load, but this
      // button is mounted twice (desktop + mobile drawer); if the visible
      // one changed after the event was already used, prompt() throws.
    }
    setPrompt(null)
  }

  return (
    <button className="install-btn" onClick={install}>
      <span aria-hidden="true">⬇</span> {t.pwa.install}
    </button>
  )
}
