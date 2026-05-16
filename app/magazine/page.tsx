"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { CropMarks } from "@/components/CropMarks";
import { MagazineCard } from "@/components/MagazineCard";
import { Sticker } from "@/components/Sticker";
import { issues, type MagazineSection } from "@/lib/content/issues";
import { cn } from "@/lib/utils";

const FILTERS: ("TODOS" | MagazineSection)[] = [
  "TODOS",
  "PORTADA",
  "MENTALIDAD",
  "NEWS BRIEF",
  "MOTOR DE ADS",
  "AUTOPSIA",
  "MANUAL DE CAMPO",
  "DROP",
  "HOT TAKE",
];

export default function MagazinePage() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("TODOS");

  const filtered = useMemo(
    () => (filter === "TODOS" ? issues : issues.filter((i) => i.section === filter)),
    [filter]
  );

  return (
    <section className="relative bg-cream pb-24 pt-16 md:pt-24 crop-marks">
      <CropMarks color="light-gray" margin={24} />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 md:px-12">
        {/* Header */}
        <header className="mb-10 flex flex-wrap items-end justify-between gap-6 border-b border-ink/15 pb-10">
          <div>
            <div className="mono text-[11px] text-ink/60">EL ARCHIVO</div>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="mt-3 display text-[14vw] leading-[0.9] text-ink md:text-[8rem]"
            >
              MAGAZINE <span className="serif-italic font-normal normal-case">hq.leads.</span>
            </motion.h1>
            <p className="mt-4 max-w-xl text-ink/80">
              Editorial mensual. 16 issues por mes, 8 secciones rotando. Pauta, mentalidad, métricas, autopsias y manuales. Sin chamuyos.
            </p>
          </div>
          <div className="flex flex-col items-end gap-3">
            <Sticker text="VOL.01 / SIDE A" color="black" rotation={-4} size="md" />
            <span className="mono text-[10px] text-ink/60">{filtered.length} ISSUES</span>
          </div>
        </header>

        {/* Filter pills */}
        <nav aria-label="Filtrar por sección" className="mb-10 flex flex-wrap gap-2">
          {FILTERS.map((f) => {
            const active = f === filter;
            return (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                className={cn(
                  "pill px-4 py-2 text-[11px] transition",
                  active ? "pill-black" : "pill-outline hover:bg-ink hover:text-cream"
                )}
                aria-pressed={active}
              >
                {f}
              </button>
            );
          })}
        </nav>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((issue, i) => (
              <MagazineCard key={issue.id} issue={issue} index={i} />
            ))}
          </div>
        ) : (
          <div className="border border-ink/15 bg-off-white p-10 text-center">
            <div className="mono text-[11px] text-ink/60">NADA EN ESTA SECCIÓN TODAVÍA.</div>
            <p className="mt-3 display text-2xl normal-case text-ink">
              Issues nuevos cada semana. <span className="serif-italic font-normal">posta.</span>
            </p>
          </div>
        )}

        {/* Footer cue */}
        <div className="mt-16 flex flex-wrap items-end justify-between gap-4 border-t border-ink/15 pt-6 mono text-[10px] text-ink/60">
          <span>POCAS PALABRAS. MUCHA ACTITUD.</span>
          <span>HQ.LEADS / VOL.01 / ARCHIVO / 16 ISSUES</span>
        </div>
      </div>
    </section>
  );
}
