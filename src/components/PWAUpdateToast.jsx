import { useRegisterSW } from 'virtual:pwa-register/react'
import { useLang } from '../i18n/LanguageContext.jsx'

// Small dismissible toast for the one moment a PWA needs to talk to the
// user: a new version is ready to reload. Becoming available offline is
// silent — nobody needs telling that; the install prompt lives in the
// navbar instead (see InstallButton).
export default function PWAUpdateToast() {
  const { t } = useLang()
  const {
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW()

  if (!needRefresh) return null

  return (
    <div className="pwa-toast" role="status">
      <span>{t.pwa.needRefresh}</span>
      <div className="pwa-toast-actions">
        <button className="btn btn-gold" onClick={() => updateServiceWorker(true)}>
          {t.pwa.reload}
        </button>
        <button className="pwa-toast-close" onClick={() => setNeedRefresh(false)} aria-label={t.pwa.dismiss}>
          ✕
        </button>
      </div>
    </div>
  )
}
