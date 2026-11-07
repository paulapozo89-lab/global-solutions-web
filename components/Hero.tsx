import Image from "next/image";
import { Sello } from "./Sello";
import { Boton } from "./Boton";
import { Cifras } from "./Cifras";
import { MarqueeSectores } from "./Marquee";
import { EtiquetaAnimada } from "./EtiquetaAnimada";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gs-bg">
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/img/portada-edificio.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="gs-kenburns object-cover object-top opacity-40"
        />
      </div>
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-gs-bg/30 via-gs-bg/85 to-gs-bg" />
      <div aria-hidden="true" className="absolute -inset-[112px] gs-drift">
        <Sello opacidad={0.06} />
      </div>

      <div className="gs-container relative grid items-center gap-12 pb-16 pt-20 md:pb-20 md:pt-28 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p className="gs-anim gs-eyebrow text-gs-copper-lt" style={{ "--d": "0ms" } as React.CSSProperties}>
            Certificación · Etiquetado · Impresión · NOM
          </p>
          <h1 className="gs-anim mt-4 max-w-4xl text-[2.75rem] leading-[0.98] md:text-7xl" style={{ "--d": "120ms" } as React.CSSProperties}>
            Tu producto,{" "}
            <span className="relative inline-block px-2 text-white">
              <span aria-hidden="true" className="gs-wipe absolute inset-0 -z-10 bg-gs-copper" />
              listo
            </span>{" "}
            para el mercado mexicano.
          </h1>
          <p className="gs-anim mt-6 max-w-2xl text-lg leading-relaxed text-gs-mist md:text-xl" style={{ "--d": "260ms" } as React.CSSProperties}>
            Certificación NOM, diseño de etiquetado e impresión de etiquetas en un solo proceso. Un solo socio, cero coordinación con múltiples proveedores.
          </p>
          <div className="gs-anim mt-9 flex flex-col gap-3 sm:flex-row" style={{ "--d": "400ms" } as React.CSSProperties}>
            <Boton href="/contacto" className="gs-pulse-ring relative">
              Solicita tu diagnóstico gratuito
            </Boton>
            <Boton href="/sectores" variante="borde">
              Ver sectores
            </Boton>
          </div>
        </div>

        <div className="gs-anim hidden lg:block" style={{ "--d": "500ms" } as React.CSSProperties}>
          <EtiquetaAnimada />
        </div>
      </div>

      <div className="gs-anim relative" style={{ "--d": "700ms" } as React.CSSProperties}>
        <MarqueeSectores />
      </div>

      <div className="gs-container relative py-12">
        <div className="gs-anim" style={{ "--d": "850ms" } as React.CSSProperties}>
          <Cifras ids={["noms", "sectores", "diagnostico", "impresion"]} />
        </div>
      </div>
    </section>
  );
}
