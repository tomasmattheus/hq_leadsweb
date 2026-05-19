import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CropMarks } from "@/components/CropMarks";
import { Sticker } from "@/components/Sticker";
import { MarkerAnnotation } from "@/components/MarkerAnnotation";
import { ManifestoBlock } from "@/components/ManifestoBlock";
import { Newsletter } from "@/components/Newsletter";

export const metadata: Metadata = {
  title: "Manifiesto",
  description:
    "Por qué existe hq.leads. Ingeniería comercial, no marketing. Ajedrez, no ruleta. Sin chamuyos.",
};

export default function ManifiestoPage() {
  return (
    <div className="relative bg-cream text-ink">
      <section className="relative max-w-7xl mx-auto px-6 md:px-12 pt-24 md:pt-32 pb-12 md:pb-16 crop-marks">
        <CropMarks color="light-gray" margin={24} />

        <div className="flex items-center justify-between mono text-[11px] tracking-widest text-mid-gray uppercase mb-10 md:mb-14">
          <span>VOL.01 / MANIFIESTO</span>
          <span>EDITADO EN ROSARIO · 2026</span>
        </div>

        <div className="absolute top-32 right-6 md:right-12 hidden md:block">
          <Sticker
            color="red"
            text="PARENTAL ADVISORY · EXPLICIT CONTENT"
            rotation={-7}
            size="sm"
          />
        </div>

        <h1 className="display leading-[0.92] text-ink tracking-tight max-w-5xl text-[clamp(2.75rem,8vw,6.5rem)]">
          Por qué{" "}
          <span className="serif-italic font-normal normal-case">existimos.</span>
        </h1>
      </section>

      <article className="relative max-w-[700px] mx-auto px-6 md:px-0 pb-24 md:pb-32">
        <p className="display text-3xl md:text-5xl text-ink leading-[1.05] tracking-tight mb-12 normal-case font-medium">
          INGENIERÍA COMERCIAL.{" "}
          <span className="serif-italic font-normal">no marketing.</span>
        </p>

        <div className="space-y-8 md:space-y-10 font-body text-lg md:text-xl text-ink leading-[1.7]">
          <ManifestoBlock>
            Las agencias venden clicks. Nosotros instalamos sistemas. Pixel limpio,
            tracking honesto, audiencias reales y reportes que cruzan con tu CRM —
            no con la fantasía del Ads Manager.
          </ManifestoBlock>

          <ManifestoBlock>
            Tu producto ya funciona. Vende en la calle, en el local, en el boca a
            boca. Lo que falta no es talento ni esfuerzo: es ingeniería sobre el
            canal digital. Eso lo hacemos nosotros.
          </ManifestoBlock>

          <ManifestoBlock>
            No vendemos servicios sueltos. Diseñamos máquinas comerciales que
            siguen funcionando cuando el dueño no está. Sin chamuyo, sin vueltas,
            sin entre líneas.
          </ManifestoBlock>
        </div>

        <div className="relative">
          <div className="absolute -left-12 top-12 hidden md:block z-10">
            <MarkerAnnotation text="POSTA" arrow="right" rotation={-8} />
          </div>
          <ManifestoBlock variant="pull-quote" attribution="hq.leads">
            Vender es prever. Lo demás es esperar.
          </ManifestoBlock>
        </div>

        <div className="space-y-8 md:space-y-10 font-body text-lg md:text-xl text-ink leading-[1.7] mb-20 md:mb-24">
          <ManifestoBlock>
            Trabajamos con PyMES argentinas que tienen producto validado y procesos
            que se hacen a mano. Los digitalizamos, los conectamos, los medimos.
            No prometemos viralidad. Prometemos sistema.
          </ManifestoBlock>

          <ManifestoBlock>
            No buscamos clientes. Conectamos personas. Si no encajamos en cómo
            pensás, te lo decimos en la primera llamada y seguimos en buenos
            términos.
          </ManifestoBlock>
        </div>

        <div className="mb-20 md:mb-24">
          <div className="mono text-[10px] md:text-xs tracking-[0.25em] text-mid-gray mb-12">
            / 03 PRINCIPIOS · NO NEGOCIABLES
          </div>

          <div className="space-y-12 md:space-y-16">
            <ManifestoBlock
              variant="principle"
              number="01"
              title="Ajedrez."
              italicWord="no ruleta."
            >
              Cada peso de pauta tiene una hipótesis y un benchmark. Si no podemos
              explicar por qué se invierte, no se invierte. Estrategia antes de
              gasto. Tablero antes de jugada.
            </ManifestoBlock>

            <ManifestoBlock
              variant="principle"
              number="02"
              title="Sin"
              italicWord="chamuyos."
            >
              Si tu cuenta sangra, te lo decimos. Si no podemos ayudarte, te lo
              decimos. Si vamos a tardar más de lo previsto, te lo decimos. Datos
              antes que adjetivos. Honestidad antes que cierre.
            </ManifestoBlock>

            <ManifestoBlock
              variant="principle"
              number="03"
              title="Bien hecho."
              italicWord="punto."
            >
              No publicamos lo que no usaríamos con nuestra propia marca. No
              entregamos campañas a medio armar. No tomamos clientes que no
              podemos atender bien. Pocas palabras, mucha actitud.
            </ManifestoBlock>
          </div>
        </div>

        <div className="text-center pt-8 border-t border-ink/15">
          <p className="display text-3xl md:text-4xl text-ink leading-tight tracking-tight mb-8 normal-case font-medium">
            ¿Vas?{" "}
            <span className="serif-italic font-normal">Hablemos.</span>
          </p>
          <Link
            href="/agenda"
            className="pill pill-indigo px-7 py-4 text-xs md:text-sm"
          >
            ESCRIBINOS
            <ArrowRight className="w-4 h-4" strokeWidth={1.75} />
          </Link>
        </div>
      </article>

      <Newsletter />
    </div>
  );
}
