function Logo({ size = 34 }) {
  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
    >
      <g strokeWidth="2">
        <line x1="32" y1="5" x2="32" y2="12" />
        <line x1="32" y1="52" x2="32" y2="59" />
        <line x1="5" y1="32" x2="12" y2="32" />
        <line x1="52" y1="32" x2="59" y2="32" />
        <line x1="12.5" y1="12.5" x2="17.5" y2="17.5" />
        <line x1="46.5" y1="46.5" x2="51.5" y2="51.5" />
        <line x1="51.5" y1="12.5" x2="46.5" y2="17.5" />
        <line x1="17.5" y1="46.5" x2="12.5" y2="51.5" />
      </g>
      <circle cx="32" cy="32" r="18" />
      <path
        d="M38 23 A11 11 0 1 0 38 41 A8.5 8.5 0 1 1 38 23 Z"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  )
}

export default Logo
