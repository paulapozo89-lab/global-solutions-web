import Link from "next/link";
import Image from "next/image";
import type { Sector } from "@/content/tipos";
import { Sello } from "./Sello";

export function SectorCard({ sector }: { sector: Sector }) {
  return (
    <Link
      href={`/sectores/${sector.slug}`}
      className="group relative flex min-h-[220px] flex-col justify-end overflow-hidden rounded-gs-lg bg-gs-navy p-5 text-white shadow-gs-card transition-transform hover:-translate-y-1 focus-visible:outline-offset-4"
    >
      {sector.foto ? (
        <Image
          src={sector.foto}
          alt=""
          fill
          sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
          className="object-cover opacity-60 transition-opacity group-hover:opacity-75"
        />
      ) : (
        <Sello opacidad={0.12} />
      )}
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-gs-navy via-gs-navy/70 to-gs-navy/10" />
      <div className="relative">
        <span className="font-display text-4xl font-bold leading-none text-white/60">{sector.numero}</span>
        <h3 className="mt-1 text-xl xl:text-2xl">{sector.nombre}</h3>
        <span className="mt-2 inline-block rounded-full bg-white px-3 py-1 font-display text-sm font-bold tracking-wide text-gs-navy">
          {sector.nomPrincipal}
        </span>
      </div>
    </Link>
  );
}
