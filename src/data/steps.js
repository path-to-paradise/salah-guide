// The step-by-step guide follows the Prophet's ﷺ instruction:
// “Pray as you have seen me praying.” (Sahih al-Bukhari 631)
// points is { en: [...], bg: [...] } — L() picks the active language.

export const praySteps = [
  {
    id: 'niyyah',
    pose: 'standing',
    poseName: { en: 'Standing (Qiyam)', bg: 'Стоеж (Киям)' },
    poseArabic: 'النِّيَّة',
    title: { en: 'Make your intention (Niyyah)', bg: 'Направи намерение (нийет)' },
    points: {
      en: [
        "Stand facing the Qibla (the direction of the Ka'bah in Makkah).",
        'Intend in your heart which prayer you are praying (e.g. “the fard of Dhuhr”).',
        'The intention is in the heart — it is not spoken aloud.',
      ],
      bg: [
        'Застани с лице към Къбле (посоката на Кааба в Мека).',
        'Реши в сърцето си кой намаз ще кланяш (напр. „фарзът на Зухр“).',
        'Намерението е в сърцето — не се изговаря на глас.',
      ],
    },
    say: null,
    mistake: {
      en: 'Reciting a spoken formula for the niyyah is not required — the Prophet ﷺ and his companions did not do it. A firm intention in the heart is enough.',
      bg: 'Изговарянето на формула за нийета не е задължително — Пророкът ﷺ и сподвижниците му не са го правили. Твърдото намерение в сърцето е достатъчно.',
    },
  },
  {
    id: 'takbir',
    pose: 'takbir',
    poseName: { en: 'Opening Takbir', bg: 'Встъпителен текбир' },
    poseArabic: 'تَكْبِيرَةُ الإِحْرَام',
    title: {
      en: 'Takbirat al-Ihram — enter the prayer',
      bg: 'Текбирату л-ихрам — влизане в намаза',
    },
    points: {
      en: [
        'Raise both hands to shoulder or earlobe level, palms facing forward.',
        'Say “Allahu Akbar”. From this moment you are in prayer: no talking, eating, or unnecessary movement.',
        'Then place your right hand over your left on your chest.',
      ],
      bg: [
        'Вдигни двете ръце до раменете или ушите, с длани напред.',
        'Кажи „Аллаху Акбар“. От този момент си в намаз: без говорене, ядене и излишни движения.',
        'После постави дясната ръка върху лявата на гърдите.',
      ],
    },
    say: {
      arabic: 'اللَّهُ أَكْبَرُ',
      translit: { en: 'Allahu Akbar', bg: 'Аллаху Акбар' },
      meaning: { en: 'Allah is the Greatest.', bg: 'Аллах е Превелик.' },
    },
    mistake: {
      en: 'Keep your eyes on the place of prostration — not up or around the room.',
      bg: 'Дръж погледа си към мястото на седжде — не нагоре и не наоколо.',
    },
  },
  {
    id: 'qiyam',
    pose: 'qiyam',
    poseName: { en: 'Standing recitation', bg: 'Стоеж с четене' },
    poseArabic: 'الْقِيَام',
    title: {
      en: 'Recite: opening dua, Al-Fatiha, then a surah',
      bg: 'Чети: встъпителната дуа, Ал-Фатиха, после сура',
    },
    points: {
      en: [
        "Quietly recite the opening supplication (first rak'ah only), then the ta'awwudh and basmala.",
        'Recite Surah Al-Fatiha — it is a pillar; the prayer is invalid without it. Say “Amin” at the end.',
        "In the first two rak'ahs, recite any other surah or verses after Al-Fatiha (e.g. Al-Ikhlas).",
        "Fajr, Maghrib and Isha: the imam recites aloud in the first two rak'ahs. Dhuhr and Asr are silent.",
      ],
      bg: [
        'Тихо прочети встъпителната дуа (само в първия рекят), после тааууз и бесмеле.',
        'Прочети Сура Ал-Фатиха — тя е стълб; намазът е невалиден без нея. Кажи „Амин“ накрая.',
        'В първите два рекята прочети след Ал-Фатиха още една сура или айети (напр. Ал-Ихляс).',
        'Фаджр, Магриб и Иша: имамът чете на глас в първите два рекята. Зухр и Аср са тихи.',
      ],
    },
    say: {
      arabic: 'الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ …',
      translit: {
        en: "Al-hamdu lillahi Rabbil-'alamin…",
        bg: 'Алхамду лилляхи Раббил-алемин…',
      },
      meaning: {
        en: 'Surah Al-Fatiha — see the Duas & Surahs page for the full text.',
        bg: 'Сура Ал-Фатиха — пълният текст е на страницата „Дуи и сури“.',
      },
    },
    mistake: {
      en: 'Rushing Al-Fatiha. The Prophet ﷺ said there is no prayer without it (Bukhari 756) — recite it slowly and clearly.',
      bg: 'Бързането с Ал-Фатиха. Пророкът ﷺ е казал, че няма намаз без нея (Бухари 756) — чети я бавно и ясно.',
    },
  },
  {
    id: 'ruku',
    pose: 'ruku',
    poseName: { en: 'Bowing', bg: 'Поклон' },
    poseArabic: 'الرُّكُوع',
    title: {
      en: 'Ruku — bow before your Lord',
      bg: 'Рукю — поклони се пред своя Господ',
    },
    points: {
      en: [
        'Say “Allahu Akbar” and bow, raising your hands first as in the opening takbir.',
        'Grip your knees with your hands, keep your back flat and level, head in line with your back.',
        'Say the tasbih of ruku three times, calmly.',
      ],
      bg: [
        'Кажи „Аллаху Акбар“ и се поклони, като първо вдигнеш ръце както при встъпителния текбир.',
        'Хвани коленете с ръце, дръж гърба равен, а главата — в една линия с гърба.',
        'Кажи тесбиха на рукю три пъти, спокойно.',
      ],
    },
    say: {
      arabic: 'سُبْحَانَ رَبِّيَ الْعَظِيمِ',
      translit: {
        en: "Subhana Rabbiyal-'Adhim (×3)",
        bg: 'Субхана Раббиял-Азим (×3)',
      },
      meaning: {
        en: 'Glory be to my Lord, the Magnificent.',
        bg: 'Пречист е моят Господ, Превеликият.',
      },
    },
    mistake: {
      en: 'Pecking — bowing for a split second. The Prophet ﷺ ordered a man who prayed too fast to repeat his prayer “until you are at ease” in every position (Bukhari 757).',
      bg: '„Кълване“ — поклон за части от секундата. Пророкът ﷺ наредил на човек, който се молел твърде бързо, да повтори намаза си, „докато се успокоиш“ във всяко положение (Бухари 757).',
    },
  },
  {
    id: 'itidal',
    pose: 'standing',
    poseName: { en: 'Standing upright', bg: 'Изправен стоеж' },
    poseArabic: 'الاِعْتِدَال',
    title: {
      en: "I'tidal — rise and stand fully",
      bg: 'Итидал — изправи се напълно',
    },
    points: {
      en: [
        "Rise saying “Sami' Allahu liman hamidah”, raising your hands.",
        'When fully upright, say “Rabbana wa lakal-hamd”.',
        'Stand completely still for a moment — every bone should return to its place.',
      ],
      bg: [
        'Изправи се, казвайки „Семиаллаху лимен хамидех“ и вдигайки ръце.',
        'Когато си напълно изправен, кажи „Раббана уа лякал-хамд“.',
        'Застани напълно неподвижно за момент — всяка кост да се върне на мястото си.',
      ],
    },
    say: {
      arabic: 'سَمِعَ اللَّهُ لِمَنْ حَمِدَهُ، رَبَّنَا وَلَكَ الْحَمْدُ',
      translit: {
        en: "Sami' Allahu liman hamidah, Rabbana wa lakal-hamd",
        bg: 'Семиаллаху лимен хамидех, Раббана уа лякал-хамд',
      },
      meaning: {
        en: 'Allah hears the one who praises Him. Our Lord, to You belongs all praise.',
        bg: 'Аллах чува онзи, който Го възхвалява. Господарю наш, Твоя е всяката възхвала.',
      },
    },
    mistake: {
      en: 'Do not fall into sujud before standing completely straight and still.',
      bg: 'Не падай в седжде, преди да си се изправил напълно и да си застанал неподвижно.',
    },
  },
  {
    id: 'sujud1',
    pose: 'sujud',
    poseName: { en: 'Prostration', bg: 'Седжде' },
    poseArabic: 'السُّجُود',
    title: {
      en: 'Sujud — the closest you are to Allah',
      bg: 'Седжде — най-близо до Аллах',
    },
    points: {
      en: [
        'Say “Allahu Akbar” and go down into prostration.',
        'Seven parts touch the ground: forehead with nose, both palms, both knees, and the toes of both feet (Bukhari 812).',
        'Keep your elbows off the ground and arms away from your sides.',
        'Say the tasbih three times, then make any personal dua you wish — this is the best place for it.',
      ],
      bg: [
        'Кажи „Аллаху Акбар“ и се спусни в седжде.',
        'Седем части докосват земята: челото с носа, двете длани, двете колена и пръстите на двата крака (Бухари 812).',
        'Дръж лактите отлепени от земята, а ръцете — встрани от тялото.',
        'Кажи тесбиха три пъти, после направи лична дуа, каквато пожелаеш — това е най-доброто място за нея.',
      ],
    },
    say: {
      arabic: 'سُبْحَانَ رَبِّيَ الْأَعْلَىٰ',
      translit: {
        en: "Subhana Rabbiyal-A'la (×3)",
        bg: 'Субхана Раббиял-Аля (×3)',
      },
      meaning: {
        en: 'Glory be to my Lord, the Most High.',
        bg: 'Пречист е моят Господ, Всевишният.',
      },
    },
    mistake: {
      en: 'Lifting the feet or nose off the ground, or resting the forearms on the floor like a dog lying down — both are forbidden in the Sunnah.',
      bg: 'Повдигането на краката или носа от земята, както и опирането на предмишниците на пода като легнало куче — и двете са забранени в Сунната.',
    },
  },
  {
    id: 'jalsa',
    pose: 'sitting',
    poseName: { en: 'Sitting', bg: 'Сядане' },
    poseArabic: 'الْجِلْسَة',
    title: {
      en: 'Sit calmly between the two sujuds',
      bg: 'Седни спокойно между двете седждета',
    },
    points: {
      en: [
        'Rise from sujud saying “Allahu Akbar” and sit back on your left foot, right foot upright.',
        'Rest your hands on your thighs.',
        'Ask for forgiveness — then go down for the second sujud with “Allahu Akbar”.',
      ],
      bg: [
        'Изправи се от седжде с „Аллаху Акбар“ и седни върху левия крак, с изправено дясно стъпало.',
        'Постави ръцете върху бедрата.',
        'Помоли за прошка — после се спусни за второто седжде с „Аллаху Акбар“.',
      ],
    },
    say: {
      arabic: 'رَبِّ اغْفِرْ لِي، رَبِّ اغْفِرْ لِي',
      translit: {
        en: 'Rabbighfir li, Rabbighfir li',
        bg: 'Рабби-гфир ли, Рабби-гфир ли',
      },
      meaning: {
        en: 'My Lord, forgive me; my Lord, forgive me.',
        bg: 'Господарю мой, опрости ми; Господарю мой, опрости ми.',
      },
    },
    mistake: {
      en: 'This sitting is a pillar — do not skip it or rush through it.',
      bg: 'Това сядане е стълб — не го пропускай и не бързай.',
    },
  },
  {
    id: 'rakah2',
    pose: 'qiyam',
    poseName: { en: "Second rak'ah", bg: 'Втори рекят' },
    poseArabic: 'الرَّكْعَة الثَّانِيَة',
    title: {
      en: "Stand for the next rak'ah and repeat",
      bg: 'Изправи се за следващия рекят и повтори',
    },
    points: {
      en: [
        'After the second sujud, stand up saying “Allahu Akbar”.',
        "Repeat the cycle: Al-Fatiha → surah → ruku → i'tidal → two sujuds.",
        "One complete cycle is called a rak'ah — Fajr has 2, Maghrib 3, Dhuhr/Asr/Isha 4.",
      ],
      bg: [
        'След второто седжде се изправи с „Аллаху Акбар“.',
        'Повтори цикъла: Ал-Фатиха → сура → рукю → итидал → две седждета.',
        'Един пълен цикъл се нарича рекят — Фаджр има 2, Магриб 3, Зухр/Аср/Иша 4.',
      ],
    },
    say: null,
    mistake: {
      en: "Losing count of rak'ahs happens to everyone — see “Beyond Basics” for Sujud as-Sahw, the forgetfulness prostration that fixes it.",
      bg: 'Объркването на броя рекяти се случва на всеки — виж „Отвъд основите“ за Суджуд ас-Саху, седждето на забравата, което поправя грешката.',
    },
  },
  {
    id: 'tashahhud',
    pose: 'sitting',
    poseName: { en: 'Tashahhud sitting', bg: 'Сядане за Тешеххуд' },
    poseArabic: 'التَّشَهُّد',
    title: { en: 'Sit for the Tashahhud', bg: 'Седни за Тешеххуда' },
    points: {
      en: [
        "After every second rak'ah, remain sitting and recite the Tashahhud.",
        'Point your right index finger while saying the shahada.',
        "If the prayer is longer than two rak'ahs, stand up after the first Tashahhud and complete the prayer.",
      ],
      bg: [
        'След всеки втори рекят остани седнал и прочети Тешеххуда.',
        'Посочи с десния показалец, докато казваш шехадета.',
        'Ако намазът е по-дълъг от два рекята, изправи се след първия Тешеххуд и довърши намаза.',
      ],
    },
    say: {
      arabic: 'التَّحِيَّاتُ لِلَّهِ وَالصَّلَوَاتُ وَالطَّيِّبَاتُ …',
      translit: {
        en: 'At-tahiyyatu lillahi was-salawatu wat-tayyibat…',
        bg: 'Ат-тахиййату лилляхи уас-салауату уат-таййибат…',
      },
      meaning: {
        en: 'Full text with translation on the Duas & Surahs page.',
        bg: 'Пълният текст с превод е на страницата „Дуи и сури“.',
      },
    },
    mistake: null,
  },
  {
    id: 'salawat',
    pose: 'sitting',
    poseName: { en: 'Final sitting', bg: 'Последно сядане' },
    poseArabic: 'الصَّلَاةُ الإِبْرَاهِيمِيَّة',
    title: {
      en: 'Send Salawat upon the Prophet ﷺ and make dua',
      bg: 'Изпрати салауат за Пророка ﷺ и направи дуа',
    },
    points: {
      en: [
        'In the final sitting, after the Tashahhud, recite the Ibrahimi Salawat.',
        'Then seek refuge from the four things (punishment of Hell and the grave, the trials of life and death, and the Dajjal).',
        'Ask Allah for anything you wish before ending the prayer.',
      ],
      bg: [
        'В последното сядане, след Тешеххуда, прочети Ибрахимовия салауат.',
        'После потърси закрила от четирите неща (мъчението на Ада и гроба, изпитанията на живота и смъртта и Даджал).',
        'Помоли Аллах за каквото пожелаеш, преди да завършиш намаза.',
      ],
    },
    say: {
      arabic: 'اللَّهُمَّ صَلِّ عَلَىٰ مُحَمَّدٍ وَعَلَىٰ آلِ مُحَمَّدٍ …',
      translit: {
        en: "Allahumma salli 'ala Muhammadin wa 'ala ali Muhammad…",
        bg: 'Аллахумма салли аля Мухаммадин уа аля али Мухаммад…',
      },
      meaning: {
        en: 'Full text with translation on the Duas & Surahs page.',
        bg: 'Пълният текст с превод е на страницата „Дуи и сури“.',
      },
    },
    mistake: null,
  },
  {
    id: 'tasleem',
    pose: 'salam',
    poseName: { en: 'Tasleem', bg: 'Теслим' },
    poseArabic: 'التَّسْلِيم',
    title: { en: 'End the prayer with Salam', bg: 'Завърши намаза със селям' },
    points: {
      en: [
        'Turn your head to the right saying the salam, then to the left.',
        'Your prayer is complete. Stay seated for the adhkar — istighfar, Ayat al-Kursi and the tasbih.',
      ],
      bg: [
        'Обърни глава надясно със селяма, после наляво.',
        'Намазът ти е завършен. Остани седнал за азкяра — истигфар, Аят ал-Курси и тесбиха.',
      ],
    },
    say: {
      arabic: 'السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللَّهِ',
      translit: {
        en: "As-salamu 'alaykum wa rahmatullah",
        bg: 'Ас-саляму алейкум уа рахматуллах',
      },
      meaning: {
        en: 'Peace be upon you, and the mercy of Allah.',
        bg: 'Мир на вас и милостта на Аллах.',
      },
    },
    mistake: {
      en: 'Do not jump up immediately — the moments after salah are a time when dua is answered.',
      bg: 'Не ставай веднага — мигът след намаза е време, в което дуата се приема.',
    },
  },
]
