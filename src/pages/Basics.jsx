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
  fr: {
    title: 'Avant de prier',
    lead: "« Ô vous qui croyez ! Quand vous vous levez pour la prière, lavez vos visages et vos avant-bras jusqu'aux coudes, passez les mains mouillées sur vos têtes et lavez vos pieds jusqu'aux chevilles… » (Coran 5:6). La prière commence par la pureté — voici tout ce qui doit être en place avant ton premier takbir.",
    condEyebrow: 'Étape zéro',
    condTitle: "Les six conditions d'une prière valide",
    condSub: 'Les savants résument ainsi les prérequis de la salah — vérifie les six et ta prière reposera sur un fondement solide.',
    wuduEyebrow: 'Purification',
    wuduTitle: 'Wudu — les ablutions, étape par étape',
    wuduSub: "Tel que décrit dans le wudu du Prophète ﷺ rapporté par 'Uthman ibn 'Affan (Sahih al-Bukhari 164, Sahih Muslim 226). Lave chaque partie dans l'ordre, sans longues pauses entre elles.",
    thStep: 'Étape',
    thHow: 'Comment',
    thTimes: 'Fois',
    breaks: "Qu'est-ce qui annule le wudu ?",
    breaksTail: "Si l'un de ces cas survient, refais simplement le wudu avant la prière suivante.",
    ghuslTitle: '🚿 Ghusl — le bain complet',
    ghuslReq: 'Obligatoire après :',
    tayTitle: "🏜️ Tayammum — en l'absence d'eau",
    sealEyebrow: 'Pour conclure',
    sealTitle: 'La dua après le wudu',
    purityTitle: "🚿 Avant le wudu vient l'istinja",
    purity: "Le wudu n'est valide que sur un corps nettoyé après être allé aux toilettes. Comment se nettoyer correctement à l'eau, que faire des gouttes d'urine, des doutes, des serviettes et plus encore — nous répondons à tout franchement sur la page dédiée :",
    purityLink: 'Propreté et pureté — le guide complet →',
  },
  de: {
    title: 'Vor dem Gebet',
    lead: '„O ihr, die ihr glaubt! Wenn ihr euch zum Gebet erhebt, dann wascht euer Gesicht und eure Hände bis zu den Ellbogen, streicht über euren Kopf und wascht eure Füße bis zu den Knöcheln…“ (Koran 5:6). Das Gebet beginnt mit Reinheit — hier ist alles, was vor deinem ersten Takbir gegeben sein muss.',
    condEyebrow: 'Schritt null',
    condTitle: 'Die sechs Bedingungen eines gültigen Gebets',
    condSub: 'Gelehrte fassen die Voraussetzungen des Salah so zusammen — prüfe alle sechs, und dein Gebet steht auf festem Grund.',
    wuduEyebrow: 'Reinigung',
    wuduTitle: 'Wudu — die Waschung, Schritt für Schritt',
    wuduSub: "Wie im Wudu des Propheten ﷺ beschrieben, überliefert von 'Uthman ibn 'Affan (Sahih al-Bukhari 164, Sahih Muslim 226). Wasche jeden Teil der Reihe nach, ohne lange Pausen dazwischen.",
    thStep: 'Schritt',
    thHow: 'Wie',
    thTimes: 'Male',
    breaks: 'Was bricht das Wudu?',
    breaksTail: 'Tritt eines davon ein, wiederhole einfach das Wudu vor dem nächsten Gebet.',
    ghuslTitle: '🚿 Ghusl — das vollständige Bad',
    ghuslReq: 'Erforderlich nach:',
    tayTitle: '🏜️ Tayammum — wenn kein Wasser vorhanden ist',
    sealEyebrow: 'Zum Abschluss',
    sealTitle: 'Die Dua nach dem Wudu',
    purityTitle: '🚿 Vor dem Wudu kommt die Istinja',
    purity: 'Das Wudu ist nur an einem Körper gültig, der nach der Toilette gereinigt wurde. Wie man sich richtig mit Wasser reinigt, was bei Urintropfen, Zweifeln, Handtüchern und mehr zu tun ist — wir beantworten alles offen auf der eigenen Seite:',
    purityLink: 'Reinheit & Sauberkeit — der vollständige Leitfaden →',
  },
  nl: {
    title: 'Voor je bidt',
    lead: '„O jullie die geloven, wanneer jullie opstaan voor het gebed, was dan jullie gezichten en jullie armen tot de ellebogen, wrijf over jullie hoofden en was jullie voeten tot de enkels…” (Koran 5:6). Het gebed begint met reinheid — hier is alles wat op orde moet zijn vóór je eerste takbir.',
    condEyebrow: 'Stap nul',
    condTitle: 'De zes voorwaarden voor een geldig gebed',
    condSub: 'Geleerden vatten de vereisten van de salah zo samen — controleer alle zes en je gebed staat op een stevige basis.',
    wuduEyebrow: 'Reiniging',
    wuduTitle: 'Wudu — de rituele wassing, stap voor stap',
    wuduSub: "Zoals beschreven in de wudu van de Profeet ﷺ, overgeleverd door 'Uthman ibn 'Affan (Sahih al-Bukhari 164, Sahih Muslim 226). Was elk deel op volgorde, zonder lange pauzes ertussen.",
    thStep: 'Stap',
    thHow: 'Hoe',
    thTimes: 'Keer',
    breaks: 'Wat breekt de wudu?',
    breaksTail: 'Als een van deze zich voordoet, herhaal dan gewoon de wudu vóór het volgende gebed.',
    ghuslTitle: '🚿 Ghusl — het volledige bad',
    ghuslReq: 'Verplicht na:',
    tayTitle: '🏜️ Tayammum — wanneer er geen water is',
    sealEyebrow: 'Sluit af',
    sealTitle: 'De dua na de wudu',
    purityTitle: '🚿 Vóór de wudu komt de istinja',
    purity: 'Wudu is alleen geldig op een lichaam dat na het toilet is gereinigd. Hoe je jezelf goed met water reinigt, wat te doen bij urinedruppels, twijfels, handdoeken en meer — we beantwoorden het allemaal openhartig op de speciale pagina:',
    purityLink: 'Reinheid & hygiëne — de complete gids →',
  },
  tr: {
    title: 'Namazdan Önce',
    lead: '"Ey iman edenler! Namaza kalktığınız zaman yüzlerinizi ve dirseklere kadar ellerinizi yıkayın, başlarınızı meshedin ve topuklara kadar ayaklarınızı yıkayın…" (Kur\'an 5:6). Namaz temizlikle başlar — işte ilk tekbirinden önce yerine gelmesi gereken her şey.',
    condEyebrow: 'Sıfırıncı adım',
    condTitle: 'Geçerli bir namazın altı şartı',
    condSub: 'Âlimler namazın ön şartlarını şöyle özetler — altısını da kontrol et, namazın sağlam bir zemine otursun.',
    wuduEyebrow: 'Temizlenme',
    wuduTitle: 'Abdest — adım adım',
    wuduSub: "Peygamber ﷺ'in Osman ibn Affan tarafından rivayet edilen abdestinde tarif edildiği gibi (Sahih al-Buhari 164, Sahih Muslim 226). Her bölgeyi sırayla, aralarında uzun duraklamalar olmadan yıka.",
    thStep: 'Adım',
    thHow: 'Nasıl',
    thTimes: 'Kaç kez',
    breaks: 'Abdesti ne bozar?',
    breaksTail: 'Bunlardan biri gerçekleşirse, bir sonraki namazdan önce sadece abdesti tazele.',
    ghuslTitle: '🚿 Gusül — tam yıkanma',
    ghuslReq: 'Şunlardan sonra gereklidir:',
    tayTitle: '🏜️ Teyemmüm — su olmadığında',
    sealEyebrow: 'Tamamla',
    sealTitle: 'Abdestten sonraki dua',
    purityTitle: '🚿 Abdestten önce istinca gelir',
    purity: 'Abdest, ancak tuvaletten sonra temizlenmiş bir bedende geçerlidir. Suyla doğru temizlenme, idrar damlaları, şüpheler, havlular ve daha fazlası hakkında ne yapılacağını — hepsini özel sayfada açıkça cevaplıyoruz:',
    purityLink: 'Temizlik ve Paklik — eksiksiz rehber →',
  },
  ur: {
    title: 'نماز سے پہلے',
    lead: '"اے ایمان والو! جب تم نماز کے لیے اٹھو تو اپنے چہروں اور کہنیوں تک اپنے ہاتھوں کو دھو لو، اور اپنے سروں کا مسح کرو اور اپنے پاؤں ٹخنوں تک دھو لو…" (قرآن 5:6)۔ نماز پاکیزگی سے شروع ہوتی ہے — یہاں وہ سب کچھ ہے جو آپ کی پہلی تکبیر سے پہلے ہونا چاہیے۔',
    condEyebrow: 'ابتدائی مرحلہ',
    condTitle: 'صحیح نماز کی چھ شرطیں',
    condSub: 'علماء نماز کی شرائط کا خلاصہ یوں بیان کرتے ہیں — چھ کی چھ کو جانچ لیں تو آپ کی نماز مضبوط بنیاد پر کھڑی ہوگی۔',
    wuduEyebrow: 'طہارت',
    wuduTitle: 'وضو — قدم بہ قدم',
    wuduSub: 'جیسا کہ نبی ﷺ کے وضو میں بیان ہوا ہے، جو عثمان بن عفان رضی اللہ عنہ سے مروی ہے (صحیح البخاری 164، صحیح مسلم 226)۔ ہر عضو کو ترتیب سے دھوئیں، بغیر لمبے وقفے کے۔',
    thStep: 'قدم',
    thHow: 'کیسے',
    thTimes: 'دفعہ',
    breaks: 'وضو کس چیز سے ٹوٹتا ہے؟',
    breaksTail: 'اگر ان میں سے کوئی چیز پیش آئے تو اگلی نماز سے پہلے صرف وضو دہرا لیں۔',
    ghuslTitle: '🚿 غسل — مکمل نہانا',
    ghuslReq: 'ان کے بعد لازم ہے:',
    tayTitle: '🏜️ تیمم — جب پانی میسر نہ ہو',
    sealEyebrow: 'اختتام',
    sealTitle: 'وضو کے بعد کی دعا',
    purityTitle: '🚿 وضو سے پہلے استنجا آتا ہے',
    purity: 'وضو صرف اس جسم پر درست ہے جو بیت الخلا کے بعد صاف کیا گیا ہو۔ پانی سے صحیح طریقے سے صفائی کیسے کی جائے، پیشاب کے قطروں، شکوک، تولیوں اور مزید کے بارے میں کیا کیا جائے — ہم اس مخصوص صفحے پر ہر بات کھل کر بتاتے ہیں:',
    purityLink: 'پاکیزگی اور طہارت — مکمل رہنما →',
  },
}

export default function Basics() {
  const { lang, L, t } = useLang()
  const { gender } = useGender()
  const c = C[lang] || C.en

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
