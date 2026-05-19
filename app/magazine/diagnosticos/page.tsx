import type { Metadata } from "next";
import Link from "next/link";
import { Sticker } from "@/components/Sticker";
import { ExpedienteRow, ExpedienteHeader } from "@/components/ExpedienteRow";
import { CropMarks } from "@/components/CropMarks";
import { getIssuesBySection, sectionMeta } from "@/lib/content/issues";

export const metadata: Metadata = {
  title: "Diagnósticos — casos analizados con criterio técnico",
  description:
    "Sección Diagnósticos de la revista hq.leads. Casos reales de pauta y growth: qué falló, por qué, cómo se corrige.",
};

type Caso = {
  caso: string;
  industria: string;
  inversion: string;
  causa: string;
  estado: "ARCHIVADO" | "EN DIAGNÓSTICO" | "OPERANDO";
  href?: string;
};

const CASOS: Caso[] = [
  {
    caso: "Cliente retail (anónimo)",
    industria: "RETAIL",
    inversion: "$1.800.000",
    causa: "Pauta sin tracking. 9 meses con freelance sin reporte.",
    estado: "EN DIAGNÓSTICO",
  },
  {
    caso: "Marca de muebles premium",
    industria: "DECORACIÓN",
    inversion: "$640.000",
    causa: "Creativos sin ICP. CTR 0.3%. 4 meses.",
    estado: "ARCHIVADO",
  },
  {
    caso: "Constructora MX",
    industria: "CONSTRUCCIÓN",
    inversion: "$2.300.000",
    causa: "Lead form sin filtro. 2.700 leads basura.",
    estado: "ARCHIVADO",
  },
  {
    caso: "E-commerce indumentaria",
    industria: "RETAIL",
    inversion: "$320.000",
    causa: "Catálogo desincronizado con feed. Pixel mal seteado.",
    estado: "OPERANDO",
  },
  {
    caso: "Estudio jurídico",
    industria: "SERVICIOS B2B",
    inversion: "$480.000",
    causa: "Google Ads sin negative keywords. CPL × 6.",
    estado: "ARCHIVADO",
  },
];

export default function DiagnosticosPage() {
  const sectionIssues = getIssuesBySection("DIAGNÓSTICO");
  const meta = sectionMeta["DIAGNÓSTICO"];
  const ultima = sectionIssues[sectionIssues.length - 1];

  return (
    <section className="relative isolate overflow-hidden bg-[#0A0A0A] pb-24 pt-16 text-cream md:pt-24">
      <CropMarks color="cream" margin={24} />

      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-32 h-[480px] w-[480px] rounded-full bg-indigo/30 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-10 top-12 h-40 w-40 rotate-12 rounded-full bg-blood/40 blur-2xl"
      />

      <div className="pointer-events-none absolute -left-10 top-1/2 hidden -translate-y-1/2 -rotate-90 md:block">
        <span className="mono text-xs uppercase tracking-[0.4em] text-cream/50">
          DOSSIER TÉCNICO · LECTURA OPERATIVA
        </span>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 md:px-12">
        <header className="flex flex-wrap items-end justify-between gap-6 border-b border-cream/15 pb-10">
          <div>
            <div className="mono text-[11px] text-cream/60">SECCIÓN 04 · DIAGNÓSTICOS</div>
            <h1 className="mt-3 display leading-[0.92] text-cream text-[clamp(2.5rem,7vw,5.5rem)]">
              DIAGNÓSTICOS.
            </h1>
            <p className="mt-4 max-w-xl text-cream/80">
              Casos reales analizados con criterio técnico. Industria, inversión, diagnóstico, estado. {meta.description}
            </p>
          </div>
          <Sticker text="DOSSIER TÉCNICO" color="red" rotation={-3} size="md" />
        </header>

        <div className="mt-12 grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-8">
            <ExpedienteHeader dark />
            {CASOS.map((c, i) => (
              <ExpedienteRow key={c.caso} {...c} dark index={i} />
            ))}

            <div className="mt-12">
              <Link
                href="/agenda"
                className="pill px-6 py-3 bg-cream text-ink"
              >
                Pedí un diagnóstico gratis →
              </Link>
            </div>
          </div>

          <aside className="col-span-12 md:col-span-4">
            <div className="border border-cream/20 bg-cream/5 p-6">
              <div className="mono text-[10px] text-cream/60">ÚLTIMO DIAGNÓSTICO AÑADIDO</div>
              {ultima ? (
                <>
                  <h2 className="mt-3 display text-2xl normal-case leading-tight text-cream md:text-3xl">
                    {ultima.headline.split(ultima.italicWord)[0]}
                    <span className="serif-italic font-normal">{ultima.italicWord}</span>
                    {ultima.headline.split(ultima.italicWord)[1]}
                  </h2>
                  <div className="mt-4 mono text-[10px] text-cream/60">
                    ISSUE {ultima.number} · {ultima.date}
                  </div>
                  <Link
                    href="/agenda"
                    className="mt-6 inline-flex items-center gap-2 mono text-[11px] text-cream underline-offset-4 hover:underline"
                  >
                    PEDÍ EL DIAGNÓSTICO COMPLETO →
                  </Link>
                </>
              ) : (
                <p className="mt-3 text-cream/70">Próximamente.</p>
              )}
            </div>

            <div className="mt-8 mono text-[10px] text-cream/50">
              <p>
                Cada diagnóstico se publica con permiso del cliente o anonimizado. La inversión es real, los nombres no necesariamente.
              </p>
            </div>
          </aside>
        </div>

        <div className="mt-16 flex flex-wrap items-end justify-between gap-4 border-t border-cream/15 pt-6 mono text-[10px] text-cream/50">
          <span>{meta.mantra}</span>
          <span>HQ.LEADS / VOL.01 / DIAGNÓSTICOS / {sectionIssues.length} ISSUES</span>
        </div>
      </div>
    </section>
  );
}
