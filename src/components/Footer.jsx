import { Link } from 'react-router-dom'
import { useLang } from '../i18n/LanguageContext.jsx'

export default function Footer() {
  const { t } = useLang()
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-col">
          <h4>🕌 SalahGuide</h4>
          <p>{t.footer.blurb}</p>
          <p className="footer-note">{t.footer.note}</p>
        </div>
        <div className="footer-col">
          <h4>{t.footer.learn}</h4>
          <Link to="/basics">{t.nav.basics}</Link>
          <Link to="/purity">{t.nav.purity}</Link>
          <Link to="/times">{t.nav.times}</Link>
          <Link to="/how-to-pray">{t.nav.howto}</Link>
          <Link to="/types">{t.nav.types}</Link>
          <Link to="/duas">{t.nav.duas}</Link>
        </div>
        <div className="footer-col">
          <h4>{t.footer.sources}</h4>
          <a href="https://quran.com" target="_blank" rel="noreferrer">
            {t.footer.quran}
          </a>
          <a href="https://sunnah.com" target="_blank" rel="noreferrer">
            {t.footer.sunnah}
          </a>
          <a href="https://aladhan.com" target="_blank" rel="noreferrer">
            {t.footer.aladhan}
          </a>
          <a
            href="https://www.mymasjid.ca/beginners-guide-learn-pray-salah/"
            target="_blank"
            rel="noreferrer"
          >
            {t.footer.mymasjid}
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>{t.footer.bottom}</p>
      </div>
    </footer>
  )
}
