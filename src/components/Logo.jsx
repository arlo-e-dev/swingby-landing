export default function Logo({ size = 40, white = false }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00D4FF" />
          <stop offset="100%" stopColor="#FF6B35" />
        </linearGradient>
      </defs>
      {/* Circle background */}
      <circle cx="50" cy="50" r="48" fill={white ? "white" : "#0A0F2C"} stroke="url(#logoGrad)" strokeWidth="2.5" />
      {/* Arrow loop — package pickup path */}
      <path
        d="M 28 38 C 28 28 40 22 50 22 C 65 22 76 32 76 48 C 76 60 68 68 55 70"
        stroke="url(#logoGrad)" strokeWidth="6" strokeLinecap="round" fill="none"
      />
      {/* Arrow head */}
      <path d="M 47 62 L 55 70 L 47 78" stroke="url(#logoGrad)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      {/* Package dot */}
      <circle cx="28" cy="50" r="6" fill="url(#logoGrad)" />
    </svg>
  )
}
