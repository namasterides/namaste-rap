"use client";

import { motion } from "framer-motion";

const platforms = [
  { name: "Spotify", href: "https://open.spotify.com/show/1H2V42a1Fa3ZxsPd5RsKLi?si=501346df70864911" },
  { name: "Apple Podcasts", href: "https://podcasts.apple.com/us/podcast/will-rap-for-food-podcast/id1896789740" },
  { name: "YouTube Music", href: "#" },
  { name: "Amazon Music", href: "https://music.amazon.com/podcasts/f8381529-4c80-4322-bed3-40dfc72e93ec/will-rap-for-food-podcast" },
  { name: "Overcast", href: "#" },
];

export default function ListenStrip() {
  return (
    <section
      id="listen"
      className="border-y border-border bg-background/60 backdrop-blur-sm"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-7 flex flex-col md:flex-row md:items-center gap-5 md:gap-10">
        <p className="text-muted text-[11px] uppercase tracking-[0.3em] shrink-0">
          Streaming On
        </p>
        <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
          {platforms.map((p, i) => (
            <motion.a
              key={p.name}
              href={p.href}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group relative text-foreground/80 hover:text-foreground font-display text-xl sm:text-2xl tracking-wide uppercase transition-colors"
            >
              {p.name}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-primary group-hover:w-full transition-all duration-300" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
