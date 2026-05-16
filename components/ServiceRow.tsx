"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

type ServiceRowProps = {
  number: string;
  tag: string;
  title: string;
  subtitle: string;
  href: string;
  index?: number;
};

export function ServiceRow({ number, tag, title, subtitle, href, index = 0 }: ServiceRowProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group border-t border-ink/15 py-10 md:py-14"
    >
      <Link href={href} className="grid grid-cols-12 gap-4 items-start hover:opacity-80 transition-opacity">
        <div className="col-span-2 md:col-span-1 font-mono text-xs md:text-sm text-mid-gray tracking-wider pt-2">
          {number}
        </div>
        <div className="col-span-10 md:col-span-7">
          <div className="font-mono text-[10px] md:text-xs text-mid-gray tracking-[0.2em] mb-3">
            {tag}
          </div>
          <h3 className="font-display font-black text-4xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight text-ink">
            {title}
          </h3>
          <p className="font-body text-base md:text-lg text-mid-gray mt-4 max-w-xl leading-relaxed">
            {subtitle}
          </p>
        </div>
        <div className="col-span-12 md:col-span-4 md:flex md:items-end md:justify-end mt-4 md:mt-0">
          <span className="font-mono text-xs md:text-sm uppercase tracking-wider text-ink inline-flex items-center gap-2 border-b border-ink pb-1 group-hover:border-indigo group-hover:text-indigo transition-colors">
            Cómo lo hacemos
            <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
