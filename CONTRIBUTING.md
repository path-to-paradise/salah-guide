# Contributing

Found a typo, a broken link, an awkward translation, or something factually wrong? Thank you — here's how to get it fixed.

## The quick way (no setup required)

Every page has a **✏️ Suggest an edit** link in the footer that takes you straight to that page's file on GitHub, already scrolled to the right place. Click it, click the pencil icon (GitHub forks the repo for you automatically if you don't have write access), make your change, and submit — GitHub will offer to open a pull request for you.

If you'd rather just flag the problem without fixing it yourself, use the **🚩 Report an issue** link in the footer instead.

## The full way (for bigger changes)

```bash
git clone https://github.com/path-to-paradise/salah-guide.git
cd salah-guide
npm install
npm run dev
```

Make your change, then before opening a PR:

```bash
npm run lint
npm run build     # optional, but catches anything lint won't
```

Commit, push to your fork, and open a pull request against `main`.

## Where content actually lives

Almost all site text is data, not markup — you're very unlikely to need to touch JSX layout for a content fix:

- **Page-specific copy** (hero titles, section intros, callouts) — the `C` object near the top of the matching file in `src/pages/`.
- **Duas, prayer types, step-by-step guides, quiz questions, glossary, purity/wudu rulings** — `src/data/*.js`. Each one is self-documenting; look for the entry by its English text and you'll find it.
- **Shared UI strings** (nav, footer, buttons, form labels) — `src/i18n/ui.js`.

Every translatable field is an object like `{ en: '...', bg: '...', fr: '...', de: '...', nl: '...', tr: '...', ur: '...' }`. A few things also carry a single shared `arabic` field — that one is **not** per-language, don't touch it when fixing a translation.

## Translation guidelines

- Match the site's existing tone: warm, direct, second-person, informal address (tu/du/je-jij/sen, not vous/Sie/u/siz).
- Keep religious terms consistent with how that language already uses them elsewhere in the file — when in doubt, `grep` the term across `src/` to see the established convention before introducing a new one.
- Hadith/Qur'an citations (e.g. `Sahih al-Bukhari 528`, `Qur'an 4:103`) should keep the same collection name and reference number across every language — only the surrounding sentence gets translated.
- Please only edit languages you actually speak. A partial, honest fix is much more useful than a guessed one.

## Review & deploy

Pull requests are reviewed and merged by the maintainer. Once a PR is approved and merged into `main`, the site redeploys automatically — nothing else to do on your end.
