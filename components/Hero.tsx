"use client";

import { motion } from "framer-motion";
import { Play, ArrowDown } from "lucide-react";
import { YouTube } from "@/components/SocialIcons";
import Image from "next/image";

const headline1 = "WILL RAP";
const headline2 = "FOR FOOD";

const letterVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.025, duration: 0.4, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function Hero() {
  return (
    <section className="relative min-h-svh flex flex-col justify-center pt-24 pb-12 px-5 sm:px-8 overflow-hidden">
      <div className="mx-auto w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Left content */}
        <div className="lg:col-span-7">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-primary text-xs sm:text-sm uppercase tracking-[0.25em] font-semibold mb-6"
          >
            Episode 47 — Out Now
          </motion.p>

          <h1 className="font-display text-foreground leading-[0.85] uppercase">
            <span className="block text-[18vw] sm:text-[14vw] lg:text-[9.5vw] xl:text-[8.5vw]">
              {headline1.split("").map((ch, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={letterVariants}
                  className="inline-block"
                >
                  {ch === " " ? " " : ch}
                </motion.span>
              ))}
              <motion.span
                custom={headline1.length}
                initial="hidden"
                animate="visible"
                variants={letterVariants}
                className="inline-block text-primary mx-2 sm:mx-3"
              >
                /
              </motion.span>
            </span>
            <span className="block text-[18vw] sm:text-[14vw] lg:text-[9.5vw] xl:text-[8.5vw]">
              {headline2.split("").map((ch, i) => (
                <motion.span
                  key={i}
                  custom={headline1.length + 1 + i}
                  initial="hidden"
                  animate="visible"
                  variants={letterVariants}
                  className="inline-block"
                >
                  {ch === " " ? " " : ch}
                </motion.span>
              ))}
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-8 max-w-xl text-foreground/70 text-base sm:text-lg leading-relaxed"
          >
            The podcast where the bars come before the brand deals. Real
            conversations with rappers, producers, and the hungry minds shaping
            hip-hop.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-10 flex flex-wrap gap-3 sm:gap-4"
          >
            <a
              href="#episodes"
              className="group inline-flex items-center gap-3 bg-primary text-background font-semibold px-6 py-3.5 rounded-md hover:bg-[#ff6e3a] transition-colors tracking-wide"
            >
              <Play className="w-4 h-4 fill-current" />
              Listen Latest Episode
            </a>
            <a
              href="#listen"
              className="inline-flex items-center gap-3 border border-border text-foreground font-semibold px-6 py-3.5 rounded-md hover:border-foreground transition-colors tracking-wide"
            >
              <YouTube className="w-4 h-4" />
              Watch on YouTube
            </a>
          </motion.div>
        </div>

        {/* Right pinned logo card */}
        <motion.div
          initial={{ opacity: 0, rotate: -8, y: 20 }}
          animate={{ opacity: 1, rotate: -2, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 flex justify-center lg:justify-end"
        >
          <div className="relative">
            {/* "Pin" */}
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary z-10 ring-2 ring-background" />
            <div className="relative bg-surface border border-border p-3 sm:p-4 w-65 sm:w-85 aspect-square">
              <div className="relative w-full h-full overflow-hidden border border-border bg-[#0f0f0f]">
                <Image
                  src="/logo.png"
                  alt="Will Rap For Food"
                  fill
                  priority
                  sizes="(max-width: 640px) 260px, 340px"
                  className="object-contain p-3"
                />
              </div>
              <p className="font-accent text-secondary text-center text-xl sm:text-2xl mt-3 -mb-1 leading-none">
                will rap for food
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Below-fold tease */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.1 }}
        className="mx-auto w-full max-w-7xl mt-14 lg:mt-20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
      >
        <div className="flex items-center gap-3 text-muted text-xs uppercase tracking-[0.2em]">
          <ArrowDown className="w-4 h-4 animate-bounce" />
          Scroll
        </div>
        <p className="text-muted text-xs sm:text-sm uppercase tracking-[0.2em]">
          47 Episodes <span className="text-border mx-2">|</span> 2.1M Listens{" "}
          <span className="text-border mx-2">|</span> Since 2023
        </p>
      </motion.div>
    </section>
  );
}
