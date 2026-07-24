import PrayerTimesWidget from '../components/PrayerTimesWidget.jsx'
import { useLang } from '../i18n/LanguageContext.jsx'

const Dots = ({ f = 0, s = 0, w = 0 }) => (
  <span className="rakat-dots" aria-hidden="true">
    {Array.from({ length: s }, (_, i) => <i key={`s${i}`} className="s" />)}
    {Array.from({ length: f }, (_, i) => <i key={`f${i}`} className="f" />)}
    {Array.from({ length: w }, (_, i) => <i key={`w${i}`} className="w" />)}
  </span>
)

const prayers = [
  {
    name: { en: 'Fajr', bg: 'Фаджр' },
    ar: 'الفجر',
    window: {
      en: 'From true dawn until sunrise',
      bg: 'От истинското зазоряване до изгрева',
    },
    fard: 2,
    sunnahBefore: 2,
    sunnahAfter: 0,
    aloud: { en: 'Aloud', bg: 'На глас' },
    note: {
      en: "“The two rak'ahs of Fajr are better than the world and everything in it.” (Sahih Muslim 725). Angels of the night and day gather at this prayer (Qur'an 17:78).",
      bg: '„Двата рекята на Фаджр са по-добри от света и всичко в него.“ (Сахих Муслим 725). Ангелите на нощта и деня се събират на този намаз (Коран 17:78).',
    },
  },
  {
    name: { en: 'Dhuhr', bg: 'Зухр' },
    ar: 'الظهر',
    window: {
      en: "From the sun passing its zenith until an object's shadow equals its length",
      bg: 'От преминаването на слънцето през зенита, докато сянката на предмета се изравни с дължината му',
    },
    fard: 4,
    sunnahBefore: 4,
    sunnahAfter: 2,
    aloud: { en: 'Silent', bg: 'Тихо' },
    note: {
      en: "On Fridays, Jumu'ah (2 rak'ahs with khutbah) replaces Dhuhr for those it is obligatory upon.",
      bg: 'В петък Джума (2 рекята с хутбе) замества Зухр за онези, за които е задължителна.',
    },
  },
  {
    name: { en: 'Asr', bg: 'Аср' },
    ar: 'العصر',
    window: {
      en: 'From when a shadow equals its object until sunset (pray before the sun yellows)',
      bg: 'Откакто сянката се изравни с предмета до залеза (кланяй преди слънцето да пожълтее)',
    },
    fard: 4,
    sunnahBefore: 0,
    sunnahAfter: 0,
    aloud: { en: 'Silent', bg: 'Тихо' },
    note: {
      en: "“Whoever misses the Asr prayer, it is as if he lost his family and property.” (Sahih al-Bukhari 552). Four rak'ahs before it are recommended (Tirmidhi 430).",
      bg: '„Който изпусне намаза Аср, все едно е изгубил семейството и имота си.“ (Сахих ал-Бухари 552). Четири рекята преди него са препоръчителни (Тирмизи 430).',
    },
  },
  {
    name: { en: 'Maghrib', bg: 'Магриб' },
    ar: 'المغرب',
    window: {
      en: 'From sunset until the red twilight disappears',
      bg: 'От залеза до изчезването на червената вечерна заря',
    },
    fard: 3,
    sunnahBefore: 0,
    sunnahAfter: 2,
    aloud: { en: 'Aloud', bg: 'На глас' },
    note: {
      en: 'Prayed promptly after sunset — its window is the shortest of the five.',
      bg: 'Кланя се веднага след залеза — прозорецът му е най-краткият от петте.',
    },
  },
  {
    name: { en: 'Isha', bg: 'Иша' },
    ar: 'العشاء',
    window: {
      en: 'From the disappearance of twilight until midnight (allowed until Fajr if needed)',
      bg: 'От изчезването на зарята до полунощ (позволено до Фаджр при нужда)',
    },
    fard: 4,
    sunnahBefore: 0,
    sunnahAfter: 2,
    aloud: { en: 'Aloud', bg: 'На глас' },
    note: {
      en: "Witr (1–3 rak'ahs or more, odd) seals the night after Isha.",
      bg: 'Витр (1–3 рекята или повече, нечетен брой) запечатва нощта след Иша.',
    },
  },
]

const C = {
  en: {
    title: 'The Five Daily Prayers & Their Times',
    lead: "“Indeed, prayer has been decreed upon the believers a decree of specified times.” (Qur'an 4:103). Five appointments with your Lord, spread across the day — each with its own window.",
    eyebrow: 'The daily rhythm',
    tableTitle: 'Each prayer at a glance',
    legendA: "Dots show the rak'ahs:",
    legendS: 'sunnah before ·',
    legendF: 'fard ·',
    legendW: 'sunnah after. The 12 confirmed sunnah rak\'ahs build a house in Paradise (Sahih Muslim 728).',
    thPrayer: 'Prayer',
    thWindow: 'Time window',
    thRakahs: "Rak'ahs",
    thRecit: 'Recitation',
    thNote: 'Worth knowing',
    sunnah: 'sunnah',
    fard: 'fard',
    forbTitle: '⏳ The three forbidden times',
    forb: "Voluntary prayers are not offered: (1) from after Fajr until the sun has fully risen, (2) when the sun is at its exact zenith, and (3) from after Asr until sunset ('Uqbah ibn 'Amir — Sahih Muslim 831). Obligatory and missed prayers may still be made up.",
    extremeTitle: '🌙 What about places with extreme day lengths?',
    extreme: "In high latitudes where the sun barely sets or rises, follow your local mosque's timetable — they apply scholarly methods (nearest moderate city, or fixed intervals) endorsed by fiqh councils.",
  },
  bg: {
    title: 'Петте ежедневни намаза и техните времена',
    lead: '„Намазът е предписан за вярващите в определено време.“ (Коран 4:103). Пет срещи с твоя Господ, разпределени през деня — всяка със свой прозорец.',
    eyebrow: 'Дневният ритъм',
    tableTitle: 'Всеки намаз с един поглед',
    legendA: 'Точките показват рекятите:',
    legendS: 'сунна преди ·',
    legendF: 'фарз ·',
    legendW: 'сунна след. 12-те утвърдени сунна рекята строят дом в Рая (Сахих Муслим 728).',
    thPrayer: 'Намаз',
    thWindow: 'Времеви прозорец',
    thRakahs: 'Рекяти',
    thRecit: 'Четене',
    thNote: 'Добре е да знаеш',
    sunnah: 'сунна',
    fard: 'фарз',
    forbTitle: '⏳ Трите забранени времена',
    forb: 'Доброволни намази не се кланят: (1) след Фаджр, докато слънцето не се издигне напълно, (2) когато слънцето е точно в зенита, и (3) след Аср до залеза (Укба ибн Амир — Сахих Муслим 831). Задължителните и пропуснатите намази могат да се наваксват.',
    extremeTitle: '🌙 А местата с екстремно дълги дни?',
    extreme: 'В северните ширини, където слънцето почти не залязва или изгрява, следвай разписанието на местната джамия — те прилагат методи (най-близък умерен град или фиксирани интервали), одобрени от фикх съветите.',
  },
}

export default function PrayerTimes() {
  const { lang, L } = useLang()
  const c = C[lang]

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="hero-arabic" lang="ar">
            إِنَّ الصَّلَاةَ كَانَتْ عَلَى الْمُؤْمِنِينَ كِتَابًا مَّوْقُوتًا
          </p>
          <h1>{c.title}</h1>
          <p>{c.lead}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <PrayerTimesWidget />
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <span className="eyebrow">{c.eyebrow}</span>
          <h2 className="section-title">{c.tableTitle}</h2>
          <p className="section-sub">
            {c.legendA} <span className="rakat-dots"><i className="s" /></span>{' '}
            {c.legendS} <span className="rakat-dots"><i className="f" /></span>{' '}
            {c.legendF} <span className="rakat-dots"><i className="w" /></span>{' '}
            {c.legendW}
          </p>
          <div className="table-wrap">
            <table className="nice">
              <thead>
                <tr>
                  <th>{c.thPrayer}</th>
                  <th>{c.thWindow}</th>
                  <th>{c.thRakahs}</th>
                  <th>{c.thRecit}</th>
                  <th>{c.thNote}</th>
                </tr>
              </thead>
              <tbody>
                {prayers.map((p) => (
                  <tr key={p.ar}>
                    <td>
                      <strong>{L(p.name)}</strong> <span className="ar">{p.ar}</span>
                    </td>
                    <td>{L(p.window)}</td>
                    <td>
                      <Dots s={p.sunnahBefore} f={p.fard} w={p.sunnahAfter} />
                      <div style={{ fontSize: '0.82rem', color: 'var(--muted)' }}>
                        {p.sunnahBefore ? `${p.sunnahBefore} ${c.sunnah} + ` : ''}
                        {p.fard} {c.fard}
                        {p.sunnahAfter ? ` + ${p.sunnahAfter} ${c.sunnah}` : ''}
                      </div>
                    </td>
                    <td>{L(p.aloud)}</td>
                    <td>{L(p.note)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="callout green" style={{ marginTop: 26 }}>
            <strong>{c.forbTitle}</strong>
            {c.forb}
          </div>

          <div className="callout gold">
            <strong>{c.extremeTitle}</strong>
            {c.extreme}
          </div>
        </div>
      </section>
    </>
  )
}
