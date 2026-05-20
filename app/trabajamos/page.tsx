import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, X } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { Sticker } from "@/components/Sticker";
import { MarkerAnnotation } from "@/components/MarkerAnnotation";
import { CropMarks } from "@/components/CropMarks";
import { Highlighter } from "@/components/Highlighter";
import { Newsletter } from "@/components/Newsletter";
import { Barcode } from "@/components/Barcode";
import { ManifestoBlock } from "@/components/ManifestoBlock";
import { services } from "@/lib/content/services";

export const metadata: Metadata = {
  title: "Cómo trabajamos",
  description:
    "Ingeniería comercial para PyMES con producto. Performance, automatización IA, web y contenido — sin chamuyo.",
};

const PRICING_PER_SERVICE: Record<string, { from: string; detail: string }> = {
  performance: {
    from: "$300K / MES",
    detail: "Por plataforma · Combo Meta+Google $500k · Bonus 5% sobre ventas atribuibles",
  },
  "automatizacion-ia": {
    from: "$200 USD / MES",
    detail: "Por agente conversacional · Setup + mantenimiento · Make/n8n a pedido",
  },
  web: {
    from: "$350K SETUP",
    detail: "Landing: $350k + $100k/mes mantenimiento · E-commerce desde $800k",
  },
  contenido: {
    from: "$200K / MES",
    detail: "Starter $200k · Pro $350k · Full $500k · Posts + reels + reporte",
  },
};

export default function TrabajamosPage() {
  return (
    <div className="relative bg-cream text-ink">
      {/* Hero */}
      <section className="relative max-w-7xl mx-auto px-6 md:px-12 pt-20 md:pt-28 pb-12 md:pb-16 crop-marks">
        <CropMarks color="light-gray" margin={24} />

        <div className="border-b-2 border-ink pb-3 mb-2 flex flex-wrap items-center justify-between gap-3 mono text-[10px] md:text-[11px] tracking-[0.2em] uppercase text-ink">
          <span className="font-bold">HQ.LEADS · VOL.01 / TRABAJAMOS</span>
          <span className="hidden md:inline">MAYO · 2026 · ROSARIO · ARG</span>
          <span className="font-bold">MÉTODO / 04</span>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-2 mb-12 md:mb-16 mono text-[9px] tracking-widest text-ink/65">
          <span>4 SERVICIOS · 1 SISTEMA · SIN CHAMUYO</span>
          <span className="hidden sm:inline">LECTURA ESTIMADA · 06:00 MIN</span>
          <span>ISSN 0001-HQL</span>
        </div>

        <div className="relative">
          <div className="absolute top-0 right-6 md:right-12 hidden md:flex flex-col items-end gap-3">
            <Sticker color="red" text="MENÚ COMPLETO" rotation={-7} size="md" />
            <Sticker color="yellow" text="SIN UPSELLING" rotation={4} size="sm" />
          </div>

          <SectionHeader
            tag="SECCIÓN 01 · MÉTODO"
            headline="CÓMO"
            italicWord="trabajamos."
            meta="ROSARIO · 2026"
          />

          <p className="mt-8 max-w-3xl display normal-case font-medium leading-[1.15] text-2xl md:text-4xl text-ink">
            Diseñamos y operamos sistemas comerciales para PyMES con producto que{" "}
            <Highlighter color="yellow">ya funciona offline</Highlighter>.
          </p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            <p className="text-base md:text-lg text-ink/80 leading-relaxed">
              Si tu producto vende en la calle, en el local, en el boca a boca — el canal digital es ingeniería. No magia. Pixel limpio, audiencias reales, creativos que paran el scroll, automatizaciones que corren solas y reportes cruzados con tu CRM.
            </p>
            <p className="text-base md:text-lg text-ink/80 leading-relaxed">
              Sin agencia genérica. Sin promesas de ROAS sin haber visto tu cuenta. Sin templates que se notan a la legua. Sin pitch que tarda 40 minutos.
            </p>
          </div>

          <div className="mt-10 hidden md:block">
            <MarkerAnnotation text="EL FILTRO ES EL PRODUCTO" arrow="up" rotation={-3} />
          </div>
        </div>
      </section>

      {/* Services detail */}
      <section className="relative max-w-7xl mx-auto px-6 md:px-12 pb-12">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6 border-b border-ink/15 pb-6">
          <div className="mono text-[11px] tracking-widest text-ink/65">
            SECCIÓN 02 · DETALLE DE SERVICIOS
          </div>
          <div className="mono text-[10px] tracking-widest text-ink/55">
            04 SERVICIOS · UNO POR FRENTE
          </div>
        </div>

        <div className="space-y-16 md:space-y-24">
          {services.map((service, i) => {
            const pricing = PRICING_PER_SERVICE[service.slug];
            return (
              <article
                key={service.slug}
                id={service.slug}
                className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12"
              >
                {/* Left column */}
                <div className="lg:col-span-5">
                  <div className="sticky top-24">
                    <div className="flex items-baseline gap-4">
                      <span className="display text-5xl text-ink md:text-7xl">
                        {service.number}
                      </span>
                      <span className="mono text-[10px] tracking-widest text-ink/55">
                        {service.tag}
                      </span>
                    </div>

                    <h2 className="mt-4 display cmyk-shift leading-[0.95] text-ink text-[clamp(2rem,5.5vw,3.75rem)]">
                      {service.title}{" "}
                      <span className="serif-italic font-normal normal-case">
                        {service.italicWord}
                      </span>
                    </h2>

                    <p className="mt-4 serif-italic text-lg text-ink/85 md:text-xl">
                      {service.subtitle}
                    </p>

                    <p className="mt-6 text-base text-ink/80 md:text-lg leading-relaxed">
                      {service.description}
                    </p>

                    {pricing && (
                      <div className="mt-8 border border-ink/20 bg-off-white p-5">
                        <div className="flex items-baseline justify-between gap-4">
                          <span className="mono text-[10px] tracking-widest text-ink/60">DESDE</span>
                          <span className="display text-2xl text-ink md:text-3xl">
                            {pricing.from}
                          </span>
                        </div>
                        <p className="mt-3 mono text-[10px] tracking-wide text-ink/65 leading-relaxed">
                          {pricing.detail}
                        </p>
                      </div>
                    )}

                    <div className="mt-8 flex flex-wrap items-center gap-3">
                      <Link
                        href="/agenda"
                        className="pill pill-indigo px-6 py-3 text-xs"
                      >
                        Pedí auditoría →
                      </Link>
                      <a
                        href="https://wa.me/5493413103383?text=Hola%2C%20me%20interesa%20el%20servicio%20de%20HQL."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="pill pill-outline px-6 py-3 text-xs"
                      >
                        Por WhatsApp
                      </a>
                    </div>
                  </div>
                </div>

                {/* Right column */}
                <div className="lg:col-span-7">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="border border-ink/15 bg-off-white p-5 md:p-6">
                      <div className="mono text-[10px] tracking-widest text-indigo">SÍ HACEMOS</div>
                      <ul className="mt-4 space-y-3">
                        {service.hacemos.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-sm text-ink/85 md:text-base">
                            <Check className="w-4 h-4 text-indigo shrink-0 mt-0.5" strokeWidth={2.5} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="border border-ink/15 bg-off-white p-5 md:p-6">
                      <div className="mono text-[10px] tracking-widest text-blood">NO HACEMOS</div>
                      <ul className="mt-4 space-y-3">
                        {service.noHacemos.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-sm text-ink/85 md:text-base">
                            <X className="w-4 h-4 text-blood shrink-0 mt-0.5" strokeWidth={2.5} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 border border-ink/15 bg-off-white p-5 md:p-6">
                    <div className="mono text-[10px] tracking-widest text-ink/60">CRONOGRAMA</div>
                    <ol className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-4">
                      {service.proceso.map((step, idx) => (
                        <li key={idx} className="flex flex-col">
                          <span className="mono text-[10px] tracking-widest text-ink">{step.dia}</span>
                          <span className="mt-2 font-display text-base text-ink md:text-lg">{step.titulo}</span>
                          <span className="mt-2 text-xs text-ink/75 leading-relaxed">{step.detalle}</span>
                        </li>
                      ))}
                    </ol>
                  </div>

                  <div className="mt-6">
                    <ManifestoBlock variant="pull-quote" attribution="hq.leads">
                      {service.pullQuote}
                    </ManifestoBlock>
                  </div>
                </div>

                {i < services.length - 1 && (
                  <div className="lg:col-span-12 mt-4 border-b-2 border-dashed border-ink/15" />
                )}
              </article>
            );
          })}
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative isolate overflow-hidden border-t border-cream/10 bg-ink py-20 text-cream halftone-overlay md:py-28">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-20 top-12 h-72 w-72 rounded-full bg-indigo/40 blur-3xl"
        />
        <div className="relative z-10 mx-auto w-full max-w-[1100px] px-6 md:px-12 text-center">
          <div className="mono text-[11px] tracking-widest text-cream/60">¿NO SABÉS CUÁL?</div>
          <h2 className="mt-4 display cmyk-shift-strong leading-[0.95] text-cream text-[clamp(2.25rem,6vw,4.5rem)]">
            Empezamos con{" "}
            <span className="serif-italic font-normal normal-case">auditoría gratis.</span>
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-base text-cream/85 md:text-lg">
            30 minutos. Te decimos honestamente si podemos ayudarte y por dónde empezar. Sin pitch.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/agenda"
              className="inline-flex items-center gap-3 bg-cream text-ink px-7 py-4 mono text-xs md:text-sm uppercase tracking-[0.2em] transition hover:bg-acid"
            >
              AGENDÁ AUDITORÍA
              <ArrowRight className="w-4 h-4" strokeWidth={2} />
            </Link>
            <a
              href="https://wa.me/5493413103383"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-cream/40 text-cream px-6 py-4 mono text-xs md:text-sm uppercase tracking-[0.2em] transition hover:border-cream hover:bg-cream/10"
            >
              WhatsApp
            </a>
          </div>
          <p className="mt-6 mono text-[10px] tracking-widest text-cream/55">
            30 MIN · SIN COMPROMISO · POR ZOOM O MEET
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 flex justify-center">
        <Barcode code="HQL2026MTD" label="VOL.01 / TRABAJAMOS" />
      </div>

      <Newsletter />
    </div>
  );
}
