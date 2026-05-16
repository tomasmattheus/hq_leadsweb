import { cn } from "@/lib/utils";

type HighlighterColor = "yellow" | "indigo";

interface HighlighterProps {
  children: React.ReactNode;
  color?: HighlighterColor;
  className?: string;
}

const colorMap: Record<HighlighterColor, string> = {
  yellow: "var(--brand-acid-yellow)",
  indigo: "var(--brand-indigo)",
};

export function Highlighter({ children, color = "yellow", className }: HighlighterProps) {
  const c = colorMap[color];
  return (
    <span
      className={cn("inline px-[0.1em]", className)}
      style={{
        backgroundImage: `linear-gradient(transparent 60%, ${c} 60%, ${c} 92%, transparent 92%)`,
        backgroundPosition: "0 0.05em",
        backgroundRepeat: "no-repeat",
      }}
    >
      {children}
    </span>
  );
}
