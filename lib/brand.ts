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
  { slug: "trabajamos", label: "TRABAJAMOS", desc: "Servicios: performance, IA, web, contenido." },
  { slug: "blog", label: "BLOG", desc: "Editorial: diagnósticos, fórmulas, hot takes." },
  { slug: "manifiesto", label: "MANIFIESTO", desc: "Por qué existe hq.leads." },
  { slug: "agenda", label: "AGENDA", desc: "Auditoría gratis 30 min." },
] as const;

export const navLinks = [
  { href: "/trabajamos", label: "TRABAJAMOS" },
  { href: "/#casos", label: "CASOS" },
  { href: "/blog", label: "BLOG" },
  { href: "/manifiesto", label: "MANIFIESTO" },
] as const;

export const footerColumns = [
  {
    title: "AGENCIA",
    links: [
      { href: "/trabajamos", label: "Cómo trabajamos" },
      { href: "/manifiesto", label: "Manifiesto" },
      { href: "/agenda", label: "Auditoría gratis" },
    ],
  },
  {
    title: "EDITORIAL",
    links: [
      { href: "/blog", label: "Blog" },
      { href: "/blog?filter=DIAGNÓSTICO", label: "Diagnósticos" },
      { href: "/blog?filter=MOTOR DE ADS", label: "Motor de Ads" },
      { href: "/blog?filter=MANUAL DE CAMPO", label: "Manual de Campo" },
    ],
  },
  {
    title: "CONTACTO",
    links: [
      { href: "mailto:tomasamattheus@gmail.com", label: "tomasamattheus@gmail.com" },
      { href: "https://wa.me/5493413103383", label: "WhatsApp" },
      { href: "https://instagram.com/hq.leads", label: "@hq.leads" },
      { href: "https://linkedin.com/company/hq-leads", label: "LinkedIn" },
    ],
  },
] as const;

export function pickMantra(seed?: number): string {
  const i = typeof seed === "number" ? seed % mantras.length : Math.floor(Math.random() * mantras.length);
  return mantras[i];
}
