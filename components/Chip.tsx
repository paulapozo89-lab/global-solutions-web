import { cn } from "@/lib/utils";

type Props = { children: React.ReactNode; variante?: "cobre" | "navy" | "mist"; className?: string };

export function Chip({ children, variante = "cobre", className }: Props) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3.5 py-1.5 font-display text-sm font-semibold uppercase tracking-wide",
        variante === "cobre" && "bg-gs-copper-tx text-white",
        variante === "navy" && "bg-gs-navy text-white",
        variante === "mist" && "border border-gs-mist/40 bg-gs-navy-2 text-gs-mist",
        className,
      )}
    >
      {children}
    </span>
  );
}
