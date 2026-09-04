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
  fr: {
    title: 'Types de Salah',
    lead: "« Je n'ai créé les djinns et les hommes que pour qu'ils M'adorent. » (Coran 51:56). Au-delà des cinq prières quotidiennes s'étend tout un monde d'adoration — de la Jumu'ah obligatoire à la prière de nuit, la prière du repentir et la prière de consultation (Istikhara). Chaque prière ci-dessous inclut un guide complet étape par étape — ouvre le panneau 📋 dans sa carte.",
    wtHint: 'Tous les textes de récitation (Fatiha, tachahhud, qunut, invocation de l\'istikhara…) se trouvent sur la page Invocations et Sourates ; les positions sont illustrées sur la page Comment prier.',
    jumuahMale: '👨 Pour toi : la Jumu\'ah est obligatoire — tu es un homme adulte. Prends-la au sérieux : « Quiconque délaisse trois Jumu\'ah par négligence, Allah scelle son cœur. » (Sunan Abi Dawud 1052)',
    jumuahFemale: '🧕 Pour toi : la Jumu\'ah n\'est pas obligatoire pour les femmes — tu pries plutôt le Dhuhr (4 rak\'ahs) à son heure normale. Si tu assistes tout de même à la prière de Jumu\'ah, elle compte à la place du Dhuhr.',
  },
  de: {
    title: 'Arten des Salah',
    lead: '„Und Ich habe die Dschinn und die Menschen nur dazu geschaffen, dass sie Mir dienen.“ (Koran 51:56). Jenseits der fünf täglichen Gebete liegt eine ganze Welt der Anbetung — vom verpflichtenden Jumu\'ah bis zum Nachtgebet, dem Gebet der Reue und dem Gebet um Rechtleitung. Jedes Gebet unten enthält eine vollständige Schritt-für-Schritt-Anleitung — öffne das 📋-Feld in der jeweiligen Karte.',
    wtHint: 'Alle Rezitationstexte (Fatiha, Taschahhud, Qunut, Istikhara-Dua …) findest du auf der Seite „Bittgebete & Suren“; die Körperhaltungen sind auf „Wie man betet“ illustriert.',
    jumuahMale: '👨 Für dich: Jumu\'ah ist verpflichtend — du bist ein erwachsener Mann. Nimm es ernst: „Wer aus Nachlässigkeit drei Jumu\'ahs auslässt, dessen Herz versiegelt Allah.“ (Sunan Abi Dawud 1052)',
    jumuahFemale: '🧕 Für dich: Jumu\'ah ist für Frauen nicht verpflichtend — du betest stattdessen das Dhuhr (4 Rak\'ahs) zu seiner gewohnten Zeit. Nimmst du dennoch am Jumu\'ah-Gebet teil, zählt es anstelle des Dhuhr.',
  },
  nl: {
    title: 'Soorten Salah',
    lead: '"En Ik heb de djinn en de mens alleen geschapen om Mij te aanbidden." (Koran 51:56). Voorbij de vijf dagelijkse gebeden ligt een hele wereld van aanbidding — van de verplichte Jumu\'ah tot het nachtgebed, het gebed van berouw en het gebed om leiding. Elk gebed hieronder bevat een volledige stap-voor-stap uitleg — open het 📋-paneel in de kaart.',
    wtHint: 'Alle reciteerteksten (Fatiha, tashahhud, qunut, istikhara-smeekbede…) staan op de pagina Smeekbeden & Soera\'s; de houdingen zijn geïllustreerd op Hoe te bidden.',
    jumuahMale: '👨 Voor jou: Jumu\'ah is verplicht — jij bent een volwassen man. Neem het serieus: "Wie drie Jumu\'ahs uit onachtzaamheid overslaat, diens hart verzegelt Allah." (Sunan Abi Dawud 1052)',
    jumuahFemale: '🧕 Voor jou: Jumu\'ah is niet verplicht voor vrouwen — jij bidt in plaats daarvan Dhuhr (4 rak\'ahs) op de normale tijd. Als je toch het Jumu\'ah-gebed bijwoont, telt het in plaats van Dhuhr.',
  },
  tr: {
    title: 'Namaz Çeşitleri',
    lead: '"Ben cinleri ve insanları, ancak bana kulluk etsinler diye yarattım." (Kur\'an 51:56). Beş vakit namazın ötesinde koca bir ibadet dünyası var — farz olan Cuma namazından gece namazına, tevbe namazına ve istihare namazına kadar. Aşağıdaki her namaz, tam bir adım adım rehber içerir — kartın içindeki 📋 panelini aç.',
    wtHint: 'Tüm okuma metinleri (Fatiha, teşehhüd, kunut, istihare duası…) Dualar ve Sureler sayfasında bulunur; duruşlar Nasıl Namaz Kılınır sayfasında gösterilmiştir.',
    jumuahMale: '👨 Senin için: Cuma namazı farzdır — sen yetişkin bir erkeksin. Bunu ciddiye al: "Kim ihmalinden dolayı üç Cuma namazını terk ederse, Allah onun kalbini mühürler." (Sünen Ebu Davud 1052)',
    jumuahFemale: '🧕 Senin için: Cuma namazı kadınlar için farz değildir — bunun yerine normal vaktinde Öğle namazını (4 rekat) kılarsın. Yine de Cuma namazına katılırsan, bu Öğle namazının yerine geçer.',
  },
  ur: {
    title: 'نماز کی اقسام',
    lead: '"اور میں نے جن اور انسان کو صرف اپنی عبادت کے لیے پیدا کیا ہے۔" (قرآن 51:56)۔ پانچ روزانہ نمازوں کے علاوہ عبادت کی ایک پوری دنیا موجود ہے — فرض جمعہ سے لے کر تہجد، توبہ کی نماز، اور استخارہ کی نماز تک۔ نیچے دی گئی ہر نماز میں مکمل قدم بہ قدم رہنمائی شامل ہے — کارڈ کے اندر 📋 پینل کھولیں۔',
    wtHint: 'تمام تلاوت کے متن (فاتحہ، تشہد، قنوت، استخارہ کی دعا…) دعائیں اور سورتیں کے صفحے پر موجود ہیں؛ اوضاع "نماز کیسے پڑھیں" کے صفحے پر واضح کی گئی ہیں۔',
    jumuahMale: '👨 آپ کے لیے: جمعہ فرض ہے — آپ ایک بالغ مرد ہیں۔ اسے سنجیدگی سے لیں: "جو شخص سستی کی وجہ سے تین جمعے چھوڑ دے، اللہ اس کے دل پر مہر لگا دیتا ہے۔" (سنن ابی داؤد 1052)',
    jumuahFemale: '🧕 آپ کے لیے: جمعہ خواتین کے لیے فرض نہیں ہے — اس کے بجائے آپ اپنے معمول کے وقت پر ظہر (4 رکعتیں) پڑھتی ہیں۔ اگر آپ پھر بھی جمعہ کی نماز میں شریک ہوں، تو یہ ظہر کی جگہ شمار ہوگی۔',
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
  const c = C[lang] || C.en
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
