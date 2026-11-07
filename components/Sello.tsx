/**
 * Sello geométrico de marca como textura de fondo.
 * SVG inline con fill-rule evenodd. No repite el logo literal.
 */
export function Sello({ className = "", opacidad = 0.06 }: { className?: string; opacidad?: number }) {
  return (
    <svg
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="gs-sello" width="112" height="112" patternUnits="userSpaceOnUse">
          <path
            fill="#9AADDA"
            fillOpacity={opacidad}
            fillRule="evenodd"
            d="M36 20 L76 20 A12 12 0 0 1 88 32 L88 72 L76 84 L36 84 A12 12 0 0 1 24 72 L24 32 Z M44 36 A5 5 0 0 0 39 41 L39 63 A5 5 0 0 0 44 68 L68 68 A5 5 0 0 0 73 63 L73 41 A5 5 0 0 0 68 36 Z"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#gs-sello)" />
    </svg>
  );
}
