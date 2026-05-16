import type { Metadata } from "next";
import { CropMarks } from "@/components/CropMarks";
import { Sticker } from "@/components/Sticker";
import { MarkerAnnotation } from "@/components/MarkerAnnotation";
import { AuditoryForm } from "@/components/AuditoryForm";
import { Newsletter } from "@/components/Newsletter";

export const metadata: Metadata = {
  title: "Auditoría gratis",
  description:
    "30 minutos. Te decimos honestamente si podemos ayudarte o no. Sin obligaciones. Sin pitch comercial.",
};

const columnas = [
  {
    tag: "/ 01",
    titulo: "Qué miramos",
    items: [
      "Estructura de campañas Meta y Google",
      "Tracking, pixel, CAPI, eventos",
      "Audiencias, exclusiones, lookalikes",
      "Creativos: hooks, frecuencia, fatiga",
      "Atribución y match con tu CRM",
    ],
  },
  {
    tag: "/ 02",
    titulo: "Qué te llevás",
    items: [
      "Diagnóstico claro de qué sangra",
      "3 acciones concretas para esta semana",
      "Benchmarks reales de tu industria",
      "Plan de los primeros 30 días",
      "Sin pitch comercial al final",
    ],
  },
  {
    tag: "/ 03",
    titulo: "Con quién hablás",
    items: [
      "Tomás Mattheus, founder hq.leads",
      "Ex-developer, paid media desde 2020",
      "Ya pasamos por +30 cuentas PyME ARG",
      "Voseo, sin chamuyo, corta y al pie",
      "Si no podemos ayudarte, te lo decimos",
    ],
  },
];

export default function AgendaPage() {
  return (
    <div className="relative bg-cream text-ink">
      <section className="relative max-w-7xl mx-auto px-6 md:px-12 pt-24 md:pt-32 pb-16 md:pb-20 crop-marks">
        <CropMarks color="light-gray" margin={24} />

        <div className="flex items-center justify-between mono text-[11px] tracking-widest text-mid-gray uppercase mb-10 md:mb-14">
          <span>VOL.01 / AGENDA</span>
          <span>30 MIN · POR ZOOM O MEET</span>
        </div>

        <div className="absolute top-32 right-6 md:right-12">
          <Sticker color="red" text="URGENTE" rotation={-8} size="md" />
        </div>

        <div className="relative">
          <h1 className="display text-[14vw] md:text-[8.5rem] lg:text-[10rem] leading-[0.88] text-ink tracking-tight max-w-5xl">
            Auditoría{" "}
            <span className="serif-italic font-normal normal-case">gratis.</span>
            <br />
            <span className="serif-italic font-normal normal-case">30 minutos.</span>
          </h1>

          <p className="font-body text-lg md:text-2xl text-mid-gray mt-8 md:mt-10 max-w-3xl leading-relaxed">
            Te decimos honestamente si podemos ayudarte o no. Sin obligaciones.
            Sin pitch comercial. Sin tarjeta de crédito.
          </p>

          <div className="absolute -bottom-8 right-12 hidden md:block">
            <MarkerAnnotation text="EN SERIO" arrow="up" rotation={-5} />
          </div>
        </div>
      </section>

      <section className="relative max-w-7xl mx-auto px-6 md:px-12 pb-20 md:pb-24">
        <div className="mono text-[10px] md:text-xs tracking-[0.25em] text-mid-gray mb-10 md:mb-14">
          / CÓMO ES LA LLAMADA
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 border-t border-ink/15 pt-12">
          {columnas.map((col) => (
            <div key={col.tag} className="relative">
              <div className="mono text-[11px] tracking-[0.25em] text-indigo mb-4">
                {col.tag}
              </div>
              <h2 className="font-display font-black text-3xl md:text-4xl text-ink leading-tight mb-6 tracking-tight">
                {col.titulo}
                <span className="text-indigo">.</span>
              </h2>
              <ul className="space-y-4">
                {col.items.map((item, i) => (
                  <li
                    key={i}
                    className="font-body text-base md:text-lg text-ink leading-relaxed flex gap-3 border-t border-ink/10 pt-4"
                  >
                    <span className="mono text-xs text-mid-gray pt-1 min-w-[1.5rem]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="relative max-w-5xl mx-auto px-6 md:px-12 pb-24 md:pb-32">
        <div className="mb-8 md:mb-10 flex items-end justify-between">
          <div>
            <div className="mono text-[10px] md:text-xs tracking-[0.25em] text-mid-gray mb-3">
              / AGENDÁ
            </div>
            <h2 className="display text-4xl md:text-6xl text-ink leading-tight">
              Elegí{" "}
              <span className="serif-italic font-normal normal-case">tu horario.</span>
            </h2>
          </div>
        </div>

        <AuditoryForm />

        <p className="mono text-[11px] text-mid-gray mt-8 tracking-wider text-center">
          DISEÑADO EN ROSARIO. PARA TODOS LADOS. POR LA POSTA.
        </p>
      </section>

      <Newsletter />
    </div>
  );
}
