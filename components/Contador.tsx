"use client";

import { useEffect, useRef, useState } from "react";

/** Cuenta de 0 al valor cuando entra en pantalla. Respeta prefers-reduced-motion. */
export function Contador({ valor, className }: { valor: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [texto, setTexto] = useState(valor);
  const m = /^(\D*)(\d+)(.*)$/.exec(valor);

  useEffect(() => {
    if (!m || !ref.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const [, pre, num, post] = m;
    const fin = parseInt(num, 10);
    const el = ref.current;
    let raf = 0;
    const obs = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        obs.disconnect();
        const t0 = performance.now();
        const dur = 1400;
        const paso = (t: number) => {
          const p = Math.min((t - t0) / dur, 1);
          const e = 1 - Math.pow(1 - p, 3);
          setTexto(`${pre}${Math.round(e * fin)}${post}`);
          if (p < 1) raf = requestAnimationFrame(paso);
        };
        setTexto(`${pre}0${post}`);
        raf = requestAnimationFrame(paso);
      },
      { threshold: 0.4 },
    );
    obs.observe(el);
    return () => {
      obs.disconnect();
      cancelAnimationFrame(raf);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [valor]);

  return (
    <span ref={ref} className={className}>
      {texto}
    </span>
  );
}
