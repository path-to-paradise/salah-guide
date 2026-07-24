// Istinja (cleansing with water), istijmar (wiping), and keeping the body
// and clothes pure for prayer. Sources: Sahih al-Bukhari, Sahih Muslim and
// the Sunan collections via sunnah.com.

export const toiletDuas = [
  {
    id: 'enter-toilet',
    title: { en: 'Before entering the toilet', bg: 'Преди влизане в тоалетната' },
    occasion: {
      en: 'Said before stepping in (left foot first).',
      bg: 'Казва се преди влизане (с левия крак).',
    },
    arabic: 'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْخُبُثِ وَالْخَبَائِثِ',
    transliteration: {
      en: "Allahumma inni a'udhu bika minal-khubuthi wal-khaba'ith.",
      bg: 'Аллахумма инни аузу бика минал-хубуси уал-хабаис.',
    },
    translation: {
      en: 'O Allah, I seek refuge in You from the male and female devils.',
      bg: 'О, Аллах, търся закрила при Теб от злите духове — мъжки и женски.',
    },
    source: { en: 'Sahih al-Bukhari 142; Sahih Muslim 375', bg: 'Сахих ал-Бухари 142; Сахих Муслим 375' },
  },
  {
    id: 'exit-toilet',
    title: { en: 'After leaving the toilet', bg: 'След излизане от тоалетната' },
    occasion: {
      en: 'Said after stepping out (right foot first).',
      bg: 'Казва се след излизане (с десния крак).',
    },
    arabic: 'غُفْرَانَكَ',
    transliteration: { en: 'Ghufranak.', bg: 'Гуфранак.' },
    translation: {
      en: 'I ask You (O Allah) for Your forgiveness.',
      bg: 'Моля Те (о, Аллах) за Твоята прошка.',
    },
    source: { en: 'Sunan Abi Dawud 30; Jami` at-Tirmidhi 7', bg: 'Сунен Еби Дауд 30; Джами ат-Тирмизи 7' },
  },
]

export const adab = [
  {
    title: { en: 'Enter left foot, leave right foot', bg: 'Влизай с ляв крак, излизай с десен' },
    detail: {
      en: 'The right side is preferred for honourable things, the left for the opposite — so enter with the left foot and the entry dua, leave with the right and “Ghufranak”.',
      bg: 'Дясната страна се предпочита за почетните неща, лявата — за обратните. Затова влизай с левия крак с дуата за влизане и излизай с десния с „Гуфранак“.',
    },
  },
  {
    title: { en: 'Privacy and silence', bg: 'Уединение и мълчание' },
    detail: {
      en: 'Screen yourself fully from others, and do not talk, greet or answer greetings while relieving yourself (Sahih Muslim 370).',
      bg: 'Скрий се напълно от другите и не говори, не поздравявай и не отвръщай на поздрав, докато се облекчаваш (Сахих Муслим 370).',
    },
  },
  {
    title: { en: 'Do not face the Qibla', bg: 'Не се обръщай към къбле' },
    detail: {
      en: 'Neither face the qibla nor turn your back to it when relieving yourself in open areas (Sahih al-Bukhari 394); inside buildings it is excused per many scholars, but avoiding it is better.',
      bg: 'Не заставай нито с лице, нито с гръб към къбле, когато се облекчаваш на открито (Сахих ал-Бухари 394); в сгради според много учени е извинено, но е по-добре да се избягва.',
    },
  },
  {
    title: { en: 'Only the left hand touches impurity', bg: 'Само лявата ръка докосва нечистото' },
    detail: {
      en: 'The Prophet ﷺ forbade holding the private part or cleaning with the right hand (Sahih al-Bukhari 154; Sahih Muslim 267). Wash the left hand with soap afterwards.',
      bg: 'Пророкът ﷺ забранил държането на срамните части или почистването с дясната ръка (Сахих ал-Бухари 154; Сахих Муслим 267). След това измий лявата ръка със сапун.',
    },
  },
  {
    title: { en: 'Guard against urine splashes', bg: 'Пази се от пръски урина' },
    detail: {
      en: 'Most punishment of the grave is because of urine (hadith — Sunan Ibn Majah 348). Sit when urinating where splashing is likely, choose soft ground outdoors, and keep clothes clear.',
      bg: 'По-голямата част от мъчението в гроба е заради урината (хадис — Сунен Ибн Маджа 348). Сядай при уриниране, когато има опасност от пръски, избирай мека почва навън и пази дрехите си.',
    },
  },
  {
    title: { en: 'Nothing bearing Allah\'s name inside', bg: 'Нищо с името на Аллах вътре' },
    detail: {
      en: 'Do not take the mushaf into the toilet, and it is disliked to speak dhikr inside — say the duas outside the door.',
      bg: 'Не внасяй мусхаф в тоалетната; порицано е и споменаването на зикр вътре — казвай дуите пред вратата.',
    },
  },
]

export const methodMen = {
  en: [
    'After urinating, pause a few moments and let the flow stop completely — do not rush up while drops are still coming. Standing up, taking a few steps or a light cough helps the last drops leave the urethra naturally (this waiting is called istibra).',
    'You may gently press/slide from the base of the penis towards the tip once or twice to expel what remains in the channel — gently, without milking it repeatedly or squeezing hard. Obsessive squeezing irritates the urethra and actually produces more dribble and more doubt.',
    'Blot the tip dry with toilet paper (left hand) until nothing more appears on the paper.',
    'Then wash the opening and any area urine touched with water — pour or use a bidet/bottle, wiping with the left hand while water flows, until the area feels clean. Water is what purifies; soap is optional.',
    'Dry with toilet paper or a clean towel if you wish, wash your hands, and you are ready for wudu.',
  ],
  bg: [
    'След уриниране изчакай няколко мига потокът да спре напълно — не ставай, докато още излизат капки. Изправяне, няколко крачки или леко покашляне помагат последните капки да излязат от канала по естествен път (това изчакване се нарича истибра).',
    'Може леко да притиснеш/плъзнеш от основата на пениса към върха веднъж-два пъти, за да излезе останалото в канала — внимателно, без многократно „издояване“ и силно стискане. Натрапчивото стискане дразни уретрата и всъщност води до още капки и още съмнения.',
    'Попий върха с тоалетна хартия (с лявата ръка), докато на хартията не остава нищо.',
    'После измий отвора и всяко място, докоснато от урина, с вода — полей или използвай биде/бутилка, като избърсваш с лявата ръка под течаща вода, докато мястото е чисто. Водата е това, което пречиства; сапунът е по избор.',
    'Подсуши с тоалетна хартия или чиста кърпа, ако желаеш, измий си ръцете — и си готов за абдест.',
  ],
}

export const methodWomen = {
  en: [
    'After urinating, wait a few moments until the flow fully stops.',
    'Blot the outer area dry with toilet paper, always wiping front to back so nothing is carried towards the front (this also protects from infections).',
    'Then wash the outer area (the vulva — only what appears when sitting; the inside is not required) with water using the left hand, front to back, until clean.',
    'After stool, clean the back passage with paper first if you wish, then wash with water until the place is clean and smooth — paper alone is valid (see the FAQ), but water cleans best.',
    'Dry with paper or a clean towel, wash your hands, and you are ready for wudu.',
  ],
  bg: [
    'След уриниране изчакай няколко мига, докато потокът спре напълно.',
    'Попий външната област с тоалетна хартия, като винаги бършеш отпред назад, за да не се пренася нищо напред (това пази и от инфекции).',
    'После измий външната област (вулвата — само това, което се показва при сядане; вътрешността не е необходима) с вода с лявата ръка, отпред назад, докато е чиста.',
    'След изхождане почисти ануса първо с хартия, ако желаеш, после измий с вода, докато мястото е чисто и гладко — само хартия също е валидно (виж въпросите), но водата чисти най-добре.',
    'Подсуши с хартия или чиста кърпа, измий си ръцете — и си готова за абдест.',
  ],
}

export const purityFaqs = [
  {
    q: {
      en: 'Is cleaning with water (istinja) required, or is toilet paper enough?',
      bg: 'Задължително ли е миенето с вода (истинджа), или тоалетната хартия стига?',
    },
    a: {
      en: 'Both are valid. Wiping (istijmar) with toilet paper — classically stones — is sufficient by itself if you wipe at least three times, using an odd number, until the place is clean (Sahih Muslim 262). Water is superior and was the practice the Prophet ﷺ loved: the people of Quba were praised in the Qur\'an — “In it are men who love to purify themselves” (Qur\'an 9:108) — because they cleansed with water (Sunan Abi Dawud 44). The best practice: paper first to remove, then water to purify.',
      bg: 'И двете са валидни. Избърсването (истиджмар) с тоалетна хартия — класически с камъни — е достатъчно само по себе си, ако избършеш поне три пъти, с нечетен брой, докато мястото е чисто (Сахих Муслим 262). Водата е по-добра и била практиката, която Пророкът ﷺ обичал: хората от Куба са похвалени в Корана — „В нея има мъже, които обичат да се пречистват“ (Коран 9:108) — защото се миели с вода (Сунен Еби Дауд 44). Най-добрата практика: първо хартия за отстраняване, после вода за пречистване.',
    },
  },
  {
    q: {
      en: 'A few drops of urine always come out after I finish. What do I do?',
      bg: 'След като приключа, винаги излизат още няколко капки урина. Какво да правя?',
    },
    a: {
      en: 'This is normal anatomy, not a defect in your religion. The cure is istibra — unhurried emptying: stay seated a few extra moments, lean slightly, cough lightly or take a few steps, then blot and wash. Once you have cleaned yourself and left, treat the matter as finished. If you later feel certain — you actually see wetness of urine — wash the spot on your body/underwear and repeat wudu. But a mere feeling with no evidence is waswas and is ignored (see the doubt question below).',
      bg: 'Това е нормална анатомия, а не недостатък в религията ти. Лекарството е истибра — небързано изпразване: остани седнал няколко мига повече, наведи се леко, покашляй или направи няколко крачки, после попий и измий. Щом си се почистил и си излязъл, смятай въпроса за приключен. Ако по-късно си сигурен — реално видиш мокро от урина — измий мястото по тялото/бельото и поднови абдеста. Но само усещане без доказателство е васуас и се пренебрегва (виж въпроса за съмнението по-долу).',
    },
  },
  {
    q: {
      en: 'I constantly doubt whether drops came out or my wudu broke. How does Islam handle this?',
      bg: 'Постоянно се съмнявам дали са излезли капки или абдестът ми се е развалил. Как ислямът решава това?',
    },
    a: {
      en: 'With a golden rule: certainty is not removed by doubt. A man complained to the Prophet ﷺ that he imagined something during prayer; he replied: “He should not leave unless he hears a sound or finds a smell.” (Sahih al-Bukhari 137; Sahih Muslim 361). So: you are pure until you are certain otherwise. A proven trick from the Sunnah: after wudu, sprinkle a little water over your underwear/trousers (nadh) — any later feeling of dampness is then attributed to that water and the whisper dies (Sunan Abi Dawud 166; an-Nasa\'i 134). Do not keep checking your underwear; checking feeds the waswas.',
      bg: 'Със златно правило: сигурността не се премахва от съмнение. Един мъж се оплакал на Пророка ﷺ, че му се струва нещо по време на намаз; той отвърнал: „Да не излиза, освен ако чуе звук или усети миризма.“ (Сахих ал-Бухари 137; Сахих Муслим 361). Тоест: чист си, докато не си сигурен в обратното. Изпитан похват от Сунната: след абдест поръси малко вода върху бельото/панталона (надх) — всяко по-късно усещане за влага се отдава на тази вода и нашепването умира (Сунен Еби Дауд 166; ан-Насаи 134). Не проверявай бельото си постоянно; проверяването храни васуаса.',
    },
  },
  {
    q: {
      en: 'My underwear got a few drops on it — can I still pray? Do I have to change it?',
      bg: 'На бельото ми попаднаха няколко капки — мога ли да кланям? Трябва ли да го сменя?',
    },
    a: {
      en: 'Urine is impure, so the affected spot must be dealt with before prayer — but you do not need to change or launder the whole garment. Washing the soiled spot with water until the trace is gone is enough; splash water over it, rub, and pray even while it is damp. If you cannot wash it, changing that garment is the alternative. And if you prayed, then discovered old drops you never knew about, your past prayer is still valid according to many scholars — the Prophet ﷺ removed his sandals mid-prayer when told of filth on them and did not repeat what he had prayed (Sunan Abi Dawud 650).',
      bg: 'Урината е нечиста, затова засегнатото място трябва да се почисти преди намаз — но не е нужно да сменяш или переш цялата дреха. Достатъчно е да измиеш замърсеното петно с вода, докато следата изчезне; полей го, потъркай и кланяй дори докато е влажно. Ако не можеш да го измиеш, алтернативата е да смениш дрехата. А ако си кланял и после откриеш стари капки, за които не си знаел — миналият ти намаз е валиден според много учени: Пророкът ﷺ свалил сандалите си по време на намаз, когато му било казано, че по тях има нечистотия, и не повторил изкланяното (Сунен Еби Дауд 650).',
    },
  },
  {
    q: {
      en: 'Can I use a towel or reusable cloth to clean or dry myself?',
      bg: 'Мога ли да използвам кърпа или многократна кърпичка за почистване или подсушаване?',
    },
    a: {
      en: 'Separate two jobs. (1) Removing impurity: whatever wipes urine or stool off you — paper, cloth, towel — now carries that impurity. A cloth used this way must be laundered before it is used again; keeping one towel and re-wiping with it day after day without washing just spreads impurity back onto you. Disposable paper is more practical here. (2) Drying after washing with water: once you have washed with water, the area is already pure — drying it with your own clean towel is completely fine, and the towel stays pure (it only touched clean, wet skin). Wash that towel regularly like any other, and do not share it.',
      bg: 'Раздели две различни задачи. (1) Премахване на нечистотия: каквото избърсва урина или изпражнения от теб — хартия, плат, кърпа — вече носи тази нечистотия. Плат, използван така, трябва да се изпере, преди да се използва отново; да държиш една кърпа и да се бършеш с нея ден след ден без пране просто връща нечистотията върху теб. Тук хартията за еднократна употреба е по-практична. (2) Подсушаване след измиване с вода: щом си се измил с вода, мястото вече е чисто — да го подсушиш със своя чиста кърпа е напълно наред и кърпата остава чиста (докоснала е само чиста, мокра кожа). Пери тази кърпа редовно като всяка друга и не я споделяй.',
    },
  },
  {
    q: {
      en: 'What exactly must women wash after urinating?',
      bg: 'Какво точно трябва да измият жените след уриниране?',
    },
    a: {
      en: 'Only the outer area that urine actually touches — the outside of the vulva that shows when sitting. Nothing internal is required or recommended; internal washing is medically harmful and not part of istinja. Wipe and wash front to back. During menstruation, the same istinja applies for the toilet, and the full ghusl comes only when the period ends.',
      bg: 'Само външната област, до която урината реално се докосва — външната част на вулвата, която се показва при сядане. Нищо вътрешно не се изисква, нито препоръчва; вътрешното миене е вредно от медицинска гледна точка и не е част от истинджата. Бърши и мий отпред назад. По време на цикъл за тоалетната важи същата истинджа, а пълният гусул идва едва когато цикълът приключи.',
    },
  },
  {
    q: {
      en: 'How do I clean after stool properly?',
      bg: 'Как да се почистя правилно след изхождане?',
    },
    a: {
      en: 'Use the left hand only. Wipe with paper first (odd number of wipes, minimum three, until the paper comes away clean — Sahih Muslim 262), then wash the anus with water, rubbing with the left hand while pouring, until the place is clean and free of any trace by touch. Bones and food must not be used for wiping (Sahih Muslim 450). Wash your hands with soap afterwards. If only water or only paper is available, either alone is valid as long as the place is actually cleaned.',
      bg: 'Използвай само лявата ръка. Първо избърши с хартия (нечетен брой избърсвания, минимум три, докато хартията излиза чиста — Сахих Муслим 262), после измий ануса с вода, като търкаш с лявата ръка, докато поливаш, докато мястото е чисто и без следа на допир. Кости и храна не бива да се използват за бърсане (Сахих Муслим 450). След това измий ръцете си със сапун. Ако има само вода или само хартия, всяко от двете самостоятелно е валидно, стига мястото реално да е почистено.',
    },
  },
  {
    q: {
      en: 'Does everything that leaves the private parts break wudu? What about madhy (pre-fluid)?',
      bg: 'Всичко ли, което излиза от срамните части, разваля абдеста? А мезй (предсеменна течност)?',
    },
    a: {
      en: 'Urine, stool, wind, madhy and wady all break wudu and only require washing and a new wudu. Madhy — the thin fluid released at arousal without climax — is impure but light: “wash your private part and perform wudu” (Sahih al-Bukhari 269). Mani (ejaculate) is different: it requires the full bath, ghusl (Sahih Muslim 348). Ordinary vaginal moisture is judged pure by many scholars and does not break wudu per some; if it is continuous, the incontinence ruling below applies.',
      bg: 'Урина, изпражнения, газове, мезй и уедй развалят абдеста и изискват само измиване и нов абдест. Мезй — рядката течност при възбуда без връхна точка — е нечиста, но лека: „измий срамната си част и вземи абдест“ (Сахих ал-Бухари 269). Мени (семенната течност) е различна: тя изисква пълното къпане, гусул (Сахих Муслим 348). Обичайната вагинална влага според много учени е чиста и според някои не разваля абдеста; ако е постоянна, важи правилото за инконтиненция по-долу.',
    },
  },
  {
    q: {
      en: 'I have dribbling/incontinence that never fully stops. Am I excused?',
      bg: 'Имам изпускане/инконтиненция, което никога не спира напълно. Извинен ли съм?',
    },
    a: {
      en: 'Yes — Islam has a standing rule for you (the ma\'dhur, the excused). Like the woman with continuous bleeding whom the Prophet ﷺ told to make wudu for every prayer (Sahih al-Bukhari 228): wear a pad or liner to protect your clothes, make wudu after the time of each prayer enters, and pray — whatever leaks during that prayer does not harm it. Change the pad when convenient. Your prayer is fully valid; Allah does not burden a soul beyond its capacity (Qur\'an 2:286).',
      bg: 'Да — ислямът има постоянно правило за теб (мазур — извиненият). Както жената с постоянно кръвотечение, на която Пророкът ﷺ казал да взема абдест за всеки намаз (Сахих ал-Бухари 228): носи превръзка или подложка, за да пазиш дрехите си, вземай абдест след настъпване на времето на всеки намаз и кланяй — каквото изтече по време на този намаз, не му вреди. Сменяй превръзката, когато е удобно. Намазът ти е напълно валиден; Аллах не натоварва никоя душа свръх силите ѝ (Коран 2:286).',
    },
  },
  {
    q: {
      en: 'Is standing while urinating forbidden for men?',
      bg: 'Забранено ли е на мъжете да уринират прави?',
    },
    a: {
      en: 'Not forbidden — the Prophet ﷺ was seen doing it once at a rubbish heap (Sahih al-Bukhari 224) — but sitting was his overwhelming practice, as Aisha reported (Jami` at-Tirmidhi 12), and sitting protects far better from splashes, which matter for prayer. Practical rule: sit when you can; if you stand (urinals), guard your clothes and wash afterwards.',
      bg: 'Не е забранено — Пророкът ﷺ бил видян да го прави веднъж при сметище (Сахих ал-Бухари 224) — но сядането било преобладаващата му практика, както предава Аиша (Джами ат-Тирмизи 12), и то пази много по-добре от пръски, които имат значение за намаза. Практично правило: сядай, когато можеш; ако си прав (писоари), пази дрехите си и се измий след това.',
    },
  },
  {
    q: {
      en: 'What about baby urine on clothes while I pray?',
      bg: 'А урина от бебе по дрехите, докато кланям?',
    },
    a: {
      en: 'The urine of a baby boy who feeds only on milk is lightened: sprinkling water generously over the spot is enough; a baby girl\'s urine is washed like an adult\'s (Sunan Abi Dawud 375; Sahih al-Bukhari 223 records the Prophet ﷺ sprinkling). Once weaned onto food, both are washed normally.',
      bg: 'Урината на кърмаче момченце, което се храни само с мляко, е облекчена: достатъчно е обилно поръсване на мястото с вода; урината на момиченце се измива като на възрастен (Сунен Еби Дауд 375; Сахих ал-Бухари 223 предава поръсването от Пророка ﷺ). Щом преминат на храна, и двете се мият нормално.',
    },
  },
  {
    q: {
      en: 'Do I need a new wudu every time I use the toilet, even if I already had one?',
      bg: 'Нужен ли е нов абдест всеки път, когато ползвам тоалетна, дори ако вече съм имал?',
    },
    a: {
      en: 'Using the toilet breaks wudu, so yes — istinja first (clean the private parts), then a fresh wudu before praying. But note the order matters only in that istinja is done at the toilet; wudu can be made later at prayer time. And istinja itself is not needed again for wind — breaking wind requires only wudu, not washing the private parts.',
      bg: 'Ползването на тоалетна разваля абдеста, така че да — първо истинджа (почистване на срамните части), после нов абдест преди намаз. Но редът има значение само в това, че истинджата се прави в тоалетната; абдестът може да се вземе по-късно, при време за намаз. Самата истинджа не е нужна отново при газове — изпускането на газове изисква само абдест, не и миене на срамните части.',
    },
  },
]
