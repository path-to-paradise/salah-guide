// Wudu follows Qur'an 5:6 and the description of the Prophet's ﷺ wudu
// in Sahih al-Bukhari 164 and Sahih Muslim 226 (narrated by 'Uthman ibn 'Affan).

export const wuduSteps = [
  {
    title: { en: 'Intention & Bismillah', bg: 'Намерение и Бисмиллях' },
    detail: {
      en: 'Intend in your heart that you are purifying yourself for prayer, and say “Bismillah” (In the name of Allah).',
      bg: 'Реши в сърцето си, че се пречистваш за намаз, и кажи „Бисмиллях“ (В името на Аллах).',
    },
    times: '—',
  },
  {
    title: { en: 'Wash the hands', bg: 'Измий ръцете (китките)' },
    detail: {
      en: 'Wash both hands up to the wrists, starting with the right, between the fingers too.',
      bg: 'Измий двете ръце до китките, като започнеш с дясната, включително между пръстите.',
    },
    times: '×3',
  },
  {
    title: { en: 'Rinse the mouth', bg: 'Изплакни устата' },
    detail: {
      en: 'Take water into the mouth, swirl it, and spit it out.',
      bg: 'Вземи вода в устата, разклати я и я изплюй.',
    },
    times: '×3',
  },
  {
    title: { en: 'Rinse the nose', bg: 'Изплакни носа' },
    detail: {
      en: 'Sniff water gently into the nostrils and blow it out with the left hand.',
      bg: 'Внимателно поеми вода в ноздрите и я издухай с лявата ръка.',
    },
    times: '×3',
  },
  {
    title: { en: 'Wash the face', bg: 'Измий лицето' },
    detail: {
      en: 'Wash the whole face — from the hairline to the chin, and ear to ear. A man with a thick beard runs wet fingers through it.',
      bg: 'Измий цялото лице — от линията на косата до брадичката и от ухо до ухо. Мъж с гъста брада прекарва мокри пръсти през нея.',
    },
    times: '×3',
  },
  {
    title: { en: 'Wash the arms', bg: 'Измий ръцете до лактите' },
    detail: {
      en: 'Wash the right arm from fingertips up to and including the elbow, then the left.',
      bg: 'Измий дясната ръка от върха на пръстите до лакътя включително, после лявата.',
    },
    times: '×3',
  },
  {
    title: { en: 'Wipe the head & ears', bg: 'Обърши главата и ушите (месх)' },
    detail: {
      en: 'With wet hands, wipe from the front of the head to the back and return, then wipe the inside of the ears with the index fingers and the outside with the thumbs.',
      bg: 'С мокри ръце обърши главата отпред назад и обратно, после избърши вътрешността на ушите с показалците, а външната част — с палците.',
    },
    times: '×1',
  },
  {
    title: { en: 'Wash the feet', bg: 'Измий краката' },
    detail: {
      en: 'Wash the right foot up to and including the ankle, between the toes, then the left. Take special care of the heels.',
      bg: 'Измий десния крак до глезена включително, между пръстите, после левия. Внимавай особено за петите.',
    },
    times: '×3',
  },
  {
    title: { en: 'The dua after wudu', bg: 'Дуата след абдест' },
    detail: {
      en: "Testify: “Ash-hadu an la ilaha illallahu wahdahu la sharika lah, wa ash-hadu anna Muhammadan 'abduhu wa rasuluh” — the eight gates of Paradise are opened for the one who says it (Sahih Muslim 234).",
      bg: 'Засвидетелствай: „Ешхеду ан ля иляха илляллаху уахдаху ля шарика лях, уа ешхеду анна Мухаммадан абдуху уа расулюх“ — за онзи, който я каже, се отварят осемте порти на Рая (Сахих Муслим 234).',
    },
    times: '—',
  },
]

export const wuduNullifiers = {
  en: [
    'Anything exiting the private parts (urine, stool, wind)',
    'Deep sleep in which awareness is lost',
    'Loss of consciousness (fainting, intoxication)',
    'Touching the private parts directly with the hand (per many scholars)',
    'Eating camel meat (per the Hanbali school — Sahih Muslim 360)',
  ],
  bg: [
    'Всичко, което излиза от срамните части (урина, изпражнения, газове)',
    'Дълбок сън, при който се губи съзнателност',
    'Загуба на съзнание (припадък, опиянение)',
    'Директно докосване на срамните части с ръка (според много учени)',
    'Ядене на камилско месо (според ханбелитската школа — Сахих Муслим 360)',
  ],
}

export const salahConditions = [
  {
    title: { en: 'Purity (Taharah)', bg: 'Чистота (Тахарат)' },
    detail: {
      en: "Be in a state of wudu. After major impurity (janabah), menstruation or post-natal bleeding, a full bath (ghusl) is required first. If water cannot be used, tayammum (dry ablution with clean earth) replaces it — Qur'an 4:43.",
      bg: 'Бъди в състояние на абдест. След голямо осквернение (джанаба), месечен цикъл или следродилно кръвотечение първо е нужно пълно къпане (гусул). Ако водата не може да се използва, тейеммум (сухо очистване с чиста пръст) я замества — Коран 4:43.',
    },
  },
  {
    title: {
      en: 'Clean body, clothes & place',
      bg: 'Чисто тяло, дрехи и място',
    },
    detail: {
      en: 'Your body, clothing and the spot where you pray must be free of physical impurity (najasah). A prayer mat is common but not required.',
      bg: 'Тялото, дрехите и мястото, на което се кланяш, трябва да са чисти от нечистотия (наджаса). Молитвеното килимче е обичайно, но не е задължително.',
    },
  },
  {
    title: { en: 'Covering the awrah', bg: 'Покриване на аурата' },
    detail: {
      en: 'Men: at minimum from navel to knees (shoulders should also be covered when possible). Women: everything except the face and hands, in loose, non-transparent clothing.',
      bg: 'Мъже: минимум от пъпа до коленете (по възможност покрити и рамене). Жени: всичко освен лицето и дланите, със свободни, непрозрачни дрехи.',
    },
    detailMale: {
      en: 'For you as a man: cover at minimum from the navel to the knees, and cover the shoulders too when you are able — “None of you should pray in a single garment with nothing over his shoulder.” (Sahih al-Bukhari 359). Loose, clean clothing that stays in place through ruku and sujud.',
      bg: 'За теб като мъж: покрий минимум от пъпа до коленете, а по възможност и раменете — „Никой от вас да не кланя в една дреха, без нищо върху рамото си.“ (Сахих ал-Бухари 359). Свободно, чисто облекло, което стои на място при рукю и седжде.',
    },
    detailFemale: {
      en: 'For you as a woman: cover everything except the face and the hands, in loose, non-transparent clothing — including the hair, neck and feet per the majority. A khimar (headcover) and a long garment or prayer dress is the simplest way. “Allah does not accept the prayer of a woman who has reached puberty except with a headcover.” (Sunan Abi Dawud 641)',
      bg: 'За теб като жена: покрий всичко освен лицето и дланите със свободно, непрозрачно облекло — включително косата, шията и стъпалата според мнозинството. Химар (забрадка) и дълга дреха или молитвена рокля е най-лесният начин. „Аллах не приема намаза на жена, достигнала зрялост, без покривало на главата.“ (Сунен Еби Дауд 641)',
    },
  },
  {
    title: { en: 'Facing the Qibla', bg: 'Обръщане към Къбле' },
    detail: {
      en: "Face the direction of the Ka'bah in Makkah — Qur'an 2:144. Any prayer-times app or compass will show your local qibla direction. If you genuinely cannot determine it, pray in your best judgement.",
      bg: 'Обърни се към Кааба в Мека — Коран 2:144. Всяко приложение за намаз или компас ще ти покаже посоката на къбле. Ако наистина не можеш да я определиш, кланяй по най-доброто си преценяване.',
    },
  },
  {
    title: { en: 'The time has entered', bg: 'Времето е настъпило' },
    detail: {
      en: 'Each prayer is valid only in its window — “Indeed, prayer has been decreed upon the believers a decree of specified times.” (Qur\'an 4:103)',
      bg: 'Всеки намаз е валиден само в своя времеви прозорец — „Намазът е предписан за вярващите в определено време.“ (Коран 4:103)',
    },
  },
  {
    title: { en: 'Intention (Niyyah)', bg: 'Намерение (нийет)' },
    detail: {
      en: 'Know in your heart which prayer you are about to perform. It is not uttered aloud.',
      bg: 'Знай в сърцето си кой намаз ще кланяш. Не се изговаря на глас.',
    },
  },
]

export const ghusl = {
  requiredFor: {
    en: [
      'Major ritual impurity (janabah) — after marital relations or ejaculation',
      'At the end of menstruation (hayd)',
      'At the end of post-natal bleeding (nifas)',
    ],
    bg: [
      'Голямо осквернение (джанаба) — след съпружеска близост или семеизпразване',
      'В края на месечния цикъл (хайд)',
      'В края на следродилното кръвотечение (нифас)',
    ],
  },
  how: {
    en: [
      'Make the intention to purify yourself.',
      'Say Bismillah and wash the hands three times.',
      'Wash the private parts, then perform a complete wudu.',
      'Pour water over the head three times, massaging it to the roots of the hair.',
      'Wash the entire body, starting with the right side, ensuring no part stays dry.',
    ],
    bg: [
      'Направи намерение да се пречистиш.',
      'Кажи Бисмиллях и измий ръцете три пъти.',
      'Измий срамните части, после направи пълен абдест.',
      'Излей вода върху главата три пъти, като я втриеш до корените на косата.',
      'Измий цялото тяло, като започнеш с дясната страна и не оставиш сухо място.',
    ],
  },
  source: {
    en: 'Based on Sahih al-Bukhari 248 (the ghusl of the Prophet ﷺ described by Aisha)',
    bg: 'По Сахих ал-Бухари 248 (гусулът на Пророка ﷺ, описан от Аиша)',
  },
}

export const tayammum = {
  when: {
    en: 'When water is unavailable, or using it would harm you (illness, extreme cold).',
    bg: 'Когато няма вода или използването ѝ би ти навредило (болест, силен студ).',
  },
  how: {
    en: [
      'Make the intention, say Bismillah.',
      'Strike clean earth, sand or dust lightly with both palms.',
      'Wipe your face with them once.',
      'Wipe the back of the right hand with the left palm and vice-versa.',
    ],
    bg: [
      'Направи намерение и кажи Бисмиллях.',
      'Удари леко с двете длани по чиста пръст, пясък или прах.',
      'Обърши с тях лицето си веднъж.',
      'Обърши горната част на дясната ръка с лявата длан и обратно.',
    ],
  },
  source: {
    en: "Qur'an 5:6; Sahih al-Bukhari 338",
    bg: 'Коран 5:6; Сахих ал-Бухари 338',
  },
}
