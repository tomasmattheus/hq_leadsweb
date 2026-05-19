import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  tag?: string;
  headline: string;
  italicWord?: string;
  subtitle?: string;
  meta?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  tag,
  headline,
  italicWord,
  subtitle,
  meta,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <header
      className={cn(
        "relative w-full",
        align === "center" ? "text-center" : "text-left",
        className
      )}
    >
      <div className="flex items-start justify-between gap-6 mb-6 flex-wrap">
        {tag && (
          <span className="mono text-[11px] tracking-widest text-mid-gray uppercase">
            {tag}
          </span>
        )}
        {meta && (
          <span className="mono text-[11px] tracking-widest text-mid-gray uppercase">
            {meta}
          </span>
        )}
      </div>

      <h2 className="display leading-[0.95] text-ink break-words text-[clamp(2.25rem,6.5vw,5rem)]">
        {headline}
        {italicWord && (
          <>
            {" "}
            <span className="serif-italic font-normal normal-case">{italicWord}</span>
          </>
        )}
      </h2>

      {subtitle && (
        <p className="font-serif italic text-xl md:text-2xl text-ink/80 mt-6 max-w-3xl">
          {subtitle}
        </p>
      )}
    </header>
  );
}
