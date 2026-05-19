"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MarkerAnnotation } from "@/components/MarkerAnnotation";
import { Highlighter } from "@/components/Highlighter";
import type { Issue } from "@/lib/content/issues";

export type DataPoint = { label: string; value: string };

export type DataMagazineSectionProps = {
  heroValue: string;
  heroLabel: string;
  heroCaption: string;
  highlightedWord?: string;
  chartData?: DataPoint[];
  issues: Issue[];
  basePath: string;
};

export function DataMagazineSection({
  heroValue,
  heroLabel,
  heroCaption,
  highlightedWord,
  chartData = [],
  issues,
  basePath,
}: DataMagazineSectionProps) {
  const max = Math.max(1, ...chartData.map((d) => parseFloat(d.value.replace(/[^\d.]/g, "")) || 0));

  let renderedCaption: React.ReactNode = heroCaption;
  if (highlightedWord && heroCaption.includes(highlightedWord)) {
    const [b, a] = heroCaption.split(highlightedWord);
    renderedCaption = (
      <>
        {b}
        <Highlighter color="yellow">{highlightedWord}</Highlighter>
        {a}
      </>
    );
  }

  return (
    <section className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-12 px-6 py-16 md:grid-cols-12 md:gap-8 md:px-12 md:py-24">
      <div className="md:col-span-8">
        <div className="mono text-[11px] text-ink/60">{heroLabel}</div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mt-4"
        >
          <div className="display leading-[0.88] text-ink text-[clamp(3.5rem,11vw,8.5rem)]">
            {heroValue}
          </div>
          <div className="absolute right-2 top-6 hidden md:block">
            <MarkerAnnotation text="OJO ACÁ" arrow="left" />
          </div>
        </motion.div>

        <p className="mt-8 max-w-xl display text-xl normal-case tracking-tight text-ink md:text-2xl">
          {renderedCaption}
        </p>

        {chartData.length > 0 && (
          <div className="mt-12 border-t border-ink/15 pt-6">
            <div className="mono text-[10px] text-ink/60">BENCHMARK · 2026</div>
            <div className="mt-6 space-y-3">
              {chartData.map((d) => {
                const num = parseFloat(d.value.replace(/[^\d.]/g, "")) || 0;
                const pct = (num / max) * 100;
                return (
                  <div key={d.label} className="grid grid-cols-12 items-center gap-3">
                    <div className="col-span-3 mono text-[11px] text-ink/80">{d.label}</div>
                    <div className="relative col-span-7 h-3 bg-ink/10">
                      <div className="absolute inset-y-0 left-0 bg-ink" style={{ width: `${pct}%` }} />
                    </div>
                    <div className="col-span-2 text-right mono text-[11px] font-bold text-ink">{d.value}</div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      <aside className="md:col-span-4">
        <div className="mono text-[11px] text-ink/60">EN ESTA SECCIÓN</div>
        <ul className="mt-4 divide-y divide-ink/15 border-y border-ink/15">
          {issues.map((issue) => {
            const [before, after] = issue.headline.split(issue.italicWord);
            return (
              <li key={issue.id}>
                <Link
                  href={basePath}
                  className="group flex items-start gap-3 py-4 transition hover:bg-off-white"
                >
                  <span className="mono text-[11px] text-ink/60">{issue.number}</span>
                  <div className="flex-1">
                    <h4 className="display text-base leading-tight text-ink normal-case">
                      {before}
                      <span className="serif-italic font-normal">{issue.italicWord}</span>
                      {after}
                    </h4>
                    <div className="mt-1 mono text-[10px] text-ink/50">{issue.date}</div>
                  </div>
                  <span className="mono text-[11px] text-ink/70 transition group-hover:translate-x-1">→</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </aside>
    </section>
  );
}
