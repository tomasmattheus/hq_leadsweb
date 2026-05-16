import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ServiceRow } from "@/components/ServiceRow";
import { SectionHeader } from "@/components/SectionHeader";
import { Sticker } from "@/components/Sticker";
import { MarkerAnnotation } from "@/components/MarkerAnnotation";
import { CropMarks } from "@/components/CropMarks";
import { Highlighter } from "@/components/Highlighter";
import { Newsletter } from "@/components/Newsletter";
import { services } from "@/lib/content/services";

export const metadata: Metadata = {
  title: "Cómo trabajamos",
  description:
    "Ingeniería comercial para PyMES con producto. Performance, automatización IA, web y contenido — sin chamuyo.",
};

const labelByTag: Record<string, string> = {
  PERFORMANCE: "Performance",
  "AUTOMATIZACIÓN IA": "Automatización IA",
  WEB: "Web",
  "CONTENIDO & MARCA": "Contenido",
};

export default function TrabajamosPage() {
  return (
    <div className="relative bg-cream text-ink">
      <section className="relative max-w-7xl mx-auto px-6 md:px-12 pt-20 md:pt-28 pb-12 crop-marks">
        <CropMarks color="light-gray" margin={24} />
        <SectionHeader
          tag="VOL.01 / SECCIÓN — TRABAJAMOS"
          headline="CÓMO"
          italicWord="trabajamos."
          meta="ROSARIO · 2026"
        />
      </section>

      <section className="relative max-w-7xl mx-auto px-6 md:px-12 pb-20 md:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] bg-ink overflow-hidden">
              <div
                className="absolute inset-0 opacity-90"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 1px 1px, #F0EBE0 1px, transparent 0)",
                  backgroundSize: "6px 6px",
                  maskImage:
                    "linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.45) 70%, rgba(0,0,0,0.05) 100%)",
                  WebkitMaskImage:
                    "linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.45) 70%, rgba(0,0,0,0.05) 100%)",
                }}
                aria-hidden
              />
              <div className="absolute inset-0 flex items-end p-6">
                <div className="mono text-[10px] tracking-[0.25em] text-cream/80">
                  / EDITORIAL · PLACEHOLDER HALFTONE
                </div>
              </div>
              <div className="absolute top-6 right-6">
                <Sticker color="yellow" text="VOL.01" rotation={-5} size="sm" />
              </div>
            </div>
            <div className="mono text-[10px] md:text-xs tracking-[0.25em] text-mid-gray mt-4">
              DESDE 2024 · ROSARIO, AR
            </div>
          </div>

          <div className="lg:col-span-7 lg:pl-8">
            <p className="display text-3xl md:text-5xl lg:text-6xl text-ink leading-[1.05] tracking-tight mb-8 normal-case font-medium">
              Diseñamos y operamos sistemas comerciales para PyMES con producto que{" "}
              <Highlighter color="yellow">ya funciona offline</Highlighter>
              <span className="relative inline-block ml-2 align-middle">
                <MarkerAnnotation text="EL FILTRO" arrow="left" rotation={-6} />
              </span>
              .
            </p>

            <div className="max-w-xl space-y-5">
              <p className="font-body text-base md:text-lg text-mid-gray leading-relaxed">
                Si tu producto vende en la calle, en el local, en el boca a boca —
                el canal digital es ingeniería. No magia. Pixel limpio, audiencias
                reales, creativos que paran el scroll, automatizaciones que corren
                solas y reportes cruzados con tu CRM.
              </p>
              <p className="font-body text-base md:text-lg text-mid-gray leading-relaxed">
                Sin agencia genérica. Sin promesas de ROAS sin haber visto tu
                cuenta. Sin templates que se notan a la legua.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative max-w-7xl mx-auto px-6 md:px-12 pb-20 md:pb-28">
        <div className="mono text-[10px] md:text-xs tracking-[0.25em] text-mid-gray mb-10 md:mb-14">
          / 04 SERVICIOS · UNO POR FRENTE
        </div>

        <div className="border-b border-ink/15">
          {services.map((service, i) => (
            <ServiceRow
              key={service.slug}
              number={service.number}
              tag={service.tag}
              title={labelByTag[service.tag] ?? service.tag}
              subtitle={service.subtitle}
              href={`/trabajamos/${service.slug}`}
              index={i}
            />
          ))}
        </div>
      </section>

      <section className="relative max-w-4xl mx-auto px-6 md:px-12 pb-20 md:pb-32 text-center">
        <p className="display text-3xl md:text-5xl text-ink leading-[1.05] tracking-tight mb-8 normal-case font-medium">
          ¿No sabés cuál?{" "}
          <span className="serif-italic font-normal">Empezamos con auditoría gratis.</span>
        </p>
        <Link
          href="/agenda"
          className="pill pill-black px-7 py-4 text-xs md:text-sm"
        >
          AGENDÁ AUDITORÍA
          <ArrowRight className="w-4 h-4" strokeWidth={1.75} />
        </Link>
        <p className="mono text-[11px] text-mid-gray mt-6 tracking-wider">
          30 MIN · SIN COMPROMISO · POR ZOOM O MEET
        </p>
      </section>

      <Newsletter />
    </div>
  );
}
