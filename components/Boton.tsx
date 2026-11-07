import Link from "next/link";
import { cn } from "@/lib/utils";

type Props = {
  href: string;
  children: React.ReactNode;
  variante?: "cobre" | "blanco" | "borde" | "borde-claro";
  className?: string;
  externo?: boolean;
  onClick?: () => void;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-gs px-6 py-3.5 font-display text-[1.1875rem] font-bold uppercase leading-none tracking-wide transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-offset-4";

const variantes = {
  cobre: "bg-gs-copper text-white shadow-gs-copper hover:bg-gs-copper-hover",
  blanco: "bg-white text-gs-navy hover:bg-gs-gray-50",
  borde: "border-2 border-white/40 text-white hover:border-white",
  "borde-claro": "border-2 border-gs-navy text-gs-navy hover:bg-gs-navy hover:text-white",
};

export function Boton({ href, children, variante = "cobre", className, externo, onClick }: Props) {
  const clases = cn(base, variantes[variante], className);
  if (externo) {
    return (
      <a href={href} className={clases} target="_blank" rel="noopener noreferrer" onClick={onClick}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={clases} onClick={onClick}>
      {children}
    </Link>
  );
}
