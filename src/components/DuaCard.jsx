import { useLang } from '../i18n/LanguageContext.jsx'
import { duaAudio } from '../data/audio.js'
import AudioPlayer from './AudioPlayer.jsx'

export default function DuaCard({ dua }) {
  const { L, t } = useLang()
  const audio = duaAudio[dua.id]
  return (
    <article className="dua-card" id={dua.id}>
      <div className="dua-head">
        <h3>{L(dua.title)}</h3>
      </div>
      <p className="dua-occasion">{L(dua.occasion)}</p>
      <div className="dua-arabic" lang="ar">{dua.arabic}</div>
      {audio && <AudioPlayer src={audio.src} credit={audio.credit} trackId={dua.id} />}
      {dua.notes && <div className="dua-notes">💡 {L(dua.notes)}</div>}
      <p className="dua-translit">{L(dua.transliteration)}</p>
      <p className="dua-translation">“{L(dua.translation)}”</p>
      <p className="dua-source">
        <strong>{t.common.source}:</strong> {L(dua.source)}
      </p>
    </article>
  )
}
