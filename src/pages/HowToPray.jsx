import { useEffect, useState } from 'react'
import { praySteps } from '../data/steps.js'
import { videos } from '../data/videos.js'
import PoseFigure from '../components/PoseFigure.jsx'
import VideoEmbed from '../components/VideoEmbed.jsx'
import { useLang } from '../i18n/LanguageContext.jsx'
import { useGender } from '../i18n/GenderContext.jsx'

const C = {
  en: {
    title: 'How to Pray, Step by Step',
    lead: '“Pray as you have seen me praying.” (Sahih al-Bukhari 631). Walk through every movement and every word below — take it slowly, one step at a time.',
    guideEyebrow: 'Interactive guide',
    guideTitle: 'The prayer, from takbir to salam',
    guideSub: "Use the Next button (or the progress bar) to move through the steps. Together, steps 3–8 make one rak'ah — the repeating unit of every prayer.",
    fullTitle: "🧭 Putting a whole prayer together (example: Fajr, 2 rak'ahs)",
    full: "Takbir → Fatiha + surah → ruku → stand → 2 sujuds → stand for rak'ah 2 → Fatiha + surah → ruku → stand → 2 sujuds → sit: tashahhud + salawat + dua → salam. For 3 or 4 rak'ah prayers, sit for the first tashahhud after rak'ah 2, then continue (reciting only Al-Fatiha in rak'ahs 3–4) and finish the full sitting at the end.",
    watchEyebrow: 'Watch & imitate',
    watchTitle: 'Video guides',
    watchSub: 'Seeing the prayer performed makes everything click. These embedded lessons walk through the whole salah.',
    fatihaEyebrow: 'Learn the words',
    fatihaTitle: 'Master Al-Fatiha',
    fatihaSub: "Al-Fatiha is recited in every rak'ah — these word-by-word videos will have you reciting it confidently.",
    maleNote: {
      title: '👨 For you as a man',
      body: 'Dress: cover at minimum navel to knees, and the shoulders when possible (Sahih al-Bukhari 359). Strive to pray the fard in congregation at the mosque — 27 times the reward (Sahih al-Bukhari 645) — and Jumu\'ah on Friday is obligatory for you. When leading or praying alone, recite aloud in Fajr, Maghrib and Isha.',
    },
    femaleNote: {
      title: '🧕 For you as a woman',
      body: 'Your prayer is identical to the men\'s in every word, movement and rak\'ah. Dress: cover everything except the face and hands — hair included — in loose, opaque clothing (Sunan Abi Dawud 641). Praying at home is fully valid and beloved; the mosque is your right too. During menstruation and post-natal bleeding, prayer is lifted entirely and is not made up afterwards (Sahih al-Bukhari 321). Jumu\'ah is not obligatory for you — you pray Dhuhr instead, though you are welcome to attend.',
    },
  },
  bg: {
    title: 'Как се кланя намаз, стъпка по стъпка',
    lead: '„Кланяйте, както видяхте мен да кланям.“ (Сахих ал-Бухари 631). Премини през всяко движение и всяка дума по-долу — бавно, стъпка по стъпка.',
    guideEyebrow: 'Интерактивно ръководство',
    guideTitle: 'Намазът — от текбира до селяма',
    guideSub: 'Използвай бутона „Следваща стъпка“ (или лентата за напредък), за да преминаваш през стъпките. Заедно стъпки 3–8 образуват един рекят — повтарящата се единица на всеки намаз.',
    fullTitle: '🧭 Сглобяване на цял намаз (пример: Фаджр, 2 рекята)',
    full: 'Текбир → Фатиха + сура → рукю → изправяне → 2 седждета → ставане за 2-ри рекят → Фатиха + сура → рукю → изправяне → 2 седждета → сядане: тешеххуд + салауат + дуа → селям. При намази от 3 или 4 рекята сядаш за първия тешеххуд след 2-рия рекят, после продължаваш (четейки само Ал-Фатиха в рекяти 3–4) и завършваш с пълното сядане накрая.',
    watchEyebrow: 'Гледай и повтаряй',
    watchTitle: 'Видео ръководства',
    watchSub: 'Когато видиш намаза изпълнен, всичко си идва на мястото. Тези вградени уроци преминават през целия намаз.',
    fatihaEyebrow: 'Научи думите',
    fatihaTitle: 'Овладей Ал-Фатиха',
    fatihaSub: 'Ал-Фатиха се чете във всеки рекят — тези видеа дума по дума ще те накарат да я четеш уверено.',
    maleNote: {
      title: '👨 За теб като мъж',
      body: 'Облекло: покрий минимум от пъпа до коленете, а по възможност и раменете (Сахих ал-Бухари 359). Стреми се да кланяш фарзовете с джемаат в джамията — 27 пъти по-голяма награда (Сахих ал-Бухари 645) — а Джума в петък е задължителна за теб. Когато водиш или кланяш сам, чети на глас във Фаджр, Магриб и Иша.',
    },
    femaleNote: {
      title: '🧕 За теб като жена',
      body: 'Твоят намаз е еднакъв с този на мъжете във всяка дума, движение и рекят. Облекло: покрий всичко освен лицето и дланите — включително косата — със свободни, непрозрачни дрехи (Сунен Еби Дауд 641). Намазът у дома е напълно валиден и обичан; джамията също е твое право. По време на месечен цикъл и следродилно кръвотечение намазът отпада изцяло и не се наваксва (Сахих ал-Бухари 321). Джума не е задължителна за теб — вместо нея кланяш Зухр, но си добре дошла да присъстваш.',
    },
  },
  fr: {
    title: 'Comment prier, étape par étape',
    lead: "« Priez comme vous m'avez vu prier. » (Sahih al-Bukhari 631). Parcours chaque mouvement et chaque parole ci-dessous — prends ton temps, une étape à la fois.",
    guideEyebrow: 'Guide interactif',
    guideTitle: 'La prière, du takbir au salam',
    guideSub: "Utilise le bouton Suivant (ou la barre de progression) pour avancer dans les étapes. Ensemble, les étapes 3 à 8 forment un rak'ah — l'unité qui se répète dans chaque prière.",
    fullTitle: "🧭 Assembler une prière complète (exemple : Fajr, 2 rak'ahs)",
    full: "Takbir → Fatiha + sourate → ruku → se relever → 2 sujouds → se relever pour le rak'ah 2 → Fatiha + sourate → ruku → se relever → 2 sujouds → s'asseoir : tashahhud + salawat + dua → salam. Pour les prières de 3 ou 4 rak'ahs, assieds-toi pour le premier tashahhud après le rak'ah 2, puis continue (en récitant uniquement Al-Fatiha aux rak'ahs 3-4) et termine par l'assise complète à la fin.",
    watchEyebrow: 'Regarde & imite',
    watchTitle: 'Guides vidéo',
    watchSub: 'Voir la prière exécutée fait que tout devient clair. Ces leçons intégrées parcourent l\'ensemble du salah.',
    fatihaEyebrow: 'Apprends les mots',
    fatihaTitle: 'Maîtrise Al-Fatiha',
    fatihaSub: "Al-Fatiha est récitée à chaque rak'ah — ces vidéos mot à mot te permettront de la réciter avec assurance.",
    maleNote: {
      title: '👨 Pour toi en tant qu\'homme',
      body: "Tenue : couvre au minimum du nombril aux genoux, et les épaules si possible (Sahih al-Bukhari 359). Efforce-toi de prier les fard en congrégation à la mosquée — 27 fois la récompense (Sahih al-Bukhari 645) — et la Jumu'ah du vendredi t'est obligatoire. Quand tu diriges ou pries seul, récite à voix haute au Fajr, au Maghrib et à l'Isha.",
    },
    femaleNote: {
      title: '🧕 Pour toi en tant que femme',
      body: "Ta prière est identique à celle des hommes en chaque mot, mouvement et rak'ah. Tenue : couvre tout sauf le visage et les mains — cheveux compris — avec des vêtements amples et opaques (Sunan Abi Dawud 641). Prier à la maison est pleinement valable et aimé ; la mosquée est aussi ton droit. Pendant les menstruations et les saignements post-partum, la prière est entièrement levée et n'est pas rattrapée ensuite (Sahih al-Bukhari 321). La Jumu'ah ne t'est pas obligatoire — tu pries le Dhuhr à la place, bien que tu sois la bienvenue pour y assister.",
    },
  },
  de: {
    title: 'Wie man betet, Schritt für Schritt',
    lead: '„Betet, wie ihr mich habt beten sehen.“ (Sahih al-Bukhari 631). Geh unten jede Bewegung und jedes Wort durch — nimm dir Zeit, Schritt für Schritt.',
    guideEyebrow: 'Interaktive Anleitung',
    guideTitle: 'Das Gebet, vom Takbir bis zum Salam',
    guideSub: "Nutze den Weiter-Button (oder die Fortschrittsleiste), um dich durch die Schritte zu bewegen. Zusammen bilden die Schritte 3–8 ein Rak'ah — die sich wiederholende Einheit jedes Gebets.",
    fullTitle: "🧭 Ein komplettes Gebet zusammensetzen (Beispiel: Fajr, 2 Rak'ahs)",
    full: "Takbir → Fatiha + Sure → Ruku → aufstehen → 2 Sujuds → aufstehen für Rak'ah 2 → Fatiha + Sure → Ruku → aufstehen → 2 Sujuds → hinsetzen: Tashahhud + Salawat + Dua → Salam. Bei Gebeten mit 3 oder 4 Rak'ahs setzt du dich nach Rak'ah 2 für den ersten Tashahhud hin, machst dann weiter (in den Rak'ahs 3–4 nur Al-Fatiha rezitierend) und schließt am Ende mit dem vollständigen Sitzen ab.",
    watchEyebrow: 'Anschauen & nachahmen',
    watchTitle: 'Videoanleitungen',
    watchSub: 'Das Gebet ausgeführt zu sehen, lässt alles klar werden. Diese eingebetteten Lektionen führen durch das gesamte Salah.',
    fatihaEyebrow: 'Lerne die Worte',
    fatihaTitle: 'Al-Fatiha meistern',
    fatihaSub: "Al-Fatiha wird in jedem Rak'ah rezitiert — diese Wort-für-Wort-Videos bringen dich dazu, sie sicher zu rezitieren.",
    maleNote: {
      title: '👨 Für dich als Mann',
      body: "Kleidung: bedecke mindestens vom Nabel bis zu den Knien, und wenn möglich die Schultern (Sahih al-Bukhari 359). Bemühe dich, die Fard-Gebete in der Gemeinschaft in der Moschee zu beten — 27-facher Lohn (Sahih al-Bukhari 645) — und die Jumu'ah am Freitag ist für dich Pflicht. Wenn du vorbetest oder allein betest, rezitiere beim Fajr, Maghrib und Isha laut.",
    },
    femaleNote: {
      title: '🧕 Für dich als Frau',
      body: "Dein Gebet ist in jedem Wort, jeder Bewegung und jedem Rak'ah identisch mit dem der Männer. Kleidung: bedecke alles außer Gesicht und Händen — Haare eingeschlossen — mit weiter, blickdichter Kleidung (Sunan Abi Dawud 641). Zuhause zu beten ist voll gültig und geliebt; die Moschee ist ebenso dein Recht. Während der Menstruation und der Wochenblutung entfällt das Gebet vollständig und wird danach nicht nachgeholt (Sahih al-Bukhari 321). Die Jumu'ah ist für dich nicht Pflicht — du betest stattdessen Dhuhr, bist aber willkommen, daran teilzunehmen.",
    },
  },
  nl: {
    title: 'Hoe te bidden, stap voor stap',
    lead: '„Bid zoals jullie mij hebben zien bidden.” (Sahih al-Bukhari 631). Doorloop hieronder elke beweging en elk woord — neem rustig de tijd, stap voor stap.',
    guideEyebrow: 'Interactieve gids',
    guideTitle: 'Het gebed, van takbir tot salam',
    guideSub: "Gebruik de knop Volgende (of de voortgangsbalk) om door de stappen te bewegen. Samen vormen stappen 3–8 één rak'ah — de zich herhalende eenheid van elk gebed.",
    fullTitle: "🧭 Een heel gebed samenstellen (voorbeeld: Fajr, 2 rak'ahs)",
    full: "Takbir → Fatiha + soera → ruku → opstaan → 2 sujuds → opstaan voor rak'ah 2 → Fatiha + soera → ruku → opstaan → 2 sujuds → zitten: tashahhud + salawat + doea → salam. Bij gebeden van 3 of 4 rak'ahs ga je na rak'ah 2 zitten voor de eerste tashahhud, ga je daarna verder (in rak'ahs 3–4 alleen Al-Fatiha reciterend) en sluit je aan het einde af met het volledige zitten.",
    watchEyebrow: 'Kijk & doe na',
    watchTitle: 'Videogidsen',
    watchSub: "Het gebed uitgevoerd zien maakt alles duidelijk. Deze ingesloten lessen doorlopen het hele salah.",
    fatihaEyebrow: 'Leer de woorden',
    fatihaTitle: 'Beheers Al-Fatiha',
    fatihaSub: "Al-Fatiha wordt in elke rak'ah gereciteerd — deze woord-voor-woord video's laten je hem vol vertrouwen reciteren.",
    maleNote: {
      title: '👨 Voor jou als man',
      body: "Kleding: bedek minimaal van navel tot knieën, en indien mogelijk de schouders (Sahih al-Bukhari 359). Streef ernaar de fard in gemeenschap in de moskee te bidden — 27 keer de beloning (Sahih al-Bukhari 645) — en de Jumu'ah op vrijdag is voor jou verplicht. Wanneer je voorgaat of alleen bidt, reciteer dan hardop bij Fajr, Maghrib en Isha.",
    },
    femaleNote: {
      title: '🧕 Voor jou als vrouw',
      body: "Jouw gebed is identiek aan dat van mannen in elk woord, elke beweging en elke rak'ah. Kleding: bedek alles behalve het gezicht en de handen — haar inbegrepen — met losse, ondoorzichtige kleding (Sunan Abi Dawud 641). Thuis bidden is volledig geldig en geliefd; de moskee is ook jouw recht. Tijdens de menstruatie en het kraambloedverlies vervalt het gebed volledig en wordt het daarna niet ingehaald (Sahih al-Bukhari 321). Jumu'ah is niet verplicht voor jou — je bidt in plaats daarvan Dhuhr, al ben je welkom om aanwezig te zijn.",
    },
  },
  tr: {
    title: 'Adım Adım Namaz Nasıl Kılınır',
    lead: '"Beni nasıl namaz kılarken gördüyseniz öyle namaz kılın." (Sahih el-Buhari 631). Aşağıdaki her hareketi ve her sözü adım adım, acele etmeden takip et.',
    guideEyebrow: 'Etkileşimli rehber',
    guideTitle: 'Tekbirden selama namaz',
    guideSub: 'Adımlar arasında ilerlemek için İleri butonunu (veya ilerleme çubuğunu) kullan. 3-8. adımlar birlikte bir rekat oluşturur — her namazın tekrarlanan birimi.',
    fullTitle: '🧭 Tam bir namazı bir araya getirmek (örnek: Sabah, 2 rekat)',
    full: "Tekbir → Fatiha + sure → rükû → kalkış → 2 secde → 2. rekat için kalkış → Fatiha + sure → rükû → kalkış → 2 secde → oturuş: tahiyyat + salavat + dua → selam. 3 veya 4 rekatlı namazlarda 2. rekattan sonra ilk tahiyyat için otur, sonra devam et (3-4. rekatlarda yalnızca Fatiha okuyarak) ve sonunda tam oturuşla bitir.",
    watchEyebrow: 'İzle & taklit et',
    watchTitle: 'Video rehberleri',
    watchSub: 'Namazın kılınışını görmek her şeyi netleştirir. Bu gömülü dersler namazın tamamını adım adım gösterir.',
    fatihaEyebrow: 'Kelimeleri öğren',
    fatihaTitle: "Fatiha'da ustalaş",
    fatihaSub: "Fatiha her rekatta okunur — bu kelime kelime videolar onu güvenle okumanı sağlayacak.",
    maleNote: {
      title: '👨 Erkek olarak senin için',
      body: "Kıyafet: en az göbekten dizlere kadar, mümkünse omuzları da ört (Sahih el-Buhari 359). Farzları camide cemaatle kılmaya gayret et — 27 kat sevap (Sahih el-Buhari 645) — ve Cuma namazı senin için farzdır. İmam olduğunda veya tek başına kıldığında Sabah, Akşam ve Yatsı'da sesli oku.",
    },
    femaleNote: {
      title: '🧕 Kadın olarak senin için',
      body: "Namazın, her kelime, hareket ve rekatta erkeklerinkiyle aynıdır. Kıyafet: yüz ve eller hariç her yeri — saç dahil — bol ve şeffaf olmayan giysilerle ört (Sünen Ebu Davud 641). Evde namaz kılmak tamamen geçerli ve sevilen bir şeydir; cami de senin hakkındır. Adet ve loğusalık kanaması sırasında namaz tamamen kalkar ve sonradan kaza edilmez (Sahih el-Buhari 321). Cuma namazı senin için farz değildir — onun yerine Öğle'yi kılarsın, yine de katılman için davetlisin.",
    },
  },
  ur: {
    title: 'نماز کیسے پڑھیں، مرحلہ بہ مرحلہ',
    lead: '”نماز پڑھو جیسے تم نے مجھے نماز پڑھتے دیکھا ہے۔“ (صحیح البخاری 631)۔ نیچے ہر حرکت اور ہر لفظ سے گزریں — آہستگی سے، ایک وقت میں ایک مرحلہ۔',
    guideEyebrow: 'انٹرایکٹو رہنما',
    guideTitle: 'نماز، تکبیر سے سلام تک',
    guideSub: 'مراحل میں آگے بڑھنے کے لیے اگلا بٹن (یا پیش رفت بار) استعمال کریں۔ مراحل 3 تا 8 مل کر ایک رکعت بناتے ہیں — ہر نماز کی دہرائی جانے والی اکائی۔',
    fullTitle: '🧭 مکمل نماز کو یکجا کرنا (مثال: فجر، 2 رکعتیں)',
    full: 'تکبیر → فاتحہ + سورت → رکوع → کھڑا ہونا → 2 سجدے → دوسری رکعت کے لیے کھڑا ہونا → فاتحہ + سورت → رکوع → کھڑا ہونا → 2 سجدے → بیٹھنا: تشہد + صلوات + دعا → سلام۔ 3 یا 4 رکعت والی نمازوں میں دوسری رکعت کے بعد پہلے تشہد کے لیے بیٹھیں، پھر جاری رکھیں (تیسری اور چوتھی رکعت میں صرف الفاتحہ پڑھتے ہوئے) اور آخر میں مکمل بیٹھک کے ساتھ ختم کریں۔',
    watchEyebrow: 'دیکھیں اور نقل کریں',
    watchTitle: 'ویڈیو رہنما',
    watchSub: 'نماز کو ادا ہوتے دیکھنا سب کچھ واضح کر دیتا ہے۔ یہ شامل کردہ اسباق پوری نماز کا احاطہ کرتے ہیں۔',
    fatihaEyebrow: 'الفاظ سیکھیں',
    fatihaTitle: 'الفاتحہ میں مہارت حاصل کریں',
    fatihaSub: 'الفاتحہ ہر رکعت میں پڑھی جاتی ہے — یہ لفظ بہ لفظ ویڈیوز آپ کو اعتماد کے ساتھ پڑھنے کے قابل بنائیں گی۔',
    maleNote: {
      title: '👨 آپ کے لیے بطور مرد',
      body: 'لباس: کم از کم ناف سے گھٹنوں تک، اور ممکن ہو تو کندھے بھی ڈھانپیں (صحیح البخاری 359)۔ فرض نمازیں مسجد میں جماعت کے ساتھ پڑھنے کی کوشش کریں — 27 گنا ثواب (صحیح البخاری 645) — اور جمعہ آپ پر فرض ہے۔ امامت کرتے وقت یا اکیلے پڑھتے وقت فجر، مغرب اور عشاء میں بلند آواز سے قراءت کریں۔',
    },
    femaleNote: {
      title: '🧕 آپ کے لیے بطور عورت',
      body: 'آپ کی نماز ہر لفظ، حرکت اور رکعت میں مردوں کی طرح ہی ہے۔ لباس: چہرے اور ہاتھوں کے سوا سب کچھ — بالوں سمیت — ڈھیلے اور غیر شفاف کپڑوں سے ڈھانپیں (سنن ابی داؤد 641)۔ گھر میں نماز پڑھنا مکمل طور پر جائز اور پسندیدہ ہے؛ مسجد بھی آپ کا حق ہے۔ حیض اور نفاس کے دوران نماز مکمل طور پر ساقط ہو جاتی ہے اور بعد میں قضا نہیں کی جاتی (صحیح البخاری 321)۔ جمعہ آپ پر فرض نہیں — اس کے بجائے آپ ظہر پڑھتی ہیں، اگرچہ آپ کی شرکت کا خیرمقدم ہے۔',
    },
  },
}

function StepGuide() {
  const [i, setI] = useState(0)
  const [dir, setDir] = useState('next')
  const { L, t } = useLang()
  const step = praySteps[i]
  const last = praySteps.length - 1

  const go = (idx, direction) => {
    setDir(direction ?? (idx > i ? 'next' : 'prev'))
    setI(Math.max(0, Math.min(last, idx)))
  }

  // Arrow keys move between steps.
  useEffect(() => {
    const onKey = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return
      if (e.key === 'ArrowRight') {
        setDir('next')
        setI((x) => Math.min(last, x + 1))
      }
      if (e.key === 'ArrowLeft') {
        setDir('prev')
        setI((x) => Math.max(0, x - 1))
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [last])

  // stagger helper: sequential reveal delays for the content column
  let seq = 0
  const stagger = () => ({ animationDelay: `${140 + seq++ * 80}ms` })

  return (
    <div className="step-shell">
      <div className="step-dots" role="tablist" aria-label="Prayer steps">
        {praySteps.map((s, idx) => (
          <button
            key={s.id}
            className={`step-dot ${idx < i ? 'done' : ''} ${idx === i ? 'current' : ''}`}
            onClick={() => go(idx)}
            role="tab"
            aria-selected={idx === i}
            aria-label={`${t.common.step} ${idx + 1}: ${L(s.title)}`}
            title={L(s.title)}
          >
            {idx < i ? '✓' : idx + 1}
          </button>
        ))}
        <div className="step-fill" aria-hidden="true">
          <div style={{ width: `${(i / last) * 100}%` }} />
        </div>
      </div>
      <p className="step-keys-hint">{t.common.keysHint}</p>
      <div className={`step-body anim-${dir}`} key={step.id}>
        <div className="step-figure">
          <PoseFigure pose={step.pose} poseKey={step.id} />
          <span className="pose-name">{L(step.poseName)}</span>
          <span className="pose-arabic" lang="ar">{step.poseArabic}</span>
        </div>
        <div className="step-content">
          <span className="step-count">
            {t.common.step} {i + 1} {t.common.of} {praySteps.length}
          </span>
          <h3>{L(step.title)}</h3>
          <ul>
            {L(step.points).map((p, idx) => (
              <li key={idx} style={stagger()}>{p}</li>
            ))}
          </ul>
          {step.say && (
            <div className="step-say" style={stagger()}>
              <div className="say-arabic" lang="ar">{step.say.arabic}</div>
              <div className="say-translit">{L(step.say.translit)}</div>
              <div className="say-meaning">{L(step.say.meaning)}</div>
            </div>
          )}
          {step.mistake && (
            <div className="step-mistake" style={stagger()}>⚠️ {L(step.mistake)}</div>
          )}
        </div>
      </div>
      <div className="step-nav">
        <button
          className="btn btn-outline"
          style={{ borderColor: 'var(--line)', color: 'var(--ink)' }}
          onClick={() => go(i - 1, 'prev')}
          disabled={i === 0}
        >
          {t.common.prev}
        </button>
        <button
          className="btn btn-green"
          onClick={() => (i === last ? go(0, 'prev') : go(i + 1, 'next'))}
        >
          {i === last ? t.common.restart : t.common.next}
        </button>
      </div>
    </div>
  )
}

const FEMALE_PRAY_VIDEOS = ['UYJkweNC7w0', 'KYUFRnrDyaw']
const MALE_PRAY_VIDEOS = ['2ZEmsdEOpbk', 'K9Ud5E28Cpc', 'f6iR5elhDdk']

export default function HowToPray() {
  const { lang } = useLang()
  const { gender } = useGender()
  const c = C[lang] || C.en
  const gNote = gender === 'female' ? c.femaleNote : gender === 'male' ? c.maleNote : null

  // Show the prayer demonstrated by someone of the viewer's own gender;
  // both sets if not chosen yet.
  const prayVideos = videos.pray.filter((v) => {
    if (gender === 'female') return FEMALE_PRAY_VIDEOS.includes(v.id)
    if (gender === 'male') return MALE_PRAY_VIDEOS.includes(v.id)
    return true
  })

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="hero-arabic" lang="ar">صَلُّوا كَمَا رَأَيْتُمُونِي أُصَلِّي</p>
          <h1>{c.title}</h1>
          <p>{c.lead}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="eyebrow">{c.guideEyebrow}</span>
          <h2 className="section-title">{c.guideTitle}</h2>
          <p className="section-sub">{c.guideSub}</p>
          {gNote && (
            <div className="callout green" style={{ marginTop: 0 }}>
              <strong>{gNote.title}</strong>
              {gNote.body}
            </div>
          )}
          <StepGuide />

          <div className="callout green" style={{ marginTop: 30 }}>
            <strong>{c.fullTitle}</strong>
            {c.full}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <span className="eyebrow">{c.watchEyebrow}</span>
          <h2 className="section-title">{c.watchTitle}</h2>
          <p className="section-sub">{c.watchSub}</p>
          <div className="video-grid">
            {prayVideos.map((v) => (
              <VideoEmbed key={v.id} video={v} />
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <span className="eyebrow">{c.fatihaEyebrow}</span>
          <h2 className="section-title">{c.fatihaTitle}</h2>
          <p className="section-sub">{c.fatihaSub}</p>
          <div className="video-grid">
            {videos.fatiha.map((v) => (
              <VideoEmbed key={v.id} video={v} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
