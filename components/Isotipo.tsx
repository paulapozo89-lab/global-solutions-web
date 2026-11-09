/**
 * Isotipo de Global Solutions S&L en vector, trazado con las medidas del archivo oficial (isotipo.png, 250 px).
 * Cuadrado redondeado con anillo octagonal recortado y rectángulo interior.
 */
export function IsotipoSvg({ size = 250, color = "#ffffff", fondo = "transparent" }: { size?: number; color?: string; fondo?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 250 250" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {fondo !== "transparent" && <rect width="250" height="250" fill={fondo} />}
      <path
        fill={color}
        fillRule="evenodd"
        d="M40 0 H210 A40 40 0 0 1 250 40 V210 A40 40 0 0 1 210 250 H40 A40 40 0 0 1 0 210 V40 A40 40 0 0 1 40 0 Z M75 51 L175 51 L212 88 L212 162 L175 199 L75 199 L38 162 L38 88 Z"
      />
      <rect x="75" y="88" width="100" height="74" fill={color} />
    </svg>
  );
}
