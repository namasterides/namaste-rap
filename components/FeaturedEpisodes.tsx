"use client";

import { motion } from "framer-motion";
import { Play, Clock, Calendar } from "lucide-react";
import { episodes } from "@/lib/episodes";

export default function FeaturedEpisodes() {
  return (
    <section id="episodes" className="py-24 sm:py-32 px-5 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14"
        >
          <div>
            <p className="text-primary text-xs uppercase tracking-[0.3em] font-semibold mb-3">
              New This Week
            </p>
            <h2 className="font-display text-5xl sm:text-7xl lg:text-8xl leading-[0.9] uppercase">
              Fresh off <br className="sm:hidden" />
              the mic
            </h2>
          </div>
          <a
            href="#"
            className="text-foreground/80 hover:text-primary transition-colors text-sm uppercase tracking-[0.2em] self-start sm:self-end"
          >
            View all 47 →
          </a>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6"
        >
          {episodes.map((ep) => (
            <motion.article
              key={ep.id}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
              }}
              className="group relative bg-surface border border-border hover:border-primary transition-colors duration-300 overflow-hidden"
            >
              {/* Watermark number */}
              <div className="absolute -right-4 -top-8 font-display text-[180px] leading-none text-foreground/[0.04] select-none pointer-events-none">
                #{ep.number}
              </div>

              {/* Artwork */}
              <div className={`relative aspect-square w-full bg-gradient-to-br ${ep.artworkBg} border-b border-border flex items-center justify-center`}>
                <span className="font-display text-[88px] leading-none text-foreground/30 tracking-wider">
                  {ep.artworkInitials}
                </span>
                <div className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.25em] text-foreground/60 font-semibold">
                  EP {String(ep.number).padStart(3, "0")}
                </div>
                <button
                  aria-label={`Play ${ep.title}`}
                  className="absolute bottom-4 right-4 w-12 h-12 rounded-md bg-primary text-background flex items-center justify-center group-hover:scale-105 transition-transform"
                >
                  <Play className="w-5 h-5 fill-current" />
                </button>
              </div>

              <div className="relative p-6">
                <h3 className="font-display text-2xl sm:text-3xl uppercase leading-[0.95] tracking-wide line-clamp-2">
                  {ep.title}
                </h3>
                <p className="mt-4 text-foreground text-sm">
                  w/ <span className="text-primary font-semibold">{ep.guest}</span>
                </p>
                <p className="text-muted text-xs mt-1">{ep.guestRole}</p>

                <div className="mt-6 pt-4 border-t border-border flex items-center gap-5 text-xs text-muted uppercase tracking-wider">
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    {ep.duration}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {ep.releaseDate}
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
