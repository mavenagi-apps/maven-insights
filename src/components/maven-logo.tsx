export function MavenLogo({ className }: { className?: string }) {
  return (
    <div className={className}>
      <svg
        width="120"
        height="24"
        viewBox="0 0 120 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.5 4L4 12l4.5 8h3L7 12l4.5-8h-3zM15.5 4L11 12l4.5 8h3L14 12l4.5-8h-3z"
          fill="#1d1c1b"
        />
        <text
          x="26"
          y="17"
          fontFamily="var(--font-geist-sans), sans-serif"
          fontSize="16"
          fontWeight="700"
          fill="#1d1c1b"
        >
          Maven
        </text>
        <text
          x="82"
          y="17"
          fontFamily="var(--font-geist-sans), sans-serif"
          fontSize="10"
          fontWeight="400"
          fill="#76726f"
          dominantBaseline="auto"
        >
          AGI
        </text>
      </svg>
    </div>
  );
}
