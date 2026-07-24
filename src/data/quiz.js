export const quizLevels = {
  Beginner: { en: 'Beginner', bg: 'Начинаещ' },
  Intermediate: { en: 'Intermediate', bg: 'Средно ниво' },
  Expert: { en: 'Expert', bg: 'Експерт' },
}

export const quizQuestions = [
  {
    level: 'Beginner',
    q: {
      en: 'How many obligatory (fard) prayers are there each day?',
      bg: 'Колко задължителни (фарз) намаза има всеки ден?',
    },
    options: {
      en: ['Three', 'Five', 'Seven', 'Two'],
      bg: ['Три', 'Пет', 'Седем', 'Два'],
    },
    answer: 1,
    explain: {
      en: "Five: Fajr, Dhuhr, Asr, Maghrib and Isha — made obligatory during the Prophet's ﷺ Night Journey (Sahih al-Bukhari 349).",
      bg: 'Пет: Фаджр, Зухр, Аср, Магриб и Иша — станали задължителни по време на Нощното пътешествие на Пророка ﷺ (Сахих ал-Бухари 349).',
    },
  },
  {
    level: 'Beginner',
    q: {
      en: "How many rak'ahs is the Fajr prayer?",
      bg: 'Колко рекята е намазът Фаджр?',
    },
    options: { en: ['2', '3', '4', '1'], bg: ['2', '3', '4', '1'] },
    answer: 0,
    explain: {
      en: "Fajr is 2 rak'ahs, recited aloud. Its sunnah is 2 more before it.",
      bg: 'Фаджр е 2 рекята, чете се на глас. Сунната му е още 2 преди него.',
    },
  },
  {
    level: 'Beginner',
    q: {
      en: "Which surah must be recited in every rak'ah?",
      bg: 'Коя сура трябва да се чете във всеки рекят?',
    },
    options: {
      en: ['Al-Ikhlas', 'Al-Fatiha', 'Ayat al-Kursi', 'An-Nas'],
      bg: ['Ал-Ихляс', 'Ал-Фатиха', 'Аят ал-Курси', 'Ан-Нас'],
    },
    answer: 1,
    explain: {
      en: '“There is no prayer for the one who does not recite the Opening of the Book.” (Sahih al-Bukhari 756)',
      bg: '„Няма намаз за онзи, който не чете Откриващата Книгата.“ (Сахих ал-Бухари 756)',
    },
  },
  {
    level: 'Beginner',
    q: {
      en: 'What do you say when bowing in ruku?',
      bg: 'Какво се казва при поклона в рукю?',
    },
    options: {
      en: [
        "Subhana Rabbiyal-A'la",
        'Rabbighfir li',
        "Subhana Rabbiyal-'Adhim",
        'Allahu Akbar only',
      ],
      bg: [
        'Субхана Раббиял-Аля',
        'Рабби-гфир ли',
        'Субхана Раббиял-Азим',
        'Само Аллаху Акбар',
      ],
    },
    answer: 2,
    explain: {
      en: "Subhana Rabbiyal-'Adhim (Glory be to my Lord, the Magnificent) — the A'la version belongs to sujud.",
      bg: 'Субхана Раббиял-Азим (Пречист е моят Господ, Превеликият) — версията с „Аля“ е за седжде.',
    },
  },
  {
    level: 'Beginner',
    q: {
      en: 'How many body parts must touch the ground in sujud?',
      bg: 'Колко части на тялото докосват земята в седжде?',
    },
    options: {
      en: ['Five', 'Six', 'Seven', 'Four'],
      bg: ['Пет', 'Шест', 'Седем', 'Четири'],
    },
    answer: 2,
    explain: {
      en: 'Seven: the forehead (with the nose), both palms, both knees, and the toes of both feet (Sahih al-Bukhari 812).',
      bg: 'Седем: челото (с носа), двете длани, двете колена и пръстите на двата крака (Сахих ал-Бухари 812).',
    },
  },
  {
    level: 'Beginner',
    q: { en: 'What breaks wudu?', bg: 'Какво разваля абдеста?' },
    options: {
      en: ['Eating bread', 'Deep sleep', 'Talking loudly', 'Touching the Quran'],
      bg: ['Ядене на хляб', 'Дълбок сън', 'Говорене на висок глас', 'Докосване на Корана'],
    },
    answer: 1,
    explain: {
      en: 'Deep sleep in which awareness is lost breaks wudu, along with anything exiting the private parts and loss of consciousness.',
      bg: 'Дълбокият сън, при който се губи съзнателност, разваля абдеста — заедно с всичко, което излиза от срамните части, и загубата на съзнание.',
    },
  },
  {
    level: 'Intermediate',
    q: {
      en: "How many rak'ahs are the 12 daily rawatib sunnahs?",
      bg: 'Как се разпределят 12-те ежедневни рекята рауатиб?',
    },
    options: {
      en: [
        '2 before Fajr, 4+2 around Dhuhr, 2 after Maghrib, 2 after Isha',
        '4 before every prayer',
        '2 after every prayer only',
        '8 at night only',
      ],
      bg: [
        '2 преди Фаджр, 4+2 около Зухр, 2 след Магриб, 2 след Иша',
        '4 преди всеки намаз',
        'Само 2 след всеки намаз',
        'Само 8 през нощта',
      ],
    },
    answer: 0,
    explain: {
      en: 'Whoever prays these twelve, a house is built for them in Paradise (Sahih Muslim 728).',
      bg: 'За онзи, който кланя тези дванадесет, се построява дом в Рая (Сахих Муслим 728).',
    },
  },
  {
    level: 'Intermediate',
    q: {
      en: 'When is the Duha prayer performed?',
      bg: 'Кога се кланя намазът Духа?',
    },
    options: {
      en: [
        'Right after Fajr',
        'From ~15–20 min after sunrise until just before Dhuhr',
        'After Maghrib',
        'At midnight',
      ],
      bg: [
        'Веднага след Фаджр',
        'От ~15–20 мин след изгрев до малко преди Зухр',
        'След Магриб',
        'В полунощ',
      ],
    },
    answer: 1,
    explain: {
      en: 'Duha fills the forenoon window, after the post-sunrise forbidden time ends and before Dhuhr approaches.',
      bg: 'Духа заема предиобедния прозорец — след като изтече забраненото време след изгрева и преди да наближи Зухр.',
    },
  },
  {
    level: 'Intermediate',
    q: {
      en: 'In which prayer is Dua al-Qunut most commonly recited?',
      bg: 'В кой намаз най-често се чете Дуа ал-Кунут?',
    },
    options: {
      en: ['Fajr sunnah', 'Witr', "Jumu'ah", 'Tarawih'],
      bg: ['Сунната на Фаджр', 'Витр', 'Джума', 'Терауих'],
    },
    answer: 1,
    explain: {
      en: 'The Prophet ﷺ taught al-Hasan the qunut dua for Witr (Sunan Abi Dawud 1425).',
      bg: 'Пророкът ﷺ научил ал-Хасан на дуата кунут за Витр (Сунен Еби Дауд 1425).',
    },
  },
  {
    level: 'Intermediate',
    q: {
      en: 'You sinned and want to repent. What is Salat al-Taubah?',
      bg: 'Съгрешил си и искаш да се покаеш. Какво е Салят ат-Тауба?',
    },
    options: {
      en: [
        "4 rak'ahs at night with long sujud",
        "Wudu done well + 2 rak'ahs + sincere istighfar",
        'A prayer only valid in Ramadan',
        'A prayer led by an imam',
      ],
      bg: [
        '4 рекята през нощта с дълго седжде',
        'Добре взет абдест + 2 рекята + искрен истигфар',
        'Намаз, валиден само през Рамазан',
        'Намаз, воден от имам',
      ],
    },
    answer: 1,
    explain: {
      en: "“There is no one who commits a sin, purifies himself well, prays two rak'ahs, then seeks Allah's forgiveness, except that He forgives him.” (Sunan Abi Dawud 1521)",
      bg: '„Няма човек, който да извърши грях, да се пречисти добре, да кланя два рекята и да помоли Аллах за прошка — без Той да му прости.“ (Сунен Еби Дауд 1521)',
    },
  },
  {
    level: 'Intermediate',
    q: {
      en: 'What is the funeral prayer (Janazah) missing that every other salah has?',
      bg: 'Какво липсва в погребалния намаз (дженазе), което всеки друг намаз има?',
    },
    options: {
      en: ['Takbir', 'Ruku and sujud', 'Intention', 'Facing the qibla'],
      bg: ['Текбир', 'Рукю и седжде', 'Намерение', 'Обръщане към къбле'],
    },
    answer: 1,
    explain: {
      en: 'Janazah is prayed entirely standing: four takbirs with recitation and dua, then salam — no bowing or prostration.',
      bg: 'Дженазето се кланя изцяло прав: четири текбира с четене и дуа, после селям — без поклон и седжде.',
    },
  },
  {
    level: 'Expert',
    q: {
      en: "You forgot how many rak'ahs you prayed. What do you do?",
      bg: 'Забравил си колко рекята си кланял. Какво правиш?',
    },
    options: {
      en: [
        'Start the prayer again from scratch',
        'Build on the number you are certain of, then perform Sujud as-Sahw',
        'End the prayer immediately',
        'Nothing — doubt is ignored entirely',
      ],
      bg: [
        'Започваш намаза отначало',
        'Продължаваш от броя, в който си сигурен, и правиш Суджуд ас-Саху',
        'Прекратяваш намаза веднага',
        'Нищо — съмнението се пренебрегва напълно',
      ],
    },
    answer: 1,
    explain: {
      en: 'Build on certainty (the smaller number), complete the prayer, and prostrate twice for forgetfulness before salam (Sahih Muslim 571).',
      bg: 'Продължи от сигурното (по-малкия брой), довърши намаза и направи две седждета за забравата преди селяма (Сахих Муслим 571).',
    },
  },
  {
    level: 'Expert',
    q: {
      en: 'A traveller may shorten (qasr) which prayers?',
      bg: 'Пътникът може да съкращава (каср) кои намази?',
    },
    options: {
      en: [
        "All five to 2 rak'ahs",
        'Fajr and Maghrib only',
        'Dhuhr, Asr and Isha from 4 to 2',
        'None — shortening is only for illness',
      ],
      bg: [
        'Всичките пет до 2 рекята',
        'Само Фаджр и Магриб',
        'Зухр, Аср и Иша от 4 на 2',
        'Никои — съкращаването е само при болест',
      ],
    },
    answer: 2,
    explain: {
      en: "The 4-rak'ah prayers become 2 while travelling (Qur'an 4:101). Fajr and Maghrib are never shortened.",
      bg: 'Четирирекятните намази стават 2 по време на пътуване (Коран 4:101). Фаджр и Магриб никога не се съкращават.',
    },
  },
  {
    level: 'Expert',
    q: {
      en: 'Which of these times is prayer forbidden (for voluntary prayers)?',
      bg: 'В кое от тези времена е забранен (доброволният) намаз?',
    },
    options: {
      en: [
        'While the sun is rising',
        'Right after entering a mosque',
        'Between Maghrib and Isha',
        "Friday before Jumu'ah",
      ],
      bg: [
        'Докато слънцето изгрява',
        'Веднага след влизане в джамия',
        'Между Магриб и Иша',
        'В петък преди Джума',
      ],
    },
    answer: 0,
    explain: {
      en: "Voluntary prayer is forbidden at sunrise, at the sun's zenith, and at sunset (Sahih Muslim 831), and after Fajr/Asr until those windows pass.",
      bg: 'Доброволният намаз е забранен при изгрев, при зенита на слънцето и при залез (Сахих Муслим 831), както и след Фаджр/Аср, докато тези времена не отминат.',
    },
  },
  {
    level: 'Expert',
    q: {
      en: 'In Istikhara, how does the "answer" come?',
      bg: 'При истихара как идва „отговорът“?',
    },
    options: {
      en: [
        'Always through a dream',
        'A voice or vision must be seen',
        'Through facilitation of one path and the heart settling',
        'By flipping the Quran open randomly',
      ],
      bg: [
        'Винаги чрез сън',
        'Трябва да се чуе глас или да се види видение',
        'Чрез улесняване на единия път и успокояване на сърцето',
        'Чрез отваряне на Корана наслуки',
      ],
    },
    answer: 2,
    explain: {
      en: 'No dream is required. You proceed with your matter, and Allah either facilitates it or turns it away, as the dua itself asks (Sahih al-Bukhari 1166).',
      bg: 'Не се изисква сън. Продължаваш с въпроса си и Аллах или го улеснява, или го отклонява — точно както моли самата дуа (Сахих ал-Бухари 1166).',
    },
  },
]
