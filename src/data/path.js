import { useEffect, useState } from 'react'

// The learning path: every station in order, from zero to mastery.
// navKey points at t.nav for the localized title.
export const stations = [
  {
    key: 'basics',
    route: '/basics',
    navKey: 'basics',
    icon: '💧',
    desc: {
      en: 'Wudu, ghusl, qibla, clothing — everything that must be in place first.',
      bg: 'Абдест, гусул, къбле, облекло — всичко, което трябва да е налице първо.',
    },
    level: { en: 'Beginner', bg: 'Начинаещ' },
  },
  {
    key: 'purity',
    route: '/purity',
    navKey: 'purity',
    icon: '🚿',
    desc: {
      en: 'Istinja, toilet etiquette, dealing with doubts — staying prayer-ready.',
      bg: 'Истинджа, етикет в тоалетната, справяне със съмненията — готовност за намаз.',
    },
    level: { en: 'Beginner', bg: 'Начинаещ' },
  },
  {
    key: 'times',
    route: '/times',
    navKey: 'times',
    icon: '🕐',
    desc: {
      en: "Fajr to Isha — the times, the rak'ahs, and live prayer times for your city.",
      bg: 'От Фаджр до Иша — времената, рекятите и живи времена за твоя град.',
    },
    level: { en: 'Beginner', bg: 'Начинаещ' },
  },
  {
    key: 'howto',
    route: '/how-to-pray',
    navKey: 'howto',
    icon: '🕌',
    desc: {
      en: 'The interactive, illustrated walk-through of the prayer from takbir to salam.',
      bg: 'Интерактивното, илюстрирано преминаване през намаза от текбира до селяма.',
    },
    level: { en: 'Beginner', bg: 'Начинаещ' },
  },
  {
    key: 'duas',
    route: '/duas',
    navKey: 'duas',
    icon: '📖',
    desc: {
      en: 'Every recitation with audio — Arabic, transliteration, translation, sources.',
      bg: 'Всичко за четене, с аудио — арабски, транслитерация, превод, източници.',
    },
    level: { en: 'All levels', bg: 'Всички нива' },
  },
  {
    key: 'types',
    route: '/types',
    navKey: 'types',
    icon: '🌙',
    desc: {
      en: 'Fard, wajib, sunnah and nafl — with a full walkthrough for every prayer.',
      bg: 'Фарз, уаджиб, сунна и нафиле — с пълно ръководство за всеки намаз.',
    },
    level: { en: 'Intermediate', bg: 'Средно ниво' },
  },
  {
    key: 'beyond',
    route: '/beyond',
    navKey: 'beyond',
    icon: '🎓',
    desc: {
      en: 'Travel, sickness, missed prayers, fixing mistakes, and khushu.',
      bg: 'Пътуване, болест, пропуснати намази, поправяне на грешки и хушу.',
    },
    level: { en: 'Advanced', bg: 'Напреднал' },
  },
  {
    key: 'quiz',
    route: '/quiz',
    navKey: 'quiz',
    icon: '🏆',
    desc: {
      en: 'Prove it — 15 questions from beginner to expert, each with its evidence.',
      bg: 'Докажи го — 15 въпроса от начинаещ до експерт, всеки с доказателството си.',
    },
    level: { en: 'Final step', bg: 'Финална стъпка' },
  },
]

const KEY = 'salah-path-done'

export function usePathProgress() {
  const [done, setDone] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(KEY)) || []
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(done))
  }, [done])

  const markDone = (key) =>
    setDone((d) => (d.includes(key) ? d : [...d, key]))

  const currentIndex = stations.findIndex((s) => !done.includes(s.key))

  return {
    done,
    markDone,
    // first station not yet completed; null when the whole path is done
    current: currentIndex === -1 ? null : stations[currentIndex],
    allDone: currentIndex === -1,
  }
}
