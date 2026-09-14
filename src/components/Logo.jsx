function Logo() {
  return <svg className="brand-logo" viewBox="0 0 48 48" role="img" aria-label="FW monogram" focusable="false">
    <defs>
      <linearGradient id="logo-accent" x1="7" y1="6" x2="41" y2="42" gradientUnits="userSpaceOnUse">
        <stop stopColor="#38bdf8" />
        <stop offset="1" stopColor="#6366f1" />
      </linearGradient>
      <filter id="logo-glow" x="-30%" y="-30%" width="160%" height="160%">
        <feGaussianBlur stdDeviation="1.8" result="blur" />
        <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
      </filter>
    </defs>
    <rect x="1.5" y="1.5" width="45" height="45" rx="14" fill="#0f172a" stroke="url(#logo-accent)" strokeWidth="1.5" />
    <text x="24" y="28" textAnchor="middle" fill="url(#logo-accent)" fontFamily="DM Mono, monospace" fontSize="10" fontWeight="500" letterSpacing="-.6" filter="url(#logo-glow)">&lt;FW/&gt;</text>
  </svg>
}

export default Logo