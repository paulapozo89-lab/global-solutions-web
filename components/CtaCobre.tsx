import { Sello } from "./Sello";
import { Boton } from "./Boton";
import { EnlaceWhatsApp, IconoWhatsApp } from "./Enlaces";
import { CONTACTO, MENSAJES_WA } from "@/content/contacto";

type Props = {
  eyebrow?: string;
  titulo: string;
  texto?: string;
  ctaLabel?: string;
  ctaHref?: string;
  mensajeWa?: keyof typeof MENSAJES_WA;
  ubicacion: string;
};

/** Bloque de cierre en cobre, como las páginas de cierre del catálogo. */
export function CtaCobre({ eyebrow, titulo, texto, ctaLabel = "Solicitar diagnóstico gratuito", ctaHref = "/contacto", mensajeWa = "general", ubicacion }: Props) {
  return (
    <section className="relative overflow-hidden bg-gs-copper text-white">
      <Sello opacidad={0.08} />
      <div className="gs-container relative py-16 text-center md:py-20">
        {eyebrow && <p className="gs-eyebrow text-gs-bg">{eyebrow}</p>}
        <h2 className="mx-auto mt-3 max-w-3xl text-3xl md:text-5xl">{titulo}</h2>
        {texto && <p className="mx-auto mt-4 max-w-2xl text-lg font-medium text-gs-bg">{texto}</p>}
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Boton href={ctaHref} variante="blanco">
            {ctaLabel}
          </Boton>
          <EnlaceWhatsApp
            ubicacion={ubicacion}
            mensaje={mensajeWa}
            className="inline-flex items-center justify-center gap-2 rounded-gs border-2 border-white/60 px-6 py-3.5 font-display text-[1.1875rem] font-bold uppercase leading-none tracking-wide text-white hover:border-white"
          >
            <IconoWhatsApp /> {CONTACTO.telefonoVisible}
          </EnlaceWhatsApp>
        </div>
      </div>
    </section>
  );
}
