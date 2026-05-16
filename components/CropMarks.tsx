import { cn } from "@/lib/utils";

type CropColorToken = "light-gray" | "ink" | "cream" | "white";
export type CropColor = CropColorToken | (string & {});

interface CropMarksProps {
  color?: CropColor;
  margin?: number;
  size?: number;
  thickness?: number;
  className?: string;
}

const colorMap: Record<CropColorToken, string> = {
  "light-gray": "var(--brand-light-gray)",
  ink: "var(--brand-black-ink)",
  cream: "var(--brand-cream)",
  white: "#FFFFFF",
};

function resolveColor(c: CropColor): string {
  if (c in colorMap) return colorMap[c as CropColorToken];
  return c;
}

export function CropMarks({
  color = "light-gray",
  margin = 16,
  size = 18,
  thickness = 1,
  className,
}: CropMarksProps) {
  const c = resolveColor(color);

  const corners = [
    { top: margin, left: margin, borders: { top: true, left: true } },
    { top: margin, right: margin, borders: { top: true, right: true } },
    { bottom: margin, left: margin, borders: { bottom: true, left: true } },
    { bottom: margin, right: margin, borders: { bottom: true, right: true } },
  ];

  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 z-0", className)}
    >
      {corners.map((corner, i) => (
        <span
          key={i}
          style={{
            position: "absolute",
            width: size,
            height: size,
            top: corner.top,
            bottom: corner.bottom,
            left: corner.left,
            right: corner.right,
            borderTop: corner.borders.top ? `${thickness}px solid ${c}` : undefined,
            borderBottom: corner.borders.bottom ? `${thickness}px solid ${c}` : undefined,
            borderLeft: corner.borders.left ? `${thickness}px solid ${c}` : undefined,
            borderRight: corner.borders.right ? `${thickness}px solid ${c}` : undefined,
          }}
        />
      ))}
    </div>
  );
}
