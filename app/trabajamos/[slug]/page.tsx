import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { CropMarks } from "@/components/CropMarks";
import { Sticker } from "@/components/Sticker";
import { MarkerAnnotation } from "@/components/MarkerAnnotation";
import { ServiceDetail } from "@/components/ServiceDetail";
import { ManifestoBlock } from "@/components/ManifestoBlock";
import { Newsletter } from "@/components/Newsletter";
import { getService, getServiceSlugs } from "@/lib/content/services";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Servicio no encontrado" };
  return {
    title: `${service.tag} · Trabajamos`,
    description: service.subtitle,
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <div className="relative bg-cream text-ink">
      <section className="relative max-w-7xl mx-auto px-6 md:px-12 pt-20 md:pt-28 pb-16 md:pb-24 crop-marks">
        <CropMarks color="light-gray" margin={24} />

        <div className="flex items-center justify-between mono text-[11px] tracking-widest text-mid-gray uppercase mb-10 md:mb-14">
          <Link href="/trabajamos" className="hover:text-ink transition-colors">
            ← TRABAJAMOS
          </Link>
          <span>
            SECCIÓN / TRABAJAMOS / {service.number} {service.tag}
          </span>
        </div>

        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end">
          <div className="lg:col-span-8">
            <h1 className="display text-[14vw] md:text-[8.5rem] lg:text-[10rem] leading-[0.88] text-ink tracking-tight">
              {service.title}
              <br />
              <span className="serif-italic font-normal normal-case">
                {service.italicWord}
              </span>
            </h1>
          </div>
          <div className="lg:col-span-4 relative">
            <div className="absolute -top-16 right-0 hidden md:block">
              <Sticker
                color="red"
                text={service.tag}
                rotation={6}
                size="md"
              />
            </div>
            <p className="font-body text-base md:text-lg text-mid-gray leading-relaxed lg:pl-6">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      <section className="relative max-w-5xl mx-auto px-6 md:px-12 pb-24 md:pb-32">
        <ServiceDetail
          hacemos={service.hacemos}
          noHacemos={service.noHacemos}
          proceso={service.proceso}
        />
      </section>

      <section className="relative max-w-5xl mx-auto px-6 md:px-12">
        <ManifestoBlock variant="pull-quote" attribution="hq.leads">
          {service.pullQuote}
        </ManifestoBlock>
      </section>

      <section className="relative max-w-7xl mx-auto px-6 md:px-12 pb-24 md:pb-32">
        <div className="flex items-end justify-between mb-10 md:mb-14">
          <div>
            <div className="mono text-[10px] md:text-xs tracking-[0.25em] text-mid-gray mb-3">
              / CASOS REALES
            </div>
            <h2 className="display text-4xl md:text-6xl text-ink leading-tight">
              Casos{" "}
              <span className="serif-italic font-normal normal-case">reales.</span>
            </h2>
          </div>
          <div className="hidden md:block">
            <MarkerAnnotation text="ANÓNIMOS" arrow="down" rotation={-3} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {service.casos.map((caso, i) => (
            <Link
              key={i}
              href={caso.href}
              className="group block bg-off-white border border-ink/10 p-6 md:p-8 hover:border-indigo transition-colors"
            >
              <div className="mono text-[10px] tracking-[0.25em] text-mid-gray mb-4">
                CASO {String(i + 1).padStart(2, "0")} · {caso.industria.toUpperCase()}
              </div>
              <h3 className="font-display font-bold text-xl md:text-2xl text-ink leading-tight mb-4">
                {caso.cliente}
              </h3>
              <p className="font-serif italic text-lg md:text-xl text-ink leading-snug mb-6">
                {caso.resultado}
              </p>
              <span className="mono text-xs uppercase tracking-wider text-ink inline-flex items-center gap-2 border-b border-ink pb-1 group-hover:border-indigo group-hover:text-indigo transition-colors">
                Leer autopsia
                <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.75} />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="relative bg-ink text-cream py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <div className="mono text-[10px] md:text-xs tracking-[0.25em] text-cream/60 mb-6">
            / CTA FINAL
          </div>
          <h2 className="display text-4xl md:text-6xl lg:text-7xl text-cream leading-[1] tracking-tight mb-10">
            Auditá tu cuenta{" "}
            <span className="serif-italic font-normal normal-case">gratis.</span>
          </h2>
          <Link
            href="/agenda"
            className="inline-flex items-center gap-3 bg-cream text-ink px-7 py-4 mono text-xs md:text-sm uppercase tracking-[0.2em] hover:bg-acid transition-colors"
          >
            AUDITÁ TU CUENTA
            <ArrowRight className="w-4 h-4" strokeWidth={1.75} />
          </Link>
          <p className="mono text-[11px] text-cream/60 mt-6 tracking-wider">
            30 MINUTOS · SIN COMPROMISO
          </p>
        </div>
      </section>

      <Newsletter variant="cream" />
    </div>
  );
}
