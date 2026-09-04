import { useState } from 'react'
import { duas, duaCategories } from '../data/duas.js'
import DuaCard from '../components/DuaCard.jsx'
import { useLang } from '../i18n/LanguageContext.jsx'

const C = {
  en: {
    title: 'Duas & Surahs for Salah',
    lead: "“Call upon Me; I will respond to you.” (Qur'an 40:60). Every recitation you need for the prayer — in Arabic, with transliteration, translation and its authentic source.",
    subs: {
      'in-prayer':
        'In the order they occur in the prayer — from the opening supplication to the closing salam.',
      quran:
        'Al-Fatiha is essential; then memorise the short surahs one at a time, starting with Al-Kawthar or Al-Ikhlas. Text follows the Uthmani script; translations are Saheeh International (quran.com).',
      'after-prayer':
        'The sunnah adhkar said after the tasleem — a few minutes that carry immense reward.',
      special:
        'Duas for specific prayers and occasions — Witr, Istikhara, repentance, and entering the masjid.',
    },
  },
  bg: {
    title: 'Дуи и сури за намаза',
    lead: '„Зовете Ме, и Аз ще ви откликна!“ (Коран 40:60). Всичко, което се чете в намаза — на арабски, с транслитерация, превод и достоверен източник.',
    subs: {
      'in-prayer':
        'В реда, в който се срещат в намаза — от встъпителната дуа до завършващия селям.',
      quran:
        'Ал-Фатиха е задължителна; после учи кратките сури една по една, като започнеш с Ал-Кеусер или Ал-Ихляс. Текстът следва усманиевия шрифт; преводите са по смисъл.',
      'after-prayer':
        'Сунна азкярът след теслима — няколко минути с огромна награда.',
      special:
        'Дуи за конкретни намази и случаи — Витр, Истихара, покаяние и влизане в джамия.',
    },
  },
  fr: {
    title: 'Douas et sourates pour la Salah',
    lead: "« Invoquez-Moi, Je vous répondrai. » (Coran 40:60). Toute récitation dont tu as besoin pour la prière — en arabe, avec translittération, traduction et sa source authentique.",
    subs: {
      'in-prayer':
        "Dans l'ordre où elles interviennent dans la prière — de l'invocation d'ouverture au salam final.",
      quran:
        "Al-Fatiha est essentielle ; mémorise ensuite les courtes sourates une par une, en commençant par Al-Kawthar ou Al-Ikhlas. Le texte suit le script uthmani ; les traductions sont de Saheeh International (quran.com).",
      'after-prayer':
        'Les adhkar sunnah dits après le tasleem — quelques minutes qui portent une récompense immense.',
      special:
        'Douas pour des prières et occasions spécifiques — Witr, Istikhara, repentir et entrée à la mosquée.',
    },
  },
  de: {
    title: 'Duas und Suren für das Salah',
    lead: '„Ruft Mich an, Ich werde euch erhören.“ (Koran 40:60). Jede Rezitation, die du für das Gebet brauchst — auf Arabisch, mit Transliteration, Übersetzung und ihrer authentischen Quelle.',
    subs: {
      'in-prayer':
        'In der Reihenfolge, in der sie im Gebet vorkommen — vom Eröffnungsbittgebet bis zum abschließenden Salam.',
      quran:
        'Al-Fatiha ist unverzichtbar; lerne danach die kurzen Suren eine nach der anderen auswendig, beginnend mit Al-Kawthar oder Al-Ikhlas. Der Text folgt der uthmanischen Schrift; die Übersetzungen stammen von Saheeh International (quran.com).',
      'after-prayer':
        'Die Sunnah-Adhkar, die nach dem Tasleem gesprochen werden — wenige Minuten mit gewaltigem Lohn.',
      special:
        'Duas für bestimmte Gebete und Anlässe — Witr, Istikhara, Reue und das Betreten der Moschee.',
    },
  },
  nl: {
    title: "Duas en soera's voor de Salah",
    lead: '„Roep Mij aan, Ik zal jullie verhoren.” (Koran 40:60). Elke recitatie die je nodig hebt voor het gebed — in het Arabisch, met transliteratie, vertaling en de authentieke bron.',
    subs: {
      'in-prayer':
        'In de volgorde waarin ze in het gebed voorkomen — van de openingssmeekbede tot de afsluitende salam.',
      quran:
        "Al-Fatiha is essentieel; leer daarna de korte soera's één voor één uit je hoofd, te beginnen met Al-Kawthar of Al-Ikhlas. De tekst volgt het Uthmani-schrift; de vertalingen zijn van Saheeh International (quran.com).",
      'after-prayer':
        'De sunnah-adhkar die na de tasleem worden uitgesproken — enkele minuten die een enorme beloning met zich meedragen.',
      special:
        'Duas voor specifieke gebeden en gelegenheden — Witr, Istikhara, berouw en het betreden van de moskee.',
    },
  },
  tr: {
    title: 'Namaz İçin Dualar ve Sureler',
    lead: '"Bana dua edin, size icabet edeyim." (Kur\'an 40:60). Namaz için ihtiyacın olan her kıraat — Arapça, okunuşu, meali ve sahih kaynağıyla birlikte.',
    subs: {
      'in-prayer':
        'Namazda geçtikleri sırayla — açılış duasından kapanış selamına kadar.',
      quran:
        "Fatiha şarttır; ardından kısa sureleri Kevser veya İhlas'tan başlayarak birer birer ezberle. Metin Osmanlı hattını takip eder; meal Saheeh International'a (quran.com) dayanır.",
      'after-prayer':
        'Tesliminden sonra söylenen sünnet zikirler — büyük mükâfat taşıyan birkaç dakika.',
      special:
        'Belirli namazlar ve durumlar için dualar — Vitir, İstihare, tövbe ve mescide girme.',
    },
  },
  ur: {
    title: 'نماز کے لیے دعائیں اور سورتیں',
    lead: '"مجھے پکارو، میں تمہاری دعا قبول کروں گا۔" (قرآن 40:60)۔ نماز کے لیے ضروری ہر تلاوت — عربی میں، تلفظ، ترجمہ اور مستند حوالے کے ساتھ۔',
    subs: {
      'in-prayer':
        'اسی ترتیب میں جس میں یہ نماز میں آتی ہیں — ابتدائی دعا سے لے کر آخری سلام تک۔',
      quran:
        'سورۃ الفاتحہ لازمی ہے؛ اس کے بعد مختصر سورتیں ایک ایک کر کے حفظ کریں، سورۃ الکوثر یا سورۃ الاخلاص سے شروع کرتے ہوئے۔ متن عثمانی رسم الخط کی پیروی کرتا ہے؛ ترجمہ Saheeh International (quran.com) کے مطابق ہے۔',
      'after-prayer':
        'سلام کے بعد پڑھے جانے والے سنت اذکار — چند منٹ جو بے پناہ اجر رکھتے ہیں۔',
      special:
        'مخصوص نمازوں اور مواقع کے لیے دعائیں — وتر، استخارہ، توبہ، اور مسجد میں داخل ہونا۔',
    },
  },
}

export default function Duas() {
  const [cat, setCat] = useState('in-prayer')
  const { lang, L } = useLang()
  const c = C[lang] || C.en
  const list = duas.filter((d) => d.category === cat)

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="hero-arabic" lang="ar">ادْعُونِي أَسْتَجِبْ لَكُمْ</p>
          <h1>{c.title}</h1>
          <p>{c.lead}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="pill-row" role="tablist">
            {duaCategories.map((cc) => (
              <button
                key={cc.id}
                className={`pill ${cat === cc.id ? 'active' : ''}`}
                onClick={() => setCat(cc.id)}
                role="tab"
                aria-selected={cat === cc.id}
              >
                {L(cc.label)}
              </button>
            ))}
          </div>

          <p className="section-sub">{c.subs[cat]}</p>

          {list.map((d) => (
            <DuaCard key={d.id} dua={d} />
          ))}
        </div>
      </section>
    </>
  )
}
