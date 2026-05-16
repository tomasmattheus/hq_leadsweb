import { cn } from "@/lib/utils";

type ArrowDirection = "left" | "right" | "down" | "up" | "none";

interface MarkerAnnotationProps {
  text: string;
  arrow?: ArrowDirection;
  position?: "absolute" | "relative" | "static";
  rotation?: number;
  className?: string;
  style?: React.CSSProperties;
}

const arrowChar: Record<ArrowDirection, string> = {
  left: "←",
  right: "→",
  down: "↓",
  up: "↑",
  none: "",
};

export function MarkerAnnotation({
  text,
  arrow = "none",
  position = "relative",
  rotation = -4,
  className,
  style,
}: MarkerAnnotationProps) {
  const ar = arrowChar[arrow];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 text-blood font-serif italic text-base md:text-lg",
        className
      )}
      style={{
        position,
        transform: `rotate(${rotation}deg)`,
        textShadow: "0.5px 0 0 currentColor",
        ...style,
      }}
    >
      {(arrow === "left" || arrow === "up") && <span aria-hidden>{ar}</span>}
      <span>{text}</span>
      {(arrow === "right" || arrow === "down") && <span aria-hidden>{ar}</span>}
    </span>
  );
}
