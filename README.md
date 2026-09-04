# 🕌 SalahGuide

A free, complete guide to Salah (the Islamic prayer) — from a beginner's very first wudu to advanced fiqh. Built as a fast, installable, offline-capable web app with content in seven languages.

**Live site:** [salah-guide.rifatcholakov.com](https://salah-guide.rifatcholakov.com)

---

## What's in it

| Section | What it covers |
|---|---|
| **Before You Pray** | The six conditions of a valid prayer, wudu step by step, ghusl, tayammum, what breaks wudu |
| **Purity** | Istinja, toilet etiquette, doubts about purity, gender-specific guidance |
| **The 5 Prayers** | Live prayer times for any city (via the AlAdhan API), a full table of times/rak'ahs/recitation per prayer, the three forbidden times |
| **How to Pray** | An interactive, illustrated, step-by-step walkthrough of the prayer from takbir to salam, with an animated pose figure and the Arabic/transliteration/meaning of what to say at each step |
| **Types of Salah** | Fard, wajib, sunnah and nafl explained, each with a full walkthrough — including special prayers: Jumu'ah, Janazah, Witr, Eid, Tarawih, Tahajjud, Duha, Istikhara, Taubah, Kusuf, Istisqa (18 full walkthroughs in total) |
| **Duas & Surahs** | 25 recitations across 4 categories (inside the prayer, Qur'an for Salah, after-prayer adhkar, special duas) — Arabic text, transliteration, translation, audio recitation, and sourced references for each |
| **Beyond Basics** | Travel (qasr/jam), sickness, missed prayers (qada), fixing mistakes (sujud as-sahw), praying in congregation, khushu |
| **Quiz** | 15 questions from beginner to expert, every answer backed by its evidence |
| **Glossary** | 30 key terms plus a 10-question FAQ |

A persistent **learning path** (8 stations, saved on-device) guides a complete beginner through the whole site in order, and a **learning checklist** on the homepage tracks 10 concrete milestones.

All Qur'an text follows the Uthmani script and the Saheeh International translation; hadith are cited with collection name and number (e.g. *Sahih al-Bukhari 528*) referenced against [sunnah.com](https://sunnah.com). The site is educational — for personal religious rulings it points readers to a qualified local scholar, and any ruling specific to one school of thought (madhhab) is labelled as such rather than presented as universal.

## Features

- **7 languages** — English, Bulgarian, French, German, Dutch, Turkish, Urdu — with a language-then-gender onboarding flow on first visit. Turkish and Urdu use vernacular terms (*Namaz*, *نماز*) matching how those communities actually talk about prayer; French/German/Dutch keep *Salah* as the loanword already common in those communities. Urdu renders right-to-left inline without mirroring the rest of the page layout.
- **Gender-aware guidance** — rulings that differ between men and women (covering, Jumu'ah, wudu videos, istinja method, monthly exemptions) switch automatically based on a one-time choice, with its own colour theme (deep green/gold for men, plum/rose-gold for women) applied via CSS custom properties.
- **Installable PWA** — a generated service worker precaches the entire app shell, so once visited, every page works fully offline (this is a client-routed SPA, so that's the whole site). Prayer times use a network-first strategy so they're never served stale while online; dua recitation audio and web fonts are cached for offline use.
- **Responsive, mobile-first UI** — the onboarding modal, navbar, data tables (which collapse into labelled cards below 700px instead of forcing horizontal scroll), and every page layout are built and tested down to 320px width, with ~44px touch targets throughout.
- **Live prayer times** — city search or geolocation, via the free [AlAdhan API](https://aladhan.com) (Muslim World League calculation method).
- **Privacy-conscious analytics** — Google Analytics 4 loads only after a visitor accepts a cookie-consent banner (translated into all 7 languages); declining loads nothing at all. See [Analytics](#analytics) below.
- **Progress saved on-device** — learning path, checklist, and quiz progress persist via `localStorage`, no account or backend needed.

## Tech stack

- **[React 19](https://react.dev)** + **[React Router 7](https://reactrouter.com)** (client-side routing, SPA)
- **[Vite 8](https://vite.dev)** — dev server and build
- **[vite-plugin-pwa](https://vite-pwa-org.netlify.app/)** (Workbox under the hood) — service worker, manifest, offline caching
- **[Oxlint](https://oxc.rs)** — linting
- Plain CSS (`src/index.css`) — a single hand-written design-token system (CSS custom properties for colour/spacing/shadow), no CSS framework
- No backend, no database — all content is static data in `src/data/*.js`; the only external calls at runtime are the AlAdhan prayer-times API and (optionally) Google Analytics

## Project structure

```
src/
  main.jsx                 # entry point, wraps the app in providers
  App.jsx                  # routes
  index.css                # the entire design system + all component styles
  i18n/
    LanguageContext.jsx    # active language + the L() translation-picker helper
    GenderContext.jsx      # active gender, drives the CSS theme + content
    ui.js                  # shared UI strings (nav, footer, buttons…), x7 languages
  data/                    # all site content — text fields are {en,bg,fr,de,nl,tr,ur}
    duas.js                # the 25 recitations
    salahTypes.js          # fard/wajib/sunnah/nafl classification
    steps.js                # the How to Pray walkthrough steps
    walkthroughs.js         # full step lists for all 18 prayer types
    purity.js, wudu.js      # purification rulings
    quiz.js, glossary.js, path.js, videos.js, audio.js
  components/              # Navbar, GenderGate (onboarding), PrayerTimesWidget,
                            # DuaCard, AudioPlayer, Analytics, PWAUpdateToast…
  pages/                   # one file per route, each with its own local
                           # hero/copy translation object
scripts/
  generate-icons.mjs       # rasterizes public/icon-mosque.svg into the PWA icon set
public/
  icon-mosque.svg          # source app icon (mosque silhouette, brand colours)
  icon-*.png, apple-touch-icon.png   # generated by the script above
```

### Adding a new language

1. Add the language to `LANGS` in `src/i18n/LanguageContext.jsx` (code, label, flag).
2. Add a matching dictionary to `src/i18n/ui.js`.
3. Add the new language code as a sibling field to every translatable object in `src/data/*.js` and each page's local `C` object. The `L()` helper falls back to English for any field that hasn't been translated yet, so the site never breaks mid-rollout — but every `{en, bg, ...}` object should get the new key for a complete translation.

### Adding a dua, quiz question, or glossary term

Each is a plain object in the relevant `src/data/*.js` file — copy an existing entry as a template; every text field is a `{en, bg, fr, de, nl, tr, ur}` object, and `arabic` (where present) is a single shared string, not per-language.

## Getting started

```bash
npm install
npm run dev       # start the dev server (http://localhost:5173)
```

Other scripts:

```bash
npm run build      # production build to dist/
npm run preview    # serve the production build locally
npm run lint       # oxlint
node scripts/generate-icons.mjs   # regenerate PWA icons from public/icon-mosque.svg
```

## Environment variables

Copy `.env.example` to `.env` and fill in what you need:

| Variable | Required | Purpose |
|---|---|---|
| `VITE_GA_MEASUREMENT_ID` | No | Google Analytics 4 Measurement ID (`G-XXXXXXXXXX`). Leave unset to disable analytics entirely — the site behaves identically either way, just without tracking. Must be set as a **build-time** environment variable on whatever platform builds the site (Vite inlines it at build time), not just in a local `.env`. |

## Analytics

Analytics (see `src/lib/analytics.js` and `src/components/Analytics.jsx`) is opt-in per visitor:

- On first visit, a consent banner asks to accept or decline — nothing loads until they choose.
- If accepted: GA4 loads, `anonymize_ip` is on, and page views are sent manually on every client-side route change (a plain gtag snippet only ever sees the first page load in an SPA).
- Custom events tracked: `language_change`, `gender_select`, `quiz_complete` (with score), `prayer_times_lookup` (city vs. geolocation), `dua_audio_play`, `checklist_toggle`, `path_step_complete`.
- If declined, or if `VITE_GA_MEASUREMENT_ID` isn't set, nothing is loaded or sent — ever.

## Deployment

The site builds to a static `dist/` folder (`npm run build`) and can be hosted anywhere that serves static files with SPA-style routing fallback (unmatched routes → `index.html`) — the production deployment runs on **Cloudflare Pages**. Remember to set `VITE_GA_MEASUREMENT_ID` in the platform's environment variables (not just locally) if you want analytics on the deployed site.

## Contributing

Found a mistake — a typo, a broken link, an awkward translation, something factually off? Every page has a **Suggest an edit** link in the footer that opens the relevant file directly on GitHub (forks and opens a pull request for you automatically). See [CONTRIBUTING.md](CONTRIBUTING.md) for the full workflow, including how to run the site locally for bigger changes and where each kind of content actually lives. Pull requests are reviewed by the maintainer; once approved and merged into `main`, the site redeploys automatically.

## Disclaimer

This site is for education. For rulings on your personal situation, please consult a qualified local scholar.
