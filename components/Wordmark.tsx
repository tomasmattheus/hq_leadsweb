import { cn } from "@/lib/utils";

type WordmarkSize = "sm" | "md" | "lg";
type WordmarkColor = "black" | "cream" | "white";

interface WordmarkProps {
  size?: WordmarkSize;
  color?: WordmarkColor;
  className?: string;
}

const sizeMap: Record<WordmarkSize, string> = {
  sm: "text-xl tracking-[-0.02em]",
  md: "text-3xl md:text-4xl tracking-[-0.02em]",
  lg: "text-5xl md:text-7xl tracking-[-0.03em]",
};

const colorMap: Record<WordmarkColor, string> = {
  black: "text-ink",
  cream: "text-cream",
  white: "text-off-white",
};

export function Wordmark({ size = "md", color = "black", className }: WordmarkProps) {
  return (
    <span
      className={cn(
        "inline-flex items-baseline font-display font-bold lowercase leading-none select-none",
        sizeMap[size],
        colorMap[color],
        className
      )}
      aria-label="hq.leads"
    >
      hq<span className="text-indigo px-[0.02em]">.</span>leads
    </span>
  );
}
