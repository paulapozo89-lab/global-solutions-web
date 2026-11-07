import { Boton } from "@/components/Boton";
import { Sello } from "@/components/Sello";

export default function NoEncontrado() {
  return (
    <section className="relative overflow-hidden bg-gs-navy">
      <Sello />
      <div className="gs-container relative py-28 text-center">
        <p className="gs-eyebrow text-gs-copper-lt">Error 404</p>
        <h1 className="mt-3 text-4xl md:text-6xl">Esta página no existe</h1>
        <p className="mx-auto mt-4 max-w-xl text-lg text-gs-mist">Puede que el enlace haya cambiado. Vuelve al inicio o revisa el catálogo por sector.</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Boton href="/">Ir al inicio</Boton>
          <Boton href="/sectores" variante="borde">
            Ver sectores
          </Boton>
        </div>
      </div>
    </section>
  );
}
