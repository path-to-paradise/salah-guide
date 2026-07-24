// Classification of the prayers: obligatory (fard), necessary (wajib — the
// Hanafi grading for Witr and Eid), emphasised sunnah, and voluntary (nafl).

export const typeGroups = [
  {
    id: 'fard',
    badge: 'fard',
    label: { en: 'Fard — Obligatory', bg: 'Фарз — задължителни' },
    intro: {
      en: 'The prayers every accountable Muslim must perform. Deliberately abandoning them is a major sin; they are the first thing a person will be asked about on the Day of Judgement (Jami` at-Tirmidhi 413).',
      bg: 'Намазите, които всеки отговорен мюсюлманин е длъжен да кланя. Умишленото им изоставяне е голям грях; те са първото, за което човек ще бъде питан в Съдния ден (Джами ат-Тирмизи 413).',
    },
    items: [
      {
        name: { en: 'The five daily prayers', bg: 'Петте ежедневни намаза' },
        arabic: 'الصَّلَوَاتُ الْخَمْس',
        rakat: {
          en: 'Fajr 2 · Dhuhr 4 · Asr 4 · Maghrib 3 · Isha 4',
          bg: 'Фаджр 2 · Зухр 4 · Аср 4 · Магриб 3 · Иша 4',
        },
        time: {
          en: 'Each has its own window — see The 5 Prayers page.',
          bg: 'Всеки има свой времеви прозорец — виж страницата „Петте намаза“.',
        },
        how: {
          en: 'Prayed exactly as shown in the step-by-step guide, silently or aloud depending on the prayer.',
          bg: 'Кланят се точно както е показано в ръководството стъпка по стъпка, тихо или на глас според намаза.',
        },
        evidence: {
          en: "“Indeed, prayer has been decreed upon the believers a decree of specified times.” — Qur'an 4:103. The five prayers were made obligatory during the Night Journey (Sahih al-Bukhari 349).",
          bg: '„Намазът е предписан за вярващите в определено време.“ — Коран 4:103. Петте намаза са станали задължителни по време на Нощното пътешествие (Сахих ал-Бухари 349).',
        },
        deeper: {
          en: 'Missing one deliberately requires sincere repentance; missed by sleep or forgetting, it is prayed as soon as remembered — “Whoever forgets a prayer, let him pray it when he remembers it.” (Sahih al-Bukhari 597)',
          bg: 'Умишленото пропускане изисква искрено покаяние; пропуснат заради сън или забрава, намазът се кланя веднага щом си спомниш — „Който забрави намаз, нека го кланя, когато си спомни.“ (Сахих ал-Бухари 597)',
        },
      },
      {
        name: { en: "Jumu'ah — the Friday prayer", bg: 'Джума — петъчният намаз' },
        arabic: 'صَلَاةُ الْجُمُعَة',
        rakat: {
          en: "2 rak'ahs, preceded by the khutbah (sermon)",
          bg: '2 рекята, предшествани от хутбе (проповед)',
        },
        time: {
          en: 'Replaces Dhuhr on Friday, prayed in congregation.',
          bg: 'Замества Зухр в петък; кланя се с джемаат.',
        },
        how: {
          en: "Attend the khutbah silently, then pray 2 rak'ahs behind the imam (recited aloud).",
          bg: 'Изслушай хутбето мълчаливо, после кланяй 2 рекята зад имама (чете се на глас).',
        },
        evidence: {
          en: "“O you who believe! When the call is made for prayer on Friday, hasten to the remembrance of Allah and leave trade.” — Qur'an 62:9",
          bg: '„О, вярващи, когато се призове за намаза в петъчния ден, устремете се към споменаването на Аллах и оставете търговията!“ — Коран 62:9',
        },
        deeper: {
          en: 'Obligatory upon adult resident men; women, travellers and the ill may attend but pray Dhuhr otherwise. Ghusl, best clothes and reciting Surah Al-Kahf are from the Friday sunnahs.',
          bg: 'Задължителен за пълнолетните мъже, установени на мястото; жените, пътниците и болните могат да присъстват, а иначе кланят Зухр. Гусул, най-хубавите дрехи и четенето на Сура Ал-Кехф са от петъчните сунни.',
        },
      },
      {
        name: {
          en: 'Salat al-Janazah — the funeral prayer',
          bg: 'Салят ал-Дженаза — погребалният намаз',
        },
        arabic: 'صَلَاةُ الْجَنَازَة',
        rakat: {
          en: 'No ruku or sujud — 4 takbirs standing',
          bg: 'Без рукю и седжде — 4 текбира прав',
        },
        time: {
          en: 'Fard kifayah: if some of the community pray it, the rest are excused.',
          bg: 'Фарз кифае: ако част от общността го кланя, останалите са освободени.',
        },
        how: {
          en: 'Takbir 1: Al-Fatiha. Takbir 2: Salawat. Takbir 3: dua for the deceased. Takbir 4: brief pause, then one salam.',
          bg: 'Текбир 1: Ал-Фатиха. Текбир 2: Салауат. Текбир 3: дуа за починалия. Текбир 4: кратка пауза, после един селям.',
        },
        evidence: {
          en: '“Whoever attends the funeral until the prayer is offered has a qirat of reward, and whoever stays until burial has two qirats — each like Mount Uhud.” (Sahih Muslim 945)',
          bg: '„Който присъства на дженазето до намаза, има кират награда, а който остане до погребението — два кирата, всеки колкото планината Ухуд.“ (Сахих Муслим 945)',
        },
        deeper: null,
      },
    ],
  },
  {
    id: 'wajib',
    badge: 'wajib',
    label: { en: 'Wajib — Strongly required', bg: 'Уаджиб — необходими' },
    intro: {
      en: 'Prayers the Hanafi school grades just below fard; other schools count them as emphasised sunnah. Either way, the Prophet ﷺ never left them.',
      bg: 'Намази, които ханефитската школа степенува точно под фарз; другите школи ги броят за утвърдена сунна. И в двата случая Пророкът ﷺ никога не ги е изоставял.',
    },
    items: [
      {
        name: { en: 'Witr', bg: 'Витр' },
        arabic: 'صَلَاةُ الْوِتْر',
        rakat: {
          en: 'Odd number: 1, 3, 5… (3 is most common)',
          bg: 'Нечетен брой: 1, 3, 5… (най-често 3)',
        },
        time: {
          en: 'After Isha, any time up to Fajr — best as the last prayer of the night.',
          bg: 'След Иша, по всяко време до Фаджр — най-добре като последен намаз за нощта.',
        },
        how: {
          en: "Pray 2 rak'ahs then 1, or 3 together. In the last rak'ah recite Dua al-Qunut.",
          bg: 'Кланяй 2 рекята и после 1, или 3 заедно. В последния рекят прочети Дуа ал-Кунут.',
        },
        evidence: {
          en: '“Make Witr your last prayer at night.” (Sahih al-Bukhari 998). “Allah is Witr (One) and loves the odd.” (Sahih Muslim 1010 variant; Bukhari 6410)',
          bg: '„Направете Витр последния си намаз през нощта.“ (Сахих ал-Бухари 998). „Аллах е Витр (Единствен) и обича нечетното.“ (Бухари 6410)',
        },
        deeper: {
          en: 'If you fear you will not wake at night, pray Witr before sleeping (Sahih Muslim 755).',
          bg: 'Ако се боиш, че няма да се събудиш през нощта, кланяй Витр преди сън (Сахих Муслим 755).',
        },
      },
      {
        name: { en: 'The two Eid prayers', bg: 'Двата байрямски намаза' },
        arabic: 'صَلَاةُ الْعِيدَيْن',
        rakat: {
          en: "2 rak'ahs with extra takbirs, followed by a khutbah",
          bg: '2 рекята с допълнителни текбири, последвани от хутбе',
        },
        time: {
          en: 'Shortly after sunrise on Eid al-Fitr and Eid al-Adha.',
          bg: 'Малко след изгрев на Рамазан байрям и Курбан байрям.',
        },
        how: {
          en: "First rak'ah: 7 additional takbirs after the opening takbir. Second: 5 before recitation (common practice; details vary by school).",
          bg: 'Първи рекят: 7 допълнителни текбира след встъпителния. Втори: 5 преди четенето (разпространена практика; подробностите варират по школи).',
        },
        evidence: {
          en: 'The Prophet ﷺ commanded even menstruating women to come out and witness the Eid gathering (Sahih al-Bukhari 351).',
          bg: 'Пророкът ﷺ повелил дори жените в месечен цикъл да излязат и да присъстват на байрямското събиране (Сахих ал-Бухари 351).',
        },
        deeper: null,
      },
    ],
  },
  {
    id: 'sunnah',
    badge: 'sunnah',
    label: { en: 'Sunnah — The confirmed routines', bg: 'Сунна — утвърдените' },
    intro: {
      en: "As-Sunan ar-Rawatib: the prayers the Prophet ﷺ kept before and after the fard prayers. “Whoever prays twelve rak'ahs in a day and night, a house is built for him in Paradise.” (Sahih Muslim 728)",
      bg: 'Ас-Сунен ар-Рауатиб: намазите, които Пророкът ﷺ редовно кланял преди и след фарзовете. „Който кланя дванадесет рекята в денонощие, за него се построява дом в Рая.“ (Сахих Муслим 728)',
    },
    items: [
      {
        name: { en: 'The 12 Rawatib', bg: '12-те рекята рауатиб' },
        arabic: 'السُّنَن الرَّوَاتِب',
        rakat: {
          en: '2 before Fajr · 4 before + 2 after Dhuhr · 2 after Maghrib · 2 after Isha',
          bg: '2 преди Фаджр · 4 преди + 2 след Зухр · 2 след Магриб · 2 след Иша',
        },
        time: {
          en: 'Attached to the five daily prayers, in their windows.',
          bg: 'Свързани с петте ежедневни намаза, в техните времена.',
        },
        how: {
          en: "Prayed in units of two rak'ahs, individually, exactly like any other prayer.",
          bg: 'Кланят се по два рекята, самостоятелно, точно като всеки друг намаз.',
        },
        evidence: {
          en: 'Sahih Muslim 728; Jami` at-Tirmidhi 414.',
          bg: 'Сахих Муслим 728; Джами ат-Тирмизи 414.',
        },
        deeper: {
          en: "The 2 before Fajr are the most emphasised: “The two rak'ahs of Fajr are better than the world and all it contains.” (Sahih Muslim 725)",
          bg: 'Двата рекята преди Фаджр са най-подчертани: „Двата рекята на Фаджр са по-добри от света и всичко в него.“ (Сахих Муслим 725)',
        },
      },
      {
        name: { en: 'Tarawih — the Ramadan night prayer', bg: 'Терауих — нощният намаз през Рамазан' },
        arabic: 'صَلَاةُ التَّرَاوِيح',
        rakat: {
          en: 'Commonly 8 or 20, in pairs, followed by Witr',
          bg: 'Обичайно 8 или 20, по двойки, последвани от Витр',
        },
        time: {
          en: 'After Isha, every night of Ramadan.',
          bg: 'След Иша, всяка нощ през Рамазан.',
        },
        how: {
          en: 'Prayed in congregation in the masjid or at home, with long recitation.',
          bg: 'Кланя се с джемаат в джамията или у дома, с дълго четене.',
        },
        evidence: {
          en: '“Whoever stands (in prayer) in Ramadan out of faith and seeking reward, his previous sins are forgiven.” (Sahih al-Bukhari 37)',
          bg: '„Който стои (в намаз) през Рамазан с вяра и надежда за награда, предишните му грехове биват опростени.“ (Сахих ал-Бухари 37)',
        },
        deeper: null,
      },
      {
        name: {
          en: "Sunnahs that are recommended (ghayr mu'akkadah)",
          bg: 'Препоръчителни сунни (гайр муеккеде)',
        },
        arabic: 'سُنَن غَيْر مُؤَكَّدَة',
        rakat: {
          en: '4 before Asr · 2 before Maghrib · 2 before Isha',
          bg: '4 преди Аср · 2 преди Магриб · 2 преди Иша',
        },
        time: {
          en: 'Before those prayers (between the adhan and iqamah for Maghrib/Isha).',
          bg: 'Преди съответните намази (между езана и икамета за Магриб/Иша).',
        },
        how: {
          en: 'Prayed in twos, individually.',
          bg: 'Кланят се по два рекята, самостоятелно.',
        },
        evidence: {
          en: '“May Allah have mercy on a man who prays four before Asr.” (Jami` at-Tirmidhi 430). “Between every two calls (adhan and iqamah) there is a prayer, for whoever wishes.” (Sahih al-Bukhari 627)',
          bg: '„Аллах да се смили над човек, който кланя четири преди Аср.“ (Джами ат-Тирмизи 430). „Между всеки два призива (езан и икамет) има намаз — за който пожелае.“ (Сахих ал-Бухари 627)',
        },
        deeper: null,
      },
    ],
  },
  {
    id: 'nafl',
    badge: 'nafl',
    label: { en: 'Nafl — Voluntary prayers', bg: 'Нафиле — доброволни' },
    intro: {
      en: 'Extra prayers for extra nearness: “My servant continues to draw near to Me with voluntary deeds until I love him.” (Sahih al-Bukhari 6502)',
      bg: 'Допълнителни намази за допълнителна близост: „Моят раб продължава да се приближава към Мен с доброволни дела, докато го обикна.“ (Сахих ал-Бухари 6502)',
    },
    items: [
      {
        name: { en: 'Tahajjud — the night prayer', bg: 'Техеджуд — нощният намаз' },
        arabic: 'صَلَاةُ التَّهَجُّد / قِيَامُ اللَّيْل',
        rakat: {
          en: 'In pairs — the Prophet ﷺ usually prayed 8 + 3 Witr',
          bg: 'По двойки — Пророкът ﷺ обичайно кланял 8 + 3 Витр',
        },
        time: {
          en: 'After sleeping some of the night; the last third is best.',
          bg: 'След като си поспал част от нощта; последната третина е най-добра.',
        },
        how: {
          en: 'Long, unhurried recitation. End with Witr if not yet prayed.',
          bg: 'Дълго, спокойно четене. Завърши с Витр, ако още не си го кланял.',
        },
        evidence: {
          en: '“Our Lord descends every night to the lowest heaven in the last third of the night saying: Who calls upon Me, that I may answer him?” (Sahih al-Bukhari 1145). “The best prayer after the obligatory is the night prayer.” (Sahih Muslim 1163)',
          bg: '„Нашият Господ слиза всяка нощ до най-близкото небе в последната третина на нощта и казва: Кой Ме зове, за да му отговоря?“ (Сахих ал-Бухари 1145). „Най-добрият намаз след задължителните е нощният.“ (Сахих Муслим 1163)',
        },
        deeper: null,
      },
      {
        name: { en: 'Salat ad-Duha — the forenoon prayer', bg: 'Салят ад-Духа — предиобедният намаз' },
        arabic: 'صَلَاةُ الضُّحَىٰ',
        rakat: { en: '2 to 8', bg: 'От 2 до 8' },
        time: {
          en: 'From ~15–20 minutes after sunrise until shortly before Dhuhr.',
          bg: 'От ~15–20 минути след изгрев до малко преди Зухр.',
        },
        how: {
          en: 'Prayed in twos like any voluntary prayer.',
          bg: 'Кланя се по два рекята като всеки доброволен намаз.',
        },
        evidence: {
          en: "“Charity is due on every joint of your body each day… and two rak'ahs of Duha suffice for all of that.” (Sahih Muslim 720)",
          bg: '„Всеки ден за всяка става от тялото ви се дължи милостиня… и два рекята Духа са достатъчни за всичко това.“ (Сахих Муслим 720)',
        },
        deeper: null,
      },
      {
        name: {
          en: 'Salat al-Istikhara — seeking guidance',
          bg: 'Салят ал-Истихара — търсене на напътствие',
        },
        arabic: 'صَلَاةُ الاِسْتِخَارَة',
        rakat: { en: '2', bg: '2' },
        time: {
          en: 'Whenever you face a permissible decision (job, marriage, travel…).',
          bg: 'Когато си изправен пред позволено решение (работа, брак, пътуване…).',
        },
        how: {
          en: "Pray 2 voluntary rak'ahs, then recite the Istikhara dua naming your matter, and proceed with what feels facilitated.",
          bg: 'Кланяй 2 доброволни рекята, после прочети дуата за истихара, като назовеш въпроса си, и продължи с онова, което ти бъде улеснено.',
        },
        evidence: {
          en: "The Prophet ﷺ taught it to the companions “as he would teach a surah of the Qur'an.” (Sahih al-Bukhari 1166)",
          bg: 'Пророкът ﷺ я учел на сподвижниците, „както ги учел на сура от Корана“. (Сахих ал-Бухари 1166)',
        },
        deeper: {
          en: 'No dream or sign is required — istikhara is answered through facilitation and your heart settling on a course.',
          bg: 'Не се изисква сън или знамение — отговорът на истихарата идва чрез улеснение и успокояване на сърцето върху едното решение.',
        },
      },
      {
        name: {
          en: 'Salat at-Taubah — the prayer of repentance',
          bg: 'Салят ат-Тауба — намазът на покаянието',
        },
        arabic: 'صَلَاةُ التَّوْبَة',
        rakat: { en: '2', bg: '2' },
        time: {
          en: 'Any time after falling into sin — do not delay it.',
          bg: 'По всяко време след извършен грях — не го отлагай.',
        },
        how: {
          en: "Perform wudu well, pray 2 rak'ahs, then sincerely seek forgiveness (Sayyid al-Istighfar is ideal).",
          bg: 'Направи добре абдест, кланяй 2 рекята, после искрено помоли за прошка (Саййид ал-Истигфар е идеална).',
        },
        evidence: {
          en: "“There is no one who commits a sin, purifies himself well, stands and prays two rak'ahs, then asks Allah for forgiveness, except that Allah forgives him.” (Sunan Abi Dawud 1521; graded sahih) — then he ﷺ recited Qur'an 3:135.",
          bg: '„Няма човек, който да извърши грях, да се пречисти добре, да стане и да кланя два рекята, после да помоли Аллах за прошка — без Аллах да му прости.“ (Сунен Еби Дауд 1521; достоверен) — после той ﷺ прочел Коран 3:135.',
        },
        deeper: {
          en: "Conditions of taubah: stop the sin, feel true remorse, resolve never to return to it — and restore anyone's rights you violated.",
          bg: 'Условия на покаянието: прекрати греха, изпитай истинско разкаяние, реши твърдо да не се връщаш към него — и възстанови правата на всеки, когото си ощетил.',
        },
      },
      {
        name: {
          en: 'Tahiyyat al-Masjid — greeting the mosque',
          bg: 'Тахиййат ал-Месджид — поздрав към джамията',
        },
        arabic: 'تَحِيَّةُ الْمَسْجِد',
        rakat: { en: '2', bg: '2' },
        time: {
          en: 'Upon entering a mosque, before sitting down.',
          bg: 'При влизане в джамия, преди да седнеш.',
        },
        how: { en: "Two quick rak'ahs.", bg: 'Два кратки рекята.' },
        evidence: {
          en: "“When one of you enters the mosque, let him not sit until he prays two rak'ahs.” (Sahih al-Bukhari 444)",
          bg: '„Когато някой от вас влезе в джамията, да не сяда, преди да кланя два рекята.“ (Сахих ал-Бухари 444)',
        },
        deeper: null,
      },
      {
        name: { en: "Two rak'ahs after Wudu", bg: 'Два рекята след абдест' },
        arabic: 'رَكْعَتَا الْوُضُوء',
        rakat: { en: '2', bg: '2' },
        time: {
          en: 'Any time after performing wudu.',
          bg: 'По всяко време след взимане на абдест.',
        },
        how: { en: "Two rak'ahs with a present heart.", bg: 'Два рекята с присъстващо сърце.' },
        evidence: {
          en: "The Prophet ﷺ heard Bilal's footsteps in Paradise and Bilal attributed it to praying two rak'ahs after every wudu (Sahih al-Bukhari 1149).",
          bg: 'Пророкът ﷺ чул стъпките на Билял в Рая, а Билял отдал това на двата рекята, които кланял след всеки абдест (Сахих ал-Бухари 1149).',
        },
        deeper: null,
      },
      {
        name: {
          en: 'Salat al-Kusuf — the eclipse prayer',
          bg: 'Салят ал-Кусуф — намазът при затъмнение',
        },
        arabic: 'صَلَاةُ الْكُسُوف',
        rakat: {
          en: '2 (each with two rukus)',
          bg: '2 (всеки с по две рукюта)',
        },
        time: {
          en: 'During a solar or lunar eclipse.',
          bg: 'По време на слънчево или лунно затъмнение.',
        },
        how: {
          en: "Long recitation, two bowings per rak'ah, prayed in congregation.",
          bg: 'Дълго четене, по два поклона на рекят, кланя се с джемаат.',
        },
        evidence: { en: 'Sahih al-Bukhari 1044.', bg: 'Сахих ал-Бухари 1044.' },
        deeper: null,
      },
      {
        name: {
          en: 'Salat al-Istisqa — the prayer for rain',
          bg: 'Салят ал-Истиска — намазът за дъжд',
        },
        arabic: 'صَلَاةُ الاِسْتِسْقَاء',
        rakat: { en: '2', bg: '2' },
        time: {
          en: 'In drought, prayed in an open area with dua and humility.',
          bg: 'При суша, кланя се на открито с дуа и смирение.',
        },
        how: {
          en: 'Like the Eid prayer, followed by a khutbah and turning the cloak inside out.',
          bg: 'Като байрямския намаз, последван от хутбе и обръщане на връхната дреха наопаки.',
        },
        evidence: { en: 'Sahih al-Bukhari 1012.', bg: 'Сахих ал-Бухари 1012.' },
        deeper: null,
      },
    ],
  },
]
