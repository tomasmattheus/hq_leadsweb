"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export type CaseStatProps = {
  metric: string;
  metricLabel: string;
  industry: string;
  before: string;
  after: string;
  story: string;
  status: "OPERANDO" | "EN ESCALA" | "ARCHIVADO";
  index?: number;
  tone?: "default" | "highlight";
};

const statusStyles: Record<CaseStatProps["status"], string> = {
  OPERANDO: "bg-acid text-ink",
  "EN ESCALA": "bg-indigo text-cream",
  ARCHIVADO: "bg-ink/10 text-ink",
};

export function CaseStat({
  metric,
  metricLabel,
  industry,
  before,
  after,
  story,
  status,
  index = 0,
  tone = "default",
}: CaseStatProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-15%" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={cn(
        "group relative flex h-full flex-col border bg-off-white p-6 md:p-8 transition",
        tone === "highlight"
          ? "border-indigo bg-indigo/[0.04]"
          : "border-ink/15 hover:border-ink"
      )}
    >
      <header className="flex items-center justify-between mono text-[10px] tracking-widest text-ink/60">
        <span>CASO {String(index + 1).padStart(2, "0")}</span>
        <span>{industry}</span>
      </header>

      <div className="mt-5">
        <div className="display cmyk-shift-strong leading-[0.9] text-ink text-[clamp(2.75rem,6vw,4.5rem)]">
          {metric}
        </div>
        <div className="mt-2 mono text-[10px] tracking-widest text-ink/65">{metricLabel}</div>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4 border-t border-ink/15 pt-5">
        <div>
          <div className="mono text-[9px] tracking-widest text-ink/55">ANTES</div>
          <div className="mt-1 font-display text-base text-ink md:text-lg">{before}</div>
        </div>
        <div>
          <div className="mono text-[9px] tracking-widest text-ink/55">DESPUÉS</div>
          <div className="mt-1 font-display text-base text-ink md:text-lg">{after}</div>
        </div>
      </div>

      <p className="mt-5 flex-1 serif-italic text-base leading-relaxed text-ink/85 md:text-lg">
        {story}
      </p>

      <footer className="mt-6 flex items-center justify-between border-t border-ink/15 pt-4">
        <span className={cn("mono text-[10px] tracking-widest px-2 py-1", statusStyles[status])}>
          {status}
        </span>
        <span className="mono text-[10px] tracking-widest text-ink/55">DOSSIER TÉCNICO</span>
      </footer>
    </motion.article>
  );
}
