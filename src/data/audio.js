// Recitation audio for every dua and surah, keyed by dua id.
// Qur'an: Mishary Rashid Alafasy via the islamic.network CDN.
// Duas: Hisnul Muslim audio (hisnmuslim.com API) — item ids verified against
// the Arabic text of each entry.

const QURAN_SURAH = (n) =>
  `https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/${n}.mp3`
const QURAN_AYAH = (globalAyah) =>
  `https://cdn.islamic.network/quran/audio/128/ar.alafasy/${globalAyah}.mp3`
const HISN = (id) => `https://www.hisnmuslim.com/audio/ar/${id}.mp3`

const ALAFASY = {
  en: 'Mishary Rashid Alafasy',
  bg: 'Мишари Рашид ал-Афаси',
  fr: 'Mishary Rashid Alafasy',
  de: 'Mishary Rashid Alafasy',
  nl: 'Mishary Rashid Alafasy',
  tr: 'Mishary Rashid Alafasy',
  ur: 'مشاری راشد العفاسی',
}
const HISN_CREDIT = {
  en: 'Hisnul Muslim (hisnmuslim.com)',
  bg: 'Хиснул Муслим (hisnmuslim.com)',
  fr: 'Hisnul Muslim (hisnmuslim.com)',
  de: 'Hisnul Muslim (hisnmuslim.com)',
  nl: 'Hisnul Muslim (hisnmuslim.com)',
  tr: 'Hisnul Muslim (hisnmuslim.com)',
  ur: 'حصن المسلم (hisnmuslim.com)',
}

export const duaAudio = {
  // ---- inside the prayer ----
  istiftah: { src: HISN(28), credit: HISN_CREDIT },
  ruku: { src: HISN(33), credit: HISN_CREDIT },
  itidal: { src: HISN(38), credit: HISN_CREDIT },
  sujud: { src: HISN(41), credit: HISN_CREDIT },
  'between-sujud': { src: HISN(48), credit: HISN_CREDIT },
  tashahhud: { src: HISN(52), credit: HISN_CREDIT },
  salawat: { src: HISN(53), credit: HISN_CREDIT },
  'before-salam': { src: HISN(55), credit: HISN_CREDIT },

  // ---- Qur'an for salah ----
  fatiha: { src: QURAN_SURAH(1), credit: ALAFASY },
  ikhlas: { src: QURAN_SURAH(112), credit: ALAFASY },
  falaq: { src: QURAN_SURAH(113), credit: ALAFASY },
  nas: { src: QURAN_SURAH(114), credit: ALAFASY },
  kawthar: { src: QURAN_SURAH(108), credit: ALAFASY },
  asr: { src: QURAN_SURAH(103), credit: ALAFASY },
  'ayat-kursi': { src: QURAN_AYAH(262), credit: ALAFASY }, // 2:255 = global ayah 262

  // ---- after prayer ----
  'istighfar-after': { src: HISN(66), credit: HISN_CREDIT },
  'tasbih-after': { src: HISN(69), credit: HISN_CREDIT },
  'tahlil-after': { src: HISN(67), credit: HISN_CREDIT },

  // ---- special ----
  qunut: { src: HISN(116), credit: HISN_CREDIT },
  istikhara: { src: HISN(74), credit: HISN_CREDIT },
  'sayyid-istighfar': { src: HISN(79), credit: HISN_CREDIT },
  'after-wudu': { src: HISN(13), credit: HISN_CREDIT },
  'enter-masjid': { src: HISN(20), credit: HISN_CREDIT },

  // ---- purity page ----
  'enter-toilet': { src: HISN(10), credit: HISN_CREDIT },
  'exit-toilet': { src: HISN(11), credit: HISN_CREDIT },
}
