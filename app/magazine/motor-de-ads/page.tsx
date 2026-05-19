import type { Metadata } from "next";
import { CropMarks } from "@/components/CropMarks";
import { Sticker } from "@/components/Sticker";
import { DataMagazineSection } from "@/components/DataMagazineSection";
import { getIssuesBySection, sectionMeta } from "@/lib/content/issues";

export const metadata: Metadata = {
  title: "Motor de Ads — métricas y benchmarks reales",
  description:
    "Sección Motor de Ads de la revista hq.leads. CPL, CPA, ROAS, presupuestos y benchmarks por industria.",
};

export default function MotorDeAdsPage() {
  const sectionIssues = getIssuesBySection("MOTOR DE ADS");
  const meta = sectionMeta["MOTOR DE ADS"];

  return (
    <section className="relative bg-cream pb-24 pt-16 md:pt-24 crop-marks">
      <CropMarks color="light-gray" margin={24} />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 md:px-12">
        <header className="flex flex-wrap items-end justify-between gap-6 border-b border-ink/15 pb-10">
          <div>
            <div className="mono text-[11px] text-ink/60">SECCIÓN 03 · MOTOR DE ADS</div>
            <h1 className="mt-3 display leading-[0.92] text-ink text-[clamp(2.5rem,7vw,5rem)]">
              MOTOR <span className="serif-italic font-normal normal-case">de ads.</span>
            </h1>
            <p className="mt-4 max-w-xl text-ink/80">{meta.description}</p>
          </div>
          <Sticker text="MOTOR DE ADS" color="yellow" rotation={-4} size="md" />
        </header>
      </div>

      <DataMagazineSection
        heroLabel="CPL PROMEDIO 2026 · INDUSTRIAS PYME ARG"
        heroValue="$2.300"
        heroCaption="Lo que cuesta hoy un lead bueno en Argentina, en promedio."
        highlightedWord="bueno"
        chartData={[
          { label: "CONSTRUCCIÓN", value: "$3.800" },
          { label: "DECORACIÓN", value: "$2.900" },
          { label: "RETAIL", value: "$1.450" },
          { label: "SERVICIOS B2B", value: "$4.200" },
          { label: "E-COMMERCE", value: "$1.100" },
          { label: "SALUD B2C", value: "$2.700" },
        ]}
        issues={sectionIssues}
        basePath="/magazine/motor-de-ads"
      />

      <div className="mx-auto w-full max-w-[1440px] border-t border-ink/15 px-6 py-10 md:px-12">
        <div className="flex flex-wrap items-end justify-between gap-4 mono text-[10px] text-ink/60">
          <span>{meta.mantra}</span>
          <span>HQ.LEADS / VOL.01 / MOTOR DE ADS / {sectionIssues.length} ISSUES</span>
        </div>
      </div>
    </section>
  );
}
