export default function Logo({ size = 40, white = false }) {
  const id = `lg${Math.random().toString(36).slice(2, 7)}`
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={`${id}a`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00D4FF" />
          <stop offset="100%" stopColor="#4F8EF7" />
        </linearGradient>
        <linearGradient id={`${id}b`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0A1A4A" />
          <stop offset="100%" stopColor="#0D2060" />
        </linearGradient>
        <filter id={`${id}glow`} x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Circle background */}
      <circle cx="50" cy="50" r="48" fill={white ? 'white' : `url(#${id}b)`} />
      <circle cx="50" cy="50" r="48" fill="none" stroke={`url(#${id}a)`} strokeWidth="2" />

      {/* Package / box — bold, clean */}
      <rect x="30" y="36" width="40" height="32" rx="5" ry="5"
        fill="none" stroke={`url(#${id}a)`} strokeWidth="4" strokeLinejoin="round" />
      {/* Lid fold line */}
      <line x1="30" y1="48" x2="70" y2="48" stroke={`url(#${id}a)`} strokeWidth="3" />
      {/* Center crease */}
      <line x1="50" y1="36" x2="50" y2="48" stroke={`url(#${id}a)`} strokeWidth="3" />

      {/* Loop arrow — wide arc sweeping around the box */}
      <path
        d="M 50 20 A 32 32 0 1 1 25 72"
        stroke={`url(#${id}a)`} strokeWidth="5" strokeLinecap="round" fill="none"
        filter={`url(#${id}glow)`}
      />
      {/* Arrow head */}
      <polyline
        points="18,63 25,72 35,65"
        stroke={`url(#${id}a)`} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none"
      />
    </svg>
  )
}
