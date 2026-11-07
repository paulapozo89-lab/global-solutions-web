"use client";

import { useEffect, useState } from "react";
import { SECTORES_VISIBLES } from "@/content/sectores";

/**
 * Etiqueta de ejemplo que va rotando por los sectores del catálogo.
 * HTML/CSS, representación ilustrativa. Se detiene con prefers-reduced-motion.
 */
export function EtiquetaAnimada() {
  const sectores = SECTORES_VISIBLES.filter((s) => s.slug !== "eficiencia-energetica");
  const [i, setI] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (sectores.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setI((v) => (v + 1) % sectores.length);
        setVisible(true);
      }, 350);
    }, 3800);
    return () => clearInterval(t);
  }, [sectores.length]);

  const s = sectores[i];
  if (!s) return null;
  const e = s.ejemploEtiqueta;

  return (
    <div className="relative mx-auto max-w-sm" aria-live="polite">
      <div aria-hidden="true" className="absolute -inset-6 rounded-[32px] bg-gs-copper/20 blur-2xl" />
      <div
        className="relative rotate-[-2deg] rounded-md border border-gs-gray-200 bg-white p-6 text-gs-ink shadow-[0_30px_80px_rgba(0,0,0,0.5)] transition-all duration-300"
        style={{ opacity: visible ? 1 : 0, transform: `rotate(-2deg) translateY(${visible ? 0 : 8}px)` }}
      >
        <div className="flex items-start justify-between gap-4 border-b border-gs-gray-200 pb-3">
          <div>
            <p className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-gs-copper-tx">
              {s.numero} · {s.nombre}
            </p>
            <p className="mt-1 font-display text-lg font-bold uppercase tracking-wide">{e.titulo}</p>
          </div>
          <span className="font-display text-2xl font-bold leading-none tracking-[0.1em] border-b-2 border-t-2 border-gs-ink px-0.5">NOM</span>
        </div>
        <dl className="mt-3 space-y-1.5 text-sm">
          {e.filas.map(([k, v]) => (
            <div key={k} className="flex gap-2">
              <dt className="shrink-0 font-semibold">{k}:</dt>
              <dd className="text-gs-ink-soft">{v}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-3 border-t border-gs-gray-200 pt-3 text-xs text-gs-copper-tx">{e.pie}</p>
        <div className="mt-3 flex items-center justify-between">
          <span className="rounded-full bg-gs-navy px-3 py-1 font-display text-xs font-bold tracking-wide text-white">{s.nomPrincipal}</span>
          <span className="font-display text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-gs-ink-soft">Representación ilustrativa</span>
        </div>
      </div>
      <div className="mt-5 flex justify-center gap-1.5" aria-hidden="true">
        {sectores.map((x, k) => (
          <span key={x.slug} className={`h-1.5 rounded-full transition-all ${k === i ? "w-6 bg-gs-copper" : "w-1.5 bg-white/30"}`} />
        ))}
      </div>
    </div>
  );
}
