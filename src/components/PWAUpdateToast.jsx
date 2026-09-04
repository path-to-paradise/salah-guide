import { useRegisterSW } from 'virtual:pwa-register/react'
import { useLang } from '../i18n/LanguageContext.jsx'

// Small dismissible toast for the two moments a PWA needs to talk to the
// user: a new version is ready to reload, or the app just became available
// offline. Everything else (install prompt, caching) is silent by design.
export default function PWAUpdateToast() {
  const { t } = useLang()
  const {
    offlineReady: [offlineReady, setOfflineReady],
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW()

  if (!offlineReady && !needRefresh) return null

  const close = () => {
    setOfflineReady(false)
    setNeedRefresh(false)
  }

  return (
    <div className="pwa-toast" role="status">
      <span>{needRefresh ? t.pwa.needRefresh : t.pwa.offlineReady}</span>
      <div className="pwa-toast-actions">
        {needRefresh && (
          <button className="btn btn-gold" onClick={() => updateServiceWorker(true)}>
            {t.pwa.reload}
          </button>
        )}
        <button className="pwa-toast-close" onClick={close} aria-label={t.pwa.dismiss}>
          ✕
        </button>
      </div>
    </div>
  )
}
