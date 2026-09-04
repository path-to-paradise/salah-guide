import { useState } from 'react'
import { quizQuestions, quizLevels } from '../data/quiz.js'
import { useLang } from '../i18n/LanguageContext.jsx'

const C = {
  en: {
    title: 'Test Yourself',
    lead: (n) =>
      `${n} questions from beginner to expert. Each answer comes with its evidence — so even a wrong guess teaches you something.`,
    question: 'Question',
    of: 'of',
    score: 'Score',
    correct: '✅ Correct! ',
    seeScore: 'See my score →',
    nextQ: 'Next question →',
    tryAgain: 'Try again',
    grades: {
      perfect: "Perfect score — masha'Allah, you know your salah!",
      great: "Excellent — a little revision and you'll have it all.",
      good: 'Good start — revisit the How to Pray and Types pages and try again.',
      begin: 'Every expert was once a beginner — walk the learning journey from step 1 and come back!',
    },
  },
  bg: {
    title: 'Провери знанията си',
    lead: (n) =>
      `${n} въпроса от начинаещ до експерт. Всеки отговор идва с доказателството си — така дори грешното предположение те учи на нещо.`,
    question: 'Въпрос',
    of: 'от',
    score: 'Точки',
    correct: '✅ Вярно! ',
    seeScore: 'Виж резултата →',
    nextQ: 'Следващ въпрос →',
    tryAgain: 'Опитай отново',
    grades: {
      perfect: 'Пълен резултат — машаллах, познаваш намаза си!',
      great: 'Отлично — малко преговор и ще знаеш всичко.',
      good: 'Добро начало — прегледай отново „Как се кланя“ и „Видове намаз“ и опитай пак.',
      begin: 'Всеки експерт някога е бил начинаещ — извърви пътя на учене от стъпка 1 и се върни!',
    },
  },
  fr: {
    title: 'Teste-toi',
    lead: (n) =>
      `${n} questions du débutant à l'expert. Chaque réponse est accompagnée de sa preuve — ainsi, même une mauvaise réponse t'apprend quelque chose.`,
    question: 'Question',
    of: 'sur',
    score: 'Score',
    correct: '✅ Correct ! ',
    seeScore: 'Voir mon score →',
    nextQ: 'Question suivante →',
    tryAgain: 'Réessayer',
    grades: {
      perfect: "Score parfait — machaAllah, tu maîtrises ta Salah !",
      great: "Excellent — encore un peu de révision et tu sauras tout.",
      good: 'Bon début — revois les pages Comment prier et Types, puis réessaie.',
      begin: "Chaque expert a été un jour débutant — parcours le chemin d'apprentissage depuis l'étape 1 et reviens !",
    },
  },
  de: {
    title: 'Teste dich selbst',
    lead: (n) =>
      `${n} Fragen von Anfänger bis Experte. Jede Antwort kommt mit ihrem Beleg — so lernst du selbst bei einer falschen Vermutung etwas.`,
    question: 'Frage',
    of: 'von',
    score: 'Punkte',
    correct: '✅ Richtig! ',
    seeScore: 'Meine Punktzahl ansehen →',
    nextQ: 'Nächste Frage →',
    tryAgain: 'Nochmal versuchen',
    grades: {
      perfect: "Perfekte Punktzahl — maschaAllah, du kennst dich mit deinem Salah aus!",
      great: "Ausgezeichnet — ein wenig Wiederholung und du hast alles drauf.",
      good: 'Guter Anfang — schau dir die Seiten „Wie man betet“ und „Arten“ noch einmal an und versuch es erneut.',
      begin: 'Jeder Experte war einmal Anfänger — geh die Lernreise ab Schritt 1 durch und komm zurück!',
    },
  },
  nl: {
    title: 'Test jezelf',
    lead: (n) =>
      `${n} vragen van beginner tot expert. Elk antwoord komt met bewijs — zo leer je zelfs van een fout antwoord iets.`,
    question: 'Vraag',
    of: 'van',
    score: 'Score',
    correct: '✅ Correct! ',
    seeScore: 'Bekijk mijn score →',
    nextQ: 'Volgende vraag →',
    tryAgain: 'Opnieuw proberen',
    grades: {
      perfect: "Perfecte score — masha'Allah, jij kent je Salah!",
      great: "Uitstekend — een beetje herhaling en je kent alles.",
      good: "Goed begin — bekijk de pagina's Hoe te bidden en Types opnieuw en probeer het nog eens.",
      begin: 'Elke expert was ooit een beginner — doorloop de leerreis vanaf stap 1 en kom terug!',
    },
  },
  tr: {
    title: 'Kendini Test Et',
    lead: (n) =>
      `Başlangıçtan uzmana kadar ${n} soru. Her cevap kendi delili ile birlikte gelir — böylece yanlış bir tahmin bile sana bir şey öğretir.`,
    question: 'Soru',
    of: '/',
    score: 'Puan',
    correct: '✅ Doğru! ',
    seeScore: 'Puanımı gör →',
    nextQ: 'Sonraki soru →',
    tryAgain: 'Tekrar dene',
    grades: {
      perfect: "Mükemmel puan — maşaAllah, namazını çok iyi biliyorsun!",
      great: "Mükemmel — biraz daha tekrar ile her şeyi öğreneceksin.",
      good: 'İyi bir başlangıç — Nasıl Namaz Kılınır ve Türler sayfalarını tekrar gözden geçirip yeniden dene.',
      begin: 'Her uzman bir zamanlar acemiydi — öğrenme yolculuğuna 1. adımdan başla ve geri dön!',
    },
  },
  ur: {
    title: 'اپنے آپ کو آزمائیں',
    lead: (n) =>
      `ابتدائی سے ماہر تک ${n} سوالات۔ ہر جواب اپنی دلیل کے ساتھ آتا ہے — اس لیے غلط اندازہ بھی آپ کو کچھ سکھاتا ہے۔`,
    question: 'سوال',
    of: 'از',
    score: 'اسکور',
    correct: '✅ درست! ',
    seeScore: 'میرا اسکور دیکھیں →',
    nextQ: 'اگلا سوال →',
    tryAgain: 'دوبارہ کوشش کریں',
    grades: {
      perfect: "مکمل نمبر — ماشاءاللہ، آپ اپنی نماز کو خوب جانتے ہیں!",
      great: "بہترین — تھوڑی سی مزید مشق اور آپ سب کچھ جان لیں گے۔",
      good: 'اچھی شروعات — "نماز کیسے پڑھیں" اور "اقسام" کے صفحات دوبارہ دیکھیں اور دوبارہ کوشش کریں۔',
      begin: 'ہر ماہر کبھی ابتدائی تھا — سیکھنے کا سفر قدم 1 سے شروع کریں اور واپس آئیں!',
    },
  },
}

export default function Quiz() {
  const [i, setI] = useState(0)
  const [picked, setPicked] = useState(null)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)
  const { lang, L } = useLang()
  const c = C[lang] || C.en

  const q = quizQuestions[i]

  const pick = (idx) => {
    if (picked !== null) return
    setPicked(idx)
    if (idx === q.answer) setScore((s) => s + 1)
  }

  const next = () => {
    if (i + 1 >= quizQuestions.length) {
      setFinished(true)
    } else {
      setI(i + 1)
      setPicked(null)
    }
  }

  const restart = () => {
    setI(0)
    setPicked(null)
    setScore(0)
    setFinished(false)
  }

  const grade =
    score === quizQuestions.length
      ? c.grades.perfect
      : score >= quizQuestions.length * 0.7
        ? c.grades.great
        : score >= quizQuestions.length * 0.4
          ? c.grades.good
          : c.grades.begin

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>{c.title}</h1>
          <p>{c.lead(quizQuestions.length)}</p>
        </div>
      </section>

      <section className="section">
        <div className="container quiz-shell">
          {finished ? (
            <div className="quiz-q quiz-score">
              <p style={{ fontSize: '2.4rem' }}>🏆</p>
              <div className="score-big">
                {score} / {quizQuestions.length}
              </div>
              <p style={{ margin: '10px 0 24px', color: 'var(--ink-soft)' }}>{grade}</p>
              <button className="btn btn-green" onClick={restart}>
                {c.tryAgain}
              </button>
            </div>
          ) : (
            <div className="quiz-q">
              <div className="quiz-q-meta">
                <span className={`badge ${q.level === 'Beginner' ? 'badge-sunnah' : q.level === 'Intermediate' ? 'badge-wajib' : 'badge-fard'}`}>
                  {L(quizLevels[q.level])}
                </span>
                <span className="quiz-q-progress">
                  {c.question} {i + 1} {c.of} {quizQuestions.length} · {c.score} {score}
                </span>
              </div>
              <h3>{L(q.q)}</h3>
              <div className="quiz-options">
                {L(q.options).map((opt, idx) => {
                  let cls = 'quiz-opt'
                  if (picked !== null) {
                    if (idx === q.answer) cls += ' correct'
                    else if (idx === picked) cls += ' wrong'
                  }
                  return (
                    <button
                      key={idx}
                      className={cls}
                      onClick={() => pick(idx)}
                      disabled={picked !== null}
                    >
                      {opt}
                    </button>
                  )
                })}
              </div>
              {picked !== null && (
                <>
                  <div className="quiz-explain">
                    {picked === q.answer ? c.correct : '📖 '}
                    {L(q.explain)}
                  </div>
                  <div style={{ textAlign: 'right', marginTop: 18 }}>
                    <button className="btn btn-green" onClick={next}>
                      {i + 1 >= quizQuestions.length ? c.seeScore : c.nextQ}
                    </button>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
