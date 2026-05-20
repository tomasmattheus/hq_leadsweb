"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Sticker } from "@/components/Sticker";
import { MarkerAnnotation } from "@/components/MarkerAnnotation";

export type FinalCTAProps = {
  eyebrow?: string;
  headline: string;
  italicWord: string;
  subtitle: string;
  agendaHref?: string;
  whatsappHref?: string;
};

export function FinalCTA({
  eyebrow = "ÚLTIMO LLAMADO",
  headline,
  italicWord,
  subtitle,
  agendaHref = "/agenda",
  whatsappHref = "https://wa.me/5493413103383?text=Hola%2C%20quiero%20una%20auditor%C3%ADa%20gratis%20de%20HQL.",
}: FinalCTAProps) {
  const [before, after] = headline.split(italicWord);

  return (
    <section className="relative isolate overflow-hidden bg-ink text-cream halftone-overlay">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-24 h-96 w-96 rounded-full bg-indigo/40 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-12 bottom-12 h-64 w-64 rotate-12 rounded-full bg-blood/30 blur-2xl"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 py-20 md:px-12 md:py-28">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <div className="mono text-[11px] tracking-widest text-cream/60">{eyebrow}</div>
            <motion.h2
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-4 display cmyk-shift-strong leading-[0.92] text-cream text-[clamp(2.5rem,7vw,5.5rem)]"
            >
              {before}
              <span className="serif-italic font-normal normal-case">{italicWord}</span>
              {after}
            </motion.h2>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-cream/85 md:text-lg">
              {subtitle}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link
                href={agendaHref}
                className="inline-flex items-center gap-3 bg-cream text-ink px-7 py-4 mono text-xs md:text-sm uppercase tracking-[0.2em] transition hover:bg-acid"
              >
                AUDITORÍA GRATIS · 30 MIN
                <ArrowRight className="w-4 h-4" strokeWidth={2} />
              </Link>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-cream/40 text-cream px-6 py-4 mono text-xs md:text-sm uppercase tracking-[0.2em] transition hover:border-cream hover:bg-cream/10"
              >
                <MessageCircle className="w-4 h-4" strokeWidth={2} />
                Por WhatsApp
              </a>
            </div>

            <p className="mt-6 mono text-[10px] tracking-widest text-cream/55">
              SIN COMPROMISO · SIN TARJETA · SIN PITCH COMERCIAL
            </p>
          </div>

          <div className="md:col-span-4 relative flex flex-col items-start gap-6 md:items-end">
            <Sticker text="GRATIS · MAY 2026" color="yellow" rotation={-6} size="md" />
            <Sticker text="30 MINUTOS" color="red" rotation={5} size="sm" />
            <div className="hidden md:block">
              <MarkerAnnotation text="EN SERIO" arrow="left" rotation={-3} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
