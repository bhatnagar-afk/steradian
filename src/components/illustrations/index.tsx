/**
 * Duotone line-art illustrations used as placeholders wherever a section is
 * designed to eventually carry real photography (from Sanity). Each one is
 * deliberately drawn for the project/section it stands in for so the page
 * never reads as an empty "image coming soon" box while real assets are
 * curated. See `MediaFrame` for how these are swapped for real images.
 */

export function HeroDiagram() {
  return (
    <svg viewBox="0 0 900 1100" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="heroGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#241f17" />
          <stop offset="55%" stopColor="#17140f" />
          <stop offset="100%" stopColor="#0f0c08" />
        </linearGradient>
      </defs>
      <rect width="900" height="1100" fill="url(#heroGrad)" />

      <circle cx="778" cy="148" r="20" stroke="#e0a868" strokeWidth="1" fill="none" opacity="0.55" />

      <g opacity="0.9">
        <circle cx="450" cy="560" r="250" fill="none" stroke="#f3e9d2" strokeWidth="1" opacity="0.42" />
        <ellipse cx="450" cy="560" rx="250" ry="66" fill="none" stroke="#f3e9d2" strokeWidth="0.8" opacity="0.26" />
        <ellipse cx="450" cy="560" rx="88" ry="250" fill="none" stroke="#f3e9d2" strokeWidth="0.8" opacity="0.22" />

        <path
          d="M450,560 L364.5,325 A250,250 0 0,1 535.5,325 Z"
          fill="#e0a868"
          fillOpacity="0.16"
          stroke="#f3e9d2"
          strokeWidth="1.1"
          opacity="0.8"
        />

        <circle cx="450" cy="560" r="3.2" fill="#f3e9d2" />

        <line x1="450" y1="560" x2="700" y2="560" stroke="#f3e9d2" strokeWidth="0.9" opacity="0.4" />
        <line x1="450" y1="553" x2="450" y2="567" stroke="#f3e9d2" strokeWidth="0.9" opacity="0.5" />
        <line x1="700" y1="553" x2="700" y2="567" stroke="#f3e9d2" strokeWidth="0.9" opacity="0.5" />
        <text x="565" y="548" fontFamily="IBM Plex Mono, monospace" fontSize="13" letterSpacing="1" fill="#f3e9d2" opacity="0.6">r</text>

        <line x1="480" y1="332" x2="616" y2="232" stroke="#e0a868" strokeWidth="0.9" opacity="0.6" />
        <line x1="616" y1="232" x2="656" y2="232" stroke="#e0a868" strokeWidth="0.9" opacity="0.6" />
        <circle cx="480" cy="332" r="2.4" fill="#e0a868" />
        <text x="616" y="214" fontFamily="IBM Plex Mono, monospace" fontSize="14" letterSpacing="2" fill="#f3e9d2">
          &#937; = 1 SR
        </text>
        <text x="616" y="252" fontFamily="IBM Plex Mono, monospace" fontSize="11" letterSpacing="1.5" fill="#f3e9d2" opacity="0.55">
          AREA A = r&#178;
        </text>
      </g>
    </svg>
  )
}

export function ResidenceIllustration() {
  return (
    <svg viewBox="0 0 900 560" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <rect width="900" height="560" fill="#ddc89e" />
      <rect x="80" y="220" width="740" height="240" fill="none" stroke="#3a2c18" strokeWidth="1.4" />
      <line x1="80" y1="220" x2="30" y2="260" stroke="#3a2c18" strokeWidth="1.4" />
      <line x1="820" y1="220" x2="870" y2="260" stroke="#3a2c18" strokeWidth="1.4" />
      <line x1="30" y1="260" x2="870" y2="260" stroke="#3a2c18" strokeWidth="1.4" />
      <g stroke="#3a2c18" strokeWidth="1.2">
        <rect x="120" y="300" width="90" height="60" fill="none" />
        <rect x="230" y="300" width="90" height="60" fill="none" />
        <rect x="340" y="300" width="90" height="60" fill="none" />
      </g>
      <rect x="470" y="300" width="110" height="160" fill="none" stroke="#3a2c18" strokeWidth="1.4" />
      <line x1="580" y1="460" x2="700" y2="460" stroke="#3a2c18" strokeWidth="1.4" />
      <line x1="700" y1="460" x2="700" y2="340" stroke="#3a2c18" strokeWidth="1.4" />
      <line x1="80" y1="460" x2="820" y2="460" stroke="#3a2c18" strokeWidth="1.4" />
      <g stroke="#3a2c18" strokeWidth="1" opacity="0.7">
        <line x1="750" y1="460" x2="735" y2="370" />
        <line x1="750" y1="460" x2="760" y2="360" />
        <line x1="750" y1="460" x2="770" y2="375" />
        <line x1="750" y1="460" x2="745" y2="360" />
      </g>
    </svg>
  )
}

export function QilaIllustration() {
  return (
    <svg viewBox="0 0 620 900" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <rect width="620" height="900" fill="#cbb183" />
      <polyline points="40,780 130,600 220,760 310,540 400,760 490,600 580,780" fill="none" stroke="#3a2c18" strokeWidth="1" opacity="0.4" />
      <polyline
        points="90,330 90,300 130,300 130,270 170,270 170,300 210,300 210,270 250,270 250,300 290,300 290,270 330,270 330,300 370,300 370,270 410,270 410,300 450,300 450,270 490,270 490,300 530,300"
        fill="none"
        stroke="#3a2c18"
        strokeWidth="1.4"
      />
      <line x1="90" y1="330" x2="90" y2="620" stroke="#3a2c18" strokeWidth="1.4" />
      <line x1="530" y1="300" x2="530" y2="620" stroke="#3a2c18" strokeWidth="1.4" />
      <line x1="90" y1="620" x2="530" y2="620" stroke="#3a2c18" strokeWidth="1.4" />
      <path d="M260 620 V500 A50 50 0 0 1 360 500 V620" fill="none" stroke="#3a2c18" strokeWidth="1.4" />
      <line x1="180" y1="620" x2="180" y2="430" stroke="#3a2c18" strokeWidth="1" />
      <line x1="440" y1="620" x2="440" y2="430" stroke="#3a2c18" strokeWidth="1" />
      <line x1="310" y1="270" x2="310" y2="210" stroke="#3a2c18" strokeWidth="1.2" />
      <path d="M310 210 L340 220 L310 230 Z" fill="#3a2c18" />
    </svg>
  )
}

export function SchoolIllustration() {
  return (
    <svg viewBox="0 0 700 590" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <rect width="700" height="590" fill="#e8d7ac" />
      <rect x="90" y="160" width="520" height="320" fill="none" stroke="#3a2c18" strokeWidth="1.4" />
      <g stroke="#3a2c18" strokeWidth="1">
        <line x1="90" y1="220" x2="610" y2="220" />
        <line x1="90" y1="280" x2="610" y2="280" />
        <line x1="90" y1="340" x2="610" y2="340" />
        <line x1="90" y1="400" x2="610" y2="400" />
        <line x1="220" y1="160" x2="220" y2="480" />
        <line x1="350" y1="160" x2="350" y2="480" />
        <line x1="480" y1="160" x2="480" y2="480" />
      </g>
      <line x1="60" y1="480" x2="640" y2="480" stroke="#3a2c18" strokeWidth="1.4" />
      <line x1="150" y1="160" x2="150" y2="100" stroke="#3a2c18" strokeWidth="1.2" />
      <path d="M150 100 L182 112 L150 124 Z" fill="#3a2c18" />
      <line x1="60" y1="520" x2="640" y2="520" stroke="#3a2c18" strokeWidth="1" opacity="0.5" />
    </svg>
  )
}

export function FactoryIllustration() {
  return (
    <svg viewBox="0 0 1200 620" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <rect width="1200" height="620" fill="#2e2415" />
      <polyline
        points="60,300 180,220 300,300 420,220 540,300 660,220 780,300 900,220 1020,300 1140,220"
        fill="none"
        stroke="#ddc89e"
        strokeWidth="1.4"
      />
      <line x1="60" y1="300" x2="60" y2="500" stroke="#ddc89e" strokeWidth="1.4" />
      <line x1="1140" y1="300" x2="1140" y2="500" stroke="#ddc89e" strokeWidth="1.4" />
      <line x1="60" y1="500" x2="1140" y2="500" stroke="#ddc89e" strokeWidth="1.4" />
      <g stroke="#ddc89e" strokeWidth="1" opacity="0.55">
        <line x1="220" y1="340" x2="220" y2="500" />
        <line x1="380" y1="340" x2="380" y2="500" />
        <line x1="540" y1="340" x2="540" y2="500" />
        <line x1="700" y1="340" x2="700" y2="500" />
        <line x1="860" y1="340" x2="860" y2="500" />
        <line x1="1000" y1="340" x2="1000" y2="500" />
      </g>
      <rect x="960" y="150" width="16" height="90" fill="none" stroke="#ddc89e" strokeWidth="1.2" />
      <line x1="0" y1="540" x2="1200" y2="540" stroke="#ddc89e" strokeWidth="1" opacity="0.3" />
    </svg>
  )
}

export function PracticePlanIllustration() {
  return (
    <svg viewBox="0 0 600 800" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <rect width="600" height="800" fill="#2e2415" />
      <g stroke="#ddc89e" strokeWidth="1" opacity="0.75">
        <rect x="110" y="140" width="380" height="300" />
        <line x1="110" y1="220" x2="490" y2="220" />
        <line x1="220" y1="140" x2="220" y2="440" />
        <line x1="340" y1="140" x2="340" y2="440" />
        <line x1="420" y1="220" x2="420" y2="440" />
      </g>
      <circle cx="300" cy="600" r="46" fill="none" stroke="#e0a868" strokeWidth="1" />
      <line x1="300" y1="554" x2="300" y2="570" stroke="#e0a868" strokeWidth="1.2" />
      <path d="M300 554 L292 566 L308 566 Z" fill="#e0a868" />
      <text x="300" y="606" textAnchor="middle" fill="#e0a868" fontFamily="IBM Plex Mono, monospace" fontSize="11" letterSpacing="2">
        N
      </text>
      <g stroke="#f3e9d2" strokeWidth="1" opacity="0.5">
        <line x1="110" y1="500" x2="490" y2="500" />
        <line x1="110" y1="494" x2="110" y2="506" />
        <line x1="490" y1="494" x2="490" y2="506" />
      </g>
    </svg>
  )
}

/** A generic material/joinery detail sketch — used as the fallback for the
 *  flexible editorial blocks (Sanity `home-section` documents), whose
 *  subject matter varies and isn't tied to one project. */
export function StudioDetailIllustration() {
  return (
    <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <rect width="800" height="600" fill="#e2d3ab" />
      <rect x="220" y="90" width="360" height="380" fill="none" stroke="#3a2c18" strokeWidth="1.4" />
      <line x1="400" y1="90" x2="400" y2="470" stroke="#3a2c18" strokeWidth="1.2" />
      <line x1="220" y1="280" x2="580" y2="280" stroke="#3a2c18" strokeWidth="1.2" />
      <g stroke="#3a2c18" strokeWidth="0.8" opacity="0.55">
        <line x1="220" y1="185" x2="580" y2="185" />
        <line x1="220" y1="375" x2="580" y2="375" />
      </g>
      <rect x="220" y="470" width="360" height="26" fill="none" stroke="#3a2c18" strokeWidth="1.2" />
      <g stroke="#3a2c18" strokeWidth="0.7" opacity="0.5">
        <line x1="230" y1="470" x2="250" y2="496" />
        <line x1="260" y1="470" x2="280" y2="496" />
        <line x1="290" y1="470" x2="310" y2="496" />
        <line x1="320" y1="470" x2="340" y2="496" />
        <line x1="350" y1="470" x2="370" y2="496" />
      </g>
      <line x1="160" y1="90" x2="160" y2="470" stroke="#3a2c18" strokeWidth="0.9" opacity="0.5" />
      <line x1="152" y1="90" x2="168" y2="90" stroke="#3a2c18" strokeWidth="0.9" opacity="0.5" />
      <line x1="152" y1="470" x2="168" y2="470" stroke="#3a2c18" strokeWidth="0.9" opacity="0.5" />
      <text x="140" y="284" textAnchor="middle" fill="#3a2c18" fontFamily="IBM Plex Mono, monospace" fontSize="11" letterSpacing="1" opacity="0.6" transform="rotate(-90 140 284)">
        DETAIL
      </text>
    </svg>
  )
}
