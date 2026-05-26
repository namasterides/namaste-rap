"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "47", label: "Episodes" },
  { value: "32", label: "Guests" },
  { value: "2.1M", label: "Listens" },
];

export default function Manifesto() {
  return (
    <section id="about" className="py-24 sm:py-32 px-5 sm:px-8 border-t border-border">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4"
          >
            <p className="text-primary text-xs uppercase tracking-[0.3em] font-semibold mb-3">
              The Mission
            </p>
            <h2 className="font-display text-5xl sm:text-6xl uppercase leading-[0.9]">
              Why we<br />do this
            </h2>
            <p className="font-accent text-secondary text-2xl mt-8 leading-tight">
              no PR scripts.<br />no softball questions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-8"
          >
            <p className="text-foreground/85 text-xl sm:text-2xl leading-[1.5] font-light">
              We started this podcast because the culture deserves better than
              press-release interviews and clickbait beef. Every Tuesday, we sit
              down with the artists, producers, and behind-the-scenes operators
              who actually move the needle. No PR scripts. No softball
              questions. Just real conversations about the craft, the grind,
              and what it really costs to make it in hip-hop.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
          }}
          className="mt-20 grid grid-cols-3 border-t border-border"
        >
          {stats.map((s) => (
            <motion.div
              key={s.label}
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className="py-8 sm:py-12 border-r border-border last:border-r-0 text-center sm:text-left sm:pl-2"
            >
              <p className="font-display text-primary text-5xl sm:text-7xl lg:text-8xl leading-none">
                {s.value}
              </p>
              <p className="text-muted text-xs sm:text-sm uppercase tracking-[0.25em] mt-2 sm:mt-3">
                {s.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
