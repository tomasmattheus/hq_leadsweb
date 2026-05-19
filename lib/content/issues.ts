export type MagazineSection =
  | "PORTADA"
  | "MENTALIDAD"
  | "NEWS BRIEF"
  | "MOTOR DE ADS"
  | "DIAGNÓSTICO"
  | "MANUAL DE CAMPO"
  | "DROP"
  | "HOT TAKE";

export type Issue = {
  id: string;
  number: string;
  section: MagazineSection;
  sectionSlug:
    | "portada"
    | "mentalidad"
    | "news-brief"
    | "motor-de-ads"
    | "diagnosticos"
    | "manual-de-campo"
    | "drops"
    | "hot-take";
  headline: string;
  italicWord: string;
  slug: string;
  date: string;
  weekday: "LUN" | "MAR" | "MIÉ" | "VIE";
  sticker?: { text: string; color: "red" | "yellow" | "black" };
  rotation?: number;
  hasReel?: boolean;
};

export const issues: Issue[] = [
  {
    id: "001",
    number: "001",
    section: "PORTADA",
    sectionSlug: "portada",
    headline: "AJEDREZ. no ruleta.",
    italicWord: "ruleta",
    slug: "ajedrez-no-ruleta",
    date: "06 / 05 / 2026",
    weekday: "LUN",
    sticker: { text: "SIN CHAMUYOS", color: "red" },
    rotation: -4,
    hasReel: true,
  },
  {
    id: "002",
    number: "002",
    section: "NEWS BRIEF",
    sectionSlug: "news-brief",
    headline: "5 COSAS QUE PASARON esta semana.",
    italicWord: "esta semana",
    slug: "news-brief-semana-01",
    date: "07 / 05 / 2026",
    weekday: "MAR",
    sticker: { text: "BRAND BOOK", color: "yellow" },
    rotation: 3,
  },
  {
    id: "003",
    number: "003",
    section: "MOTOR DE ADS",
    sectionSlug: "motor-de-ads",
    headline: "¿SABÉS cuál es tu CPL?",
    italicWord: "cuál",
    slug: "sabes-cual-es-tu-cpl",
    date: "08 / 05 / 2026",
    weekday: "MIÉ",
    sticker: { text: "MOTOR DE ADS", color: "yellow" },
    rotation: -3,
  },
  {
    id: "004",
    number: "004",
    section: "HOT TAKE",
    sectionSlug: "hot-take",
    headline: "PAUTAR MÁS NO te trae más clientes.",
    italicWord: "te trae",
    slug: "pautar-mas-no-trae-clientes",
    date: "10 / 05 / 2026",
    weekday: "VIE",
    sticker: { text: "HOT TAKE", color: "red" },
    rotation: 5,
    hasReel: true,
  },
  {
    id: "005",
    number: "005",
    section: "MENTALIDAD",
    sectionSlug: "mentalidad",
    headline: "MIENTRAS TODOS PAUTEAN, NOSOTROS mapeamos.",
    italicWord: "mapeamos",
    slug: "mientras-todos-pautean-mapeamos",
    date: "13 / 05 / 2026",
    weekday: "LUN",
    sticker: { text: "AJEDREZ NO RULETA", color: "yellow" },
    rotation: -3,
  },
  {
    id: "006",
    number: "006",
    section: "NEWS BRIEF",
    sectionSlug: "news-brief",
    headline: "5 COSAS QUE PASARON esta semana.",
    italicWord: "esta semana",
    slug: "news-brief-semana-02",
    date: "14 / 05 / 2026",
    weekday: "MAR",
    sticker: { text: "BRAND BOOK", color: "yellow" },
    rotation: 4,
  },
  {
    id: "007",
    number: "007",
    section: "MANUAL DE CAMPO",
    sectionSlug: "manual-de-campo",
    headline: "ASÍ ARMAMOS UN BUYER PERSONA en 30 min.",
    italicWord: "en 30 min",
    slug: "buyer-persona-30-min",
    date: "15 / 05 / 2026",
    weekday: "MIÉ",
    sticker: { text: "MANUAL DE CAMPO", color: "yellow" },
    rotation: -4,
  },
  {
    id: "008",
    number: "008",
    section: "DROP",
    sectionSlug: "drops",
    headline: "CALCULADORA ROAS hq.leads.",
    italicWord: "hq.leads",
    slug: "calculadora-roas",
    date: "17 / 05 / 2026",
    weekday: "VIE",
    sticker: { text: "DROP 01", color: "red" },
    rotation: 6,
  },
  {
    id: "009",
    number: "009",
    section: "MENTALIDAD",
    sectionSlug: "mentalidad",
    headline: "EL CLIENTE NO se gana POR SUERTE.",
    italicWord: "se gana",
    slug: "cliente-no-se-gana-por-suerte",
    date: "20 / 05 / 2026",
    weekday: "LUN",
    sticker: { text: "ESTRATEGIA NO MANOTAZOS", color: "yellow" },
    rotation: -3,
    hasReel: true,
  },
  {
    id: "010",
    number: "010",
    section: "NEWS BRIEF",
    sectionSlug: "news-brief",
    headline: "5 COSAS QUE PASARON esta semana.",
    italicWord: "esta semana",
    slug: "news-brief-semana-03",
    date: "21 / 05 / 2026",
    weekday: "MAR",
    sticker: { text: "BRAND BOOK", color: "yellow" },
    rotation: 4,
  },
  {
    id: "011",
    number: "011",
    section: "MOTOR DE ADS",
    sectionSlug: "motor-de-ads",
    headline: "5 MÉTRICAS QUE TU AGENCIA no te muestra.",
    italicWord: "no te muestra",
    slug: "5-metricas-que-tu-agencia-no-te-muestra",
    date: "22 / 05 / 2026",
    weekday: "MIÉ",
    sticker: { text: "MOTOR DE ADS", color: "yellow" },
    rotation: -4,
  },
  {
    id: "012",
    number: "012",
    section: "DIAGNÓSTICO",
    sectionSlug: "diagnosticos",
    headline: "DIAGNÓSTICO: $2M QUEMADOS en meta.",
    italicWord: "en meta",
    slug: "diagnostico-2m-quemados-meta",
    date: "24 / 05 / 2026",
    weekday: "VIE",
    sticker: { text: "DOSSIER TÉCNICO", color: "red" },
    rotation: 5,
    hasReel: true,
  },
  {
    id: "013",
    number: "013",
    section: "MENTALIDAD",
    sectionSlug: "mentalidad",
    headline: "VENDER ES prever. LO DEMÁS ES ESPERAR.",
    italicWord: "prever",
    slug: "vender-es-prever",
    date: "27 / 05 / 2026",
    weekday: "LUN",
    sticker: { text: "AJEDREZ NO RULETA", color: "yellow" },
    rotation: -3,
  },
  {
    id: "014",
    number: "014",
    section: "NEWS BRIEF",
    sectionSlug: "news-brief",
    headline: "5 COSAS QUE PASARON esta semana.",
    italicWord: "esta semana",
    slug: "news-brief-semana-04",
    date: "28 / 05 / 2026",
    weekday: "MAR",
    sticker: { text: "BRAND BOOK", color: "yellow" },
    rotation: 3,
  },
  {
    id: "015",
    number: "015",
    section: "MOTOR DE ADS",
    sectionSlug: "motor-de-ads",
    headline: "ROAS POR INDUSTRIA argentina 2026.",
    italicWord: "argentina",
    slug: "roas-por-industria-argentina-2026",
    date: "29 / 05 / 2026",
    weekday: "MIÉ",
    sticker: { text: "MOTOR DE ADS", color: "yellow" },
    rotation: -5,
  },
  {
    id: "016",
    number: "016",
    section: "MANUAL DE CAMPO",
    sectionSlug: "manual-de-campo",
    headline: "AUDITÁ TU CUENTA META en 15 min.",
    italicWord: "en 15 min",
    slug: "auditar-cuenta-meta-15-min",
    date: "31 / 05 / 2026",
    weekday: "VIE",
    sticker: { text: "MANUAL DE CAMPO", color: "yellow" },
    rotation: -4,
  },
];

export const sectionMeta: Record<
  MagazineSection,
  { slug: Issue["sectionSlug"]; title: string; description: string; mantra: string }
> = {
  PORTADA: {
    slug: "portada",
    title: "Portada",
    description: "El manifiesto. La cara del feed.",
    mantra: "INGENIERÍA COMERCIAL. NO MARKETING.",
  },
  MENTALIDAD: {
    slug: "mentalidad",
    title: "Mentalidad",
    description: "Cómo pensamos antes de gastar.",
    mantra: "AJEDREZ NO RULETA.",
  },
  "NEWS BRIEF": {
    slug: "news-brief",
    title: "News Brief",
    description: "5 cosas de marketing + IA por semana, en 4 minutos.",
    mantra: "POCAS PALABRAS. MUCHA ACTITUD.",
  },
  "MOTOR DE ADS": {
    slug: "motor-de-ads",
    title: "Motor de Ads",
    description: "Métricas, fórmulas y benchmarks reales.",
    mantra: "DATOS ANTES QUE ADJETIVOS.",
  },
  "DIAGNÓSTICO": {
    slug: "diagnosticos",
    title: "Diagnósticos",
    description: "Casos reales de pauta analizados con criterio técnico. Qué falló, por qué, cómo se corrige.",
    mantra: "EL SISTEMA QUE NO VES ES EL QUE TE GANA.",
  },
  "MANUAL DE CAMPO": {
    slug: "manual-de-campo",
    title: "Manual de Campo",
    description: "Procesos paso a paso para hacerlo vos.",
    mantra: "BIEN HECHO. PUNTO.",
  },
  DROP: {
    slug: "drops",
    title: "Drops",
    description: "Calculadoras, plantillas, herramientas. Todo gratis.",
    mantra: "CORTA Y AL PIE.",
  },
  "HOT TAKE": {
    slug: "hot-take",
    title: "Hot Take",
    description: "Una columna fuerte por semana. Sin filtro.",
    mantra: "SIN CHAMUYOS. SIN VUELTAS.",
  },
};

export function getIssuesBySection(section: MagazineSection): Issue[] {
  return issues.filter((i) => i.section === section);
}

export function getIssueBySlug(slug: string): Issue | undefined {
  return issues.find((i) => i.slug === slug);
}
