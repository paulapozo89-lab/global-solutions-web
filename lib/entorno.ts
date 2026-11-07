/**
 * Producción = deploy de producción en Vercel o GS_ENTORNO=produccion.
 * En producción se excluye todo lo que GS no haya validado (sectores, cifras, PENDIENTE_GS).
 */
export const esProduccion =
  process.env.VERCEL_ENV === "production" || process.env.GS_ENTORNO === "produccion";
