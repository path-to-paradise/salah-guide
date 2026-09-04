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
  fr: {
    prep: (name) =>
      `Préparation : tu as les ablutions (wudu), un lieu et des vêtements propres ; tourne-toi vers la qibla et fais l'intention dans ton cœur : ${name}.`,
    takbir:
      "Commence par le Takbirat al-Ihram : lève les deux mains jusqu'aux épaules en disant « Allahu Akbar », puis place la main droite sur la gauche sur ta poitrine.",
    rakah1: (aloud) =>
      `Rak'ah 1 : récite silencieusement la dua d'ouverture (Subhanaka…), le ta'awwudh et la basmala, puis Al-Fatiha et une courte sourate ${aloud}.`,
    cycle:
      "Termine le rak'ah : incline-toi en ruku (« Subhana Rabbiyal-'Adhim » ×3) → redresse-toi complètement (« Sami' Allahu liman hamidah — Rabbana wa lakal-hamd ») → prosterne-toi deux fois (« Subhana Rabbiyal-A'la » ×3 à chaque fois), en t'asseyant calmement entre les deux prosternations (« Rabbighfir li »).",
    rakah2: (aloud) =>
      `Rak'ah 2 : relève-toi en disant « Allahu Akbar » et recommence — Al-Fatiha et une sourate ${aloud}, puis le ruku, le redressement et les deux prosternations comme précédemment.`,
    firstTash:
      "Après la deuxième prosternation du rak'ah 2, assieds-toi pour le premier tashahhud (récite uniquement le tashahhud), puis relève-toi en disant « Allahu Akbar ».",
    rakah3:
      "Rak'ah 3 : uniquement Al-Fatiha, en silence (sans sourate supplémentaire), puis le ruku, le redressement et les deux prosternations.",
    rakah34:
      "Rak'ahs 3 et 4 : uniquement Al-Fatiha à chaque fois, en silence, chacune suivie de son ruku, du redressement et de deux prosternations.",
    finalSit:
      "Séance finale : récite le tashahhud, le salawat ibrahimien, la dua de protection contre les quatre choses, et toute dua personnelle que tu souhaites.",
    salam:
      "Termine par le tasleem : tourne la tête vers la droite, puis vers la gauche, en disant « As-salamu 'alaykum wa rahmatullah ».",
    adhkar:
      "Reste assis pour les adhkar : « Astaghfirullah » ×3, « Allahumma antas-salam… », Ayat al-Kursi, et le tasbih 33-33-34.",
    aloud: "(à voix haute si tu pries seul ou si tu diriges ; derrière un imam, écoute sa récitation)",
    silent: "(en silence)",
    pairs:
      "Prie par paires de deux rak'ahs : chaque paire exactement comme une prière de 2 rak'ahs — deux rak'ahs, tashahhud, salawat, tasleem — puis relève-toi pour la paire suivante si tu souhaites continuer.",
  },
  de: {
    prep: (name) =>
      `Vorbereitung: Du hast die Wudu, einen sauberen Ort und saubere Kleidung; wende dich zur Qibla und fasse in deinem Herzen die Absicht: ${name}.`,
    takbir:
      "Beginne mit dem Takbirat al-Ihram: Hebe beide Hände bis zu den Schultern und sage „Allahu Akbar“, lege dann die rechte Hand über die linke auf die Brust.",
    rakah1: (aloud) =>
      `Rak'ah 1: Rezitiere leise die einleitende Dua (Subhanaka…), das Ta'awwudh und die Basmala, dann Al-Fatiha und eine kurze Sure ${aloud}.`,
    cycle:
      "Vollende den Rak'ah: verbeuge dich im Ruku („Subhana Rabbiyal-'Adhim“ ×3) → richte dich vollständig auf („Sami' Allahu liman hamidah — Rabbana wa lakal-hamd“) → verrichte zwei Sujud („Subhana Rabbiyal-A'la“ ×3 bei jedem), setze dich ruhig zwischen den beiden Sujud hin („Rabbighfir li“).",
    rakah2: (aloud) =>
      `Rak'ah 2: Erhebe dich mit „Allahu Akbar“ und wiederhole — Al-Fatiha und eine Sure ${aloud}, dann Ruku, Aufrichten und die zwei Sujud wie zuvor.`,
    firstTash:
      "Nach dem zweiten Sujud des 2. Rak'ah setze dich für den ersten Tashahhud hin (rezitiere nur den Tashahhud), erhebe dich dann mit „Allahu Akbar“.",
    rakah3:
      "Rak'ah 3: nur Al-Fatiha, leise (ohne zusätzliche Sure), dann Ruku, Aufrichten und die zwei Sujud.",
    rakah34:
      "Rak'ah 3 und 4: in jedem nur Al-Fatiha, leise, jeweils gefolgt von Ruku, Aufrichten und zwei Sujud.",
    finalSit:
      "Letztes Sitzen: rezitiere den Tashahhud, den ibrahimischen Salawat, die Dua um Schutz vor den vier Dingen, und jede persönliche Dua, die du möchtest.",
    salam:
      "Beende mit dem Tasleem: wende den Kopf nach rechts, dann nach links, und sage „As-salamu 'alaykum wa rahmatullah“.",
    adhkar:
      "Bleibe sitzen für den Adhkar: „Astaghfirullah“ ×3, „Allahumma antas-salam…“, Ayat al-Kursi und den Tasbih 33-33-34.",
    aloud: "(laut, wenn du allein betest oder vorbetest; hinter einem Imam höre seiner Rezitation zu)",
    silent: "(leise)",
    pairs:
      "Bete in Zweiergruppen von Rak'ahs: jedes Paar genau wie ein 2-Rak'ah-Gebet — zwei Rak'ah, Tashahhud, Salawat, Tasleem — erhebe dich dann für das nächste Paar, wenn du fortfahren möchtest.",
  },
  nl: {
    prep: (name) =>
      `Voorbereiding: je hebt wudu, een schone plek en schone kleding; keer je naar de qibla en maak in je hart de intentie: ${name}.`,
    takbir:
      'Begin met Takbirat al-Ihram: hef beide handen tot de schouders en zeg „Allahu Akbar", plaats dan de rechterhand over de linker op je borst.',
    rakah1: (aloud) =>
      `Rak'ah 1: reciteer zachtjes de openingsdua (Subhanaka…), de ta'awwudh en basmala, daarna Al-Fatiha en een korte surah ${aloud}.`,
    cycle:
      'Voltooi de rak\'ah: buig in ruku („Subhana Rabbiyal-\'Adhim" ×3) → kom volledig rechtop („Sami\' Allahu liman hamidah — Rabbana wa lakal-hamd") → maak twee keer sujud („Subhana Rabbiyal-A\'la" ×3 bij elke), ga rustig zitten tussen de twee sujud in („Rabbighfir li").',
    rakah2: (aloud) =>
      `Rak'ah 2: sta op met „Allahu Akbar" en herhaal — Al-Fatiha en een surah ${aloud}, dan ruku, rechtop staan en de twee sujud zoals daarvoor.`,
    firstTash:
      'Na de tweede sujud van rak\'ah 2 ga je zitten voor de eerste tashahhud (reciteer alleen de tashahhud), sta dan op met „Allahu Akbar".',
    rakah3:
      "Rak'ah 3: alleen Al-Fatiha, in stilte (geen extra surah), dan ruku, rechtop staan en de twee sujud.",
    rakah34:
      "Rak'ah 3 en 4: telkens alleen Al-Fatiha, in stilte, elk gevolgd door zijn ruku, rechtop staan en twee sujud.",
    finalSit:
      "Laatste zitting: reciteer de tashahhud, de ibrahimitische salawat, de dua om bescherming tegen de vier dingen, en elke persoonlijke dua die je wenst.",
    salam:
      'Eindig met de tasleem: draai je hoofd naar rechts, dan naar links, en zeg „As-salamu \'alaykum wa rahmatullah".',
    adhkar:
      'Blijf zitten voor de adhkar: „Astaghfirullah" ×3, „Allahumma antas-salam…", Ayat al-Kursi en de tasbih 33-33-34.',
    aloud: "(hardop als je alleen bidt of voorgaat; achter een imam, luister naar zijn recitatie)",
    silent: "(stil)",
    pairs:
      "Bid in paren van twee rak'ahs: elk paar precies zoals een gebed van 2 rak'ahs — twee rak'ahs, tashahhud, salawat, tasleem — sta dan op voor het volgende paar als je wilt doorgaan.",
  },
  tr: {
    prep: (name) =>
      `Hazırlık: abdestin var, temiz bir yer ve elbise; kıbleye dön ve kalbinden niyet et: ${name}.`,
    takbir:
      'İftitah tekbiriyle başla: her iki eli omuzlara kadar kaldır ve “Allahu Ekber” de, ardından sağ eli göğsünde sol elin üzerine koy.',
    rakah1: (aloud) =>
      `1. rekat: önce sessizce açılış duasını (Sübhaneke…), euzü ve besmeleyi, sonra Fatiha ve kısa bir sureyi ${aloud} oku.`,
    cycle:
      "Rekati tamamla: rukûya eğil (“Sübhâne Rabbiyel-Azîm” ×3) → tamamen doğrul (“Semiallahu limen hamideh — Rabbena ve lekel-hamd”) → iki secde yap (her birinde “Sübhâne Rabbiyel-A'lâ” ×3), iki secde arasında sakince otur (“Rabbiğfirli”).",
    rakah2: (aloud) =>
      `2. rekat: “Allahu Ekber” diyerek kalk ve tekrarla — Fatiha ve bir sure ${aloud}, sonra öncekiyle aynı şekilde rukû, doğrulma ve iki secde.`,
    firstTash:
      "2. rekatın ikinci secdesinden sonra ilk teşehhüd için otur (yalnızca teşehhüdü oku), sonra “Allahu Ekber” diyerek kalk.",
    rakah3:
      "3. rekat: yalnızca Fatiha, sessizce (ek sure yok), sonra rukû, doğrulma ve iki secde.",
    rakah34:
      "3. ve 4. rekatlar: her birinde yalnızca Fatiha, sessizce, her biri kendi rukûsu, doğrulması ve iki secdesiyle.",
    finalSit:
      "Son oturuş: teşehhüdü, İbrahim salavatını, dört şeyden sığınma duasını ve dilediğin kişisel duayı oku.",
    salam:
      "Selam vererek bitir: başını sağa, sonra sola çevirerek “Esselamu aleykum ve rahmetullah” de.",
    adhkar:
      "Zikirler için oturmaya devam et: “Estağfirullah” ×3, “Allahumme entes-selam…”, Ayetel-Kürsi ve 33-33-34 tesbihi.",
    aloud: "(tek başına kılıyor veya imam isen sesli; imamın arkasındaysan onun okuyuşunu dinle)",
    silent: "(sessizce)",
    pairs:
      "İkişer rekat halinde kıl: her ikili tam olarak 2 rekatlık bir namaz gibidir — iki rekat, teşehhüd, salavat, selam — devam etmek istiyorsan sonraki ikili için ayağa kalk.",
  },
  ur: {
    prep: (name) =>
      `تیاری: تمہارے پاس وضو، صاف جگہ اور صاف کپڑے ہیں؛ قبلہ رخ ہو جاؤ اور دل میں نیت کرو: ${name}۔`,
    takbir:
      'تکبیرِ تحریمہ سے آغاز کرو: دونوں ہاتھ کندھوں تک اٹھاؤ اور "اللہ اکبر" کہو، پھر دایاں ہاتھ سینے پر بائیں ہاتھ کے اوپر رکھو۔',
    rakah1: (aloud) =>
      `پہلی رکعت: خاموشی سے ثنا (سبحانک...)، تعوذ اور بسم اللہ پڑھو، پھر سورۃ الفاتحہ اور ایک مختصر سورت ${aloud}۔`,
    cycle:
      'رکعت مکمل کرو: رکوع میں جھکو ("سبحان ربی العظیم" ×۳) → مکمل طور پر سیدھے کھڑے ہو جاؤ ("سمع اللہ لمن حمدہ — ربنا ولک الحمد") → دو سجدے کرو (ہر ایک میں "سبحان ربی الاعلیٰ" ×۳)، دونوں سجدوں کے درمیان اطمینان سے بیٹھو ("رب اغفر لی")۔',
    rakah2: (aloud) =>
      `دوسری رکعت: "اللہ اکبر" کہہ کر کھڑے ہو جاؤ اور دہراؤ — سورۃ الفاتحہ اور ایک سورت ${aloud}، پھر پہلے کی طرح رکوع، قیام اور دو سجدے۔`,
    firstTash:
      'دوسری رکعت کے دوسرے سجدے کے بعد پہلے تشہد کے لیے بیٹھو (صرف تشہد پڑھو)، پھر "اللہ اکبر" کہہ کر کھڑے ہو جاؤ۔',
    rakah3:
      'تیسری رکعت: صرف سورۃ الفاتحہ، خاموشی سے (کوئی اضافی سورت نہیں)، پھر رکوع، قیام اور دو سجدے۔',
    rakah34:
      'تیسری اور چوتھی رکعت: ہر ایک میں صرف سورۃ الفاتحہ، خاموشی سے، ہر ایک کے بعد اس کا رکوع، قیام اور دو سجدے۔',
    finalSit:
      'آخری قعدہ: تشہد، درود ابراہیمی، چار چیزوں سے پناہ کی دعا، اور جو ذاتی دعا چاہو پڑھو۔',
    salam:
      'تسلیم کے ساتھ ختم کرو: سر دائیں طرف پھیرو، پھر بائیں طرف، اور کہو "السلام علیکم ورحمۃ اللہ"۔',
    adhkar:
      'اذکار کے لیے بیٹھے رہو: "استغفر اللہ" ×۳، "اللہم انت السلام..."، آیت الکرسی، اور ۳۳-۳۳-۳۴ تسبیح۔',
    aloud: '(اگر اکیلے یا امامت کر رہے ہو تو بلند آواز سے؛ امام کے پیچھے ہو تو اس کی قراءت سنو)',
    silent: '(خاموشی سے)',
    pairs:
      'دو دو رکعتوں کے جوڑوں میں پڑھو: ہر جوڑا بالکل ۲ رکعت کی نماز کی طرح ہے — دو رکعتیں، تشہد، درود، تسلیم — پھر اگر جاری رکھنا چاہو تو اگلے جوڑے کے لیے کھڑے ہو جاؤ۔',
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

const LANGS = ['en', 'bg', 'fr', 'de', 'nl', 'tr', 'ur']

// names: { en, bg, fr, de, nl, tr, ur } — the prayer's intention phrase per language.
// extras: { en, bg, fr, de, nl, tr, ur } — optional trailing note steps per language.
const both = (n, names, opts = {}, extras = {}) => {
  const result = {}
  for (const lang of LANGS) {
    result[lang] = std(lang, n, names[lang], { ...opts, extra: extras[lang] || [] })
  }
  return result
}

export const walkthroughs = {
  // ---------- THE FIVE FARD PRAYERS ----------
  fajr: {
    label: {
      en: "Fajr — 2 rak'ahs, step by step",
      bg: 'Фаджр — 2 рекята, стъпка по стъпка',
      fr: "Fajr — 2 rak'ahs, étape par étape",
      de: "Fajr — 2 Rak'ah, Schritt für Schritt",
      nl: "Fajr — 2 rak'ahs, stap voor stap",
      tr: 'Sabah — 2 rekat, adım adım',
      ur: 'فجر — ۲ رکعتیں، مرحلہ بہ مرحلہ',
    },
    steps: both(
      2,
      {
        en: "the fard of Fajr, 2 rak'ahs",
        bg: 'фарзът на Фаджр, 2 рекята',
        fr: "le fard du Fajr, 2 rak'ahs",
        de: "das Fard-Gebet von Fajr, 2 Rak'ah",
        nl: "de fard van Fajr, 2 rak'ahs",
        tr: 'Sabah namazının farzı, 2 rekat',
        ur: 'فجر کا فرض، ۲ رکعتیں',
      },
      { aloud: true },
      {
        en: [
          "Sunnah tip: pray the 2 light sunnah rak'ahs before the fard — “better than the world and all it contains” (Sahih Muslim 725).",
        ],
        bg: [
          'Сунна съвет: кланяй двата леки сунна рекята преди фарза — „по-добри от света и всичко в него“ (Сахих Муслим 725).',
        ],
        fr: [
          "Conseil sunnah : prie les 2 rak'ahs légères de sunnah avant le fard — « meilleures que le monde entier et tout ce qu'il contient » (Sahih Muslim 725).",
        ],
        de: [
          "Sunnah-Tipp: bete die 2 leichten Sunnah-Rak'ah vor dem Fard — „besser als die Welt und alles, was in ihr ist“ (Sahih Muslim 725).",
        ],
        nl: [
          'Sunnah-tip: bid de 2 lichte sunnah-rak\'ahs vóór de fard — „beter dan de wereld en alles wat erin is" (Sahih Muslim 725).',
        ],
        tr: [
          'Sünnet tavsiyesi: farzdan önce hafif 2 sünnet rekatı kıl — “dünya ve içindeki her şeyden daha hayırlıdır” (Sahih Müslim 725).',
        ],
        ur: [
          'سنت کی تجویز: فرض سے پہلے ہلکی ۲ سنت رکعتیں پڑھو — "دنیا اور اس میں موجود ہر چیز سے بہتر" (صحیح مسلم ۷۲۵)۔',
        ],
      },
    ),
  },
  dhuhr: {
    label: {
      en: "Dhuhr — 4 rak'ahs, step by step",
      bg: 'Зухр — 4 рекята, стъпка по стъпка',
      fr: "Dhuhr — 4 rak'ahs, étape par étape",
      de: "Dhuhr — 4 Rak'ah, Schritt für Schritt",
      nl: "Dhuhr — 4 rak'ahs, stap voor stap",
      tr: 'Öğle — 4 rekat, adım adım',
      ur: 'ظہر — ۴ رکعتیں، مرحلہ بہ مرحلہ',
    },
    steps: both(
      4,
      {
        en: "the fard of Dhuhr, 4 rak'ahs",
        bg: 'фарзът на Зухр, 4 рекята',
        fr: "le fard du Dhuhr, 4 rak'ahs",
        de: "das Fard-Gebet von Dhuhr, 4 Rak'ah",
        nl: "de fard van Dhuhr, 4 rak'ahs",
        tr: 'Öğle namazının farzı, 4 rekat',
        ur: 'ظہر کا فرض، ۴ رکعتیں',
      },
      { aloud: false },
      {
        en: ["Sunnah around it: 4 rak'ahs before (in twos or fours) and 2 after."],
        bg: ['Сунна около него: 4 рекята преди (по два или четири) и 2 след.'],
        fr: ['Sunnah autour : 4 rak\'ahs avant (par deux ou par quatre) et 2 après.'],
        de: ["Sunnah drumherum: 4 Rak'ah davor (zu zweit oder zu viert) und 2 danach."],
        nl: ["Sunnah eromheen: 4 rak'ahs ervoor (per twee of vier) en 2 erna."],
        tr: ['Etrafındaki sünnet: öncesinde 4 rekat (ikişer veya dörtlü) ve sonrasında 2 rekat.'],
        ur: ['اس کے ارد گرد سنت: پہلے ۴ رکعتیں (دو دو یا چار اکٹھی) اور بعد میں ۲ رکعتیں۔'],
      },
    ),
  },
  asr: {
    label: {
      en: "Asr — 4 rak'ahs, step by step",
      bg: 'Аср — 4 рекята, стъпка по стъпка',
      fr: "Asr — 4 rak'ahs, étape par étape",
      de: "Asr — 4 Rak'ah, Schritt für Schritt",
      nl: "Asr — 4 rak'ahs, stap voor stap",
      tr: 'İkindi — 4 rekat, adım adım',
      ur: 'عصر — ۴ رکعتیں، مرحلہ بہ مرحلہ',
    },
    steps: both(
      4,
      {
        en: "the fard of Asr, 4 rak'ahs",
        bg: 'фарзът на Аср, 4 рекята',
        fr: "le fard de l'Asr, 4 rak'ahs",
        de: "das Fard-Gebet von Asr, 4 Rak'ah",
        nl: "de fard van Asr, 4 rak'ahs",
        tr: 'İkindi namazının farzı, 4 rekat',
        ur: 'عصر کا فرض، ۴ رکعتیں',
      },
      { aloud: false },
      {
        en: [
          "Optional: 4 rak'ahs before it (Jami` at-Tirmidhi 430). No sunnah after — the forbidden time follows.",
        ],
        bg: [
          'По избор: 4 рекята преди него (Джами ат-Тирмизи 430). Няма сунна след — следва забраненото време.',
        ],
        fr: [
          "Optionnel : 4 rak'ahs avant (Jami` at-Tirmidhi 430). Pas de sunnah après — le temps interdit suit.",
        ],
        de: [
          "Optional: 4 Rak'ah davor (Jami` at-Tirmidhi 430). Keine Sunnah danach — die verbotene Zeit folgt.",
        ],
        nl: [
          "Optioneel: 4 rak'ahs ervoor (Jami` at-Tirmidhi 430). Geen sunnah erna — de verboden tijd volgt.",
        ],
        tr: [
          "İsteğe bağlı: öncesinde 4 rekat (Camiu't-Tirmizi 430). Sonrasında sünnet yok — yasak vakit başlar.",
        ],
        ur: [
          'اختیاری: اس سے پہلے ۴ رکعتیں (جامع ترمذی ۴۳۰)۔ بعد میں کوئی سنت نہیں — ممنوعہ وقت شروع ہو جاتا ہے۔',
        ],
      },
    ),
  },
  maghrib: {
    label: {
      en: "Maghrib — 3 rak'ahs, step by step",
      bg: 'Магриб — 3 рекята, стъпка по стъпка',
      fr: "Maghrib — 3 rak'ahs, étape par étape",
      de: "Maghrib — 3 Rak'ah, Schritt für Schritt",
      nl: "Maghrib — 3 rak'ahs, stap voor stap",
      tr: 'Akşam — 3 rekat, adım adım',
      ur: 'مغرب — ۳ رکعتیں، مرحلہ بہ مرحلہ',
    },
    steps: both(
      3,
      {
        en: "the fard of Maghrib, 3 rak'ahs",
        bg: 'фарзът на Магриб, 3 рекята',
        fr: "le fard du Maghrib, 3 rak'ahs",
        de: "das Fard-Gebet von Maghrib, 3 Rak'ah",
        nl: "de fard van Maghrib, 3 rak'ahs",
        tr: 'Akşam namazının farzı, 3 rekat',
        ur: 'مغرب کا فرض، ۳ رکعتیں',
      },
      { aloud: true },
      {
        en: [
          "Note: the recitation is aloud in rak'ahs 1–2 and silent in rak'ah 3. Follow with the 2 sunnah rak'ahs.",
        ],
        bg: [
          'Бележка: четенето е на глас в рекяти 1–2 и тихо в рекят 3. Последвай с двата сунна рекята.',
        ],
        fr: [
          "Remarque : la récitation est à voix haute dans les rak'ahs 1-2 et silencieuse dans le rak'ah 3. Poursuis avec les 2 rak'ahs de sunnah.",
        ],
        de: [
          "Hinweis: Die Rezitation ist in Rak'ah 1-2 laut und in Rak'ah 3 leise. Anschließend die 2 Sunnah-Rak'ah.",
        ],
        nl: [
          "Let op: de recitatie is hardop in rak'ah 1-2 en stil in rak'ah 3. Vervolg met de 2 sunnah-rak'ahs.",
        ],
        tr: [
          'Not: kıraat 1-2. rekatlarda sesli, 3. rekatta sessizdir. Ardından 2 sünnet rekatı kıl.',
        ],
        ur: [
          'نوٹ: قراءت پہلی اور دوسری رکعت میں بلند آواز سے اور تیسری رکعت میں خاموشی سے ہوتی ہے۔ اس کے بعد ۲ سنت رکعتیں پڑھو۔',
        ],
      },
    ),
  },
  isha: {
    label: {
      en: "Isha — 4 rak'ahs, step by step",
      bg: 'Иша — 4 рекята, стъпка по стъпка',
      fr: "Isha — 4 rak'ahs, étape par étape",
      de: "Isha — 4 Rak'ah, Schritt für Schritt",
      nl: "Isha — 4 rak'ahs, stap voor stap",
      tr: 'Yatsı — 4 rekat, adım adım',
      ur: 'عشاء — ۴ رکعتیں، مرحلہ بہ مرحلہ',
    },
    steps: both(
      4,
      {
        en: "the fard of Isha, 4 rak'ahs",
        bg: 'фарзът на Иша, 4 рекята',
        fr: "le fard de l'Isha, 4 rak'ahs",
        de: "das Fard-Gebet von Isha, 4 Rak'ah",
        nl: "de fard van Isha, 4 rak'ahs",
        tr: 'Yatsı namazının farzı, 4 rekat',
        ur: 'عشاء کا فرض، ۴ رکعتیں',
      },
      { aloud: true },
      {
        en: [
          "Note: aloud in rak'ahs 1–2, silent in 3–4. Follow with 2 sunnah rak'ahs, and seal the night with Witr.",
        ],
        bg: [
          'Бележка: на глас в рекяти 1–2, тихо в 3–4. Последвай с 2 сунна рекята и запечатай нощта с Витр.',
        ],
        fr: [
          "Remarque : à voix haute dans les rak'ahs 1-2, silencieuse dans les 3-4. Poursuis avec 2 rak'ahs de sunnah, et scelle la nuit avec le Witr.",
        ],
        de: [
          "Hinweis: laut in Rak'ah 1-2, leise in 3-4. Anschließend 2 Sunnah-Rak'ah, und beschließe die Nacht mit dem Witr.",
        ],
        nl: [
          "Let op: hardop in rak'ah 1-2, stil in 3-4. Vervolg met 2 sunnah-rak'ahs, en sluit de nacht af met de Witr.",
        ],
        tr: [
          "Not: 1-2. rekatlarda sesli, 3-4'te sessiz. Ardından 2 sünnet rekatı kıl ve geceyi Vitir ile mühürle.",
        ],
        ur: [
          'نوٹ: پہلی اور دوسری رکعت میں بلند آواز سے، تیسری اور چوتھی میں خاموشی سے۔ اس کے بعد ۲ سنت رکعتیں پڑھو، اور رات کو وتر کے ساتھ مکمل کرو۔',
        ],
      },
    ),
  },

  // ---------- OTHER FARD ----------
  jumuah: {
    label: {
      en: "Jumu'ah — the whole Friday routine",
      bg: 'Джума — целият петъчен ред',
      fr: "Jumu'ah — tout le déroulement du vendredi",
      de: "Jumu'ah — der gesamte Freitagsablauf",
      nl: "Jumu'ah — de hele vrijdagroutine",
      tr: 'Cuma — tüm Cuma günü rutini',
      ur: 'جمعہ — پورا جمعہ کا معمول',
    },
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
      fr: [
        'Prépare-toi depuis chez toi : fais le ghusl, porte tes meilleurs vêtements, mets du parfum (les hommes), et pars tôt (Sahih al-Bukhari 883).',
        'En chemin et en attendant : envoie abondamment le salawat et lis la sourate Al-Kahf (sa récitation le vendredi est une lumière entre les deux vendredis — al-Hakim, authentique selon al-Albani).',
        "À la mosquée : prie 2 rak'ahs de tahiyyat al-masjid avant de t'asseoir — même si la khutbah a commencé (Sahih Muslim 875).",
        'Écoute les deux khutbahs en silence complet — même dire « chut ! » à quelqu\'un fait perdre la récompense (Sahih al-Bukhari 934).',
        "Après l'iqamah, prie 2 rak'ahs de fard derrière l'imam. Il récite à voix haute ; toi, récite Al-Fatiha silencieusement et écoute, et dis « Amin » avec lui.",
        "La prière elle-même est exactement comme tout fard de 2 rak'ahs : deux rak'ahs complètes → séance finale (tashahhud, salawat, dua) → tasleem.",
        "Ensuite : les adhkar, puis la sunnah — 4 rak'ahs à la mosquée ou 2 à la maison (Sahih Muslim 881).",
      ],
      de: [
        'Bereite dich von zu Hause aus vor: mache Ghusl, trage deine beste Kleidung, benutze Duft (Männer) und geh früh los (Sahih al-Bukhari 883).',
        'Auf dem Weg und beim Warten: sende reichlich Salawat und lies Surah Al-Kahf (ihre Rezitation am Freitag ist ein Licht zwischen den beiden Freitagen — al-Hakim, sahih nach al-Albani).',
        "In der Moschee: bete 2 Rak'ah tahiyyat al-masjid, bevor du dich hinsetzt — auch wenn die Khutbah schon begonnen hat (Sahih Muslim 875).",
        'Höre beiden Khutbahs in völliger Stille zu — selbst wenn du zu jemandem „still!“ sagst, verlierst du die Belohnung (Sahih al-Bukhari 934).',
        'Nach der Iqamah bete 2 Rak\'ah Fard hinter dem Imam. Er rezitiert laut; du rezitierst Al-Fatiha leise und hörst zu, und sagst „Amin“ mit ihm.',
        "Das Gebet selbst ist genau wie jedes Fard-Gebet mit 2 Rak'ah: zwei volle Rak'ah → letztes Sitzen (Tashahhud, Salawat, Dua) → Tasleem.",
        "Danach: der Adhkar, dann die Sunnah — 4 Rak'ah in der Moschee oder 2 zu Hause (Sahih Muslim 881).",
      ],
      nl: [
        'Bereid je thuis voor: verricht ghusl, draag je beste kleding, gebruik geur (mannen), en ga vroeg (Sahih al-Bukhari 883).',
        'Onderweg en tijdens het wachten: stuur overvloedig salawat en lees Surah Al-Kahf (het reciteren ervan op vrijdag is een licht tussen de twee vrijdagen — al-Hakim, sahih volgens al-Albani).',
        'In de moskee: bid 2 rak\'ahs tahiyyat al-masjid voordat je gaat zitten — zelfs als de khutbah al begonnen is (Sahih Muslim 875).',
        'Luister naar beide khutbahs in volledige stilte — zelfs "stil!" zeggen tegen iemand doet de beloning verliezen (Sahih al-Bukhari 934).',
        'Na de iqamah bid je 2 rak\'ahs fard achter de imam. Hij reciteert hardop; jij reciteert Al-Fatiha stil en luistert, en zegt "Amin" met hem mee.',
        'Het gebed zelf is precies zoals elke fard van 2 rak\'ahs: twee volledige rak\'ahs → laatste zitting (tashahhud, salawat, dua) → tasleem.',
        'Daarna: de adhkar, dan de sunnah — 4 rak\'ahs in de moskee of 2 thuis (Sahih Muslim 881).',
      ],
      tr: [
        'Evden hazırlan: gusül al, en güzel elbiseni giy, güzel koku sür (erkekler) ve erken git (Sahih Buhari 883).',
        "Yolda ve beklerken: bolca salavat getir ve Kehf Suresi'ni oku (onu Cuma günü okumak iki Cuma arasında bir nur olur — el-Hakim, el-Albani'ye göre sahih).",
        "Camide: oturmadan önce 2 rekat tahiyyetü'l-mescid kıl — hutbe başlamış olsa bile (Sahih Müslim 875).",
        'Her iki hutbeyi de tam bir sessizlik içinde dinle — birine "sus!" demek bile mükafatı kaybettirir (Sahih Buhari 934).',
        'İkametten sonra imamın arkasında 2 rekat farz kıl. İmam sesli okur; sen Fatiha\'yı sessizce oku ve dinle, onunla birlikte "Amin" de.',
        'Namazın kendisi tam olarak herhangi bir 2 rekatlık farz gibidir: iki tam rekat → son oturuş (teşehhüd, salavat, dua) → selam.',
        'Sonrasında: zikirler, ardından sünnet — camide 4 rekat veya evde 2 rekat (Sahih Müslim 881).',
      ],
      ur: [
        'گھر سے تیاری کرو: غسل کرو، بہترین کپڑے پہنو، خوشبو لگاؤ (مرد حضرات)، اور جلدی جاؤ (صحیح بخاری ۸۸۳)۔',
        'راستے میں اور انتظار کے دوران: کثرت سے درود بھیجو اور سورۃ الکہف پڑھو (جمعہ کے دن اس کی تلاوت دو جمعوں کے درمیان نور ہے — الحاکم، البانی کے نزدیک صحیح)۔',
        'مسجد میں: بیٹھنے سے پہلے تحیۃ المسجد کی ۲ رکعتیں پڑھو — چاہے خطبہ شروع ہو چکا ہو (صحیح مسلم ۸۷۵)۔',
        'دونوں خطبے مکمل خاموشی سے سنو — کسی کو "خاموش!" کہنا بھی ثواب ضائع کر دیتا ہے (صحیح بخاری ۹۳۴)۔',
        'اقامت کے بعد امام کے پیچھے ۲ رکعت فرض پڑھو۔ وہ بلند آواز سے پڑھتا ہے؛ تم خاموشی سے سورۃ الفاتحہ پڑھو اور سنو، اور اس کے ساتھ "آمین" کہو۔',
        'نماز خود بالکل کسی بھی ۲ رکعت فرض کی طرح ہے: دو مکمل رکعتیں → آخری قعدہ (تشہد، درود، دعا) → تسلیم۔',
        'اس کے بعد: اذکار، پھر سنت — مسجد میں ۴ رکعتیں یا گھر میں ۲ رکعتیں (صحیح مسلم ۸۸۱)۔',
      ],
    },
  },
  janazah: {
    label: {
      en: 'Janazah — 4 takbirs, standing only',
      bg: 'Дженазе — 4 текбира, само прав',
      fr: 'Janazah — 4 takbirs, debout uniquement',
      de: 'Janazah — 4 Takbir, nur im Stehen',
      nl: 'Janazah — 4 takbirs, alleen staand',
      tr: 'Cenaze namazı — 4 tekbir, sadece ayakta',
      ur: 'جنازہ — ۴ تکبیریں، صرف کھڑے ہو کر',
    },
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
      fr: [
        "Tiens-toi en rangs derrière l'imam, qui se place à la tête d'un homme ou au milieu d'une femme. Fais l'intention de la prière funéraire. Il n'y a ni ruku, ni sujud, ni position assise — toute la prière se fait debout.",
        'Takbir 1 (« Allahu Akbar », en levant les mains) : récite Al-Fatiha silencieusement.',
        'Takbir 2 : récite le salawat ibrahimien (comme dans la séance finale de toute prière).',
        'Takbir 3 : fais une dua sincère pour le défunt — p. ex. « Allahumma-ghfir lihayyina wa mayyitina… » (Ô Allah, pardonne à nos vivants et à nos morts…) (Sunan Abi Dawud 3201).',
        'Takbir 4 : marque une brève pause (tu peux ajouter une dua générale pour les croyants).',
        "Termine par un tasleem vers la droite (un second vers la gauche est aussi rapporté). La prière entière dure environ deux minutes.",
      ],
      de: [
        'Stelle dich in Reihen hinter den Imam, der sich beim Kopf eines Mannes oder in der Mitte einer Frau aufstellt. Fasse die Absicht für das Totengebet. Es gibt kein Ruku, Sujud oder Sitzen — das ganze Gebet wird im Stehen verrichtet.',
        'Takbir 1 („Allahu Akbar“, Hände erheben): rezitiere Al-Fatiha leise.',
        'Takbir 2: rezitiere den ibrahimischen Salawat (wie im letzten Sitzen jedes Gebets).',
        'Takbir 3: mache aufrichtige Dua für den Verstorbenen — z. B. „Allahumma-ghfir lihayyina wa mayyitina…“ (O Allah, vergib unseren Lebenden und unseren Toten…) (Sunan Abi Dawud 3201).',
        'Takbir 4: halte kurz inne (du kannst allgemeine Dua für die Gläubigen hinzufügen).',
        'Beende mit einem Tasleem nach rechts (ein zweites nach links ist ebenfalls überliefert). Das gesamte Gebet dauert etwa zwei Minuten.',
      ],
      nl: [
        'Sta in rijen achter de imam, die bij het hoofd van een man of het midden van een vrouw gaat staan. Maak de intentie voor het begrafenisgebed. Er is geen ruku, sujud of zitten — het hele gebed wordt staand verricht.',
        'Takbir 1 ("Allahu Akbar", handen heffen): reciteer Al-Fatiha stil.',
        'Takbir 2: reciteer de ibrahimitische salawat (zoals in de laatste zitting van elk gebed).',
        'Takbir 3: doe een oprechte dua voor de overledene — bijv. "Allahumma-ghfir lihayyina wa mayyitina…" (O Allah, vergeef onze levenden en onze doden…) (Sunan Abi Dawud 3201).',
        'Takbir 4: pauzeer kort (je mag een algemene dua voor de gelovigen toevoegen).',
        'Eindig met één tasleem naar rechts (een tweede naar links is ook overgeleverd). Het hele gebed duurt ongeveer twee minuten.',
      ],
      tr: [
        'İmamın arkasında saflar halinde dur; imam erkek cenazesinin başı hizasında, kadın cenazesinin ise ortası hizasında durur. Cenaze namazına niyet et. Rükû, secde veya oturuş yoktur — namazın tamamı ayakta kılınır.',
        '1. Tekbir ("Allahu Ekber", elleri kaldırarak): Fatiha\'yı sessizce oku.',
        '2. Tekbir: İbrahim salavatını oku (herhangi bir namazın son oturuşundaki gibi).',
        '3. Tekbir: ölü için içtenlikle dua et — örn. "Allahumme-ğfir li hayyina ve meyyitina…" (Allah\'ım, dirilerimizi ve ölülerimizi bağışla…) (Sünen Ebu Davud 3201).',
        '4. Tekbir: kısa bir süre bekle (müminler için genel bir dua da ekleyebilirsin).',
        'Sağa tek bir selamla bitir (sola ikinci bir selam da rivayet edilmiştir). Namazın tamamı yaklaşık iki dakika sürer.',
      ],
      ur: [
        'امام کے پیچھے صفوں میں کھڑے ہو جاؤ، امام مرد کے سر کے پاس یا عورت کے درمیان کھڑا ہوتا ہے۔ جنازے کی نماز کی نیت کرو۔ اس میں کوئی رکوع، سجدہ یا بیٹھنا نہیں ہے — پوری نماز کھڑے ہو کر ادا کی جاتی ہے۔',
        'پہلی تکبیر ("اللہ اکبر"، ہاتھ اٹھا کر): خاموشی سے سورۃ الفاتحہ پڑھو۔',
        'دوسری تکبیر: درود ابراہیمی پڑھو (جیسے کسی بھی نماز کے آخری قعدے میں)۔',
        'تیسری تکبیر: میت کے لیے خلوص دل سے دعا کرو — مثلاً "اللہم اغفر لحینا و میتنا..." (اے اللہ، ہمارے زندوں اور مردوں کو بخش دے...) (سنن ابی داؤد ۳۲۰۱)۔',
        'چوتھی تکبیر: مختصر توقف کرو (مومنوں کے لیے عمومی دعا بھی شامل کر سکتے ہو)۔',
        'دائیں طرف ایک سلام کے ساتھ ختم کرو (بائیں طرف دوسرا سلام بھی مروی ہے)۔ پوری نماز تقریباً دو منٹ لیتی ہے۔',
      ],
    },
  },

  // ---------- WAJIB ----------
  witr: {
    label: {
      en: 'Witr — both common ways',
      bg: 'Витр — двата разпространени начина',
      fr: 'Witr — les deux façons courantes',
      de: 'Witr — beide gängigen Arten',
      nl: 'Witr — de twee gangbare manieren',
      tr: 'Vitir — iki yaygın yöntem',
      ur: 'وتر — دونوں مروجہ طریقے',
    },
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
      fr: [
        "Méthode 1 (2+1) : prie 2 rak'ahs exactement comme toute prière de 2 rak'ahs, en terminant par le tasleem. Puis prie 1 rak'ah séparée : takbir → Al-Fatiha + une sourate → qunut (voir ci-dessous) → ruku → deux sujud → position assise → tasleem.",
        "Méthode 2 (3 ensemble) : prie 3 rak'ahs avec une seule position assise à la fin (ne t'assieds pas après le rak'ah 2, pour ne pas ressembler au Maghrib) : Fatiha + sourate dans les trois, puis la séance finale et le tasleem.",
        "Les sourates de sunnah : Al-A'la dans la 1re, Al-Kafirun dans la 2e, Al-Ikhlas dans la 3e (Sunan an-Nasa'i 1729).",
        "Dua al-Qunut : dans la dernière rak'ah, lève les mains et récite « Allahumma-hdini fiman hadayt… » — avant le ruku (après la récitation) ou après s'être relevé du ruku ; les deux sont pratiqués. Texte complet sur la page Duas.",
        "Après le tasleem, dis : « Subhanal-Malikil-Quddus » trois fois (Sunan an-Nasa'i 1732).",
        "Moment : après Isha jusqu'à l'aube. Prie-le avant de dormir si tu risques de ne pas te réveiller ; fais-en ta dernière prière de la nuit si tu te réveilleras (Sahih al-Bukhari 998).",
      ],
      de: [
        "Methode 1 (2+1): bete 2 Rak'ah genau wie jedes 2-Rak'ah-Gebet, endend mit Tasleem. Dann bete 1 separaten Rak'ah: Takbir → Al-Fatiha + eine Sure → Qunut (siehe unten) → Ruku → zwei Sujud → Sitzen → Tasleem.",
        "Methode 2 (3 zusammen): bete 3 Rak'ah mit nur einem Sitzen am Ende (setze dich nicht nach Rak'ah 2 hin, damit es nicht wie Maghrib aussieht): Fatiha + Sure in allen drei, dann das letzte Sitzen und Tasleem.",
        "Die Sunnah-Suren: Al-A'la in der 1., Al-Kafirun in der 2., Al-Ikhlas in der 3. (Sunan an-Nasa'i 1729).",
        "Dua al-Qunut: im letzten Rak'ah, hebe die Hände und rezitiere „Allahumma-hdini fiman hadayt…“ — vor dem Ruku (nach der Rezitation) oder nach dem Aufrichten aus dem Ruku; beides wird praktiziert. Vollständiger Text auf der Duas-Seite.",
        "Nach dem Tasleem sage: „Subhanal-Malikil-Quddus“ dreimal (Sunan an-Nasa'i 1732).",
        "Zeitpunkt: nach Isha bis zur Morgendämmerung. Bete es vor dem Schlafen, wenn du eventuell nicht aufwachst; mache es zu deinem letzten Gebet der Nacht, wenn du aufwachen wirst (Sahih al-Bukhari 998).",
      ],
      nl: [
        'Manier 1 (2+1): bid 2 rak\'ahs precies zoals elk gebed van 2 rak\'ahs, eindigend met tasleem. Bid dan 1 aparte rak\'ah: takbir → Al-Fatiha + een surah → qunut (zie hieronder) → ruku → twee sujud → zitten → tasleem.',
        'Manier 2 (3 samen): bid 3 rak\'ahs met slechts één zitting aan het einde (ga niet zitten na rak\'ah 2, zodat het niet op Maghrib lijkt): Fatiha + surah in alle drie, dan de laatste zitting en tasleem.',
        'De sunnah-surahs: Al-A\'la in de 1e, Al-Kafirun in de 2e, Al-Ikhlas in de 3e (Sunan an-Nasa\'i 1729).',
        'Dua al-Qunut: in de laatste rak\'ah, hef je handen en reciteer "Allahumma-hdini fiman hadayt…" — vóór de ruku (na de recitatie) of na het opstaan uit de ruku; beide worden toegepast. Volledige tekst op de Duas-pagina.',
        'Na de tasleem zeg je: "Subhanal-Malikil-Quddus" drie keer (Sunan an-Nasa\'i 1732).',
        'Tijdstip: na Isha tot aan de dageraad. Bid het vóór het slapen als je misschien niet wakker wordt; maak het je laatste gebed van de nacht als je wel wakker wordt (Sahih al-Bukhari 998).',
      ],
      tr: [
        '1. Yol (2+1): herhangi bir 2 rekatlık namaz gibi 2 rekat kıl, selamla bitir. Sonra ayrı 1 rekat kıl: tekbir → Fatiha + bir sure → kunut (aşağıya bakın) → rükû → iki secde → oturuş → selam.',
        "2. Yol (3'ü birlikte): sonda yalnızca bir oturuşla 3 rekat kıl (Akşam namazına benzememesi için 2. rekattan sonra oturma): üçünde de Fatiha + sure, sonra son oturuş ve selam.",
        "Sünnet sureler: 1.'de A'lâ, 2.'de Kâfirûn, 3.'te İhlâs (Sünen en-Nesai 1729).",
        'Kunut duası: son rekatta ellerini kaldır ve "Allahumme-hdini fiman hedeyt…" oku — rükûdan önce (kıraatten sonra) veya rükûdan doğrulduktan sonra; her ikisi de uygulanır. Tam metin Dualar sayfasında.',
        'Selamdan sonra üç kez şunu söyle: "Sübhanel-Melikil-Kuddûs" (Sünen en-Nesai 1732).',
        "Vakti: Yatsı'dan tan yerinin ağarmasına kadar. Uyanamayabileceksen uyumadan önce kıl; uyanacaksan gecenin son namazı yap (Sahih Buhari 998).",
      ],
      ur: [
        'پہلا طریقہ (۲+۱): بالکل کسی بھی ۲ رکعت نماز کی طرح ۲ رکعتیں پڑھو، تسلیم پر ختم کرو۔ پھر ۱ الگ رکعت پڑھو: تکبیر → سورۃ الفاتحہ + ایک سورت → قنوت (نیچے دیکھیں) → رکوع → دو سجدے → بیٹھنا → تسلیم۔',
        'دوسرا طریقہ (تینوں اکٹھی): آخر میں صرف ایک بار بیٹھ کر ۳ رکعتیں پڑھو (دوسری رکعت کے بعد نہ بیٹھو، تاکہ یہ مغرب جیسی نہ لگے): تینوں میں فاتحہ + سورت، پھر آخری قعدہ اور تسلیم۔',
        'سنت سورتیں: پہلی میں الاعلیٰ، دوسری میں الکافرون، تیسری میں الاخلاص (سنن نسائی ۱۷۲۹)۔',
        'دعائے قنوت: آخری رکعت میں ہاتھ اٹھاؤ اور "اللہم اہدنی فیمن ہدیت..." پڑھو — رکوع سے پہلے (قراءت کے بعد) یا رکوع سے اٹھنے کے بعد؛ دونوں طریقے رائج ہیں۔ مکمل متن دعاؤں کے صفحے پر موجود ہے۔',
        'تسلیم کے بعد تین بار کہو: "سبحان الملک القدوس" (سنن نسائی ۱۷۳۲)۔',
        'وقت: عشاء کے بعد سے صبح صادق تک۔ اگر جاگنے کا یقین نہ ہو تو سونے سے پہلے پڑھ لو؛ اگر جاگنے کا یقین ہو تو اسے رات کی آخری نماز بناؤ (صحیح بخاری ۹۹۸)۔',
      ],
    },
  },
  eid: {
    label: {
      en: "Eid — 2 rak'ahs with extra takbirs",
      bg: 'Байрям — 2 рекята с допълнителни текбири',
      fr: "Eid — 2 rak'ahs avec takbirs supplémentaires",
      de: "Eid — 2 Rak'ah mit zusätzlichen Takbir",
      nl: "Eid — 2 rak'ahs met extra takbirs",
      tr: 'Bayram namazı — ilave tekbirlerle 2 rekat',
      ur: 'عید — اضافی تکبیروں کے ساتھ ۲ رکعتیں',
    },
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
      fr: [
        'Avant de partir : ghusl et meilleurs vêtements. Eid al-Fitr — mange des dattes avant de partir ; Eid al-Adha — retarde le repas jusqu\'après la prière (Jami` at-Tirmidhi 542). Pars en disant les takbirat : « Allahu Akbar, Allahu Akbar, la ilaha illallah… ».',
        "Il n'y a ni adhan, ni iqamah, ni prière de sunnah avant.",
        "Rak'ah 1 : après le takbir d'ouverture, l'imam dit 7 takbirs supplémentaires — lève les mains à chacun. Puis Al-Fatiha et une sourate (à voix haute ; Al-A'la est sunnah).",
        'Termine le rak\'ah normalement : ruku, position debout, deux sujud.',
        "Rak'ah 2 : après s'être levé, 5 takbirs supplémentaires avant la récitation, puis Al-Fatiha et une sourate (Al-Ghashiyah est sunnah), et le rak'ah se termine normalement.",
        "Séance finale et tasleem — puis reste et écoute la khutbah de l'Eid.",
        "(Les détails varient légèrement entre les écoles — p. ex. l'ordre hanafite place les takbirs supplémentaires différemment. Suis ton imam ; toutes les formes sont valides.)",
      ],
      de: [
        'Vor dem Aufbruch: Ghusl und beste Kleidung. Eid al-Fitr — iss Datteln vor dem Aufbruch; Eid al-Adha — verschiebe das Essen bis nach dem Gebet (Jami` at-Tirmidhi 542). Geh los und sage die Takbirat: „Allahu Akbar, Allahu Akbar, la ilaha illallah…“.',
        'Es gibt keinen Adhan, keine Iqamah und kein Sunnah-Gebet davor.',
        "Rak'ah 1: nach dem einleitenden Takbir spricht der Imam 7 zusätzliche Takbir — hebe bei jedem die Hände. Dann Al-Fatiha und eine Sure (laut; Al-A'la ist Sunnah).",
        "Vollende den Rak'ah normal: Ruku, Stehen, zwei Sujud.",
        "Rak'ah 2: nach dem Aufstehen 5 zusätzliche Takbir vor der Rezitation, dann Al-Fatiha und eine Sure (Al-Ghashiyah ist Sunnah), und der Rak'ah endet normal.",
        'Letztes Sitzen und Tasleem — dann bleibe und höre der Eid-Khutbah zu.',
        '(Details variieren leicht zwischen den Rechtsschulen — z. B. setzt die hanafitische Reihenfolge die zusätzlichen Takbir anders. Folge deinem Imam; alle Formen sind gültig.)',
      ],
      nl: [
        'Voor het vertrek: ghusl en beste kleding. Eid al-Fitr — eet dadels voordat je gaat; Eid al-Adha — stel het eten uit tot na het gebed (Jami` at-Tirmidhi 542). Ga op weg terwijl je de takbirat zegt: "Allahu Akbar, Allahu Akbar, la ilaha illallah…".',
        'Er is geen adhan, iqamah of sunnah-gebed ervoor.',
        'Rak\'ah 1: na de openingstakbir zegt de imam 7 extra takbirs — hef bij elke je handen. Daarna Al-Fatiha en een surah (hardop; Al-A\'la is sunnah).',
        'Voltooi de rak\'ah normaal: ruku, staan, twee sujud.',
        'Rak\'ah 2: na het staan, 5 extra takbirs vóór de recitatie, dan Al-Fatiha en een surah (Al-Ghashiyah is sunnah), en de rak\'ah wordt normaal voltooid.',
        'Laatste zitting en tasleem — blijf daarna en luister naar de Eid-khutbah.',
        '(Details variëren licht tussen de scholen — bijv. de hanafitische volgorde plaatst de extra takbirs anders. Volg je imam; alle vormen zijn geldig.)',
      ],
      tr: [
        'Çıkmadan önce: gusül al ve en güzel elbiseni giy. Ramazan Bayramı\'nda gitmeden önce hurma ye; Kurban Bayramı\'nda yemeği namazdan sonraya ertele (Camiu\'t-Tirmizi 542). Tekbirleri söyleyerek git: "Allahu Ekber, Allahu Ekber, la ilahe illallah…".',
        'Öncesinde ezan, kamet veya sünnet namazı yoktur.',
        "1. rekat: açılış tekbirinden sonra imam 7 ilave tekbir getirir — her birinde ellerini kaldır. Sonra Fatiha ve bir sure (sesli; A'lâ sünnettir).",
        'Rekati normal şekilde tamamla: rükû, ayakta durma, iki secde.',
        '2. rekat: ayağa kalktıktan sonra kıraatten önce 5 ilave tekbir, sonra Fatiha ve bir sure (Gaşiye sünnettir) ve rekat normal şekilde tamamlanır.',
        'Son oturuş ve selam — sonra kal ve Bayram hutbesini dinle.',
        '(Detaylar mezhepler arasında hafifçe farklılık gösterir — örn. Hanefi sıralaması ilave tekbirleri farklı yerlere koyar. İmamını takip et; tüm şekiller geçerlidir.)',
      ],
      ur: [
        'جانے سے پہلے: غسل کرو اور بہترین کپڑے پہنو۔ عید الفطر — جانے سے پہلے کھجوریں کھاؤ؛ عید الاضحیٰ — کھانا نماز کے بعد تک مؤخر کرو (جامع ترمذی ۵۴۲)۔ تکبیریں کہتے ہوئے جاؤ: "اللہ اکبر، اللہ اکبر، لا الہ الا اللہ..."۔',
        'اس سے پہلے کوئی اذان، اقامت یا سنت نماز نہیں ہے۔',
        'پہلی رکعت: ابتدائی تکبیر کے بعد امام ۷ اضافی تکبیریں کہتا ہے — ہر ایک کے ساتھ ہاتھ اٹھاؤ۔ پھر سورۃ الفاتحہ اور ایک سورت (بلند آواز سے؛ سورۃ الاعلیٰ سنت ہے)۔',
        'رکعت معمول کے مطابق مکمل کرو: رکوع، قیام، دو سجدے۔',
        'دوسری رکعت: کھڑے ہونے کے بعد قراءت سے پہلے ۵ اضافی تکبیریں، پھر سورۃ الفاتحہ اور ایک سورت (سورۃ الغاشیہ سنت ہے)، اور رکعت معمول کے مطابق مکمل ہوتی ہے۔',
        'آخری قعدہ اور تسلیم — پھر رکو اور عید کا خطبہ سنو۔',
        '(تفصیلات مسالک کے درمیان تھوڑی مختلف ہوتی ہیں — مثلاً حنفی ترتیب اضافی تکبیروں کو مختلف جگہ رکھتی ہے۔ اپنے امام کی پیروی کرو؛ تمام صورتیں درست ہیں۔)',
      ],
    },
  },

  // ---------- SUNNAH ----------
  rawatib: {
    label: {
      en: "Any 2-rak'ah sunnah — the template",
      bg: 'Всеки сунна намаз от 2 рекята — шаблонът',
      fr: "Toute sunnah de 2 rak'ahs — le modèle",
      de: "Jede 2-Rak'ah-Sunnah — die Vorlage",
      nl: "Elke sunnah van 2 rak'ahs — het sjabloon",
      tr: 'Herhangi bir 2 rekatlık sünnet — şablon',
      ur: 'کوئی بھی ۲ رکعت سنت — نمونہ',
    },
    steps: both(
      2,
      {
        en: "the sunnah you are praying (e.g. “2 rak'ahs of the Fajr sunnah”)",
        bg: 'сунната, която кланяш (напр. „2 рекята сунна на Фаджр“)',
        fr: "la sunnah que tu pries (p. ex. « 2 rak'ahs de la sunnah de Fajr »)",
        de: "die Sunnah, die du betest (z. B. „2 Rak'ah der Fajr-Sunnah“)",
        nl: 'de sunnah die je bidt (bijv. „2 rak\'ahs van de Fajr-sunnah")',
        tr: 'kıldığın sünnet (örn. “Sabah sünnetinin 2 rekatı”)',
        ur: 'وہ سنت جو تم پڑھ رہے ہو (مثلاً "فجر کی سنت کی ۲ رکعتیں")',
      },
      { aloud: false, withAdhkar: false },
      {
        en: [
          "The 4 before Dhuhr/Asr are prayed as two pairs (or one set of four with a first tashahhud). Recitation in sunnah prayers is silent, even at night per many scholars — aloud at night is also fine.",
          'In the Fajr sunnah, the Prophet ﷺ often recited Al-Kafirun (109) and Al-Ikhlas (112) — Sahih Muslim 726.',
        ],
        bg: [
          'Четирите преди Зухр/Аср се кланят като две двойки (или наведнъж четири с първи тешеххуд). Четенето в сунна намазите е тихо; през нощта според мнозина може и на глас.',
          'В сунната на Фаджр Пророкът ﷺ често четял Ал-Кяфирун (109) и Ал-Ихляс (112) — Сахих Муслим 726.',
        ],
        fr: [
          "Les 4 rak'ahs avant Dhuhr/Asr se prient en deux paires (ou en un seul bloc de quatre avec un premier tashahhud). La récitation dans les prières de sunnah est silencieuse, même la nuit selon de nombreux savants — à voix haute la nuit convient aussi.",
          "Dans la sunnah de Fajr, le Prophète ﷺ récitait souvent Al-Kafirun (109) et Al-Ikhlas (112) — Sahih Muslim 726.",
        ],
        de: [
          "Die 4 Rak'ah vor Dhuhr/Asr werden als zwei Paare gebetet (oder als ein Viererblock mit einem ersten Tashahhud). Die Rezitation in Sunnah-Gebeten ist leise, laut vielen Gelehrten auch nachts — laut in der Nacht ist ebenfalls in Ordnung.",
          "In der Fajr-Sunnah rezitierte der Prophet ﷺ oft Al-Kafirun (109) und Al-Ikhlas (112) — Sahih Muslim 726.",
        ],
        nl: [
          'De 4 rak\'ahs vóór Dhuhr/Asr worden als twee paren gebeden (of als één set van vier met een eerste tashahhud). De recitatie in sunnah-gebeden is stil, ook \'s nachts volgens veel geleerden — hardop \'s nachts is ook prima.',
          'In de Fajr-sunnah reciteerde de Profeet ﷺ vaak Al-Kafirun (109) en Al-Ikhlas (112) — Sahih Muslim 726.',
        ],
        tr: [
          "Öğle/İkindi öncesindeki 4 rekat iki ikili olarak kılınır (veya ilk teşehhütlü tek bir dörtlü olarak). Sünnet namazlarında kıraat sessizdir; birçok alime göre gece sesli okumak da caizdir.",
          'Sabah sünnetinde Peygamber ﷺ genellikle Kâfirûn (109) ve İhlâs (112) surelerini okurdu — Sahih Müslim 726.',
        ],
        ur: [
          'ظہر/عصر سے پہلے کی ۴ رکعتیں دو دو کر کے پڑھی جاتی ہیں (یا ایک ساتھ چار، پہلے تشہد کے ساتھ)۔ سنت نمازوں میں قراءت خاموشی سے ہوتی ہے، بہت سے علماء کے نزدیک رات میں بھی — رات میں بلند آواز سے پڑھنا بھی درست ہے۔',
          'فجر کی سنت میں نبی ﷺ اکثر سورۃ الکافرون (۱۰۹) اور سورۃ الاخلاص (۱۱۲) پڑھتے تھے — صحیح مسلم ۷۲۶۔',
        ],
      },
    ),
  },
  tarawih: {
    label: {
      en: 'Tarawih — the Ramadan night in practice',
      bg: 'Терауих — рамазанската нощ на практика',
      fr: 'Tarawih — la nuit du Ramadan en pratique',
      de: 'Tarawih — die Ramadan-Nacht in der Praxis',
      nl: 'Tarawih — de ramadannacht in de praktijk',
      tr: 'Teravih — Ramazan gecesi uygulamada',
      ur: 'تراویح — رمضان کی رات عملی طور پر',
    },
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
      fr: [
        "Prie d'abord Isha (le Tarawih vient après), avec ses 2 rak'ahs de sunnah.",
        "Le Tarawih se prie par paires : chaque 2 rak'ahs forment une prière complète avec tashahhud et tasleem — exactement le modèle de 2 rak'ahs.",
        'Après chaque 4 rak\'ahs, repose-toi brièvement (cette pause est le « tarwihah » qui donne son nom à la prière).',
        "Continue pour 8 ou 20 rak'ahs selon ta mosquée — les deux sont des pratiques établies ; le Prophète ﷺ priait 8 rak'ahs longues (Sahih al-Bukhari 1147), et 20 était la pratique établie sous Umar (رضي الله عنه).",
        "En congrégation, suis simplement l'imam et écoute la récitation — achever tout le Coran au cours du mois est la tradition.",
        "Termine par le Witr derrière l'imam. Si tu comptes prier le Tahajjud plus tard, laisse le Witr de l'imam suffire — ou prie ton Witr à la fin de ta nuit.",
        "« Quiconque se tient avec l'imam jusqu'à ce qu'il termine, il lui est inscrit comme ayant prié toute la nuit. » (Jami` at-Tirmidhi 806)",
      ],
      de: [
        'Bete zuerst Isha (Tarawih kommt danach), mit seinen 2 Sunnah-Rak\'ah.',
        "Tarawih wird paarweise gebetet: je 2 Rak'ah sind ein vollständiges Gebet mit Tashahhud und Tasleem — genau die 2-Rak'ah-Vorlage.",
        'Nach jeweils 4 Rak\'ah ruhe kurz aus (diese Pause ist die „Tarwihah“, die dem Gebet seinen Namen gibt).',
        "Fahre fort für 8 oder 20 Rak'ah, je nach deiner Moschee — beides ist etablierte Praxis; der Prophet ﷺ betete 8 lange (Sahih al-Bukhari 1147), und 20 war die unter Umar (رضي الله عنه) etablierte Praxis.",
        "In der Gemeinschaft folge einfach dem Imam und höre der Rezitation zu — die Tradition ist, den gesamten Koran über den Monat zu vollenden.",
        "Beende mit dem Witr hinter dem Imam. Wenn du später Tahajjud beten willst, lass es beim Witr des Imams bewenden — oder bete deinen Witr am Ende deiner Nacht.",
        '„Wer mit dem Imam steht, bis er fertig ist, dem wird es aufgeschrieben, als hätte er die ganze Nacht gebetet.“ (Jami` at-Tirmidhi 806)',
      ],
      nl: [
        'Bid eerst Isha (Tarawih komt daarna), met zijn 2 sunnah-rak\'ahs.',
        'Tarawih wordt in paren gebeden: elke 2 rak\'ahs vormen een compleet gebed met tashahhud en tasleem — precies het sjabloon van 2 rak\'ahs.',
        'Rust na elke 4 rak\'ahs kort uit (deze pauze is de "tarwihah" die het gebed zijn naam geeft).',
        'Ga door tot 8 of 20 rak\'ahs, afhankelijk van jouw moskee — beide zijn gevestigde praktijk; de Profeet ﷺ bad 8 lange (Sahih al-Bukhari 1147), en 20 was de praktijk die onder Umar (رضي الله عنه) werd vastgesteld.',
        'Volg in gemeenschap gewoon de imam en luister naar de recitatie — het is traditie om de hele Koran over de maand te voltooien.',
        'Eindig met de Witr achter de imam. Als je later Tahajjud wilt bidden, laat dan de Witr van de imam volstaan — of bid je eigen Witr aan het einde van je nacht.',
        '"Wie met de imam blijft staan totdat hij klaar is, voor hem wordt het genoteerd alsof hij de hele nacht heeft gebeden." (Jami` at-Tirmidhi 806)',
      ],
      tr: [
        "Önce Yatsı'yı kıl (Teravih ondan sonra gelir), 2 sünnet rekatıyla birlikte.",
        'Teravih ikişerli kılınır: her 2 rekat, teşehhüd ve selamıyla tam bir namazdır — tam olarak 2 rekat şablonu.',
        'Her 4 rekattan sonra kısaca dinlen (bu mola, namaza adını veren "terviha"dır).',
        "Camiine göre 8 veya 20 rekata devam et — ikisi de yerleşik uygulamadır; Peygamber ﷺ 8 uzun rekat kılardı (Sahih Buhari 1147), 20 rekat ise Ömer (رضي الله عنه) döneminde yerleşen uygulamaydı.",
        'Cemaatte sadece imamı takip et ve kıraati dinle — ay boyunca Kur\'an\'ın tamamını hatmetmek gelenektir.',
        "İmamın arkasında Vitir ile bitir. Daha sonra Teheccüd kılmayı planlıyorsan, imamın Vitrini yeterli say — ya da kendi Vitrini gecenin sonunda kıl.",
        '"Kim imamla birlikte namaz bitene kadar durursa, ona bütün geceyi namazla geçirmiş gibi yazılır." (Camiu\'t-Tirmizi 806)',
      ],
      ur: [
        'پہلے عشاء پڑھو (تراویح اس کے بعد آتی ہے)، اس کی ۲ سنت رکعتوں کے ساتھ۔',
        'تراویح جوڑوں میں پڑھی جاتی ہے: ہر ۲ رکعتیں تشہد اور تسلیم کے ساتھ ایک مکمل نماز ہیں — بالکل ۲ رکعت کا نمونہ۔',
        'ہر ۴ رکعتوں کے بعد مختصر آرام کرو (یہی وقفہ "ترویحہ" ہے جس سے اس نماز کا نام پڑا)۔',
        'اپنی مسجد کے مطابق ۸ یا ۲۰ رکعتیں جاری رکھو — دونوں مستند طریقے ہیں؛ نبی ﷺ ۸ لمبی رکعتیں پڑھتے تھے (صحیح بخاری ۱۱۴۷)، اور ۲۰ رکعتیں حضرت عمر (رضی اللہ عنہ) کے دور میں رائج ہوئیں۔',
        'جماعت میں صرف امام کی پیروی کرو اور قراءت سنو — پورے مہینے میں پورا قرآن مکمل کرنا روایت ہے۔',
        'امام کے پیچھے وتر کے ساتھ ختم کرو۔ اگر بعد میں تہجد پڑھنے کا ارادہ ہو تو امام کے وتر پر اکتفا کرو — یا اپنی رات کے آخر میں اپنا وتر پڑھو۔',
        '"جو شخص امام کے ساتھ کھڑا رہے یہاں تک کہ وہ ختم کرے، اس کے لیے پوری رات کی نماز لکھی جاتی ہے۔" (جامع ترمذی ۸۰۶)',
      ],
    },
  },

  // ---------- NAFL ----------
  tahajjud: {
    label: {
      en: 'Tahajjud — a night-prayer routine',
      bg: 'Техеджуд — ред за нощния намаз',
      fr: 'Tahajjud — un rituel de prière nocturne',
      de: 'Tahajjud — ein Ablauf für das Nachtgebet',
      nl: 'Tahajjud — een routine voor het nachtgebed',
      tr: 'Teheccüd — bir gece namazı rutini',
      ur: 'تہجد — رات کی نماز کا معمول',
    },
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
      fr: [
        'Dors d\'abord, puis lève-toi pendant la nuit — le dernier tiers est le meilleur (règle une alarme ~1,5-2 heures avant Fajr).',
        'Au réveil : essuie le sommeil de ton visage, utilise le miswak/une brosse, fais le wudu, et commence par la dua du réveil (même simplement « Alhamdulillah »).',
        "Commence par 2 rak'ahs légères et courtes pour ouvrir la prière nocturne (Sahih Muslim 767).",
        "Puis prie par paires — le modèle de 2 rak'ahs — avec une récitation longue et lente : reste plus longtemps debout, récite ce que tu as mémorisé, et laisse le sujud s'étirer avec la dua.",
        "Le nombre habituel du Prophète ﷺ était de 8 rak'ahs (4 paires), mais même une seule paire compte comme qiyam al-layl — la qualité prime sur la quantité.",
        'Dans le dernier tiers, la dua est exaucée : « Qui M\'invoque, afin que Je lui réponde ? » (Sahih al-Bukhari 1145). Implore librement, dans n\'importe quelle langue.',
        "Scelle la nuit avec le Witr (1 ou 3) si tu ne l'as pas encore prié.",
      ],
      de: [
        'Schlafe zuerst, dann stehe in der Nacht auf — das letzte Drittel ist am besten (stelle einen Wecker ~1,5-2 Stunden vor Fajr).',
        'Beim Aufwachen: wische den Schlaf aus deinem Gesicht, benutze den Miswak/eine Bürste, mache Wudu, und beginne mit der Dua des Erwachens (auch einfach nur „Alhamdulillah“).',
        "Beginne mit 2 leichten, kurzen Rak'ah, um das Nachtgebet zu eröffnen (Sahih Muslim 767).",
        "Bete dann paarweise — die 2-Rak'ah-Vorlage — mit langer, langsamer Rezitation: stehe länger, rezitiere, was du auswendig gelernt hast, und lass den Sujud sich mit Dua ausdehnen.",
        "Die übliche Anzahl des Propheten ﷺ war 8 Rak'ah (4 Paare), aber selbst ein Paar zählt als Qiyam al-Layl — Qualität vor Quantität.",
        'Im letzten Drittel wird Dua erhört: „Wer ruft Mich an, dass Ich ihm antworte?“ (Sahih al-Bukhari 1145). Bitte frei, in jeder Sprache.',
        'Beschließe die Nacht mit dem Witr (1 oder 3), falls du ihn noch nicht gebetet hast.',
      ],
      nl: [
        'Slaap eerst, sta dan op in de nacht — het laatste derde deel is het beste (zet een wekker ~1,5-2 uur vóór Fajr).',
        'Bij het ontwaken: veeg de slaap uit je gezicht, gebruik de miswak/een borstel, verricht wudu, en begin met de dua van het ontwaken (zelfs simpelweg "Alhamdulillah").',
        "Begin met 2 lichte, korte rak'ahs om het nachtgebed te openen (Sahih Muslim 767).",
        "Bid daarna in paren — het sjabloon van 2 rak'ahs — met lange, langzame recitatie: sta langer, reciteer wat je uit je hoofd kent, en laat de sujud zich uitstrekken met dua.",
        "Het gebruikelijke aantal van de Profeet ﷺ was 8 rak'ahs (4 paren), maar zelfs één paar telt als qiyam al-layl — kwaliteit boven kwantiteit.",
        'In het laatste derde deel wordt dua verhoord: "Wie roept Mij aan, opdat Ik hem antwoord?" (Sahih al-Bukhari 1145). Smeek vrijelijk, in elke taal.',
        'Sluit de nacht af met de Witr (1 of 3) als je die nog niet hebt gebeden.',
      ],
      tr: [
        "Önce uyu, sonra gecenin bir vaktinde kalk — son üçte biri en iyisidir (Fajr'dan yaklaşık 1,5-2 saat önce alarm kur).",
        'Uyandığında: yüzündeki uykuyu sil, misvak/fırça kullan, abdest al ve uyanma duasıyla başla (sadece "Elhamdülillah" bile olsa).',
        'Gece namazını açmak için hafif ve kısa 2 rekatla başla (Sahih Müslim 767).',
        "Sonra ikişerli kıl — 2 rekat şablonu — uzun ve yavaş bir kıraatle: daha uzun ayakta dur, ezberlediğini oku ve secdeleri dua ile uzat.",
        "Peygamber'in ﷺ olağan sayısı 8 rekattı (4 ikili), ama tek bir ikili bile kıyamu'l-leyl sayılır — nicelikten önce nitelik.",
        'Son üçte birde dua kabul edilir: "Kim Bana dua eder ki ona icabet edeyim?" (Sahih Buhari 1145). Herhangi bir dilde özgürce yalvar.',
        'Henüz kılmadıysan geceyi Vitir (1 veya 3) ile mühürle.',
      ],
      ur: [
        'پہلے سو جاؤ، پھر رات کو اٹھو — آخری تہائی سب سے بہتر ہے (فجر سے تقریباً ڈیڑھ سے دو گھنٹے پہلے الارم لگاؤ)۔',
        'جاگنے پر: چہرے سے نیند صاف کرو، مسواک/برش استعمال کرو، وضو کرو، اور جاگنے کی دعا سے آغاز کرو (چاہے صرف "الحمد للہ" ہی کیوں نہ ہو)۔',
        'رات کی نماز شروع کرنے کے لیے ہلکی، مختصر ۲ رکعتوں سے آغاز کرو (صحیح مسلم ۷۶۷)۔',
        'پھر جوڑوں میں پڑھو — ۲ رکعت کا نمونہ — لمبی، آہستہ قراءت کے ساتھ: زیادہ دیر کھڑے رہو، جو یاد ہے وہ پڑھو، اور سجدوں کو دعا کے ساتھ طویل ہونے دو۔',
        'نبی ﷺ کی معمول کی تعداد ۸ رکعتیں (۴ جوڑے) تھی، لیکن ایک جوڑا بھی قیام اللیل شمار ہوتا ہے — مقدار سے زیادہ معیار اہم ہے۔',
        'آخری تہائی میں دعا قبول ہوتی ہے: "کون ہے جو مجھے پکارے تاکہ میں اسے جواب دوں؟" (صحیح بخاری ۱۱۴۵)۔ کسی بھی زبان میں کھل کر دعا مانگو۔',
        'اگر ابھی تک نہیں پڑھی تو وتر (۱ یا ۳) کے ساتھ رات مکمل کرو۔',
      ],
    },
  },
  duha: {
    label: {
      en: 'Duha — the forenoon prayer',
      bg: 'Духа — предиобедният намаз',
      fr: 'Duha — la prière de la matinée',
      de: 'Duha — das Vormittagsgebet',
      nl: 'Duha — het voormiddaggebed',
      tr: 'Duha — kuşluk namazı',
      ur: 'چاشت — صبح کے وقت کی نماز',
    },
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
      fr: [
        "Attends que le soleil se soit complètement levé — environ 15-20 minutes après le lever. Le meilleur moment est quand la matinée s'est réchauffée, avant l'approche de Dhuhr.",
        "Prie 2 rak'ahs en utilisant le modèle standard de 2 rak'ahs (récitation silencieuse, sourates au choix).",
        "Ajoutes-en davantage par paires si tu le souhaites — 4, 6 ou 8 rak'ahs sont toutes rapportées ; le Prophète ﷺ en a prié 8 le jour de la conquête de la Mecque (Sahih Muslim 336).",
        'Deux rak\'ahs suffisent comme l\'aumône quotidienne due pour chaque articulation de ton corps (Sahih Muslim 720).',
      ],
      de: [
        'Warte, bis die Sonne vollständig aufgegangen ist — etwa 15-20 Minuten nach Sonnenaufgang. Die beste Zeit ist, wenn der Morgen sich erwärmt hat, vor dem Herannahen von Dhuhr.',
        "Bete 2 Rak'ah nach der Standard-2-Rak'ah-Vorlage (leise Rezitation, beliebige Suren).",
        "Füge nach Belieben paarweise mehr hinzu — 8, 6 oder 4 Rak'ah sind alle überliefert; der Prophet ﷺ betete 8 am Tag der Eroberung Mekkas (Sahih Muslim 336).",
        'Zwei Rak\'ah genügen als die tägliche Spende, die für jedes Gelenk deines Körpers fällig ist (Sahih Muslim 720).',
      ],
      nl: [
        'Wacht tot de zon volledig is opgekomen — ongeveer 15-20 minuten na zonsopgang. De beste tijd is wanneer de ochtend is opgewarmd, vóór de nadering van Dhuhr.',
        "Bid 2 rak'ahs volgens het standaard sjabloon van 2 rak'ahs (stille recitatie, willekeurige surahs).",
        "Voeg er in paren meer toe als je wilt — 4, 6 of 8 rak'ahs zijn allemaal overgeleverd; de Profeet ﷺ bad er 8 op de dag van de verovering van Mekka (Sahih Muslim 336).",
        'Twee rak\'ahs volstaan als de dagelijkse liefdadigheid die verschuldigd is voor elk gewricht van je lichaam (Sahih Muslim 720).',
      ],
      tr: [
        "Güneş tamamen doğana kadar bekle — gün doğumundan yaklaşık 15-20 dakika sonra. En iyi vakit, sabah ısındıktan sonra, Öğle'nin yaklaşmasından önceki vakittir.",
        'Standart 2 rekat şablonunu kullanarak 2 rekat kıl (sessiz kıraat, herhangi sureler).',
        "İstersen ikişerli olarak daha fazla ekle — 4, 6 veya 8 rekat hepsi rivayet edilmiştir; Peygamber ﷺ Mekke'nin fethedildiği gün 8 rekat kıldı (Sahih Müslim 336).",
        'İki rekat, vücudunun her eklemi için gereken günlük sadaka yerine geçer (Sahih Müslim 720).',
      ],
      ur: [
        'سورج مکمل طور پر طلوع ہونے تک انتظار کرو — طلوع آفتاب کے تقریباً ۱۵-۲۰ منٹ بعد۔ بہترین وقت وہ ہے جب صبح گرم ہو چکی ہو، ظہر کے قریب آنے سے پہلے۔',
        'معیاری ۲ رکعت کے نمونے کے مطابق ۲ رکعتیں پڑھو (خاموش قراءت، کوئی بھی سورتیں)۔',
        'اگر چاہو تو جوڑوں میں مزید بڑھاؤ — ۴، ۶ یا ۸ رکعتیں سب مروی ہیں؛ نبی ﷺ نے مکہ کی فتح کے دن ۸ رکعتیں پڑھیں (صحیح مسلم ۳۳۶)۔',
        'دو رکعتیں تمہارے جسم کے ہر جوڑ پر واجب روزانہ صدقے کے لیے کافی ہیں (صحیح مسلم ۷۲۰)۔',
      ],
    },
  },
  istikhara: {
    label: {
      en: 'Istikhara — prayer + dua, exactly how',
      bg: 'Истихара — намаз + дуа, точно как',
      fr: 'Istikhara — prière + dua, exactement comment',
      de: 'Istikhara — Gebet + Dua, genau wie',
      nl: 'Istikhara — gebed + dua, precies hoe',
      tr: 'İstihare — namaz + dua, tam olarak nasıl',
      ur: 'استخارہ — نماز + دعا، بالکل کیسے',
    },
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
      fr: [
        "Fais d'abord ton travail préparatoire : consulte des personnes de confiance et pèse la question — l'istikhara vient quand tu es prêt à décider, pas à la place de la réflexion.",
        "Prie 2 rak'ahs volontaires avec le modèle standard de 2 rak'ahs (à tout moment en dehors des heures interdites).",
        "Après le tasleem, lève les mains et récite la dua de l'Istikhara (Sahih al-Bukhari 1166) — texte complet sur la page Duas — en nommant ta question aux deux endroits indiqués (« hadhal-amr » — cette affaire).",
        "Poursuis ensuite avec l'option vers laquelle tu penches. Aucun rêve ni aucun signe n'est requis : la réponse est qu'Allah la facilite ou l'écarte.",
        "Tu peux répéter l'istikhara sur la même question plusieurs fois si la voie n'est toujours pas claire.",
      ],
      de: [
        'Mache zuerst deine Hausaufgaben: berate dich mit vertrauenswürdigen Menschen und wäge die Angelegenheit ab — Istikhara kommt, wenn du bereit bist zu entscheiden, nicht anstelle des Nachdenkens.',
        "Bete 2 freiwillige Rak'ah nach der Standard-2-Rak'ah-Vorlage (zu jeder Zeit außerhalb der verbotenen Zeiten).",
        'Nach dem Tasleem hebe die Hände und rezitiere die Istikhara-Dua (Sahih al-Bukhari 1166) — vollständiger Text auf der Duas-Seite — indem du deine Angelegenheit an den zwei angegebenen Stellen nennst („hadhal-amr“ — diese Angelegenheit).',
        'Fahre dann mit der Option fort, zu der du neigst. Kein Traum oder Zeichen ist erforderlich: die Antwort ist, dass Allah es erleichtert oder abwendet.',
        'Du kannst die Istikhara zur selben Angelegenheit mehrmals wiederholen, wenn der Weg noch unklar ist.',
      ],
      nl: [
        'Doe eerst je huiswerk: raadpleeg betrouwbare mensen en weeg de kwestie af — istikhara komt wanneer je klaar bent om te beslissen, niet in plaats van nadenken.',
        "Bid 2 vrijwillige rak'ahs volgens het standaard sjabloon van 2 rak'ahs (op elk moment buiten de verboden tijden).",
        'Reciteer na de tasleem, met geheven handen, de Istikhara-dua (Sahih al-Bukhari 1166) — volledige tekst op de Duas-pagina — waarbij je jouw kwestie noemt op de twee aangegeven plaatsen ("hadhal-amr" — deze zaak).',
        'Ga daarna verder met de optie waar je naar neigt. Er is geen droom of teken vereist: het antwoord is dat Allah het vergemakkelijkt of afwendt.',
        'Je mag de istikhara voor dezelfde kwestie meerdere keren herhalen als de weg nog onduidelijk is.',
      ],
      tr: [
        'Önce ödevini yap: güvenilir kişilere danış ve meseleyi tart — istihare, düşünmenin yerine değil, karar vermeye hazır olduğunda gelir.',
        "Standart 2 rekat şablonuyla 2 rekat nafile kıl (yasak vakitler dışında herhangi bir zamanda).",
        'Selamdan sonra ellerini kaldır ve istihare duasını oku (Sahih Buhari 1166) — tam metin Dualar sayfasında — meseleni belirtilen iki yerde adlandırarak ("hazel-emr" — bu iş).',
        "Sonra eğilim duyduğun seçenekle devam et. Rüya veya işaret gerekmez: cevap, Allah'ın onu kolaylaştırması ya da uzaklaştırmasıdır.",
        'Yol hâlâ belirsizse aynı mesele için istihareyi birkaç kez tekrarlayabilirsin.',
      ],
      ur: [
        'پہلے اپنا ہوم ورک کرو: قابل اعتماد لوگوں سے مشورہ کرو اور معاملے کو تولو — استخارہ اس وقت آتا ہے جب تم فیصلہ کرنے کے لیے تیار ہو، سوچنے کی جگہ نہیں لیتا۔',
        'معیاری ۲ رکعت کے نمونے کے مطابق ۲ نفل رکعتیں پڑھو (ممنوعہ اوقات کے علاوہ کسی بھی وقت)۔',
        'تسلیم کے بعد ہاتھ اٹھاؤ اور استخارے کی دعا پڑھو (صحیح بخاری ۱۱۶۶) — مکمل متن دعاؤں کے صفحے پر — اپنے معاملے کا نام دونوں مقررہ جگہوں پر لو ("ہذا الامر" — یہ معاملہ)۔',
        'پھر جس طرف تمہارا رجحان ہو اس کے مطابق آگے بڑھو۔ کسی خواب یا نشانی کی ضرورت نہیں: جواب یہ ہے کہ اللہ اسے آسان بنا دے یا پھیر دے۔',
        'اگر راستہ ابھی بھی واضح نہ ہو تو تم اسی معاملے پر استخارہ کئی بار دہرا سکتے ہو۔',
      ],
    },
  },
  taubah: {
    label: {
      en: 'Taubah — repentance in five steps',
      bg: 'Тауба — покаяние в пет стъпки',
      fr: 'Taubah — le repentir en cinq étapes',
      de: 'Taubah — Reue in fünf Schritten',
      nl: 'Taubah — berouw in vijf stappen',
      tr: 'Tövbe — beş adımda tövbe',
      ur: 'توبہ — پانچ مراحل میں توبہ',
    },
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
      fr: [
        'Ne tarde pas : dès l\'instant où tu prends conscience du péché, agis — retarder le repentir est en soi quelque chose dont il faut se repentir.',
        'Fais le wudu, et fais-le bien — sans hâte, complet, comme le hadith lui-même le précise (Sunan Abi Dawud 1521).',
        "Prie 2 rak'ahs avec le modèle standard de 2 rak'ahs, en pleine présence — cette prière est ton rendez-vous avec Celui vers qui tu reviens.",
        'Après le tasleem, cherche sincèrement le pardon : Sayyid al-Istighfar (Sahih al-Bukhari 6306) est la meilleure formule — texte complet sur la page Duas. Pleure si tu le peux ; ressens-le pleinement.',
        'Accomplis la taubah dans la vie, pas seulement en paroles : arrête le péché maintenant, résous de ne jamais y revenir, et restitue tout droit que tu as pris (rends ce qui a été pris, excuse-toi, rembourse).',
        '« …sauf qu\'Allah lui pardonne. » (Sunan Abi Dawud 1521) — puis le Prophète ﷺ récita : « Et ceux qui, lorsqu\'ils commettent une turpitude ou se font du tort à eux-mêmes, se souviennent d\'Allah et demandent pardon pour leurs péchés… » (Coran 3:135).',
      ],
      de: [
        'Zögere nicht: sobald du dir der Sünde bewusst wirst, handle — das Aufschieben der Reue ist selbst etwas, wofür man Reue zeigen muss.',
        'Mache Wudu, und mache es gut — ohne Eile, vollständig, wie der Hadith selbst es festlegt (Sunan Abi Dawud 1521).',
        "Bete 2 Rak'ah nach der Standard-2-Rak'ah-Vorlage, mit voller Präsenz — dieses Gebet ist deine Begegnung mit Dem, zu Dem du zurückkehrst.",
        'Nach dem Tasleem suche aufrichtig um Vergebung: Sayyid al-Istighfar (Sahih al-Bukhari 6306) ist die beste Formel — vollständiger Text auf der Duas-Seite. Weine, wenn du kannst; meine es absolut ernst.',
        'Vollende die Taubah im Leben, nicht nur in Worten: beende die Sünde jetzt, beschließe, nie zurückzukehren, und stelle jedes genommene Recht wieder her (gib zurück, was genommen wurde, entschuldige dich, zahle es zurück).',
        '„…außer dass Allah ihm vergibt.“ (Sunan Abi Dawud 1521) — dann rezitierte der Prophet ﷺ: „Und diejenigen, die, wenn sie eine Unsittlichkeit begehen oder sich selbst Unrecht tun, Allahs gedenken und um Vergebung für ihre Sünden bitten…“ (Koran 3:135).',
      ],
      nl: [
        'Stel het niet uit: op het moment dat je je de zonde realiseert, handel — het uitstellen van berouw is zelf iets waarvoor je berouw moet tonen.',
        'Verricht wudu, en doe het goed — zonder haast, volledig, zoals de hadith zelf specificeert (Sunan Abi Dawud 1521).',
        "Bid 2 rak'ahs volgens het standaard sjabloon van 2 rak'ahs, met volledige aandacht — dit gebed is jouw afspraak met Degene naar Wie je terugkeert.",
        'Zoek na de tasleem oprecht om vergeving: Sayyid al-Istighfar (Sahih al-Bukhari 6306) is de beste formule — volledige tekst op de Duas-pagina. Huil als je kunt; meen het absoluut.',
        'Voltooi de taubah in het leven, niet alleen met woorden: stop nu met de zonde, besluit nooit terug te keren, en herstel elk recht dat je hebt weggenomen (geef terug wat is genomen, verontschuldig je, betaal terug).',
        '"…behalve dat Allah hem vergeeft." (Sunan Abi Dawud 1521) — daarna reciteerde de Profeet ﷺ: "En zij die, wanneer ze een onzedelijkheid begaan of zichzelf onrecht aandoen, Allah gedenken en vergeving vragen voor hun zonden…" (Koran 3:135).',
      ],
      tr: [
        'Geciktirme: günahı fark ettiğin an harekete geç — tövbeyi geciktirmek de başlı başına tövbe edilmesi gereken bir şeydir.',
        'Abdest al, ve güzelce al — acele etmeden, eksiksiz, hadisin kendisinin belirttiği gibi (Sünen Ebu Davud 1521).',
        'Standart 2 rekat şablonuyla tam bir huzurla 2 rekat kıl — bu namaz, kendisine döndüğün Zat ile randevundur.',
        'Selamdan sonra içtenlikle af dile: Seyyidü\'l-İstiğfar (Sahih Buhari 6306) en iyi formüldür — tam metin Dualar sayfasında. Yapabiliyorsan ağla; tamamen içinden gelerek söyle.',
        'Tövbeyi sadece sözle değil, hayatta da tamamla: günahı şimdi bırak, asla dönmemeye karar ver ve aldığın her hakkı geri ver (alınanı iade et, özür dile, öde).',
        '"…Allah\'ın onu bağışlaması hariç." (Sünen Ebu Davud 1521) — sonra Peygamber ﷺ şunu okudu: "Ve onlar ki, bir kötülük işledikleri ya da kendilerine zulmettikleri zaman Allah\'ı anarlar ve günahları için bağışlanma dilerler…" (Kur\'an 3:135).',
      ],
      ur: [
        'تاخیر نہ کرو: جس لمحے گناہ کا احساس ہو، فوراً حرکت میں آ جاؤ — توبہ میں تاخیر کرنا خود ایک ایسی چیز ہے جس سے توبہ کرنی چاہیے۔',
        'وضو کرو، اور اچھی طرح کرو — بغیر جلدی کے، مکمل، جیسا کہ خود حدیث میں بیان ہوا ہے (سنن ابی داؤد ۱۵۲۱)۔',
        'معیاری ۲ رکعت کے نمونے کے مطابق پوری توجہ کے ساتھ ۲ رکعتیں پڑھو — یہ نماز اس ذات سے تمہاری ملاقات ہے جس کی طرف تم لوٹ رہے ہو۔',
        'تسلیم کے بعد خلوص دل سے مغفرت طلب کرو: سید الاستغفار (صحیح بخاری ۶۳۰۶) بہترین دعا ہے — مکمل متن دعاؤں کے صفحے پر ہے۔ اگر رو سکو تو روؤ؛ پورے دل سے اس کا مطلب سمجھو۔',
        'توبہ کو صرف الفاظ میں نہیں، زندگی میں مکمل کرو: ابھی گناہ چھوڑ دو، کبھی نہ لوٹنے کا عزم کرو، اور جو حق لیا تھا وہ واپس کرو (جو لیا تھا وہ لوٹاؤ، معافی مانگو، ادائیگی کرو)۔',
        '"...سوائے اس کے کہ اللہ اسے معاف کر دے۔" (سنن ابی داؤد ۱۵۲۱) — پھر نبی ﷺ نے یہ پڑھا: "اور وہ لوگ جو جب کوئی بے حیائی کا کام کر بیٹھیں یا اپنی جانوں پر ظلم کر لیں تو اللہ کو یاد کرتے ہیں اور اپنے گناہوں کی معافی مانگتے ہیں..." (قرآن ۳:۱۳۵)۔',
      ],
    },
  },
  twoRakahNafl: {
    label: {
      en: "Simple 2-rak'ah nafl (tahiyyat, after wudu…)",
      bg: 'Прост нафиле от 2 рекята (тахиййат, след абдест…)',
      fr: "Nafl simple de 2 rak'ahs (tahiyyat, après le wudu…)",
      de: "Einfaches 2-Rak'ah-Nafl (tahiyyat, nach der Wudu…)",
      nl: "Eenvoudig nafl van 2 rak'ahs (tahiyyat, na wudu…)",
      tr: 'Basit 2 rekatlık nafile (tahiyyet, abdestten sonra…)',
      ur: 'سادہ ۲ رکعت نفل (تحیہ، وضو کے بعد...)',
    },
    steps: both(
      2,
      {
        en: "the nafl you are praying (e.g. “2 rak'ahs of tahiyyat al-masjid”)",
        bg: 'нафилето, което кланяш (напр. „2 рекята тахиййат ал-месджид“)',
        fr: "le nafl que tu pries (p. ex. « 2 rak'ahs de tahiyyat al-masjid »)",
        de: "das Nafl-Gebet, das du betest (z. B. „2 Rak'ah tahiyyat al-masjid“)",
        nl: 'het nafl-gebed dat je bidt (bijv. „2 rak\'ahs van tahiyyat al-masjid")',
        tr: 'kıldığın nafile (örn. “tahiyyetü\'l-mescidin 2 rekatı”)',
        ur: 'وہ نفل جو تم پڑھ رہے ہو (مثلاً "تحیۃ المسجد کی ۲ رکعتیں")',
      },
      { aloud: false, withAdhkar: false },
      {
        en: [
          'That is all — any short surahs, prayed unhurried. The same template serves tahiyyat al-masjid, the 2 after wudu, and any general nafl.',
        ],
        bg: [
          'Това е всичко — произволни кратки сури, изкланяни без бързане. Същият шаблон служи за тахиййат ал-месджид, двата рекята след абдест и всяко общо нафиле.',
        ],
        fr: [
          "C'est tout — n'importe quelles courtes sourates, priées sans hâte. Le même modèle sert pour tahiyyat al-masjid, les 2 rak'ahs après le wudu, et tout nafl général.",
        ],
        de: [
          "Das ist alles — beliebige kurze Suren, ohne Eile gebetet. Dieselbe Vorlage dient für tahiyyat al-masjid, die 2 nach der Wudu, und jedes allgemeine Nafl-Gebet.",
        ],
        nl: [
          "Dat is alles — willekeurige korte surahs, zonder haast gebeden. Hetzelfde sjabloon dient voor tahiyyat al-masjid, de 2 na wudu, en elk algemeen nafl-gebed.",
        ],
        tr: [
          "Bu kadar — herhangi kısa sureler, acele etmeden kılınır. Aynı şablon tahiyyetü'l-mescid, abdestten sonraki 2 rekat ve her genel nafile için geçerlidir.",
        ],
        ur: [
          'بس اتنا ہی — کوئی بھی مختصر سورتیں، بغیر جلدی کے پڑھی جائیں۔ یہی طریقہ تحیۃ المسجد، وضو کے بعد کی ۲ رکعتوں، اور ہر عام نفل کے لیے کارآمد ہے۔',
        ],
      },
    ),
  },
  kusuf: {
    label: {
      en: 'Kusuf — the eclipse prayer (double ruku)',
      bg: 'Кусуф — намазът при затъмнение (двойно рукю)',
      fr: "Kusuf — la prière de l'éclipse (double ruku)",
      de: 'Kusuf — das Finsternisgebet (doppeltes Ruku)',
      nl: 'Kusuf — het verduisteringsgebed (dubbele ruku)',
      tr: 'Küsuf — güneş/ay tutulması namazı (çift rükû)',
      ur: 'کسوف — گرہن کی نماز (دوہرا رکوع)',
    },
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
      fr: [
        "Quand l'éclipse commence, rassemblez-vous en congrégation (ou prie seul). Fais l'intention de la prière de l'éclipse — 2 rak'ahs, mais chacune avec deux positions debout et deux rukus.",
        "Rak'ah 1 : takbir → Al-Fatiha et une LONGUE récitation → long ruku → relève-toi et récite À NOUVEAU (Fatiha + longue récitation, plus courte que la première) → un deuxième ruku → relève-toi → deux longs sujud.",
        "Rak'ah 2 : le même schéma double, tout légèrement plus court.",
        "Séance finale et tasleem, puis écoute s'il y a une khutbah.",
        'En parallèle : augmente le dhikr, la dua, le takbir et l\'aumône jusqu\'à ce que l\'éclipse se dissipe (Sahih al-Bukhari 1044).',
      ],
      de: [
        'Wenn die Finsternis beginnt, versammelt euch in Gemeinschaft (oder bete allein). Fasse die Absicht für das Finsternisgebet — 2 Rak\'ah, aber jeder mit zwei Stehpositionen und zwei Ruku.',
        "Rak'ah 1: Takbir → Al-Fatiha und eine LANGE Rezitation → langes Ruku → erhebe dich und rezitiere ERNEUT (Fatiha + lange Rezitation, kürzer als die erste) → ein zweites Ruku → erhebe dich → zwei lange Sujud.",
        "Rak'ah 2: dasselbe doppelte Muster, alles etwas kürzer.",
        'Letztes Sitzen und Tasleem, dann höre zu, falls es eine Khutbah gibt.',
        'Daneben: vermehre Dhikr, Dua, Takbir und Almosen, bis die Finsternis sich auflöst (Sahih al-Bukhari 1044).',
      ],
      nl: [
        'Wanneer de verduistering begint, verzamel je in gemeenschap (of bid alleen). Maak de intentie voor het verduisteringsgebed — 2 rak\'ahs, maar elk met twee keer staan en twee keer ruku.',
        'Rak\'ah 1: takbir → Al-Fatiha en een LANGE recitatie → lange ruku → sta op en reciteer OPNIEUW (Fatiha + lange recitatie, korter dan de eerste) → een tweede ruku → opstaan → twee lange sujud.',
        'Rak\'ah 2: hetzelfde dubbele patroon, alles iets korter.',
        'Laatste zitting en tasleem, luister dan als er een khutbah is.',
        'Daarnaast: vermeerder dhikr, dua, takbir en liefdadigheid totdat de verduistering voorbij is (Sahih al-Bukhari 1044).',
      ],
      tr: [
        'Tutulma başladığında cemaatle toplanın (veya tek başına kıl). Tutulma namazına niyet et — 2 rekat, ama her biri iki ayakta duruş ve iki rükûlu.',
        '1. rekat: tekbir → Fatiha ve UZUN bir kıraat → uzun rükû → doğrul ve TEKRAR oku (Fatiha + uzun kıraat, ilkinden kısa) → ikinci bir rükû → doğrul → iki uzun secde.',
        '2. rekat: aynı çift desen, her şey biraz daha kısa.',
        'Son oturuş ve selam, sonra bir hutbe varsa dinle.',
        'Bunun yanında: tutulma açılana kadar zikri, duayı, tekbiri ve sadakayı artır (Sahih Buhari 1044).',
      ],
      ur: [
        'جب گرہن شروع ہو تو جماعت میں جمع ہو جاؤ (یا اکیلے پڑھو)۔ گرہن کی نماز کی نیت کرو — ۲ رکعتیں، لیکن ہر ایک میں دو قیام اور دو رکوع۔',
        'پہلی رکعت: تکبیر → سورۃ الفاتحہ اور ایک لمبی قراءت → لمبا رکوع → اٹھو اور دوبارہ پڑھو (فاتحہ + لمبی قراءت، پہلی سے مختصر) → دوسرا رکوع → اٹھو → دو لمبے سجدے۔',
        'دوسری رکعت: وہی دوہرا انداز، ہر چیز تھوڑی مختصر۔',
        'آخری قعدہ اور تسلیم، پھر اگر خطبہ ہو تو سنو۔',
        'اس کے ساتھ: گرہن ختم ہونے تک ذکر، دعا، تکبیر اور صدقہ بڑھاؤ (صحیح بخاری ۱۰۴۴)۔',
      ],
    },
  },
  istisqa: {
    label: {
      en: 'Istisqa — praying for rain',
      bg: 'Истиска — намаз за дъжд',
      fr: 'Istisqa — prier pour la pluie',
      de: 'Istisqa — um Regen beten',
      nl: 'Istisqa — bidden om regen',
      tr: 'İstiska — yağmur duası namazı',
      ur: 'استسقاء — بارش کے لیے دعا',
    },
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
      fr: [
        "La communauté sort dans un lieu ouvert, humble et modestement vêtue, après s'être repentie et avoir donné l'aumône — la pluie est retenue par les péchés et attirée par l'istighfar (Coran 71:10-11).",
        "Priez 2 rak'ahs comme la prière de l'Eid (avec les takbirs supplémentaires selon la plupart des écoles), récitation à voix haute.",
        "L'imam prononce une khutbah dominée par l'istighfar et la dua pour la pluie, p. ex. « Allahumma asqina al-ghayth… » (Ô Allah, donne-nous la pluie…).",
        "L'imam retourne son manteau à l'envers face à la qibla — signe d'espérer qu'Allah renverse la situation — et tous lèvent les mains dans une dua prolongée (Sahih al-Bukhari 1012).",
      ],
      de: [
        'Die Gemeinschaft geht hinaus an einen offenen Ort, demütig und bescheiden gekleidet, nachdem sie bereut und Almosen gegeben hat — Regen wird durch Sünden zurückgehalten und durch Istighfar herbeigezogen (Koran 71:10-11).',
        "Betet 2 Rak'ah wie das Eid-Gebet (mit den zusätzlichen Takbir nach den meisten Rechtsschulen), laute Rezitation.",
        'Der Imam hält eine Khutbah, die von Istighfar und Dua um Regen geprägt ist, z. B. „Allahumma asqina al-ghayth…“ (O Allah, gib uns Regen…).',
        'Der Imam wendet seinen Umhang zur Qibla gerichtet nach innen — ein Zeichen der Hoffnung, dass Allah die Lage wendet — und alle heben die Hände zu einer verlängerten Dua (Sahih al-Bukhari 1012).',
      ],
      nl: [
        'De gemeenschap trekt naar een open plek, nederig en bescheiden gekleed, na berouw te hebben getoond en liefdadigheid te hebben gegeven — regen wordt tegengehouden door zonden en aangetrokken door istighfar (Koran 71:10-11).',
        'Bid 2 rak\'ahs zoals het Eid-gebed (met de extra takbirs volgens de meeste scholen), hardop reciteren.',
        'De imam houdt een khutbah die gedomineerd wordt door istighfar en dua om regen, bijv. "Allahumma asqina al-ghayth…" (O Allah, geef ons regen…).',
        'De imam keert zijn mantel binnenstebuiten, gericht naar de qibla — een teken van hoop dat Allah de situatie omkeert — en allen heffen de handen in langdurige dua (Sahih al-Bukhari 1012).',
      ],
      tr: [
        'Topluluk açık bir alana çıkar, alçakgönüllü ve sade giyimli, tövbe edip sadaka vererek — yağmur günahlarla tutulur ve istiğfarla çekilir (Kur\'an 71:10-11).',
        "Bayram namazı gibi (çoğu mezhebe göre ilave tekbirlerle) 2 rekat kılın, kıraat sesli.",
        'İmam, istiğfar ve yağmur duasının hakim olduğu bir hutbe verir, örn. "Allahumme eskına\'l-gays…" (Allah\'ım, bize yağmur ver…).',
        'İmam kıbleye dönerek cübbesini ters çevirir — Allah\'ın durumu tersine çevirmesini umma işareti — ve herkes uzun bir dua ile ellerini kaldırır (Sahih Buhari 1012).',
      ],
      ur: [
        'برادری کھلی جگہ پر نکلتی ہے، عاجزی اور سادگی سے ملبوس، توبہ اور صدقہ دینے کے بعد — بارش گناہوں کی وجہ سے روکی جاتی ہے اور استغفار سے کھنچی آتی ہے (قرآن ۷۱:۱۰-۱۱)۔',
        'عید کی نماز کی طرح ۲ رکعتیں پڑھو (اکثر مسالک کے مطابق اضافی تکبیروں کے ساتھ)، قراءت بلند آواز سے۔',
        'امام ایک خطبہ دیتا ہے جس میں استغفار اور بارش کی دعا غالب ہوتی ہے، مثلاً "اللہم اسقنا الغیث..." (اے اللہ، ہمیں بارش عطا فرما...)۔',
        'امام قبلہ رخ ہو کر اپنی چادر الٹ دیتا ہے — یہ امید کی علامت ہے کہ اللہ حالت بدل دے — اور سب طویل دعا میں ہاتھ اٹھاتے ہیں (صحیح بخاری ۱۰۱۲)۔',
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
