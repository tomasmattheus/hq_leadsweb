"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CropMarks } from "@/components/CropMarks";
import { Sticker } from "@/components/Sticker";
import { MarkerAnnotation } from "@/components/MarkerAnnotation";

export type HeroProps = {
  headline: string;
  italicWord: string;
  subtitle: string;
  ctaPrimary: { label: string; href: string };
  ctaSecondary: { label: string; href: string };
  issueLabel?: string;
  volumeLabel?: string;
};

export function Hero({
  headline,
  italicWord,
  subtitle,
  ctaPrimary,
  ctaSecondary,
  issueLabel = "ISSUE 001",
  volumeLabel = "VOL.01 / SIDE A",
}: HeroProps) {
  const [before, after] = headline.split(italicWord);

  return (
    <section
      aria-label="Hero"
      className="relative isolate overflow-hidden bg-cream text-ink crop-marks"
    >
      <CropMarks color="light-gray" margin={24} />

      {/* Editorial header */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] items-center justify-between px-6 pt-10 mono text-[11px] text-ink/80 md:px-12 md:text-xs">
        <span>{volumeLabel}</span>
        <span className="hidden md:inline">DISEÑADO EN ROSARIO. PARA TODOS LADOS.</span>
        <span>{issueLabel}</span>
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-10 px-6 pb-20 pt-12 md:grid-cols-12 md:gap-6 md:px-12 md:pb-32 md:pt-20">
        <div className="relative md:col-span-8">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="display text-[14vw] leading-[0.9] md:text-[9.5vw] lg:text-[8.4rem] xl:text-[10rem]"
          >
            {before}
            <span className="serif-italic font-normal normal-case">{italicWord}</span>
            {after}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="mt-10 max-w-xl"
          >
            <p className="text-base leading-relaxed text-ink/80 md:text-lg">{subtitle}</p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link href={ctaPrimary.href} className="pill pill-indigo px-6 py-3 text-xs">
                {ctaPrimary.label} →
              </Link>
              <Link href={ctaSecondary.href} className="pill pill-outline px-6 py-3 text-xs">
                {ctaSecondary.label}
              </Link>
            </div>
          </motion.div>

          <div className="absolute -bottom-2 left-[50%] hidden md:block">
            <MarkerAnnotation text="POSTA" arrow="left" rotation={-3} />
          </div>
        </div>

        {/* Right: chess piece halftone + stickers */}
        <div className="relative md:col-span-4">
          <div aria-hidden className="relative mx-auto aspect-[3/4] w-full max-w-[360px] md:max-w-none">
            <ChessHalftone />
          </div>

          <div className="absolute -top-2 right-2 md:right-6">
            <Sticker text="VOL.01 / DROP 01" color="yellow" rotation={-6} size="sm" />
          </div>
          <div className="absolute bottom-6 -left-2 md:bottom-10 md:-left-6">
            <Sticker text="SIN CHAMUYOS" color="red" rotation={5} size="md" />
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] items-end justify-between border-t border-ink/15 px-6 py-6 mono text-[11px] text-ink/70 md:px-12">
        <a href="#magazine-preview" className="inline-flex items-center gap-2 transition hover:text-ink">
          ↓ SCROLL TO MAGAZINE
        </a>
        <span className="hidden md:inline">SISTEMAS QUE VENDEN MIENTRAS DORMÍS.</span>
        <span>HQ.LEADS · 2026</span>
      </div>
    </section>
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
