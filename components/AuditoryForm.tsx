"use client";

import { motion } from "framer-motion";

export function AuditoryForm() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className="relative border border-ink/15 bg-off-white rounded-sm overflow-hidden"
    >
      <div className="absolute top-3 left-3 font-mono text-[10px] tracking-[0.2em] text-mid-gray">
        / CALENDLY EMBED
      </div>
      <div className="absolute top-3 right-3 font-mono text-[10px] tracking-[0.2em] text-mid-gray">
        AUDITORÍA · 30MIN
      </div>

      <div
        id="calendly-embed"
        className="min-h-[640px] w-full flex items-center justify-center px-6 py-20"
      >
        <div className="max-w-md text-center">
          <div className="font-mono text-[10px] tracking-[0.25em] text-mid-gray mb-4">
            / PLACEHOLDER
          </div>
          <h3 className="font-display font-black text-2xl md:text-3xl text-ink mb-4 leading-tight">
            Calendly va acá.
          </h3>
          <p className="font-body text-base text-mid-gray leading-relaxed mb-6">
            Reemplazar este bloque con el iframe / script de Calendly cuando se
            setupee la cuenta. Mientras tanto, escribinos directo:
          </p>
          <a
            href="mailto:tomasamattheus@gmail.com?subject=Auditor%C3%ADa%20gratis%20hq.leads"
            className="inline-flex items-center gap-2 bg-ink text-cream px-6 py-3 font-mono text-xs tracking-[0.2em] uppercase hover:bg-indigo transition-colors"
          >
            tomasamattheus@gmail.com
          </a>
        </div>
      </div>
    </motion.div>
  );
}
