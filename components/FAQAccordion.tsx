"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

export type FAQItem = {
  q: string;
  a: string;
};

export type FAQAccordionProps = {
  items: FAQItem[];
};

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <ul className="divide-y divide-ink/15 border-y border-ink/15">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <li key={i}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="group flex w-full items-center justify-between gap-6 py-6 text-left transition hover:bg-off-white/50 md:py-7"
            >
              <span className="flex items-baseline gap-4">
                <span className="mono text-[10px] tracking-widest text-ink/55">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className={cn(
                    "display normal-case leading-tight text-ink transition",
                    "text-lg md:text-2xl"
                  )}
                >
                  {item.q}
                </span>
              </span>
              <span
                className={cn(
                  "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-ink/20 transition",
                  isOpen ? "bg-ink text-cream border-ink" : "text-ink group-hover:border-ink"
                )}
              >
                {isOpen ? <Minus size={14} /> : <Plus size={14} />}
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="pb-7 pl-9 pr-12 text-base leading-relaxed text-ink/80 md:text-lg">
                    {item.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        );
      })}
    </ul>
  );
}
