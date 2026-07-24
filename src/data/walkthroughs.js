// Full step-by-step walkthroughs for every individual prayer.
// Standard rak'ah cycles are generated from shared bilingual fragments so
// every walkthrough stays consistent; special prayers (Janazah, Eid, Witr…)
// are written out by hand. All recitation texts live on the Duas page.

const F = {
  en: {
    prep: (name) =>
      `Prepare: you have wudu, a clean place and clothes; face the qibla and intend in your heart: ${name}.`,
    takbir:
      'Open with Takbirat al-Ihram: raise both hands to the shoulders and say “Allahu Akbar”, then place the right hand over the left on your chest.',
    rakah1: (aloud) =>
      `Rak'ah 1: quietly recite the opening dua (Subhanaka…), the ta'awwudh and basmala, then Al-Fatiha and a short surah ${aloud}.`,
    cycle:
      "Complete the rak'ah: bow in ruku (“Subhana Rabbiyal-'Adhim” ×3) → stand fully upright (“Sami' Allahu liman hamidah — Rabbana wa lakal-hamd”) → prostrate twice (“Subhana Rabbiyal-A'la” ×3 in each), sitting calmly between the two sujuds (“Rabbighfir li”).",
    rakah2: (aloud) =>
      `Rak'ah 2: rise with “Allahu Akbar” and repeat — Al-Fatiha and a surah ${aloud}, then ruku, standing, and the two sujuds as before.`,
    firstTash:
      "After the second sujud of rak'ah 2, sit for the first tashahhud (recite the tashahhud only), then rise with “Allahu Akbar”.",
    rakah3:
      "Rak'ah 3: Al-Fatiha only, silently (no extra surah), then ruku, standing and the two sujuds.",
    rakah34:
      "Rak'ahs 3 and 4: Al-Fatiha only in each, silently, each followed by its ruku, standing and two sujuds.",
    finalSit:
      'Final sitting: recite the tashahhud, the Ibrahimi salawat, the dua of refuge from the four things, and any personal dua you wish.',
    salam:
      "End with the tasleem: turn your head to the right, then to the left, saying “As-salamu 'alaykum wa rahmatullah”.",
    adhkar:
      'Remain seated for the adhkar: “Astaghfirullah” ×3, “Allahumma antas-salam…”, Ayat al-Kursi, and the 33-33-34 tasbih.',
    aloud: '(aloud if praying alone or leading; behind an imam, listen to his recitation)',
    silent: '(silently)',
    pairs:
      "Pray in sets of two rak'ahs: each pair exactly like a 2-rak'ah prayer — two rak'ahs, tashahhud, salawat, tasleem — then stand for the next pair if you wish to continue.",
  },
  bg: {
    prep: (name) =>
      `Подготовка: имаш абдест, чисто място и дрехи; обърни се към къбле и направи намерение в сърцето си: ${name}.`,
    takbir:
      'Започни с Текбирату л-ихрам: вдигни двете ръце до раменете и кажи „Аллаху Акбар“, после постави дясната ръка върху лявата на гърдите.',
    rakah1: (aloud) =>
      `Рекят 1: тихо прочети встъпителната дуа (Субханака…), тааууз и бесмеле, после Ал-Фатиха и кратка сура ${aloud}.`,
    cycle:
      'Завърши рекята: поклони се в рукю („Субхана Раббиял-Азим“ ×3) → изправи се напълно („Семиаллаху лимен хамидех — Раббана уа лякал-хамд“) → направи две седждета („Субхана Раббиял-Аля“ ×3 във всяко), със спокойно сядане между тях („Рабби-гфир ли“).',
    rakah2: (aloud) =>
      `Рекят 2: изправи се с „Аллаху Акбар“ и повтори — Ал-Фатиха и сура ${aloud}, после рукю, изправяне и двете седждета както преди.`,
    firstTash:
      'След второто седжде на рекят 2 седни за първия тешеххуд (прочети само тешеххуда), после се изправи с „Аллаху Акбар“.',
    rakah3:
      'Рекят 3: само Ал-Фатиха, тихо (без допълнителна сура), после рукю, изправяне и двете седждета.',
    rakah34:
      'Рекяти 3 и 4: само Ал-Фатиха във всеки, тихо, всеки следван от своето рукю, изправяне и две седждета.',
    finalSit:
      'Последно сядане: прочети тешеххуда, Ибрахимовия салауат, дуата за закрила от четирите неща и лична дуа по желание.',
    salam:
      'Завърши с теслим: обърни глава надясно, после наляво, казвайки „Ас-саляму алейкум уа рахматуллах“.',
    adhkar:
      'Остани седнал за азкяра: „Астагфируллах“ ×3, „Аллахумма антас-салям…“, Аят ал-Курси и тесбиха 33-33-34.',
    aloud: '(на глас, ако кланяш сам или водиш; зад имам — слушай неговото четене)',
    silent: '(тихо)',
    pairs:
      'Кланяй по двойки рекяти: всяка двойка точно като намаз от 2 рекята — два рекята, тешеххуд, салауат, теслим — после се изправи за следващата двойка, ако желаеш да продължиш.',
  },
}

// Standard 2 / 3 / 4 rak'ah prayer, per language.
function std(lang, n, name, { aloud = false, withAdhkar = true, extra = [] } = {}) {
  const f = F[lang]
  const loud = aloud ? f.aloud : f.silent
  const steps = [f.prep(name), f.takbir, f.rakah1(loud), f.cycle, f.rakah2(loud)]
  if (n === 2) {
    steps.push(f.finalSit, f.salam)
  } else {
    steps.push(f.firstTash)
    steps.push(n === 3 ? f.rakah3 : f.rakah34)
    steps.push(f.finalSit, f.salam)
  }
  if (withAdhkar) steps.push(f.adhkar)
  return [...steps, ...extra]
}

const both = (n, nameEn, nameBg, opts = {}, extraEn = [], extraBg = []) => ({
  en: std('en', n, nameEn, { ...opts, extra: extraEn }),
  bg: std('bg', n, nameBg, { ...opts, extra: extraBg }),
})

export const walkthroughs = {
  // ---------- THE FIVE FARD PRAYERS ----------
  fajr: {
    label: { en: "Fajr — 2 rak'ahs, step by step", bg: 'Фаджр — 2 рекята, стъпка по стъпка' },
    steps: both(2, "the fard of Fajr, 2 rak'ahs", 'фарзът на Фаджр, 2 рекята', { aloud: true }, [
      "Sunnah tip: pray the 2 light sunnah rak'ahs before the fard — “better than the world and all it contains” (Sahih Muslim 725).",
    ], [
      'Сунна съвет: кланяй двата леки сунна рекята преди фарза — „по-добри от света и всичко в него“ (Сахих Муслим 725).',
    ]),
  },
  dhuhr: {
    label: { en: "Dhuhr — 4 rak'ahs, step by step", bg: 'Зухр — 4 рекята, стъпка по стъпка' },
    steps: both(4, "the fard of Dhuhr, 4 rak'ahs", 'фарзът на Зухр, 4 рекята', { aloud: false }, [
      'Sunnah around it: 4 rak\'ahs before (in twos or fours) and 2 after.',
    ], [
      'Сунна около него: 4 рекята преди (по два или четири) и 2 след.',
    ]),
  },
  asr: {
    label: { en: "Asr — 4 rak'ahs, step by step", bg: 'Аср — 4 рекята, стъпка по стъпка' },
    steps: both(4, "the fard of Asr, 4 rak'ahs", 'фарзът на Аср, 4 рекята', { aloud: false }, [
      'Optional: 4 rak\'ahs before it (Jami` at-Tirmidhi 430). No sunnah after — the forbidden time follows.',
    ], [
      'По избор: 4 рекята преди него (Джами ат-Тирмизи 430). Няма сунна след — следва забраненото време.',
    ]),
  },
  maghrib: {
    label: { en: "Maghrib — 3 rak'ahs, step by step", bg: 'Магриб — 3 рекята, стъпка по стъпка' },
    steps: both(3, "the fard of Maghrib, 3 rak'ahs", 'фарзът на Магриб, 3 рекята', { aloud: true }, [
      "Note: the recitation is aloud in rak'ahs 1–2 and silent in rak'ah 3. Follow with the 2 sunnah rak'ahs.",
    ], [
      'Бележка: четенето е на глас в рекяти 1–2 и тихо в рекят 3. Последвай с двата сунна рекята.',
    ]),
  },
  isha: {
    label: { en: "Isha — 4 rak'ahs, step by step", bg: 'Иша — 4 рекята, стъпка по стъпка' },
    steps: both(4, "the fard of Isha, 4 rak'ahs", 'фарзът на Иша, 4 рекята', { aloud: true }, [
      "Note: aloud in rak'ahs 1–2, silent in 3–4. Follow with 2 sunnah rak'ahs, and seal the night with Witr.",
    ], [
      'Бележка: на глас в рекяти 1–2, тихо в 3–4. Последвай с 2 сунна рекята и запечатай нощта с Витр.',
    ]),
  },

  // ---------- OTHER FARD ----------
  jumuah: {
    label: { en: "Jumu'ah — the whole Friday routine", bg: 'Джума — целият петъчен ред' },
    steps: {
      en: [
        'Prepare from home: make ghusl, wear your best clothes, use fragrance (men), and go early (Sahih al-Bukhari 883).',
        'On the way and while waiting: send salawat abundantly and read Surah Al-Kahf (its recitation on Friday is a light between the two Fridays — al-Hakim, sahih per al-Albani).',
        "In the masjid: pray 2 rak'ahs of tahiyyat al-masjid before sitting — even if the khutbah has started (Sahih Muslim 875).",
        'Listen to both khutbahs in complete silence — even saying “quiet!” to someone forfeits the reward (Sahih al-Bukhari 934).',
        "After the iqamah, pray 2 rak'ahs of fard behind the imam. He recites aloud; you recite Al-Fatiha quietly and listen, and say “Amin” with him.",
        'The prayer itself is exactly like any 2-rak\'ah fard: two full rak\'ahs → final sitting (tashahhud, salawat, dua) → tasleem.',
        "After: the adhkar, then the sunnah — 4 rak'ahs in the masjid or 2 at home (Sahih Muslim 881).",
      ],
      bg: [
        'Подготви се от вкъщи: направи гусул, облечи най-хубавите си дрехи, сложи ухание (мъжете) и тръгни рано (Сахих ал-Бухари 883).',
        'По пътя и докато чакаш: изпращай много салауат и чети Сура Ал-Кехф (четенето ѝ в петък е светлина между двата петъка — ал-Хаким, достоверен според ал-Албани).',
        'В джамията: кланяй 2 рекята тахиййат ал-месджид, преди да седнеш — дори хутбето да е започнало (Сахих Муслим 875).',
        'Слушай двете хутбета в пълно мълчание — дори да кажеш „тихо!“ на някого, изгубваш наградата (Сахих ал-Бухари 934).',
        'След икамета кланяй 2 рекята фарз зад имама. Той чете на глас; ти чети Ал-Фатиха тихо, слушай и кажи „Амин“ с него.',
        'Самият намаз е точно като всеки фарз от 2 рекята: два пълни рекята → последно сядане (тешеххуд, салауат, дуа) → теслим.',
        'След това: азкярът, после сунната — 4 рекята в джамията или 2 у дома (Сахих Муслим 881).',
      ],
    },
  },
  janazah: {
    label: { en: 'Janazah — 4 takbirs, standing only', bg: 'Дженазе — 4 текбира, само прав' },
    steps: {
      en: [
        'Stand in rows behind the imam, who stands by the head of a man or the middle of a woman. Intend the funeral prayer. There is no ruku, sujud or sitting — the whole prayer is standing.',
        'Takbir 1 (“Allahu Akbar”, raising the hands): recite Al-Fatiha quietly.',
        'Takbir 2: recite the Ibrahimi salawat (as in the final sitting of any prayer).',
        'Takbir 3: make sincere dua for the deceased — e.g. “Allahumma-ghfir lihayyina wa mayyitina…” (O Allah, forgive our living and our dead…) (Sunan Abi Dawud 3201).',
        'Takbir 4: pause briefly (you may add general dua for the believers).',
        'End with one tasleem to the right (a second to the left is also narrated). The whole prayer takes about two minutes.',
      ],
      bg: [
        'Застани в редици зад имама, който застава при главата на мъж или в средата при жена. Направи намерение за погребалния намаз. Няма рукю, седжде и сядане — целият намаз е прав.',
        'Текбир 1 („Аллаху Акбар“ с вдигане на ръцете): прочети Ал-Фатиха тихо.',
        'Текбир 2: прочети Ибрахимовия салауат (както в последното сядане на всеки намаз).',
        'Текбир 3: направи искрена дуа за починалия — напр. „Аллахумма-гфир лихаййина уа маййитина…“ (О, Аллах, опрости на живите ни и на мъртвите ни…) (Сунен Еби Дауд 3201).',
        'Текбир 4: кратка пауза (може да добавиш обща дуа за вярващите).',
        'Завърши с един теслим надясно (предаден е и втори наляво). Целият намаз отнема около две минути.',
      ],
    },
  },

  // ---------- WAJIB ----------
  witr: {
    label: { en: 'Witr — both common ways', bg: 'Витр — двата разпространени начина' },
    steps: {
      en: [
        "Way 1 (2+1): pray 2 rak'ahs exactly like any 2-rak'ah prayer, ending with tasleem. Then pray 1 separate rak'ah: takbir → Al-Fatiha + a surah → qunut (see below) → ruku → two sujuds → sitting → tasleem.",
        "Way 2 (3 together): pray 3 rak'ahs with only one sitting at the end (do not sit after rak'ah 2, so it does not resemble Maghrib): Fatiha + surah in all three, then the final sitting and tasleem.",
        'The Sunnah surahs: Al-A\'la in the 1st, Al-Kafirun in the 2nd, Al-Ikhlas in the 3rd (Sunan an-Nasa\'i 1729).',
        "Dua al-Qunut: in the last rak'ah, raise your hands and recite “Allahumma-hdini fiman hadayt…” — before ruku (after the recitation) or after rising from ruku; both are practised. Full text on the Duas page.",
        'After tasleem say: “Subhanal-Malikil-Quddus” three times (Sunan an-Nasa\'i 1732).',
        'Timing: after Isha until dawn. Pray it before sleeping if you may not wake; make it your last prayer of the night if you will (Sahih al-Bukhari 998).',
      ],
      bg: [
        'Начин 1 (2+1): кланяй 2 рекята точно като всеки намаз от 2 рекята, завършвайки с теслим. После кланяй 1 отделен рекят: текбир → Ал-Фатиха + сура → кунут (виж долу) → рукю → две седждета → сядане → теслим.',
        'Начин 2 (3 заедно): кланяй 3 рекята само с едно сядане накрая (не сядай след рекят 2, за да не прилича на Магриб): Фатиха + сура и в трите, после последното сядане и теслим.',
        'Сунна сурите: Ал-Аля в 1-вия, Ал-Кяфирун във 2-рия, Ал-Ихляс в 3-тия (Сунен ан-Насаи 1729).',
        'Дуа ал-Кунут: в последния рекят вдигни ръце и прочети „Аллахумма-хдини фиман хадайт…“ — преди рукю (след четенето) или след изправянето от рукю; и двете се практикуват. Пълният текст е на страницата „Дуи и сури“.',
        'След теслима кажи: „Субханал-Маликил-Куддус“ три пъти (Сунен ан-Насаи 1732).',
        'Време: след Иша до зазоряване. Кланяй го преди сън, ако може да не се събудиш; направи го последния си намаз за нощта, ако ще станеш (Сахих ал-Бухари 998).',
      ],
    },
  },
  eid: {
    label: { en: 'Eid — 2 rak\'ahs with extra takbirs', bg: 'Байрям — 2 рекята с допълнителни текбири' },
    steps: {
      en: [
        'Before leaving: ghusl and best clothes. Eid al-Fitr — eat dates before going; Eid al-Adha — delay eating until after the prayer (Jami` at-Tirmidhi 542). Go saying the takbirat: “Allahu Akbar, Allahu Akbar, la ilaha illallah…”.',
        'There is no adhan, iqamah or sunnah prayer before it.',
        "Rak'ah 1: after the opening takbir, the imam says 7 additional takbirs — raise your hands with each. Then Al-Fatiha and a surah (aloud; Al-A'la is Sunnah).",
        "Complete the rak'ah normally: ruku, standing, two sujuds.",
        "Rak'ah 2: after standing, 5 additional takbirs before the recitation, then Al-Fatiha and a surah (Al-Ghashiyah is Sunnah), and the rak'ah completes normally.",
        'Final sitting and tasleem — then stay and listen to the Eid khutbah.',
        '(Details vary slightly between the schools — e.g. the Hanafi order places the extra takbirs differently. Follow your imam; all forms are valid.)',
      ],
      bg: [
        'Преди тръгване: гусул и най-хубави дрехи. Рамазан байрям — хапни фурми преди тръгване; Курбан байрям — отложи яденето до след намаза (Джами ат-Тирмизи 542). Върви, казвайки текбирите: „Аллаху Акбар, Аллаху Акбар, ля иляха илляллах…“.',
        'Няма езан, икамет и сунна намаз преди него.',
        'Рекят 1: след встъпителния текбир имамът казва 7 допълнителни текбира — вдигай ръце с всеки. После Ал-Фатиха и сура (на глас; Ал-Аля е Сунна).',
        'Завърши рекята нормално: рукю, изправяне, две седждета.',
        'Рекят 2: след изправянето — 5 допълнителни текбира преди четенето, после Ал-Фатиха и сура (Ал-Гашия е Сунна), и рекятът завършва нормално.',
        'Последно сядане и теслим — после остани и изслушай байрямското хутбе.',
        '(Подробностите леко се различават между школите — напр. ханефитският ред поставя допълнителните текбири другаде. Следвай имама си; всички форми са валидни.)',
      ],
    },
  },

  // ---------- SUNNAH ----------
  rawatib: {
    label: { en: "Any 2-rak'ah sunnah — the template", bg: 'Всеки сунна намаз от 2 рекята — шаблонът' },
    steps: both(2, "the sunnah you are praying (e.g. “2 rak'ahs of the Fajr sunnah”)", 'сунната, която кланяш (напр. „2 рекята сунна на Фаджр“)', { aloud: false, withAdhkar: false }, [
      'The 4 before Dhuhr/Asr are prayed as two pairs (or one set of four with a first tashahhud). Recitation in sunnah prayers is silent, even at night per many scholars — aloud at night is also fine.',
      'In the Fajr sunnah, the Prophet ﷺ often recited Al-Kafirun (109) and Al-Ikhlas (112) — Sahih Muslim 726.',
    ], [
      'Четирите преди Зухр/Аср се кланят като две двойки (или наведнъж четири с първи тешеххуд). Четенето в сунна намазите е тихо; през нощта според мнозина може и на глас.',
      'В сунната на Фаджр Пророкът ﷺ често четял Ал-Кяфирун (109) и Ал-Ихляс (112) — Сахих Муслим 726.',
    ]),
  },
  tarawih: {
    label: { en: 'Tarawih — the Ramadan night in practice', bg: 'Терауих — рамазанската нощ на практика' },
    steps: {
      en: [
        'Pray Isha first (Tarawih comes after it), with its 2 sunnah rak\'ahs.',
        "Tarawih is prayed in pairs: every 2 rak'ahs are a complete prayer with tashahhud and tasleem — exactly the 2-rak'ah template.",
        'After every 4 rak\'ahs, rest briefly (this pause is the “tarwihah” that gives the prayer its name).',
        'Continue for 8 or 20 rak\'ahs according to your mosque — both are established practice; the Prophet ﷺ prayed 8 long ones (Sahih al-Bukhari 1147), and 20 was the practice established under Umar (رضي الله عنه).',
        'In congregation, simply follow the imam and listen to the recitation — completing the whole Qur\'an over the month is the tradition.',
        'Finish with Witr behind the imam. If you plan to pray Tahajjud later, let the imam\'s Witr be — or pray your Witr at the end of your night.',
        '“Whoever stands with the imam until he finishes, it is recorded as praying the whole night.” (Jami` at-Tirmidhi 806)',
      ],
      bg: [
        'Първо кланяй Иша (Терауих идва след нея), с двата ѝ сунна рекята.',
        'Терауих се кланя по двойки: всеки 2 рекята са завършен намаз с тешеххуд и теслим — точно шаблонът за 2 рекята.',
        'След всеки 4 рекята почини кратко (тази пауза е „теруиха“, дала името на намаза).',
        'Продължи до 8 или 20 рекята според джамията ти — и двете са утвърдена практика; Пророкът ﷺ кланял 8 дълги (Сахих ал-Бухари 1147), а 20 е практиката, установена при Умар (радияллаху анх).',
        'С джемаат просто следвай имама и слушай четенето — традиция е за месеца да се завърши целият Коран.',
        'Завърши с Витр зад имама. Ако смяташ да кланяш Техеджуд по-късно, остави Витра на имама — или кланяй своя Витр в края на нощта си.',
        '„Който стои с имама, докато той приключи, му се записва като кланяне на цялата нощ.“ (Джами ат-Тирмизи 806)',
      ],
    },
  },

  // ---------- NAFL ----------
  tahajjud: {
    label: { en: 'Tahajjud — a night-prayer routine', bg: 'Техеджуд — ред за нощния намаз' },
    steps: {
      en: [
        'Sleep first, then rise in the night — the last third is best (set an alarm ~1.5–2 hours before Fajr).',
        'On waking: wipe sleep from your face, use the miswak/brush, make wudu, and open with the dua of waking (even simply “Alhamdulillah”).',
        "Begin with 2 light, short rak'ahs to open the night prayer (Sahih Muslim 767).",
        "Then pray in pairs — the 2-rak'ah template — with long, slow recitation: stand longer, recite what you have memorised, and let the sujud stretch with dua.",
        "The Prophet's ﷺ usual number was 8 rak'ahs (4 pairs), but even one pair counts as qiyam al-layl — quality over quantity.",
        'In the last third, dua is answered: “Who calls upon Me, that I may answer him?” (Sahih al-Bukhari 1145). Beg freely, in any language.',
        'Seal the night with Witr (1 or 3) if you have not prayed it yet.',
      ],
      bg: [
        'Първо спи, после стани през нощта — последната третина е най-добра (навий аларма ~1,5–2 часа преди Фаджр).',
        'При събуждане: избърши съня от лицето си, използвай мисуак/четка, вземи абдест и започни с дуата при събуждане (дори просто „Алхамдулиллях“).',
        'Започни с 2 леки, кратки рекята за отваряне на нощния намаз (Сахих Муслим 767).',
        'После кланяй по двойки — шаблонът за 2 рекята — с дълго, бавно четене: стой по-дълго прав, чети каквото си научил и остави седждетата да се проточат с дуа.',
        'Обичайният брой на Пророка ﷺ бил 8 рекята (4 двойки), но дори една двойка се брои за киям ал-лейл — качество пред количество.',
        'В последната третина дуата се приема: „Кой Ме зове, за да му отговоря?“ (Сахих ал-Бухари 1145). Моли свободно, на всеки език.',
        'Запечатай нощта с Витр (1 или 3), ако още не си го кланял.',
      ],
    },
  },
  duha: {
    label: { en: 'Duha — the forenoon prayer', bg: 'Духа — предиобедният намаз' },
    steps: {
      en: [
        'Wait until the sun has fully risen — about 15–20 minutes after sunrise. The best time is when the morning has warmed, before the approach of Dhuhr.',
        "Pray 2 rak'ahs using the standard 2-rak'ah template (silent recitation, any surahs).",
        "Add more in pairs if you wish — 4, 6 or 8 rak'ahs are all narrated; the Prophet ﷺ prayed 8 on the day of the conquest of Makkah (Sahih Muslim 336).",
        'Two rak\'ahs suffice as the daily charity due on every joint of your body (Sahih Muslim 720).',
      ],
      bg: [
        'Изчакай слънцето да се издигне напълно — около 15–20 минути след изгрева. Най-доброто време е когато утрото се е стоплило, преди наближаването на Зухр.',
        'Кланяй 2 рекята по стандартния шаблон за 2 рекята (тихо четене, произволни сури).',
        'Добави още по двойки, ако желаеш — предадени са 4, 6 и 8 рекята; Пророкът ﷺ кланял 8 в деня на превземането на Мека (Сахих Муслим 336).',
        'Два рекята стигат като ежедневната милостиня, дължима за всяка става на тялото ти (Сахих Муслим 720).',
      ],
    },
  },
  istikhara: {
    label: { en: 'Istikhara — prayer + dua, exactly how', bg: 'Истихара — намаз + дуа, точно как' },
    steps: {
      en: [
        'First do your homework: consult trustworthy people and weigh the matter — istikhara comes when you are ready to decide, not instead of thinking.',
        "Pray 2 voluntary rak'ahs with the standard 2-rak'ah template (any time outside the forbidden times).",
        'After the tasleem, raise your hands and recite the Istikhara dua (Sahih al-Bukhari 1166) — full text on the Duas page — naming your matter at the two indicated places (“hadhal-amr” — this matter).',
        'Then proceed with the option you lean towards. No dream or sign is required: the answer is Allah facilitating it or turning it away.',
        'You may repeat the istikhara on the same matter several times if the way is still unclear.',
      ],
      bg: [
        'Първо си свърши домашното: посъветвай се с надеждни хора и претегли въпроса — истихарата идва, когато си готов да решиш, а не вместо мисленето.',
        'Кланяй 2 доброволни рекята по стандартния шаблон за 2 рекята (по всяко време извън забранените).',
        'След теслима вдигни ръце и прочети дуата за истихара (Сахих ал-Бухари 1166) — пълният текст е на страницата „Дуи и сури“ — като назовеш въпроса си на двете отбелязани места („хазал-амр“ — това дело).',
        'После продължи с варианта, към който клониш. Не се изисква сън или знамение: отговорът е Аллах да го улесни или да го отклони.',
        'Може да повториш истихарата за същия въпрос няколко пъти, ако пътят още не е ясен.',
      ],
    },
  },
  taubah: {
    label: { en: 'Taubah — repentance in five steps', bg: 'Тауба — покаяние в пет стъпки' },
    steps: {
      en: [
        'Do not delay: the moment you realise the sin, move — delaying repentance is itself something to repent from.',
        'Make wudu, and make it well — unhurried, complete, as the hadith itself specifies (Sunan Abi Dawud 1521).',
        "Pray 2 rak'ahs with the standard 2-rak'ah template, with full presence — this prayer is your appointment with the One you are returning to.",
        'After the tasleem, seek forgiveness sincerely: Sayyid al-Istighfar (Sahih al-Bukhari 6306) is the best formula — full text on the Duas page. Weep if you can; mean it absolutely.',
        'Complete the taubah in life, not just words: stop the sin now, resolve never to return, and restore any right you took (return what was taken, apologise, repay).',
        '“…except that Allah forgives him.” (Sunan Abi Dawud 1521) — then the Prophet ﷺ recited: “And those who, when they commit an immorality or wrong themselves, remember Allah and seek forgiveness for their sins…” (Qur\'an 3:135).',
      ],
      bg: [
        'Не отлагай: в мига, в който осъзнаеш греха, действай — самото отлагане на покаянието е нещо, от което да се покаеш.',
        'Вземи абдест, и то добре — небързан, пълен, както уточнява самият хадис (Сунен Еби Дауд 1521).',
        'Кланяй 2 рекята по стандартния шаблон за 2 рекята, с пълно присъствие — този намаз е срещата ти с Онзи, при Когото се връщаш.',
        'След теслима искрено помоли за прошка: Саййид ал-Истигфар (Сахих ал-Бухари 6306) е най-добрата формула — пълният текст е на страницата „Дуи и сури“. Заплачи, ако можеш; имай го предвид напълно искрено.',
        'Довърши таубата в живота, не само с думи: спри греха сега, реши твърдо да не се връщаш и възстанови всяко отнето право (върни взетото, извини се, изплати).',
        '„…без Аллах да му прости.“ (Сунен Еби Дауд 1521) — после Пророкът ﷺ прочел: „И които, щом сторят непристойност или угнетят себе си, споменават Аллах и молят опрощение за своите грехове…“ (Коран 3:135).',
      ],
    },
  },
  twoRakahNafl: {
    label: { en: "Simple 2-rak'ah nafl (tahiyyat, after wudu…)", bg: 'Прост нафиле от 2 рекята (тахиййат, след абдест…)' },
    steps: both(2, "the nafl you are praying (e.g. “2 rak'ahs of tahiyyat al-masjid”)", 'нафилето, което кланяш (напр. „2 рекята тахиййат ал-месджид“)', { aloud: false, withAdhkar: false }, [
      'That is all — any short surahs, prayed unhurried. The same template serves tahiyyat al-masjid, the 2 after wudu, and any general nafl.',
    ], [
      'Това е всичко — произволни кратки сури, изкланяни без бързане. Същият шаблон служи за тахиййат ал-месджид, двата рекята след абдест и всяко общо нафиле.',
    ]),
  },
  kusuf: {
    label: { en: 'Kusuf — the eclipse prayer (double ruku)', bg: 'Кусуф — намазът при затъмнение (двойно рукю)' },
    steps: {
      en: [
        'When the eclipse begins, gather in congregation (or pray alone). Intend the eclipse prayer — 2 rak\'ahs, but each with two standings and two rukus.',
        "Rak'ah 1: takbir → Al-Fatiha and a LONG recitation → long ruku → rise and recite AGAIN (Fatiha + long recitation, shorter than the first) → a second ruku → rise → two long sujuds.",
        "Rak'ah 2: the same double pattern, everything slightly shorter.",
        'Final sitting and tasleem, then listen if there is a khutbah.',
        'Alongside it: increase dhikr, dua, takbir and charity until the eclipse clears (Sahih al-Bukhari 1044).',
      ],
      bg: [
        'Когато затъмнението започне, съберете се с джемаат (или кланяй сам). Направи намерение за намаза при затъмнение — 2 рекята, но всеки с по два стоежа и две рукюта.',
        'Рекят 1: текбир → Ал-Фатиха и ДЪЛГО четене → дълго рукю → изправи се и чети ОТНОВО (Фатиха + дълго четене, по-кратко от първото) → второ рукю → изправяне → две дълги седждета.',
        'Рекят 2: същият двоен модел, всичко малко по-кратко.',
        'Последно сядане и теслим, после изслушай, ако има хутбе.',
        'Наред с него: умножи зикра, дуата, текбира и милостинята, докато затъмнението премине (Сахих ал-Бухари 1044).',
      ],
    },
  },
  istisqa: {
    label: { en: 'Istisqa — praying for rain', bg: 'Истиска — намаз за дъжд' },
    steps: {
      en: [
        'The community goes out to an open area, humble and modestly dressed, having repented and given charity — rain is withheld by sins and drawn by istighfar (Qur\'an 71:10–11).',
        "Pray 2 rak'ahs like the Eid prayer (with the extra takbirs per most schools), recitation aloud.",
        'The imam delivers a khutbah dominated by istighfar and dua for rain, e.g. “Allahumma asqina al-ghayth…” (O Allah, give us rain…).',
        'The imam turns his cloak inside out facing the qibla — a sign of hoping Allah turns the state around — and all raise hands in prolonged dua (Sahih al-Bukhari 1012).',
      ],
      bg: [
        'Общността излиза на открито, смирена и скромно облечена, след покаяние и милостиня — дъждът се задържа от греховете и се привлича с истигфар (Коран 71:10–11).',
        'Кланяйте 2 рекята като байрямския намаз (с допълнителните текбири според повечето школи), с четене на глас.',
        'Имамът произнася хутбе, изпълнено с истигфар и дуа за дъжд, напр. „Аллахумма аскина ал-гайс…“ (О, Аллах, дай ни дъжд…).',
        'Имамът обръща връхната си дреха наопаки с лице към къбле — знак за надежда, че Аллах ще обърне положението — и всички вдигат ръце в продължителна дуа (Сахих ал-Бухари 1012).',
      ],
    },
  },
}

// Which walkthroughs belong to which Types-of-Salah card, keyed by the
// card's (unique, language-independent) Arabic name.
export const walkthroughsByArabic = {
  'الصَّلَوَاتُ الْخَمْس': ['fajr', 'dhuhr', 'asr', 'maghrib', 'isha'],
  'صَلَاةُ الْجُمُعَة': ['jumuah'],
  'صَلَاةُ الْجَنَازَة': ['janazah'],
  'صَلَاةُ الْوِتْر': ['witr'],
  'صَلَاةُ الْعِيدَيْن': ['eid'],
  'السُّنَن الرَّوَاتِب': ['rawatib'],
  'صَلَاةُ التَّرَاوِيح': ['tarawih'],
  'سُنَن غَيْر مُؤَكَّدَة': ['rawatib'],
  'صَلَاةُ التَّهَجُّد / قِيَامُ اللَّيْل': ['tahajjud'],
  'صَلَاةُ الضُّحَىٰ': ['duha'],
  'صَلَاةُ الاِسْتِخَارَة': ['istikhara'],
  'صَلَاةُ التَّوْبَة': ['taubah'],
  'تَحِيَّةُ الْمَسْجِد': ['twoRakahNafl'],
  'رَكْعَتَا الْوُضُوء': ['twoRakahNafl'],
  'صَلَاةُ الْكُسُوف': ['kusuf'],
  'صَلَاةُ الاِسْتِسْقَاء': ['istisqa'],
}
