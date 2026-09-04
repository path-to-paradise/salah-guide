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
      fr: 'Wudu, ghusl, qibla, tenue vestimentaire — tout ce qui doit être en place en premier.',
      de: 'Wudu, Ghusl, Qibla, Kleidung – alles, was zuerst gegeben sein muss.',
      nl: 'Wudu, ghusl, qibla, kleding — alles wat eerst op orde moet zijn.',
      tr: 'Abdest, gusül, kıble, kıyafet — önce yerine oturması gereken her şey.',
      ur: 'وضو، غسل، قبلہ، لباس — وہ سب کچھ جو سب سے پہلے درست ہونا چاہیے۔',
    },
    level: { en: 'Beginner', bg: 'Начинаещ', fr: 'Débutant', de: 'Anfänger', nl: 'Beginner', tr: 'Başlangıç', ur: 'ابتدائی' },
  },
  {
    key: 'purity',
    route: '/purity',
    navKey: 'purity',
    icon: '🚿',
    desc: {
      en: 'Istinja, toilet etiquette, dealing with doubts — staying prayer-ready.',
      bg: 'Истинджа, етикет в тоалетната, справяне със съмненията — готовност за намаз.',
      fr: 'Istinja, étiquette des toilettes, gestion des doutes — rester prêt pour la prière.',
      de: 'Istinja, Toilettenetikette, der Umgang mit Zweifeln – gebetsbereit bleiben.',
      nl: 'Istinja, toiletetiquette, omgaan met twijfels — gebedsklaar blijven.',
      tr: 'İstinca, tuvalet adabı, şüphelerle baş etme — namaza her an hazır olmak.',
      ur: 'استنجاء، بیت الخلا کے آداب، شکوک و شبہات سے نمٹنا — نماز کے لیے ہمیشہ تیار رہنا۔',
    },
    level: { en: 'Beginner', bg: 'Начинаещ', fr: 'Débutant', de: 'Anfänger', nl: 'Beginner', tr: 'Başlangıç', ur: 'ابتدائی' },
  },
  {
    key: 'times',
    route: '/times',
    navKey: 'times',
    icon: '🕐',
    desc: {
      en: "Fajr to Isha — the times, the rak'ahs, and live prayer times for your city.",
      bg: 'От Фаджр до Иша — времената, рекятите и живи времена за твоя град.',
      fr: 'De Fajr à Isha — les horaires, les rak\'ahs, et les horaires de prière en direct pour ta ville.',
      de: 'Von Fajr bis Isha – die Zeiten, die Rak\'ahs und aktuelle Gebetszeiten für deine Stadt.',
      nl: 'Van Fajr tot Isha — de tijden, de rak\'ahs, en actuele gebedstijden voor jouw stad.',
      tr: 'Sabahtan Yatsı\'ya — vakitler, rekatlar ve şehrin için canlı namaz vakitleri.',
      ur: 'فجر سے عشاء تک — اوقات، رکعتیں، اور آپ کے شہر کے لیے براہ راست نماز کے اوقات۔',
    },
    level: { en: 'Beginner', bg: 'Начинаещ', fr: 'Débutant', de: 'Anfänger', nl: 'Beginner', tr: 'Başlangıç', ur: 'ابتدائی' },
  },
  {
    key: 'howto',
    route: '/how-to-pray',
    navKey: 'howto',
    icon: '🕌',
    desc: {
      en: 'The interactive, illustrated walk-through of the prayer from takbir to salam.',
      bg: 'Интерактивното, илюстрирано преминаване през намаза от текбира до селяма.',
      fr: 'Le guide interactif et illustré de la prière, du takbir au salam.',
      de: 'Die interaktive, bebilderte Schritt-für-Schritt-Anleitung des Gebets von Takbir bis Salam.',
      nl: 'De interactieve, geïllustreerde stap-voor-stap-uitleg van het gebed, van takbir tot salaam.',
      tr: 'Tekbirden selama kadar namazın interaktif, resimli anlatımı.',
      ur: 'تکبیر سے سلام تک نماز کا انٹرایکٹو، مصور جائزہ۔',
    },
    level: { en: 'Beginner', bg: 'Начинаещ', fr: 'Débutant', de: 'Anfänger', nl: 'Beginner', tr: 'Başlangıç', ur: 'ابتدائی' },
  },
  {
    key: 'duas',
    route: '/duas',
    navKey: 'duas',
    icon: '📖',
    desc: {
      en: 'Every recitation with audio — Arabic, transliteration, translation, sources.',
      bg: 'Всичко за четене, с аудио — арабски, транслитерация, превод, източници.',
      fr: 'Chaque récitation avec audio — arabe, translittération, traduction, sources.',
      de: 'Jede Rezitation mit Audio – Arabisch, Transliteration, Übersetzung, Quellen.',
      nl: 'Elke recitatie met audio — Arabisch, transliteratie, vertaling, bronnen.',
      tr: 'Sesli her tilavet — Arapça, okunuşu, çevirisi ve kaynakları.',
      ur: 'ہر تلاوت آڈیو کے ساتھ — عربی، تلفظ، ترجمہ، مآخذ۔',
    },
    level: { en: 'All levels', bg: 'Всички нива', fr: 'Tous niveaux', de: 'Alle Stufen', nl: 'Alle niveaus', tr: 'Tüm seviyeler', ur: 'تمام درجات' },
  },
  {
    key: 'types',
    route: '/types',
    navKey: 'types',
    icon: '🌙',
    desc: {
      en: 'Fard, wajib, sunnah and nafl — with a full walkthrough for every prayer.',
      bg: 'Фарз, уаджиб, сунна и нафиле — с пълно ръководство за всеки намаз.',
      fr: 'Fard, wajib, sunnah et nafl — avec un guide complet pour chaque prière.',
      de: 'Fard, Wajib, Sunnah und Nafl – mit einer vollständigen Anleitung für jedes Gebet.',
      nl: 'Fard, wajib, sunnah en nafl — met een volledige uitleg voor elk gebed.',
      tr: 'Farz, vacip, sünnet ve nafile — her namaz için tam bir anlatımla.',
      ur: 'فرض، واجب، سنت اور نفل — ہر نماز کے لیے مکمل رہنمائی کے ساتھ۔',
    },
    level: { en: 'Intermediate', bg: 'Средно ниво', fr: 'Intermédiaire', de: 'Mittelstufe', nl: 'Gemiddeld', tr: 'Orta seviye', ur: 'درمیانہ' },
  },
  {
    key: 'beyond',
    route: '/beyond',
    navKey: 'beyond',
    icon: '🎓',
    desc: {
      en: 'Travel, sickness, missed prayers, fixing mistakes, and khushu.',
      bg: 'Пътуване, болест, пропуснати намази, поправяне на грешки и хушу.',
      fr: 'Voyage, maladie, prières manquées, correction des erreurs, et khushu.',
      de: 'Reisen, Krankheit, verpasste Gebete, das Beheben von Fehlern und Khushu.',
      nl: 'Reizen, ziekte, gemiste gebeden, fouten herstellen, en khushu.',
      tr: 'Yolculuk, hastalık, kaçırılan namazlar, hataları düzeltme ve huşu.',
      ur: 'سفر، بیماری، چھوٹی ہوئی نمازیں، غلطیوں کی اصلاح، اور خشوع۔',
    },
    level: { en: 'Advanced', bg: 'Напреднал', fr: 'Avancé', de: 'Fortgeschritten', nl: 'Gevorderd', tr: 'İleri seviye', ur: 'اعلیٰ' },
  },
  {
    key: 'quiz',
    route: '/quiz',
    navKey: 'quiz',
    icon: '🏆',
    desc: {
      en: 'Prove it — 15 questions from beginner to expert, each with its evidence.',
      bg: 'Докажи го — 15 въпроса от начинаещ до експерт, всеки с доказателството си.',
      fr: 'Prouve-le — 15 questions du débutant à l\'expert, chacune avec sa preuve.',
      de: 'Beweise es – 15 Fragen vom Anfänger bis zum Experten, jede mit ihrem Beleg.',
      nl: 'Bewijs het — 15 vragen van beginner tot expert, elk met bewijs.',
      tr: 'Kanıtla — başlangıçtan uzmana 15 soru, her biri delili ile birlikte.',
      ur: 'ثابت کریں — ابتدائی سے ماہر تک 15 سوالات، ہر ایک اپنی دلیل کے ساتھ۔',
    },
    level: { en: 'Final step', bg: 'Финална стъпка', fr: 'Étape finale', de: 'Letzter Schritt', nl: 'Laatste stap', tr: 'Son adım', ur: 'آخری مرحلہ' },
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
