// All Qur'an text and translations follow the standard Uthmani text and
// Saheeh International translation (quran.com); Bulgarian renderings follow
// established Bulgarian translations of the meaning. Hadith numbers follow
// sunnah.com references. Every translatable field is { en, bg } — L() in the
// language context picks the active one and falls back to English.

export const duaCategories = [
  { id: 'in-prayer', label: { en: 'Recited inside Salah', bg: 'Четени в намаза' } },
  { id: 'quran', label: { en: "Qur'an for Salah", bg: 'Коран за намаза' } },
  { id: 'after-prayer', label: { en: 'After Salah (Adhkar)', bg: 'След намаз (азкяр)' } },
  { id: 'special', label: { en: 'Special duas', bg: 'Специални дуи' } },
]

export const duas = [
  // ---------- INSIDE THE PRAYER ----------
  {
    id: 'istiftah',
    category: 'in-prayer',
    title: {
      en: "Opening supplication (Du'a al-Istiftah)",
      bg: 'Встъпителна дуа (Дуа ал-Истифтах)',
    },
    occasion: {
      en: "Recited quietly after the opening takbir, in the first rak'ah only.",
      bg: 'Чете се тихо след встъпителния текбир, само в първия рекят.',
    },
    arabic:
      'سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ، وَتَبَارَكَ اسْمُكَ، وَتَعَالَىٰ جَدُّكَ، وَلَا إِلَٰهَ غَيْرُكَ',
    transliteration: {
      en: "Subhanaka Allahumma wa bihamdika, wa tabarakasmuka, wa ta'ala jadduka, wa la ilaha ghayruk.",
      bg: 'Субханака Аллахумма уа бихамдика, уа табаракасмука, уа тааля джаддука, уа ля иляха гайрук.',
    },
    translation: {
      en: 'Glory be to You, O Allah, and all praise is Yours. Blessed is Your name, exalted is Your majesty, and there is no god worthy of worship except You.',
      bg: 'Пречист си Ти, о, Аллах, и Твоя е всяката възхвала. Благословено е Твоето име, възвисено е Твоето величие и няма друг бог освен Теб.',
    },
    source: {
      en: 'Sunan Abi Dawud 775; Jami` at-Tirmidhi 243',
      bg: 'Сунен Еби Дауд 775; Джами ат-Тирмизи 243',
    },
    notes: {
      en: 'Other authentic opening duas exist — this is the easiest to memorise first.',
      bg: 'Съществуват и други достоверни встъпителни дуи — тази е най-лесна за начало.',
    },
  },
  {
    id: 'taawwudh',
    category: 'in-prayer',
    title: {
      en: "Ta'awwudh — seeking refuge",
      bg: 'Тааууз — търсене на закрила',
    },
    occasion: {
      en: "Said quietly before reciting Al-Fatiha in the first rak'ah.",
      bg: 'Казва се тихо преди четенето на Ал-Фатиха в първия рекят.',
    },
    arabic: 'أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ',
    transliteration: {
      en: "A'udhu billahi minash-shaytanir-rajim.",
      bg: 'Аузу билляхи минаш-шайтанир-раджим.',
    },
    translation: {
      en: 'I seek refuge in Allah from Satan, the accursed.',
      bg: 'Търся закрила при Аллах от прокудения сатана.',
    },
    source: {
      en: "Qur'an 16:98 — “So when you recite the Qur'an, seek refuge in Allah from Satan, the expelled.”",
      bg: 'Коран 16:98 — „И когато четеш Корана, търси закрила при Аллах от прокудения сатана.“',
    },
  },
  {
    id: 'ruku',
    category: 'in-prayer',
    title: { en: 'Tasbih of Ruku (bowing)', bg: 'Тесбих в рукю (поклон)' },
    occasion: {
      en: 'Said at least once — three times is recommended — while bowing.',
      bg: 'Казва се поне веднъж — препоръчително три пъти — по време на поклона.',
    },
    arabic: 'سُبْحَانَ رَبِّيَ الْعَظِيمِ',
    transliteration: {
      en: "Subhana Rabbiyal-'Adhim. (×3)",
      bg: 'Субхана Раббиял-Азим. (×3)',
    },
    translation: {
      en: 'Glory be to my Lord, the Magnificent.',
      bg: 'Пречист е моят Господ, Превеликият.',
    },
    source: {
      en: 'Sahih Muslim 772; Sunan Abi Dawud 871',
      bg: 'Сахих Муслим 772; Сунен Еби Дауд 871',
    },
  },
  {
    id: 'itidal',
    category: 'in-prayer',
    title: { en: 'Rising from Ruku', bg: 'Изправяне от рукю' },
    occasion: {
      en: 'Said while standing back up straight after bowing.',
      bg: 'Казва се при изправянето след поклона.',
    },
    arabic: 'سَمِعَ اللَّهُ لِمَنْ حَمِدَهُ ۝ رَبَّنَا وَلَكَ الْحَمْدُ',
    transliteration: {
      en: "Sami' Allahu liman hamidah — Rabbana wa lakal-hamd.",
      bg: 'Семиаллаху лимен хамидех — Раббана уа лякал-хамд.',
    },
    translation: {
      en: 'Allah hears the one who praises Him — Our Lord, to You belongs all praise.',
      bg: 'Аллах чува онзи, който Го възхвалява — Господарю наш, Твоя е всяката възхвала.',
    },
    source: {
      en: 'Sahih al-Bukhari 689; Sahih Muslim 411',
      bg: 'Сахих ал-Бухари 689; Сахих Муслим 411',
    },
    notes: {
      en: 'Praying behind an imam, you say only “Rabbana wa lakal-hamd.”',
      bg: 'Когато се молиш зад имам, казваш само „Раббана уа лякал-хамд“.',
    },
  },
  {
    id: 'sujud',
    category: 'in-prayer',
    title: { en: 'Tasbih of Sujud (prostration)', bg: 'Тесбих в седжде' },
    occasion: {
      en: 'Said at least once — three times is recommended — in prostration.',
      bg: 'Казва се поне веднъж — препоръчително три пъти — в седжде.',
    },
    arabic: 'سُبْحَانَ رَبِّيَ الْأَعْلَىٰ',
    transliteration: {
      en: "Subhana Rabbiyal-A'la. (×3)",
      bg: 'Субхана Раббиял-Аля. (×3)',
    },
    translation: {
      en: 'Glory be to my Lord, the Most High.',
      bg: 'Пречист е моят Господ, Всевишният.',
    },
    source: {
      en: 'Sahih Muslim 772; Sunan Abi Dawud 871',
      bg: 'Сахих Муслим 772; Сунен Еби Дауд 871',
    },
    notes: {
      en: 'Sujud is the closest a servant is to Allah — make extra dua here (Sahih Muslim 482).',
      bg: 'В седжде рабът е най-близо до Аллах — прави там много дуа (Сахих Муслим 482).',
    },
  },
  {
    id: 'between-sujud',
    category: 'in-prayer',
    title: { en: 'Between the two prostrations', bg: 'Между двете седждета' },
    occasion: {
      en: 'Said while sitting briefly between the two sujuds.',
      bg: 'Казва се при краткото сядане между двете седждета.',
    },
    arabic: 'رَبِّ اغْفِرْ لِي، رَبِّ اغْفِرْ لِي',
    transliteration: {
      en: 'Rabbighfir li, Rabbighfir li.',
      bg: 'Рабби-гфир ли, Рабби-гфир ли.',
    },
    translation: {
      en: 'My Lord, forgive me; my Lord, forgive me.',
      bg: 'Господарю мой, опрости ми; Господарю мой, опрости ми.',
    },
    source: {
      en: 'Sunan Abi Dawud 874; Sunan Ibn Majah 897',
      bg: 'Сунен Еби Дауд 874; Сунен Ибн Маджа 897',
    },
  },
  {
    id: 'tashahhud',
    category: 'in-prayer',
    title: { en: 'At-Tashahhud', bg: 'Ат-Тешеххуд' },
    occasion: {
      en: "Recited while sitting: after every two rak'ahs and in the final sitting.",
      bg: 'Чете се в седнало положение: след всеки два рекята и в последното сядане.',
    },
    arabic:
      'التَّحِيَّاتُ لِلَّهِ وَالصَّلَوَاتُ وَالطَّيِّبَاتُ، السَّلَامُ عَلَيْكَ أَيُّهَا النَّبِيُّ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ، السَّلَامُ عَلَيْنَا وَعَلَىٰ عِبَادِ اللَّهِ الصَّالِحِينَ، أَشْهَدُ أَنْ لَا إِلَٰهَ إِلَّا اللَّهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ',
    transliteration: {
      en: "At-tahiyyatu lillahi was-salawatu wat-tayyibat. As-salamu 'alayka ayyuhan-nabiyyu wa rahmatullahi wa barakatuh. As-salamu 'alayna wa 'ala 'ibadillahis-salihin. Ash-hadu an la ilaha illallah, wa ash-hadu anna Muhammadan 'abduhu wa rasuluh.",
      bg: 'Ат-тахиййату лилляхи уас-салауату уат-таййибат. Ас-саляму алейка аййухан-набиййу уа рахматуллахи уа баракятух. Ас-саляму алейна уа аля ибадилляхис-салихин. Ешхеду ан ля иляха илляллах, уа ешхеду анна Мухаммадан абдуху уа расулюх.',
    },
    translation: {
      en: 'All greetings, prayers and pure words are for Allah. Peace be upon you, O Prophet, and the mercy of Allah and His blessings. Peace be upon us and upon the righteous servants of Allah. I bear witness that none has the right to be worshipped except Allah, and I bear witness that Muhammad is His servant and Messenger.',
      bg: 'Всички приветствия, молитви и чисти слова са за Аллах. Мир на теб, о, Пророче, и милостта на Аллах, и Неговите благословии. Мир на нас и на праведните раби на Аллах. Свидетелствам, че няма друг бог освен Аллах, и свидетелствам, че Мухаммад е Негов раб и пратеник.',
    },
    source: {
      en: 'Sahih al-Bukhari 831; Sahih Muslim 402',
      bg: 'Сахих ал-Бухари 831; Сахих Муслим 402',
    },
  },
  {
    id: 'salawat',
    category: 'in-prayer',
    title: {
      en: 'As-Salat al-Ibrahimiyyah (Salawat)',
      bg: 'Ас-Салят ал-Ибрахимиййа (Салауат)',
    },
    occasion: {
      en: 'Recited after the Tashahhud in the final sitting.',
      bg: 'Чете се след Тешеххуда в последното сядане.',
    },
    arabic:
      'اللَّهُمَّ صَلِّ عَلَىٰ مُحَمَّدٍ وَعَلَىٰ آلِ مُحَمَّدٍ، كَمَا صَلَّيْتَ عَلَىٰ إِبْرَاهِيمَ وَعَلَىٰ آلِ إِبْرَاهِيمَ، إِنَّكَ حَمِيدٌ مَجِيدٌ، اللَّهُمَّ بَارِكْ عَلَىٰ مُحَمَّدٍ وَعَلَىٰ آلِ مُحَمَّدٍ، كَمَا بَارَكْتَ عَلَىٰ إِبْرَاهِيمَ وَعَلَىٰ آلِ إِبْرَاهِيمَ، إِنَّكَ حَمِيدٌ مَجِيدٌ',
    transliteration: {
      en: "Allahumma salli 'ala Muhammadin wa 'ala ali Muhammad, kama sallayta 'ala Ibrahima wa 'ala ali Ibrahim, innaka Hamidun Majid. Allahumma barik 'ala Muhammadin wa 'ala ali Muhammad, kama barakta 'ala Ibrahima wa 'ala ali Ibrahim, innaka Hamidun Majid.",
      bg: 'Аллахумма салли аля Мухаммадин уа аля али Мухаммад, кема саллейта аля Ибрахима уа аля али Ибрахим, иннака Хамидун Маджид. Аллахумма барик аля Мухаммадин уа аля али Мухаммад, кема баракта аля Ибрахима уа аля али Ибрахим, иннака Хамидун Маджид.',
    },
    translation: {
      en: 'O Allah, send Your mercy upon Muhammad and the family of Muhammad, as You sent Your mercy upon Ibrahim and the family of Ibrahim; You are indeed Praiseworthy, Most Glorious. O Allah, bless Muhammad and the family of Muhammad as You blessed Ibrahim and the family of Ibrahim; You are indeed Praiseworthy, Most Glorious.',
      bg: 'О, Аллах, дари с милостта Си Мухаммад и рода на Мухаммад, както дари Ибрахим и рода на Ибрахим; Ти си Достохвален, Преславен. О, Аллах, благослови Мухаммад и рода на Мухаммад, както благослови Ибрахим и рода на Ибрахим; Ти си Достохвален, Преславен.',
    },
    source: { en: 'Sahih al-Bukhari 3370', bg: 'Сахих ал-Бухари 3370' },
  },
  {
    id: 'before-salam',
    category: 'in-prayer',
    title: { en: 'Dua before the Tasleem', bg: 'Дуа преди теслим' },
    occasion: {
      en: 'Recited after the Salawat, just before ending the prayer.',
      bg: 'Чете се след Салауата, непосредствено преди края на намаза.',
    },
    arabic:
      'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ عَذَابِ جَهَنَّمَ، وَمِنْ عَذَابِ الْقَبْرِ، وَمِنْ فِتْنَةِ الْمَحْيَا وَالْمَمَاتِ، وَمِنْ شَرِّ فِتْنَةِ الْمَسِيحِ الدَّجَّالِ',
    transliteration: {
      en: "Allahumma inni a'udhu bika min 'adhabi jahannam, wa min 'adhabil-qabr, wa min fitnatil-mahya wal-mamat, wa min sharri fitnatil-masihid-dajjal.",
      bg: 'Аллахумма инни аузу бика мин азаби джаханнам, уа мин азабил-кабр, уа мин фитнатил-махя уал-мамат, уа мин шарри фитнатил-масихид-даджал.',
    },
    translation: {
      en: 'O Allah, I seek refuge in You from the punishment of Hellfire, from the punishment of the grave, from the trials of life and death, and from the evil of the trial of the False Messiah.',
      bg: 'О, Аллах, търся закрила при Теб от мъчението на Огъня, от мъчението в гроба, от изпитанията на живота и смъртта и от злото на изпитанието на лъжемесията (Даджал).',
    },
    source: { en: 'Sahih Muslim 588', bg: 'Сахих Муслим 588' },
  },
  {
    id: 'tasleem',
    category: 'in-prayer',
    title: { en: 'Tasleem — ending the prayer', bg: 'Теслим — завършване на намаза' },
    occasion: {
      en: 'Said turning the head to the right, then to the left.',
      bg: 'Казва се, като обръщаш глава надясно, а после наляво.',
    },
    arabic: 'السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللَّهِ',
    transliteration: {
      en: "As-salamu 'alaykum wa rahmatullah. (right, then left)",
      bg: 'Ас-саляму алейкум уа рахматуллах. (надясно, после наляво)',
    },
    translation: {
      en: 'Peace be upon you, and the mercy of Allah.',
      bg: 'Мир на вас и милостта на Аллах.',
    },
    source: {
      en: 'Sahih Muslim 582; Sunan Abi Dawud 996',
      bg: 'Сахих Муслим 582; Сунен Еби Дауд 996',
    },
  },

  // ---------- QUR'AN FOR SALAH ----------
  {
    id: 'fatiha',
    category: 'quran',
    title: {
      en: 'Surah Al-Fatiha — The Opening (1)',
      bg: 'Сура Ал-Фатиха — Откриването (1)',
    },
    occasion: {
      en: "Recited in every rak'ah of every prayer. The Prophet ﷺ said: “There is no prayer for the one who does not recite the Opening of the Book.” (Sahih al-Bukhari 756)",
      bg: 'Чете се във всеки рекят на всеки намаз. Пророкът ﷺ е казал: „Няма намаз за онзи, който не чете Откриващата Книгата.“ (Сахих ал-Бухари 756)',
    },
    arabic:
      'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ ﴿١﴾ الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ ﴿٢﴾ الرَّحْمَٰنِ الرَّحِيمِ ﴿٣﴾ مَالِكِ يَوْمِ الدِّينِ ﴿٤﴾ إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ ﴿٥﴾ اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ ﴿٦﴾ صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ ﴿٧﴾',
    transliteration: {
      en: "Bismillahir-Rahmanir-Rahim. Al-hamdu lillahi Rabbil-'alamin. Ar-Rahmanir-Rahim. Maliki yawmid-din. Iyyaka na'budu wa iyyaka nasta'in. Ihdinas-siratal-mustaqim. Siratal-ladhina an'amta 'alayhim, ghayril-maghdubi 'alayhim wa lad-dallin. (Amin)",
      bg: 'Бисмилляхир-Рахманир-Рахим. Алхамду лилляхи Раббил-алемин. Ар-Рахманир-Рахим. Малики яумид-дин. Иййака набуду уа иййака настаин. Ихдинас-сиратал-мустаким. Сиратал-лязина анамта алейхим, гайрил-магдуби алейхим уа ляд-даллин. (Амин)',
    },
    translation: {
      en: 'In the name of Allah, the Entirely Merciful, the Especially Merciful. All praise is due to Allah, Lord of the worlds — the Entirely Merciful, the Especially Merciful, Sovereign of the Day of Recompense. It is You we worship and You we ask for help. Guide us to the straight path — the path of those upon whom You have bestowed favor, not of those who have earned Your anger or of those who are astray.',
      bg: 'В името на Аллах, Всемилостивия, Милосърдния! Възхвалата е за Аллах — Господа на световете, Всемилостивия, Милосърдния, Владетеля на Съдния ден. Само на Теб служим и само Теб за подкрепа зовем. Насочи ни по правия път — пътя на онези, които си дарил с благодат, а не на онези, върху които тегне гняв, нито на заблудените!',
    },
    source: { en: "Qur'an 1:1–7 (quran.com/1)", bg: 'Коран 1:1–7 (quran.com/1)' },
    notes: {
      en: 'Say “Amin” after finishing it.',
      bg: 'Кажи „Амин“, след като я завършиш.',
    },
  },
  {
    id: 'ikhlas',
    category: 'quran',
    title: {
      en: 'Surah Al-Ikhlas — Sincerity (112)',
      bg: 'Сура Ал-Ихляс — Пречистването (112)',
    },
    occasion: {
      en: "A short surah recited after Al-Fatiha. Equal to one third of the Qur'an in reward (Sahih al-Bukhari 5013).",
      bg: 'Кратка сура, четена след Ал-Фатиха. По награда се равнява на една трета от Корана (Сахих ал-Бухари 5013).',
    },
    arabic:
      'قُلْ هُوَ اللَّهُ أَحَدٌ ﴿١﴾ اللَّهُ الصَّمَدُ ﴿٢﴾ لَمْ يَلِدْ وَلَمْ يُولَدْ ﴿٣﴾ وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ ﴿٤﴾',
    transliteration: {
      en: 'Qul huwallahu ahad. Allahus-samad. Lam yalid wa lam yulad. Wa lam yakul-lahu kufuwan ahad.',
      bg: 'Кул хууаллаху ахад. Аллахус-самад. Лям ялид уа лям юляд. Уа лям якул-ляху куфууан ахад.',
    },
    translation: {
      en: 'Say: He is Allah, the One. Allah, the Eternal Refuge. He neither begets nor is born, nor is there to Him any equivalent.',
      bg: 'Кажи: Той е Аллах — Единствения, Аллах, Целта [на всички въжделения]. Нито е раждал, нито е роден, и няма равен Нему.',
    },
    source: { en: "Qur'an 112 (quran.com/112)", bg: 'Коран 112 (quran.com/112)' },
  },
  {
    id: 'falaq',
    category: 'quran',
    title: {
      en: 'Surah Al-Falaq — The Daybreak (113)',
      bg: 'Сура Ал-Фалак — Разсъмването (113)',
    },
    occasion: {
      en: 'A short surah recited after Al-Fatiha, and in the morning/evening adhkar.',
      bg: 'Кратка сура, четена след Ал-Фатиха и в сутрешния/вечерния зикр.',
    },
    arabic:
      'قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ ﴿١﴾ مِن شَرِّ مَا خَلَقَ ﴿٢﴾ وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ ﴿٣﴾ وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ ﴿٤﴾ وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ ﴿٥﴾',
    transliteration: {
      en: "Qul a'udhu bi-rabbil-falaq. Min sharri ma khalaq. Wa min sharri ghasiqin idha waqab. Wa min sharrin-naffathati fil-'uqad. Wa min sharri hasidin idha hasad.",
      bg: 'Кул аузу би-раббил-фалак. Мин шарри ма халак. Уа мин шарри гасикин иза уакаб. Уа мин шаррин-наффасати фил-укад. Уа мин шарри хасидин иза хасад.',
    },
    translation: {
      en: 'Say: I seek refuge in the Lord of daybreak — from the evil of that which He created, and from the evil of darkness when it settles, and from the evil of the blowers in knots, and from the evil of an envier when he envies.',
      bg: 'Кажи: Търся закрила при Господа на разсъмването — от злото на онова, което е сътворил, и от злото на тъмнината, когато се спусне, и от злото на духащите по възлите, и от злото на завистника, когато завижда.',
    },
    source: { en: "Qur'an 113 (quran.com/113)", bg: 'Коран 113 (quran.com/113)' },
  },
  {
    id: 'nas',
    category: 'quran',
    title: {
      en: 'Surah An-Nas — Mankind (114)',
      bg: 'Сура Ан-Нас — Хората (114)',
    },
    occasion: {
      en: 'A short surah recited after Al-Fatiha, and in the morning/evening adhkar.',
      bg: 'Кратка сура, четена след Ал-Фатиха и в сутрешния/вечерния зикр.',
    },
    arabic:
      'قُلْ أَعُوذُ بِرَبِّ النَّاسِ ﴿١﴾ مَلِكِ النَّاسِ ﴿٢﴾ إِلَٰهِ النَّاسِ ﴿٣﴾ مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ ﴿٤﴾ الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ ﴿٥﴾ مِنَ الْجِنَّةِ وَالنَّاسِ ﴿٦﴾',
    transliteration: {
      en: "Qul a'udhu bi-rabbin-nas. Malikin-nas. Ilahin-nas. Min sharril-waswasil-khannas. Alladhi yuwaswisu fi sudurin-nas. Minal-jinnati wan-nas.",
      bg: 'Кул аузу би-раббин-нас. Маликин-нас. Иляхин-нас. Мин шаррил-уасуасил-ханнас. Аллязи юуасуису фи судурин-нас. Минал-джиннати уан-нас.',
    },
    translation: {
      en: 'Say: I seek refuge in the Lord of mankind, the Sovereign of mankind, the God of mankind, from the evil of the retreating whisperer — who whispers evil into the breasts of mankind — from among the jinn and mankind.',
      bg: 'Кажи: Търся закрила при Господа на хората, Владетеля на хората, Бога на хората, от злото на спотайващия се нашепвач, който нашепва в гърдите на хората — от джиновете и от хората.',
    },
    source: { en: "Qur'an 114 (quran.com/114)", bg: 'Коран 114 (quran.com/114)' },
  },
  {
    id: 'kawthar',
    category: 'quran',
    title: {
      en: 'Surah Al-Kawthar — Abundance (108)',
      bg: 'Сура Ал-Кеусер — Изобилието (108)',
    },
    occasion: {
      en: "The shortest surah of the Qur'an — perfect for your first prayers.",
      bg: 'Най-кратката сура в Корана — идеална за първите ти намази.',
    },
    arabic:
      'إِنَّا أَعْطَيْنَاكَ الْكَوْثَرَ ﴿١﴾ فَصَلِّ لِرَبِّكَ وَانْحَرْ ﴿٢﴾ إِنَّ شَانِئَكَ هُوَ الْأَبْتَرُ ﴿٣﴾',
    transliteration: {
      en: "Inna a'taynakal-kawthar. Fasalli li-rabbika wanhar. Inna shani'aka huwal-abtar.",
      bg: 'Инна атайнакал-кеусер. Фасалли ли-раббика уанхар. Инна шаниака хууал-абтар.',
    },
    translation: {
      en: 'Indeed, We have granted you al-Kawthar. So pray to your Lord and sacrifice [to Him alone]. Indeed, your enemy is the one cut off.',
      bg: 'Ние ти дадохме [о, Мухаммад] Ал-Кеусер [реката на изобилието]. Затова се моли на своя Господ и коли жертва! Твоят ненавистник — той е лишеният.',
    },
    source: { en: "Qur'an 108 (quran.com/108)", bg: 'Коран 108 (quran.com/108)' },
  },
  {
    id: 'asr',
    category: 'quran',
    title: { en: 'Surah Al-Asr — Time (103)', bg: 'Сура Ал-Аср — Времето (103)' },
    occasion: {
      en: 'A short, powerful surah to memorise early.',
      bg: 'Кратка и силна сура за ранно запаметяване.',
    },
    arabic:
      'وَالْعَصْرِ ﴿١﴾ إِنَّ الْإِنسَانَ لَفِي خُسْرٍ ﴿٢﴾ إِلَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ وَتَوَاصَوْا بِالْحَقِّ وَتَوَاصَوْا بِالصَّبْرِ ﴿٣﴾',
    transliteration: {
      en: "Wal-'asr. Innal-insana lafi khusr. Illal-ladhina amanu wa 'amilus-salihati wa tawasaw bil-haqqi wa tawasaw bis-sabr.",
      bg: 'Уал-аср. Иннал-инсана лафи хуср. Иллял-лязина аману уа амилюс-салихати уа тауасау бил-хакки уа тауасау бис-сабр.',
    },
    translation: {
      en: 'By time, indeed mankind is in loss — except for those who have believed and done righteous deeds and advised each other to truth and advised each other to patience.',
      bg: 'Кълна се във времето — човекът е в загуба, освен онези, които вярват и вършат праведни дела, и взаимно се наставляват за истината, и взаимно се наставляват за търпението.',
    },
    source: { en: "Qur'an 103 (quran.com/103)", bg: 'Коран 103 (quran.com/103)' },
  },
  {
    id: 'ayat-kursi',
    category: 'quran',
    title: {
      en: 'Ayat al-Kursi — The Verse of the Throne (2:255)',
      bg: 'Аят ал-Курси — Айетът на Престола (2:255)',
    },
    occasion: {
      en: "Recited after every obligatory prayer: “Whoever recites Ayat al-Kursi after every prescribed prayer, nothing stands between him and Paradise except death.” (an-Nasa'i, Al-Sunan al-Kubra; graded sahih by al-Albani)",
      bg: 'Чете се след всеки задължителен намаз: „Който чете Аят ал-Курси след всеки предписан намаз, между него и Рая не стои нищо освен смъртта.“ (ан-Насаи; достоверен според ал-Албани)',
    },
    arabic:
      'اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ',
    transliteration: {
      en: "Allahu la ilaha illa huwal-hayyul-qayyum. La ta'khudhuhu sinatun wa la nawm. Lahu ma fis-samawati wa ma fil-ard. Man dhal-ladhi yashfa'u 'indahu illa bi-idhnih. Ya'lamu ma bayna aydihim wa ma khalfahum, wa la yuhituna bi-shay'im-min 'ilmihi illa bima sha'. Wasi'a kursiyyuhus-samawati wal-ard, wa la ya'uduhu hifdhuhuma, wa huwal-'aliyyul-'adhim.",
      bg: 'Аллаху ля иляха илля хууал-хайюл-каййум. Ля тахузуху синатун уа ля наум. Ляху ма фис-самауати уа ма фил-ард. Ман зал-лязи яшфау индаху илля би-изних. Яляму ма байна айдихим уа ма халфахум, уа ля юхитуна би-шайим-мин илмихи илля бима ша. Уасиа курсийюхус-самауати уал-ард, уа ля яудуху хифзухума, уа хууал-алийюл-азим.',
    },
    translation: {
      en: 'Allah — there is no deity except Him, the Ever-Living, the Sustainer of existence. Neither drowsiness overtakes Him nor sleep. To Him belongs whatever is in the heavens and whatever is on the earth. Who is it that can intercede with Him except by His permission? He knows what is before them and what will be after them, and they encompass not a thing of His knowledge except for what He wills. His Kursi extends over the heavens and the earth, and their preservation tires Him not. And He is the Most High, the Most Great.',
      bg: 'Аллах! Няма друг бог освен Него — Вечноживия, Неизменния! Не Го обзема нито дрямка, нито сън. Негово е всичко на небесата и всичко на земята. Кой ще се застъпи пред Него, освен с Неговото позволение? Той знае какво е било преди тях и какво ще бъде след тях, а те не обхващат нищо от Неговото знание, освен каквото Той пожелае. Неговият Престол вмества и небесата, и земята, и не Му тежи да ги съхрани. Той е Всевишния, Превеликия.',
    },
    source: {
      en: "Qur'an 2:255 (quran.com/2/255)",
      bg: 'Коран 2:255 (quran.com/2/255)',
    },
  },

  // ---------- AFTER PRAYER ----------
  {
    id: 'istighfar-after',
    category: 'after-prayer',
    title: {
      en: 'Istighfar & the words of peace',
      bg: 'Истигфар и словата на мира',
    },
    occasion: {
      en: 'Said immediately after the tasleem.',
      bg: 'Казва се веднага след теслима.',
    },
    arabic:
      'أَسْتَغْفِرُ اللَّهَ (ثَلَاثًا) اللَّهُمَّ أَنْتَ السَّلَامُ وَمِنْكَ السَّلَامُ، تَبَارَكْتَ يَا ذَا الْجَلَالِ وَالْإِكْرَامِ',
    transliteration: {
      en: 'Astaghfirullah (×3). Allahumma antas-salam wa minkas-salam, tabarakta ya dhal-jalali wal-ikram.',
      bg: 'Астагфируллах (×3). Аллахумма антас-салям уа минкас-салям, табаракта я зал-джаляли уал-икрам.',
    },
    translation: {
      en: 'I seek the forgiveness of Allah (three times). O Allah, You are Peace and from You comes peace. Blessed are You, O Owner of Majesty and Honour.',
      bg: 'Моля Аллах за прошка (три пъти). О, Аллах, Ти си Мирът и от Теб идва мирът. Благословен си, о, Владетелю на величието и почитта.',
    },
    source: { en: 'Sahih Muslim 591', bg: 'Сахих Муслим 591' },
  },
  {
    id: 'tasbih-after',
    category: 'after-prayer',
    title: {
      en: 'The Tasbih of Fatimah (33-33-34)',
      bg: 'Тесбихът на Фатима (33-33-34)',
    },
    occasion: {
      en: 'Counted on the fingers after each obligatory prayer.',
      bg: 'Брои се на пръсти след всеки задължителен намаз.',
    },
    arabic: 'سُبْحَانَ اللَّهِ (٣٣) الْحَمْدُ لِلَّهِ (٣٣) اللَّهُ أَكْبَرُ (٣٤)',
    transliteration: {
      en: 'SubhanAllah (×33), Alhamdulillah (×33), Allahu Akbar (×34).',
      bg: 'СубханАллах (×33), Алхамдулиллях (×33), Аллаху Акбар (×34).',
    },
    translation: {
      en: 'Glory be to Allah (33), all praise is due to Allah (33), Allah is the Greatest (34).',
      bg: 'Пречист е Аллах (33), възхвалата е за Аллах (33), Аллах е Превелик (34).',
    },
    source: { en: 'Sahih Muslim 596–597', bg: 'Сахих Муслим 596–597' },
    notes: {
      en: "In another narration: 33 of each, completed to one hundred with “La ilaha illallahu wahdahu la sharika lah, lahul-mulku wa lahul-hamdu wa huwa 'ala kulli shay'in qadir.” Whoever says this, his sins are forgiven even if they are like the foam of the sea.",
      bg: 'В друго предание: по 33 от всяко, допълнено до сто с „Ля иляха илляллаху уахдаху ля шарика лях, ляхул-мулку уа ляхул-хамду уа хууа аля кулли шайин кадир“. Който каже това, греховете му биват опростени, дори да са като морската пяна.',
    },
  },
  {
    id: 'tahlil-after',
    category: 'after-prayer',
    title: { en: 'Tahlil after prayer', bg: 'Тахлил след намаз' },
    occasion: {
      en: 'Said once (or more) after each obligatory prayer.',
      bg: 'Казва се веднъж (или повече) след всеки задължителен намаз.',
    },
    arabic:
      'لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ',
    transliteration: {
      en: "La ilaha illallahu wahdahu la sharika lah, lahul-mulku wa lahul-hamdu, wa huwa 'ala kulli shay'in qadir.",
      bg: 'Ля иляха илляллаху уахдаху ля шарика лях, ляхул-мулку уа ляхул-хамду, уа хууа аля кулли шайин кадир.',
    },
    translation: {
      en: 'None has the right to be worshipped except Allah alone, without partner. To Him belongs the dominion and to Him belongs all praise, and He is over all things competent.',
      bg: 'Няма друг бог освен Аллах, Единствения, без съдружник. Негова е властта и Негова е възхвалата, и Той над всяко нещо има сила.',
    },
    source: {
      en: 'Sahih al-Bukhari 844; Sahih Muslim 593',
      bg: 'Сахих ал-Бухари 844; Сахих Муслим 593',
    },
  },

  // ---------- SPECIAL ----------
  {
    id: 'qunut',
    category: 'special',
    title: { en: 'Dua al-Qunut (for Witr)', bg: 'Дуа ал-Кунут (за Витр)' },
    occasion: {
      en: "Recited standing in the last rak'ah of Witr, before or after ruku.",
      bg: 'Чете се прав в последния рекят на Витр, преди или след рукю.',
    },
    arabic:
      'اللَّهُمَّ اهْدِنِي فِيمَنْ هَدَيْتَ، وَعَافِنِي فِيمَنْ عَافَيْتَ، وَتَوَلَّنِي فِيمَنْ تَوَلَّيْتَ، وَبَارِكْ لِي فِيمَا أَعْطَيْتَ، وَقِنِي شَرَّ مَا قَضَيْتَ، فَإِنَّكَ تَقْضِي وَلَا يُقْضَىٰ عَلَيْكَ، وَإِنَّهُ لَا يَذِلُّ مَنْ وَالَيْتَ، وَلَا يَعِزُّ مَنْ عَادَيْتَ، تَبَارَكْتَ رَبَّنَا وَتَعَالَيْتَ',
    transliteration: {
      en: "Allahumma-hdini fiman hadayt, wa 'afini fiman 'afayt, wa tawallani fiman tawallayt, wa barik li fima a'tayt, wa qini sharra ma qadayt, fa-innaka taqdi wa la yuqda 'alayk, wa innahu la yadhillu man walayt, wa la ya'izzu man 'adayt, tabarakta Rabbana wa ta'alayt.",
      bg: 'Аллахумма-хдини фиман хадайт, уа афини фиман афайт, уа тауалляни фиман тауаллайт, уа барик ли фима атайт, уа кини шарра ма кадайт, фа-иннака такди уа ля юкда алайк, уа иннаху ля язиллю ман уалайт, уа ля яиззу ман адайт, табаракта Раббана уа таалайт.',
    },
    translation: {
      en: 'O Allah, guide me among those You have guided; grant me wellbeing among those You have granted wellbeing; take me into Your care among those You have taken into Your care; bless me in what You have given; and protect me from the evil of what You have decreed. Truly You decree and none decrees over You. Whoever You befriend is never humiliated, and whoever You oppose is never honoured. Blessed are You, our Lord, and Exalted.',
      bg: 'О, Аллах, напъти ме сред онези, които си напътил; дари ме със здраве сред онези, които си дарил със здраве; вземи ме под закрилата Си сред онези, които си взел под закрила; благослови за мен онова, което си ми дал; и ме опази от злото на онова, което си отсъдил. Ти отсъждаш и над Теб никой не отсъжда. Не е унизен онзи, комуто Ти си покровител, и не е почетен онзи, с когото Ти враждуваш. Благословен си, Господарю наш, и Превъзвишен.',
    },
    source: {
      en: 'Sunan Abi Dawud 1425; Jami` at-Tirmidhi 464 (taught to al-Hasan ibn Ali)',
      bg: 'Сунен Еби Дауд 1425; Джами ат-Тирмизи 464 (научена от ал-Хасан ибн Али)',
    },
  },
  {
    id: 'istikhara',
    category: 'special',
    title: {
      en: 'Dua al-Istikhara (seeking guidance)',
      bg: 'Дуа ал-Истихара (търсене на напътствие)',
    },
    occasion: {
      en: "After praying two voluntary rak'ahs when facing a decision. Name your matter where indicated.",
      bg: 'След два доброволни рекята, когато си изправен пред решение. Назови въпроса си на съответното място.',
    },
    arabic:
      'اللَّهُمَّ إِنِّي أَسْتَخِيرُكَ بِعِلْمِكَ، وَأَسْتَقْدِرُكَ بِقُدْرَتِكَ، وَأَسْأَلُكَ مِنْ فَضْلِكَ الْعَظِيمِ، فَإِنَّكَ تَقْدِرُ وَلَا أَقْدِرُ، وَتَعْلَمُ وَلَا أَعْلَمُ، وَأَنْتَ عَلَّامُ الْغُيُوبِ، اللَّهُمَّ إِنْ كُنْتَ تَعْلَمُ أَنَّ هَٰذَا الْأَمْرَ خَيْرٌ لِي فِي دِينِي وَمَعَاشِي وَعَاقِبَةِ أَمْرِي فَاقْدُرْهُ لِي وَيَسِّرْهُ لِي ثُمَّ بَارِكْ لِي فِيهِ، وَإِنْ كُنْتَ تَعْلَمُ أَنَّ هَٰذَا الْأَمْرَ شَرٌّ لِي فِي دِينِي وَمَعَاشِي وَعَاقِبَةِ أَمْرِي فَاصْرِفْهُ عَنِّي وَاصْرِفْنِي عَنْهُ، وَاقْدُرْ لِيَ الْخَيْرَ حَيْثُ كَانَ ثُمَّ أَرْضِنِي بِهِ',
    transliteration: {
      en: "Allahumma inni astakhiruka bi-'ilmika, wa astaqdiruka bi-qudratika, wa as'aluka min fadlikal-'adhim. Fa-innaka taqdiru wa la aqdir, wa ta'lamu wa la a'lam, wa anta 'allamul-ghuyub. Allahumma in kunta ta'lamu anna hadhal-amra khayrun li fi dini wa ma'ashi wa 'aqibati amri, faqdurhu li wa yassirhu li, thumma barik li fih. Wa in kunta ta'lamu anna hadhal-amra sharrun li fi dini wa ma'ashi wa 'aqibati amri, fasrifhu 'anni wasrifni 'anhu, waqdur liyal-khayra haythu kana, thumma ardini bih.",
      bg: 'Аллахумма инни астахирука би-илмика, уа астакдирука би-кудратика, уа асалюка мин фадликал-азим. Фа-иннака такдиру уа ля акдир, уа таляму уа ля алям, уа анта аллямул-гуюб. Аллахумма ин кунта таляму анна хазал-амра хайрун ли фи дини уа мааши уа акибати амри, факдурху ли уа яссирху ли, сумма барик ли фих. Уа ин кунта таляму анна хазал-амра шаррун ли фи дини уа мааши уа акибати амри, фасрифху анни уасрифни анху, уакдур лиял-хайра хайсу кяна, сумма ардини бих.',
    },
    translation: {
      en: 'O Allah, I seek Your guidance through Your knowledge, and I seek ability through Your power, and I ask You of Your great bounty. For You are able while I am not, and You know while I do not, and You are the Knower of the unseen. O Allah, if You know this matter to be good for me in my religion, my livelihood and the outcome of my affair, then decree it for me, make it easy for me, and bless me in it. And if You know this matter to be bad for me in my religion, my livelihood and the outcome of my affair, then turn it away from me and turn me away from it, and decree for me the good wherever it may be, then make me content with it.',
      bg: 'О, Аллах, търся Твоето напътствие чрез Твоето знание и сила чрез Твоята мощ, и Те моля от Твоята огромна благодат. Ти можеш, а аз не мога; Ти знаеш, а аз не зная; Ти си Всезнаещият за съкровеното. О, Аллах, ако знаеш, че това дело е добро за мен в религията ми, в препитанието ми и в изхода на делата ми — отреди ми го, улесни ми го и го благослови за мен. А ако знаеш, че това дело е зло за мен в религията ми, в препитанието ми и в изхода на делата ми — отдалечи го от мен и мен отдалечи от него, и ми отреди доброто, където и да се намира то, а сетне ме стори доволен от него.',
    },
    source: { en: 'Sahih al-Bukhari 1166', bg: 'Сахих ал-Бухари 1166' },
  },
  {
    id: 'sayyid-istighfar',
    category: 'special',
    title: {
      en: 'Sayyid al-Istighfar (the master of seeking forgiveness)',
      bg: 'Саййид ал-Истигфар (върховната молба за прошка)',
    },
    occasion: {
      en: 'The best dua of repentance — recite it with Salat al-Taubah, and every morning and evening.',
      bg: 'Най-добрата дуа за покаяние — чети я със Салят ат-Тауба и всяка сутрин и вечер.',
    },
    arabic:
      'اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَٰهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَىٰ عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ لَكَ بِذَنْبِي فَاغْفِرْ لِي، فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ',
    transliteration: {
      en: "Allahumma anta Rabbi, la ilaha illa ant, khalaqtani wa ana 'abduk, wa ana 'ala 'ahdika wa wa'dika mastata't. A'udhu bika min sharri ma sana't, abu'u laka bi-ni'matika 'alayya, wa abu'u laka bi-dhanbi, faghfir li, fa-innahu la yaghfirudh-dhunuba illa ant.",
      bg: 'Аллахумма анта Рабби, ля иляха илля ант, халяктани уа ана абдук, уа ана аля ахдика уа уадика мастатат. Аузу бика мин шарри ма санат, абуу ляка би-ниматика алейя, уа абуу ляка би-занби, фагфир ли, фа-иннаху ля ягфируз-зунуба илля ант.',
    },
    translation: {
      en: 'O Allah, You are my Lord; there is no god but You. You created me and I am Your servant, and I keep Your covenant and promise as much as I am able. I seek refuge in You from the evil of what I have done. I acknowledge before You Your blessing upon me, and I acknowledge my sin — so forgive me, for none forgives sins except You.',
      bg: 'О, Аллах, Ти си моят Господ; няма друг бог освен Теб. Ти ме сътвори и аз съм Твой раб, и спазвам завета и обещанието си към Теб, доколкото мога. Търся закрила при Теб от злото на онова, което съм сторил. Признавам пред Теб Твоята благодат към мен и признавам греха си — опрости ми, защото никой освен Теб не опрощава греховете.',
    },
    source: { en: 'Sahih al-Bukhari 6306', bg: 'Сахих ал-Бухари 6306' },
    notes: {
      en: 'Whoever says it with conviction in the evening and dies that night enters Paradise, and likewise in the morning.',
      bg: 'Който я каже с убеденост вечерта и умре същата нощ, влиза в Рая; същото важи и за сутринта.',
    },
  },
  {
    id: 'after-wudu',
    category: 'special',
    title: { en: 'Dua after completing Wudu', bg: 'Дуа след абдест' },
    occasion: {
      en: 'Said after finishing ablution.',
      bg: 'Казва се след завършване на абдеста.',
    },
    arabic:
      'أَشْهَدُ أَنْ لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ',
    transliteration: {
      en: "Ash-hadu an la ilaha illallahu wahdahu la sharika lah, wa ash-hadu anna Muhammadan 'abduhu wa rasuluh.",
      bg: 'Ешхеду ан ля иляха илляллаху уахдаху ля шарика лях, уа ешхеду анна Мухаммадан абдуху уа расулюх.',
    },
    translation: {
      en: 'I bear witness that none has the right to be worshipped except Allah alone, without partner, and I bear witness that Muhammad is His servant and Messenger.',
      bg: 'Свидетелствам, че няма друг бог освен Аллах, Единствения, без съдружник, и свидетелствам, че Мухаммад е Негов раб и пратеник.',
    },
    source: {
      en: 'Sahih Muslim 234 — “…the eight gates of Paradise are opened for him, to enter through whichever he wishes.”',
      bg: 'Сахих Муслим 234 — „…осемте порти на Рая се отварят за него, да влезе през която пожелае.“',
    },
  },
  {
    id: 'enter-masjid',
    category: 'special',
    title: {
      en: 'Entering & leaving the masjid',
      bg: 'Влизане и излизане от джамията',
    },
    occasion: {
      en: 'Entering: right foot first. Leaving: left foot first.',
      bg: 'При влизане: с десния крак. При излизане: с левия крак.',
    },
    arabic:
      'اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ (عِنْدَ الدُّخُولِ) — اللَّهُمَّ إِنِّي أَسْأَلُكَ مِنْ فَضْلِكَ (عِنْدَ الْخُرُوجِ)',
    transliteration: {
      en: "Entering: Allahumma-ftah li abwaba rahmatik. Leaving: Allahumma inni as'aluka min fadlik.",
      bg: 'При влизане: Аллахумма-фтах ли абуаба рахматик. При излизане: Аллахумма инни асалюка мин фадлик.',
    },
    translation: {
      en: 'Entering: O Allah, open for me the gates of Your mercy. Leaving: O Allah, I ask You of Your bounty.',
      bg: 'При влизане: О, Аллах, отвори за мен портите на Своята милост. При излизане: О, Аллах, моля Те от Твоята благодат.',
    },
    source: { en: 'Sahih Muslim 713', bg: 'Сахих Муслим 713' },
  },
]

export const getDua = (id) => duas.find((d) => d.id === id)
