"use client";

import { motion } from "framer-motion";

type ManifestoBlockProps = {
  variant?: "paragraph" | "principle" | "pull-quote";
  number?: string;
  title?: string;
  children: React.ReactNode;
  italicWord?: string;
  attribution?: string;
};

export function ManifestoBlock({
  variant = "paragraph",
  number,
  title,
  children,
  italicWord,
  attribution,
}: ManifestoBlockProps) {
  if (variant === "pull-quote") {
    return (
      <motion.blockquote
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative my-20 md:my-32 text-center"
      >
        <span className="absolute -top-8 -left-2 md:-top-12 md:-left-8 font-serif italic text-7xl md:text-9xl text-indigo/30 leading-none select-none">
          “
        </span>
        <p className="font-serif italic text-3xl md:text-5xl lg:text-6xl text-ink leading-[1.1] tracking-tight max-w-3xl mx-auto">
          {children}
        </p>
        {attribution && (
          <footer className="font-mono text-xs tracking-[0.2em] text-mid-gray mt-8 uppercase">
            — {attribution}
          </footer>
        )}
        <span className="absolute -bottom-12 -right-2 md:-bottom-16 md:-right-8 font-serif italic text-7xl md:text-9xl text-indigo/30 leading-none select-none">
          ”
        </span>
      </motion.blockquote>
    );
  }

  if (variant === "principle") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="border-t border-ink/15 pt-8 md:pt-10"
      >
        {number && (
          <div className="font-mono text-xs tracking-[0.25em] text-indigo mb-3">
            {number}
          </div>
        )}
        {title && (
          <h3 className="font-display font-black text-3xl md:text-4xl text-ink leading-tight mb-4">
            {title}
            {italicWord && (
              <>
                {" "}
                <span className="font-serif italic font-normal">{italicWord}</span>
              </>
            )}
          </h3>
        )}
        <div className="font-body text-base md:text-lg text-mid-gray leading-relaxed max-w-2xl">
          {children}
        </div>
      </motion.div>
    );
  }

  return (
    <motion.p
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="font-body text-lg md:text-xl text-ink leading-relaxed"
    >
      {children}
    </motion.p>
  );
}
