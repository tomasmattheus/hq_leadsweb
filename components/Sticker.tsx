import { cn } from "@/lib/utils";

type StickerColor = "red" | "yellow" | "black" | "cream";
type StickerSize = "sm" | "md" | "lg";

interface StickerProps {
  color?: StickerColor;
  text: string;
  rotation?: number;
  size?: StickerSize;
  className?: string;
}

const colorMap: Record<StickerColor, string> = {
  red: "bg-blood text-cream border-ink",
  yellow: "bg-acid text-ink border-ink",
  black: "bg-ink text-cream border-ink",
  cream: "bg-cream text-ink border-ink",
};

const sizeMap: Record<StickerSize, string> = {
  sm: "text-[10px] px-2 py-1",
  md: "text-xs px-3 py-1.5",
  lg: "text-sm px-4 py-2",
};

export function Sticker({
  color = "yellow",
  text,
  rotation = -3,
  size = "md",
  className,
}: StickerProps) {
  return (
    <span
      className={cn(
        "sticker inline-flex items-center justify-center font-display font-black uppercase tracking-wider whitespace-nowrap",
        colorMap[color],
        sizeMap[size],
        className
      )}
      style={{
        transform: `rotate(${rotation}deg)`,
      }}
    >
      {text}
    </span>
  );
}
