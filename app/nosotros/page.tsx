import type { Metadata } from "next";
import Image from "next/image";
import { Encabezado } from "@/components/Encabezado";
import { Migas } from "@/components/Migas";
import { CtaCobre } from "@/components/CtaCobre";
import { NOSOTROS } from "@/content/nosotros";
import { PORQUE } from "@/content/servicios";

export const metadata: Metadata = {
  title: "Nosotros: experiencia desde ambos lados del proceso normativo",
  description:
    "Global Solutions S&L fue creada por Abigail Martínez Hernández, con trayectoria en empresas de gestoría y en organismos de certificación. Certificación, etiquetado e impresión bajo un mismo equipo.",
  alternates: { canonical: "/nosotros" },
  openGraph: { title: "Nosotros", url: "/nosotros" },
};

export default function Nosotros() {
  return (
    <>
      <Encabezado eyebrow={NOSOTROS.eyebrow} titulo={NOSOTROS.titulo}>
        <div className="mt-6">
          <Migas items={[{ nombre: "Nosotros", href: "/nosotros" }]} />
        </div>
      </Encabezado>

      <section className="gs-light gs-section">
        <div className="gs-container grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:items-start">
          <figure className="overflow-hidden rounded-gs-xl border border-gs-gray-100 bg-white shadow-gs-card">
            <Image
              src={NOSOTROS.fotoPrincipal.src}
              alt={NOSOTROS.fotoPrincipal.alt}
              width={1500}
              height={1400}
              sizes="(min-width:1024px) 480px, 100vw"
              className="h-auto w-full"
            />
            <figcaption className="border-t border-gs-gray-100 px-5 py-3 font-display text-sm font-semibold uppercase tracking-[0.12em] text-gs-ink-soft">
              {NOSOTROS.fotoPrincipal.pie}
            </figcaption>
          </figure>
          <div className="space-y-5 text-lg leading-relaxed text-gs-ink">
            <p>
              <strong className="font-display text-xl font-bold uppercase text-gs-navy">{NOSOTROS.fundadora}</strong>, {NOSOTROS.parrafos[0]}
            </p>
            {NOSOTROS.parrafos.slice(1).map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gs-navy gs-section">
        <div className="gs-container">
          <p className="gs-eyebrow text-gs-copper-lt">Cómo trabajamos</p>
          <h2 className="mt-3 max-w-3xl text-3xl md:text-4xl">No solo tramitamos. Resolvemos de principio a fin.</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {PORQUE.map((p) => (
              <div key={p.titulo} className="rounded-gs-lg border border-white/10 bg-gs-navy-2 p-6">
                <h3 className="text-xl">{p.titulo}</h3>
                <p className="mt-2 text-[0.9375rem] text-gs-mist">{p.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaCobre eyebrow="Hablemos de tu producto" titulo="Un solo punto de contacto para todo el proceso normativo." ubicacion="nosotros-cta" mensajeWa="diagnostico" />
    </>
  );
}
