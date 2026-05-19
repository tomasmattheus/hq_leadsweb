import Link from "next/link";
import { CropMarks } from "@/components/CropMarks";
import { Sticker } from "@/components/Sticker";
import { Wordmark } from "@/components/Wordmark";

export default function NotFound() {
  return (
    <section className="relative px-6 md:px-12 py-24 md:py-32 max-w-7xl mx-auto">
      <CropMarks color="light-gray" margin={24} />
      <div className="flex items-center justify-between mono text-xs text-mid-gray mb-12">
        <span>VOL.01 / SIDE B</span>
        <span>ERROR 404 / PÁGINA NO ENCONTRADA</span>
      </div>

      <h1 className="display leading-[0.88] text-ink text-[clamp(3.5rem,12vw,9rem)]">
        404.<br />
        <span className="serif-italic normal-case font-normal">no está.</span>
      </h1>

      <p className="mt-10 max-w-xl text-lg text-ink/80">
        Buscaste algo que no existe. O lo movimos. O nunca estuvo.
        <br />
        Volvé al índice y seguimos.
      </p>

      <div className="mt-10 flex items-center gap-4 flex-wrap">
        <Link href="/" className="pill pill-black">
          VOLVER AL ÍNDICE →
        </Link>
        <Link href="/magazine" className="pill pill-outline">
          IR A LA REVISTA
        </Link>
      </div>

      <div className="mt-16 flex items-center justify-between">
        <Sticker color="red" text="CAGADA, ARREGLAR" rotation={-4} size="md" />
        <Wordmark size="sm" color="black" />
      </div>
    </section>
  );
}
