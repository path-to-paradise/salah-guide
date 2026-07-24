import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import PrayerTimesWidget from '../components/PrayerTimesWidget.jsx'
import PoseFigure from '../components/PoseFigure.jsx'
import { useLang } from '../i18n/LanguageContext.jsx'
import { stations, usePathProgress } from '../data/path.js'

function PathMap() {
  const { lang, L, t } = useLang()
  const { done, current, allDone } = usePathProgress()

  return (
    <div className="path-map">
      {allDone && <div className="callout gold">{t.path.allDone}</div>}
      {stations.map((s, i) => {
        const isDone = done.includes(s.key)
        const isCurrent = current?.key === s.key
        return (
          <div
            key={s.key}
            className={`path-node ${isDone ? 'done' : ''} ${isCurrent ? 'current' : ''}`}
          >
            <div className="path-node-dot" aria-hidden="true">
              {isDone ? '✓' : s.icon}
            </div>
            <Link to={s.route} className="card path-node-card">
              <div className="path-node-head">
                <h3>
                  {i + 1} · {t.nav[s.navKey]}
                </h3>
                {isDone && <span className="badge badge-sunnah">{t.path.completed}</span>}
                {isCurrent && <span className="badge badge-wajib">{t.path.youAreHere}</span>}
              </div>
              <p>{L(s.desc)}</p>
              <span className="card-level">{L(s.level)}</span>
            </Link>
          </div>
        )
      })}
    </div>
  )
}

const checklistItems = [
  { en: 'Learn how to perform wudu', bg: 'Научи как се взима абдест' },
  { en: 'Memorise Surah Al-Fatiha', bg: 'Научи наизуст Сура Ал-Фатиха' },
  {
    en: 'Memorise one short surah (e.g. Al-Ikhlas)',
    bg: 'Научи една кратка сура (напр. Ал-Ихляс)',
  },
  {
    en: 'Learn the prayer positions and their order',
    bg: 'Научи положенията в намаза и реда им',
  },
  { en: 'Memorise the tashahhud', bg: 'Научи наизуст Тешеххуда' },
  {
    en: 'Memorise the salawat (Ibrahimiyyah)',
    bg: 'Научи наизуст салауата (Ибрахимиййа)',
  },
  {
    en: 'Pray all five prayers in one day',
    bg: 'Изкланяй петте намаза в един ден',
  },
  {
    en: 'Learn the adhkar said after prayer',
    bg: 'Научи азкяра след намаз',
  },
  {
    en: "Pray the 12 sunnah rak'ahs in one day",
    bg: 'Изкланяй 12-те сунна рекята в един ден',
  },
  { en: 'Pray Witr before sleeping', bg: 'Кланяй Витр преди сън' },
]

const C = {
  en: {
    heroTitle1: 'Learn to pray ',
    heroTitle2: ' — from your first takbir to mastery',
    lead: "“…and establish prayer for My remembrance.” (Qur'an 20:14). A complete, free guide built on the Qur'an and authentic Sunnah: wudu, prayer times, every type of salah, and all the duas you need — with videos, illustrations and a quiz.",
    ctaStart: 'Start praying today →',
    ctaNew: "I'm completely new",
    sources:
      "Sources cited throughout: Qur'an (Saheeh International) · Sahih al-Bukhari · Sahih Muslim · the Sunan collections",
    journeyEyebrow: 'Your learning journey',
    journeyTitle: 'Six steps from beginner to expert',
    journeySub: "Follow the path in order if you're new — or jump straight to what you need.",
    verse:
      '“Indeed, prayer prohibits immorality and wrongdoing, and the remembrance of Allah is greater.”',
    verseRef: "Qur'an 29:45",
    whyEyebrow: 'Why salah?',
    whyTitle: "The heart of a Muslim's day",
    why1t: 'It washes away sins',
    why1: '“If there was a river at your door and you bathed in it five times a day, would any dirt remain? That is the likeness of the five prayers — Allah erases sins with them.” (Sahih al-Bukhari 528)',
    why2t: 'The first thing judged',
    why2: '“The first of his deeds for which a person will be brought to account on the Day of Resurrection is his prayer. If it is sound, he will succeed.” (Jami` at-Tirmidhi 413)',
    why3t: 'A direct conversation',
    why3: 'In salah you speak to Allah with no intermediary. In sujud you are closest to Him — “so make abundant supplication.” (Sahih Muslim 482)',
    trackEyebrow: 'Track yourself',
    trackTitle: 'Your learning checklist',
    done: "Masha'Allah — you have completed the journey! Keep the prayers alive every day.",
    progress: (d, n) => `${d} of ${n} milestones complete — your progress is saved on this device.`,
  },
  bg: {
    heroTitle1: 'Научи се да кланяш ',
    heroTitle2: ' — от първия текбир до майсторство',
    lead: '„…и отслужвай молитвата, за да Ме споменаваш!“ (Коран 20:14). Пълно, безплатно ръководство, изградено върху Корана и достоверната Сунна: абдест, времена за намаз, всички видове намаз и всички нужни дуи — с видеа, илюстрации и тест.',
    ctaStart: 'Започни да кланяш днес →',
    ctaNew: 'Напълно начинаещ съм',
    sources:
      'Цитирани източници: Коран (Saheeh International) · Сахих ал-Бухари · Сахих Муслим · сборниците Сунен',
    journeyEyebrow: 'Твоят път на учене',
    journeyTitle: 'Шест стъпки от начинаещ до експерт',
    journeySub: 'Следвай пътя поред, ако си нов — или премини направо към нужното.',
    verse:
      '„Намазът предпазва от покварата и порицаваното. Най-великото е споменаването на Аллах.“',
    verseRef: 'Коран 29:45',
    whyEyebrow: 'Защо намаз?',
    whyTitle: 'Сърцето на деня на мюсюлманина',
    why1t: 'Измива греховете',
    why1: '„Ако пред вратата ви имаше река и се къпехте в нея пет пъти на ден, щеше ли да остане мръсотия? Такова е подобието на петте намаза — с тях Аллах изтрива греховете.“ (Сахих ал-Бухари 528)',
    why2t: 'Първото, за което ще се отговаря',
    why2: '„Първото от делата, за което човек ще отговаря в Съдния ден, е намазът му. Ако той е изряден, ще сполучи.“ (Джами ат-Тирмизи 413)',
    why3t: 'Пряк разговор',
    why3: 'В намаза говориш с Аллах без посредник. В седжде си най-близо до Него — „затова правете много дуа“. (Сахих Муслим 482)',
    trackEyebrow: 'Следи напредъка си',
    trackTitle: 'Твоят списък за учене',
    done: 'Машаллах — извървя пътя! Поддържай намазите живи всеки ден.',
    progress: (d, n) => `${d} от ${n} стъпки завършени — напредъкът се пази на това устройство.`,
  },
}

function LearningChecklist() {
  const { lang, L } = useLang()
  const c = C[lang]
  const [done, setDone] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('salah-checklist')) || []
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem('salah-checklist', JSON.stringify(done))
  }, [done])

  const toggle = (i) =>
    setDone((d) => (d.includes(i) ? d.filter((x) => x !== i) : [...d, i]))

  const pct = Math.round((done.length / checklistItems.length) * 100)

  return (
    <div>
      <div className="progress-bar" aria-hidden="true">
        <div style={{ width: `${pct}%` }} />
      </div>
      <p className="section-sub" style={{ marginBottom: 14 }}>
        {pct === 100 ? c.done : c.progress(done.length, checklistItems.length)}
      </p>
      <div className="check-list">
        {checklistItems.map((item, i) => (
          <label key={i} className={`check-item ${done.includes(i) ? 'checked' : ''}`}>
            <input
              type="checkbox"
              checked={done.includes(i)}
              onChange={() => toggle(i)}
            />
            <span className="check-label">{L(item)}</span>
          </label>
        ))}
      </div>
    </div>
  )
}

export default function Home() {
  const { lang, t } = useLang()
  const { current, done } = usePathProgress()
  const c = C[lang]
  const continueTo = current ? current.route : '/quiz'
  const continueLabel = done.length === 0 ? t.path.startBtn : t.path.continueBtn

  return (
    <>
      <section className="hero">
        <div className="container hero-inner">
          <div>
            <p className="hero-arabic" lang="ar">وَأَقِمِ الصَّلَاةَ لِذِكْرِي</p>
            <h1>
              {c.heroTitle1}
              <em>{lang === 'bg' ? 'намаз' : 'Salah'}</em>
              {c.heroTitle2}
            </h1>
            <p className="lead">{c.lead}</p>
            <div className="btn-row">
              <Link to={continueTo} className="btn btn-gold">
                {continueLabel}
              </Link>
              <Link to="/how-to-pray" className="btn btn-outline">
                {c.ctaStart}
              </Link>
            </div>
            <p className="hero-verse-ref">{c.sources}</p>
          </div>
          <div className="hero-art">
            <PoseFigure pose="sujud" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="eyebrow">{t.path.eyebrow}</span>
          <h2 className="section-title">{t.path.title}</h2>
          <p className="section-sub">{t.path.sub}</p>
          <PathMap />
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <PrayerTimesWidget />
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="verse-banner">
            <p className="ar" lang="ar">
              إِنَّ الصَّلَاةَ تَنْهَىٰ عَنِ الْفَحْشَاءِ وَالْمُنكَرِ ۗ وَلَذِكْرُ اللَّهِ أَكْبَرُ
            </p>
            <p className="tr">{c.verse}</p>
            <p className="ref">{c.verseRef}</p>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <span className="eyebrow">{c.whyEyebrow}</span>
          <h2 className="section-title">{c.whyTitle}</h2>
          <div className="card-grid" style={{ marginTop: 22 }}>
            <div className="card">
              <span className="card-icon">🌊</span>
              <h3>{c.why1t}</h3>
              <p>{c.why1}</p>
            </div>
            <div className="card">
              <span className="card-icon">⚖️</span>
              <h3>{c.why2t}</h3>
              <p>{c.why2}</p>
            </div>
            <div className="card">
              <span className="card-icon">🤲</span>
              <h3>{c.why3t}</h3>
              <p>{c.why3}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <span className="eyebrow">{c.trackEyebrow}</span>
          <h2 className="section-title">{c.trackTitle}</h2>
          <LearningChecklist />
        </div>
      </section>
    </>
  )
}
