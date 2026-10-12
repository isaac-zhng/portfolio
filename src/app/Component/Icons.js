// Inline SVG icons.
//
// These replace the Font Awesome CDN stylesheet that layout.js used to load in
// <head>. That stylesheet was render-blocking third-party CSS (a DNS lookup,
// TLS handshake and stylesheet parse on the critical path) in exchange for
// five icons. Sizing uses `1em` so the icons keep behaving like text glyphs:
// a parent `text-[32px]` renders a 32px icon and `text-[0px]` renders nothing,
// exactly as the Font Awesome <i> elements did.

const size = "inline-block shrink-0 w-[1em] h-[1em]";

export const ArrowRight = ({ className = "" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.25"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={`${size} ${className}`}
  >
    <path d="M4 12h16" />
    <path d="M13 5l7 7-7 7" />
  </svg>
);

export const ChevronDown = ({ className = "" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={`${size} ${className}`}
  >
    <path d="M5 9l7 7 7-7" />
  </svg>
);

export const Lock = ({ className = "" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    className={`${size} ${className}`}
  >
    <path d="M12 1.75a5.25 5.25 0 0 0-5.25 5.25v1.6H6A2.75 2.75 0 0 0 3.25 11.35v8.9A2.75 2.75 0 0 0 6 23h12a2.75 2.75 0 0 0 2.75-2.75v-8.9A2.75 2.75 0 0 0 18 8.6h-.75V7A5.25 5.25 0 0 0 12 1.75Zm-3.25 6.85V7a3.25 3.25 0 0 1 6.5 0v1.6h-6.5Z" />
  </svg>
);

export const SkipBack = ({ className = "" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    className={`${size} ${className}`}
  >
    <rect x="4" y="6" width="2.6" height="12" rx="1.2" />
    <path d="M20 6.6v10.8L10.5 12 20 6.6Z" />
  </svg>
);

export const SkipForward = ({ className = "" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    className={`${size} ${className}`}
  >
    <path d="M4 6.6v10.8L13.5 12 4 6.6Z" />
    <rect x="17.4" y="6" width="2.6" height="12" rx="1.2" />
  </svg>
);

export const Pause = ({ className = "" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    className={`${size} ${className}`}
  >
    <rect x="6.5" y="4.5" width="3.6" height="15" rx="1.3" />
    <rect x="13.9" y="4.5" width="3.6" height="15" rx="1.3" />
  </svg>
);

export const List = ({ className = "" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    className={`${size} ${className}`}
  >
    <rect x="3.5" y="5.4" width="17" height="2.4" rx="1.2" />
    <rect x="3.5" y="10.8" width="17" height="2.4" rx="1.2" />
    <rect x="3.5" y="16.2" width="17" height="2.4" rx="1.2" />
  </svg>
);
