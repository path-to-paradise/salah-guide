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
    name: { en: 'Fajr', bg: 'Фаджр', fr: 'Fajr', de: 'Fajr', nl: 'Fajr', tr: 'Sabah', ur: 'فجر' },
    ar: 'الفجر',
    window: {
      en: 'From true dawn until sunrise',
      bg: 'От истинското зазоряване до изгрева',
      fr: "De l'aube véritable jusqu'au lever du soleil",
      de: 'Von der wahren Morgendämmerung bis zum Sonnenaufgang',
      nl: 'Vanaf de ware ochtendschemering tot zonsopgang',
      tr: 'Gerçek fecirden gün doğumuna kadar',
      ur: 'طلوعِ صادق سے سورج نکلنے تک',
    },
    fard: 2,
    sunnahBefore: 2,
    sunnahAfter: 0,
    aloud: { en: 'Aloud', bg: 'На глас', fr: 'À voix haute', de: 'Laut', nl: 'Hardop', tr: 'Sesli', ur: 'بلند آواز سے' },
    note: {
      en: "“The two rak'ahs of Fajr are better than the world and everything in it.” (Sahih Muslim 725). Angels of the night and day gather at this prayer (Qur'an 17:78).",
      bg: '„Двата рекята на Фаджр са по-добри от света и всичко в него.“ (Сахих Муслим 725). Ангелите на нощта и деня се събират на този намаз (Коран 17:78).',
      fr: "« Les deux rak'ahs du Fajr valent mieux que le monde et tout ce qu'il contient. » (Sahih Muslim 725). Les anges de la nuit et du jour se rassemblent à cette prière (Coran 17:78).",
      de: '„Die beiden rak\'ahs des Fajr sind besser als die Welt und alles, was in ihr ist.“ (Sahih Muslim 725). Die Engel der Nacht und des Tages versammeln sich bei diesem Gebet (Koran 17:78).',
      nl: '„De twee rak\'ahs van Fajr zijn beter dan de wereld en alles wat erin is.” (Sahih Muslim 725). De engelen van de nacht en de dag verzamelen zich bij dit gebed (Koran 17:78).',
      tr: "“Sabah namazının iki rekatı, dünyadan ve içindeki her şeyden daha hayırlıdır.” (Sahih Müslim 725). Gece ve gündüz melekleri bu namazda toplanır (Kur'an 17:78).",
      ur: '”فجر کی دو رکعتیں دنیا اور اس کی ہر چیز سے بہتر ہیں۔“ (صحیح مسلم 725)۔ رات اور دن کے فرشتے اس نماز میں جمع ہوتے ہیں (قرآن 17:78)۔',
    },
  },
  {
    name: { en: 'Dhuhr', bg: 'Зухр', fr: 'Dhuhr', de: 'Dhuhr', nl: 'Dhuhr', tr: 'Öğle', ur: 'ظہر' },
    ar: 'الظهر',
    window: {
      en: "From the sun passing its zenith until an object's shadow equals its length",
      bg: 'От преминаването на слънцето през зенита, докато сянката на предмета се изравни с дължината му',
      fr: "Depuis que le soleil dépasse son zénith jusqu'à ce que l'ombre d'un objet égale sa longueur",
      de: 'Vom Überschreiten des Zenits der Sonne, bis der Schatten eines Objekts seiner Länge entspricht',
      nl: 'Vanaf het passeren van het zenit van de zon tot de schaduw van een voorwerp even lang is als het voorwerp zelf',
      tr: 'Güneşin tepe noktasını geçmesinden, bir cismin gölgesi kendi boyuna eşit olana kadar',
      ur: 'سورج کے نصف النہار سے گزرنے سے لے کر کسی چیز کے سائے کے اس کی لمبائی کے برابر ہونے تک',
    },
    fard: 4,
    sunnahBefore: 4,
    sunnahAfter: 2,
    aloud: { en: 'Silent', bg: 'Тихо', fr: 'Silencieux', de: 'Leise', nl: 'Stil', tr: 'Sessiz', ur: 'خاموشی سے' },
    note: {
      en: "On Fridays, Jumu'ah (2 rak'ahs with khutbah) replaces Dhuhr for those it is obligatory upon.",
      bg: 'В петък Джума (2 рекята с хутбе) замества Зухр за онези, за които е задължителна.',
      fr: "Le vendredi, la Jumu'ah (2 rak'ahs avec khutbah) remplace le Dhuhr pour ceux à qui elle est obligatoire.",
      de: "Freitags ersetzt die Jumu'ah (2 rak'ahs mit khutbah) das Dhuhr für diejenigen, für die sie Pflicht ist.",
      nl: "Op vrijdag vervangt de Jumu'ah (2 rak'ahs met khutbah) het Dhuhr voor degenen voor wie het verplicht is.",
      tr: 'Cuma günleri, Cuma namazı (hutbeyle birlikte 2 rekat) farz olanlar için Öğle\'nin yerine geçer.',
      ur: 'جمعہ کے دن، جمعہ کی نماز (خطبے کے ساتھ 2 رکعتیں) ان لوگوں کے لیے ظہر کی جگہ لے لیتی ہے جن پر یہ فرض ہے۔',
    },
  },
  {
    name: { en: 'Asr', bg: 'Аср', fr: 'Asr', de: 'Asr', nl: 'Asr', tr: 'İkindi', ur: 'عصر' },
    ar: 'العصر',
    window: {
      en: 'From when a shadow equals its object until sunset (pray before the sun yellows)',
      bg: 'Откакто сянката се изравни с предмета до залеза (кланяй преди слънцето да пожълтее)',
      fr: "Depuis que l'ombre égale l'objet jusqu'au coucher du soleil (prie avant que le soleil ne jaunisse)",
      de: 'Ab dem Zeitpunkt, an dem der Schatten dem Objekt entspricht, bis zum Sonnenuntergang (bete, bevor die Sonne gelb wird)',
      nl: 'Vanaf het moment dat een schaduw gelijk is aan het voorwerp tot zonsondergang (bid voordat de zon geel kleurt)',
      tr: 'Gölgenin cisme eşit olmasından gün batımına kadar (güneş sararmadan önce kıl)',
      ur: 'جب سایہ چیز کے برابر ہو جائے سے لے کر غروبِ آفتاب تک (سورج زرد ہونے سے پہلے پڑھیں)',
    },
    fard: 4,
    sunnahBefore: 0,
    sunnahAfter: 0,
    aloud: { en: 'Silent', bg: 'Тихо', fr: 'Silencieux', de: 'Leise', nl: 'Stil', tr: 'Sessiz', ur: 'خاموشی سے' },
    note: {
      en: "“Whoever misses the Asr prayer, it is as if he lost his family and property.” (Sahih al-Bukhari 552). Four rak'ahs before it are recommended (Tirmidhi 430).",
      bg: '„Който изпусне намаза Аср, все едно е изгубил семейството и имота си.“ (Сахих ал-Бухари 552). Четири рекята преди него са препоръчителни (Тирмизи 430).',
      fr: "« Quiconque manque la prière d'Asr, c'est comme s'il avait perdu sa famille et ses biens. » (Sahih al-Bukhari 552). Quatre rak'ahs avant celle-ci sont recommandés (Tirmidhi 430).",
      de: '„Wer das Asr-Gebet verpasst, ist, als hätte er seine Familie und sein Vermögen verloren.“ (Sahih al-Bukhari 552). Vier rak\'ahs davor werden empfohlen (Tirmidhi 430).',
      nl: '„Wie het Asr-gebed mist, is als iemand die zijn familie en bezit heeft verloren.” (Sahih al-Bukhari 552). Vier rak\'ahs ervoor worden aanbevolen (Tirmidhi 430).',
      tr: '"Kim ikindi namazını kaçırırsa, ailesini ve malını kaybetmiş gibidir." (Sahih el-Buhari 552). Ondan önce dört rekat kılmak tavsiye edilir (Tirmizi 430).',
      ur: '”جس نے عصر کی نماز چھوڑ دی، گویا اس نے اپنا گھر بار اور مال گنوا دیا۔“ (صحیح البخاری 552)۔ اس سے پہلے چار رکعتیں مستحب ہیں (ترمذی 430)۔',
    },
  },
  {
    name: { en: 'Maghrib', bg: 'Магриб', fr: 'Maghrib', de: 'Maghrib', nl: 'Maghrib', tr: 'Akşam', ur: 'مغرب' },
    ar: 'المغرب',
    window: {
      en: 'From sunset until the red twilight disappears',
      bg: 'От залеза до изчезването на червената вечерна заря',
      fr: 'Du coucher du soleil jusqu\'à la disparition du crépuscule rouge',
      de: 'Vom Sonnenuntergang bis zum Verschwinden der roten Abenddämmerung',
      nl: 'Vanaf zonsondergang tot het verdwijnen van de rode avondschemering',
      tr: 'Gün batımından kızıllığın kaybolmasına kadar',
      ur: 'غروبِ آفتاب سے لے کر سرخ شفق کے غائب ہونے تک',
    },
    fard: 3,
    sunnahBefore: 0,
    sunnahAfter: 2,
    aloud: { en: 'Aloud', bg: 'На глас', fr: 'À voix haute', de: 'Laut', nl: 'Hardop', tr: 'Sesli', ur: 'بلند آواز سے' },
    note: {
      en: 'Prayed promptly after sunset — its window is the shortest of the five.',
      bg: 'Кланя се веднага след залеза — прозорецът му е най-краткият от петте.',
      fr: 'Priée rapidement après le coucher du soleil — son créneau est le plus court des cinq.',
      de: 'Wird unmittelbar nach Sonnenuntergang gebetet — sein Zeitfenster ist das kürzeste der fünf.',
      nl: 'Wordt direct na zonsondergang gebeden — het tijdvenster is het kortste van de vijf.',
      tr: 'Gün batımından hemen sonra kılınır — vakti beşi arasında en kısa olanıdır.',
      ur: 'غروبِ آفتاب کے فوراً بعد پڑھی جاتی ہے — اس کا وقفہ پانچوں میں سب سے مختصر ہے۔',
    },
  },
  {
    name: { en: 'Isha', bg: 'Иша', fr: 'Isha', de: 'Isha', nl: 'Isha', tr: 'Yatsı', ur: 'عشاء' },
    ar: 'العشاء',
    window: {
      en: 'From the disappearance of twilight until midnight (allowed until Fajr if needed)',
      bg: 'От изчезването на зарята до полунощ (позволено до Фаджр при нужда)',
      fr: "Depuis la disparition du crépuscule jusqu'à minuit (autorisée jusqu'au Fajr si besoin)",
      de: 'Vom Verschwinden der Dämmerung bis Mitternacht (bei Bedarf bis zum Fajr erlaubt)',
      nl: 'Vanaf het verdwijnen van de schemering tot middernacht (indien nodig toegestaan tot Fajr)',
      tr: 'Şafağın kaybolmasından gece yarısına kadar (gerekirse Sabah\'a kadar caizdir)',
      ur: 'شفق کے غائب ہونے سے آدھی رات تک (ضرورت ہو تو فجر تک جائز ہے)',
    },
    fard: 4,
    sunnahBefore: 0,
    sunnahAfter: 2,
    aloud: { en: 'Aloud', bg: 'На глас', fr: 'À voix haute', de: 'Laut', nl: 'Hardop', tr: 'Sesli', ur: 'بلند آواز سے' },
    note: {
      en: "Witr (1–3 rak'ahs or more, odd) seals the night after Isha.",
      bg: 'Витр (1–3 рекята или повече, нечетен брой) запечатва нощта след Иша.',
      fr: "Le Witr (1 à 3 rak'ahs ou plus, en nombre impair) clôt la nuit après l'Isha.",
      de: 'Das Witr (1–3 rak\'ahs oder mehr, ungerade) beschließt die Nacht nach dem Isha.',
      nl: 'De Witr (1–3 rak\'ahs of meer, oneven) sluit de nacht af na de Isha.',
      tr: 'Vitir (1-3 rekat veya daha fazla, tek sayı) geceyi Yatsı\'dan sonra mühürler.',
      ur: 'وتر (1 تا 3 رکعتیں یا زیادہ، طاق تعداد) عشاء کے بعد رات کو ختم کرتا ہے۔',
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
  fr: {
    title: 'Les cinq prières quotidiennes et leurs horaires',
    lead: "« En vérité, la prière est prescrite aux croyants à des temps déterminés. » (Coran 4:103). Cinq rendez-vous avec ton Seigneur, répartis sur la journée — chacun avec son propre créneau.",
    eyebrow: 'Le rythme quotidien',
    tableTitle: 'Chaque prière en un coup d\'œil',
    legendA: 'Les points indiquent les rak\'ahs :',
    legendS: 'sunnah avant ·',
    legendF: 'fard ·',
    legendW: "sunnah après. Les 12 rak'ahs de sunnah confirmée construisent une maison au Paradis (Sahih Muslim 728).",
    thPrayer: 'Prière',
    thWindow: 'Créneau horaire',
    thRakahs: "Rak'ahs",
    thRecit: 'Récitation',
    thNote: 'Bon à savoir',
    sunnah: 'sunnah',
    fard: 'fard',
    forbTitle: '⏳ Les trois moments interdits',
    forb: "Les prières volontaires ne sont pas accomplies : (1) après le Fajr jusqu'à ce que le soleil se soit complètement levé, (2) lorsque le soleil est exactement à son zénith, et (3) après l'Asr jusqu'au coucher du soleil ('Uqbah ibn 'Amir — Sahih Muslim 831). Les prières obligatoires et manquées peuvent quand même être rattrapées.",
    extremeTitle: '🌙 Qu\'en est-il des endroits aux durées de jour extrêmes ?',
    extreme: "Dans les hautes latitudes où le soleil se couche ou se lève à peine, suis le calendrier de ta mosquée locale — elle applique des méthodes savantes (ville modérée la plus proche, ou intervalles fixes) approuvées par les conseils de fiqh.",
  },
  de: {
    title: 'Die fünf täglichen Gebete und ihre Zeiten',
    lead: '„Wahrlich, das Gebet ist den Gläubigen zu festgesetzten Zeiten vorgeschrieben.“ (Koran 4:103). Fünf Verabredungen mit deinem Herrn, über den Tag verteilt — jede mit ihrem eigenen Zeitfenster.',
    eyebrow: 'Der tägliche Rhythmus',
    tableTitle: 'Jedes Gebet auf einen Blick',
    legendA: 'Die Punkte zeigen die rak\'ahs:',
    legendS: 'sunnah davor ·',
    legendF: 'fard ·',
    legendW: "sunnah danach. Die 12 bestätigten sunnah-rak'ahs bauen ein Haus im Paradies (Sahih Muslim 728).",
    thPrayer: 'Gebet',
    thWindow: 'Zeitfenster',
    thRakahs: "Rak'ahs",
    thRecit: 'Rezitation',
    thNote: 'Wissenswert',
    sunnah: 'sunnah',
    fard: 'fard',
    forbTitle: '⏳ Die drei verbotenen Zeiten',
    forb: "Freiwillige Gebete werden nicht verrichtet: (1) nach dem Fajr, bis die Sonne vollständig aufgegangen ist, (2) wenn die Sonne genau im Zenit steht, und (3) nach dem Asr bis zum Sonnenuntergang ('Uqbah ibn 'Amir — Sahih Muslim 831). Pflicht- und versäumte Gebete können trotzdem nachgeholt werden.",
    extremeTitle: '🌙 Was ist mit Orten mit extremen Taglängen?',
    extreme: "In hohen Breitengraden, wo die Sonne kaum untergeht oder aufgeht, folge dem Zeitplan deiner örtlichen Moschee — sie wenden von Fiqh-Räten anerkannte gelehrte Methoden an (nächstgelegene gemäßigte Stadt oder feste Intervalle).",
  },
  nl: {
    title: 'De vijf dagelijkse gebeden en hun tijden',
    lead: '„Voorwaar, het gebed is de gelovigen op vastgestelde tijden voorgeschreven.” (Koran 4:103). Vijf afspraken met je Heer, verspreid over de dag — elk met een eigen tijdvenster.',
    eyebrow: 'Het dagelijkse ritme',
    tableTitle: 'Elk gebed in één oogopslag',
    legendA: 'De stippen tonen de rak\'ahs:',
    legendS: 'sunnah ervoor ·',
    legendF: 'fard ·',
    legendW: "sunnah erna. De 12 bevestigde sunnah rak'ahs bouwen een huis in het Paradijs (Sahih Muslim 728).",
    thPrayer: 'Gebed',
    thWindow: 'Tijdvenster',
    thRakahs: "Rak'ahs",
    thRecit: 'Recitatie',
    thNote: 'Goed om te weten',
    sunnah: 'sunnah',
    fard: 'fard',
    forbTitle: '⏳ De drie verboden tijden',
    forb: "Vrijwillige gebeden worden niet verricht: (1) vanaf na Fajr tot de zon volledig is opgekomen, (2) wanneer de zon precies in het zenit staat, en (3) vanaf na Asr tot zonsondergang ('Uqbah ibn 'Amir — Sahih Muslim 831). Verplichte en gemiste gebeden mogen wel worden ingehaald.",
    extremeTitle: '🌙 Hoe zit het met plaatsen met extreme daglengtes?',
    extreme: "In hoge breedtegraden waar de zon nauwelijks ondergaat of opkomt, volg je het rooster van je plaatselijke moskee — zij passen door fiqhraden goedgekeurde geleerde methoden toe (dichtstbijzijnde gematigde stad of vaste intervallen).",
  },
  tr: {
    title: 'Beş Vakit Namaz ve Vakitleri',
    lead: '"Şüphesiz namaz, mü\'minler üzerine vakitleri belirlenmiş bir farz olarak yazılmıştır." (Kur\'an 4:103). Gün boyuna yayılmış, Rabbinle beş randevu — her birinin kendi vakti var.',
    eyebrow: 'Günlük ritim',
    tableTitle: 'Her namaz bir bakışta',
    legendA: 'Noktalar rekatları gösterir:',
    legendS: 'önce sünnet ·',
    legendF: 'farz ·',
    legendW: "sonra sünnet. 12 müekked sünnet rekat cennette bir ev inşa eder (Sahih Müslim 728).",
    thPrayer: 'Namaz',
    thWindow: 'Vakit aralığı',
    thRakahs: 'Rekatlar',
    thRecit: 'Kıraat',
    thNote: 'Bilmekte fayda var',
    sunnah: 'sünnet',
    fard: 'farz',
    forbTitle: '⏳ Namazın yasak olduğu üç vakit',
    forb: "Nafile namazlar şu vakitlerde kılınmaz: (1) Sabah'tan sonra güneş tamamen doğana kadar, (2) güneş tam tepe noktasındayken ve (3) İkindi'den sonra gün batımına kadar (Ukbe bin Amir — Sahih Müslim 831). Farz ve kaçırılan namazlar yine de kaza edilebilir.",
    extremeTitle: '🌙 Gün uzunluğunun aşırı olduğu yerler ne olacak?',
    extreme: "Güneşin neredeyse hiç batmadığı veya doğmadığı yüksek enlemlerde, yerel camiinin vakit çizelgesini takip et — onlar fıkıh konseylerince onaylanmış ilmî yöntemler uygular (en yakın ılıman şehir veya sabit aralıklar).",
  },
  ur: {
    title: 'پانچ روزانہ نمازیں اور ان کے اوقات',
    lead: '”بے شک نماز مومنوں پر مقررہ اوقات میں فرض کی گئی ہے۔“ (قرآن 4:103)۔ دن بھر پھیلی ہوئی، اپنے رب کے ساتھ پانچ ملاقاتیں — ہر ایک کا اپنا وقت۔',
    eyebrow: 'روزانہ کی تال',
    tableTitle: 'ایک نظر میں ہر نماز',
    legendA: 'نقطے رکعتیں ظاہر کرتے ہیں:',
    legendS: 'پہلے سنت ·',
    legendF: 'فرض ·',
    legendW: 'بعد میں سنت۔ 12 مؤکدہ سنت رکعتیں جنت میں گھر بناتی ہیں (صحیح مسلم 728)۔',
    thPrayer: 'نماز',
    thWindow: 'وقت کا دورانیہ',
    thRakahs: 'رکعتیں',
    thRecit: 'قراءت',
    thNote: 'جاننے کے قابل',
    sunnah: 'سنت',
    fard: 'فرض',
    forbTitle: '⏳ تین ممنوعہ اوقات',
    forb: 'نفلی نمازیں ادا نہیں کی جاتیں: (1) فجر کے بعد سے سورج مکمل طور پر طلوع ہونے تک، (2) جب سورج بالکل نصف النہار پر ہو، اور (3) عصر کے بعد سے غروبِ آفتاب تک (عقبہ بن عامر — صحیح مسلم 831)۔ فرض اور چھوٹی ہوئی نمازیں پھر بھی قضا کی جا سکتی ہیں۔',
    extremeTitle: '🌙 دن کی انتہائی لمبائی والی جگہوں کا کیا حکم ہے؟',
    extreme: 'ان بلند عرض بلد والے مقامات پر جہاں سورج بمشکل غروب یا طلوع ہوتا ہے، اپنی مقامی مسجد کے نظام الاوقات کی پیروی کریں — وہ فقہی کونسلوں کی توثیق کردہ علمی طریقے اپناتے ہیں (قریب ترین معتدل شہر، یا مقررہ وقفے)۔',
  },
}

export default function PrayerTimes() {
  const { lang, L } = useLang()
  const c = C[lang] || C.en

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
