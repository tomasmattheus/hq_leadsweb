"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Sticker } from "@/components/Sticker";
import { cn } from "@/lib/utils";
import type { Issue } from "@/lib/content/issues";

export type MagazineCardProps = {
  issue: Issue;
  href?: string;
  variant?: "default" | "preview";
  index?: number;
};

// Secciones que tienen ruta /magazine/<slug> propia
const SECTION_ROUTES = new Set([
  "diagnosticos",
  "hot-take",
  "manual-de-campo",
  "mentalidad",
  "motor-de-ads",
  "news-brief",
]);

export function MagazineCard({ issue, href, variant = "default", index = 0 }: MagazineCardProps) {
  // Issues individuales aún no tienen ruta propia. Linkear a la sección padre (o al archivo) para evitar 404.
  const fallback = SECTION_ROUTES.has(issue.sectionSlug)
    ? `/magazine/${issue.sectionSlug}`
    : "/magazine";
  const url = href ?? fallback;
  const [before, after] = issue.headline.split(issue.italicWord);

  return (
    <motion.article
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className={cn(
        "group relative isolate flex h-full min-h-[340px] flex-col overflow-hidden border border-ink/15 bg-off-white p-5 transition hover:-translate-y-0.5 hover:border-ink hover:shadow-[0_12px_30px_-18px_rgba(10,10,10,0.45)]",
        variant === "preview" && "min-h-[380px]",
        issue.sticker && "pt-14"
      )}
    >
      <Link
        href={url}
        aria-label={`Leer ${issue.section} ${issue.number} — ${issue.headline}`}
        className="absolute inset-0 z-10"
      />

      <header className="flex items-center justify-between mono text-[10px] text-ink/70">
        <span>{issue.section}</span>
        <span>ISSUE {issue.number}</span>
      </header>

      <div className="mt-6 flex-1">
        <h3 className="display text-[22px] leading-[1.05] text-ink md:text-[26px]">
          {before}
          <span className="serif-italic font-normal normal-case">{issue.italicWord}</span>
          {after}
        </h3>
      </div>

      <footer className="mt-8 flex items-end justify-between">
        <div className="mono text-[10px] text-ink/60">
          <div>{issue.weekday}</div>
          <div>{issue.date}</div>
        </div>
        <span className="mono text-[10px] text-ink transition group-hover:translate-x-1">ABRIR →</span>
      </footer>

      {issue.sticker && (
        <div className="pointer-events-none absolute right-3 top-3 z-20">
          <Sticker text={issue.sticker.text} color={issue.sticker.color} rotation={issue.rotation ?? 4} size="sm" />
        </div>
      )}
    </motion.article>
  );
}
