import { useLang } from '../i18n/LanguageContext.jsx'
import { editPageUrl, newIssueUrl, repoUrl } from '../lib/github.js'

const PAGES = [
  { to: '/basics', key: 'basics', icon: '💧' },
  { to: '/purity', key: 'purity', icon: '🚿' },
  { to: '/times', key: 'times', icon: '🕐' },
  { to: '/how-to-pray', key: 'howto', icon: '🕌' },
  { to: '/types', key: 'types', icon: '🌙' },
  { to: '/duas', key: 'duas', icon: '📖' },
  { to: '/beyond', key: 'beyond', icon: '🎓' },
  { to: '/quiz', key: 'quiz', icon: '🏆' },
  { to: '/glossary', key: 'glossary', icon: '📚' },
]

const C = {
  en: {
    title: 'Help Improve This Guide',
    lead: "Every fix makes this a better resource for the next person learning to pray. Found a typo, a broken link, or a translation that doesn't sound quite right? Here's how to fix it — no coding experience needed for small fixes.",
    waysEyebrow: 'How to contribute',
    waysTitle: 'Two ways to help',
    quickTitle: '✏️ Quick fix, no setup',
    quickDesc: 'Spotted something small — a typo, a wrong word, a broken link? Open any page on this site and click "Suggest an edit" in the footer. It takes you straight to that page\'s file on GitHub, already forked for you. Make your change, save it, and GitHub offers to open a pull request automatically.',
    devTitle: '🛠️ Bigger changes',
    devDesc: 'Adding a new dua, fixing several things at once, or want to test your change locally before submitting? Clone the project, run it on your machine, and open a pull request the usual way.',
    devBtn: 'Full setup guide on GitHub →',
    pagesEyebrow: 'Quick edit',
    pagesTitle: 'Or jump straight to a page',
    pagesSub: "Each one opens that page's source file directly on GitHub.",
    reportTitle: "Found something but can't fix it yourself?",
    reportDesc: "That's fine too — just tell us about it and we'll take a look.",
    reportBtn: 'Report an issue →',
    guideNote: 'Contributing a translation? Please only edit languages you actually speak, and keep hadith/Qur\'an citations exactly as they are — only the surrounding sentence gets translated. Full guidelines are in ',
    guideLink: 'CONTRIBUTING.md',
  },
  bg: {
    title: 'Помогни да подобрим това ръководство',
    lead: 'Всяка поправка прави сайта по-добър за следващия човек, който учи да се моли. Забеляза печатна грешка, счупена връзка или превод, който не звучи както трябва? Ето как да го оправиш — за малки поправки не е нужен опит с код.',
    waysEyebrow: 'Как да допринесеш',
    waysTitle: 'Два начина да помогнеш',
    quickTitle: '✏️ Бърза поправка, без настройка',
    quickDesc: 'Забеляза нещо малко — печатна грешка, грешна дума, счупена връзка? Отвори която и да е страница в сайта и натисни „Предложи корекция“ долу. Ще те отведе директно до файла на страницата в GitHub, вече форкнат за теб. Направи промяната, запази я и GitHub автоматично предлага да отвориш pull request.',
    devTitle: '🛠️ По-големи промени',
    devDesc: 'Добавяш нова дуа, поправяш няколко неща наведнъж или искаш да тестваш промяната си локално, преди да я изпратиш? Клонирай проекта, пусни го на компютъра си и отвори pull request по обичайния начин.',
    devBtn: 'Пълно ръководство за настройка в GitHub →',
    pagesEyebrow: 'Бърза поправка',
    pagesTitle: 'Или директно към страница',
    pagesSub: 'Всяка отваря файла на съответната страница директно в GitHub.',
    reportTitle: 'Забеляза нещо, но не можеш да го поправиш сам?',
    reportDesc: 'И това е добре — просто ни кажи и ще го погледнем.',
    reportBtn: 'Докладвай проблем →',
    guideNote: 'Допринасяш с превод? Моля, редактирай само езици, които наистина владееш, и запази цитатите от хадис/Коран точно както са — превежда се само заобикалящото изречение. Пълните насоки са в ',
    guideLink: 'CONTRIBUTING.md',
  },
  fr: {
    title: 'Aide à améliorer ce guide',
    lead: "Chaque correction rend ce site meilleur pour la prochaine personne qui apprend à prier. Tu as repéré une faute de frappe, un lien cassé, ou une traduction qui sonne mal ? Voici comment la corriger — aucune expérience de code n'est nécessaire pour les petites corrections.",
    waysEyebrow: 'Comment contribuer',
    waysTitle: "Deux façons d'aider",
    quickTitle: '✏️ Correction rapide, sans installation',
    quickDesc: 'Tu as repéré un petit détail — une faute de frappe, un mot erroné, un lien cassé ? Ouvre n\'importe quelle page du site et clique sur « Propose une modification » dans le pied de page. Tu arrives directement sur le fichier de cette page sur GitHub, déjà forké pour toi. Fais ta modification, enregistre-la, et GitHub propose automatiquement d\'ouvrir une pull request.',
    devTitle: '🛠️ Changements plus importants',
    devDesc: "Tu ajoutes une nouvelle doua, corriges plusieurs choses à la fois, ou veux tester ta modification en local avant de l'envoyer ? Clone le projet, lance-le sur ta machine, et ouvre une pull request de la manière habituelle.",
    devBtn: "Guide d'installation complet sur GitHub →",
    pagesEyebrow: 'Correction rapide',
    pagesTitle: 'Ou accède directement à une page',
    pagesSub: 'Chacune ouvre le fichier source de cette page directement sur GitHub.',
    reportTitle: 'Tu as repéré un problème mais ne peux pas le corriger toi-même ?',
    reportDesc: "Pas de souci — dis-le nous simplement et on y jettera un œil.",
    reportBtn: 'Signaler un problème →',
    guideNote: "Tu contribues à une traduction ? Merci de ne modifier que les langues que tu maîtrises réellement, et de garder les citations du Coran/hadiths exactement telles quelles — seule la phrase autour est traduite. Les consignes complètes sont dans ",
    guideLink: 'CONTRIBUTING.md',
  },
  de: {
    title: 'Hilf mit, diesen Leitfaden zu verbessern',
    lead: 'Jede Korrektur macht diese Seite für die nächste Person, die beten lernt, ein bisschen besser. Hast du einen Tippfehler, einen kaputten Link oder eine Übersetzung entdeckt, die sich nicht ganz richtig anhört? So kannst du es beheben — für kleine Korrekturen brauchst du keine Programmiererfahrung.',
    waysEyebrow: 'So kannst du mitwirken',
    waysTitle: 'Zwei Wege, um zu helfen',
    quickTitle: '✏️ Schnelle Korrektur, ohne Einrichtung',
    quickDesc: 'Etwas Kleines entdeckt — einen Tippfehler, ein falsches Wort, einen kaputten Link? Öffne eine beliebige Seite auf dieser Website und klicke unten auf „Änderung vorschlagen". Du gelangst direkt zur Datei dieser Seite auf GitHub, bereits für dich geforkt. Nimm deine Änderung vor, speichere sie, und GitHub bietet automatisch an, einen Pull Request zu öffnen.',
    devTitle: '🛠️ Größere Änderungen',
    devDesc: 'Du fügst eine neue Dua hinzu, korrigierst mehrere Dinge auf einmal, oder möchtest deine Änderung lokal testen, bevor du sie einreichst? Klone das Projekt, führe es auf deinem Rechner aus und öffne einen Pull Request auf die übliche Weise.',
    devBtn: 'Vollständige Einrichtungsanleitung auf GitHub →',
    pagesEyebrow: 'Schnelle Korrektur',
    pagesTitle: 'Oder direkt zu einer Seite springen',
    pagesSub: 'Jede öffnet die Quelldatei dieser Seite direkt auf GitHub.',
    reportTitle: 'Etwas entdeckt, kannst es aber nicht selbst beheben?',
    reportDesc: 'Auch das ist in Ordnung — sag uns einfach Bescheid, und wir schauen es uns an.',
    reportBtn: 'Problem melden →',
    guideNote: 'Du trägst eine Übersetzung bei? Bitte bearbeite nur Sprachen, die du wirklich sprichst, und lasse Hadith-/Koranzitate genau so, wie sie sind — nur der umgebende Satz wird übersetzt. Die vollständigen Richtlinien findest du in ',
    guideLink: 'CONTRIBUTING.md',
  },
  nl: {
    title: 'Help deze gids te verbeteren',
    lead: 'Elke correctie maakt deze site een beetje beter voor de volgende persoon die leert bidden. Heb je een typefout, een kapotte link, of een vertaling gevonden die niet helemaal klopt? Zo los je het op — voor kleine correcties heb je geen programmeerervaring nodig.',
    waysEyebrow: 'Hoe je kunt bijdragen',
    waysTitle: 'Twee manieren om te helpen',
    quickTitle: '✏️ Snelle fix, geen installatie nodig',
    quickDesc: 'Iets kleins gezien — een typefout, een verkeerd woord, een kapotte link? Open een willekeurige pagina op deze site en klik onderaan op "Stel een wijziging voor". Je komt direct op het bestand van die pagina op GitHub terecht, al voor je geforkt. Breng je wijziging aan, sla op, en GitHub stelt automatisch voor om een pull request te openen.',
    devTitle: '🛠️ Grotere wijzigingen',
    devDesc: 'Voeg je een nieuwe doea toe, corrigeer je meerdere dingen tegelijk, of wil je je wijziging lokaal testen voordat je hem indient? Clone het project, draai het op je eigen machine, en open een pull request op de gebruikelijke manier.',
    devBtn: 'Volledige installatiehandleiding op GitHub →',
    pagesEyebrow: 'Snelle fix',
    pagesTitle: 'Of ga direct naar een pagina',
    pagesSub: 'Elke knop opent het bronbestand van die pagina direct op GitHub.',
    reportTitle: 'Iets gevonden maar kun je het niet zelf oplossen?',
    reportDesc: 'Ook prima — laat het ons gewoon weten, dan kijken we ernaar.',
    reportBtn: 'Probleem melden →',
    guideNote: 'Draag je bij aan een vertaling? Bewerk alsjeblieft alleen talen die je echt spreekt, en laat hadith-/Koranverwijzingen precies zoals ze zijn — alleen de omringende zin wordt vertaald. De volledige richtlijnen staan in ',
    guideLink: 'CONTRIBUTING.md',
  },
  tr: {
    title: 'Bu Rehberi Geliştirmeye Yardım Et',
    lead: 'Her düzeltme, namaz kılmayı öğrenen bir sonraki kişi için bu siteyi biraz daha iyi hale getirir. Bir yazım hatası, bozuk bir bağlantı veya pek doğru gelmeyen bir çeviri mi fark ettin? İşte nasıl düzelteceğin — küçük düzeltmeler için kodlama deneyimine gerek yok.',
    waysEyebrow: 'Nasıl katkıda bulunulur',
    waysTitle: 'Yardım etmenin iki yolu',
    quickTitle: '✏️ Hızlı düzeltme, kurulum gerekmez',
    quickDesc: 'Küçük bir şey mi fark ettin — bir yazım hatası, yanlış bir kelime, bozuk bir bağlantı? Sitedeki herhangi bir sayfayı aç ve altta "Düzenleme öner"e tıkla. Doğrudan o sayfanın GitHub\'daki dosyasına gidersin, senin için zaten forklanmış olarak. Değişikliğini yap, kaydet, GitHub otomatik olarak bir pull request açmayı önerir.',
    devTitle: '🛠️ Daha büyük değişiklikler',
    devDesc: "Yeni bir dua mı ekliyorsun, birden fazla şeyi aynı anda mı düzeltiyorsun, ya da göndermeden önce değişikliğini kendi bilgisayarında test etmek mi istiyorsun? Projeyi klonla, kendi makinende çalıştır ve her zamanki gibi bir pull request aç.",
    devBtn: "GitHub'da tam kurulum rehberi →",
    pagesEyebrow: 'Hızlı düzeltme',
    pagesTitle: 'Ya da doğrudan bir sayfaya git',
    pagesSub: "Her biri o sayfanın kaynak dosyasını doğrudan GitHub'da açar.",
    reportTitle: 'Bir şey fark ettin ama kendin düzeltemiyor musun?',
    reportDesc: 'Sorun değil — bize bildirmen yeterli, biz bakarız.',
    reportBtn: 'Sorun bildir →',
    guideNote: "Bir çeviriye mi katkıda bulunuyorsun? Lütfen yalnızca gerçekten bildiğin dilleri düzenle ve hadis/Kur'an alıntılarını olduğu gibi bırak — yalnızca çevresindeki cümle çevrilir. Tam rehber şurada: ",
    guideLink: 'CONTRIBUTING.md',
  },
  ur: {
    title: 'اس رہنما کتاب کو بہتر بنانے میں مدد کریں',
    lead: 'ہر تصحیح اس سائٹ کو نماز سیکھنے والے اگلے شخص کے لیے تھوڑا بہتر بنا دیتی ہے۔ کوئی املا کی غلطی، ٹوٹا ہوا لنک، یا کوئی ترجمہ جو ٹھیک نہیں لگتا؟ اسے درست کرنے کا طریقہ یہاں ہے — چھوٹی تصحیحات کے لیے کوڈنگ کے تجربے کی ضرورت نہیں۔',
    waysEyebrow: 'کیسے حصہ لیں',
    waysTitle: 'مدد کرنے کے دو طریقے',
    quickTitle: '✏️ فوری تصحیح، کسی سیٹ اپ کے بغیر',
    quickDesc: 'کوئی چھوٹی سی چیز نظر آئی — املا کی غلطی، غلط لفظ، ٹوٹا ہوا لنک؟ سائٹ کا کوئی بھی صفحہ کھولیں اور نیچے "ترمیم تجویز کریں" پر کلک کریں۔ یہ آپ کو براہ راست اس صفحے کی فائل تک GitHub پر لے جائے گا، جو آپ کے لیے پہلے سے فورک ہو چکی ہے۔ اپنی تبدیلی کریں، محفوظ کریں، اور GitHub خودکار طور پر pull request کھولنے کی تجویز دے گا۔',
    devTitle: '🛠️ بڑی تبدیلیاں',
    devDesc: 'کوئی نئی دعا شامل کر رہے ہیں، ایک ساتھ کئی چیزیں درست کر رہے ہیں، یا جمع کرانے سے پہلے اپنی تبدیلی کو مقامی طور پر آزمانا چاہتے ہیں؟ پراجیکٹ کلون کریں، اسے اپنے کمپیوٹر پر چلائیں، اور معمول کے مطابق pull request کھولیں۔',
    devBtn: 'GitHub پر مکمل سیٹ اپ گائیڈ →',
    pagesEyebrow: 'فوری تصحیح',
    pagesTitle: 'یا براہ راست کسی صفحے پر جائیں',
    pagesSub: 'ہر ایک اس صفحے کی سورس فائل براہ راست GitHub پر کھولتا ہے۔',
    reportTitle: 'کچھ نظر آیا لیکن خود درست نہیں کر سکتے؟',
    reportDesc: 'یہ بھی ٹھیک ہے — بس ہمیں بتائیں اور ہم دیکھ لیں گے۔',
    reportBtn: 'مسئلہ رپورٹ کریں →',
    guideNote: 'کسی ترجمے میں حصہ لے رہے ہیں؟ براہ کرم صرف وہی زبانیں ترمیم کریں جو آپ واقعی جانتے ہیں، اور حدیث/قرآن کے حوالہ جات کو بالکل ویسا ہی رہنے دیں — صرف ارد گرد کا جملہ ترجمہ ہوتا ہے۔ مکمل ہدایات یہاں ہیں: ',
    guideLink: 'CONTRIBUTING.md',
  },
}

export default function Contribute() {
  const { lang, t } = useLang()
  const c = C[lang] || C.en

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
          <span className="eyebrow">{c.waysEyebrow}</span>
          <h2 className="section-title">{c.waysTitle}</h2>
          <div className="card-grid" style={{ marginBottom: 48 }}>
            <div className="card">
              <h3>{c.quickTitle}</h3>
              <p>{c.quickDesc}</p>
            </div>
            <div className="card">
              <h3>{c.devTitle}</h3>
              <p>{c.devDesc}</p>
              <a
                className="btn btn-green"
                style={{ marginTop: 14 }}
                href={repoUrl('/blob/main/CONTRIBUTING.md')}
                target="_blank"
                rel="noreferrer"
              >
                {c.devBtn}
              </a>
            </div>
          </div>

          <span className="eyebrow">{c.pagesEyebrow}</span>
          <h2 className="section-title">{c.pagesTitle}</h2>
          <p className="section-sub">{c.pagesSub}</p>
          <div className="card-grid" style={{ marginBottom: 40 }}>
            {PAGES.map((p) => (
              <a
                key={p.to}
                className="card"
                href={editPageUrl(p.to)}
                target="_blank"
                rel="noreferrer"
              >
                <span className="card-icon" aria-hidden="true">{p.icon}</span>
                <h3>{t.nav[p.key]}</h3>
              </a>
            ))}
          </div>

          <div className="callout gold" style={{ marginBottom: 20 }}>
            <strong>{c.reportTitle}</strong>
            {c.reportDesc}
            <div style={{ marginTop: 12 }}>
              <a className="btn btn-green" href={newIssueUrl()} target="_blank" rel="noreferrer">
                {c.reportBtn}
              </a>
            </div>
          </div>

          <div className="callout green">
            {c.guideNote}
            <a href={repoUrl('/blob/main/CONTRIBUTING.md')} target="_blank" rel="noreferrer">
              <strong>{c.guideLink}</strong>
            </a>
            .
          </div>
        </div>
      </section>
    </>
  )
}
