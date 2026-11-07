import type { Sector } from "../tipos";
import { textil } from "./textil";
import { cueroCalzadoMarroquineria } from "./cuero-calzado-marroquineria";
import { electronicaElectrica } from "./electronica-electrica";
import { recubrimientos } from "./recubrimientos";
import { productosEnGeneral } from "./productos-en-general";
import { juguetes } from "./juguetes";
import { bellezaCuidadoPersonal } from "./belleza-cuidado-personal";
import { alimentosBebidas } from "./alimentos-bebidas";
import { bebidasAlcoholicas } from "./bebidas-alcoholicas";
import { eficienciaEnergetica } from "./eficiencia-energetica";
import { esProduccion } from "@/lib/entorno";

export const SECTORES: Sector[] = [
  textil,
  cueroCalzadoMarroquineria,
  electronicaElectrica,
  recubrimientos,
  productosEnGeneral,
  juguetes,
  bellezaCuidadoPersonal,
  alimentosBebidas,
  bebidasAlcoholicas,
  eficienciaEnergetica,
];

/**
 * Sectores que el sitio actual lista pero el catálogo no.
 * PENDIENTE_GS: confirmar si se atienden. Si se confirman, solo llevan certificación.
 */
export const SECTORES_PENDIENTES = [
  {
    slug: "telecomunicaciones",
    nombre: "Telecomunicaciones",
    noms: ["NOM-196-SCFI", "NOM-208-SCFI", "NOM-218-SCFI", "NOM-220-SCFI", "NOM-221-SCFI", "DT-IFT-012", "DT-IFT-017", "Homologación A-B-C"],
    publicado: false,
  },
  {
    slug: "metrologia",
    nombre: "Instrumentación y metrología",
    noms: ["NOM-013-SCFI (manómetros)", "NOM-045-SCFI (manómetros para extintores)"],
    publicado: false,
  },
  {
    slug: "productos-infantiles",
    nombre: "Productos infantiles",
    noms: ["NOM-133/1-SCFI (andaderas)", "NOM-133/2-SCFI (carriolas)", "NOM-133/3-SCFI (corrales y encierros)"],
    publicado: false,
  },
] as const;

/**
 * Sectores visibles en este build.
 * Decisión de Paula (7 nov 2026): se publican todos los sectores aunque GS no haya validado;
 * `validadoGS` sigue registrando el estado y la franja de pendiente solo aparece en preview.
 * Para volver a la regla estricta: filtrar también por `(!esProduccion || s.validadoGS)`.
 */
export const SECTORES_VISIBLES: Sector[] = SECTORES.filter((s) => s.publicado);
void esProduccion;

export function getSector(slug: string): Sector | undefined {
  return SECTORES_VISIBLES.find((s) => s.slug === slug);
}
