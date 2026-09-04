// Powers the "Suggest an edit" / "Report an issue" links in the footer.
// GitHub's web editor auto-forks the repo for non-collaborators and offers
// to open a pull request on save — no custom backend needed for that flow.
const REPO = 'path-to-paradise/salah-guide'
const BRANCH = 'main'

// Route -> the page file a contributor should start from. Not every piece of
// text lives in this file (a lot of content is shared out of src/data/*.js),
// but it's the right starting point for the large majority of on-page fixes;
// CONTRIBUTING.md explains where the rest of the content actually lives.
const PAGE_FILES = {
  '/': 'Home',
  '/basics': 'Basics',
  '/purity': 'Purity',
  '/times': 'PrayerTimes',
  '/how-to-pray': 'HowToPray',
  '/types': 'TypesOfSalah',
  '/duas': 'Duas',
  '/beyond': 'Beyond',
  '/quiz': 'Quiz',
  '/glossary': 'Glossary',
}

export function editPageUrl(pathname) {
  const file = PAGE_FILES[pathname] || 'Home'
  return `https://github.com/${REPO}/edit/${BRANCH}/src/pages/${file}.jsx`
}

export function newIssueUrl(pathname) {
  const params = new URLSearchParams({
    template: 'mistake-report.md',
    title: `Mistake on ${pathname}`,
  })
  return `https://github.com/${REPO}/issues/new?${params}`
}
