import { useState } from 'react'
import { typeGroups } from '../data/salahTypes.js'
import { walkthroughs, walkthroughsByArabic } from '../data/walkthroughs.js'
import { useLang } from '../i18n/LanguageContext.jsx'
import { useGender } from '../i18n/GenderContext.jsx'

const C = {
  en: {
    title: 'Types of Salah',
    lead: "“And I did not create the jinn and mankind except to worship Me.” (Qur'an 51:56). Beyond the five daily prayers lies a whole world of worship — from the obligatory Jumu'ah to the night prayer, the prayer of repentance, and the prayer for guidance. Every prayer below includes a complete step-by-step walkthrough — open the 📋 panel inside its card.",
    wtHint: 'All recitation texts (Fatiha, tashahhud, qunut, istikhara dua…) are on the Duas & Surahs page; the positions are illustrated on How to Pray.',
    jumuahMale: '👨 For you: Jumu\'ah is obligatory — you are an adult male. Take it seriously: “Whoever leaves three Jumu\'ahs out of negligence, Allah seals his heart.” (Sunan Abi Dawud 1052)',
    jumuahFemale: '🧕 For you: Jumu\'ah is not obligatory for women — you pray Dhuhr (4 rak\'ahs) at its normal time instead. If you do attend the Jumu\'ah prayer, it counts in place of Dhuhr.',
  },
  bg: {
    title: 'Видове намаз',
    lead: '„И сътворих Аз джиновете и хората единствено за да Ми служат.“ (Коран 51:56). Отвъд петте ежедневни намаза се простира цял свят на поклонение — от задължителната Джума до нощния намаз, намаза на покаянието и намаза за напътствие. Всеки намаз по-долу включва пълно ръководство стъпка по стъпка — отвори панела 📋 в картата му.',
    wtHint: 'Всички текстове за четене (Фатиха, тешеххуд, кунут, дуата за истихара…) са на страницата „Дуи и сури“; положенията са илюстрирани в „Как се кланя“.',
    jumuahMale: '👨 За теб: Джума е задължителна — ти си пълнолетен мъж. Приемай я сериозно: „Който изостави три петъчни молитви от небрежност, Аллах запечатва сърцето му.“ (Сунен Еби Дауд 1052)',
    jumuahFemale: '🧕 За теб: Джума не е задължителна за жените — вместо нея кланяш Зухр (4 рекята) в обичайното му време. Ако все пак присъстваш на Джума, тя се брои вместо Зухр.',
  },
}

function Walkthroughs({ arabic }) {
  const { L } = useLang()
  const ids = walkthroughsByArabic[arabic]
  if (!ids) return null
  return (
    <div className="accordion" style={{ marginTop: 16 }}>
      {ids.map((id) => {
        const w = walkthroughs[id]
        return (
          <details key={id}>
            <summary>📋 {L(w.label)}</summary>
            <div className="acc-body">
              <ol style={{ margin: '4px 0 4px 20px' }}>
                {L(w.steps).map((s, i) => (
                  <li key={i} style={{ marginBottom: 9 }}>{s}</li>
                ))}
              </ol>
            </div>
          </details>
        )
      })}
    </div>
  )
}

export default function TypesOfSalah() {
  const [active, setActive] = useState('fard')
  const { lang, L, t } = useLang()
  const { gender } = useGender()
  const c = C[lang]
  const group = typeGroups.find((g) => g.id === active)
  const jumuahNote =
    gender === 'male' ? c.jumuahMale : gender === 'female' ? c.jumuahFemale : null

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="hero-arabic" lang="ar">
            وَمَا خَلَقْتُ الْجِنَّ وَالْإِنسَ إِلَّا لِيَعْبُدُونِ
          </p>
          <h1>{c.title}</h1>
          <p>{c.lead}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="pill-row" role="tablist">
            {typeGroups.map((g) => (
              <button
                key={g.id}
                className={`pill ${active === g.id ? 'active' : ''}`}
                onClick={() => setActive(g.id)}
                role="tab"
                aria-selected={active === g.id}
              >
                {L(g.label)}
              </button>
            ))}
          </div>

          <p className="section-sub" style={{ maxWidth: 860 }}>{L(group.intro)}</p>

          {group.items.map((item) => (
            <article className="type-card" key={item.arabic}>
              <div className="type-head">
                <h3>
                  <span className={`badge badge-${group.badge}`} style={{ marginRight: 10 }}>
                    {t.common.badges[group.badge]}
                  </span>
                  {L(item.name)}
                </h3>
                <span className="ar" lang="ar">{item.arabic}</span>
              </div>
              <div className="type-facts">
                <div>
                  <strong>{t.common.rakahs}:</strong> {L(item.rakat)}
                </div>
                <div>
                  <strong>{t.common.when}:</strong> {L(item.time)}
                </div>
              </div>
              <p className="desc">{L(item.how)}</p>
              {item.arabic === 'صَلَاةُ الْجُمُعَة' && jumuahNote && (
                <div className="callout green" style={{ margin: '12px 0' }}>
                  {jumuahNote}
                </div>
              )}
              <p className="type-evidence">{L(item.evidence)}</p>
              {item.deeper && (
                <div className="callout gold" style={{ marginBottom: 0, marginTop: 14 }}>
                  <strong>{t.common.goingDeeper}</strong>
                  {L(item.deeper)}
                </div>
              )}
              <Walkthroughs arabic={item.arabic} />
            </article>
          ))}

          <div className="callout green">{c.wtHint}</div>
        </div>
      </section>
    </>
  )
}
