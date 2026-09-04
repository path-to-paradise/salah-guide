import { useState } from 'react'
import { glossary, faqs } from '../data/glossary.js'
import { useLang } from '../i18n/LanguageContext.jsx'

const C = {
  en: {
    title: 'Glossary & Frequently Asked Questions',
    lead: 'Every Arabic term used on this site, plus honest answers to the questions every learner asks.',
    faqEyebrow: 'Common questions',
    faqTitle: 'FAQ',
    glossEyebrow: 'Vocabulary',
    glossTitle: 'Glossary of terms',
    search: 'Search terms… (e.g. sujud)',
    thTerm: 'Term',
    thArabic: 'Arabic',
    thMeaning: 'Meaning',
    noMatch: (q) => `No terms match “${q}”.`,
  },
  bg: {
    title: 'Речник и често задавани въпроси',
    lead: 'Всеки арабски термин, използван в сайта, плюс честни отговори на въпросите, които всеки учещ задава.',
    faqEyebrow: 'Чести въпроси',
    faqTitle: 'Въпроси и отговори',
    glossEyebrow: 'Речник',
    glossTitle: 'Речник на термините',
    search: 'Търси термини… (напр. седжде)',
    thTerm: 'Термин',
    thArabic: 'Арабски',
    thMeaning: 'Значение',
    noMatch: (q) => `Няма термини, отговарящи на „${q}“.`,
  },
  fr: {
    title: 'Glossaire et questions fréquentes',
    lead: 'Chaque terme arabe utilisé sur ce site, ainsi que des réponses honnêtes aux questions que se pose tout apprenant.',
    faqEyebrow: 'Questions courantes',
    faqTitle: 'FAQ',
    glossEyebrow: 'Vocabulaire',
    glossTitle: 'Glossaire des termes',
    search: 'Rechercher un terme… (par ex. sujud)',
    thTerm: 'Terme',
    thArabic: 'Arabe',
    thMeaning: 'Signification',
    noMatch: (q) => `Aucun terme ne correspond à « ${q} ».`,
  },
  de: {
    title: 'Glossar und häufig gestellte Fragen',
    lead: 'Jeder auf dieser Seite verwendete arabische Begriff sowie ehrliche Antworten auf die Fragen, die sich jeder Lernende stellt.',
    faqEyebrow: 'Häufige Fragen',
    faqTitle: 'FAQ',
    glossEyebrow: 'Vokabular',
    glossTitle: 'Begriffsglossar',
    search: 'Begriffe suchen… (z. B. sujud)',
    thTerm: 'Begriff',
    thArabic: 'Arabisch',
    thMeaning: 'Bedeutung',
    noMatch: (q) => `Keine Begriffe passen zu „${q}“.`,
  },
  nl: {
    title: 'Woordenlijst en veelgestelde vragen',
    lead: 'Elke Arabische term die op deze site wordt gebruikt, plus eerlijke antwoorden op de vragen die elke leerling stelt.',
    faqEyebrow: 'Veelgestelde vragen',
    faqTitle: 'FAQ',
    glossEyebrow: 'Woordenschat',
    glossTitle: 'Woordenlijst met termen',
    search: 'Zoek termen… (bijv. sujud)',
    thTerm: 'Term',
    thArabic: 'Arabisch',
    thMeaning: 'Betekenis',
    noMatch: (q) => `Geen termen komen overeen met "${q}".`,
  },
  tr: {
    title: 'Sözlük ve Sıkça Sorulan Sorular',
    lead: 'Bu sitede kullanılan her Arapça terim, artı her öğrencinin sorduğu sorulara dürüst cevaplar.',
    faqEyebrow: 'Sık sorulan sorular',
    faqTitle: 'SSS',
    glossEyebrow: 'Kelime dağarcığı',
    glossTitle: 'Terimler sözlüğü',
    search: 'Terim ara… (örn. secde)',
    thTerm: 'Terim',
    thArabic: 'Arapça',
    thMeaning: 'Anlam',
    noMatch: (q) => `"${q}" ile eşleşen terim yok.`,
  },
  ur: {
    title: 'لغت اور اکثر پوچھے جانے والے سوالات',
    lead: 'اس سائٹ پر استعمال ہونے والی ہر عربی اصطلاح، نیز ہر سیکھنے والے کے سوالات کے مخلصانہ جوابات۔',
    faqEyebrow: 'عام سوالات',
    faqTitle: 'اکثر پوچھے جانے والے سوالات',
    glossEyebrow: 'الفاظ',
    glossTitle: 'اصطلاحات کی لغت',
    search: 'اصطلاح تلاش کریں… (مثلاً سجدہ)',
    thTerm: 'اصطلاح',
    thArabic: 'عربی',
    thMeaning: 'مطلب',
    noMatch: (q) => `"${q}" سے کوئی اصطلاح مماثل نہیں۔`,
  },
}

export default function Glossary() {
  const [query, setQuery] = useState('')
  const { lang, L } = useLang()
  const c = C[lang] || C.en

  const filtered = glossary.filter(
    (g) =>
      L(g.term).toLowerCase().includes(query.toLowerCase()) ||
      L(g.def).toLowerCase().includes(query.toLowerCase()),
  )

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>{c.title}</h1>
          <p>{c.lead}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="eyebrow">{c.faqEyebrow}</span>
          <h2 className="section-title">{c.faqTitle}</h2>
          <div className="accordion" style={{ marginBottom: 48 }}>
            {faqs.map((f, i) => (
              <details key={i}>
                <summary>{L(f.q)}</summary>
                <div className="acc-body">{L(f.a)}</div>
              </details>
            ))}
          </div>

          <span className="eyebrow">{c.glossEyebrow}</span>
          <h2 className="section-title">{c.glossTitle}</h2>
          <input
            className="pill"
            style={{ width: '100%', maxWidth: 380, marginBottom: 20, cursor: 'text' }}
            placeholder={c.search}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search glossary"
          />
          <div className="table-wrap">
            <table className="nice">
              <thead>
                <tr>
                  <th>{c.thTerm}</th>
                  <th>{c.thArabic}</th>
                  <th>{c.thMeaning}</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((g) => (
                  <tr key={g.arabic}>
                    <td><strong>{L(g.term)}</strong></td>
                    <td className="ar">{g.arabic}</td>
                    <td>{L(g.def)}</td>
                  </tr>
                ))}
                {filtered.length === 0 && (
                  <tr>
                    <td colSpan={3}>{c.noMatch(query)}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  )
}
