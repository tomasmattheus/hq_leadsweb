"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { CropMarks } from "@/components/CropMarks";
import { Sticker } from "@/components/Sticker";
import { Barcode } from "@/components/Barcode";
import { Newsletter } from "@/components/Newsletter";
import { issues, type MagazineSection } from "@/lib/content/issues";
import { cn } from "@/lib/utils";

const FILTERS: ("TODOS" | MagazineSection)[] = [
  "TODOS",
  "MENTALIDAD",
  "MOTOR DE ADS",
  "DIAGNÓSTICO",
  "MANUAL DE CAMPO",
  "HOT TAKE",
  "NEWS BRIEF",
];

export default function BlogPage() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("TODOS");

  const filtered = useMemo(
    () =>
      filter === "TODOS"
        ? issues
        : issues.filter((i) => i.section === filter),
    [filter]
  );

  return (
    <div className="relative bg-cream text-ink">
      <section className="relative max-w-7xl mx-auto px-6 md:px-12 pt-20 md:pt-28 pb-12 crop-marks">
        <CropMarks color="light-gray" margin={24} />

        <div className="border-b-2 border-ink pb-3 mb-2 flex flex-wrap items-center justify-between gap-3 mono text-[10px] md:text-[11px] tracking-[0.2em] uppercase text-ink">
          <span className="font-bold">HQ.LEADS · VOL.01 / BLOG</span>
          <span className="hidden md:inline">EDITORIAL · NUEVO ISSUE / SEMANA</span>
          <span className="font-bold">{String(issues.length).padStart(2, "0")} ISSUES</span>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-2 mb-12 md:mb-16 mono text-[9px] tracking-widest text-ink/65">
          <span>NOTAS DE CAMPO · DIAGNÓSTICOS · DATA · HOT TAKES</span>
          <span className="hidden sm:inline">SIN PAYWALL · SIN POPUPS</span>
          <span>ISSN 0001-HQL</span>
        </div>

        <header className="grid grid-cols-1 gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <div className="mono text-[11px] tracking-widest text-ink/60">EL ARCHIVO</div>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mt-4 display cmyk-shift leading-[0.92] text-ink text-[clamp(2.75rem,8vw,6rem)]"
            >
              BLOG <span className="serif-italic font-normal normal-case">hq.leads.</span>
            </motion.h1>
            <p className="mt-6 max-w-2xl text-base text-ink/80 md:text-lg">
              Editorial semanal. Diagnósticos reales, fórmulas, mentalidad y opiniones fuertes. Sin chamuyo, sin SEO basura.
            </p>
          </div>
          <div className="md:col-span-4 flex flex-col items-start gap-3 md:items-end">
            <Sticker text="VOL.01 / SIDE A" color="black" rotation={-4} size="md" />
            <Sticker text="EDICIÓN MAY 2026" color="yellow" rotation={4} size="sm" />
          </div>
        </header>
      </section>

      <section className="relative max-w-7xl mx-auto px-6 md:px-12 pb-20 md:pb-28">
        <nav
          aria-label="Filtrar por sección"
          className="mb-10 flex flex-wrap gap-2 border-y border-ink/15 py-5"
        >
          {FILTERS.map((f) => {
            const active = f === filter;
            return (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                aria-pressed={active}
                className={cn(
                  "pill px-4 py-2 text-[11px] transition",
                  active ? "pill-black" : "pill-outline hover:bg-ink hover:text-cream"
                )}
              >
                {f}
              </button>
            );
          })}
        </nav>

        {filtered.length > 0 ? (
          <ul className="divide-y divide-ink/15 border-y border-ink/15">
            {filtered.map((issue, i) => {
              const [before, after] = issue.headline.split(issue.italicWord);
              return (
                <motion.li
                  key={issue.id}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.4, delay: i * 0.03 }}
                >
                  <Link
                    href={`/blog/${issue.slug}`}
                    className="group grid grid-cols-12 items-start gap-4 py-6 transition hover:bg-off-white md:items-center md:py-8"
                  >
                    <div className="col-span-2 md:col-span-1 mono text-[10px] tracking-widest text-ink/55">
                      {issue.number}
                    </div>
                    <div className="col-span-10 md:col-span-7">
                      <div className="mono text-[10px] tracking-widest text-ink/60">
                        {issue.section} · {issue.date}
                      </div>
                      <h2 className="mt-2 display cmyk-shift text-xl normal-case leading-tight text-ink md:text-2xl">
                        {before}
                        <span className="serif-italic font-normal">{issue.italicWord}</span>
                        {after}
                      </h2>
                    </div>
                    <div className="col-span-8 md:col-span-3 mono text-[10px] tracking-widest text-ink/55">
                      {issue.weekday} · {issue.date}
                    </div>
                    <div className="col-span-4 md:col-span-1 mono text-[10px] tracking-widest text-ink text-right transition group-hover:translate-x-1">
                      ABRIR →
                    </div>
                  </Link>
                </motion.li>
              );
            })}
          </ul>
        ) : (
          <div className="border border-ink/15 bg-off-white p-10 text-center">
            <div className="mono text-[11px] tracking-widest text-ink/60">
              NADA EN ESTA SECCIÓN TODAVÍA.
            </div>
            <p className="mt-3 display text-2xl normal-case text-ink">
              Issues nuevos cada semana.{" "}
              <span className="serif-italic font-normal">posta.</span>
            </p>
          </div>
        )}

        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 mono text-[10px] tracking-widest text-ink/55">
          <span>POCAS PALABRAS · MUCHA ACTITUD</span>
          <Barcode code="HQL2026BLOG" label="VOL.01" />
        </div>
      </section>

      <Newsletter />
    </div>
  );
}
