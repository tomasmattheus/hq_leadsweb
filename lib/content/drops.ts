export type DropStatus = "available" | "dropping_soon";

export type Drop = {
  sku: string;
  slug: string;
  title: string;
  punchline: string;
  format: string;
  status: DropStatus;
  week: number;
  downloadLink: string;
};

export const drops: Drop[] = [
  {
    sku: "HQLD-001",
    slug: "calculadora-roas",
    title: "Calculadora ROAS",
    punchline: "Tirá 3 datos, te decimos si tu pauta sangra.",
    format: "Web Next.js · 2 min",
    status: "available",
    week: 1,
    downloadLink: "https://roas.hqleads.com.ar",
  },
  {
    sku: "HQLD-002",
    slug: "calculadora-impuestos-meta",
    title: "Calculadora Impuestos Meta Ads ARG",
    punchline: "Lo que pagás de más sin saberlo.",
    format: "Google Sheet · 5 min",
    status: "available",
    week: 1,
    downloadLink: "https://impuestos.hqleads.com.ar",
  },
  {
    sku: "HQLD-003",
    slug: "buyer-persona",
    title: "Plantilla Buyer Persona",
    punchline: "En 30 min tenés el ICP que justifica cada peso de pauta.",
    format: "Notion + PDF · 30 min",
    status: "available",
    week: 2,
    downloadLink: "https://buyer.hqleads.com.ar",
  },
  {
    sku: "HQLD-004",
    slug: "checklist-auditoria",
    title: "Checklist Auditoría Meta Ads",
    punchline: "15 minutos. 24 chequeos. Te decimos si tu cuenta sangra.",
    format: "PDF · 15 min",
    status: "available",
    week: 2,
    downloadLink: "https://auditoria.hqleads.com.ar",
  },
  {
    sku: "HQLD-005",
    slug: "pack-prompts-paid-media",
    title: "Pack 20 Prompts ChatGPT Paid Media",
    punchline: "Lo que escribimos en ChatGPT cada día.",
    format: "Notion · copy/paste",
    status: "dropping_soon",
    week: 3,
    downloadLink: "https://prompts.hqleads.com.ar",
  },
  {
    sku: "HQLD-006",
    slug: "plantilla-presupuesto",
    title: "Plantilla Presupuesto Meta + Google",
    punchline: "Distribuí tu pauta sin tirar al voleo.",
    format: "Notion + Sheet · 10 min",
    status: "dropping_soon",
    week: 3,
    downloadLink: "https://presupuesto.hqleads.com.ar",
  },
  {
    sku: "HQLD-007",
    slug: "brief-newsletter",
    title: "Brief hq.leads",
    punchline: "Las 5 cosas que importan en marketing + IA, una vez por mes.",
    format: "Newsletter · mensual",
    status: "available",
    week: 4,
    downloadLink: "https://brief.hqleads.com.ar",
  },
  {
    sku: "HQLD-008",
    slug: "mini-playbook-5-metricas",
    title: "Mini-Playbook · 5 Métricas Ocultas",
    punchline: "Lo que tu agencia esconde detrás del PDF mensual.",
    format: "PDF · 8 páginas",
    status: "dropping_soon",
    week: 4,
    downloadLink: "https://metricas.hqleads.com.ar",
  },
];

export function getDropsByWeek(): Record<number, Drop[]> {
  return drops.reduce(
    (acc, drop) => {
      acc[drop.week] = acc[drop.week] ?? [];
      acc[drop.week].push(drop);
      return acc;
    },
    {} as Record<number, Drop[]>
  );
}
