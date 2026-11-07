"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const ENLACES = [
  { href: "/certificacion-nom", label: "Certificación NOM" },
  { href: "/diseno-de-etiquetado", label: "Etiquetado" },
  { href: "/impresion-de-etiquetas", label: "Impresión" },
  { href: "/sectores", label: "Sectores" },
  { href: "/nosotros", label: "Nosotros" },
];

export function Navbar() {
  const [abierto, setAbierto] = useState(false);
  const ruta = usePathname();
  const cerrar = () => setAbierto(false);

  useEffect(() => {
    document.body.style.overflow = abierto ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [abierto]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-gs-bg/90 backdrop-blur-md">
      <nav className="gs-container flex h-[72px] items-center justify-between gap-4" aria-label="Principal">
        <Link href="/" className="flex shrink-0 items-center" aria-label="Global Solutions S&L, inicio">
          <Image src="/logo-white.png" alt="Global Solutions S&L" width={160} height={51} priority className="h-10 w-auto" />
        </Link>

        <ul className="hidden items-center gap-7 lg:flex">
          {ENLACES.map((e) => {
            const activo = ruta === e.href || ruta.startsWith(e.href + "/");
            return (
              <li key={e.href}>
                <Link
                  href={e.href}
                  aria-current={activo ? "page" : undefined}
                  className={cn(
                    "font-display text-[0.9375rem] font-semibold uppercase tracking-[0.12em] transition-colors hover:text-white",
                    activo ? "text-gs-copper-lt" : "text-gs-mist",
                  )}
                >
                  {e.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-3">
          <Link
            href="/producto-retenido-en-aduana"
            className="hidden font-display text-sm font-semibold uppercase tracking-wide text-gs-copper-lt hover:text-white md:inline"
          >
            ¿Retenido en aduana?
          </Link>
          <Link
            href="/contacto"
            className="hidden rounded-gs bg-white px-4 py-2.5 font-display text-base font-bold uppercase leading-none tracking-wide text-gs-navy hover:bg-gs-gray-50 sm:inline-flex"
          >
            Diagnóstico gratuito
          </Link>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-gs border border-white/15 text-white lg:hidden"
            aria-expanded={abierto}
            aria-controls="menu-movil"
            aria-label={abierto ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setAbierto((v) => !v)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              {abierto ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      <div
        id="menu-movil"
        hidden={!abierto}
        className="border-t border-white/10 bg-gs-bg lg:hidden"
      >
        <ul className="gs-container flex flex-col py-4">
          {ENLACES.map((e) => (
            <li key={e.href}>
              <Link
                href={e.href}
                onClick={cerrar}
                className="block border-b border-white/5 py-4 font-display text-xl font-semibold uppercase tracking-wide text-white"
              >
                {e.label}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/producto-retenido-en-aduana" onClick={cerrar} className="block border-b border-white/5 py-4 font-display text-xl font-semibold uppercase tracking-wide text-gs-copper-lt">
              ¿Producto retenido en aduana?
            </Link>
          </li>
          <li className="pt-5">
            <Link href="/contacto" onClick={cerrar} className="flex items-center justify-center rounded-gs bg-white px-5 py-4 font-display text-xl font-bold uppercase text-gs-navy">
              Diagnóstico gratuito
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
