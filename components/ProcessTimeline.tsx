"use client";

import { motion } from "framer-motion";

export type ProcessPhase = {
  number: string;
  label: string;
  range: string;
  title: string;
  items: string[];
  outcome: string;
};

export type ProcessTimelineProps = {
  phases: ProcessPhase[];
};

export function ProcessTimeline({ phases }: ProcessTimelineProps) {
  return (
    <div className="relative">
      <ol className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-4">
        {phases.map((phase, i) => (
          <PhaseBlock key={phase.number} phase={phase} index={i} total={phases.length} />
        ))}
      </ol>

      <div className="mt-12 flex items-center justify-between border-t border-ink/15 pt-6 mono text-[10px] tracking-widest text-ink/60">
        <span>← CICLO CONTINUO ·</span>
        <span>LA OPTIMIZACIÓN ALIMENTA EL ANÁLISIS</span>
        <span>· NO PARAMOS EN EL MES 6 →</span>
      </div>
    </div>
  );
}

function PhaseBlock({
  phase,
  index,
  total,
}: {
  phase: ProcessPhase;
  index: number;
  total: number;
}) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-15%" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative flex flex-col border border-ink/15 bg-off-white p-6 md:p-7"
    >
      <header className="flex items-start justify-between border-b border-ink/15 pb-4">
        <div>
          <div className="mono text-[10px] tracking-widest text-ink/55">FASE {phase.number}</div>
          <div className="mt-2 mono text-[11px] tracking-widest text-ink">{phase.range}</div>
        </div>
        <span className="display text-3xl text-ink/20 md:text-4xl">{String(index + 1).padStart(2, "0")}</span>
      </header>

      <h3 className="mt-5 display cmyk-shift text-xl normal-case leading-tight text-ink md:text-2xl">
        {phase.title}
      </h3>

      <ul className="mt-5 space-y-2.5">
        {phase.items.map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-ink/85">
            <span className="text-ink/40">·</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex-1 border-t border-ink/15 pt-4">
        <div className="mono text-[9px] tracking-widest text-ink/55">RESULTADO</div>
        <p className="mt-2 serif-italic text-sm text-ink md:text-base">{phase.outcome}</p>
      </div>

      {index < total - 1 && (
        <div className="absolute -right-2 top-1/2 hidden -translate-y-1/2 mono text-[12px] text-ink/30 md:block">
          →
        </div>
      )}
    </motion.li>
  );
}
