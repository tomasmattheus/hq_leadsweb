export type ServiceSlug = "performance" | "automatizacion-ia" | "web" | "contenido";

export type ServiceCase = {
  cliente: string;
  industria: string;
  resultado: string;
  href: string;
};

export type Service = {
  slug: ServiceSlug;
  number: string;
  tag: string;
  title: string;
  italicWord: string;
  subtitle: string;
  description: string;
  hacemos: string[];
  noHacemos: string[];
  proceso: { dia: string; titulo: string; detalle: string }[];
  pullQuote: string;
  casos: ServiceCase[];
};

export const services: Service[] = [
  {
    slug: "performance",
    number: "01",
    tag: "PERFORMANCE",
    title: "PAUTA.",
    italicWord: "que vende.",
    subtitle: "Meta Ads, Google Ads y todo lo que se mide en plata, no en likes.",
    description:
      "Diseñamos y operamos cuentas de paid media como sistemas. Pixel bien puesto, tracking limpio, audiencias reales, creativos que paran el scroll y reportes que cruzan con tus ventas reales — no con la fantasía del Ads Manager.",
    hacemos: [
      "Auditamos tu cuenta entera antes de tocar un peso: pixel, CAPI, eventos, atribución, frecuencia.",
      "Armamos estructura de campañas TOFU/MOFU/BOFU con criterio, no copy/paste de un curso.",
      "Producimos creativos cada semana con hooks probados, no plantillas Canva.",
      "Medimos CAC y LTV reales contra tu CRM, no CPL del panel.",
      "Reportamos mensual con cruces a venta cerrada, no screenshots del manager.",
      "Iteramos cada semana: subimos lo que escala, bajamos lo que sangra.",
    ],
    noHacemos: [
      "No prometemos ROAS sin haber visto tu cuenta y tu producto.",
      "No vendemos plantillas ni cursos disfrazados de servicio.",
      "No usamos jerga para esconder lo que no medimos.",
      "No agarramos cuentas que vienen rotas si el dueño no quiere arreglarlas.",
    ],
    proceso: [
      { dia: "DÍA 0", titulo: "Auditoría", detalle: "30 min. Te decimos honestamente si podemos ayudarte." },
      { dia: "DÍA 7", titulo: "Diagnóstico", detalle: "Reporte con leaks, oportunidades y plan de los 30 días." },
      { dia: "DÍA 14", titulo: "Setup", detalle: "Tracking limpio, estructura nueva, primeros creativos al aire." },
      { dia: "DÍA 30", titulo: "Iteración", detalle: "Primer reporte cruzado contra ventas. Decisiones para mes 2." },
    ],
    pullQuote: "Pauta sin sistema es ruleta. Lo demás es ingeniería.",
    casos: [
      {
        cliente: "Cliente decoración premium",
        industria: "E-commerce decoración",
        resultado: "ROAS 2.1x → 5.4x en 90 días.",
        href: "/magazine/diagnosticos",
      },
      {
        cliente: "Cliente reformas",
        industria: "Construcción",
        resultado: "CPL bajó 47% reasignando presupuesto entre Meta y Google.",
        href: "/magazine/diagnosticos",
      },
      {
        cliente: "Cliente salud B2C",
        industria: "Salud B2C",
        resultado: "Cerró 3x más turnos con la misma inversión mensual.",
        href: "/magazine/diagnosticos",
      },
    ],
  },
  {
    slug: "automatizacion-ia",
    number: "02",
    tag: "AUTOMATIZACIÓN IA",
    title: "VENTAS.",
    italicWord: "mientras dormís.",
    subtitle: "CRMs, chatbots, Make, ManyChat y stack ChatGPT operativo, no demo.",
    description:
      "Instalamos los procesos que tu equipo hace a mano y los convertimos en sistemas que corren solos: respuestas automáticas en WhatsApp, lead routing, follow-up por email, dashboards en vivo y asistentes IA que no inventan.",
    hacemos: [
      "Mapeamos los procesos manuales que te comen horas y los priorizamos por impacto.",
      "Conectamos Meta, Google, WhatsApp, CRM y planillas en un único flujo.",
      "Armamos chatbots ManyChat y Make con lógica de calificación real.",
      "Implementamos asistentes IA internos para tu equipo (ventas, atención, reportes).",
      "Medimos ahorro de horas/mes y conversión incremental por automatización.",
      "Documentamos todo: si te vas, sabés cómo seguir.",
    ],
    noHacemos: [
      "No vendemos 'IA mágica' ni soluciones que prometen reemplazar al equipo.",
      "No armamos automatizaciones que tu equipo no va a usar después.",
      "No usamos herramientas caras si una gratis hace lo mismo.",
      "No tomamos proyectos donde no hay un dueño claro del proceso.",
    ],
    proceso: [
      { dia: "DÍA 0", titulo: "Auditoría", detalle: "Mapeo de procesos manuales y oportunidades de automatización." },
      { dia: "DÍA 7", titulo: "Plan", detalle: "Stack propuesto, integraciones y prioridades por impacto." },
      { dia: "DÍA 14", titulo: "Build", detalle: "Primera automatización al aire. Tu equipo entrenado." },
      { dia: "DÍA 30", titulo: "Escala", detalle: "Métricas de ahorro y nuevas automatizaciones priorizadas." },
    ],
    pullQuote: "El sistema que sigue funcionando cuando el dueño no está.",
    casos: [
      {
        cliente: "Cliente B2B servicios",
        industria: "Servicios profesionales",
        resultado: "Bot WhatsApp recuperó 38% de leads que no contestaban.",
        href: "/magazine/diagnosticos",
      },
      {
        cliente: "Cliente retail",
        industria: "Retail",
        resultado: "Reportes mensuales de 6h a 20 min con dashboard automático.",
        href: "/magazine/diagnosticos",
      },
      {
        cliente: "Cliente construcción",
        industria: "Construcción",
        resultado: "Asistente interno IA reduce 60% el tiempo de cotizaciones.",
        href: "/magazine/diagnosticos",
      },
    ],
  },
  {
    slug: "web",
    number: "03",
    tag: "WEB",
    title: "LANDINGS.",
    italicWord: "que convierten.",
    subtitle: "Next.js, Tailwind, Vercel. Rápidas, medibles y diseñadas para vender.",
    description:
      "Diseñamos y desarrollamos landings, ecommerce y sitios institucionales pensados desde el funnel: hero claro, prueba real, formularios que captan y tracking que mide. Sin templates genéricos. Sin loaders eternos.",
    hacemos: [
      "Diseñamos pensando en el embudo: hero, oferta, prueba, fricción, CTA.",
      "Desarrollamos en stack moderno (Next.js 15, Tailwind 4, Vercel).",
      "Conectamos formularios al CRM, a WhatsApp y a tu pixel.",
      "Performance >90 en PageSpeed mobile. SEO técnico de base.",
      "Iteramos con A/B testing de headlines, hero y CTAs.",
      "Entregamos repo, dominio y pipeline de deploy a tu nombre.",
    ],
    noHacemos: [
      "No usamos templates de WordPress ni constructores tipo Wix.",
      "No diseñamos sitios bonitos que no convierten — el bonito viene después.",
      "No te dejamos atado a una plataforma cerrada.",
      "No tomamos proyectos donde el cliente no sabe qué quiere comunicar.",
    ],
    proceso: [
      { dia: "DÍA 0", titulo: "Brief", detalle: "Auditoría del sitio actual + objetivos del funnel." },
      { dia: "DÍA 7", titulo: "Diseño", detalle: "Wireframes y diseño de las pantallas clave aprobadas." },
      { dia: "DÍA 14", titulo: "Build", detalle: "Desarrollo, integraciones y QA en staging." },
      { dia: "DÍA 30", titulo: "Live", detalle: "Deploy productivo, métricas activas, primer reporte." },
    ],
    pullQuote: "Una landing es un argumento. No un catálogo.",
    casos: [
      {
        cliente: "Cliente decoración",
        industria: "E-commerce decoración",
        resultado: "Conversión landing 0.8% → 3.2% post rediseño.",
        href: "/magazine/diagnosticos",
      },
      {
        cliente: "Cliente servicios",
        industria: "Servicios profesionales",
        resultado: "Tiempo de carga 6.2s → 1.1s. Bounce rate cayó 41%.",
        href: "/magazine/diagnosticos",
      },
      {
        cliente: "Cliente B2B",
        industria: "B2B local",
        resultado: "Form submissions 4x sin tocar inversión en pauta.",
        href: "/magazine/diagnosticos",
      },
    ],
  },
  {
    slug: "contenido",
    number: "04",
    tag: "CONTENIDO & MARCA",
    title: "CONTENIDO.",
    italicWord: "que parece tuyo.",
    subtitle: "Estrategia editorial, copy, ads, carouseles y reels con voz propia.",
    description:
      "Producimos contenido orgánico y pago con sistema editorial, no a los manotazos. Pilares definidos, calendario semanal, ads con hook, carouseles educativos y reels que funcionan. Diseño que no parece hecho con IA.",
    hacemos: [
      "Definimos pilares de contenido alineados a tus objetivos comerciales.",
      "Producimos calendario semanal con copy + arte + reel.",
      "Escribimos ads con voz de marca, no copy genérico.",
      "Diseñamos carouseles editoriales tipo magazine, no plantillas.",
      "Medimos qué pieza genera leads, no qué tiene más likes.",
      "Iteramos formato, hook y oferta cada mes según data.",
    ],
    noHacemos: [
      "No publicamos 'tip del día' ni frases motivacionales.",
      "No usamos templates Canva genéricos que parecen de cualquier marca.",
      "No prometemos viralidad — prometemos consistencia editorial.",
      "No tomamos cuentas donde no hay producto validado para mostrar.",
    ],
    proceso: [
      { dia: "DÍA 0", titulo: "Auditoría", detalle: "Revisión de cuenta actual y benchmark de competencia." },
      { dia: "DÍA 7", titulo: "Estrategia", detalle: "Pilares, voz, calendario y plantillas aprobadas." },
      { dia: "DÍA 14", titulo: "Producción", detalle: "Primer batch de contenido publicado y pauteado." },
      { dia: "DÍA 30", titulo: "Iteración", detalle: "Reporte de performance y plan editorial mes 2." },
    ],
    pullQuote: "El contenido es la pauta orgánica de tu marca.",
    casos: [
      {
        cliente: "Cliente decoración",
        industria: "E-commerce decoración",
        resultado: "Engagement rate 3.4x con menos posts pero mejor dirigidos.",
        href: "/magazine/diagnosticos",
      },
      {
        cliente: "Cliente salud",
        industria: "Salud B2C",
        resultado: "Reels educativos generan 60% de los leads orgánicos del mes.",
        href: "/magazine/diagnosticos",
      },
      {
        cliente: "Cliente B2B",
        industria: "B2B local",
        resultado: "Carouseles manual de campo posicionaron al fundador como referente.",
        href: "/magazine/diagnosticos",
      },
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getServiceSlugs(): ServiceSlug[] {
  return services.map((s) => s.slug);
}
