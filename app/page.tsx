import Link from "next/link";
import { Hero } from "@/components/Hero";
import { MagazineCard } from "@/components/MagazineCard";
import { ExpedienteRow, ExpedienteHeader } from "@/components/ExpedienteRow";
import { DropTicketPreview } from "@/components/DropTicketPreview";
import { CropMarks } from "@/components/CropMarks";
import { Sticker } from "@/components/Sticker";
import { MarkerAnnotation } from "@/components/MarkerAnnotation";
import { SectionHeader } from "@/components/SectionHeader";
import { Newsletter } from "@/components/Newsletter";
import { issues, type Issue } from "@/lib/content/issues";

export default function HomePage() {
  const previewIssues: Issue[] = [
    issues.find((i) => i.id === "003")!,
    issues.find((i) => i.id === "007")!,
    issues.find((i) => i.id === "012")!,
    issues.find((i) => i.id === "001")!,
  ];

  return (
    <>
      <Hero
        headline="SISTEMAS QUE VENDEN mientras dormís."
        italicWord="mientras dormís"
        subtitle="Ingeniería comercial con IA para PyMES con producto. Diseñamos, instalamos y operamos máquinas de adquisición que siguen funcionando cuando vos no estás."
        subtitleHighlight="Ingeniería comercial con IA"
        ctaPrimary={{ label: "Pedí un diagnóstico", href: "/agenda" }}
        ctaSecondary={{ label: "Ver el archivo", href: "/magazine" }}
        issueLabel="ISSUE 001"
        volumeLabel="VOL.01 / SIDE A"
      />

      <ArchivePreview previewIssues={previewIssues} />
      <ServicesPreview />
      <ProyectosPreview />
      <DropsPreview />

      <Newsletter />
    </>
  );
}

function ArchivePreview({ previewIssues }: { previewIssues: Issue[] }) {
  return (
    <section
      id="magazine-preview"
      className="relative border-t border-ink/15 bg-off-white py-20 md:py-28"
    >
      <div className="mx-auto w-full max-w-[1440px] px-6 md:px-12">
        <SectionHeader
          tag="EL ARCHIVO"
          headline="LA REVISTA"
          italicWord="hq.leads"
          meta="VOL.01 · 16 ISSUES · MAYO 2026"
        />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {previewIssues.map((issue, i) => (
            <MagazineCard key={issue.id} issue={issue} index={i} />
          ))}
        </div>

        <div className="mt-10 flex items-center justify-between mono text-[11px] text-ink/70">
          <span>↳ NUEVO ISSUE CADA SEMANA</span>
          <Link href="/magazine" className="inline-flex items-center gap-2 text-ink transition hover:gap-3">
            VER LOS 16 ISSUES →
          </Link>
        </div>
      </div>
    </section>
  );
}

function ServicesPreview() {
  const services = [
    {
      n: "01",
      label: "PERFORMANCE",
      title: "Meta + Google Ads",
      copy: "Pauta diseñada como sistema. Mapeamos antes de gastar, medimos lo que importa, escalamos lo que prueba.",
    },
    {
      n: "02",
      label: "AUTOMATIZACIÓN IA",
      title: "Pipelines que venden",
      copy: "Bots, CRMs, Make/n8n y asistentes propios. Tu PyME deja de operar a pulmón y empieza a operar a sistema.",
    },
    {
      n: "03",
      label: "WEB",
      title: "Landing + e-commerce",
      copy: "Páginas que convierten porque están pensadas como motor, no como tarjeta personal. Next.js + Supabase + Vercel.",
    },
    {
      n: "04",
      label: "CONTENIDO",
      title: "CM + ads creativos",
      copy: "Bajamos la voz de marca a feed. Posts, ads, reels y emails con IA. Sin chamuyo. Con criterio editorial.",
    },
  ];

  return (
    <section className="relative border-t border-ink/15 bg-cream py-20 md:py-28 crop-marks">
      <CropMarks color="light-gray" margin={24} />
      <div className="relative z-10 mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-12 px-6 md:grid-cols-12 md:px-12">
        <div className="md:col-span-5">
          <ChessBoardHalftone />
          <div className="mt-6 max-w-sm">
            <MarkerAnnotation text="AJEDREZ NO RULETA" arrow="up" />
          </div>
        </div>

        <div className="md:col-span-7">
          <SectionHeader
            tag="TRABAJAMOS"
            headline="LO QUE"
            italicWord="hacemos"
            meta="4 SERVICIOS · 1 SISTEMA"
          />

          <ul className="mt-10 divide-y divide-ink/15 border-y border-ink/15">
            {services.map((s) => (
              <li key={s.n} className="grid grid-cols-12 gap-4 py-6 md:py-8">
                <div className="col-span-2 display text-3xl text-ink md:text-5xl">{s.n}</div>
                <div className="col-span-10">
                  <div className="mono text-[10px] text-ink/60">{s.label}</div>
                  <h3 className="mt-1 display text-xl normal-case tracking-tight text-ink md:text-2xl">
                    {s.title}
                  </h3>
                  <p className="mt-2 max-w-xl text-sm text-ink/75 md:text-base">{s.copy}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex items-center justify-between mono text-[11px] text-ink/70">
            <span>SIN CHAMUYOS. SIN VUELTAS.</span>
            <Link href="/trabajamos" className="text-ink transition hover:opacity-80">
              VER EL SISTEMA COMPLETO →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProyectosPreview() {
  const cases = [
    {
      caso: "QD · Construcción premium",
      industria: "DECORACIÓN",
      inversion: "$0 fugados",
      causa: "Sistema instalado fase 02. ROAS 6.4×.",
      estado: "OPERANDO" as const,
    },
    {
      caso: "Cliente retail (anónimo)",
      industria: "RETAIL",
      inversion: "$1.8M",
      causa: "Pauta sin tracking. 9 meses con freelance.",
      estado: "EN DIAGNÓSTICO" as const,
    },
  ];

  return (
    <section className="relative isolate overflow-hidden border-t border-cream/10 bg-[#0A0A0A] py-20 text-cream md:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 top-12 h-72 w-72 rounded-full bg-blood/40 blur-3xl md:-left-32 md:h-[420px] md:w-[420px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-10 top-32 h-40 w-40 rotate-12 rounded-full bg-blood/60 blur-2xl"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 md:px-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <div className="mono text-[11px] text-cream/60">SECCIÓN 04</div>
            <h2 className="mt-3 display leading-[0.92] text-cream text-[clamp(2.5rem,7vw,5.5rem)]">
              PROYECTOS.
            </h2>
            <p className="mt-4 max-w-xl text-cream/80">
              Casos reales analizados con criterio técnico. Industria, inversión, diagnóstico, estado. El sistema que no ves es el que te gana.
            </p>
          </div>
          <div className="md:col-span-4 md:text-right">
            <Sticker text="DOSSIER TÉCNICO" color="red" rotation={-3} size="md" />
          </div>
        </div>

        <div className="mt-12">
          <ExpedienteHeader dark />
          {cases.map((c, i) => (
            <ExpedienteRow
              key={c.caso}
              caso={c.caso}
              industria={c.industria}
              inversion={c.inversion}
              causa={c.causa}
              estado={c.estado}
              dark
              index={i}
              href="/magazine/diagnosticos"
            />
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 mono text-[11px] text-cream/70">
          <span>EL SISTEMA QUE NO VES ES EL QUE TE GANA.</span>
          <Link
            href="/magazine/diagnosticos"
            className="pill px-5 py-3 bg-cream text-ink"
          >
            Ver proyectos →
          </Link>
        </div>
      </div>
    </section>
  );
}

function DropsPreview() {
  const drops = [
    {
      sku: "HQLD-001",
      title: "Calculadora ROAS",
      italicWord: "ROAS",
      format: "Sheet · Web",
      status: "DISPONIBLE" as const,
    },
    {
      sku: "HQLD-002",
      title: "Buyer Persona Notion",
      italicWord: "Persona",
      format: "Notion · PDF",
      status: "DISPONIBLE" as const,
    },
    {
      sku: "HQLD-003",
      title: "Checklist Auditoría Meta",
      italicWord: "Auditoría",
      format: "PDF",
      status: "PRÓXIMAMENTE" as const,
    },
    {
      sku: "HQLD-004",
      title: "Pack 20 prompts Paid Media",
      italicWord: "20 prompts",
      format: "TXT · Notion",
      status: "PRÓXIMAMENTE" as const,
    },
  ];

  return (
    <section className="relative isolate overflow-hidden border-t border-ink/10 bg-[#FF3B6E] py-20 text-cream md:py-28">
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 md:px-12">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="mono text-[11px] text-cream/80">SECCIÓN 05</div>
            <h2 className="mt-3 display leading-[0.92] text-cream text-[clamp(2.75rem,7.5vw,6rem)]">
              DROPS. <span className="serif-italic font-normal normal-case">todos gratis.</span>
            </h2>
          </div>
          <div className="max-w-sm text-cream/90">
            Calculadoras, plantillas y herramientas que usamos con clientes. Cada semana cae uno nuevo.
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {drops.map((d, i) => (
            <DropTicketPreview key={d.sku} {...d} index={i} />
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 mono text-[11px] text-cream/90">
          <span>↳ NUEVO DROP CADA SEMANA</span>
          <Link href="/drops" className="pill px-5 py-3 bg-cream text-ink">
            Ver todos los drops →
          </Link>
        </div>
      </div>
    </section>
  );
}

function ChessBoardHalftone() {
  return (
    <svg
      viewBox="0 0 360 360"
      role="img"
      aria-label="Tablero de ajedrez en halftone"
      className="aspect-square w-full max-w-[420px]"
    >
      <defs>
        <pattern id="board-dots" x="0" y="0" width="5" height="5" patternUnits="userSpaceOnUse">
          <circle cx="2.5" cy="2.5" r="1.1" fill="#0A0A0A" />
        </pattern>
        <linearGradient id="board-fade" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#000" stopOpacity="1" />
          <stop offset="100%" stopColor="#000" stopOpacity="0" />
        </linearGradient>
        <mask id="board-mask">
          <rect width="360" height="360" fill="url(#board-fade)" />
        </mask>
      </defs>
      <g mask="url(#board-mask)">
        {Array.from({ length: 8 }).map((_, row) =>
          Array.from({ length: 8 }).map((__, col) => {
            const x = col * 45;
            const y = row * 45;
            const dark = (row + col) % 2 === 0;
            return (
              <rect
                key={`${row}-${col}`}
                x={x}
                y={y}
                width={45}
                height={45}
                fill={dark ? "url(#board-dots)" : "transparent"}
              />
            );
          })
        )}
      </g>
    </svg>
  );
}
