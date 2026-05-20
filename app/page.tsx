import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/Hero";
import { ClienteProfile } from "@/components/ClienteProfile";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { CaseStat } from "@/components/CaseStat";
import { FAQAccordion } from "@/components/FAQAccordion";
import { FinalCTA } from "@/components/FinalCTA";
import { Newsletter } from "@/components/Newsletter";
import { Sticker } from "@/components/Sticker";
import { MarkerAnnotation } from "@/components/MarkerAnnotation";
import { CropMarks } from "@/components/CropMarks";
import { SectionHeader } from "@/components/SectionHeader";

export default function HomePage() {
  return (
    <>
      <Hero
        headline="SISTEMAS QUE VENDEN mientras dormís."
        italicWord="mientras dormís"
        subtitle="Ingeniería comercial con IA para PyMES con producto. Diseñamos, instalamos y operamos máquinas de adquisición que siguen funcionando cuando vos no estás."
        subtitleHighlight="Ingeniería comercial con IA"
        ctaPrimary={{ label: "Auditoría gratis 30 min", href: "/agenda" }}
        ctaSecondary={{ label: "Cómo trabajamos", href: "/trabajamos" }}
        issueLabel="ISSUE 001"
        volumeLabel="VOL.01 / SIDE A"
      />

      <PerfilesSection />
      <SistemaSection />
      <ServiciosSection />
      <CasosSection />
      <ModeloSection />
      <FAQSection />

      <FinalCTA
        headline="¿Listo para dejar de tirar plata en ads que no convierten?"
        italicWord="tirar plata"
        subtitle="En 30 minutos analizamos tu situación y te decimos honestamente si podemos ayudarte. Sin pitch comercial. Sin compromiso."
      />

      <Newsletter />
    </>
  );
}

function PerfilesSection() {
  const perfiles = [
    {
      number: "01",
      badge: "PYME",
      title: "Invertís en publicidad pero no sabés qué funciona.",
      quote: "Pongo presupuesto todos los meses, pero no tengo claridad sobre qué me trae clientes.",
      symptoms: [
        "Recibís reportes, pero no entendés qué campañas generan consultas reales.",
        "No sabés cuánto te cuesta cada lead o cada cliente nuevo.",
        "El número del Ads Manager no cruza con tus ventas reales.",
      ],
      solution:
        "Implementamos seguimiento real (pixel, CAPI, GA4, atribución contra CRM), dashboard claro y métricas que cruzan con venta cerrada. Sabés exactamente qué funciona y qué ajustar.",
      tone: "ink" as const,
    },
    {
      number: "02",
      badge: "E-COMMERCE",
      title: "Vendés online pero la rentabilidad no cierra.",
      quote: "Tengo ventas, pero cuando miro los números siento que la publicidad se lleva todo el margen.",
      symptoms: [
        "El costo por compra sube cuando intentás escalar.",
        "No tenés estructura clara entre prospección, remarketing y recompra.",
        "Vendés, pero sin un sistema que sostenga el crecimiento.",
      ],
      solution:
        "Ordenamos el funnel, mejoramos estructura TOFU/MOFU/BOFU y optimizamos contra LTV real. ROAS más alto y más sostenible.",
      tone: "indigo" as const,
    },
    {
      number: "03",
      badge: "ARRANQUE",
      title: "Querés crecer pero no sabés por dónde empezar.",
      quote: "Sé que necesito un sistema para captar clientes, pero no sé cuánto invertir ni cómo arrancar.",
      symptoms: [
        "Dependés del boca a boca o publicaciones sueltas para vender.",
        "Probaste impulsar contenido sin estrategia y no viste resultados.",
        "Necesitás una guía clara para empezar con publicidad digital.",
      ],
      solution:
        "Armamos estrategia desde cero, definimos canal correcto y lanzamos un sistema simple para empezar a generar consultas. Sin probar ni rezar.",
      tone: "blood" as const,
    },
  ];

  return (
    <section className="relative border-t border-ink/15 bg-cream py-20 md:py-28 crop-marks">
      <CropMarks color="light-gray" margin={24} />
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 md:px-12">
        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <SectionHeader
              tag="SECCIÓN 02 · PERFILES"
              headline="CADA NEGOCIO TIENE su"
              italicWord="propio desafío"
              meta="3 PERFILES · 1 MÉTODO"
            />
            <p className="mt-6 max-w-2xl text-base text-ink/80 md:text-lg">
              Elegí el perfil que más se parezca a tu situación. No importa en qué etapa estés — diseñamos sistemas de captación, conversión y seguimiento.
            </p>
          </div>
          <div className="md:col-span-4 md:text-right">
            <div className="inline-flex flex-col items-start gap-3 md:items-end">
              <Sticker text="ELEGÍ EL TUYO" color="yellow" rotation={-4} size="md" />
              <Sticker text="SIN CHAMUYOS" color="red" rotation={5} size="sm" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-5">
          {perfiles.map((p, i) => (
            <ClienteProfile key={p.number} {...p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SistemaSection() {
  const phases: import("@/components/ProcessTimeline").ProcessPhase[] = [
    {
      number: "01",
      label: "SETUP",
      range: "DÍA 0 → 14",
      title: "Diagnóstico, tracking limpio y primeros tests.",
      items: [
        "Auditoría completa de cuenta actual (o análisis de mercado si arrancás).",
        "Research de competidores: qué dicen, dónde pautan, qué ofertas usan.",
        "Setup técnico: Pixel, CAPI, Google Tag Manager, GA4, eventos.",
        "Lanzamiento de 4-6 conjuntos de anuncios con creatividades variadas.",
        "Kill rápido de lo que no funciona (<7 días).",
      ],
      outcome: "Campañas al aire con primeros datos. Audiencias y creatividades ganadoras identificadas. CPL inicial como baseline.",
    },
    {
      number: "02",
      label: "OPTIMIZACIÓN",
      range: "MES 1 → 3",
      title: "Datos reales, no suposiciones.",
      items: [
        "Revisión de campañas cada 48-72 hs (lun · mié · vie).",
        "Escalamiento progresivo de winners (+20-30% de budget).",
        "4 tests estructurados por mes: audiencias, creativos, copys, ofertas.",
        "Retargeting por etapa del funnel.",
        "Reportes semanales · reunión mensual de estrategia.",
      ],
      outcome: "Reducción del CPL del 20-40%. Funnel frío → tibio → caliente funcionando. Campañas estabilizadas.",
    },
    {
      number: "03",
      label: "ESCALA",
      range: "MES 4 →",
      title: "Escala agresiva manteniendo eficiencia.",
      items: [
        "Apertura de nuevos canales (Meta + Google + lo que aplique).",
        "Expansión a nuevas audiencias, geografías, productos.",
        "Dashboards en tiempo real (Looker Studio).",
        "Optimización de landing con heatmaps y grabaciones.",
        "Retención: remarketing avanzado + nurturing.",
      ],
      outcome: "Sistema predecible y escalable. ROAS optimizado. Proyección de leads y ventas mes a mes con precisión.",
    },
  ];

  return (
    <section className="relative border-t border-ink/15 bg-off-white py-20 md:py-28">
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 md:px-12">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <SectionHeader
            tag="SECCIÓN 03 · MÉTODO"
            headline="EL SISTEMA"
            italicWord="hq.leads"
            meta="3 FASES · CICLO CONTINUO"
          />
          <div className="inline-flex items-center gap-3">
            <MarkerAnnotation text="MISMO MÉTODO. CADA CLIENTE." arrow="up" rotation={-3} />
          </div>
        </div>

        <ProcessTimeline phases={phases} />
      </div>
    </section>
  );
}

function ServiciosSection() {
  const services = [
    {
      n: "01",
      label: "PERFORMANCE",
      title: "Meta + Google Ads",
      copy: "Pauta como sistema. Mapeamos antes de gastar, medimos lo que importa, escalamos lo que prueba.",
      meta: "FEE MENSUAL · O FEE + %",
    },
    {
      n: "02",
      label: "AUTOMATIZACIÓN IA",
      title: "Bots + CRM + Make",
      copy: "Pipelines que venden 24/7. WhatsApp, Instagram, asistentes propios. Dejás de operar a pulmón.",
      meta: "SETUP + FEE MENSUAL",
    },
    {
      n: "03",
      label: "WEB",
      title: "Landing + e-commerce",
      copy: "Páginas pensadas como motor de conversión, no tarjeta personal. Next.js + Supabase + Vercel.",
      meta: "SETUP + MANTENIMIENTO",
    },
    {
      n: "04",
      label: "CONTENIDO",
      title: "CM + ads creativos",
      copy: "Bajamos la voz de marca a feed. Posts, reels, ads y emails con IA. Sin chamuyo. Con criterio editorial.",
      meta: "STARTER · PRO · FULL",
    },
  ];

  return (
    <section className="relative border-t border-ink/15 bg-cream py-20 md:py-28 crop-marks">
      <CropMarks color="light-gray" margin={24} />
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 md:px-12">
        <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <SectionHeader
              tag="SECCIÓN 04 · SERVICIOS"
              headline="LO QUE"
              italicWord="hacemos"
              meta="4 SERVICIOS · 1 SISTEMA"
            />
            <p className="mt-6 max-w-2xl text-base text-ink/80 md:text-lg">
              Trabajamos como una agencia integrada. Podés contratarlos por separado o como combo. Sin upselling, sin servicios fantasma.
            </p>
          </div>
          <div className="md:col-span-4 md:text-right">
            <Sticker text="MENÚ COMPLETO" color="yellow" rotation={-4} size="md" />
          </div>
        </div>

        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {services.map((s) => (
            <li
              key={s.n}
              className="relative flex flex-col gap-4 border border-ink/15 bg-off-white p-6 transition hover:border-ink md:p-8"
            >
              <header className="flex items-center justify-between">
                <span className="display text-3xl text-ink md:text-4xl">{s.n}</span>
                <span className="mono text-[10px] tracking-widest text-ink/60">{s.label}</span>
              </header>
              <h3 className="display cmyk-shift text-2xl normal-case leading-tight text-ink md:text-3xl">
                {s.title}
              </h3>
              <p className="text-base text-ink/80 md:text-lg">{s.copy}</p>
              <footer className="mt-auto flex items-center justify-between border-t border-ink/15 pt-4">
                <span className="mono text-[10px] tracking-widest text-ink">{s.meta}</span>
                <Link
                  href="/trabajamos"
                  className="mono text-[10px] tracking-widest text-ink inline-flex items-center gap-1.5 transition hover:text-indigo"
                >
                  VER DETALLE
                  <ArrowRight className="w-3 h-3" strokeWidth={2} />
                </Link>
              </footer>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-ink/15 pt-6 mono text-[11px] tracking-widest text-ink/65">
          <span>SIN UPSELLING. SIN VUELTAS.</span>
          <Link href="/trabajamos" className="text-ink transition hover:opacity-80">
            VER EL SISTEMA COMPLETO →
          </Link>
        </div>
      </div>
    </section>
  );
}

function CasosSection() {
  const casos: import("@/components/CaseStat").CaseStatProps[] = [
    {
      metric: "6.4×",
      metricLabel: "ROAS · 90 DÍAS",
      industry: "DECORACIÓN PREMIUM",
      before: "ROAS 2.1×",
      after: "ROAS 6.4×",
      story: "Reasignamos pauta entre Meta y Google, instalamos tracking limpio y armamos funnel TOFU/MOFU/BOFU. Mismo presupuesto, 3× ventas.",
      status: "EN ESCALA",
      tone: "highlight",
    },
    {
      metric: "-47%",
      metricLabel: "CPL · 60 DÍAS",
      industry: "CONSTRUCCIÓN / REFORMAS",
      before: "$4.800 CPL",
      after: "$2.540 CPL",
      story: "Estructura nueva de campañas, audiencias depuradas y mensaje quirúrgico al ICP correcto. Menos leads basura, más cierres reales.",
      status: "OPERANDO",
    },
    {
      metric: "3×",
      metricLabel: "TURNOS / MES",
      industry: "SALUD B2C",
      before: "85 turnos",
      after: "260 turnos",
      story: "Mismo budget mensual. Funnel reseteado, landing reescrita, integración con CRM. El producto ya funcionaba — faltaba ingeniería en el canal digital.",
      status: "OPERANDO",
    },
  ];

  return (
    <section className="relative isolate overflow-hidden border-t border-cream/10 bg-ink py-20 text-cream halftone-overlay md:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 top-12 h-72 w-72 rounded-full bg-indigo/40 blur-3xl md:-left-32 md:h-[420px] md:w-[420px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-10 top-32 h-40 w-40 rotate-12 rounded-full bg-blood/50 blur-2xl"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 md:px-12">
        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <div className="mono text-[11px] tracking-widest text-cream/60">SECCIÓN 05 · CASOS</div>
            <h2 className="mt-4 display cmyk-shift-strong leading-[0.92] text-cream text-[clamp(2.5rem,7vw,5.5rem)]">
              NÚMEROS. <span className="serif-italic font-normal normal-case">no promesas.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-base text-cream/85 md:text-lg">
              Casos reales anonimizados con cifras verificables. Si te suena similar al tuyo, hablemos.
            </p>
          </div>
          <div className="md:col-span-4 md:text-right">
            <Sticker text="DOSSIER TÉCNICO" color="red" rotation={-3} size="md" />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {casos.map((c, i) => (
            <CaseStat key={i} {...c} index={i} />
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-cream/15 pt-6 mono text-[11px] tracking-widest text-cream/65">
          <span>NOMBRES ANONIMIZADOS · CIFRAS REALES</span>
          <Link
            href="/agenda"
            className="inline-flex items-center gap-2 bg-cream text-ink px-5 py-3 mono text-[10px] tracking-widest transition hover:bg-acid"
          >
            QUIERO ESTOS NÚMEROS
            <ArrowRight className="w-3 h-3" strokeWidth={2} />
          </Link>
        </div>
      </div>
    </section>
  );
}

function ModeloSection() {
  const items = [
    {
      label: "MODELO POR CASO",
      title: "Fee fijo o fee + %.",
      body: "Según el caso. Algunos clientes prefieren fee mensual cerrado, otros suman un porcentaje sobre ventas atribuibles. Definimos cuál te conviene en la auditoría.",
    },
    {
      label: "SIN LETRA CHICA",
      title: "Lo que firmamos, pagás.",
      body: "Cerramos el modelo por escrito antes de empezar. Sin extras ocultos, sin updates sorpresivos, sin clausulitas raras.",
    },
    {
      label: "REVISIÓN TRIMESTRAL",
      title: "Si no funciona, cambia.",
      body: "Cada 3 meses revisamos resultados y modelo. Si el setup actual no rinde lo esperado, ajustamos. No te casás con un contrato rígido.",
    },
  ];

  return (
    <section className="relative border-t border-ink/15 bg-off-white py-20 md:py-28">
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 md:px-12">
        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <SectionHeader
              tag="SECCIÓN 06 · MODELO"
              headline="CÓMO"
              italicWord="cobramos"
              meta="TRANSPARENTE · FLEXIBLE"
            />
            <p className="mt-6 max-w-2xl text-base text-ink/80 md:text-lg">
              Cada negocio es distinto. No tenemos pricing público: el número lo armamos en función de tu cuenta, tu inversión y los objetivos. Pero el modelo es claro desde el primer minuto.
            </p>
          </div>
          <div className="md:col-span-4 md:text-right">
            <Sticker text="PROPUESTA EN 48 HS" color="yellow" rotation={-5} size="md" />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
          {items.map((item, i) => (
            <article
              key={i}
              className="relative flex h-full flex-col border border-ink/15 bg-cream p-6 md:p-8"
            >
              <div className="mono text-[10px] tracking-widest text-indigo">{item.label}</div>
              <h3 className="mt-4 display cmyk-shift text-xl normal-case leading-tight text-ink md:text-2xl">
                {item.title}
              </h3>
              <p className="mt-4 text-base text-ink/80 md:text-lg leading-relaxed">{item.body}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-ink/15 pt-6 mono text-[11px] tracking-widest text-ink/65">
          <span>NO HAY PRECIO SIN CONTEXTO.</span>
          <Link
            href="/agenda"
            className="inline-flex items-center gap-2 bg-ink text-cream px-5 py-3 mono text-[10px] tracking-widest transition hover:bg-indigo"
          >
            PEDÍ PROPUESTA PERSONALIZADA
            <ArrowRight className="w-3 h-3" strokeWidth={2} />
          </Link>
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const faqs = [
    {
      q: "¿Cuánto tengo que invertir en publicidad para empezar?",
      a: "Para que tenga sentido, mínimo $200.000-300.000 ARS/mes en spend publicitario. Por debajo de eso, no podemos aprender lo suficiente como para optimizar. Si arrancás más chico, te recomendamos resolverlo orgánicamente primero.",
    },
    {
      q: "¿En cuánto tiempo voy a ver resultados?",
      a: "Primeros datos en 7-10 días. Optimización real desde la semana 3. Resultados sostenidos a partir del mes 2-3. No prometemos magia: prometemos método.",
    },
    {
      q: "¿Qué pasa si ya tengo campañas corriendo?",
      a: "Auditamos primero. Si están bien armadas, las pulimos. Si están rotas, las reseteamos. En la auditoría gratis de 30 min te decimos honestamente qué encontramos antes de cobrar un peso.",
    },
    {
      q: "¿Cómo es el modelo de cobro?",
      a: "Trabajamos con dos modelos según el caso: fee mensual cerrado, o fee + porcentaje sobre ventas atribuibles. En la auditoría gratis definimos cuál es el mejor para tu situación y lo dejamos por escrito antes de arrancar. No cobramos % sobre tu spend publicitario en ningún caso.",
    },
    {
      q: "¿Trabajan con cualquier rubro?",
      a: "No. Nos enfocamos en PyMES argentinas con producto validado (vende offline / boca a boca). E-commerce, servicios, retail, salud, construcción. Si tu producto no está validado, te lo decimos en la primera llamada.",
    },
    {
      q: "¿Qué necesito para empezar?",
      a: "Solo una conversación de 30 minutos. En la auditoría gratis analizamos tu situación, objetivos y presupuesto, y te decimos con honestidad si podemos ayudarte y qué resultados podés esperar.",
    },
  ];

  return (
    <section className="relative border-t border-ink/15 bg-cream py-20 md:py-28 crop-marks">
      <CropMarks color="light-gray" margin={24} />
      <div className="relative z-10 mx-auto w-full max-w-[1100px] px-6 md:px-12">
        <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <SectionHeader
              tag="SECCIÓN 07 · FAQ"
              headline="LO QUE TODOS"
              italicWord="preguntan"
              meta="06 PREGUNTAS · 06 RESPUESTAS"
            />
            <p className="mt-6 max-w-2xl text-base text-ink/80 md:text-lg">
              Todo lo que querés saber antes de empezar a trabajar con HQL. Si te queda alguna duda, escribinos.
            </p>
          </div>
          <div className="md:col-span-4 md:text-right">
            <Sticker text="SIN VUELTAS" color="red" rotation={4} size="md" />
          </div>
        </div>

        <FAQAccordion items={faqs} />
      </div>
    </section>
  );
}
