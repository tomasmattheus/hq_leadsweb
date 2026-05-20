import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { CropMarks } from "@/components/CropMarks";
import { Sticker } from "@/components/Sticker";
import { MarkerAnnotation } from "@/components/MarkerAnnotation";
import { Barcode } from "@/components/Barcode";
import { Newsletter } from "@/components/Newsletter";
import { ManifestoBlock } from "@/components/ManifestoBlock";
import { issues, getIssueBySlug } from "@/lib/content/issues";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return issues.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const issue = getIssueBySlug(slug);
  if (!issue) return { title: "Issue no encontrado" };
  return {
    title: `${issue.headline.replace(/[.,]$/, "")} · Issue ${issue.number}`,
    description: `${issue.section} · ${issue.date}`,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const issue = getIssueBySlug(slug);
  if (!issue) notFound();

  const [before, after] = issue.headline.split(issue.italicWord);
  const related = issues
    .filter((i) => i.section === issue.section && i.id !== issue.id)
    .slice(0, 3);

  return (
    <div className="relative bg-cream text-ink">
      <article className="relative max-w-[1100px] mx-auto px-6 md:px-12 pt-20 md:pt-28 pb-12 md:pb-16 crop-marks">
        <CropMarks color="light-gray" margin={24} />

        <div className="border-b-2 border-ink pb-3 mb-2 flex flex-wrap items-center justify-between gap-3 mono text-[10px] md:text-[11px] tracking-[0.2em] uppercase text-ink">
          <Link href="/blog" className="font-bold transition hover:opacity-70 inline-flex items-center gap-1.5">
            <ArrowLeft className="w-3 h-3" strokeWidth={2.5} /> BLOG
          </Link>
          <span className="hidden md:inline">{issue.section} · {issue.date}</span>
          <span className="font-bold">ISSUE {issue.number}</span>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-2 mb-12 md:mb-16 mono text-[9px] tracking-widest text-ink/65">
          <span>{issue.section}</span>
          <span className="hidden sm:inline">{issue.weekday} · {issue.date}</span>
          <span>ISSN 0001-HQL</span>
        </div>

        <header className="relative">
          <div className="absolute -top-4 right-0 hidden md:block">
            {issue.sticker ? (
              <Sticker text={issue.sticker.text} color={issue.sticker.color} rotation={issue.rotation ?? -4} size="md" />
            ) : null}
          </div>

          <div className="mono text-[11px] tracking-widest text-ink/60">{issue.section}</div>
          <h1 className="mt-4 display cmyk-shift leading-[0.92] text-ink text-[clamp(2.5rem,7vw,5.5rem)]">
            {before}
            <span className="serif-italic font-normal normal-case">{issue.italicWord}</span>
            {after}
          </h1>

          <div className="mt-8 flex flex-wrap items-center gap-4 mono text-[10px] tracking-widest text-ink/60">
            <span>POR HQ.LEADS</span>
            <span>·</span>
            <span>{issue.weekday} {issue.date}</span>
            <span>·</span>
            <span>LECTURA ESTIMADA · 04 MIN</span>
          </div>
        </header>

        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          <aside className="md:col-span-3 md:order-2">
            <div className="md:sticky md:top-24 space-y-6">
              <div className="border-t border-ink/15 pt-4">
                <div className="mono text-[10px] tracking-widest text-ink/55">SECCIÓN</div>
                <div className="mt-2 font-display text-base text-ink">{issue.section}</div>
              </div>
              <div>
                <div className="mono text-[10px] tracking-widest text-ink/55">PUBLICADO</div>
                <div className="mt-2 font-display text-base text-ink">{issue.date}</div>
              </div>
              <div>
                <div className="mono text-[10px] tracking-widest text-ink/55">ISSUE</div>
                <div className="mt-2 font-display text-base text-ink">VOL.01 / {issue.number}</div>
              </div>
            </div>
          </aside>

          <div className="md:col-span-9 md:order-1">
            <div className="space-y-6 text-base md:text-lg text-ink/85 leading-relaxed">
              <p className="display text-xl md:text-2xl text-ink leading-snug normal-case font-medium">
                Este issue está en producción.{" "}
                <span className="serif-italic font-normal">próximamente disponible.</span>
              </p>

              <p>
                Mientras tanto, podés agendar una auditoría gratis y vamos directo al diagnóstico de tu cuenta. En 30 minutos analizamos qué está pasando, qué se puede mejorar y cómo.
              </p>

              <p>
                Si querés que te avise cuando salga el artículo completo, suscribite a la newsletter más abajo. Mandamos un email por semana — sin spam, sin promociones.
              </p>
            </div>

            <div className="mt-10">
              <ManifestoBlock variant="pull-quote" attribution="hq.leads">
                {issue.section === "MOTOR DE ADS"
                  ? "Datos antes que adjetivos. Si no se mide, no se opina."
                  : issue.section === "MENTALIDAD"
                  ? "Ajedrez no ruleta. Estrategia antes de gasto."
                  : issue.section === "DIAGNÓSTICO"
                  ? "El sistema que no ves es el que te gana."
                  : "Sin chamuyos. Sin vueltas. Por la posta."}
              </ManifestoBlock>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-3 border-t border-ink/15 pt-8">
              <Link href="/agenda" className="pill pill-indigo px-6 py-3 text-xs">
                Pedí auditoría →
              </Link>
              <Link href="/blog" className="pill pill-outline px-6 py-3 text-xs">
                Ver todos los issues
              </Link>
              <div className="hidden md:block ml-4">
                <MarkerAnnotation text="O ESCRIBINOS DIRECTO" arrow="left" rotation={-3} />
              </div>
            </div>
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="relative max-w-[1100px] mx-auto px-6 md:px-12 pb-20 md:pb-28">
          <div className="border-t border-ink/15 pt-10">
            <div className="mb-6 flex items-end justify-between">
              <div className="mono text-[11px] tracking-widest text-ink/60">
                MÁS DE {issue.section}
              </div>
              <Link
                href="/blog"
                className="mono text-[10px] tracking-widest text-ink transition hover:opacity-70"
              >
                VER TODOS →
              </Link>
            </div>
            <ul className="divide-y divide-ink/15">
              {related.map((r) => {
                const [b, a] = r.headline.split(r.italicWord);
                return (
                  <li key={r.id}>
                    <Link
                      href={`/blog/${r.slug}`}
                      className="group grid grid-cols-12 items-center gap-4 py-5 transition hover:bg-off-white"
                    >
                      <span className="col-span-2 md:col-span-1 mono text-[10px] tracking-widest text-ink/55">
                        {r.number}
                      </span>
                      <span className="col-span-10 md:col-span-9 display text-base normal-case leading-tight text-ink md:text-lg">
                        {b}
                        <span className="serif-italic font-normal">{r.italicWord}</span>
                        {a}
                      </span>
                      <span className="col-span-12 md:col-span-2 mono text-[10px] tracking-widest text-ink/55 md:text-right transition group-hover:translate-x-1">
                        ABRIR →
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="mt-10 flex justify-center">
            <Barcode code={`HQL2026I${issue.number}`} label={`ISSUE ${issue.number}`} />
          </div>
        </section>
      )}

      <Newsletter />
    </div>
  );
}
