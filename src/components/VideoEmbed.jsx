import { useState } from 'react'
import { useLang } from '../i18n/LanguageContext.jsx'

// Click-to-load embed: shows the YouTube thumbnail first so the page stays
// fast and nothing loads from YouTube until the user chooses to play.
export default function VideoEmbed({ video }) {
  const [playing, setPlaying] = useState(false)
  const { L } = useLang()
  const title = L(video.title)

  return (
    <div className="video-card">
      <div className="video-frame">
        {playing ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button
            className="video-poster"
            style={{
              backgroundImage: `url(https://i.ytimg.com/vi/${video.id}/hqdefault.jpg)`,
            }}
            onClick={() => setPlaying(true)}
            aria-label={title}
          >
            <span className="play-icon" />
          </button>
        )}
      </div>
      <div className="video-meta">
        <h4>{title}</h4>
        <p>{L(video.desc)}</p>
      </div>
    </div>
  )
}
