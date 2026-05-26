"use client";

import { motion } from "framer-motion";
import { hosts } from "@/lib/hosts";

export default function Hosts() {
  return (
    <section id="guests" className="py-24 sm:py-32 px-5 sm:px-8 border-t border-border">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-primary text-xs uppercase tracking-[0.3em] font-semibold mb-3">
            Behind the Mic
          </p>
          <h2 className="font-display text-5xl sm:text-7xl lg:text-8xl uppercase leading-[0.9]">
            Meet the mics
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6"
        >
          {hosts.map((h) => {
            const initials = h.name
              .split(" ")
              .map((p) => p.replace(/['"]/g, "")[0])
              .filter(Boolean)
              .slice(0, 3)
              .join("");

            return (
              <motion.article
                key={h.id}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
                className="group bg-surface border border-border hover:border-primary transition-colors duration-300"
              >
                <div className={`relative aspect-[4/3] w-full bg-gradient-to-br ${h.gradient} border-b border-border overflow-hidden`}>
                  <div className="absolute inset-0 grayscale group-hover:grayscale-0 transition-[filter] duration-500 flex items-center justify-center">
                    <span className="font-display text-[120px] sm:text-[160px] leading-none text-foreground/15 tracking-widest">
                      {initials}
                    </span>
                  </div>
                  <div className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.25em] text-foreground/60 font-semibold">
                    Host
                  </div>
                </div>
                <div className="p-6 sm:p-8">
                  <h3 className="font-display text-3xl sm:text-4xl uppercase tracking-wide leading-none">
                    {h.name}
                  </h3>
                  <p className="text-primary text-sm mt-2 font-medium">
                    {h.handle}
                  </p>
                  <p className="text-foreground/70 text-base mt-5 leading-relaxed">
                    {h.bio}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
