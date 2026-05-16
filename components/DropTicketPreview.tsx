"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export type DropTicketPreviewProps = {
  sku: string;
  title: string;
  italicWord?: string;
  format: string;
  status: "DISPONIBLE" | "PRÓXIMAMENTE" | "ARCHIVADO";
  href?: string;
  index?: number;
};

export function DropTicketPreview({
  sku,
  title,
  italicWord,
  format,
  status,
  href = "/drops",
  index = 0,
}: DropTicketPreviewProps) {
  let renderedTitle: React.ReactNode = title;
  if (italicWord && title.includes(italicWord)) {
    const [before, after] = title.split(italicWord);
    renderedTitle = (
      <>
        {before}
        <span className="font-serif italic font-normal">{italicWord}</span>
        {after}
      </>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className="group relative isolate flex h-full flex-col overflow-hidden bg-cream text-ink"
    >
      <Link href={href} aria-label={`${sku} ${title}`} className="absolute inset-0 z-10" />

      {/* Top perf strip */}
      <div className="border-b border-dashed border-ink/40 bg-cream px-5 py-3 font-mono text-[10px] uppercase tracking-[0.18em] text-ink/70">
        <div className="flex items-center justify-between">
          <span>{sku}</span>
          <span>HQ.LEADS · DROP</span>
        </div>
      </div>

      <div className="flex-1 px-5 py-6">
        <h3 className="font-display text-2xl font-black leading-tight tracking-tight text-ink md:text-[28px]">
          {renderedTitle}
        </h3>
        <div className="mt-4 grid grid-cols-2 gap-3 font-mono text-[10px] uppercase tracking-[0.18em] text-ink/70">
          <div>
            <div className="text-ink/50">FORMATO</div>
            <div className="mt-1 text-ink">{format}</div>
          </div>
          <div>
            <div className="text-ink/50">PRECIO</div>
            <div className="mt-1 font-bold text-ink">GRATIS</div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-dashed border-ink/40 bg-cream px-5 py-3 font-mono text-[10px] uppercase tracking-[0.18em]">
        <span
          className={cn(
            "inline-block px-2 py-1 text-[9px] font-bold tracking-[0.15em]",
            status === "DISPONIBLE" && "bg-ink text-cream",
            status === "PRÓXIMAMENTE" && "bg-acid text-ink",
            status === "ARCHIVADO" && "bg-ink/10 text-ink/70"
          )}
        >
          {status}
        </span>
        <span className="text-ink transition group-hover:translate-x-1">DESCARGAR →</span>
      </div>

    </motion.article>
  );
}
