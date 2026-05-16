"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export type ManualRowProps = {
  number: string;
  title: string;
  italicWord?: string;
  subtitle: string;
  stepCount: number;
  href: string;
  index?: number;
};

export function ManualRow({
  number,
  title,
  italicWord,
  subtitle,
  stepCount,
  href,
  index = 0,
}: ManualRowProps) {
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
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group relative border-t border-ink/15 first:border-t-0"
    >
      <Link
        href={href}
        className="grid grid-cols-12 items-center gap-4 py-8 transition hover:bg-off-white md:py-12"
      >
        {/* Giant number */}
        <div className="col-span-3 md:col-span-2">
          <span className="block font-display text-[64px] font-black leading-none tracking-tight text-ink md:text-[120px]">
            {number}.
          </span>
        </div>

        {/* Title + subtitle */}
        <div className="col-span-7 md:col-span-7">
          <h3 className="font-display text-2xl font-bold leading-tight tracking-tight text-ink md:text-4xl">
            {renderedTitle}
          </h3>
          <p className="mt-2 font-body text-sm text-ink/70 md:mt-3 md:text-base">
            {subtitle}
          </p>
          <div className="mt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-ink/60">
            {stepCount} pasos · checklist incluido
          </div>
        </div>

        {/* CTA */}
        <div className="col-span-2 md:col-span-3 text-right">
          <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-ink transition group-hover:translate-x-1">
            ABRIR
            <span aria-hidden>→</span>
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
