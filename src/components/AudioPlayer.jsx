import { useRef, useState } from 'react'
import { useLang } from '../i18n/LanguageContext.jsx'
import { trackEvent } from '../lib/analytics.js'

const fmt = (s) => {
  if (!isFinite(s)) return '0:00'
  const m = Math.floor(s / 60)
  const sec = Math.floor(s % 60)
  return `${m}:${sec.toString().padStart(2, '0')}`
}

// Minimal recitation player. Only one plays at a time across the page.
export default function AudioPlayer({ src, credit, trackId }) {
  const ref = useRef(null)
  const trackRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [time, setTime] = useState(0)
  const [dur, setDur] = useState(0)
  const [failed, setFailed] = useState(false)
  const { L, t } = useLang()

  if (failed) return null

  const toggle = () => {
    const el = ref.current
    if (el.paused) {
      if (window.__duaAudio && window.__duaAudio !== el) window.__duaAudio.pause()
      window.__duaAudio = el
      el.play()
    } else {
      el.pause()
    }
  }

  const seek = (e) => {
    const el = ref.current
    if (!dur) return
    const rect = trackRef.current.getBoundingClientRect()
    el.currentTime = ((e.clientX - rect.left) / rect.width) * dur
  }

  return (
    <div className="audio-player">
      <button
        className={`audio-play ${playing ? 'playing' : ''}`}
        onClick={toggle}
        aria-label={playing ? t.common.pauseAudio : t.common.listen}
        title={playing ? t.common.pauseAudio : t.common.listen}
      >
        {playing ? '❚❚' : '▶'}
      </button>
      <div className="audio-main">
        <div className="audio-track" ref={trackRef} onClick={seek} role="presentation">
          <div style={{ width: dur ? `${(time / dur) * 100}%` : 0 }} />
        </div>
        <div className="audio-meta">
          <span className="audio-time">
            {fmt(time)} / {fmt(dur)}
          </span>
          <span className="audio-credit">
            🎧 {t.common.recitation}: {L(credit)}
          </span>
        </div>
      </div>
      <audio
        ref={ref}
        src={src}
        preload="none"
        onPlay={() => {
          setPlaying(true)
          trackEvent('dua_audio_play', { dua_id: trackId })
        }}
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
        onTimeUpdate={(e) => setTime(e.target.currentTime)}
        onLoadedMetadata={(e) => setDur(e.target.duration)}
        onError={() => setFailed(true)}
      />
    </div>
  )
}
