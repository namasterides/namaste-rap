"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function GuestCTA() {
  return (
    <section className="bg-surface border-y border-border px-5 sm:px-8 py-24 sm:py-32 relative overflow-hidden">
      {/* Decorative giant slash, matching hero */}
      <div className="absolute -left-10 top-1/2 -translate-y-1/2 font-display text-[40vw] sm:text-[28vw] text-primary/[0.04] leading-none select-none pointer-events-none">
        /
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="relative mx-auto max-w-5xl text-center"
      >
        <p className="font-accent text-secondary text-2xl sm:text-3xl mb-4">
          pitch us
        </p>
        <h2 className="font-display text-6xl sm:text-8xl lg:text-9xl uppercase leading-[0.9]">
          Got bars?<br />
          <span className="text-primary">Got stories?</span>
        </h2>
        <p className="mt-8 text-foreground/75 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
          We&apos;re always looking for the next voice. Pitch yourself or
          someone you think the world needs to hear.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4">
          <a
            href="#"
            className="group inline-flex items-center gap-3 bg-primary text-background font-semibold text-base sm:text-lg px-8 py-4 rounded-md hover:bg-[#ff6e3a] transition-colors tracking-wide"
          >
            Apply to be a Guest
            <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <p className="text-muted text-sm">
            We respond to every pitch within 48 hours.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
