export default function Loading() {
  return (
    <section className="px-6 md:px-12 py-24 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mono text-xs text-mid-gray mb-12">
        <span>VOL.01 / SIDE A</span>
        <span>CARGANDO…</span>
      </div>
      <div className="display leading-none text-ink/30 animate-pulse text-[clamp(2.5rem,7vw,4.5rem)]">
        cargando<span className="text-indigo">.</span>
      </div>
      <p className="mono text-xs text-mid-gray mt-8">UN SEGUNDO. SIN VUELTAS.</p>
    </section>
  );
}
