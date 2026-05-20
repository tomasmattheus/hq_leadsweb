"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CropMarks } from "@/components/CropMarks";
import { Sticker } from "@/components/Sticker";
import { MarkerAnnotation } from "@/components/MarkerAnnotation";
import { Barcode } from "@/components/Barcode";

export type HeroProps = {
  headline: string;
  italicWord: string;
  subtitle: string;
  subtitleHighlight?: string;
  ctaPrimary: { label: string; href: string };
  ctaSecondary: { label: string; href: string };
  issueLabel?: string;
  volumeLabel?: string;
};

export function Hero({
  headline,
  italicWord,
  subtitle,
  subtitleHighlight,
  ctaPrimary,
  ctaSecondary,
  issueLabel = "ISSUE 001",
  volumeLabel = "VOL.01 / SIDE A",
}: HeroProps) {
  const [before, after] = headline.split(italicWord);
  const subtitleParts =
    subtitleHighlight && subtitle.includes(subtitleHighlight)
      ? subtitle.split(subtitleHighlight)
      : null;

  return (
    <section
      aria-label="Hero"
      className="relative isolate overflow-hidden bg-cream text-ink crop-marks"
    >
      <CropMarks color="light-gray" margin={24} />

      {/* Editorial cover header */}
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 pt-8 md:px-12 md:pt-10">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-ink pb-3 mono text-[10px] tracking-[0.2em] text-ink md:text-[11px]">
          <span className="font-bold">HQ.LEADS · {volumeLabel}</span>
          <span className="hidden md:inline">MAYO · 2026 · ROSARIO · ARG · $0.00 ARS</span>
          <span className="font-bold">{issueLabel}</span>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-2 pt-2 mono text-[9px] tracking-widest text-ink/65">
          <span>EDITORIAL INDEPENDIENTE · PAID MEDIA · IA</span>
          <span className="hidden sm:inline">DISTRIBUIDO POR INTERNET · SIN PAYWALL</span>
          <span>ISSN 0001-HQL</span>
        </div>
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-10 px-6 pb-12 pt-10 md:grid-cols-12 md:gap-8 md:px-12 md:pb-16 md:pt-14">
        <div className="relative md:col-span-8">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="display cmyk-shift leading-[0.92] text-[clamp(2.75rem,7.5vw,6.25rem)]"
          >
            {before}
            <span className="serif-italic font-normal normal-case">{italicWord}</span>
            {after}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-6 max-w-xl md:mt-8"
          >
            <p className="text-base leading-relaxed text-ink/85 md:text-lg">
              {subtitleParts ? (
                <>
                  {subtitleParts[0]}
                  <span className="highlighter-strong font-semibold text-ink">{subtitleHighlight}</span>
                  {subtitleParts[1]}
                </>
              ) : (
                subtitle
              )}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3 md:mt-8">
              <Link href={ctaPrimary.href} className="pill pill-indigo px-6 py-3 text-xs">
                {ctaPrimary.label} →
              </Link>
              <Link href={ctaSecondary.href} className="pill pill-outline px-6 py-3 text-xs">
                {ctaSecondary.label}
              </Link>
            </div>
          </motion.div>

          {/* Stats bar */}
          <motion.dl
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="mt-10 grid max-w-2xl grid-cols-3 gap-4 border-t border-ink/15 pt-6 md:mt-12 md:gap-8 md:pt-8"
          >
            <Stat n="+30" label="PYMES OPERANDO" />
            <Stat n="4.2×" label="ROAS PROMEDIO" />
            <Stat n="$2.8M" label="GESTIONADOS / MES" />
          </motion.dl>
        </div>

        {/* Right: chess piece halftone + stickers */}
        <div className="relative md:col-span-4">
          <motion.div
            aria-hidden
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative mx-auto aspect-[3/4] w-full max-w-[300px] md:max-w-none"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="h-full w-full"
            >
              <ChessHalftone />
            </motion.div>
          </motion.div>

          <div className="absolute -top-3 right-1 md:right-4">
            <Sticker text="EXCLUSIVO · MAY 2026" color="yellow" rotation={-7} size="sm" />
          </div>
          <div className="absolute top-16 -left-3 hidden md:block">
            <Sticker text="ISSUE 001" color="black" rotation={-12} size="sm" />
          </div>
          <div className="absolute bottom-24 -left-2 md:bottom-32 md:-left-6">
            <Sticker text="SIN CHAMUYOS" color="red" rotation={5} size="md" />
          </div>
          <div className="absolute bottom-2 right-4 hidden md:block">
            <MarkerAnnotation text="AJEDREZ, NO RULETA" arrow="up" rotation={-3} />
          </div>
          <div className="absolute -bottom-2 left-0 md:left-2">
            <Barcode code="HQL2026001" label="VOL.01" />
          </div>
        </div>
      </div>

      {/* Marquee ticker */}
      <div className="relative z-10 overflow-hidden border-y border-ink/15 bg-ink text-cream">
        <div className="flex animate-[marquee_38s_linear_infinite] whitespace-nowrap py-3 mono text-[11px] tracking-widest">
          {Array.from({ length: 2 }).map((_, i) => (
            <span key={i} className="flex shrink-0 items-center gap-6 px-6">
              <span>● SISTEMAS QUE VENDEN MIENTRAS DORMÍS</span>
              <span>·</span>
              <span>META ADS</span>
              <span>·</span>
              <span>GOOGLE ADS</span>
              <span>·</span>
              <span>AUTOMATIZACIÓN IA</span>
              <span>·</span>
              <span>LANDING PAGES</span>
              <span>·</span>
              <span>CONTENIDO</span>
              <span>·</span>
              <span>NEWSLETTER SEMANAL</span>
              <span>·</span>
              <span>ROSARIO · ARG</span>
              <span>·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div className="flex flex-col">
      <span className="display text-[clamp(1.5rem,3vw,2.25rem)] leading-none text-ink">{n}</span>
      <span className="mt-2 mono text-[10px] tracking-widest text-ink/60">{label}</span>
    </div>
  );
}

function ChessHalftone() {
  return (
    <svg viewBox="0 0 320 420" role="img" aria-label="Pieza de ajedrez en halftone" className="h-full w-full">
      <defs>
        <pattern id="halftone-dots" x="0" y="0" width="6" height="6" patternUnits="userSpaceOnUse">
          <circle cx="3" cy="3" r="1.4" fill="#0A0A0A" />
        </pattern>
        <radialGradient id="halftone-fade" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#000" stopOpacity="1" />
          <stop offset="100%" stopColor="#000" stopOpacity="0" />
        </radialGradient>
        <mask id="halftone-mask">
          <rect width="320" height="420" fill="url(#halftone-fade)" />
        </mask>
      </defs>
      <g mask="url(#halftone-mask)">
        <path
          d="M70 380 L250 380 L250 350 C250 340 240 332 230 332 L210 332 L210 290 C240 270 250 240 250 200 C250 150 220 110 180 90 C190 70 180 50 160 50 C150 50 140 60 138 70 L120 80 C95 90 80 110 80 140 C80 160 90 175 110 180 L120 200 L100 220 L90 245 L80 260 L70 285 L70 380 Z"
          fill="url(#halftone-dots)"
        />
      </g>
    </svg>
  );
}
