interface RaylsShieldLogoProps {
  size?: 'small' | 'medium' | 'large'
}

export function RaylsShieldLogo({ size = 'medium' }: RaylsShieldLogoProps) {
  const dimensions = {
    small: { width: 40, height: 40 },
    medium: { width: 80, height: 80 },
    large: { width: 160, height: 160 },
  }

  const { width, height } = dimensions[size]

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="drop-shadow-[0_0_15px_rgba(244,255,74,0.5)]"
    >
      {/* Outer hexagon */}
      <path
        d="M100 20 L170 60 L170 140 L100 180 L30 140 L30 60 Z"
        stroke="#F4FF4A"
        strokeWidth="2"
        fill="none"
      />
      
      {/* Inner geometric pattern */}
      <path
        d="M100 50 L150 80 L150 120 L100 150 L50 120 L50 80 Z"
        stroke="#F4FF4A"
        strokeWidth="2"
        fill="none"
      />
      
      {/* Center star/shield */}
      <path
        d="M100 70 L120 100 L100 130 L80 100 Z"
        stroke="#F4FF4A"
        strokeWidth="2.5"
        fill="#F4FF4A"
        fillOpacity="0.1"
      />
      
      {/* Connecting lines */}
      <line x1="100" y1="20" x2="100" y2="50" stroke="#F4FF4A" strokeWidth="1.5" />
      <line x1="170" y1="60" x2="150" y2="80" stroke="#F4FF4A" strokeWidth="1.5" />
      <line x1="170" y1="140" x2="150" y2="120" stroke="#F4FF4A" strokeWidth="1.5" />
      <line x1="100" y1="180" x2="100" y2="150" stroke="#F4FF4A" strokeWidth="1.5" />
      <line x1="30" y1="140" x2="50" y2="120" stroke="#F4FF4A" strokeWidth="1.5" />
      <line x1="30" y1="60" x2="50" y2="80" stroke="#F4FF4A" strokeWidth="1.5" />
      
      {/* Corner details */}
      <circle cx="100" cy="20" r="3" fill="#F4FF4A" />
      <circle cx="170" cy="60" r="3" fill="#F4FF4A" />
      <circle cx="170" cy="140" r="3" fill="#F4FF4A" />
      <circle cx="100" cy="180" r="3" fill="#F4FF4A" />
      <circle cx="30" cy="140" r="3" fill="#F4FF4A" />
      <circle cx="30" cy="60" r="3" fill="#F4FF4A" />
    </svg>
  )
}
