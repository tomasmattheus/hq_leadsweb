"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { DropStatus } from "@/lib/content/drops";

type DropTicketProps = {
  sku: string;
  title: string;
  punchline?: string;
  format: string;
  status: DropStatus;
  week: number;
  downloadLink: string;
  index?: number;
};

export function DropTicket({
  sku,
  title,
  punchline,
  format,
  status,
  week,
  downloadLink,
  index = 0,
}: DropTicketProps) {
  const statusLabel = status === "available" ? "AVAILABLE" : "DROPPING SOON";
  const statusColor =
    status === "available" ? "bg-acid text-ink" : "bg-ink text-cream";
  const isAvailable = status === "available";

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="relative bg-cream text-ink rounded-sm shadow-[0_8px_30px_rgba(0,0,0,0.12)] overflow-hidden"
    >
      <div className="grid grid-cols-12 gap-0 min-h-[180px]">
        <div className="col-span-12 md:col-span-2 border-b md:border-b-0 md:border-r border-dashed border-ink/30 p-5 md:p-6 flex md:flex-col items-center md:items-start justify-between md:justify-center gap-4">
          <div>
            <div className="font-mono text-[10px] tracking-[0.2em] text-mid-gray mb-1">SKU</div>
            <div className="font-mono text-sm md:text-base font-bold text-ink">{sku}</div>
          </div>
          <div className="md:mt-4">
            <div className="font-mono text-[10px] tracking-[0.2em] text-mid-gray mb-1">SEM</div>
            <div className="font-mono text-sm md:text-base font-bold text-ink">{String(week).padStart(2, "0")}</div>
          </div>
        </div>

        <div className="col-span-12 md:col-span-7 p-5 md:p-7">
          <h3 className="font-display font-black text-2xl md:text-3xl lg:text-4xl text-ink leading-tight mb-2">
            {title}
            <span className="text-indigo">.</span>
          </h3>
          {punchline && (
            <p className="font-serif italic text-base md:text-lg text-mid-gray leading-snug mb-4">
              {punchline}
            </p>
          )}
          <div className="font-mono text-[10px] md:text-xs tracking-[0.2em] text-mid-gray uppercase">
            {format}
          </div>
        </div>

        <div className="col-span-12 md:col-span-3 border-t md:border-t-0 md:border-l border-dashed border-ink/30 p-5 md:p-6 flex flex-col justify-between gap-4">
          <span
            className={`inline-block px-3 py-1.5 font-mono text-[10px] tracking-[0.2em] font-bold w-fit ${statusColor}`}
            style={{ transform: "rotate(-2deg)" }}
          >
            {statusLabel}
          </span>
          {isAvailable ? (
            <a
              href={downloadLink}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs md:text-sm uppercase tracking-wider text-ink inline-flex items-center gap-2 border-b border-ink pb-1 hover:text-indigo hover:border-indigo transition-colors w-fit"
            >
              Descargar
              <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
            </a>
          ) : (
            <span className="font-mono text-xs md:text-sm uppercase tracking-wider text-mid-gray">
              Próximamente
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}
