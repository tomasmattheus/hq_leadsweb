import type { Metadata } from "next";
import { CropMarks } from "@/components/CropMarks";
import { Sticker } from "@/components/Sticker";
import { ManualRow } from "@/components/ManualRow";
import { getIssuesBySection, sectionMeta } from "@/lib/content/issues";

export const metadata: Metadata = {
  title: "Manual de Campo — procesos paso a paso",
  description:
    "Sección Manual de Campo de la revista hq.leads. Procesos prácticos paso a paso para hacerlo vos.",
};

const SUBTITLES: Record<string, { subtitle: string; steps: number }> = {
  "buyer-persona-30-min": {
    subtitle: "Plantilla + workflow para llegar al ICP que justifica cada peso de pauta.",
    steps: 7,
  },
  "auditar-cuenta-meta-15-min": {
    subtitle: "24 chequeos que diagnostican si tu cuenta sangra plata.",
    steps: 24,
  },
};

export default function ManualDeCampoPage() {
  const sectionIssues = getIssuesBySection("MANUAL DE CAMPO");
  const meta = sectionMeta["MANUAL DE CAMPO"];

  return (
    <section className="relative bg-cream pb-24 pt-16 md:pt-24 crop-marks">
      <CropMarks color="light-gray" margin={24} />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 md:px-12">
        <header className="flex flex-wrap items-end justify-between gap-6 border-b border-ink/15 pb-10">
          <div>
            <div className="mono text-[11px] text-ink/60">SECCIÓN 06 · MANUAL DE CAMPO</div>
            <h1 className="mt-3 display text-[12vw] leading-[0.9] text-ink md:text-[6.5rem]">
              MANUAL <span className="serif-italic font-normal normal-case">de campo.</span>
            </h1>
            <p className="mt-4 max-w-xl text-ink/80">{meta.description}</p>
          </div>
          <Sticker text="MANUAL DE CAMPO" color="yellow" rotation={-4} size="md" />
        </header>

        <div className="mt-12 grid grid-cols-12 gap-6">
          <aside className="col-span-12 md:col-span-3 md:sticky md:top-24 md:self-start">
            <div className="mono text-[10px] text-ink/60">CÓMO USAR EL MANUAL</div>
            <ol className="mt-4 space-y-3 text-sm text-ink/80">
              <li className="flex gap-2">
                <span className="mono text-ink/60">01.</span>
                <span>Cada issue es un proceso completo, copy-paste-able.</span>
              </li>
              <li className="flex gap-2">
                <span className="mono text-ink/60">02.</span>
                <span>Tiene checklist al final + plantilla descargable.</span>
              </li>
              <li className="flex gap-2">
                <span className="mono text-ink/60">03.</span>
                <span>Si te trabás, hay un drop asociado para acelerar.</span>
              </li>
            </ol>
          </aside>

          <div className="col-span-12 md:col-span-9">
            {sectionIssues.map((issue, i) => {
              const extra = SUBTITLES[issue.slug] ?? {
                subtitle: "Proceso paso a paso de 30 minutos.",
                steps: 8,
              };
              return (
                <ManualRow
                  key={issue.id}
                  number={String(i + 1).padStart(2, "0")}
                  title={issue.headline}
                  italicWord={issue.italicWord}
                  subtitle={extra.subtitle}
                  stepCount={extra.steps}
                  href="/agenda"
                  index={i}
                />
              );
            })}
          </div>
        </div>

        <div className="mt-16 flex flex-wrap items-end justify-between gap-4 border-t border-ink/15 pt-6 mono text-[10px] text-ink/60">
          <span>{meta.mantra}</span>
          <span>HQ.LEADS / VOL.01 / MANUAL DE CAMPO / {sectionIssues.length} ISSUES</span>
        </div>
      </div>
    </section>
  );
}
