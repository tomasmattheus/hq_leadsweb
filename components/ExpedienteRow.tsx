"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export type ExpedienteEstado = "ARCHIVADO" | "EN AUTOPSIA" | "RESUCITADO";

export type ExpedienteRowProps = {
  caso: string;
  industria: string;
  inversion: string;
  causa: string;
  estado: ExpedienteEstado;
  href?: string;
  dark?: boolean;
  index?: number;
};

export function ExpedienteRow({
  caso,
  industria,
  inversion,
  causa,
  estado,
  href,
  dark = false,
  index = 0,
}: ExpedienteRowProps) {
  const Wrapper: React.ElementType = href ? Link : "div";
  const wrapperProps = href ? { href } : {};

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
    >
      <Wrapper
        {...wrapperProps}
        className={cn(
          "group grid grid-cols-12 items-start gap-3 border-t py-5 font-mono text-xs uppercase tracking-wide md:items-center md:py-6 md:text-sm",
          dark
            ? "border-cream/15 text-cream hover:bg-cream/5"
            : "border-ink/15 text-ink hover:bg-off-white",
          href && "cursor-pointer"
        )}
      >
        <div className="col-span-12 md:col-span-3">
          <div className={cn("text-[10px] tracking-[0.18em] md:hidden", dark ? "text-cream/60" : "text-ink/60")}>
            CASO
          </div>
          <div className="font-display text-sm font-bold normal-case tracking-normal md:text-base">
            {caso}
          </div>
        </div>

        <div className="col-span-6 md:col-span-2">
          <div className={cn("text-[10px] tracking-[0.18em] md:hidden", dark ? "text-cream/60" : "text-ink/60")}>
            INDUSTRIA
          </div>
          <div>{industria}</div>
        </div>

        <div className="col-span-6 md:col-span-2">
          <div className={cn("text-[10px] tracking-[0.18em] md:hidden", dark ? "text-cream/60" : "text-ink/60")}>
            INVERSIÓN
          </div>
          <div className={cn(dark ? "text-blood" : "text-blood")}>{inversion}</div>
        </div>

        <div className="col-span-9 md:col-span-3">
          <div className={cn("text-[10px] tracking-[0.18em] md:hidden", dark ? "text-cream/60" : "text-ink/60")}>
            CAUSA
          </div>
          <div className="normal-case">{causa}</div>
        </div>

        <div className="col-span-3 md:col-span-2 text-right">
          <span
            className={cn(
              "inline-block px-2 py-1 text-[10px] font-bold tracking-[0.15em]",
              estado === "ARCHIVADO" && (dark ? "bg-cream/10 text-cream" : "bg-ink/10 text-ink"),
              estado === "EN AUTOPSIA" && "bg-blood text-cream",
              estado === "RESUCITADO" && "bg-acid text-ink"
            )}
          >
            {estado}
          </span>
        </div>
      </Wrapper>
    </motion.div>
  );
}

export function ExpedienteHeader({ dark = false }: { dark?: boolean }) {
  return (
    <div
      className={cn(
        "hidden grid-cols-12 items-center gap-3 pb-2 font-mono text-[10px] uppercase tracking-[0.18em] md:grid",
        dark ? "text-cream/50" : "text-ink/50"
      )}
    >
      <div className="col-span-3">CASO</div>
      <div className="col-span-2">INDUSTRIA</div>
      <div className="col-span-2">INVERSIÓN QUEMADA</div>
      <div className="col-span-3">CAUSA</div>
      <div className="col-span-2 text-right">ESTADO</div>
    </div>
  );
}
