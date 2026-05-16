"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Wordmark } from "./Wordmark";
import { navLinks } from "@/lib/brand";
import { cn } from "@/lib/utils";

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-cream/85 border-b border-ink/10">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 h-16 md:h-20 flex items-center justify-between gap-4">
        <Link href="/" aria-label="hq.leads — inicio" className="flex items-center">
          <Wordmark size="sm" color="black" />
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="mono text-[11px] tracking-wider text-ink hover:text-indigo transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/agenda" className="pill pill-black hidden sm:inline-flex">
            AUDITORÍA GRATIS
          </Link>
          <button
            type="button"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            className="lg:hidden p-2 -mr-2 text-ink"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "lg:hidden border-t border-ink/10 overflow-hidden transition-[max-height,opacity] duration-300 bg-cream/95",
          open ? "max-h-[480px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="flex flex-col px-6 py-6 gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="mono text-sm text-ink hover:text-indigo"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/agenda"
            onClick={() => setOpen(false)}
            className="pill pill-black self-start mt-2 sm:hidden"
          >
            AUDITORÍA GRATIS
          </Link>
        </nav>
      </div>
    </header>
  );
}
