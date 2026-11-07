import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getSector, SECTORES_VISIBLES } from "@/content/sectores";
import { Sello } from "@/components/Sello";
import { Chip } from "@/components/Chip";
import { Rombo } from "@/components/Rombo";
import { Migas } from "@/components/Migas";
import { EtiquetaEjemplo } from "@/components/EtiquetaEjemplo";
import { FranjaPendiente } from "@/components/FranjaPendiente";
import { Proceso } from "@/components/Proceso";
import { CtaCobre } from "@/components/CtaCobre";
import { PROCESO_ETIQUETADO } from "@/content/servicios";
import { JsonLd, schemaServicio } from "@/lib/schema";

export const dynamicParams = false;

export function generateStaticParams() {
  return SECTORES_VISIBLES.map((s) => ({ slug: s.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const s = getSector(slug);
  if (!s) return {};
  const title = `Etiquetado NOM para ${s.nombre.toLowerCase()} (${s.nomPrincipal})`;
  return {
    title,
    description: s.descripcion,
    alternates: { canonical: `/sectores/${s.slug}` },
    openGraph: { title, description: s.descripcion, url: `/sectores/${s.slug}` },
  };
}

const NOMBRE_SERVICIO: Record<string, string> = {
  certificacion: "Certificación NOM",
  etiquetado: "Diseño de etiquetado",
  impresion: "Impresión de etiquetas",
};
const RUTA_SERVICIO: Record<string, string> = {
  certificacion: "/certificacion-nom",
  etiquetado: "/diseno-de-etiquetado",
  impresion: "/impresion-de-etiquetas",
};

export default async function PaginaSector({ params }: Props) {
  const { slug } = await params;
  const s = getSector(slug);
  if (!s) notFound();

  const otros = SECTORES_VISIBLES.filter((o) => o.slug !== s.slug);

  return (
    <>
      {!s.validadoGS && <FranjaPendiente texto={`Sector pendiente de validación normativa por GS (${s.nomPrincipal})`} />}

      {/* Encabezado de sector: foto con velo navy, número grande, nombre, chip NOM */}
      <section className="relative overflow-hidden bg-gs-navy">
        {s.foto ? (
          <Image src={s.foto} alt={s.fotoAlt} fill priority sizes="100vw" className="object-cover" />
        ) : (
          <Sello opacidad={0.12} />
        )}
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-gs-navy/20 via-gs-navy/70 to-gs-navy" />
        <div className="gs-container relative flex min-h-[460px] flex-col justify-end pb-12 pt-10 md:min-h-[560px]">
          <Migas items={[{ nombre: "Sectores", href: "/sectores" }, { nombre: s.nombre, href: `/sectores/${s.slug}` }]} />
          <div className="mt-8 flex flex-wrap items-end gap-x-5 gap-y-2">
            <span className="font-display text-[5.5rem] font-bold leading-[0.8] text-white md:text-[8rem]">{s.numero}</span>
            <div>
              <h1 className="text-4xl md:text-6xl">{s.nombre}</h1>
              <span className="mt-3 inline-block rounded-full bg-white px-4 py-1.5 font-display text-base font-bold tracking-wide text-gs-navy">
                {s.nomPrincipal}
              </span>
            </div>
          </div>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white md:text-xl">{s.descripcion}</p>
        </div>
      </section>

      {/* Contenido técnico en blanco */}
      <section className="gs-light gs-section">
        <div className="gs-container">
          <div className="flex items-center gap-4">
            <Rombo numero={s.numero} />
            <h2 className="text-2xl md:text-3xl">Qué etiquetamos</h2>
          </div>
          <ul className="mt-6 flex flex-wrap gap-2.5">
            {s.queEtiquetamos.map((q) => (
              <li key={q}>
                <Chip>{q}</Chip>
              </li>
            ))}
          </ul>

          <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="rounded-gs-xl bg-gs-gray-50 p-7 md:p-9">
              <h2 className="text-2xl text-gs-ink-soft md:text-3xl">Campos obligatorios de la etiqueta</h2>
              <ul className="mt-5 space-y-2.5 text-lg text-gs-ink">
                {s.camposObligatorios.map((c) => (
                  <li key={c} className="flex gap-3">
                    <span aria-hidden="true" className="mt-[0.7rem] h-1.5 w-1.5 shrink-0 rounded-sm bg-gs-copper" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl text-gs-navy md:text-3xl">Ejemplo de etiqueta</h2>
              <div className="mt-5">
                <EtiquetaEjemplo sector={s} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impresión recomendada (navy) + error común (cobre) */}
      <section className="relative overflow-hidden bg-gs-navy">
        <Sello />
        <div className="gs-container relative gs-section">
          <h2 className="text-center text-3xl md:text-4xl">Impresión recomendada</h2>
          <dl className="mx-auto mt-8 grid max-w-4xl grid-cols-2 gap-6 text-center md:grid-cols-4">
            <div>
              <dt className="gs-eyebrow text-gs-mist">Material</dt>
              <dd className="mt-1 text-lg font-semibold">{s.impresionRecomendada.material}</dd>
            </div>
            {s.impresionRecomendada.adhesivo && (
              <div>
                <dt className="gs-eyebrow text-gs-mist">Adhesivo</dt>
                <dd className="mt-1 text-lg font-semibold">{s.impresionRecomendada.adhesivo}</dd>
              </div>
            )}
            <div>
              <dt className="gs-eyebrow text-gs-mist">Color</dt>
              <dd className="mt-1 text-lg font-semibold">{s.impresionRecomendada.color}</dd>
            </div>
            <div>
              <dt className="gs-eyebrow text-gs-mist">Formato</dt>
              <dd className="mt-1 text-lg font-semibold">{s.impresionRecomendada.formato}</dd>
            </div>
          </dl>

          <div className="mx-auto mt-10 flex max-w-3xl gap-4 rounded-gs-lg bg-gs-copper p-6 md:p-8">
            <span aria-hidden="true" className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white font-display text-3xl font-bold text-gs-navy">
              !
            </span>
            <div>
              <h3 className="text-2xl">Error común que evitamos</h3>
              <p className="mt-1 text-lg font-medium text-gs-bg">{s.errorComun}</p>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {s.servicios.map((sv) => (
              <Link key={sv} href={RUTA_SERVICIO[sv]} className="rounded-full border border-gs-mist/40 px-4 py-2 font-display text-base font-semibold uppercase tracking-wide text-gs-mist hover:border-white hover:text-white">
                {NOMBRE_SERVICIO[sv]}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="gs-light gs-section">
        <div className="gs-container">
          <Proceso pasos={PROCESO_ETIQUETADO} claro />
        </div>
      </section>

      <CtaCobre
        eyebrow="Cotiza tu impresión"
        titulo={`Imprime las etiquetas de ${s.nombre.toLowerCase()} con nosotros`}
        texto="Etiquetas NOM listas para anaquel y aduana. Envíanos tu producto o tu arte y cotizamos la impresión hoy mismo."
        ctaLabel="Cotizar la impresión"
        ctaHref="/impresion-de-etiquetas#cotizar"
        mensajeWa="impresion"
        ubicacion={`sector-${s.slug}`}
      />

      {otros.length > 0 && (
        <section className="gs-section bg-gs-bg">
          <div className="gs-container">
            <p className="gs-eyebrow text-gs-copper-lt">Otros sectores</p>
            <ul className="mt-5 flex flex-wrap gap-2.5">
              {otros.map((o) => (
                <li key={o.slug}>
                  <Link href={`/sectores/${o.slug}`} className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 font-display text-base font-semibold uppercase tracking-wide text-white hover:border-gs-copper">
                    <span className="text-gs-copper-lt">{o.numero}</span> {o.nombre}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <JsonLd data={schemaServicio(`Etiquetado NOM para ${s.nombre}`, s.descripcion, `/sectores/${s.slug}`)} />
    </>
  );
}
