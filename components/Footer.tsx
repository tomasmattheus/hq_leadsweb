import Link from "next/link";
import { Wordmark } from "./Wordmark";
import { Sticker } from "./Sticker";
import { CropMarks } from "./CropMarks";
import { footerColumns, taglines } from "@/lib/brand";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-24 border-t border-ink/15 bg-cream">
      <div className="relative mx-auto max-w-[1600px] px-6 md:px-10 py-16 crop-marks">
        <CropMarks color="ink" margin={24} />

        <div className="flex items-start justify-between gap-8 flex-wrap mb-14">
          <div className="max-w-md">
            <Wordmark size="lg" color="black" />
            <p className="mt-4 font-serif italic text-lg text-ink/80">
              {taglines.producto}
            </p>
            <p className="mt-2 mono text-[11px] text-mid-gray">
              {taglines.principal}
            </p>
          </div>

          <Sticker
            color="black"
            text="VOL.01 / SIDE A"
            rotation={-5}
            size="md"
            className="self-start"
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h3 className="mono text-[11px] tracking-wider text-mid-gray mb-4">
                {col.title}
              </h3>
              <ul className="space-y-2">
                {col.links.map((link) => {
                  const isExternal =
                    link.href.startsWith("http") ||
                    link.href.startsWith("mailto:") ||
                    link.href.startsWith("tel:");
                  return (
                    <li key={link.href}>
                      {isExternal ? (
                        <a
                          href={link.href}
                          className="text-sm text-ink hover:text-indigo transition-colors"
                          target={link.href.startsWith("http") ? "_blank" : undefined}
                          rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="text-sm text-ink hover:text-indigo transition-colors"
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-ink/15 pt-8 flex items-end justify-between gap-6 flex-wrap">
          <p className="mono text-[10px] tracking-widest text-ink uppercase max-w-md leading-relaxed">
            DISEÑADO Y EJECUTADO POR HUMANOS · INGENIERÍA COMERCIAL. NO MARKETING.
          </p>
          <div className="flex items-center gap-6 mono text-[10px] text-mid-gray uppercase tracking-widest">
            <span>HQ.LEADS · VOL.01 · {year}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
