"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { ProcessDiagram, type ProcessStep } from "./ProcessDiagram";

type ServiceDetailProps = {
  hacemos: string[];
  noHacemos: string[];
  proceso: ProcessStep[];
};

export function ServiceDetail({ hacemos, noHacemos, proceso }: ServiceDetailProps) {
  return (
    <div className="space-y-24 md:space-y-32">
      <section>
        <div className="font-mono text-[10px] md:text-xs text-mid-gray tracking-[0.25em] mb-6">
          / QUÉ HACEMOS
        </div>
        <h2 className="font-display font-black text-4xl md:text-6xl text-ink mb-12 leading-tight">
          Lo que sí.
        </h2>
        <ol className="space-y-5 md:space-y-6">
          {hacemos.map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
              className="flex gap-4 md:gap-6 border-t border-ink/10 pt-5"
            >
              <span className="font-mono text-xs md:text-sm text-indigo tracking-wider pt-1 min-w-[2rem]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex gap-3 flex-1">
                <Check className="w-5 h-5 text-indigo flex-shrink-0 mt-1" strokeWidth={2} />
                <p className="font-body text-base md:text-lg text-ink leading-relaxed">{item}</p>
              </div>
            </motion.li>
          ))}
        </ol>
      </section>

      <section>
        <div className="font-mono text-[10px] md:text-xs text-mid-gray tracking-[0.25em] mb-6">
          / QUÉ NO HACEMOS
        </div>
        <h2 className="font-display font-black text-4xl md:text-6xl text-ink mb-12 leading-tight">
          Lo que no.
        </h2>
        <ul className="space-y-5 md:space-y-6">
          {noHacemos.map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
              className="flex gap-4 md:gap-6 border-t border-ink/10 pt-5"
            >
              <span className="font-mono text-xs md:text-sm text-blood tracking-wider pt-1 min-w-[2rem]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex gap-3 flex-1">
                <X className="w-5 h-5 text-blood flex-shrink-0 mt-1" strokeWidth={2} />
                <p className="font-body text-base md:text-lg text-ink leading-relaxed">{item}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </section>

      <section>
        <div className="font-mono text-[10px] md:text-xs text-mid-gray tracking-[0.25em] mb-6">
          / CÓMO ES TRABAJAR CON NOSOTROS
        </div>
        <h2 className="font-display font-black text-4xl md:text-6xl text-ink mb-16 leading-tight">
          El proceso.
        </h2>
        <ProcessDiagram steps={proceso} />
      </section>
    </div>
  );
}
