"use client";

import { useState } from "react";
import { Sticker } from "./Sticker";
import { cn } from "@/lib/utils";

interface NewsletterProps {
  className?: string;
  variant?: "cream" | "ink";
}

export function Newsletter({ className, variant = "cream" }: NewsletterProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "ok" | "err">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setStatus("err");
      return;
    }
    setStatus("submitting");
    try {
      // TODO: integrar Mailerlite/Resend cuando esté la API.
      await new Promise((r) => setTimeout(r, 600));
      setStatus("ok");
      setEmail("");
    } catch {
      setStatus("err");
    }
  }

  const isInk = variant === "ink";

  return (
    <section
      className={cn(
        "relative w-full px-6 md:px-12 py-14 md:py-20 border-y",
        isInk ? "bg-ink text-cream border-ink" : "bg-off-white text-ink border-ink/15",
        className
      )}
    >
      <div className="mx-auto max-w-[1400px] flex flex-col md:flex-row md:items-end md:justify-between gap-10">
        <div className="flex-1 max-w-2xl">
          <Sticker
            color={isInk ? "yellow" : "red"}
            text="BRIEF SEMANAL"
            rotation={-4}
            size="sm"
            className="mb-5"
          />
          <h2 className="display text-5xl md:text-7xl leading-[0.92]">
            BRIEF SEMANAL{" "}
            <span className="serif-italic font-normal normal-case">gratis.</span>
          </h2>
          <p className="mt-4 text-base md:text-lg opacity-80 max-w-lg">
            5 cosas que importan en paid media + IA. Una vez por semana, en tu mail.
            Sin spam. Sin sponsored.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3 w-full md:w-auto md:min-w-[420px]"
          noValidate
        >
          <label className="sr-only" htmlFor="newsletter-email">
            Tu email
          </label>
          <input
            id="newsletter-email"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (status === "err") setStatus("idle");
            }}
            placeholder="tu@email.com"
            required
            className={cn(
              "flex-1 px-4 py-3 bg-transparent border outline-none focus:ring-2 focus:ring-indigo transition",
              isInk
                ? "border-cream/40 placeholder:text-cream/40 text-cream"
                : "border-ink/30 placeholder:text-ink/40 text-ink"
            )}
          />
          <button
            type="submit"
            disabled={status === "submitting"}
            className={cn(
              "pill",
              isInk ? "pill-indigo" : "pill-black",
              "px-5 py-3 text-xs"
            )}
          >
            {status === "submitting" ? "ENVIANDO…" : status === "ok" ? "LISTO. REVISÁ TU MAIL." : "SUMARME →"}
          </button>
        </form>
      </div>

      {status === "err" && (
        <p className="mt-4 mono text-[11px] text-blood max-w-[1400px] mx-auto">
          REVISÁ EL EMAIL. NO PARECE VÁLIDO.
        </p>
      )}
    </section>
  );
}
