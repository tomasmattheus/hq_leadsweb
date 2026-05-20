import type { Metadata } from "next";
import { CropMarks } from "@/components/CropMarks";
import { Sticker } from "@/components/Sticker";
import { MagazineCard } from "@/components/MagazineCard";
import { MarkerAnnotation } from "@/components/MarkerAnnotation";
import { getIssuesBySection, sectionMeta } from "@/lib/content/issues";

export const metadata: Metadata = {
  title: "Mentalidad — cómo pensamos antes de gastar",
  description:
    "Sección Mentalidad de la revista hq.leads. Principios operativos, mindset y forma de jugar.",
};

export default function MentalidadPage() {
  const sectionIssues = getIssuesBySection("MENTALIDAD");
  const meta = sectionMeta.MENTALIDAD;

  return (
    <section className="relative bg-cream pb-24 pt-16 md:pt-24 crop-marks">
      <CropMarks color="light-gray" margin={24} />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 md:px-12">
        <header className="grid grid-cols-12 gap-6 border-b border-ink/15 pb-10">
          <div className="col-span-12 md:col-span-8">
            <div className="mono text-[11px] text-ink/60">SECCIÓN 02 · MENTALIDAD</div>
            <h1 className="mt-3 display cmyk-shift leading-[0.92] text-ink text-[clamp(2.5rem,7vw,5rem)]">
              MENTALIDAD <span className="serif-italic font-normal normal-case">primero.</span>
            </h1>
            <p className="mt-4 max-w-xl text-ink/80">
              {meta.description} Antes de gastar un peso en pauta, mapeamos el tablero.
            </p>
            <div className="mt-6 inline-block">
              <MarkerAnnotation text="AJEDREZ NO RULETA" arrow="left" />
            </div>
          </div>
          <div className="col-span-12 md:col-span-4 md:text-right">
            <Sticker text="AJEDREZ NO RULETA" color="yellow" rotation={-4} size="md" />
          </div>
        </header>

        {/* Grid editorial */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {sectionIssues.map((issue, i) => (
            <MagazineCard key={issue.id} issue={issue} index={i} />
          ))}
        </div>

        {sectionIssues.length === 0 && (
          <div className="border border-ink/15 bg-off-white p-10 text-center mono text-[11px] text-ink/60">
            ISSUES PRÓXIMAMENTE.
          </div>
        )}

        <div className="mt-16 flex flex-wrap items-end justify-between gap-4 border-t border-ink/15 pt-6 mono text-[10px] text-ink/60">
          <span>{meta.mantra}</span>
          <span>HQ.LEADS / VOL.01 / MENTALIDAD / {sectionIssues.length} ISSUES</span>
        </div>
      </div>
    </section>
  );
}
