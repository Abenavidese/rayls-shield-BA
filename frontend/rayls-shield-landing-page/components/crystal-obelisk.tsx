export function CrystalObelisk() {
  return (
    <svg
      width="300"
      height="400"
      viewBox="0 0 300 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="drop-shadow-[0_0_30px_rgba(244,255,74,0.3)]"
    >
      {/* Base */}
      <path
        d="M150 380 L220 360 L220 340 L150 360 L80 340 L80 360 Z"
        stroke="#F4FF4A"
        strokeWidth="1.5"
        fill="#F4FF4A"
        fillOpacity="0.05"
      />
      
      {/* Lower section */}
      <path
        d="M150 360 L210 320 L210 200 L150 160 L90 200 L90 320 Z"
        stroke="#F4FF4A"
        strokeWidth="2"
        fill="none"
      />
      
      {/* Middle section */}
      <path
        d="M150 160 L200 130 L200 80 L150 50 L100 80 L100 130 Z"
        stroke="#F4FF4A"
        strokeWidth="2"
        fill="#F4FF4A"
        fillOpacity="0.08"
      />
      
      {/* Top crystal point */}
      <path
        d="M150 50 L180 30 L150 10 L120 30 Z"
        stroke="#F4FF4A"
        strokeWidth="2.5"
        fill="#F4FF4A"
        fillOpacity="0.15"
      />
      
      {/* Inner geometric details */}
      <line x1="150" y1="10" x2="150" y2="380" stroke="#F4FF4A" strokeWidth="1" opacity="0.3" />
      <line x1="90" y1="200" x2="210" y2="200" stroke="#F4FF4A" strokeWidth="1" opacity="0.3" />
      <line x1="100" y1="80" x2="200" y2="80" stroke="#F4FF4A" strokeWidth="1" opacity="0.3" />
      
      {/* Facet lines */}
      <path d="M150 50 L150 160" stroke="#F4FF4A" strokeWidth="1.5" opacity="0.5" />
      <path d="M100 80 L150 160" stroke="#F4FF4A" strokeWidth="1" opacity="0.4" />
      <path d="M200 80 L150 160" stroke="#F4FF4A" strokeWidth="1" opacity="0.4" />
      <path d="M90 200 L150 160" stroke="#F4FF4A" strokeWidth="1" opacity="0.4" />
      <path d="M210 200 L150 160" stroke="#F4FF4A" strokeWidth="1" opacity="0.4" />
      
      {/* Glow points */}
      <circle cx="150" cy="10" r="3" fill="#F4FF4A" opacity="0.8" />
      <circle cx="150" cy="50" r="2.5" fill="#F4FF4A" opacity="0.6" />
      <circle cx="150" cy="160" r="2.5" fill="#F4FF4A" opacity="0.6" />
      <circle cx="150" cy="360" r="2.5" fill="#F4FF4A" opacity="0.6" />
      
      {/* Purple accent lines */}
      <path d="M120 30 L180 30" stroke="#C7A9FF" strokeWidth="1.5" opacity="0.4" />
      <path d="M100 130 L200 130" stroke="#C7A9FF" strokeWidth="1.5" opacity="0.4" />
      <path d="M90 320 L210 320" stroke="#C7A9FF" strokeWidth="1.5" opacity="0.4" />
    </svg>
  )
}
