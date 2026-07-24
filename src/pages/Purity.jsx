import {
  toiletDuas,
  adab,
  methodMen,
  methodWomen,
  purityFaqs,
} from '../data/purity.js'
import DuaCard from '../components/DuaCard.jsx'
import { useLang } from '../i18n/LanguageContext.jsx'
import { useGender } from '../i18n/GenderContext.jsx'

const C = {
  en: {
    title: 'Cleanliness & Purity — Istinja',
    lead: '“Purity is half of faith.” (Sahih Muslim 223). Islam treats cleansing after the toilet as worship with a method — and it matters: the Prophet ﷺ warned that most punishment of the grave is because of carelessness with urine (Sahih al-Bukhari 218; Sunan Ibn Majah 348). Here is the complete, practical guide — including the questions people are shy to ask.',
    whyEyebrow: 'The foundations',
    whyTitle: 'Three words to know',
    word1t: 'Istinja — washing with water',
    word1: 'Cleansing the private parts with water after urine or stool. The method the Qur\'an praised in the people of Quba: “In it are men who love to purify themselves.” (Qur\'an 9:108; Sunan Abi Dawud 44)',
    word2t: 'Istijmar — wiping',
    word2: 'Removing the traces by wiping — classically stones, today toilet paper. Valid on its own with at least three wipes, an odd number, until clean (Sahih Muslim 262).',
    word3t: 'Istibra — letting urine finish',
    word3: 'Making sure the flow has fully stopped before cleaning — pausing, moving, a light cough. The habit that solves the “drops afterwards” problem at its root.',
    adabEyebrow: 'Etiquette',
    adabTitle: 'The manners of the toilet (Adab al-Khala)',
    duasTitle: 'The two duas of the toilet',
    methodEyebrow: 'The method',
    methodTitle: 'Step by step, properly clean',
    methodSub: 'The goal is simple: no urine or stool traces remain on the body, and the last drops have left before you clean. Follow the column that applies to you.',
    menTitle: '🚹 For men',
    womenTitle: '🚺 For women',
    methodNote: '⚠️ Balance is the Sunnah: clean thoroughly once, then stop. Endless re-checking, squeezing and re-washing is waswas (whispering), not piety — and the fiqh below deals with it directly.',
    forYou: 'Shown for you — change it with the 👨/🧕 switch in the top bar.',
    otherGuide: 'View the other guide',
    faqEyebrow: 'Honest answers',
    faqTitle: 'Questions everyone has (and few ask)',
    faqSub: 'Urine drops, wet underwear, doubts, towels, incontinence — each answer with its evidence.',
    hygieneTitle: '🧼 A practical modern setup',
    hygiene: 'A small watering can (or bidet attachment / washing bottle) next to the toilet makes istinja effortless — this is the “lota” found in Muslim homes worldwide. Keep toilet paper for the first wipe, water for the real cleaning, soap for the hands, and a personal towel only for drying already-washed skin. With that routine, staying prayer-ready takes seconds.',
  },
  bg: {
    title: 'Чистота и хигиена — истинджа',
    lead: '„Чистотата е половината от вярата.“ (Сахих Муслим 223). Ислямът приема почистването след тоалетна като поклонение с метод — и това е важно: Пророкът ﷺ предупредил, че по-голямата част от мъчението в гроба е заради небрежност към урината (Сахих ал-Бухари 218; Сунен Ибн Маджа 348). Ето пълното практично ръководство — включително въпросите, които хората се срамуват да зададат.',
    whyEyebrow: 'Основите',
    whyTitle: 'Три думи, които да знаеш',
    word1t: 'Истинджа — миене с вода',
    word1: 'Почистване на срамните части с вода след урина или изпражнения. Методът, който Коранът похвалил у хората от Куба: „В нея има мъже, които обичат да се пречистват.“ (Коран 9:108; Сунен Еби Дауд 44)',
    word2t: 'Истиджмар — избърсване',
    word2: 'Премахване на следите чрез бърсане — класически с камъни, днес с тоалетна хартия. Валидно самостоятелно с поне три избърсвания, нечетен брой, до чисто (Сахих Муслим 262).',
    word3t: 'Истибра — изчакване на урината',
    word3: 'Увери се, че потокът е спрял напълно, преди да се почистиш — изчакване, раздвижване, леко покашляне. Навикът, който решава проблема с „капките после“ из корен.',
    adabEyebrow: 'Етикет',
    adabTitle: 'Правилата на тоалетната (адаб ал-халя)',
    duasTitle: 'Двете дуи на тоалетната',
    methodEyebrow: 'Методът',
    methodTitle: 'Стъпка по стъпка, наистина чисто',
    methodSub: 'Целта е проста: по тялото да не остават следи от урина или изпражнения, а последните капки да са излезли, преди да се почистиш. Следвай колоната, която се отнася за теб.',
    menTitle: '🚹 За мъже',
    womenTitle: '🚺 За жени',
    methodNote: '⚠️ Балансът е Сунната: почисти се старателно веднъж и спри. Безкрайното препроверяване, стискане и повторно миене е васуас (нашепване), а не набожност — и фикхът по-долу се занимава с него директно.',
    forYou: 'Показано за теб — промени го с превключвателя 👨/🧕 в горната лента.',
    otherGuide: 'Виж другото ръководство',
    faqEyebrow: 'Честни отговори',
    faqTitle: 'Въпросите, които всеки има (и малцина задават)',
    faqSub: 'Капки урина, мокро бельо, съмнения, кърпи, инконтиненция — всеки отговор с доказателството си.',
    hygieneTitle: '🧼 Практична модерна подредба',
    hygiene: 'Малка каничка (или биде приставка / бутилка за миене) до тоалетната прави истинджата без усилие — това е „лотата“, позната в мюсюлманските домове по света. Дръж тоалетна хартия за първото избърсване, вода за истинското почистване, сапун за ръцете и лична кърпа само за подсушаване на вече измита кожа. С тази рутина да си готов за намаз отнема секунди.',
  },
}

export default function Purity() {
  const { lang, L } = useLang()
  const { gender } = useGender()
  const c = C[lang]

  const mine = gender === 'female'
    ? { title: c.womenTitle, steps: L(methodWomen) }
    : { title: c.menTitle, steps: L(methodMen) }
  const other = gender === 'female'
    ? { title: c.menTitle, steps: L(methodMen) }
    : { title: c.womenTitle, steps: L(methodWomen) }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="hero-arabic" lang="ar">الطُّهُورُ شَطْرُ الْإِيمَانِ</p>
          <h1>{c.title}</h1>
          <p>{c.lead}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="eyebrow">{c.whyEyebrow}</span>
          <h2 className="section-title">{c.whyTitle}</h2>
          <div className="card-grid" style={{ marginTop: 22 }}>
            <div className="card">
              <span className="card-icon">💧</span>
              <h3>{c.word1t}</h3>
              <p>{c.word1}</p>
            </div>
            <div className="card">
              <span className="card-icon">🧻</span>
              <h3>{c.word2t}</h3>
              <p>{c.word2}</p>
            </div>
            <div className="card">
              <span className="card-icon">⏳</span>
              <h3>{c.word3t}</h3>
              <p>{c.word3}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <span className="eyebrow">{c.adabEyebrow}</span>
          <h2 className="section-title">{c.adabTitle}</h2>
          <div className="accordion">
            {adab.map((a, i) => (
              <details key={i} open={i === 0}>
                <summary>{L(a.title)}</summary>
                <div className="acc-body">{L(a.detail)}</div>
              </details>
            ))}
          </div>

          <h2 className="section-title" style={{ marginTop: 40 }}>{c.duasTitle}</h2>
          <div className="two-col">
            {toiletDuas.map((d) => (
              <DuaCard key={d.id} dua={d} />
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <span className="eyebrow">{c.methodEyebrow}</span>
          <h2 className="section-title">{c.methodTitle}</h2>
          <p className="section-sub">{c.methodSub}</p>
          {gender ? (
            <>
              <div className="card">
                <h3>{mine.title}</h3>
                <p style={{ color: 'var(--muted)', fontSize: '0.84rem', marginTop: 4 }}>
                  {c.forYou}
                </p>
                <ol style={{ margin: '12px 0 0 20px', color: 'var(--ink-soft)' }}>
                  {mine.steps.map((s, i) => (
                    <li key={i} style={{ marginBottom: 10 }}>{s}</li>
                  ))}
                </ol>
              </div>
              <div className="accordion" style={{ marginTop: 16 }}>
                <details>
                  <summary>{c.otherGuide}: {other.title}</summary>
                  <div className="acc-body">
                    <ol style={{ margin: '4px 0 4px 20px' }}>
                      {other.steps.map((s, i) => (
                        <li key={i} style={{ marginBottom: 9 }}>{s}</li>
                      ))}
                    </ol>
                  </div>
                </details>
              </div>
            </>
          ) : (
            <div className="two-col">
              <div className="card">
                <h3>{c.menTitle}</h3>
                <ol style={{ margin: '12px 0 0 20px', color: 'var(--ink-soft)' }}>
                  {L(methodMen).map((s, i) => (
                    <li key={i} style={{ marginBottom: 10 }}>{s}</li>
                  ))}
                </ol>
              </div>
              <div className="card">
                <h3>{c.womenTitle}</h3>
                <ol style={{ margin: '12px 0 0 20px', color: 'var(--ink-soft)' }}>
                  {L(methodWomen).map((s, i) => (
                    <li key={i} style={{ marginBottom: 10 }}>{s}</li>
                  ))}
                </ol>
              </div>
            </div>
          )}
          <div className="callout gold">{c.methodNote}</div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <span className="eyebrow">{c.faqEyebrow}</span>
          <h2 className="section-title">{c.faqTitle}</h2>
          <p className="section-sub">{c.faqSub}</p>
          <div className="accordion">
            {purityFaqs.map((f, i) => (
              <details key={i}>
                <summary>{L(f.q)}</summary>
                <div className="acc-body">{L(f.a)}</div>
              </details>
            ))}
          </div>

          <div className="callout green" style={{ marginTop: 26 }}>
            <strong>{c.hygieneTitle}</strong>
            {c.hygiene}
          </div>
        </div>
      </section>
    </>
  )
}
