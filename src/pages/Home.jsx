import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import PrayerTimesWidget from '../components/PrayerTimesWidget.jsx'
import PoseFigure from '../components/PoseFigure.jsx'
import { useLang } from '../i18n/LanguageContext.jsx'
import { stations, usePathProgress } from '../data/path.js'
import { trackEvent } from '../lib/analytics.js'

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
  {
    en: 'Learn how to perform wudu',
    bg: 'Научи как се взима абдест',
    fr: 'Apprendre à faire les ablutions (wudu)',
    de: 'Lernen, wie man die Wudu vollzieht',
    nl: 'Leren hoe je de wudu verricht',
    tr: 'Abdest almayı öğren',
    ur: 'وضو کرنا سیکھیں',
  },
  {
    en: 'Memorise Surah Al-Fatiha',
    bg: 'Научи наизуст Сура Ал-Фатиха',
    fr: 'Mémoriser la sourate Al-Fatiha',
    de: 'Sure Al-Fatiha auswendig lernen',
    nl: 'Soerat Al-Fatiha uit je hoofd leren',
    tr: "Fatiha Suresi'ni ezberle",
    ur: 'سورۃ الفاتحہ حفظ کریں',
  },
  {
    en: 'Memorise one short surah (e.g. Al-Ikhlas)',
    bg: 'Научи една кратка сура (напр. Ал-Ихляс)',
    fr: 'Mémoriser une courte sourate (par ex. Al-Ikhlas)',
    de: 'Eine kurze Sure auswendig lernen (z. B. Al-Ikhlas)',
    nl: 'Eén korte soera uit je hoofd leren (bijv. Al-Ikhlas)',
    tr: 'Kısa bir sure ezberle (örn. İhlas Suresi)',
    ur: 'ایک مختصر سورت حفظ کریں (مثلاً سورۃ الاخلاص)',
  },
  {
    en: 'Learn the prayer positions and their order',
    bg: 'Научи положенията в намаза и реда им',
    fr: 'Apprendre les positions de la prière et leur ordre',
    de: 'Die Gebetspositionen und ihre Reihenfolge lernen',
    nl: 'De gebedshoudingen en hun volgorde leren',
    tr: 'Namaz duruşlarını ve sırasını öğren',
    ur: 'نماز کی حالتیں اور ان کی ترتیب سیکھیں',
  },
  {
    en: 'Memorise the tashahhud',
    bg: 'Научи наизуст Тешеххуда',
    fr: 'Mémoriser le tashahhud',
    de: 'Den Tashahhud auswendig lernen',
    nl: 'De tashahhud uit je hoofd leren',
    tr: 'Tahiyyatı ezberle',
    ur: 'تشہد حفظ کریں',
  },
  {
    en: 'Memorise the salawat (Ibrahimiyyah)',
    bg: 'Научи наизуст салауата (Ибрахимиййа)',
    fr: 'Mémoriser la salawat (Ibrahimiyyah)',
    de: 'Das Salawat (Ibrahimiyyah) auswendig lernen',
    nl: 'De salawat (Ibrahimiyyah) uit je hoofd leren',
    tr: 'Salavatı (İbrahimiyye) ezberle',
    ur: 'صلوٰۃ (ابراہیمیہ) حفظ کریں',
  },
  {
    en: 'Pray all five prayers in one day',
    bg: 'Изкланяй петте намаза в един ден',
    fr: 'Prier les cinq prières en une journée',
    de: 'Alle fünf Gebete an einem Tag verrichten',
    nl: 'Alle vijf gebeden op één dag verrichten',
    tr: 'Bir günde beş vakit namazın tamamını kıl',
    ur: 'ایک دن میں پانچوں نمازیں ادا کریں',
  },
  {
    en: 'Learn the adhkar said after prayer',
    bg: 'Научи азкяра след намаз',
    fr: 'Apprendre les adhkar dits après la prière',
    de: 'Die Adhkar nach dem Gebet lernen',
    nl: 'De adhkar na het gebed leren',
    tr: 'Namazdan sonraki zikirleri (ezkarı) öğren',
    ur: 'نماز کے بعد کے اذکار سیکھیں',
  },
  {
    en: "Pray the 12 sunnah rak'ahs in one day",
    bg: 'Изкланяй 12-те сунна рекята в един ден',
    fr: "Prier les 12 rak'ahs sunnah en une journée",
    de: 'Die 12 Sunnah-Rak\'ahs an einem Tag beten',
    nl: 'De 12 sunnah-rak\'ahs op één dag bidden',
    tr: 'Bir günde 12 rekat sünneti kıl',
    ur: 'ایک دن میں 12 سنت رکعتیں ادا کریں',
  },
  {
    en: 'Pray Witr before sleeping',
    bg: 'Кланяй Витр преди сън',
    fr: 'Prier le Witr avant de dormir',
    de: 'Witr vor dem Schlafen beten',
    nl: 'Witr bidden voor het slapen',
    tr: 'Uyumadan önce Vitr namazını kıl',
    ur: 'سونے سے پہلے وتر ادا کریں',
  },
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
  fr: {
    heroTitle1: 'Apprends à prier ',
    heroTitle2: ' — de ton premier takbir à la maîtrise',
    lead: "« …et accomplis la prière pour te souvenir de Moi. » (Coran 20:14). Un guide complet et gratuit fondé sur le Coran et la Sunna authentique : wudu, horaires de prière, tous les types de salah, et toutes les duas dont tu as besoin — avec vidéos, illustrations et un quiz.",
    ctaStart: "Commence à prier aujourd'hui →",
    ctaNew: 'Je suis complètement débutant(e)',
    sources:
      "Sources citées tout au long : Coran (Saheeh International) · Sahih al-Bukhari · Sahih Muslim · les recueils Sunan",
    journeyEyebrow: "Ton parcours d'apprentissage",
    journeyTitle: "Six étapes du débutant à l'expert",
    journeySub: "Suis le parcours dans l'ordre si tu es nouveau — ou passe directement à ce dont tu as besoin.",
    verse:
      "« La prière préserve de la turpitude et du blâmable ; et le rappel d'Allah est plus grand encore. »",
    verseRef: 'Coran 29:45',
    whyEyebrow: 'Pourquoi la salah ?',
    whyTitle: "Le cœur de la journée d'un musulman",
    why1t: 'Elle efface les péchés',
    why1: "« S'il y avait une rivière à ta porte et que tu t'y baignais cinq fois par jour, resterait-il de la saleté ? Telle est l'image des cinq prières — Allah efface les péchés par elles. » (Sahih al-Bukhari 528)",
    why2t: 'La première chose jugée',
    why2: "« La première des œuvres pour laquelle une personne sera jugée le Jour de la Résurrection est sa prière. Si elle est correcte, elle réussira. » (Jami` at-Tirmidhi 413)",
    why3t: 'Une conversation directe',
    why3: "Dans la salah, tu parles à Allah sans intermédiaire. En sujud, tu es au plus près de Lui — « alors multipliez les invocations. » (Sahih Muslim 482)",
    trackEyebrow: 'Suis ta progression',
    trackTitle: "Ta liste d'apprentissage",
    done: 'Machallah — tu as achevé le parcours ! Garde les prières vivantes chaque jour.',
    progress: (d, n) => `${d} sur ${n} étapes accomplies — ta progression est enregistrée sur cet appareil.`,
  },
  de: {
    heroTitle1: 'Lerne zu beten ',
    heroTitle2: ' — vom ersten Takbir bis zur Meisterschaft',
    lead: '„…und verrichte das Gebet zu Meinem Gedenken.“ (Koran 20:14). Ein vollständiger, kostenloser Leitfaden auf Grundlage des Korans und der authentischen Sunna: Wudu, Gebetszeiten, jede Art von Salah und alle Duas, die du brauchst — mit Videos, Illustrationen und einem Quiz.',
    ctaStart: 'Beginne heute zu beten →',
    ctaNew: 'Ich bin völliger Anfänger',
    sources:
      'Durchgehend zitierte Quellen: Koran (Saheeh International) · Sahih al-Bukhari · Sahih Muslim · die Sunan-Sammlungen',
    journeyEyebrow: 'Dein Lernweg',
    journeyTitle: 'Sechs Schritte vom Anfänger zum Experten',
    journeySub: 'Folge dem Weg der Reihe nach, wenn du neu bist — oder springe direkt zu dem, was du brauchst.',
    verse:
      '„Wahrlich, das Gebet hält von Schändlichkeit und Verwerflichem ab, und das Gedenken Allahs ist gewiss größer.“',
    verseRef: 'Koran 29:45',
    whyEyebrow: 'Warum Salah?',
    whyTitle: 'Das Herzstück im Tag eines Muslims',
    why1t: 'Es wäscht Sünden ab',
    why1: '„Wenn vor deiner Tür ein Fluss wäre und du dich fünfmal am Tag darin badetest, bliebe dann noch Schmutz übrig? So verhält es sich mit den fünf Gebeten — Allah tilgt damit die Sünden.“ (Sahih al-Bukhari 528)',
    why2t: 'Das Erste, worüber gerichtet wird',
    why2: '„Das Erste, wonach ein Mensch am Tag der Auferstehung zur Rechenschaft gezogen wird, ist sein Gebet. Ist es einwandfrei, hat er Erfolg.“ (Jami` at-Tirmidhi 413)',
    why3t: 'Ein direktes Gespräch',
    why3: 'Im Salah sprichst du zu Allah ohne Vermittler. Im Sujud bist du Ihm am nächsten — „so betet reichlich.“ (Sahih Muslim 482)',
    trackEyebrow: 'Verfolge deinen Fortschritt',
    trackTitle: 'Deine Lern-Checkliste',
    done: 'Maschallah — du hast den Weg vollendet! Halte die Gebete jeden Tag lebendig.',
    progress: (d, n) => `${d} von ${n} Etappen abgeschlossen — dein Fortschritt wird auf diesem Gerät gespeichert.`,
  },
  nl: {
    heroTitle1: 'Leer bidden ',
    heroTitle2: ' — van je eerste takbir tot volledige beheersing',
    lead: "„…en verricht het gebed om Mij te gedenken.” (Koran 20:14). Een complete, gratis gids gebaseerd op de Koran en de authentieke Sunnah: wudu, gebedstijden, elk type salah, en alle duas die je nodig hebt — met video's, illustraties en een quiz.",
    ctaStart: 'Begin vandaag met bidden →',
    ctaNew: 'Ik ben compleet nieuw',
    sources:
      "Overal geciteerde bronnen: Koran (Saheeh International) · Sahih al-Bukhari · Sahih Muslim · de Sunan-verzamelingen",
    journeyEyebrow: 'Jouw leertraject',
    journeyTitle: 'Zes stappen van beginner tot expert',
    journeySub: 'Volg het pad in volgorde als je nieuw bent — of ga direct naar wat je nodig hebt.',
    verse:
      '„Voorwaar, het gebed weerhoudt van gruweldaden en verwerpelijke zaken, en het gedenken van Allah is groter.”',
    verseRef: 'Koran 29:45',
    whyEyebrow: 'Waarom salah?',
    whyTitle: 'Het hart van de dag van een moslim',
    why1t: 'Het wast zonden weg',
    why1: '„Als er een rivier voor je deur was en je baadde er vijf keer per dag in, zou er dan nog vuil overblijven? Dat is het beeld van de vijf gebeden — Allah wist er zonden mee uit.” (Sahih al-Bukhari 528)',
    why2t: 'Het eerste waarover geoordeeld wordt',
    why2: '„Het eerste van iemands daden waarover hij op de Dag der Opstanding ter verantwoording wordt geroepen, is zijn gebed. Als dat in orde is, zal hij slagen.” (Jami` at-Tirmidhi 413)',
    why3t: 'Een direct gesprek',
    why3: '„In de salah spreek je tot Allah zonder tussenpersoon. In sujud ben je het dichtst bij Hem — „doe dan veel smeekbeden.” (Sahih Muslim 482)',
    trackEyebrow: 'Houd je voortgang bij',
    trackTitle: 'Jouw leerchecklist',
    done: "Masha'Allah — je hebt het traject voltooid! Houd de gebeden elke dag levend.",
    progress: (d, n) => `${d} van ${n} mijlpalen voltooid — je voortgang wordt op dit apparaat opgeslagen.`,
  },
  tr: {
    heroTitle1: 'Namaz kılmayı öğren ',
    heroTitle2: ' — ilk tekbirinden ustalığa kadar',
    lead: "\"…ve Beni anmak için namazı dosdoğru kıl.\" (Kur'an 20:14). Kur'an ve sahih Sünnet üzerine kurulu, tamamen ücretsiz bir rehber: abdest, namaz vakitleri, her türlü namaz ve ihtiyacın olan tüm dualar — videolar, çizimler ve bir testle birlikte.",
    ctaStart: 'Bugün namaz kılmaya başla →',
    ctaNew: 'Tamamen yeniyim',
    sources:
      "Boyunca alıntılanan kaynaklar: Kur'an (Saheeh International) · Sahih al-Buhari · Sahih Muslim · Sünen külliyatları",
    journeyEyebrow: 'Öğrenme yolculuğun',
    journeyTitle: 'Başlangıçtan uzmanlığa altı adım',
    journeySub: 'Yeniysen yolu sırayla takip et — ya da doğrudan ihtiyacın olan yere geç.',
    verse:
      "\"Şüphesiz namaz, hayasızlıktan ve kötülükten alıkoyar. Allah'ı anmak ise elbette en büyük (ibadet)tir.\"",
    verseRef: "Kur'an 29:45",
    whyEyebrow: 'Neden namaz?',
    whyTitle: 'Bir Müslümanın gününün kalbi',
    why1t: 'Günahları yıkar',
    why1: '"Kapınızın önünde bir nehir olsa ve günde beş kez orada yıkansanız, üzerinizde kir kalır mı? İşte beş vakit namazın misali budur — Allah onlarla günahları siler." (Sahih al-Buhari 528)',
    why2t: 'Hesabı sorulacak ilk şey',
    why2: "\"Kıyamet günü kulun hesaba çekileceği ilk ameli namazıdır. O sağlam olursa kurtulur.\" (Camiu't-Tirmizi 413)",
    why3t: 'Doğrudan bir konuşma',
    why3: "Namazda aracısız olarak Allah ile konuşursun. Secdede O'na en yakın olduğun andasın — \"o hâlde duayı çok yapın.\" (Sahih Muslim 482)",
    trackEyebrow: 'İlerlemeni takip et',
    trackTitle: 'Öğrenme kontrol listen',
    done: 'Maşallah — yolculuğu tamamladın! Namazları her gün canlı tut.',
    progress: (d, n) => `${n} kilometre taşından ${d} tanesi tamamlandı — ilerlemen bu cihazda kaydediliyor.`,
  },
  ur: {
    heroTitle1: 'نماز پڑھنا سیکھیں ',
    heroTitle2: ' — پہلی تکبیر سے مہارت تک',
    lead: '"...اور میری یاد کے لیے نماز قائم کرو۔" (قرآن 20:14)۔ قرآن اور صحیح سنت پر مبنی ایک مکمل، مفت رہنما: وضو، نماز کے اوقات، ہر قسم کی نماز، اور تمام ضروری دعائیں — ویڈیوز، تصاویر اور ایک کوئز کے ساتھ۔',
    ctaStart: 'آج ہی نماز شروع کریں →',
    ctaNew: 'میں بالکل نیا ہوں',
    sources:
      'حوالہ جات: قرآن (Saheeh International) · صحیح البخاری · صحیح مسلم · سنن کے مجموعے',
    journeyEyebrow: 'آپ کا سیکھنے کا سفر',
    journeyTitle: 'ابتدائی سے ماہر تک چھ مراحل',
    journeySub: 'اگر آپ نئے ہیں تو راستے کو ترتیب سے اپنائیں — یا براہ راست اپنی ضرورت کی طرف جائیں۔',
    verse:
      '"بے شک نماز بے حیائی اور برائی سے روکتی ہے، اور اللہ کا ذکر سب سے بڑا ہے۔"',
    verseRef: 'قرآن 29:45',
    whyEyebrow: 'نماز کیوں؟',
    whyTitle: 'مسلمان کے دن کا مرکز',
    why1t: 'یہ گناہ دھو دیتی ہے',
    why1: '"اگر تمہارے دروازے پر ایک نہر ہو اور تم دن میں پانچ بار اس میں نہاؤ، تو کیا کوئی میل باقی رہے گا؟ پانچ نمازوں کی مثال یہی ہے — اللہ ان کے ذریعے گناہ مٹا دیتا ہے۔" (صحیح البخاری 528)',
    why2t: 'سب سے پہلے جس کا حساب ہوگا',
    why2: '"قیامت کے دن انسان کے اعمال میں سب سے پہلے جس چیز کا حساب لیا جائے گا وہ اس کی نماز ہے۔ اگر وہ درست ہو تو وہ کامیاب ہو جائے گا۔" (جامع ترمذی 413)',
    why3t: 'ایک براہ راست گفتگو',
    why3: 'نماز میں آپ بغیر کسی واسطے کے اللہ سے کلام کرتے ہیں۔ سجدے میں آپ اس کے سب سے قریب ہوتے ہیں — "پس خوب دعا کرو۔" (صحیح مسلم 482)',
    trackEyebrow: 'اپنی پیش رفت دیکھیں',
    trackTitle: 'آپ کی سیکھنے کی فہرست',
    done: 'ماشاءاللہ — آپ نے یہ سفر مکمل کر لیا! ہر روز نمازوں کو زندہ رکھیں۔',
    progress: (d, n) => `${n} میں سے ${d} مراحل مکمل — آپ کی پیش رفت اس ڈیوائس پر محفوظ ہے۔`,
  },
}

function LearningChecklist() {
  const { lang, L } = useLang()
  const c = C[lang] || C.en
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

  const toggle = (i) => {
    setDone((d) => (d.includes(i) ? d.filter((x) => x !== i) : [...d, i]))
    trackEvent('checklist_toggle', { item: i, checked: !done.includes(i) })
  }

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
  const c = C[lang] || C.en
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
              <em>
                {lang === 'bg'
                  ? 'намаз'
                  : lang === 'tr'
                    ? 'Namaz'
                    : lang === 'ur'
                      ? 'نماز'
                      : 'Salah'}
              </em>
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
