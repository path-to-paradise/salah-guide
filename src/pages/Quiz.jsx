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
}

export default function Quiz() {
  const [i, setI] = useState(0)
  const [picked, setPicked] = useState(null)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)
  const { lang, L } = useLang()
  const c = C[lang]

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
              <span className={`badge ${q.level === 'Beginner' ? 'badge-sunnah' : q.level === 'Intermediate' ? 'badge-wajib' : 'badge-fard'}`}>
                {L(quizLevels[q.level])}
              </span>
              <span style={{ float: 'right', color: 'var(--muted)', fontSize: '0.88rem' }}>
                {c.question} {i + 1} {c.of} {quizQuestions.length} · {c.score} {score}
              </span>
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
