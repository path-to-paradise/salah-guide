import { useLang } from '../i18n/LanguageContext.jsx'

const topics = [
  {
    icon: '🧳',
    title: {
      en: "Praying while travelling — Qasr & Jam'",
      bg: 'Намаз при пътуване — каср и джем',
    },
    body: {
      en: [
        "Shortening (qasr): on a journey, the 4-rak'ah prayers (Dhuhr, Asr, Isha) are prayed as 2. Fajr and Maghrib stay as they are. “And when you travel through the land, there is no blame upon you for shortening the prayer.” (Qur'an 4:101)",
        "Combining (jam'): a traveller may pray Dhuhr and Asr together in the time of either, and likewise Maghrib and Isha (Sahih Muslim 704).",
        "Most scholars apply this to journeys of roughly 80+ km. While you remain a traveller you may keep shortening; once settled long-term, resume the full prayer. The rawatib sunnahs (except Fajr's and Witr) are commonly dropped while travelling.",
      ],
      bg: [
        'Съкращаване (каср): при пътуване четирирекятните намази (Зухр, Аср, Иша) се кланят по 2. Фаджр и Магриб остават същите. „И когато странствате по земята, не е грях за вас да съкращавате молитвата.“ (Коран 4:101)',
        'Събиране (джем): пътникът може да кланя Зухр и Аср заедно във времето на единия от тях, също и Магриб с Иша (Сахих Муслим 704).',
        'Повечето учени прилагат това при пътувания от около 80+ км. Докато си пътник, можеш да съкращаваш; щом се установиш трайно, връщаш пълния намаз. Рауатиб сунните (освен тази на Фаджр и Витр) обичайно се изоставят при пътуване.',
      ],
    },
  },
  {
    icon: '🤕',
    title: { en: 'Praying when sick', bg: 'Намаз при болест' },
    body: {
      en: [
        '“Pray standing; if you are not able, then sitting; and if you are not able, then on your side.” (Sahih al-Bukhari 1117)',
        'Whoever cannot make ruku or sujud gestures with the head, making the sujud gesture lower than the ruku. Whoever cannot face the qibla prays as they are able.',
        'Illness never lifts the prayer itself — Allah lightens its form, not its place in your day. If wudu is harmful or impossible, tayammum takes its place.',
      ],
      bg: [
        '„Кланяй прав; ако не можеш — седнал; а ако не можеш — на страната си.“ (Сахих ал-Бухари 1117)',
        'Който не може да прави рукю или седжде, ги обозначава с глава, като седждето е по-ниско от рукюто. Който не може да се обърне към къбле, кланя както може.',
        'Болестта никога не отменя самия намаз — Аллах облекчава формата му, не мястото му в деня ти. Ако абдестът е вреден или невъзможен, тейеммумът го замества.',
      ],
    },
  },
  {
    icon: '⏰',
    title: { en: 'Missed prayers — Qada', bg: 'Пропуснати намази — каза' },
    body: {
      en: [
        '“Whoever forgets a prayer or sleeps through it, its expiation is to pray it as soon as he remembers it.” (Sahih Muslim 684)',
        'Missed by sleep or genuine forgetfulness: pray it immediately upon remembering — that is its time, and there is no sin.',
        'Missed deliberately: this is a grave matter requiring sincere taubah. The majority of scholars hold it must still be made up; begin praying on time today, and add the makeup prayers alongside voluntary repentance (see Salat at-Taubah in Types of Salah).',
      ],
      bg: [
        '„Който забрави намаз или го проспи, изкуплението му е да го кланя веднага щом си спомни.“ (Сахих Муслим 684)',
        'Пропуснат заради сън или истинска забрава: кланяй го веднага щом си спомниш — това е неговото време и няма грях.',
        'Пропуснат умишлено: това е сериозно нещо, изискващо искрена тауба. Мнозинството учени смятат, че пак трябва да се навакса; започни да кланяш навреме от днес и добавяй наваксващите намази заедно с доброволното покаяние (виж Салят ат-Тауба във „Видове намаз“).',
      ],
    },
  },
  {
    icon: '🔧',
    title: { en: 'Fixing mistakes — Sujud as-Sahw', bg: 'Поправяне на грешки — Суджуд ас-Саху' },
    body: {
      en: [
        "The prostration of forgetfulness: two extra sujuds that mend slips — forgetting the first tashahhud, adding or dropping a rak'ah by mistake, or doubting your count.",
        "If unsure how many rak'ahs you prayed, build on the number you are certain of (the smaller), complete the prayer, then prostrate twice before the salam (Sahih Muslim 571).",
        'If you added something extra and only realised after finishing, prostrate the two sujuds after the salam. Simple, merciful, and no need to repeat the whole prayer.',
      ],
      bg: [
        'Седждето на забравата: две допълнителни седждета, които поправят пропуски — забравен първи тешеххуд, добавен или изпуснат по погрешка рекят, или съмнение в броя.',
        'Ако не си сигурен колко рекята си кланял, продължи от броя, в който си сигурен (по-малкия), довърши намаза и направи две седждета преди селяма (Сахих Муслим 571).',
        'Ако си добавил нещо излишно и си разбрал чак след края, направи двете седждета след селяма. Просто, милостиво и без нужда да повтаряш целия намаз.',
      ],
    },
  },
  {
    icon: '👥',
    title: { en: 'Praying in congregation', bg: 'Намаз с джемаат' },
    body: {
      en: [
        '“Prayer in congregation is twenty-seven times superior to prayer offered alone.” (Sahih al-Bukhari 645)',
        'Rows are straight and gaps closed; the follower does exactly what the imam does and never precedes him (Bukhari 722). Say “Amin” with the imam after Al-Fatiha.',
        "Joining late? Whatever you catch with the imam counts; after his salam, stand and complete what you missed. Catching the ruku of a rak'ah counts as catching that rak'ah (per the majority).",
      ],
      bg: [
        '„Намазът с джемаат е двадесет и седем пъти по-добър от намаза насаме.“ (Сахих ал-Бухари 645)',
        'Редиците са прави и без празнини; следващият прави точно това, което прави имамът, и никога не го изпреварва (Бухари 722). Кажи „Амин“ с имама след Ал-Фатиха.',
        'Закъсня ли? Каквото хванеш с имама, се брои; след неговия селям стани и довърши пропуснатото. Хванеш ли рукюто на един рекят, той се брои за хванат (според мнозинството).',
      ],
    },
  },
  {
    icon: '🧎',
    title: { en: 'The Sutrah', bg: 'Сутрата' },
    body: {
      en: [
        'The Prophet ﷺ would pray towards a sutrah — an object (wall, pillar, bag) placed in front of the place of sujud — and instructed praying towards one (Sunan Abi Dawud 689).',
        'It marks your prayer space so people can pass beyond it without disturbing the prayer.',
      ],
      bg: [
        'Пророкът ﷺ кланял към сутра — предмет (стена, колона, чанта), поставен пред мястото на седжде — и наставлявал да се кланя към такава (Сунен Еби Дауд 689).',
        'Тя очертава пространството на намаза ти, за да могат хората да минават отвъд нея, без да смущават молитвата.',
      ],
    },
  },
  {
    icon: '💗',
    title: { en: 'Khushu — praying with presence', bg: 'Хушу — намаз с присъствие' },
    body: {
      en: [
        "“Successful indeed are the believers — those who humble themselves in their prayer.” (Qur'an 23:1–2)",
        '“to worship Allah as though you see Him; for though you do not see Him, He surely sees you.” — Ihsan is the goal (Sahih al-Bukhari 50).',
        'Practical keys: pray the moment the time enters, still every limb in every position, translate what your tongue is saying into your heart, vary your surahs, and remember this prayer could be your last.',
        'Whispers and stray thoughts happen to everyone — each time you notice, gently return. That returning is itself worship.',
      ],
      bg: [
        '„Сполуката е за вярващите, които в своята молитва са смирени.“ (Коран 23:1–2)',
        '„Да служиш на Аллах, сякаш Го виждаш; защото дори ти да не Го виждаш, Той те вижда.“ — Ихсанът е целта (Сахих ал-Бухари 50).',
        'Практични ключове: кланяй в мига, в който времето настъпи, успокой всяко крайниче във всяко положение, преведи в сърцето си онова, което езикът изрича, разнообразявай сурите и помни, че този намаз може да е последният ти.',
        'Нашепвания и разсейващи мисли спохождат всекиго — щом забележиш, кротко се върни. Самото връщане е поклонение.',
      ],
    },
  },
  {
    icon: '👩',
    title: { en: 'Notes for women', bg: 'Бележки за жените' },
    body: {
      en: [
        "The prayer — its words, movements, times and rak'ahs — is identical for women and men.",
        'Covering in prayer: everything except the face and hands, with loose, opaque clothing.',
        'During menstruation and post-natal bleeding, prayer is lifted entirely and is not made up afterwards (Sahih al-Bukhari 321) — fasting, by contrast, is made up.',
        'A woman may lead other women in prayer, standing in the middle of the row. Praying at the mosque is her right; praying at home is equally valid.',
      ],
      bg: [
        'Намазът — думите, движенията, времената и рекятите — е еднакъв за жени и мъже.',
        'Покриване в намаза: всичко освен лицето и дланите, със свободни, непрозрачни дрехи.',
        'По време на месечен цикъл и следродилно кръвотечение намазът отпада изцяло и не се наваксва после (Сахих ал-Бухари 321) — говеенето, за разлика от него, се наваксва.',
        'Жена може да води други жени в намаз, застанала в средата на редицата. Намазът в джамията е нейно право; намазът у дома е също толкова валиден.',
      ],
    },
  },
]

const C = {
  en: {
    title: 'Beyond the Basics',
    lead: "“Allah intends for you ease and does not intend for you hardship.” (Qur'an 2:185). Real life happens — travel, sickness, mistakes, missed alarms. The Sharia has a merciful answer for each.",
    fiqhTitle: '📚 A note on the schools of fiqh',
    fiqh: "Details like where to place the hands, or whether Witr is wajib or sunnah, differ between the four schools (Hanafi, Maliki, Shafi'i, Hanbali) — all tracing back to the Sunnah through valid scholarship. This site presents widely-held positions with their evidence; where your local community or school differs on a detail, follow your scholars with confidence. The differences are a mercy, not a contradiction.",
  },
  bg: {
    title: 'Отвъд основите',
    lead: '„Аллах иска за вас улеснение и не иска за вас затруднение.“ (Коран 2:185). Истинският живот се случва — пътуване, болест, грешки, проспани аларми. Шериатът има милостив отговор за всяко.',
    fiqhTitle: '📚 Бележка за школите на фикха',
    fiqh: 'Подробности като къде се поставят ръцете или дали Витр е уаджиб, или сунна, се различават между четирите школи (ханефитска, маликитска, шафиитска, ханбелитска) — всички водещи началото си от Сунната чрез валидна ученост. Този сайт представя широко възприети позиции с доказателствата им; където местната ти общност или школа се различава в подробност, следвай своите учени с увереност. Различията са милост, а не противоречие.',
  },
}

export default function Beyond() {
  const { lang, L } = useLang()
  const c = C[lang]

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="hero-arabic" lang="ar">
            يُرِيدُ اللَّهُ بِكُمُ الْيُسْرَ وَلَا يُرِيدُ بِكُمُ الْعُسْرَ
          </p>
          <h1>{c.title}</h1>
          <p>{c.lead}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="card-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
            {topics.map((topic) => (
              <div className="card" key={topic.icon}>
                <span className="card-icon">{topic.icon}</span>
                <h3>{L(topic.title)}</h3>
                {L(topic.body).map((p, i) => (
                  <p key={i} style={{ marginTop: 10 }}>{p}</p>
                ))}
              </div>
            ))}
          </div>

          <div className="callout gold" style={{ marginTop: 30 }}>
            <strong>{c.fiqhTitle}</strong>
            {c.fiqh}
          </div>
        </div>
      </section>
    </>
  )
}
