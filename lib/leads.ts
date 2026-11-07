/**
 * Modo de envío de los formularios.
 * "whatsapp": el botón arma el mensaje y abre WhatsApp (sin correo). Decisión de Paula, 7 nov 2026, hasta tener Resend.
 * "correo": POST a /api/leads y envío con Resend. Activar con NEXT_PUBLIC_MODO_ENVIO=correo.
 */
export const MODO_ENVIO: "whatsapp" | "correo" = process.env.NEXT_PUBLIC_MODO_ENVIO === "correo" ? "correo" : "whatsapp";

/** Esquema compartido cliente/servidor de los dos formularios. */
export const SECTORES_FORM = [
  "Eficiencia Energética",
  "Electrónica / Eléctrica",
  "Telecomunicaciones",
  "Información Comercial",
  "Productos Infantiles",
  "Instrumentos de Medición",
  "Otro / No estoy seguro",
] as const;

export const SITUACIONES_FORM = [
  "Producto retenido en aduana (URGENTE)",
  "Necesito certificar un producto nuevo",
  "Necesito renovar o modificar un certificado",
  "Necesito diseño de etiquetado",
  "Necesito impresión de etiquetas",
  "No sé qué NOM aplica",
  "Servicio integral",
] as const;

export const MATERIALES_FORM = ["Papel térmico (TT)", "Polipropileno", "Poliéster", "No estoy seguro"] as const;
export const COLORES_FORM = ["Blanco", "Gris", "Transparente", "No estoy seguro"] as const;
export const FORMATOS_FORM = [
  "Etiqueta de empaque",
  "Etiqueta de producto",
  "Etiqueta de botella",
  "Etiqueta de bote",
  "Colgante o cosida",
  "Envolvente o sleeve",
  "Frontal + nutrimental",
  "Etiqueta de aparato",
  "Otro / No estoy seguro",
] as const;

export type LeadDiagnostico = {
  tipo: "diagnostico";
  nombre: string;
  empresa: string;
  email: string;
  telefono: string;
  sector: string;
  situacion: string;
  producto: string;
  aceptaAviso: boolean;
  website?: string; // honeypot
};

export type LeadCotizacion = {
  tipo: "cotizacion";
  nombre: string;
  empresa: string;
  email: string;
  telefono: string;
  material: string;
  color: string;
  formato: string;
  cantidad: string;
  comentarios: string;
  aceptaAviso: boolean;
  website?: string; // honeypot
};

export type Lead = LeadDiagnostico | LeadCotizacion;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function texto(v: unknown, max: number, requerido = false): string | null {
  if (typeof v !== "string") return requerido ? null : "";
  const t = v.trim();
  if (requerido && t.length === 0) return null;
  if (t.length > max) return null;
  return t;
}

function opcion(v: unknown, lista: readonly string[], requerido = false): string | null {
  if (typeof v !== "string" || v === "") return requerido ? null : "";
  return lista.includes(v) ? v : null;
}

/** Valida del lado del servidor. Devuelve el lead limpio o un error legible. */
export function validarLead(body: unknown): { ok: true; lead: Lead } | { ok: false; error: string } {
  if (!body || typeof body !== "object") return { ok: false, error: "Solicitud inválida." };
  const b = body as Record<string, unknown>;

  if (typeof b.website === "string" && b.website.trim() !== "") {
    // Honeypot lleno: se finge éxito sin enviar.
    return { ok: false, error: "spam" };
  }
  if (b.aceptaAviso !== true) return { ok: false, error: "Debes aceptar el aviso de privacidad." };

  const nombre = texto(b.nombre, 120, true);
  const empresa = texto(b.empresa, 160, true);
  const email = texto(b.email, 160, true);
  const telefono = texto(b.telefono, 40);
  if (!nombre || !empresa || !email || telefono === null) return { ok: false, error: "Revisa los campos obligatorios." };
  if (!EMAIL_RE.test(email)) return { ok: false, error: "El correo no parece válido." };

  if (b.tipo === "diagnostico") {
    const sector = opcion(b.sector, SECTORES_FORM);
    const situacion = opcion(b.situacion, SITUACIONES_FORM);
    const producto = texto(b.producto, 2000);
    if (sector === null || situacion === null || producto === null) return { ok: false, error: "Revisa las opciones seleccionadas." };
    return { ok: true, lead: { tipo: "diagnostico", nombre, empresa, email, telefono, sector, situacion, producto, aceptaAviso: true } };
  }

  if (b.tipo === "cotizacion") {
    const material = opcion(b.material, MATERIALES_FORM);
    const color = opcion(b.color, COLORES_FORM);
    const formato = opcion(b.formato, FORMATOS_FORM);
    const cantidad = texto(b.cantidad, 80);
    const comentarios = texto(b.comentarios, 2000);
    if (material === null || color === null || formato === null || cantidad === null || comentarios === null) {
      return { ok: false, error: "Revisa las opciones seleccionadas." };
    }
    return { ok: true, lead: { tipo: "cotizacion", nombre, empresa, email, telefono, material, color, formato, cantidad, comentarios, aceptaAviso: true } };
  }

  return { ok: false, error: "Tipo de formulario desconocido." };
}
