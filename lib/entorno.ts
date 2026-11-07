/**
 * Producción = deploy de producción en Vercel o GS_ENTORNO=produccion.
 * En producción se ocultan los avisos PENDIENTE_GS y las franjas de "pendiente de validación".
 * (Desde el 7 nov 2026 los sectores y cifras sí se publican sin validar, por decisión de Paula.)
 */
/** Mostrar en pantalla los avisos PENDIENTE_GS y franjas de validación. Apagado por decisión de Paula (7 nov 2026). */
export const mostrarPendientes = process.env.GS_MOSTRAR_PENDIENTES === "1";

export const esProduccion =
  process.env.VERCEL_ENV === "production" || process.env.GS_ENTORNO === "produccion";
