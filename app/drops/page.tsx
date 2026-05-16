import type { Metadata } from "next";
import { CalendarDropList } from "@/components/CalendarDropList";
import { MarkerAnnotation } from "@/components/MarkerAnnotation";
import { Sticker } from "@/components/Sticker";
import { Newsletter } from "@/components/Newsletter";
import { CropMarks } from "@/components/CropMarks";
import { drops, getDropsByWeek } from "@/lib/content/drops";

export const metadata: Metadata = {
  title: "Drops",
  description:
    "Drops gratis hq.leads — calculadoras, plantillas, checklists y playbooks para PyMES con producto.",
};

export default function DropsPage() {
  const dropsByWeek = getDropsByWeek();
  const total = drops.length;
  const available = drops.filter((d) => d.status === "available").length;

  return (
    <div className="relative" style={{ backgroundColor: "#FF3B6E" }}>
      <section className="relative max-w-7xl mx-auto px-6 md:px-12 pt-24 md:pt-32 pb-20 md:pb-28 crop-marks">
        <CropMarks color="cream" margin={24} />

        <div className="flex items-start justify-between mono text-[11px] tracking-widest text-cream/80 uppercase mb-10 md:mb-14">
          <span>VOL.01 / DROPS</span>
          <span>
            {String(available).padStart(2, "0")} / {String(total).padStart(2, "0")} ACTIVOS
          </span>
        </div>

        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-9">
            <h1 className="font-display font-black text-cream uppercase tracking-tight leading-[0.85] text-[18vw] md:text-[14rem] lg:text-[16rem]">
              DROPS.
            </h1>
            <p className="serif-italic text-cream text-3xl md:text-5xl lg:text-6xl mt-4 leading-tight max-w-3xl">
              calendario abierto.
            </p>
          </div>
          <div className="lg:col-span-3 flex flex-col items-end gap-6">
            <Sticker
              color="black"
              text="HQLD VOL.01"
              rotation={-6}
              size="md"
            />
            <p className="font-body text-base md:text-lg text-cream/90 max-w-xs text-right leading-snug">
              Calculadoras, checklists, plantillas y playbooks. Todo gratis.
              Email para descargar. Sin login. Sin tarjetas.
            </p>
          </div>
        </div>

        <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden lg:block pointer-events-none">
          <div
            className="w-32 h-32 opacity-50"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, #F0EBE0 1.5px, transparent 0)",
              backgroundSize: "8px 8px",
              maskImage:
                "radial-gradient(circle at center, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 70%)",
              WebkitMaskImage:
                "radial-gradient(circle at center, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 70%)",
            }}
            aria-hidden
          />
          <div className="mono text-[9px] tracking-[0.2em] text-cream/70 mt-2 text-right">
            ♟ HALFTONE
          </div>
        </div>
      </section>

      <section className="relative max-w-5xl mx-auto px-6 md:px-12 pb-24 md:pb-32">
        <div className="relative mb-12 md:mb-16 flex items-center justify-between">
          <div className="mono text-[10px] md:text-xs tracking-[0.25em] text-cream/80">
            / 04 SEMANAS · 08 DROPS
          </div>
          <div className="hidden md:block">
            <MarkerAnnotation
              text="NUEVO DROP CADA SEMANA"
              arrow="left"
              rotation={-4}
              className="!text-cream"
            />
          </div>
        </div>

        <CalendarDropList dropsByWeek={dropsByWeek} />
      </section>

      <Newsletter variant="ink" />
    </div>
  );
}
