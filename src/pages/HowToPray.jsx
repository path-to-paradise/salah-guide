import { useEffect, useState } from 'react'
import { praySteps } from '../data/steps.js'
import { videos } from '../data/videos.js'
import PoseFigure from '../components/PoseFigure.jsx'
import VideoEmbed from '../components/VideoEmbed.jsx'
import { useLang } from '../i18n/LanguageContext.jsx'
import { useGender } from '../i18n/GenderContext.jsx'

const C = {
  en: {
    title: 'How to Pray, Step by Step',
    lead: '“Pray as you have seen me praying.” (Sahih al-Bukhari 631). Walk through every movement and every word below — take it slowly, one step at a time.',
    guideEyebrow: 'Interactive guide',
    guideTitle: 'The prayer, from takbir to salam',
    guideSub: "Use the Next button (or the progress bar) to move through the steps. Together, steps 3–8 make one rak'ah — the repeating unit of every prayer.",
    fullTitle: "🧭 Putting a whole prayer together (example: Fajr, 2 rak'ahs)",
    full: "Takbir → Fatiha + surah → ruku → stand → 2 sujuds → stand for rak'ah 2 → Fatiha + surah → ruku → stand → 2 sujuds → sit: tashahhud + salawat + dua → salam. For 3 or 4 rak'ah prayers, sit for the first tashahhud after rak'ah 2, then continue (reciting only Al-Fatiha in rak'ahs 3–4) and finish the full sitting at the end.",
    watchEyebrow: 'Watch & imitate',
    watchTitle: 'Video guides',
    watchSub: 'Seeing the prayer performed makes everything click. These embedded lessons walk through the whole salah.',
    fatihaEyebrow: 'Learn the words',
    fatihaTitle: 'Master Al-Fatiha',
    fatihaSub: "Al-Fatiha is recited in every rak'ah — these word-by-word videos will have you reciting it confidently.",
    maleNote: {
      title: '👨 For you as a man',
      body: 'Dress: cover at minimum navel to knees, and the shoulders when possible (Sahih al-Bukhari 359). Strive to pray the fard in congregation at the mosque — 27 times the reward (Sahih al-Bukhari 645) — and Jumu\'ah on Friday is obligatory for you. When leading or praying alone, recite aloud in Fajr, Maghrib and Isha.',
    },
    femaleNote: {
      title: '🧕 For you as a woman',
      body: 'Your prayer is identical to the men\'s in every word, movement and rak\'ah. Dress: cover everything except the face and hands — hair included — in loose, opaque clothing (Sunan Abi Dawud 641). Praying at home is fully valid and beloved; the mosque is your right too. During menstruation and post-natal bleeding, prayer is lifted entirely and is not made up afterwards (Sahih al-Bukhari 321). Jumu\'ah is not obligatory for you — you pray Dhuhr instead, though you are welcome to attend.',
    },
  },
  bg: {
    title: 'Как се кланя намаз, стъпка по стъпка',
    lead: '„Кланяйте, както видяхте мен да кланям.“ (Сахих ал-Бухари 631). Премини през всяко движение и всяка дума по-долу — бавно, стъпка по стъпка.',
    guideEyebrow: 'Интерактивно ръководство',
    guideTitle: 'Намазът — от текбира до селяма',
    guideSub: 'Използвай бутона „Следваща стъпка“ (или лентата за напредък), за да преминаваш през стъпките. Заедно стъпки 3–8 образуват един рекят — повтарящата се единица на всеки намаз.',
    fullTitle: '🧭 Сглобяване на цял намаз (пример: Фаджр, 2 рекята)',
    full: 'Текбир → Фатиха + сура → рукю → изправяне → 2 седждета → ставане за 2-ри рекят → Фатиха + сура → рукю → изправяне → 2 седждета → сядане: тешеххуд + салауат + дуа → селям. При намази от 3 или 4 рекята сядаш за първия тешеххуд след 2-рия рекят, после продължаваш (четейки само Ал-Фатиха в рекяти 3–4) и завършваш с пълното сядане накрая.',
    watchEyebrow: 'Гледай и повтаряй',
    watchTitle: 'Видео ръководства',
    watchSub: 'Когато видиш намаза изпълнен, всичко си идва на мястото. Тези вградени уроци преминават през целия намаз.',
    fatihaEyebrow: 'Научи думите',
    fatihaTitle: 'Овладей Ал-Фатиха',
    fatihaSub: 'Ал-Фатиха се чете във всеки рекят — тези видеа дума по дума ще те накарат да я четеш уверено.',
    maleNote: {
      title: '👨 За теб като мъж',
      body: 'Облекло: покрий минимум от пъпа до коленете, а по възможност и раменете (Сахих ал-Бухари 359). Стреми се да кланяш фарзовете с джемаат в джамията — 27 пъти по-голяма награда (Сахих ал-Бухари 645) — а Джума в петък е задължителна за теб. Когато водиш или кланяш сам, чети на глас във Фаджр, Магриб и Иша.',
    },
    femaleNote: {
      title: '🧕 За теб като жена',
      body: 'Твоят намаз е еднакъв с този на мъжете във всяка дума, движение и рекят. Облекло: покрий всичко освен лицето и дланите — включително косата — със свободни, непрозрачни дрехи (Сунен Еби Дауд 641). Намазът у дома е напълно валиден и обичан; джамията също е твое право. По време на месечен цикъл и следродилно кръвотечение намазът отпада изцяло и не се наваксва (Сахих ал-Бухари 321). Джума не е задължителна за теб — вместо нея кланяш Зухр, но си добре дошла да присъстваш.',
    },
  },
}

function StepGuide() {
  const [i, setI] = useState(0)
  const [dir, setDir] = useState('next')
  const { L, t } = useLang()
  const step = praySteps[i]
  const last = praySteps.length - 1

  const go = (idx, direction) => {
    setDir(direction ?? (idx > i ? 'next' : 'prev'))
    setI(Math.max(0, Math.min(last, idx)))
  }

  // Arrow keys move between steps.
  useEffect(() => {
    const onKey = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return
      if (e.key === 'ArrowRight') {
        setDir('next')
        setI((x) => Math.min(last, x + 1))
      }
      if (e.key === 'ArrowLeft') {
        setDir('prev')
        setI((x) => Math.max(0, x - 1))
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [last])

  // stagger helper: sequential reveal delays for the content column
  let seq = 0
  const stagger = () => ({ animationDelay: `${140 + seq++ * 80}ms` })

  return (
    <div className="step-shell">
      <div className="step-dots" role="tablist" aria-label="Prayer steps">
        {praySteps.map((s, idx) => (
          <button
            key={s.id}
            className={`step-dot ${idx < i ? 'done' : ''} ${idx === i ? 'current' : ''}`}
            onClick={() => go(idx)}
            role="tab"
            aria-selected={idx === i}
            aria-label={`${t.common.step} ${idx + 1}: ${L(s.title)}`}
            title={L(s.title)}
          >
            {idx < i ? '✓' : idx + 1}
          </button>
        ))}
        <div className="step-fill" aria-hidden="true">
          <div style={{ width: `${(i / last) * 100}%` }} />
        </div>
      </div>
      <p className="step-keys-hint">{t.common.keysHint}</p>
      <div className={`step-body anim-${dir}`} key={step.id}>
        <div className="step-figure">
          <PoseFigure pose={step.pose} poseKey={step.id} />
          <span className="pose-name">{L(step.poseName)}</span>
          <span className="pose-arabic" lang="ar">{step.poseArabic}</span>
        </div>
        <div className="step-content">
          <span className="step-count">
            {t.common.step} {i + 1} {t.common.of} {praySteps.length}
          </span>
          <h3>{L(step.title)}</h3>
          <ul>
            {L(step.points).map((p, idx) => (
              <li key={idx} style={stagger()}>{p}</li>
            ))}
          </ul>
          {step.say && (
            <div className="step-say" style={stagger()}>
              <div className="say-arabic" lang="ar">{step.say.arabic}</div>
              <div className="say-translit">{L(step.say.translit)}</div>
              <div className="say-meaning">{L(step.say.meaning)}</div>
            </div>
          )}
          {step.mistake && (
            <div className="step-mistake" style={stagger()}>⚠️ {L(step.mistake)}</div>
          )}
        </div>
      </div>
      <div className="step-nav">
        <button
          className="btn btn-outline"
          style={{ borderColor: 'var(--line)', color: 'var(--ink)' }}
          onClick={() => go(i - 1, 'prev')}
          disabled={i === 0}
        >
          {t.common.prev}
        </button>
        <button
          className="btn btn-green"
          onClick={() => (i === last ? go(0, 'prev') : go(i + 1, 'next'))}
        >
          {i === last ? t.common.restart : t.common.next}
        </button>
      </div>
    </div>
  )
}

export default function HowToPray() {
  const { lang } = useLang()
  const { gender } = useGender()
  const c = C[lang]
  const gNote = gender === 'female' ? c.femaleNote : gender === 'male' ? c.maleNote : null

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="hero-arabic" lang="ar">صَلُّوا كَمَا رَأَيْتُمُونِي أُصَلِّي</p>
          <h1>{c.title}</h1>
          <p>{c.lead}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="eyebrow">{c.guideEyebrow}</span>
          <h2 className="section-title">{c.guideTitle}</h2>
          <p className="section-sub">{c.guideSub}</p>
          {gNote && (
            <div className="callout green" style={{ marginTop: 0 }}>
              <strong>{gNote.title}</strong>
              {gNote.body}
            </div>
          )}
          <StepGuide />

          <div className="callout green" style={{ marginTop: 30 }}>
            <strong>{c.fullTitle}</strong>
            {c.full}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <span className="eyebrow">{c.watchEyebrow}</span>
          <h2 className="section-title">{c.watchTitle}</h2>
          <p className="section-sub">{c.watchSub}</p>
          <div className="video-grid">
            {videos.pray.map((v) => (
              <VideoEmbed key={v.id} video={v} />
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <span className="eyebrow">{c.fatihaEyebrow}</span>
          <h2 className="section-title">{c.fatihaTitle}</h2>
          <p className="section-sub">{c.fatihaSub}</p>
          <div className="video-grid">
            {videos.fatiha.map((v) => (
              <VideoEmbed key={v.id} video={v} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
