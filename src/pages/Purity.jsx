import {
  toiletDuas,
  adab,
  methodMen,
  methodWomen,
  purityFaqs,
} from '../data/purity.js'
import DuaCard from '../components/DuaCard.jsx'
import { useLang } from '../i18n/LanguageContext.jsx'
import { useGender } from '../i18n/GenderContext.jsx'

const C = {
  en: {
    title: 'Cleanliness & Purity — Istinja',
    lead: '“Purity is half of faith.” (Sahih Muslim 223). Islam treats cleansing after the toilet as worship with a method — and it matters: the Prophet ﷺ warned that most punishment of the grave is because of carelessness with urine (Sahih al-Bukhari 218; Sunan Ibn Majah 348). Here is the complete, practical guide — including the questions people are shy to ask.',
    whyEyebrow: 'The foundations',
    whyTitle: 'Three words to know',
    word1t: 'Istinja — washing with water',
    word1: 'Cleansing the private parts with water after urine or stool. The method the Qur\'an praised in the people of Quba: “In it are men who love to purify themselves.” (Qur\'an 9:108; Sunan Abi Dawud 44)',
    word2t: 'Istijmar — wiping',
    word2: 'Removing the traces by wiping — classically stones, today toilet paper. Valid on its own with at least three wipes, an odd number, until clean (Sahih Muslim 262).',
    word3t: 'Istibra — letting urine finish',
    word3: 'Making sure the flow has fully stopped before cleaning — pausing, moving, a light cough. The habit that solves the “drops afterwards” problem at its root.',
    adabEyebrow: 'Etiquette',
    adabTitle: 'The manners of the toilet (Adab al-Khala)',
    duasTitle: 'The two duas of the toilet',
    methodEyebrow: 'The method',
    methodTitle: 'Step by step, properly clean',
    methodSub: 'The goal is simple: no urine or stool traces remain on the body, and the last drops have left before you clean. Follow the column that applies to you.',
    menTitle: '🚹 For men',
    womenTitle: '🚺 For women',
    methodNote: '⚠️ Balance is the Sunnah: clean thoroughly once, then stop. Endless re-checking, squeezing and re-washing is waswas (whispering), not piety — and the fiqh below deals with it directly.',
    forYou: 'Shown for you — change it with the 👨/🧕 switch in the top bar.',
    otherGuide: 'View the other guide',
    faqEyebrow: 'Honest answers',
    faqTitle: 'Questions everyone has (and few ask)',
    faqSub: 'Urine drops, wet underwear, doubts, towels, incontinence — each answer with its evidence.',
    hygieneTitle: '🧼 A practical modern setup',
    hygiene: 'A small watering can (or bidet attachment / washing bottle) next to the toilet makes istinja effortless — this is the “lota” found in Muslim homes worldwide. Keep toilet paper for the first wipe, water for the real cleaning, soap for the hands, and a personal towel only for drying already-washed skin. With that routine, staying prayer-ready takes seconds.',
  },
  bg: {
    title: 'Чистота и хигиена — истинджа',
    lead: '„Чистотата е половината от вярата.“ (Сахих Муслим 223). Ислямът приема почистването след тоалетна като поклонение с метод — и това е важно: Пророкът ﷺ предупредил, че по-голямата част от мъчението в гроба е заради небрежност към урината (Сахих ал-Бухари 218; Сунен Ибн Маджа 348). Ето пълното практично ръководство — включително въпросите, които хората се срамуват да зададат.',
    whyEyebrow: 'Основите',
    whyTitle: 'Три думи, които да знаеш',
    word1t: 'Истинджа — миене с вода',
    word1: 'Почистване на срамните части с вода след урина или изпражнения. Методът, който Коранът похвалил у хората от Куба: „В нея има мъже, които обичат да се пречистват.“ (Коран 9:108; Сунен Еби Дауд 44)',
    word2t: 'Истиджмар — избърсване',
    word2: 'Премахване на следите чрез бърсане — класически с камъни, днес с тоалетна хартия. Валидно самостоятелно с поне три избърсвания, нечетен брой, до чисто (Сахих Муслим 262).',
    word3t: 'Истибра — изчакване на урината',
    word3: 'Увери се, че потокът е спрял напълно, преди да се почистиш — изчакване, раздвижване, леко покашляне. Навикът, който решава проблема с „капките после“ из корен.',
    adabEyebrow: 'Етикет',
    adabTitle: 'Правилата на тоалетната (адаб ал-халя)',
    duasTitle: 'Двете дуи на тоалетната',
    methodEyebrow: 'Методът',
    methodTitle: 'Стъпка по стъпка, наистина чисто',
    methodSub: 'Целта е проста: по тялото да не остават следи от урина или изпражнения, а последните капки да са излезли, преди да се почистиш. Следвай колоната, която се отнася за теб.',
    menTitle: '🚹 За мъже',
    womenTitle: '🚺 За жени',
    methodNote: '⚠️ Балансът е Сунната: почисти се старателно веднъж и спри. Безкрайното препроверяване, стискане и повторно миене е васуас (нашепване), а не набожност — и фикхът по-долу се занимава с него директно.',
    forYou: 'Показано за теб — промени го с превключвателя 👨/🧕 в горната лента.',
    otherGuide: 'Виж другото ръководство',
    faqEyebrow: 'Честни отговори',
    faqTitle: 'Въпросите, които всеки има (и малцина задават)',
    faqSub: 'Капки урина, мокро бельо, съмнения, кърпи, инконтиненция — всеки отговор с доказателството си.',
    hygieneTitle: '🧼 Практична модерна подредба',
    hygiene: 'Малка каничка (или биде приставка / бутилка за миене) до тоалетната прави истинджата без усилие — това е „лотата“, позната в мюсюлманските домове по света. Дръж тоалетна хартия за първото избърсване, вода за истинското почистване, сапун за ръцете и лична кърпа само за подсушаване на вече измита кожа. С тази рутина да си готов за намаз отнема секунди.',
  },
  fr: {
    title: 'Propreté et pureté — Istinja',
    lead: '« La pureté est la moitié de la foi. » (Sahih Muslim 223). L\'islam considère le nettoyage après les toilettes comme un acte d\'adoration avec une méthode précise — et cela compte : le Prophète ﷺ a averti que la majeure partie du châtiment de la tombe est due à la négligence envers l\'urine (Sahih al-Bukhari 218 ; Sunan Ibn Majah 348). Voici le guide complet et pratique — y compris les questions que l\'on ose peu poser.',
    whyEyebrow: 'Les fondements',
    whyTitle: 'Trois mots à connaître',
    word1t: 'Istinja — se laver avec de l\'eau',
    word1: 'Le nettoyage des parties intimes avec de l\'eau après l\'urine ou les selles. La méthode que le Coran a louée chez les habitants de Quba : « Il s\'y trouve des hommes qui aiment à se purifier. » (Coran 9:108 ; Sunan Abi Dawud 44)',
    word2t: 'Istijmar — s\'essuyer',
    word2: 'L\'élimination des traces par essuyage — classiquement avec des pierres, aujourd\'hui avec du papier toilette. Valable seule avec au moins trois passages, un nombre impair, jusqu\'à ce que ce soit propre (Sahih Muslim 262).',
    word3t: 'Istibra — laisser l\'urine se terminer',
    word3: 'S\'assurer que l\'écoulement s\'est complètement arrêté avant de se nettoyer — en marquant une pause, en bougeant, en toussotant légèrement. L\'habitude qui résout à la racine le problème des « gouttes après coup ».',
    adabEyebrow: 'Bienséance',
    adabTitle: 'Les bonnes manières des toilettes (Adab al-Khala)',
    duasTitle: 'Les deux invocations des toilettes',
    methodEyebrow: 'La méthode',
    methodTitle: 'Étape par étape, une propreté impeccable',
    methodSub: 'L\'objectif est simple : qu\'il ne reste aucune trace d\'urine ou de selles sur le corps, et que les dernières gouttes soient sorties avant de te nettoyer. Suis la colonne qui te concerne.',
    menTitle: '🚹 Pour les hommes',
    womenTitle: '🚺 Pour les femmes',
    methodNote: '⚠️ L\'équilibre, c\'est la Sunna : nettoie-toi soigneusement une fois, puis arrête-toi. Les vérifications, pressions et lavages sans fin sont du waswas (chuchotements), pas de la piété — et le fiqh ci-dessous traite ce point directement.',
    forYou: 'Affiché pour toi — change-le avec le bouton 👨/🧕 dans la barre du haut.',
    otherGuide: 'Voir l\'autre guide',
    faqEyebrow: 'Réponses honnêtes',
    faqTitle: 'Les questions que tout le monde se pose (et que peu osent poser)',
    faqSub: 'Gouttes d\'urine, sous-vêtements humides, doutes, serviettes, incontinence — chaque réponse avec sa preuve.',
    hygieneTitle: '🧼 Une installation moderne et pratique',
    hygiene: 'Un petit arrosoir (ou un accessoire de bidet / une bouteille de lavage) à côté des toilettes rend l\'istinja sans effort — c\'est le « lota » que l\'on trouve dans les foyers musulmans du monde entier. Gardez le papier toilette pour le premier essuyage, l\'eau pour le vrai nettoyage, le savon pour les mains, et une serviette personnelle uniquement pour sécher une peau déjà lavée. Avec cette routine, rester prêt pour la prière ne prend que quelques secondes.',
  },
  de: {
    title: 'Reinheit und Sauberkeit — Istinja',
    lead: '„Reinheit ist die Hälfte des Glaubens.“ (Sahih Muslim 223). Der Islam betrachtet die Reinigung nach der Toilette als Gottesdienst mit einer Methode — und das ist wichtig: Der Prophet ﷺ warnte, dass der größte Teil der Strafe im Grab auf Nachlässigkeit mit Urin zurückzuführen ist (Sahih al-Bukhari 218; Sunan Ibn Majah 348). Hier ist die vollständige, praktische Anleitung — einschließlich der Fragen, die man sich scheut zu stellen.',
    whyEyebrow: 'Die Grundlagen',
    whyTitle: 'Drei Begriffe, die man kennen sollte',
    word1t: 'Istinja — Reinigung mit Wasser',
    word1: 'Die Reinigung der Intimbereiche mit Wasser nach Urin oder Stuhlgang. Die Methode, die der Koran bei den Leuten von Quba lobte: „In ihr sind Männer, die es lieben, sich zu reinigen.“ (Koran 9:108; Sunan Abi Dawud 44)',
    word2t: 'Istijmar — Abwischen',
    word2: 'Das Entfernen der Spuren durch Abwischen — klassisch mit Steinen, heute mit Toilettenpapier. Für sich allein gültig mit mindestens drei Wischvorgängen, einer ungeraden Zahl, bis es sauber ist (Sahih Muslim 262).',
    word3t: 'Istibra — den Urin vollständig ausklingen lassen',
    word3: 'Sicherstellen, dass der Fluss vollständig aufgehört hat, bevor man sich reinigt — eine Pause einlegen, sich bewegen, leicht husten. Die Gewohnheit, die das Problem der „Tropfen danach“ von Grund auf löst.',
    adabEyebrow: 'Etikette',
    adabTitle: 'Die Umgangsformen der Toilette (Adab al-Khala)',
    duasTitle: 'Die zwei Bittgebete der Toilette',
    methodEyebrow: 'Die Methode',
    methodTitle: 'Schritt für Schritt richtig sauber',
    methodSub: 'Das Ziel ist einfach: Es sollen keine Urin- oder Stuhlspuren auf dem Körper zurückbleiben, und die letzten Tropfen sollen abgegangen sein, bevor du dich reinigst. Folge der Spalte, die auf dich zutrifft.',
    menTitle: '🚹 Für Männer',
    womenTitle: '🚺 Für Frauen',
    methodNote: '⚠️ Das Gleichgewicht ist die Sunna: einmal gründlich reinigen, dann aufhören. Endloses Nachprüfen, Drücken und erneutes Waschen ist waswas (Einflüsterung), keine Frömmigkeit — und das Fiqh unten geht direkt darauf ein.',
    forYou: 'Für dich angezeigt — ändere es mit dem 👨/🧕-Schalter in der oberen Leiste.',
    otherGuide: 'Die andere Anleitung ansehen',
    faqEyebrow: 'Ehrliche Antworten',
    faqTitle: 'Fragen, die jeder hat (und die wenige stellen)',
    faqSub: 'Urintropfen, feuchte Unterwäsche, Zweifel, Handtücher, Inkontinenz — jede Antwort mit ihrem Beleg.',
    hygieneTitle: '🧼 Eine praktische moderne Ausstattung',
    hygiene: 'Eine kleine Gießkanne (oder ein Bidet-Aufsatz / eine Waschflasche) neben der Toilette macht Istinja mühelos — das ist die „Lota“, die man in muslimischen Haushalten weltweit findet. Toilettenpapier für den ersten Wischvorgang, Wasser für die eigentliche Reinigung, Seife für die Hände und ein persönliches Handtuch nur zum Trocknen bereits gewaschener Haut. Mit dieser Routine dauert es nur Sekunden, gebetsbereit zu bleiben.',
  },
  nl: {
    title: 'Reinheid en zuiverheid — Istinja',
    lead: '"Reinheid is de helft van het geloof." (Sahih Muslim 223). De islam beschouwt het reinigen na het toilet als aanbidding met een methode — en dat is belangrijk: de Profeet ﷺ waarschuwde dat het grootste deel van de bestraffing in het graf te wijten is aan onachtzaamheid met urine (Sahih al-Bukhari 218; Sunan Ibn Majah 348). Hier is de complete, praktische gids — inclusief de vragen die mensen zich schamen te stellen.',
    whyEyebrow: 'De basis',
    whyTitle: 'Drie woorden om te kennen',
    word1t: 'Istinja — wassen met water',
    word1: 'Het reinigen van de intieme delen met water na urine of ontlasting. De methode die de Koran prees bij de mensen van Quba: "Daarin zijn mannen die zich graag reinigen." (Koran 9:108; Sunan Abi Dawud 44)',
    word2t: 'Istijmar — afvegen',
    word2: 'Het verwijderen van de sporen door afvegen — klassiek met stenen, tegenwoordig met toiletpapier. Op zichzelf geldig met minstens drie veegbewegingen, een oneven aantal, tot het schoon is (Sahih Muslim 262).',
    word3t: 'Istibra — de urine laten uitdruppelen',
    word3: 'Zorgen dat de stroom volledig gestopt is voordat je jezelf reinigt — even wachten, bewegen, licht kuchen. De gewoonte die het probleem van "druppels achteraf" bij de wortel aanpakt.',
    adabEyebrow: 'Etiquette',
    adabTitle: 'De manieren van het toilet (Adab al-Khala)',
    duasTitle: 'De twee smeekbeden van het toilet',
    methodEyebrow: 'De methode',
    methodTitle: 'Stap voor stap, echt schoon',
    methodSub: 'Het doel is simpel: geen sporen van urine of ontlasting blijven op het lichaam achter, en de laatste druppels zijn eruit voordat je jezelf reinigt. Volg de kolom die op jou van toepassing is.',
    menTitle: '🚹 Voor mannen',
    womenTitle: '🚺 Voor vrouwen',
    methodNote: '⚠️ Balans is de Sunnah: reinig jezelf één keer grondig en stop dan. Eindeloos controleren, knijpen en opnieuw wassen is waswas (influistering), geen vroomheid — en de fiqh hieronder gaat hier rechtstreeks op in.',
    forYou: 'Voor jou getoond — wijzig dit met de 👨/🧕-schakelaar in de bovenbalk.',
    otherGuide: 'Bekijk de andere gids',
    faqEyebrow: 'Eerlijke antwoorden',
    faqTitle: 'Vragen die iedereen heeft (en weinigen stellen)',
    faqSub: 'Urinedruppels, natte onderbroeken, twijfels, handdoeken, incontinentie — elk antwoord met bewijs.',
    hygieneTitle: '🧼 Een praktische moderne opstelling',
    hygiene: 'Een kleine gieter (of bidet-aanzet / wasfles) naast het toilet maakt istinja moeiteloos — dit is de "lota" die in moslimhuizen wereldwijd te vinden is. Bewaar toiletpapier voor de eerste veeg, water voor de echte reiniging, zeep voor de handen en een persoonlijke handdoek alleen om al gewassen huid te drogen. Met deze routine kost gebedsklaar blijven maar enkele seconden.',
  },
  tr: {
    title: 'Temizlik ve Taharet — İstinca',
    lead: '"Temizlik imanın yarısıdır." (Sahih Müslim 223). İslam, tuvaletten sonra temizlenmeyi belirli bir yöntemle yapılan bir ibadet olarak görür — ve bu önemlidir: Peygamber ﷺ, kabir azabının çoğunun idrara karşı dikkatsizlikten kaynaklandığı konusunda uyarmıştır (Sahih el-Buhari 218; Sünen İbn Mace 348). İşte insanların sormaya çekindiği sorular da dahil olmak üzere eksiksiz, pratik rehber.',
    whyEyebrow: 'Temeller',
    whyTitle: 'Bilinmesi gereken üç kelime',
    word1t: 'İstinca — su ile temizlenmek',
    word1: 'İdrar veya büyük abdestten sonra mahrem yerleri su ile temizlemek. Kur\'an\'ın Kuba halkını övdüğü yöntem: "Onda temizlenmeyi seven adamlar vardır." (Kur\'an 9:108; Sünen Ebu Davud 44)',
    word2t: 'İstincar — silinmek',
    word2: 'İzleri silerek gidermek — klasik olarak taşlarla, günümüzde tuvalet kağıdıyla. Tek başına en az üç silme ile, tek sayı olacak şekilde, temiz oluncaya kadar geçerlidir (Sahih Müslim 262).',
    word3t: 'İstibra — idrarın tamamen kesilmesini beklemek',
    word3: 'Temizlenmeden önce akışın tamamen durduğundan emin olmak — biraz beklemek, hareket etmek, hafifçe öksürmek. "Sonradan gelen damlalar" sorununu kökünden çözen alışkanlık.',
    adabEyebrow: 'Adab',
    adabTitle: 'Tuvalet adabı (Adab al-Hala)',
    duasTitle: 'Tuvaletin iki duası',
    methodEyebrow: 'Yöntem',
    methodTitle: 'Adım adım, doğru temizlik',
    methodSub: 'Amaç basit: vücutta idrar veya dışkı izi kalmamalı ve temizlenmeden önce son damlalar da gitmiş olmalı. Sana uygun olan sütunu takip et.',
    menTitle: '🚹 Erkekler için',
    womenTitle: '🚺 Kadınlar için',
    methodNote: '⚠️ Denge sünnettir: bir kez iyice temizlen, sonra dur. Sonu gelmeyen kontrol etme, sıkma ve tekrar yıkama vesvesedir, takva değil — aşağıdaki fıkıh bu konuyu doğrudan ele alıyor.',
    forYou: 'Senin için gösteriliyor — üst çubuktaki 👨/🧕 anahtarıyla değiştirebilirsin.',
    otherGuide: 'Diğer rehberi görüntüle',
    faqEyebrow: 'Dürüst cevaplar',
    faqTitle: 'Herkesin aklında olan ama az kişinin sorduğu sorular',
    faqSub: 'İdrar damlaları, ıslak iç çamaşırı, şüpheler, havlular, idrar tutamama — her cevap delili ile birlikte.',
    hygieneTitle: '🧼 Pratik modern bir düzen',
    hygiene: 'Tuvaletin yanında küçük bir sürahi (veya bide aparatı / yıkama şişesi) istincayı zahmetsiz hale getirir — bu, dünya çapında Müslüman evlerinde bulunan "lota"dır. İlk silme için tuvalet kağıdını, gerçek temizlik için suyu, eller için sabunu ve zaten yıkanmış cildi kurulamak için ise kişisel bir havluyu ayırın. Bu rutinle namaza hazır kalmak saniyeler sürer.',
  },
  ur: {
    title: 'صفائی اور طہارت — استنجا',
    lead: '"پاکیزگی ایمان کا نصف حصہ ہے۔" (صحیح مسلم 223)۔ اسلام بیت الخلا کے بعد صفائی کو ایک طریقے کے ساتھ عبادت سمجھتا ہے — اور یہ اہم ہے: نبی ﷺ نے خبردار کیا کہ قبر کے عذاب کا زیادہ تر حصہ پیشاب کے بارے میں لاپروائی کی وجہ سے ہوتا ہے (صحیح البخاری 218؛ سنن ابن ماجہ 348)۔ یہاں مکمل، عملی رہنمائی ہے — بشمول ان سوالات کے جو لوگ شرم کی وجہ سے نہیں پوچھتے۔',
    whyEyebrow: 'بنیادی باتیں',
    whyTitle: 'تین اہم الفاظ',
    word1t: 'استنجا — پانی سے دھونا',
    word1: 'پیشاب یا پاخانے کے بعد پانی سے شرمگاہ کو صاف کرنا۔ وہ طریقہ جس کی قرآن نے اہلِ قبا کی تعریف میں تحسین کی: "اس میں ایسے مرد ہیں جو پاک رہنا پسند کرتے ہیں۔" (قرآن 9:108؛ سنن ابی داؤد 44)',
    word2t: 'استجمار — پونچھنا',
    word2: 'پونچھ کر نشانات دور کرنا — روایتی طور پر پتھروں سے، آج کل ٹوائلٹ پیپر سے۔ کم از کم تین بار، طاق تعداد میں، صاف ہونے تک پونچھنا اکیلے ہی کافی ہے (صحیح مسلم 262)۔',
    word3t: 'استبراء — پیشاب کا مکمل بند ہونا',
    word3: 'صاف کرنے سے پہلے یہ یقینی بنانا کہ بہاؤ مکمل طور پر رک گیا ہے — تھوڑا رکنا، حرکت کرنا، ہلکی کھانسی۔ یہ عادت "بعد میں قطروں" کے مسئلے کو جڑ سے حل کرتی ہے۔',
    adabEyebrow: 'آداب',
    adabTitle: 'بیت الخلا کے آداب (آدابِ خلاء)',
    duasTitle: 'بیت الخلا کی دو دعائیں',
    methodEyebrow: 'طریقہ کار',
    methodTitle: 'قدم بہ قدم، صحیح طریقے سے صفائی',
    methodSub: 'مقصد سادہ ہے: جسم پر پیشاب یا پاخانے کا کوئی نشان باقی نہ رہے، اور صاف کرنے سے پہلے آخری قطرے بھی نکل چکے ہوں۔ اپنے لیے موزوں کالم کی پیروی کریں۔',
    menTitle: '🚹 مردوں کے لیے',
    womenTitle: '🚺 خواتین کے لیے',
    methodNote: '⚠️ توازن ہی سنت ہے: ایک بار اچھی طرح صاف ہو جائیں، پھر رک جائیں۔ بار بار جانچنا، دبانا اور دوبارہ دھونا وسوسہ ہے، تقویٰ نہیں — اور نیچے دیا گیا فقہ اس سے براہِ راست نمٹتا ہے۔',
    forYou: 'آپ کے لیے دکھایا گیا ہے — اسے اوپر والی بار میں 👨/🧕 سوئچ سے تبدیل کریں۔',
    otherGuide: 'دوسری رہنمائی دیکھیں',
    faqEyebrow: 'ایماندارانہ جوابات',
    faqTitle: 'وہ سوالات جو ہر کسی کے ذہن میں ہوتے ہیں (اور کم لوگ پوچھتے ہیں)',
    faqSub: 'پیشاب کے قطرے، گیلا انڈرویئر، شکوک، تولیے، بے ضبطی — ہر جواب اپنی دلیل کے ساتھ۔',
    hygieneTitle: '🧼 ایک عملی جدید انتظام',
    hygiene: 'بیت الخلا کے پاس ایک چھوٹا لوٹا (یا بیڈے اٹیچمنٹ / واشنگ بوتل) استنجا کو آسان بنا دیتا ہے — یہی وہ "لوٹا" ہے جو دنیا بھر کے مسلمان گھروں میں پایا جاتا ہے۔ پہلے پونچھنے کے لیے ٹوائلٹ پیپر، اصل صفائی کے لیے پانی، ہاتھوں کے لیے صابن، اور دھلی ہوئی جلد خشک کرنے کے لیے صرف ذاتی تولیہ رکھیں۔ اس معمول کے ساتھ نماز کے لیے تیار رہنا سیکنڈوں کا کام ہے۔',
  },
}

export default function Purity() {
  const { lang, L } = useLang()
  const { gender } = useGender()
  const c = C[lang] || C.en

  const mine = gender === 'female'
    ? { title: c.womenTitle, steps: L(methodWomen) }
    : { title: c.menTitle, steps: L(methodMen) }
  const other = gender === 'female'
    ? { title: c.menTitle, steps: L(methodMen) }
    : { title: c.womenTitle, steps: L(methodWomen) }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="hero-arabic" lang="ar">الطُّهُورُ شَطْرُ الْإِيمَانِ</p>
          <h1>{c.title}</h1>
          <p>{c.lead}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="eyebrow">{c.whyEyebrow}</span>
          <h2 className="section-title">{c.whyTitle}</h2>
          <div className="card-grid" style={{ marginTop: 22 }}>
            <div className="card">
              <span className="card-icon">💧</span>
              <h3>{c.word1t}</h3>
              <p>{c.word1}</p>
            </div>
            <div className="card">
              <span className="card-icon">🧻</span>
              <h3>{c.word2t}</h3>
              <p>{c.word2}</p>
            </div>
            <div className="card">
              <span className="card-icon">⏳</span>
              <h3>{c.word3t}</h3>
              <p>{c.word3}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <span className="eyebrow">{c.adabEyebrow}</span>
          <h2 className="section-title">{c.adabTitle}</h2>
          <div className="accordion">
            {adab.map((a, i) => (
              <details key={i} open={i === 0}>
                <summary>{L(a.title)}</summary>
                <div className="acc-body">{L(a.detail)}</div>
              </details>
            ))}
          </div>

          <h2 className="section-title" style={{ marginTop: 40 }}>{c.duasTitle}</h2>
          <div className="two-col">
            {toiletDuas.map((d) => (
              <DuaCard key={d.id} dua={d} />
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <span className="eyebrow">{c.methodEyebrow}</span>
          <h2 className="section-title">{c.methodTitle}</h2>
          <p className="section-sub">{c.methodSub}</p>
          {gender ? (
            <>
              <div className="card">
                <h3>{mine.title}</h3>
                <p style={{ color: 'var(--muted)', fontSize: '0.84rem', marginTop: 4 }}>
                  {c.forYou}
                </p>
                <ol style={{ margin: '12px 0 0 20px', color: 'var(--ink-soft)' }}>
                  {mine.steps.map((s, i) => (
                    <li key={i} style={{ marginBottom: 10 }}>{s}</li>
                  ))}
                </ol>
              </div>
              <div className="accordion" style={{ marginTop: 16 }}>
                <details>
                  <summary>{c.otherGuide}: {other.title}</summary>
                  <div className="acc-body">
                    <ol style={{ margin: '4px 0 4px 20px' }}>
                      {other.steps.map((s, i) => (
                        <li key={i} style={{ marginBottom: 9 }}>{s}</li>
                      ))}
                    </ol>
                  </div>
                </details>
              </div>
            </>
          ) : (
            <div className="two-col">
              <div className="card">
                <h3>{c.menTitle}</h3>
                <ol style={{ margin: '12px 0 0 20px', color: 'var(--ink-soft)' }}>
                  {L(methodMen).map((s, i) => (
                    <li key={i} style={{ marginBottom: 10 }}>{s}</li>
                  ))}
                </ol>
              </div>
              <div className="card">
                <h3>{c.womenTitle}</h3>
                <ol style={{ margin: '12px 0 0 20px', color: 'var(--ink-soft)' }}>
                  {L(methodWomen).map((s, i) => (
                    <li key={i} style={{ marginBottom: 10 }}>{s}</li>
                  ))}
                </ol>
              </div>
            </div>
          )}
          <div className="callout gold">{c.methodNote}</div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <span className="eyebrow">{c.faqEyebrow}</span>
          <h2 className="section-title">{c.faqTitle}</h2>
          <p className="section-sub">{c.faqSub}</p>
          <div className="accordion">
            {purityFaqs.map((f, i) => (
              <details key={i}>
                <summary>{L(f.q)}</summary>
                <div className="acc-body">{L(f.a)}</div>
              </details>
            ))}
          </div>

          <div className="callout green" style={{ marginTop: 26 }}>
            <strong>{c.hygieneTitle}</strong>
            {c.hygiene}
          </div>
        </div>
      </section>
    </>
  )
}
