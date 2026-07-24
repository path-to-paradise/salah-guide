import { Link } from 'react-router-dom'
import {
  wuduSteps,
  wuduNullifiers,
  salahConditions,
  ghusl,
  tayammum,
} from '../data/wudu.js'
import { videos } from '../data/videos.js'
import VideoEmbed from '../components/VideoEmbed.jsx'
import DuaCard from '../components/DuaCard.jsx'
import { getDua } from '../data/duas.js'
import { useLang } from '../i18n/LanguageContext.jsx'
import { useGender } from '../i18n/GenderContext.jsx'

const C = {
  en: {
    title: 'Before You Pray',
    lead: "“O you who believe, when you rise to pray, wash your faces and your forearms to the elbows, and wipe over your heads and wash your feet to the ankles…” (Qur'an 5:6). Prayer begins with purity — here is everything that must be in place before your first takbir.",
    condEyebrow: 'Step zero',
    condTitle: 'The six conditions of a valid prayer',
    condSub: 'Scholars summarise the prerequisites of salah like this — check all six and your prayer stands on solid ground.',
    wuduEyebrow: 'Purification',
    wuduTitle: 'Wudu — the ablution, step by step',
    wuduSub: "As described in the wudu of the Prophet ﷺ narrated by 'Uthman ibn 'Affan (Sahih al-Bukhari 164, Sahih Muslim 226). Wash each part in order, without long pauses in between.",
    thStep: 'Step',
    thHow: 'How',
    thTimes: 'Times',
    breaks: 'What breaks wudu?',
    breaksTail: 'If any of these happens, simply repeat wudu before the next prayer.',
    ghuslTitle: '🚿 Ghusl — the full bath',
    ghuslReq: 'Required after:',
    tayTitle: '🏜️ Tayammum — when there is no water',
    sealEyebrow: 'Seal it',
    sealTitle: 'The dua after wudu',
    purityTitle: '🚿 Before wudu comes istinja',
    purity: 'Wudu is valid only on a body cleansed after the toilet. How to clean properly with water, what to do about urine drops, doubts, towels and more — we answer it all frankly on the dedicated page:',
    purityLink: 'Cleanliness & Purity — the complete guide →',
  },
  bg: {
    title: 'Преди намаза',
    lead: '„О, вярващи, когато станете за намаза, измийте лицето и ръцете си до лактите, и обършете главата, и измийте нозете си до глезените…“ (Коран 5:6). Намазът започва с чистота — ето всичко, което трябва да е налице преди първия ти текбир.',
    condEyebrow: 'Нулева стъпка',
    condTitle: 'Шестте условия за валиден намаз',
    condSub: 'Учените обобщават предпоставките на намаза така — провери и шестте, и намазът ти стои на здрава основа.',
    wuduEyebrow: 'Пречистване',
    wuduTitle: 'Абдест — стъпка по стъпка',
    wuduSub: 'Според описанието на абдеста на Пророка ﷺ, предадено от Усман ибн Аффан (Сахих ал-Бухари 164, Сахих Муслим 226). Измивай всяка част поред, без дълги паузи между тях.',
    thStep: 'Стъпка',
    thHow: 'Как',
    thTimes: 'Пъти',
    breaks: 'Какво разваля абдеста?',
    breaksTail: 'Ако някое от тези се случи, просто поднови абдеста преди следващия намаз.',
    ghuslTitle: '🚿 Гусул — пълното къпане',
    ghuslReq: 'Задължителен след:',
    tayTitle: '🏜️ Тейеммум — когато няма вода',
    sealEyebrow: 'Завърши',
    sealTitle: 'Дуата след абдест',
    purityTitle: '🚿 Преди абдеста идва истинджата',
    purity: 'Абдестът е валиден само върху тяло, почистено след тоалетна. Как се мие правилно с вода, какво да правиш с капките урина, съмненията, кърпите и още — отговаряме откровено на всичко на специалната страница:',
    purityLink: 'Чистота и хигиена — пълното ръководство →',
  },
}

export default function Basics() {
  const { lang, L, t } = useLang()
  const { gender } = useGender()
  const c = C[lang]

  // Show the wudu video that matches the viewer; both if not chosen.
  const wuduVideos = videos.wudu.filter((v) => {
    if (gender === 'female') return v.id === 'quVqtpkYwNI'
    if (gender === 'male') return v.id === 'eo3n_i-rHss'
    return true
  })

  const condDetail = (cond) => {
    if (gender === 'male' && cond.detailMale) return L(cond.detailMale)
    if (gender === 'female' && cond.detailFemale) return L(cond.detailFemale)
    return L(cond.detail)
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="hero-arabic" lang="ar">
            يَا أَيُّهَا الَّذِينَ آمَنُوا إِذَا قُمْتُمْ إِلَى الصَّلَاةِ فَاغْسِلُوا وُجُوهَكُمْ…
          </p>
          <h1>{c.title}</h1>
          <p>{c.lead}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="eyebrow">{c.condEyebrow}</span>
          <h2 className="section-title">{c.condTitle}</h2>
          <p className="section-sub">{c.condSub}</p>
          <div className="accordion">
            {salahConditions.map((cond, i) => (
              <details key={i} open={i === 0}>
                <summary>
                  {i + 1}. {L(cond.title)}
                </summary>
                <div className="acc-body">{condDetail(cond)}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <span className="eyebrow">{c.wuduEyebrow}</span>
          <h2 className="section-title">{c.wuduTitle}</h2>
          <p className="section-sub">{c.wuduSub}</p>
          <div className="table-wrap">
            <table className="nice">
              <thead>
                <tr>
                  <th style={{ width: 60 }}>#</th>
                  <th>{c.thStep}</th>
                  <th>{c.thHow}</th>
                  <th style={{ width: 80 }}>{c.thTimes}</th>
                </tr>
              </thead>
              <tbody>
                {wuduSteps.map((s, i) => (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>
                      <strong>{L(s.title)}</strong>
                    </td>
                    <td>{L(s.detail)}</td>
                    <td>{s.times}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="callout gold">
            <strong>{c.breaks}</strong>
            {L(wuduNullifiers).join(' · ')}. {c.breaksTail}
          </div>

          <div className="callout green">
            <strong>{c.purityTitle}</strong>
            {c.purity}{' '}
            <Link to="/purity" style={{ fontWeight: 700 }}>{c.purityLink}</Link>
          </div>

          <div className="video-grid" style={{ marginTop: 26 }}>
            {wuduVideos.map((v) => (
              <VideoEmbed key={v.id} video={v} />
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="two-col">
            <div className="card">
              <h3>{c.ghuslTitle}</h3>
              <p style={{ color: 'var(--muted)', margin: '8px 0 12px' }}>
                {c.ghuslReq} {L(ghusl.requiredFor).join('; ')}.
              </p>
              <ol style={{ marginLeft: 20, color: 'var(--ink-soft)' }}>
                {L(ghusl.how).map((h, i) => (
                  <li key={i} style={{ marginBottom: 6 }}>{h}</li>
                ))}
              </ol>
              <p className="dua-source" style={{ marginTop: 12 }}>
                <strong>{t.common.source}:</strong> {L(ghusl.source)}
              </p>
            </div>
            <div className="card">
              <h3>{c.tayTitle}</h3>
              <p style={{ color: 'var(--muted)', margin: '8px 0 12px' }}>
                {L(tayammum.when)}
              </p>
              <ol style={{ marginLeft: 20, color: 'var(--ink-soft)' }}>
                {L(tayammum.how).map((h, i) => (
                  <li key={i} style={{ marginBottom: 6 }}>{h}</li>
                ))}
              </ol>
              <p className="dua-source" style={{ marginTop: 12 }}>
                <strong>{t.common.source}:</strong> {L(tayammum.source)}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <span className="eyebrow">{c.sealEyebrow}</span>
          <h2 className="section-title">{c.sealTitle}</h2>
          <DuaCard dua={getDua('after-wudu')} />
        </div>
      </section>
    </>
  )
}
