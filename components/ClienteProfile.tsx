"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export type ClienteProfileProps = {
  number: string;
  badge: string;
  title: string;
  quote: string;
  symptoms: string[];
  solution: string;
  tone?: "ink" | "indigo" | "blood";
  index?: number;
};

export function ClienteProfile({
  number,
  badge,
  title,
  quote,
  symptoms,
  solution,
  tone = "ink",
  index = 0,
}: ClienteProfileProps) {
  const accent = {
    ink: "border-ink/15 hover:border-ink",
    indigo: "border-indigo/30 hover:border-indigo",
    blood: "border-blood/30 hover:border-blood",
  }[tone];

  const badgeColor = {
    ink: "bg-ink text-cream",
    indigo: "bg-indigo text-cream",
    blood: "bg-blood text-cream",
  }[tone];

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-15%" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={cn(
        "relative flex h-full flex-col border bg-off-white p-6 transition md:p-8",
        accent
      )}
    >
      <header className="mb-5 flex items-center justify-between">
        <span className="display text-2xl text-ink md:text-3xl">{number}</span>
        <span className={cn("mono text-[10px] px-2 py-1 tracking-widest", badgeColor)}>
          {badge}
        </span>
      </header>

      <h3 className="display cmyk-shift text-xl normal-case leading-tight text-ink md:text-2xl">
        {title}
      </h3>

      <blockquote className="mt-4 border-l-2 border-ink/40 pl-4">
        <p className="serif-italic text-base leading-relaxed text-ink/80 md:text-lg">
          “{quote}”
        </p>
      </blockquote>

      <div className="mt-6">
        <div className="mono text-[10px] tracking-widest text-ink/60">QUÉ ESTÁ PASANDO</div>
        <ul className="mt-3 space-y-2.5">
          {symptoms.map((s, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-ink/85 md:text-base">
              <span className="mono mt-1 text-[10px] text-ink/50">{String(i + 1).padStart(2, "0")}</span>
              <span>{s}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 flex-1 border-t border-ink/15 pt-5">
        <div className="mono text-[10px] tracking-widest text-ink/60">CÓMO LO RESOLVEMOS</div>
        <p className="mt-3 text-sm text-ink md:text-base">{solution}</p>
      </div>
    </motion.article>
  );
}
