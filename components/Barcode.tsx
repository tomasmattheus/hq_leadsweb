import { cn } from "@/lib/utils";

export type BarcodeProps = {
  code?: string;
  label?: string;
  className?: string;
  color?: "ink" | "cream";
};

// Decorative barcode (not a real scannable EAN). Generated pseudo-randomly
// from the `code` string so the same input always renders the same pattern.
export function Barcode({
  code = "HQL2026001",
  label,
  className,
  color = "ink",
}: BarcodeProps) {
  const bars = generateBars(code);
  const fill = color === "ink" ? "var(--brand-black-ink)" : "var(--brand-cream)";
  const textColor = color === "ink" ? "text-ink" : "text-cream";

  return (
    <div className={cn("inline-flex flex-col items-start gap-1", className)}>
      <svg
        viewBox={`0 0 ${bars.length * 2} 48`}
        preserveAspectRatio="none"
        aria-hidden
        className="h-10 w-32"
      >
        {bars.map((b, i) => (
          <rect
            key={i}
            x={i * 2}
            y={0}
            width={b.width}
            height={48}
            fill={fill}
          />
        ))}
      </svg>
      <div className={cn("flex w-32 items-center justify-between mono text-[9px] tracking-[0.18em]", textColor)}>
        <span>{code}</span>
        {label && <span className="opacity-70">{label}</span>}
      </div>
    </div>
  );
}

function generateBars(seed: string): { width: number }[] {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0;
  const bars: { width: number }[] = [];
  for (let i = 0; i < 48; i++) {
    h = (h * 1103515245 + 12345) >>> 0;
    const r = (h % 100) / 100;
    bars.push({ width: r < 0.55 ? 1.4 : 0.6 });
  }
  return bars;
}
