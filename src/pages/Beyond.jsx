import { useLang } from '../i18n/LanguageContext.jsx'

const topics = [
  {
    icon: '🧳',
    title: {
      en: "Praying while travelling — Qasr & Jam'",
      bg: 'Намаз при пътуване — каср и джем',
      fr: "Prier en voyage — Qasr et Jam'",
      de: "Beten auf Reisen — Qasr und Jam'",
      nl: "Bidden op reis — Qasr en Jam'",
      tr: 'Yolculukta namaz — Kasr ve Cem',
      ur: 'سفر میں نماز — قصر اور جمع',
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
      fr: [
        "Raccourcissement (qasr) : en voyage, les prières de 4 rak'ahs (Dhuhr, Asr, Isha) sont priées en 2. Fajr et Maghrib restent inchangées. « Et quand vous parcourez la terre, ce n'est pas un péché pour vous de raccourcir la prière. » (Coran 4:101)",
        "Regroupement (jam') : un voyageur peut prier Dhuhr et Asr ensemble à l'heure de l'une ou de l'autre, et de même Maghrib et Isha (Sahih Muslim 704).",
        "La plupart des savants appliquent cela aux voyages d'environ 80 km ou plus. Tant que tu restes voyageur, tu peux continuer à raccourcir ; une fois installé durablement, reprends la prière complète. Les sunnahs rawatib (sauf celle du Fajr et le Witr) sont généralement omises en voyage.",
      ],
      de: [
        "Verkürzung (Qasr): Auf Reisen werden die 4-Rak'ah-Gebete (Dhuhr, Asr, Isha) als 2 verrichtet. Fajr und Maghrib bleiben unverändert. „Und wenn ihr im Land umherreist, ist es keine Sünde für euch, das Gebet zu verkürzen.“ (Koran 4:101)",
        "Zusammenlegen (Jam'): Ein Reisender darf Dhuhr und Asr zur Zeit des einen oder des anderen zusammen beten, ebenso Maghrib und Isha (Sahih Muslim 704).",
        "Die meisten Gelehrten wenden dies auf Reisen von etwa 80+ km an. Solange du Reisender bleibst, darfst du weiter verkürzen; sobald du dich langfristig niederlässt, verrichte wieder das vollständige Gebet. Die Rawatib-Sunnahs (außer der von Fajr und dem Witr) werden auf Reisen üblicherweise ausgelassen.",
      ],
      nl: [
        "Verkorten (qasr): tijdens een reis worden de gebeden van 4 rak'ahs (Dhuhr, Asr, Isha) als 2 gebeden. Fajr en Maghrib blijven zoals ze zijn. „En wanneer jullie door het land reizen, is er geen blaam op jullie als jullie het gebed inkorten.” (Koran 4:101)",
        "Samenvoegen (jam'): een reiziger mag Dhuhr en Asr samen bidden op het tijdstip van een van beide, en evenzo Maghrib en Isha (Sahih Muslim 704).",
        "De meeste geleerden passen dit toe op reizen van ongeveer 80+ km. Zolang je reiziger blijft, mag je blijven inkorten; zodra je je langdurig vestigt, hervat je het volledige gebed. De rawatib-sunnahs (behalve die van Fajr en de Witr) worden tijdens het reizen doorgaans weggelaten.",
      ],
      tr: [
        "Kısaltma (kasr): yolculukta 4 rekatlı namazlar (Öğle, İkindi, Yatsı) 2 rekat olarak kılınır. Sabah ve Akşam olduğu gibi kalır. \"Yeryüzünde sefere çıktığınızda namazı kısaltmanızda size bir günah yoktur.\" (Kur'an 4:101)",
        "Birleştirme (cem): yolcu, Öğle ile İkindi'yi ikisinden birinin vaktinde birlikte kılabilir, aynı şekilde Akşam ile Yatsı'yı da (Sahih Muslim 704).",
        "Çoğu âlim bunu yaklaşık 80+ km'lik yolculuklara uygular. Yolcu olduğun sürece kısaltmaya devam edebilirsin; uzun süreliğine yerleştiğinde tam namaza dönersin. Revatib sünnetler (Sabah namazının sünneti ve Vitir hariç) yolculukta genellikle terk edilir.",
      ],
      ur: [
        'قصر (چار رکعتوں کو مختصر کرنا): سفر میں چار رکعت والی نمازیں (ظہر، عصر، عشاء) دو رکعت کر کے پڑھی جاتی ہیں۔ فجر اور مغرب اپنی حالت پر رہتی ہیں۔ "اور جب تم زمین میں سفر کرو تو تم پر نماز قصر کرنے میں کوئی گناہ نہیں۔" (قرآن 4:101)',
        'جمع (ملانا): مسافر ظہر اور عصر کو دونوں میں سے کسی ایک کے وقت میں اکٹھا پڑھ سکتا ہے، اسی طرح مغرب اور عشاء کو بھی (صحیح مسلم 704)۔',
        'زیادہ تر علماء اسے تقریباً 80+ کلومیٹر کے سفر پر لاگو کرتے ہیں۔ جب تک آپ مسافر رہیں قصر جاری رکھ سکتے ہیں؛ طویل مدت کے لیے مقیم ہونے پر مکمل نماز پر واپس آ جائیں۔ سفر میں راتب سنتیں (فجر کی سنت اور وتر کے سوا) عام طور پر چھوڑ دی جاتی ہیں۔',
      ],
    },
  },
  {
    icon: '🤕',
    title: {
      en: 'Praying when sick',
      bg: 'Намаз при болест',
      fr: 'Prier en cas de maladie',
      de: 'Beten bei Krankheit',
      nl: 'Bidden bij ziekte',
      tr: 'Hastalıkta namaz',
      ur: 'بیماری میں نماز',
    },
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
      fr: [
        '« Prie debout ; si tu ne le peux pas, alors assis ; et si tu ne le peux pas, alors sur le côté. » (Sahih al-Bukhari 1117)',
        "Celui qui ne peut faire le ruku ou le sujud fait des gestes avec la tête, en veillant à ce que le geste du sujud soit plus bas que celui du ruku. Celui qui ne peut faire face à la qibla prie comme il le peut.",
        "La maladie ne supprime jamais la prière elle-même — Allah en allège la forme, pas sa place dans ta journée. Si le wudu est nuisible ou impossible, le tayammum le remplace.",
      ],
      de: [
        '„Bete stehend; wenn du es nicht kannst, dann sitzend; und wenn du es nicht kannst, dann auf der Seite liegend.“ (Sahih al-Bukhari 1117)',
        'Wer Ruku oder Sujud nicht ausführen kann, deutet sie mit dem Kopf an, wobei die Sujud-Geste tiefer ist als die Ruku-Geste. Wer sich nicht zur Qibla wenden kann, betet, so gut er kann.',
        'Krankheit hebt das Gebet selbst niemals auf — Allah erleichtert seine Form, nicht seinen Platz in deinem Tag. Wenn Wudu schädlich oder unmöglich ist, tritt Tayammum an seine Stelle.',
      ],
      nl: [
        '„Bid staand; als je dat niet kunt, zittend; en als je dat niet kunt, op je zij.” (Sahih al-Bukhari 1117)',
        'Wie geen ruku of sujud kan maken, doet dit met een gebaar van het hoofd, waarbij het gebaar voor sujud lager is dan dat voor ruku. Wie de qibla niet kan aanvaarden, bidt zoals hij kan.',
        'Ziekte heft het gebed zelf nooit op — Allah verlicht de vorm ervan, niet de plaats ervan in je dag. Als wudu schadelijk of onmogelijk is, neemt tayammum de plaats ervan in.',
      ],
      tr: [
        '"Ayakta namaz kıl; gücün yetmezse oturarak; ona da gücün yetmezse yan üzeri kılarak." (Sahih al-Buhari 1117)',
        'Rükû veya secdeyi yapamayan kimse, secde işaretini rükûdan daha aşağı yaparak baş ile işaret eder. Kıbleye yönelemeyen kimse gücü yettiğince namaz kılar.',
        'Hastalık namazın kendisini asla düşürmez — Allah onun şeklini hafifletir, gündeki yerini değil. Abdest zararlıysa veya imkânsızsa, onun yerini teyemmüm alır.',
      ],
      ur: [
        '"کھڑے ہو کر نماز پڑھو؛ اگر نہ ہو سکے تو بیٹھ کر؛ اور اگر وہ بھی نہ ہو سکے تو کروٹ پر لیٹ کر۔" (صحیح البخاری 1117)',
        'جو رکوع یا سجدہ نہ کر سکے وہ سر سے اشارہ کرے، اس طرح کہ سجدے کا اشارہ رکوع سے نیچا ہو۔ جو قبلہ رخ نہ ہو سکے وہ جیسے ممکن ہو نماز پڑھے۔',
        'بیماری کبھی بھی نماز کو ساقط نہیں کرتی — اللہ اس کی شکل کو آسان کرتا ہے، دن میں اس کی جگہ کو نہیں۔ اگر وضو نقصان دہ یا ناممکن ہو تو تیمم اس کی جگہ لے لیتا ہے۔',
      ],
    },
  },
  {
    icon: '⏰',
    title: {
      en: 'Missed prayers — Qada',
      bg: 'Пропуснати намази — каза',
      fr: 'Prières manquées — Qada',
      de: 'Versäumte Gebete — Qada',
      nl: 'Gemiste gebeden — Qada',
      tr: 'Kaçırılan namazlar — Kaza',
      ur: 'چھوٹی ہوئی نمازیں — قضا',
    },
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
      fr: [
        "« Quiconque oublie une prière ou la dort, son expiation est de la prier dès qu'il s'en souvient. » (Sahih Muslim 684)",
        "Manquée par sommeil ou véritable oubli : prie-la immédiatement en t'en souvenant — c'est son heure, et il n'y a aucun péché.",
        "Manquée délibérément : il s'agit d'une affaire grave nécessitant une sincère taubah. La majorité des savants estiment qu'elle doit tout de même être rattrapée ; commence à prier à l'heure dès aujourd'hui, et ajoute les prières de rattrapage accompagnées d'un repentir volontaire (voir Salat at-Taubah dans Types de Salah).",
      ],
      de: [
        '„Wer ein Gebet vergisst oder verschläft, dessen Sühne ist, es zu verrichten, sobald er sich daran erinnert.“ (Sahih Muslim 684)',
        'Durch Schlaf oder echte Vergesslichkeit versäumt: Bete es sofort, sobald du dich erinnerst — das ist seine Zeit, und es liegt keine Sünde vor.',
        'Absichtlich versäumt: Dies ist eine ernste Angelegenheit, die aufrichtige Taubah erfordert. Die Mehrheit der Gelehrten vertritt, dass es dennoch nachgeholt werden muss; beginne heute, pünktlich zu beten, und füge die Nachholgebete zusammen mit freiwilliger Reue hinzu (siehe Salat at-Taubah unter Arten des Salah).',
      ],
      nl: [
        '„Wie een gebed vergeet of verslaapt, diens boetedoening is het te verrichten zodra hij zich het herinnert.” (Sahih Muslim 684)',
        'Gemist door slaap of echte vergeetachtigheid: verricht het onmiddellijk zodra je het je herinnert — dat is de tijd ervoor, en er is geen zonde.',
        'Opzettelijk gemist: dit is een ernstige zaak die oprechte taubah vereist. De meerderheid van de geleerden is van mening dat het alsnog moet worden ingehaald; begin vandaag op tijd te bidden en voeg de inhaalgebeden toe naast vrijwillig berouw (zie Salat at-Taubah in Soorten Salah).',
      ],
      tr: [
        '"Kim bir namazı unutur veya uyuyakalıp kaçırırsa, onun kefareti, hatırladığı an onu kılmasıdır." (Sahih Muslim 684)',
        'Uyku veya gerçek unutkanlık nedeniyle kaçırılan: hatırlar hatırlamaz hemen kıl — onun vakti odur ve günah yoktur.',
        "Kasten kaçırılan: bu, samimi bir tövbe gerektiren ciddi bir meseledir. Âlimlerin çoğunluğu yine de kaza edilmesi gerektiğini kabul eder; bugünden itibaren vaktinde kılmaya başla ve gönüllü tövbenin yanında kaza namazlarını da ekle (Namaz Türleri'nde Salat at-Tevbe'ye bakınız).",
      ],
      ur: [
        '"جو شخص کوئی نماز بھول جائے یا اس میں سویا رہ جائے، اس کا کفارہ یہ ہے کہ جب یاد آئے اسی وقت پڑھ لے۔" (صحیح مسلم 684)',
        'نیند یا حقیقی بھول کی وجہ سے چھوٹی ہوئی نماز: یاد آتے ہی فوراً پڑھ لیں — یہی اس کا وقت ہے اور کوئی گناہ نہیں۔',
        'جان بوجھ کر چھوڑی گئی نماز: یہ ایک سنگین معاملہ ہے جس کے لیے سچی توبہ درکار ہے۔ اکثر علماء کے نزدیک اسے پھر بھی قضا کرنا ضروری ہے؛ آج سے وقت پر نماز پڑھنا شروع کریں اور رضاکارانہ توبہ کے ساتھ ساتھ قضا نمازیں بھی ادا کریں (اقسامِ نماز میں صلاۃ التوبہ دیکھیں)۔',
      ],
    },
  },
  {
    icon: '🔧',
    title: {
      en: 'Fixing mistakes — Sujud as-Sahw',
      bg: 'Поправяне на грешки — Суджуд ас-Саху',
      fr: 'Corriger les erreurs — Sujud as-Sahw',
      de: 'Fehler korrigieren — Sujud as-Sahw',
      nl: 'Fouten herstellen — Sujud as-Sahw',
      tr: 'Hataları düzeltmek — Secde-i Sehiv',
      ur: 'غلطیوں کی اصلاح — سجدہ سہو',
    },
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
      fr: [
        "La prosternation de l'oubli : deux sujuds supplémentaires qui réparent les erreurs — oublier le premier tashahhud, ajouter ou omettre une rak'ah par erreur, ou douter de son compte.",
        "Si tu n'es pas sûr du nombre de rak'ahs priées, base-toi sur le nombre dont tu es certain (le plus petit), termine la prière, puis prosterne-toi deux fois avant le salam (Sahih Muslim 571).",
        "Si tu as ajouté quelque chose en trop et que tu ne t'en es rendu compte qu'après avoir terminé, prosterne-toi deux fois après le salam. Simple, miséricordieux, et pas besoin de refaire toute la prière.",
      ],
      de: [
        "Die Vergessenheitsniederwerfung: zwei zusätzliche Sujuds, die Fehler ausbessern — das Vergessen des ersten Tashahhud, das versehentliche Hinzufügen oder Auslassen einer Rak'ah, oder Zweifel an der Anzahl.",
        "Bist du unsicher, wie viele Rak'ahs du gebetet hast, gehe von der Zahl aus, derer du dir sicher bist (der kleineren), vollende das Gebet und wirf dich dann zweimal vor dem Salam nieder (Sahih Muslim 571).",
        'Hast du etwas hinzugefügt und es erst nach Abschluss bemerkt, verrichte die zwei Sujuds nach dem Salam. Einfach, barmherzig, und es besteht keine Notwendigkeit, das ganze Gebet zu wiederholen.',
      ],
      nl: [
        "De vergeetprostratie: twee extra sujuds die vergissingen herstellen — het vergeten van de eerste tashahhud, het per ongeluk toevoegen of overslaan van een rak'ah, of twijfel over het aantal.",
        "Als je niet zeker weet hoeveel rak'ahs je hebt gebeden, ga dan uit van het aantal waar je zeker van bent (het kleinste), voltooi het gebed en kniel dan tweemaal voor de salam (Sahih Muslim 571).",
        'Als je iets extra\'s hebt toegevoegd en dit pas na afloop merkte, verricht dan de twee sujuds na de salam. Eenvoudig, barmhartig, en er is geen noodzaak om het hele gebed te herhalen.',
      ],
      tr: [
        'Sehiv secdesi: hataları telafi eden iki fazladan secde — ilk tahiyyatı unutmak, yanlışlıkla bir rekat eklemek veya eksiltmek ya da sayıda şüpheye düşmek.',
        'Kaç rekat kıldığından emin değilsen, emin olduğun sayıya (küçük olana) göre devam et, namazı tamamla, sonra selamdan önce iki kez secde et (Sahih Muslim 571).',
        'Fazladan bir şey eklediysen ve bunu ancak bitirdikten sonra fark ettiysen, iki secdeyi selamdan sonra yap. Basit, merhametli ve namazın tamamını tekrarlamaya gerek yok.',
      ],
      ur: [
        'سجدہ سہو: دو اضافی سجدے جو غلطیوں کی تلافی کرتے ہیں — پہلا تشہد بھول جانا، غلطی سے ایک رکعت زیادہ یا کم کر دینا، یا رکعتوں کی تعداد میں شک ہو جانا۔',
        'اگر یقین نہ ہو کہ کتنی رکعتیں پڑھی ہیں تو جس تعداد پر یقین ہے (کم تعداد) اس پر بنا کریں، نماز مکمل کریں، پھر سلام سے پہلے دو سجدے کریں (صحیح مسلم 571)۔',
        'اگر آپ نے کچھ اضافی کر لیا اور اس کا احساس ختم کرنے کے بعد ہوا تو دونوں سجدے سلام کے بعد کر لیں۔ آسان، رحمت بھرا، اور پوری نماز دہرانے کی ضرورت نہیں۔',
      ],
    },
  },
  {
    icon: '👥',
    title: {
      en: 'Praying in congregation',
      bg: 'Намаз с джемаат',
      fr: 'Prier en congrégation',
      de: "Beten in der Gemeinschaft (Jama'ah)",
      nl: "Bidden in gemeenschap (jama'ah)",
      tr: 'Cemaatle namaz',
      ur: 'جماعت سے نماز',
    },
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
      fr: [
        '« La prière en congrégation vaut vingt-sept fois plus que la prière accomplie seul. » (Sahih al-Bukhari 645)',
        "Les rangées sont droites et les espaces comblés ; celui qui suit fait exactement ce que fait l'imam et ne le précède jamais (Bukhari 722). Dis « Amin » avec l'imam après Al-Fatiha.",
        "Tu arrives en retard ? Tout ce que tu attrapes avec l'imam compte ; après son salam, lève-toi et complète ce que tu as manqué. Attraper le ruku d'une rak'ah compte comme avoir attrapé cette rak'ah (selon la majorité).",
      ],
      de: [
        '„Das Gebet in der Gemeinschaft ist siebenundzwanzig Mal wertvoller als das allein verrichtete Gebet.“ (Sahih al-Bukhari 645)',
        'Die Reihen sind gerade und die Lücken geschlossen; der Nachfolgende tut genau das, was der Imam tut, und geht ihm nie voraus (Bukhari 722). Sage „Amin“ mit dem Imam nach Al-Fatiha.',
        "Kommst du zu spät? Alles, was du mit dem Imam erfasst, zählt; nach seinem Salam stehe auf und vollende, was du versäumt hast. Das Erfassen des Ruku einer Rak'ah zählt als Erfassen dieser Rak'ah (nach Ansicht der Mehrheit).",
      ],
      nl: [
        '„Het gebed in gemeenschap is zevenentwintig keer beter dan het alleen verrichte gebed.” (Sahih al-Bukhari 645)',
        'De rijen zijn recht en de gaten gesloten; de volgeling doet precies wat de imam doet en gaat hem nooit voor (Bukhari 722). Zeg „Amin” samen met de imam na Al-Fatiha.',
        "Kom je te laat? Alles wat je met de imam meemaakt, telt; sta na zijn salam op en voltooi wat je hebt gemist. Het meemaken van de ruku van een rak'ah geldt als het meemaken van die rak'ah (volgens de meerderheid).",
      ],
      tr: [
        '"Cemaatle kılınan namaz, tek başına kılınan namazdan yirmi yedi derece daha üstündür." (Sahih al-Buhari 645)',
        'Saflar düzgün ve aralar kapalı olur; cemaat, imamın yaptığını aynen yapar ve asla onu geçmez (Buhari 722). Fatiha\'dan sonra imamla birlikte "Amin" de.',
        'Geç mi katıldın? İmamla yakaladığın her şey geçerlidir; onun selamından sonra kalk ve kaçırdığını tamamla. Bir rekatın rükûunu yakalamak, o rekatı yakalamak sayılır (çoğunluğa göre).',
      ],
      ur: [
        '"جماعت کی نماز اکیلے پڑھی گئی نماز سے ستائیس درجے افضل ہے۔" (صحیح البخاری 645)',
        'صفیں سیدھی اور خالی جگہیں پُر ہوتی ہیں؛ مقتدی وہی کرتا ہے جو امام کرتا ہے اور کبھی اس سے آگے نہیں بڑھتا (بخاری 722)۔ الفاتحہ کے بعد امام کے ساتھ "آمین" کہیں۔',
        'دیر سے شامل ہو رہے ہیں؟ امام کے ساتھ جو بھی حصہ مل جائے وہ شمار ہوتا ہے؛ امام کے سلام کے بعد کھڑے ہو کر باقی نماز مکمل کریں۔ کسی رکعت کا رکوع مل جانا اس پوری رکعت کے ملنے کے برابر ہے (اکثریت کے مطابق)۔',
      ],
    },
  },
  {
    icon: '🧎',
    title: {
      en: 'The Sutrah',
      bg: 'Сутрата',
      fr: 'Le Sutrah',
      de: 'Die Sutrah',
      nl: 'De Sutrah',
      tr: 'Sütre',
      ur: 'سترہ',
    },
    body: {
      en: [
        'The Prophet ﷺ would pray towards a sutrah — an object (wall, pillar, bag) placed in front of the place of sujud — and instructed praying towards one (Sunan Abi Dawud 689).',
        'It marks your prayer space so people can pass beyond it without disturbing the prayer.',
      ],
      bg: [
        'Пророкът ﷺ кланял към сутра — предмет (стена, колона, чанта), поставен пред мястото на седжде — и наставлявал да се кланя към такава (Сунен Еби Дауд 689).',
        'Тя очертава пространството на намаза ти, за да могат хората да минават отвъд нея, без да смущават молитвата.',
      ],
      fr: [
        "Le Prophète ﷺ priait en direction d'une sutrah — un objet (mur, pilier, sac) placé devant l'endroit du sujud — et il ordonnait de prier en direction d'une sutrah (Sunan Abi Dawud 689).",
        "Il délimite ton espace de prière afin que les gens puissent passer au-delà sans déranger la prière.",
      ],
      de: [
        'Der Prophet ﷺ betete in Richtung einer Sutrah — ein Gegenstand (Wand, Säule, Tasche), der vor der Stelle des Sujud platziert wird — und wies an, in Richtung einer solchen zu beten (Sunan Abi Dawud 689).',
        'Sie markiert deinen Gebetsbereich, sodass Menschen dahinter vorbeigehen können, ohne das Gebet zu stören.',
      ],
      nl: [
        'De Profeet ﷺ bad in de richting van een sutrah — een voorwerp (muur, pilaar, tas) voor de plaats van sujud geplaatst — en gaf de opdracht in de richting van een sutrah te bidden (Sunan Abi Dawud 689).',
        'Het markeert je gebedsruimte, zodat mensen erlangs kunnen lopen zonder het gebed te verstoren.',
      ],
      tr: [
        'Peygamber ﷺ bir sütreye — secde yerinin önüne konan bir nesneye (duvar, direk, çanta) — doğru namaz kılardı ve bir sütreye doğru kılınmasını emrederdi (Sünen Ebu Davud 689).',
        'Namaz alanını belirler, böylece insanlar namazı bozmadan onun ötesinden geçebilir.',
      ],
      ur: [
        'نبی ﷺ سترے کی طرف نماز پڑھتے تھے — یعنی سجدے کی جگہ کے سامنے رکھی گئی کوئی چیز (دیوار، ستون، تھیلا) — اور سترے کی طرف نماز پڑھنے کی ہدایت فرمائی (سنن ابی داؤد 689)۔',
        'یہ آپ کی نماز کی جگہ کی حد بندی کرتا ہے تاکہ لوگ نماز میں خلل ڈالے بغیر اس کے پیچھے سے گزر سکیں۔',
      ],
    },
  },
  {
    icon: '💗',
    title: {
      en: 'Khushu — praying with presence',
      bg: 'Хушу — намаз с присъствие',
      fr: 'Khushu — prier avec présence',
      de: 'Khushu — mit Hingabe beten',
      nl: 'Khushu — bidden met aanwezigheid',
      tr: 'Huşû — huzur içinde namaz',
      ur: 'خشوع — دل کی حاضری کے ساتھ نماز',
    },
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
      fr: [
        "« Bienheureux sont certes les croyants, ceux qui sont humbles dans leur prière. » (Coran 23:1-2)",
        "« adorer Allah comme si tu Le voyais ; car même si tu ne Le vois pas, Lui te voit. » — L'Ihsan est le but (Sahih al-Bukhari 50).",
        "Clés pratiques : prie dès l'entrée du temps, immobilise chaque membre à chaque position, fais résonner dans ton cœur ce que ta langue prononce, varie tes sourates, et souviens-toi que cette prière pourrait être ta dernière.",
        "Les chuchotements et pensées errantes arrivent à tout le monde — chaque fois que tu le remarques, reviens doucement. Ce retour est en lui-même un acte d'adoration.",
      ],
      de: [
        '„Erfolgreich sind wahrlich die Gläubigen — jene, die in ihrem Gebet demütig sind.“ (Koran 23:1-2)',
        '„Allah so anzubeten, als sähest du Ihn; denn auch wenn du Ihn nicht siehst, sieht Er dich gewiss.“ — Ihsan ist das Ziel (Sahih al-Bukhari 50).',
        'Praktische Schlüssel: Bete, sobald die Zeit eintritt, halte jedes Glied in jeder Position ruhig, übertrage, was deine Zunge spricht, in dein Herz, variiere deine Suren und erinnere dich, dass dieses Gebet dein letztes sein könnte.',
        'Einflüsterungen und abschweifende Gedanken passieren jedem — bemerkst du es, kehre sanft zurück. Dieses Zurückkehren ist selbst Anbetung.',
      ],
      nl: [
        '„Waarlijk succesvol zijn de gelovigen — degenen die nederig zijn in hun gebed.” (Koran 23:1-2)',
        '„Allah aanbidden alsof je Hem ziet; want ook al zie je Hem niet, Hij ziet jou zeker.” — Ihsan is het doel (Sahih al-Bukhari 50).',
        'Praktische sleutels: bid zodra de tijd aanbreekt, houd elk ledemaat rustig in elke houding, laat wat je tong zegt doordringen tot je hart, varieer je soera\'s, en bedenk dat dit gebed je laatste zou kunnen zijn.',
        'Influisteringen en afdwalende gedachten overkomen iedereen — telkens als je het merkt, keer je zachtjes terug. Dat terugkeren is op zichzelf al aanbidding.',
      ],
      tr: [
        '"Mü\'minler gerçekten kurtuluşa ermiştir; onlar ki namazlarında huşû içindedirler." (Kur\'an 23:1-2)',
        '"Allah\'ı görüyormuşçasına ibadet etmen; sen O\'nu görmesen de O seni mutlaka görür." — İhsan hedeftir (Sahih al-Buhari 50).',
        'Pratik anahtarlar: vakit girer girmez namaz kıl, her duruşta her uzvunu sakin tut, dilinin söylediğini kalbine yansıt, surelerini çeşitlendir ve bu namazın son namazın olabileceğini hatırla.',
        'Vesveseler ve dağınık düşünceler herkesin başına gelir — her fark ettiğinde nazikçe geri dön. O geri dönüş bizzat bir ibadettir.',
      ],
      ur: [
        '"بے شک ایمان والے کامیاب ہو گئے — جو اپنی نماز میں عاجزی اختیار کرتے ہیں۔" (قرآن 23:1-2)',
        '"اللہ کی عبادت اس طرح کرنا جیسے تم اسے دیکھ رہے ہو؛ کیونکہ اگرچہ تم اسے نہیں دیکھتے، وہ یقیناً تمہیں دیکھ رہا ہے۔" — احسان ہی مقصود ہے (صحیح البخاری 50)۔',
        'عملی نکات: وقت داخل ہوتے ہی نماز پڑھیں، ہر حالت میں ہر عضو کو ساکن رکھیں، جو زبان کہہ رہی ہے اسے دل میں اتاریں، سورتیں بدلتے رہیں، اور یاد رکھیں کہ یہ نماز آپ کی آخری نماز ہو سکتی ہے۔',
        'وسوسے اور بھٹکتے خیالات ہر کسی کو آتے ہیں — جب بھی محسوس ہو، نرمی سے واپس لوٹ آئیں۔ یہ واپسی بذاتِ خود عبادت ہے۔',
      ],
    },
  },
  {
    icon: '👩',
    title: {
      en: 'Notes for women',
      bg: 'Бележки за жените',
      fr: 'Notes pour les femmes',
      de: 'Hinweise für Frauen',
      nl: 'Aandachtspunten voor vrouwen',
      tr: 'Kadınlar için notlar',
      ur: 'خواتین کے لیے نکات',
    },
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
      fr: [
        "La prière — ses paroles, ses mouvements, ses horaires et ses rak'ahs — est identique pour les femmes et les hommes.",
        'Couverture pendant la prière : tout sauf le visage et les mains, avec des vêtements amples et opaques.',
        "Pendant les menstruations et les saignements post-partum, la prière est entièrement levée et n'est pas rattrapée par la suite (Sahih al-Bukhari 321) — le jeûne, en revanche, est rattrapé.",
        "Une femme peut diriger la prière d'autres femmes, en se tenant au milieu du rang. Prier à la mosquée est son droit ; prier à la maison est tout aussi valable.",
      ],
      de: [
        "Das Gebet — seine Worte, Bewegungen, Zeiten und Rak'ahs — ist für Frauen und Männer identisch.",
        'Bedeckung im Gebet: alles außer Gesicht und Hände, mit weiter, blickdichter Kleidung.',
        'Während der Menstruation und der Wochenbettblutung entfällt das Gebet vollständig und wird danach nicht nachgeholt (Sahih al-Bukhari 321) — das Fasten hingegen wird nachgeholt.',
        'Eine Frau darf andere Frauen im Gebet anführen, indem sie sich in der Mitte der Reihe aufstellt. Das Beten in der Moschee ist ihr Recht; das Beten zu Hause ist ebenso gültig.',
      ],
      nl: [
        "Het gebed — de woorden, bewegingen, tijden en rak'ahs — is voor vrouwen en mannen identiek.",
        'Bedekking tijdens het gebed: alles behalve het gezicht en de handen, met ruimvallende, ondoorzichtige kleding.',
        'Tijdens de menstruatie en het kraambloedverlies vervalt het gebed volledig en wordt het achteraf niet ingehaald (Sahih al-Bukhari 321) — het vasten wordt daarentegen wel ingehaald.',
        'Een vrouw mag andere vrouwen voorgaan in het gebed, staand in het midden van de rij. Bidden in de moskee is haar recht; bidden thuis is even geldig.',
      ],
      tr: [
        'Namaz — sözleri, hareketleri, vakitleri ve rekatları — kadın ve erkek için aynıdır.',
        'Namazda örtünme: yüz ve eller hariç her yer, bol ve şeffaf olmayan kıyafetlerle.',
        'Hayız ve nifas kanaması sırasında namaz tamamen düşer ve sonradan kaza edilmez (Sahih al-Buhari 321) — oruç ise buna karşılık kaza edilir.',
        'Bir kadın, safın ortasında durarak diğer kadınlara namazda imamlık edebilir. Camide namaz kılmak onun hakkıdır; evde namaz kılmak da aynı derecede geçerlidir.',
      ],
      ur: [
        'نماز — اس کے الفاظ، حرکات، اوقات اور رکعتیں — عورتوں اور مردوں کے لیے یکساں ہیں۔',
        'نماز میں پردہ: چہرے اور ہاتھوں کے سوا سب کچھ، ڈھیلے اور غیر شفاف لباس کے ساتھ۔',
        'حیض اور نفاس کے دوران نماز مکمل طور پر ساقط ہو جاتی ہے اور بعد میں اس کی قضا نہیں کی جاتی (صحیح البخاری 321) — اس کے برعکس روزے کی قضا کی جاتی ہے۔',
        'ایک عورت صف کے وسط میں کھڑے ہو کر دوسری عورتوں کی امامت کر سکتی ہے۔ مسجد میں نماز پڑھنا اس کا حق ہے؛ گھر میں نماز پڑھنا بھی اتنا ہی درست ہے۔',
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
  fr: {
    title: 'Au-delà des bases',
    lead: "« Allah veut pour vous la facilité, Il ne veut pas pour vous la difficulté. » (Coran 2:185). La vraie vie arrive — voyages, maladie, erreurs, réveils manqués. La Charia a une réponse miséricordieuse pour chacune.",
    fiqhTitle: '📚 Une note sur les écoles de fiqh',
    fiqh: "Des détails comme l'endroit où poser les mains, ou si le Witr est wajib ou sunnah, diffèrent entre les quatre écoles (hanafite, malikite, shafi'ite, hanbalite) — toutes remontant à la Sunna par une science valide. Ce site présente des positions largement admises avec leurs preuves ; là où ta communauté locale ou ton école diffère sur un détail, suis tes savants en toute confiance. Les différences sont une miséricorde, non une contradiction.",
  },
  de: {
    title: 'Über die Grundlagen hinaus',
    lead: '„Allah will für euch Erleichterung und will für euch nicht Erschwernis.“ (Koran 2:185). Das echte Leben passiert — Reisen, Krankheit, Fehler, verschlafene Wecker. Die Scharia hat für jedes davon eine barmherzige Antwort.',
    fiqhTitle: '📚 Ein Hinweis zu den Fiqh-Rechtsschulen',
    fiqh: "Details wie die Handhaltung oder ob Witr wajib oder sunnah ist, unterscheiden sich zwischen den vier Rechtsschulen (Hanafi, Maliki, Shafi'i, Hanbali) — alle gehen über gültige Gelehrsamkeit auf die Sunna zurück. Diese Seite stellt weithin vertretene Positionen mit ihren Belegen dar; wo deine lokale Gemeinschaft oder Rechtsschule in einem Detail abweicht, folge deinen Gelehrten mit Zuversicht. Die Unterschiede sind eine Barmherzigkeit, kein Widerspruch.",
  },
  nl: {
    title: 'Verder dan de basis',
    lead: '„Allah wil voor jullie het gemakkelijke en wil voor jullie niet het moeilijke.” (Koran 2:185). Het echte leven gebeurt — reizen, ziekte, fouten, gemiste wekkers. De Sharia heeft voor elk daarvan een barmhartig antwoord.',
    fiqhTitle: '📚 Een opmerking over de fiqh-scholen',
    fiqh: "Details zoals waar je de handen plaatst, of of Witr wajib of sunnah is, verschillen tussen de vier scholen (Hanafi, Maliki, Shafi'i, Hanbali) — allemaal via geldige geleerdheid terug te voeren op de Sunnah. Deze site presenteert breed gedragen standpunten met hun bewijzen; waar jouw lokale gemeenschap of school op een detail verschilt, volg dan met vertrouwen je geleerden. De verschillen zijn een barmhartigheid, geen tegenspraak.",
  },
  tr: {
    title: 'Temellerin Ötesinde',
    lead: '"Allah sizin için kolaylık ister, sizin için zorluk istemez." (Kur\'an 2:185). Gerçek hayat işte böyle olur — yolculuk, hastalık, hatalar, kaçırılan alarmlar. Şeriatın her biri için merhametli bir cevabı vardır.',
    fiqhTitle: '📚 Fıkıh mezhepleri hakkında bir not',
    fiqh: 'Ellerin nereye konulacağı veya Vitrin vacip mi sünnet mi olduğu gibi ayrıntılar dört mezhep (Hanefi, Maliki, Şafii, Hanbeli) arasında farklılık gösterir — hepsi geçerli bir ilim yoluyla Sünnete dayanır. Bu site, delilleriyle birlikte yaygın olarak benimsenen görüşleri sunar; yerel topluluğun veya mezhebin bir ayrıntıda farklılık gösterdiğinde, âlimlerini güvenle takip et. Bu farklılıklar bir çelişki değil, bir rahmettir.',
  },
  ur: {
    title: 'بنیادی باتوں سے آگے',
    lead: '"اللہ تمہارے لیے آسانی چاہتا ہے اور تمہارے لیے تنگی نہیں چاہتا۔" (قرآن 2:185)۔ حقیقی زندگی میں ایسا ہوتا ہے — سفر، بیماری، غلطیاں، سوتے رہ جانا۔ شریعت میں ہر ایک کا رحمت بھرا حل موجود ہے۔',
    fiqhTitle: '📚 فقہی مکاتب کے بارے میں ایک نوٹ',
    fiqh: 'ہاتھ کہاں رکھے جائیں، یا وتر واجب ہے یا سنت، جیسی تفصیلات چاروں مکاتبِ فکر (حنفی، مالکی، شافعی، حنبلی) کے درمیان مختلف ہیں — سب معتبر علم کے ذریعے سنت سے جا ملتے ہیں۔ یہ سائٹ وسیع پیمانے پر مانی جانے والی آراء ان کے دلائل کے ساتھ پیش کرتی ہے؛ جہاں آپ کی مقامی برادری یا مکتبِ فکر کسی تفصیل میں مختلف ہو، وہاں اعتماد کے ساتھ اپنے علماء کی پیروی کریں۔ یہ اختلافات رحمت ہیں، تضاد نہیں۔',
  },
}

export default function Beyond() {
  const { lang, L } = useLang()
  const c = C[lang] || C.en

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
