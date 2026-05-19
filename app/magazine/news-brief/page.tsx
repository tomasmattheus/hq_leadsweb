import type { Metadata } from "next";
import Link from "next/link";
import { CropMarks } from "@/components/CropMarks";
import { Sticker } from "@/components/Sticker";
import { Newsletter } from "@/components/Newsletter";
import { getIssuesBySection, sectionMeta } from "@/lib/content/issues";

export const metadata: Metadata = {
  title: "News Brief — 5 cosas por semana, 4 minutos",
  description:
    "Sección News Brief de la revista hq.leads. 5 noticias de marketing + IA por semana, en 4 minutos.",
};

export default function NewsBriefPage() {
  const sectionIssues = getIssuesBySection("NEWS BRIEF");
  const meta = sectionMeta["NEWS BRIEF"];

  return (
    <>
      <section className="relative bg-cream pb-16 pt-16 md:pt-24 crop-marks">
        <CropMarks color="light-gray" margin={24} />

        <div className="relative z-10 mx-auto w-full max-w-[1100px] px-6 md:px-12">
          <header className="flex flex-wrap items-end justify-between gap-6 border-b border-ink/15 pb-10">
            <div>
              <div className="mono text-[11px] text-ink/60">SECCIÓN 01 · NEWS BRIEF</div>
              <h1 className="mt-3 display text-[12vw] leading-[0.9] text-ink md:text-[6.5rem]">
                NEWS <span className="serif-italic font-normal normal-case">brief.</span>
              </h1>
              <p className="mt-4 max-w-xl text-ink/80">{meta.description}</p>
            </div>
            <Sticker text="BRAND BOOK" color="yellow" rotation={-4} size="md" />
          </header>

          {/* Newsletter archive list */}
          <ol className="mt-12 divide-y divide-ink/15 border-y border-ink/15">
            {sectionIssues.map((issue, i) => {
              const [before, after] = issue.headline.split(issue.italicWord);
              return (
                <li key={issue.id}>
                  <Link
                    href="/agenda"
                    className="group grid grid-cols-12 items-start gap-4 py-7 transition hover:bg-off-white md:items-center md:py-9"
                  >
                    <div className="col-span-3 md:col-span-2">
                      <div className="mono text-[11px] text-ink/60">SEMANA {String(i + 1).padStart(2, "0")}</div>
                      <div className="mt-1 mono text-[10px] text-ink/50">{issue.date}</div>
                    </div>
                    <div className="col-span-7 md:col-span-8">
                      <h2 className="display text-2xl leading-[1.05] normal-case tracking-tight text-ink md:text-3xl">
                        {before}
                        <span className="serif-italic font-normal">{issue.italicWord}</span>
                        {after}
                      </h2>
                      <div className="mt-2 mono text-[10px] text-ink/60">
                        5 NOTICIAS · LECTURA 4 MIN · IA + GROWTH + MARKETING
                      </div>
                    </div>
                    <div className="col-span-2 text-right mono text-[11px] text-ink transition group-hover:translate-x-1">
                      LEER →
                    </div>
                  </Link>
                </li>
              );
            })}
          </ol>

          <div className="mt-16 flex flex-wrap items-end justify-between gap-4 border-t border-ink/15 pt-6 mono text-[10px] text-ink/60">
            <span>{meta.mantra}</span>
            <span>HQ.LEADS / VOL.01 / NEWS BRIEF / {sectionIssues.length} ISSUES</span>
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
