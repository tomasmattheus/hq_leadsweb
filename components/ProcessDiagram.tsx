"use client";

import { motion } from "framer-motion";

export type ProcessStep = {
  dia: string;
  titulo: string;
  detalle: string;
};

type ProcessDiagramProps = {
  steps: ProcessStep[];
};

export function ProcessDiagram({ steps }: ProcessDiagramProps) {
  return (
    <div className="relative">
      <div className="hidden md:block absolute top-12 left-0 right-0 h-px bg-ink/15" aria-hidden />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 relative">
        {steps.map((step, i) => (
          <motion.div
            key={step.dia}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.1 }}
            className="relative"
          >
            <div className="hidden md:block absolute top-10 left-0 w-4 h-4 rounded-full bg-indigo border-4 border-cream" aria-hidden />
            <div className="md:pl-8">
              <div className="font-mono text-[10px] md:text-xs tracking-[0.2em] text-mid-gray mb-3">
                {step.dia}
              </div>
              <h4 className="font-display font-black text-2xl md:text-3xl text-ink leading-tight mb-2">
                {step.titulo}
              </h4>
              <p className="font-body text-sm md:text-base text-mid-gray leading-relaxed">
                {step.detalle}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
