import type { Metadata } from "next";
import Link from "next/link";
import { CropMarks } from "@/components/CropMarks";
import { Sticker } from "@/components/Sticker";
import { Highlighter } from "@/components/Highlighter";
import { getIssuesBySection, sectionMeta, type Issue } from "@/lib/content/issues";

export const metadata: Metadata = {
  title: "Hot Take — columna fuerte por semana, sin filtro",
  description:
    "Sección Hot Take de la revista hq.leads. Una columna por semana con la opinión cruda sobre marketing y growth.",
};

const ANGULOS: Record<string, string> = {
  "pautar-mas-no-trae-clientes":
    "El error más caro del paid media argentino: confundir presupuesto con estrategia.",
};

export default function HotTakePage() {
  const sectionIssues = getIssuesBySection("HOT TAKE");
  const meta = sectionMeta["HOT TAKE"];

  return (
    <section className="relative bg-cream pb-24 pt-16 md:pt-24 crop-marks">
      <CropMarks color="light-gray" margin={24} />

      <div className="relative z-10 mx-auto w-full max-w-[1100px] px-6 md:px-12">
        <header className="flex flex-wrap items-end justify-between gap-6 border-b border-ink/15 pb-10">
          <div>
            <div className="mono text-[11px] text-ink/60">SECCIÓN 08 · HOT TAKE</div>
            <h1 className="mt-3 display cmyk-shift leading-[0.92] text-ink text-[clamp(2.5rem,7vw,5rem)]">
              HOT <span className="serif-italic font-normal normal-case">take.</span>
            </h1>
            <p className="mt-4 max-w-xl text-ink/80">
              {meta.description} Si te molesta lo que decimos, probablemente es porque tiene razón.
            </p>
          </div>
          <Sticker text="SIN CHAMUYOS" color="red" rotation={-4} size="md" />
        </header>

        {sectionIssues.length === 0 ? (
          <div className="mt-12 border border-ink/15 bg-off-white p-10 text-center mono text-[11px] text-ink/60">
            ISSUES PRÓXIMAMENTE.
          </div>
        ) : (
          <div className="mt-12 space-y-20">
            {sectionIssues.map((issue, i) => (
              <HotTakeColumn key={issue.id} issue={issue} index={i} />
            ))}
          </div>
        )}

        <div className="mt-16 flex flex-wrap items-end justify-between gap-4 border-t border-ink/15 pt-6 mono text-[10px] text-ink/60">
          <span>{meta.mantra}</span>
          <span>HQ.LEADS / VOL.01 / HOT TAKE / {sectionIssues.length} ISSUES</span>
        </div>
      </div>
    </section>
  );
}

function HotTakeColumn({ issue, index }: { issue: Issue; index: number }) {
  const [before, after] = issue.headline.split(issue.italicWord);
  const angulo = ANGULOS[issue.slug];

  return (
    <article className="grid grid-cols-12 gap-6 border-t border-ink/15 pt-12 first:border-t-0 first:pt-0">
      <div className="col-span-12 md:col-span-2">
        <div className="display text-5xl text-ink md:text-7xl">{String(index + 1).padStart(2, "0")}.</div>
        <div className="mt-2 mono text-[10px] text-ink/60">{issue.date}</div>
      </div>

      <div className="col-span-12 md:col-span-10">
        <div className="mono text-[10px] text-ink/60">ISSUE {issue.number}</div>

        <blockquote className="mt-4">
          <span className="block display leading-[0.98] tracking-[-0.02em] text-ink text-[clamp(1.75rem,5vw,3.5rem)]">
            <span aria-hidden className="serif-italic font-normal text-blood">“</span>
            {before}
            <Highlighter color="yellow">{issue.italicWord}</Highlighter>
            {after}
            <span aria-hidden className="serif-italic font-normal text-blood">”</span>
          </span>
        </blockquote>

        {angulo && (
          <p className="mt-6 max-w-2xl text-base text-ink/80 md:text-lg">{angulo}</p>
        )}

        <div className="mt-6">
          <Link
            href="/agenda"
            className="inline-flex items-center gap-2 mono text-[11px] text-ink underline-offset-4 transition hover:underline"
          >
            CONTAME MÁS →
          </Link>
        </div>
      </div>
    </article>
  );
}
