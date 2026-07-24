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
}

export default function Glossary() {
  const [query, setQuery] = useState('')
  const { lang, L } = useLang()
  const c = C[lang]

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
