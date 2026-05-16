export const colors = {
  cream: "#F0EBE0",
  offWhite: "#F8F4EB",
  ink: "#0A0A0A",
  midGray: "#6B6B6B",
  lightGray: "#C8C2B5",
  indigo: "#5B5BD6",
  acidYellow: "#F5E663",
  bloodRed: "#C12B2B",
  hotPink: "#FF3B6E",
  safetyOrange: "#E55A1A",
} as const;

export type BrandColor = keyof typeof colors;

export const taglines = {
  principal: "Ingeniería comercial. No marketing.",
  producto: "Sistemas que venden mientras dormís.",
  icp: "Si tu producto ya funciona, lo demás es ingeniería.",
  cultura: "No buscamos clientes. Conectamos personas.",
} as const;

export const mantras = [
  "AJEDREZ NO RULETA.",
  "BIEN HECHO. PUNTO.",
  "ESTRATEGIA NO MANOTAZOS.",
  "INGENIERÍA COMERCIAL. NO MARKETING.",
  "SIN CHAMUYOS. SIN VUELTAS.",
  "POCAS PALABRAS. MUCHA ACTITUD.",
  "SISTEMAS QUE VENDEN MIENTRAS DORMÍS.",
  "CORTA Y AL PIE.",
  "EL PRODUCTO YA FUNCIONA. LO DEMÁS ES INGENIERÍA.",
  "NO BUSCAMOS CLIENTES. CONECTAMOS PERSONAS.",
] as const;

export const taxonomiaSecciones = [
  { slug: "magazine", label: "MAGAZINE", desc: "Editorial: news brief, hot takes, cultura." },
  { slug: "motor-de-ads", label: "MOTOR DE ADS", desc: "Educativo paid media: ROAS, CPL, CTR, presupuestos." },
  { slug: "manual-de-campo", label: "MANUAL DE CAMPO", desc: "Metodología paso a paso." },
  { slug: "autopsias", label: "AUTOPSIAS", desc: "Casos reales que fallaron y por qué." },
  { slug: "drops", label: "DROP", desc: "Lead magnets y herramientas gratis." },
] as const;

export const navLinks = [
  { href: "/magazine", label: "MAGAZINE" },
  { href: "/magazine/motor-de-ads", label: "MOTOR DE ADS" },
  { href: "/magazine/manual-de-campo", label: "MANUAL DE CAMPO" },
  { href: "/magazine/autopsias", label: "AUTOPSIAS" },
  { href: "/drops", label: "DROP" },
] as const;

export const footerColumns = [
  {
    title: "REVISTA",
    links: [
      { href: "/magazine", label: "Magazine" },
      { href: "/magazine/motor-de-ads", label: "Motor de Ads" },
      { href: "/magazine/manual-de-campo", label: "Manual de Campo" },
      { href: "/magazine/autopsias", label: "Autopsias" },
    ],
  },
  {
    title: "AGENCIA",
    links: [
      { href: "/trabajamos", label: "Cómo trabajamos" },
      { href: "/manifiesto", label: "Manifiesto" },
      { href: "/agenda", label: "Auditoría gratis" },
    ],
  },
  {
    title: "DROPS",
    links: [
      { href: "/drops", label: "Todos los drops" },
      { href: "/drops/calculadora-roas", label: "Calculadora ROAS" },
      { href: "/drops/checklist-auditoria", label: "Checklist Meta Ads" },
      { href: "/drops/buyer-persona", label: "Buyer Persona" },
    ],
  },
  {
    title: "CONTACTO",
    links: [
      { href: "mailto:tomasamattheus@gmail.com", label: "tomasamattheus@gmail.com" },
      { href: "https://instagram.com/hq.leads", label: "@hq.leads" },
      { href: "https://linkedin.com/company/hq-leads", label: "LinkedIn" },
      { href: "https://wa.me/5493413103383", label: "WhatsApp" },
    ],
  },
] as const;

export function pickMantra(seed?: number): string {
  const i = typeof seed === "number" ? seed % mantras.length : Math.floor(Math.random() * mantras.length);
  return mantras[i];
}
