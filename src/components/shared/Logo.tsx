export function TreeLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Tree foliage - three layers */}
      <circle cx="24" cy="14" r="8" fill="currentColor" opacity="0.9" />
      <circle cx="18" cy="20" r="7" fill="currentColor" opacity="0.85" />
      <circle cx="30" cy="20" r="7" fill="currentColor" opacity="0.85" />
      <circle cx="15" cy="27" r="6" fill="currentColor" opacity="0.8" />
      <circle cx="33" cy="27" r="6" fill="currentColor" opacity="0.8" />

      {/* Trunk */}
      <rect
        x="21"
        y="32"
        width="6"
        height="10"
        rx="1"
        fill="currentColor"
        opacity="0.9"
      />

      {/* Accent line on trunk */}
      <rect x="22" y="32" width="1.5" height="10" fill="currentColor" opacity="0.6" />

      {/* Ground indicator */}
      <ellipse cx="24" cy="43" rx="8" ry="2" fill="currentColor" opacity="0.3" />
    </svg>
  );
}
