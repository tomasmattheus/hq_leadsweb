"use client";

import { motion } from "framer-motion";
import { DropTicket } from "./DropTicket";
import type { Drop } from "@/lib/content/drops";

type CalendarDropListProps = {
  dropsByWeek: Record<number, Drop[]>;
};

export function CalendarDropList({ dropsByWeek }: CalendarDropListProps) {
  const weeks = Object.keys(dropsByWeek)
    .map(Number)
    .sort((a, b) => a - b);

  return (
    <div className="relative">
      <div className="absolute left-3 md:left-6 top-0 bottom-0 w-px bg-cream/40" aria-hidden />

      <div className="space-y-20 md:space-y-28">
        {weeks.map((week) => (
          <section key={week} className="relative pl-10 md:pl-20">
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="absolute left-0 top-0 flex items-center gap-3"
            >
              <div className="w-6 h-6 md:w-12 md:h-12 rounded-full bg-cream flex items-center justify-center font-mono text-[9px] md:text-xs font-bold text-ink">
                {String(week).padStart(2, "0")}
              </div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-display font-black text-3xl md:text-5xl text-cream leading-none mb-2 tracking-tight"
            >
              SEMANA {String(week).padStart(2, "0")}
            </motion.h2>
            <div className="font-mono text-[10px] md:text-xs text-cream/70 tracking-[0.25em] mb-8 md:mb-12">
              / {dropsByWeek[week].length} DROP{dropsByWeek[week].length > 1 ? "S" : ""}
            </div>

            <div className="space-y-6 md:space-y-8">
              {dropsByWeek[week].map((drop, i) => (
                <DropTicket
                  key={drop.sku}
                  sku={drop.sku}
                  title={drop.title}
                  punchline={drop.punchline}
                  format={drop.format}
                  status={drop.status}
                  week={drop.week}
                  downloadLink={drop.downloadLink}
                  index={i}
                />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
