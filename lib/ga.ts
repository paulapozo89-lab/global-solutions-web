export const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

type Evento =
  | "form_diagnostico_enviado"
  | "form_cotizacion_enviado"
  | "click_whatsapp"
  | "click_telefono"
  | "click_email";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/** Dispara un evento GA4. Nunca manda datos personales. */
export function trackEvent(nombre: Evento, params: Record<string, string> = {}) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", nombre, params);
}
