/**
 * Cifras públicas. Cada una requiere validación de GS antes de salir en producción.
 * Fuente catálogo p. 3: 30+ NOMs, 10 sectores, 48 h diagnóstico, 3–5 días impresión.
 * Fuente sitio actual: 20+ certificaciones, 6 sectores (contradice al catálogo).
 */
export type Cifra = {
  id: string;
  valor: string;
  etiqueta: string;
  fuente: "catalogo" | "sitio";
  validadoGS: boolean;
};

export const CIFRAS: Cifra[] = [
  { id: "noms", valor: "30+", etiqueta: "NOMs que dominamos", fuente: "catalogo", validadoGS: false },
  { id: "sectores", valor: "10", etiqueta: "Sectores", fuente: "catalogo", validadoGS: false },
  { id: "diagnostico", valor: "48 h", etiqueta: "Diagnóstico", fuente: "catalogo", validadoGS: false },
  { id: "impresion", valor: "3–5", etiqueta: "Días de impresión", fuente: "catalogo", validadoGS: false },
  // PENDIENTE_GS: el sitio actual publica "20+ certificaciones". No está en el catálogo.
  { id: "certificaciones", valor: "20+", etiqueta: "Certificaciones", fuente: "sitio", validadoGS: false },
];
