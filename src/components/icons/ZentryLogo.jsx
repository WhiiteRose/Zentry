const ZentryLogo = ({ className = 'w-24', ...props }) => (
  <svg
    className={className}
    viewBox="0 0 120 18"
    fill="none"
    aria-hidden="true"
    {...props}
  >
    {/* Z */}
    <path
      d="M0 0.5H14.5V3.2L4 14.8H14.5V17.5H0V14.8L10.5 3.2H0V0.5Z"
      fill="currentColor"
    />
    {/* E */}
    <path
      d="M19 0.5H33V3.2H22V7.8H32V10.5H22V14.8H33V17.5H19V0.5Z"
      fill="currentColor"
    />
    {/* N */}
    <path
      d="M37.5 0.5H41L51 12.5V0.5H54V17.5H50.5L40.5 5.5V17.5H37.5V0.5Z"
      fill="currentColor"
    />
    {/* T */}
    <path
      d="M58 0.5H74V3.2H67.5V17.5H64.5V3.2H58V0.5Z"
      fill="currentColor"
    />
    {/* R */}
    <path
      d="M77 0.5H87.5C90.5 0.5 92 2.5 92 5C92 7 91 8.5 89 9.2L93 17.5H89.5L86 9.8H80V17.5H77V0.5ZM80 7.2H87C88.5 7.2 89.2 6.3 89.2 5C89.2 3.7 88.5 2.8 87 2.8H80V7.2Z"
      fill="currentColor"
    />
    {/* Y */}
    <path
      d="M96 0.5H99.5L105 8.5L110.5 0.5H114L106.5 11V17.5H103.5V11L96 0.5Z"
      fill="currentColor"
    />
  </svg>
);

export default ZentryLogo;
