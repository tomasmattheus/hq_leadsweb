"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export type PricingService = {
  service: string;
  tag: string;
  starting: string;
  description: string;
  highlight?: boolean;
};

export type PricingBlockProps = {
  services: PricingService[];
  footnote?: string;
};

export function PricingBlock({ services, footnote }: PricingBlockProps) {
  return (
    <div className="relative">
      {/* Trust statement */}
      <div className="mb-10 border border-ink/15 bg-off-white p-6 md:mb-12 md:p-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          <TrustItem
            label="FEE FIJO"
            title="Sabés lo que pagás."
            body="Mensual transparente. Sin sorpresas, sin letra chica."
          />
          <TrustItem
            label="SIN %"
            title="No cobramos % de tu spend."
            body="Nuestro incentivo es mejorar resultados, no inflar tu presupuesto."
          />
          <TrustItem
            label="BONUS"
            title="Solo si te va bien."
            body="Opcional: 5% sobre ventas atribuibles cuando supera el umbral acordado."
          />
        </div>
      </div>

      <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {services.map((s, i) => (
          <PricingRow key={s.service} service={s} index={i} />
        ))}
      </ul>

      {footnote && (
        <p className="mt-8 mono text-[10px] tracking-widest text-ink/55">{footnote}</p>
      )}
    </div>
  );
}

function TrustItem({ label, title, body }: { label: string; title: string; body: string }) {
  return (
    <div>
      <div className="mono text-[10px] tracking-widest text-indigo">{label}</div>
      <h4 className="mt-2 display text-lg normal-case leading-tight text-ink md:text-xl">
        {title}
      </h4>
      <p className="mt-2 text-sm leading-relaxed text-ink/75">{body}</p>
    </div>
  );
}

function PricingRow({ service, index }: { service: PricingService; index: number }) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      className={cn(
        "relative flex flex-col border bg-off-white p-6 transition md:p-7",
        service.highlight
          ? "border-ink bg-ink text-cream"
          : "border-ink/15 text-ink hover:border-ink"
      )}
    >
      <header className="flex items-center justify-between">
        <span
          className={cn(
            "mono text-[10px] tracking-widest",
            service.highlight ? "text-cream/70" : "text-ink/60"
          )}
        >
          {service.tag}
        </span>
        {service.highlight && (
          <span className="mono text-[9px] tracking-widest bg-acid text-ink px-2 py-1">
            POPULAR
          </span>
        )}
      </header>

      <h3
        className={cn(
          "mt-4 display text-2xl normal-case leading-tight md:text-3xl",
          service.highlight ? "text-cream cmyk-shift" : "text-ink cmyk-shift"
        )}
      >
        {service.service}
      </h3>

      <div className="mt-5 flex items-baseline gap-2">
        <span
          className={cn(
            "mono text-[10px] tracking-widest",
            service.highlight ? "text-cream/60" : "text-ink/55"
          )}
        >
          DESDE
        </span>
        <span className="display text-2xl md:text-3xl">{service.starting}</span>
      </div>

      <p
        className={cn(
          "mt-4 text-sm md:text-base",
          service.highlight ? "text-cream/85" : "text-ink/80"
        )}
      >
        {service.description}
      </p>
    </motion.li>
  );
}
