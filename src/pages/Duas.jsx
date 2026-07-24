import { useState } from 'react'
import { duas, duaCategories } from '../data/duas.js'
import DuaCard from '../components/DuaCard.jsx'
import { useLang } from '../i18n/LanguageContext.jsx'

const C = {
  en: {
    title: 'Duas & Surahs for Salah',
    lead: "“Call upon Me; I will respond to you.” (Qur'an 40:60). Every recitation you need for the prayer — in Arabic, with transliteration, translation and its authentic source.",
    subs: {
      'in-prayer':
        'In the order they occur in the prayer — from the opening supplication to the closing salam.',
      quran:
        'Al-Fatiha is essential; then memorise the short surahs one at a time, starting with Al-Kawthar or Al-Ikhlas. Text follows the Uthmani script; translations are Saheeh International (quran.com).',
      'after-prayer':
        'The sunnah adhkar said after the tasleem — a few minutes that carry immense reward.',
      special:
        'Duas for specific prayers and occasions — Witr, Istikhara, repentance, and entering the masjid.',
    },
  },
  bg: {
    title: 'Дуи и сури за намаза',
    lead: '„Зовете Ме, и Аз ще ви откликна!“ (Коран 40:60). Всичко, което се чете в намаза — на арабски, с транслитерация, превод и достоверен източник.',
    subs: {
      'in-prayer':
        'В реда, в който се срещат в намаза — от встъпителната дуа до завършващия селям.',
      quran:
        'Ал-Фатиха е задължителна; после учи кратките сури една по една, като започнеш с Ал-Кеусер или Ал-Ихляс. Текстът следва усманиевия шрифт; преводите са по смисъл.',
      'after-prayer':
        'Сунна азкярът след теслима — няколко минути с огромна награда.',
      special:
        'Дуи за конкретни намази и случаи — Витр, Истихара, покаяние и влизане в джамия.',
    },
  },
}

export default function Duas() {
  const [cat, setCat] = useState('in-prayer')
  const { lang, L } = useLang()
  const c = C[lang]
  const list = duas.filter((d) => d.category === cat)

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="hero-arabic" lang="ar">ادْعُونِي أَسْتَجِبْ لَكُمْ</p>
          <h1>{c.title}</h1>
          <p>{c.lead}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="pill-row" role="tablist">
            {duaCategories.map((cc) => (
              <button
                key={cc.id}
                className={`pill ${cat === cc.id ? 'active' : ''}`}
                onClick={() => setCat(cc.id)}
                role="tab"
                aria-selected={cat === cc.id}
              >
                {L(cc.label)}
              </button>
            ))}
          </div>

          <p className="section-sub">{c.subs[cat]}</p>

          {list.map((d) => (
            <DuaCard key={d.id} dua={d} />
          ))}
        </div>
      </section>
    </>
  )
}
