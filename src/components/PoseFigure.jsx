import { useGender } from '../i18n/GenderContext.jsx'

// Stylised illustrations of the prayer positions, drawn as rounded stick
// figures inside a mihrab arch. Deliberately abstract (no facial features,
// no realistic body) — for the female theme a draped headscarf silhouette
// is added behind the head so the figure reads as a woman praying, without
// depicting an identifiable person.

const strokeProps = {
  fill: 'none',
  stroke: 'var(--green-dark)',
  strokeWidth: 13,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

const HEAD = { fill: 'var(--green-dark)', stroke: 'none' }

// Head circle center/radius per pose — used to place the hijab drape
// directly behind the right head in every position.
const HEADS = {
  standing: { cx: 110, cy: 78, r: 14 },
  takbir: { cx: 110, cy: 78, r: 14 },
  qiyam: { cx: 110, cy: 78, r: 14 },
  ruku: { cx: 62, cy: 102, r: 13 },
  sujud: { cx: 63, cy: 170, r: 12 },
  sitting: { cx: 106, cy: 96, r: 14 },
  salam: { cx: 118, cy: 96, r: 14 },
}

function hijabPath(cx, cy, r) {
  return `M ${cx} ${cy - r - 7}
    Q ${cx - r - 15} ${cy - r + 3} ${cx - r - 11} ${cy + r + 17}
    L ${cx + r + 11} ${cy + r + 17}
    Q ${cx + r + 15} ${cy - r + 3} ${cx} ${cy - r - 7}
    Z`
}

function Hijab({ pose }) {
  const head = HEADS[pose] || HEADS.standing
  return (
    <path
      d={hijabPath(head.cx, head.cy, head.r)}
      fill="var(--gold)"
      fillOpacity="0.9"
      stroke="var(--gold-dark)"
      strokeWidth="2"
    />
  )
}

function Frame({ children, poseKey, pose, gender }) {
  return (
    <div className="figure-float">
      <svg viewBox="0 0 220 210" width="230" role="img" aria-hidden="true">
        {/* mihrab arch backdrop */}
        <path
          d="M30 200 V95 Q30 30 110 22 Q190 30 190 95 V200 Z"
          fill="var(--gold)"
          fillOpacity="0.16"
          stroke="var(--gold)"
          strokeWidth="3"
        />
        <circle cx="110" cy="50" r="7" fill="var(--gold)" opacity="0.55" />
        {/* ground line */}
        <line x1="42" y1="183" x2="178" y2="183" stroke="var(--gold)" strokeWidth="4" strokeLinecap="round" />
        {/* key restarts the draw-in animation on every pose change */}
        <g className="figure-lines" key={poseKey}>
          {gender === 'female' && <Hijab pose={pose} />}
          {children}
        </g>
      </svg>
    </div>
  )
}

const poses = {
  standing: (
    <>
      <circle cx="110" cy="78" r="14" {...HEAD} />
      <path d="M110 92 V138" {...strokeProps} />
      <path d="M110 104 L98 132 M110 104 L122 132" {...strokeProps} strokeWidth={10} />
      <path d="M110 138 L101 178 M110 138 L119 178" {...strokeProps} />
    </>
  ),
  takbir: (
    <>
      <circle cx="110" cy="78" r="14" {...HEAD} />
      <path d="M110 92 V138" {...strokeProps} />
      <path d="M110 106 L90 84 M110 106 L130 84" {...strokeProps} strokeWidth={10} />
      <path d="M110 138 L101 178 M110 138 L119 178" {...strokeProps} />
    </>
  ),
  qiyam: (
    <>
      <circle cx="110" cy="78" r="14" {...HEAD} />
      <path d="M110 92 V138" {...strokeProps} />
      <path d="M110 104 L97 122 L118 124 M110 104 L123 122 L102 124" {...strokeProps} strokeWidth={10} />
      <path d="M110 138 L101 178 M110 138 L119 178" {...strokeProps} />
    </>
  ),
  ruku: (
    <>
      <circle cx="62" cy="102" r="13" {...HEAD} />
      <path d="M130 118 L80 108" {...strokeProps} />
      <path d="M86 110 L108 146" {...strokeProps} strokeWidth={10} />
      <path d="M130 118 L124 178 M130 118 L138 178" {...strokeProps} />
    </>
  ),
  sujud: (
    <>
      <circle cx="63" cy="170" r="12" {...HEAD} />
      <path d="M128 148 L84 164" {...strokeProps} />
      <path d="M92 162 L78 180 M100 159 L92 180" {...strokeProps} strokeWidth={9} />
      <path d="M128 148 L140 178 L162 178" {...strokeProps} />
    </>
  ),
  sitting: (
    <>
      <circle cx="106" cy="96" r="14" {...HEAD} />
      <path d="M108 110 L114 152" {...strokeProps} />
      <path d="M110 124 L96 150 M112 126 L126 150" {...strokeProps} strokeWidth={9} />
      <path d="M114 152 L92 178 L128 178 Z" fill="var(--green-dark)" stroke="var(--green-dark)" strokeWidth="10" strokeLinejoin="round" />
    </>
  ),
  salam: (
    <>
      <circle cx="118" cy="96" r="14" {...HEAD} />
      <path d="M140 88 Q152 96 140 106" fill="none" stroke="var(--gold)" strokeWidth="4" strokeLinecap="round" />
      <path d="M150 82 Q168 96 150 112" fill="none" stroke="var(--gold)" strokeWidth="4" strokeLinecap="round" />
      <path d="M108 110 L114 152" {...strokeProps} />
      <path d="M110 124 L96 150 M112 126 L126 150" {...strokeProps} strokeWidth={9} />
      <path d="M114 152 L92 178 L128 178 Z" fill="var(--green-dark)" stroke="var(--green-dark)" strokeWidth="10" strokeLinejoin="round" />
    </>
  ),
}

export default function PoseFigure({ pose, poseKey }) {
  const { gender } = useGender()
  const key = poses[pose] ? pose : 'standing'
  return (
    <Frame poseKey={poseKey ?? pose} pose={key} gender={gender}>
      {poses[key]}
    </Frame>
  )
}
