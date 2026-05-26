"use client";

import { motion } from "framer-motion";
import { useState, FormEvent } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <section className="py-24 sm:py-32 px-5 sm:px-8 border-t border-border">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-2xl text-center"
      >
        <p className="text-primary text-xs uppercase tracking-[0.3em] font-semibold mb-3">
          The Drop
        </p>
        <h2 className="font-display text-5xl sm:text-7xl lg:text-8xl uppercase leading-[0.9]">
          Weekly heat,<br />no spam
        </h2>
        <p className="mt-6 text-foreground/70 text-base sm:text-lg leading-relaxed">
          New episode alerts, unreleased clips, and the occasional hot take
          from the hosts.
        </p>

        <form
          onSubmit={onSubmit}
          className="mt-10 flex flex-col sm:flex-row gap-3 sm:gap-0 sm:border sm:border-border focus-within:sm:border-primary transition-colors"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="your@email.com"
            className="flex-1 bg-transparent text-foreground placeholder:text-muted px-5 py-4 outline-none border border-border sm:border-0 focus:border-primary sm:focus:border-0 transition-colors"
          />
          <button
            type="submit"
            className="bg-primary text-background font-semibold px-7 py-4 hover:bg-[#ff6e3a] transition-colors tracking-wide uppercase text-sm"
          >
            {submitted ? "You're In" : "Subscribe"}
          </button>
        </form>

        <p className="mt-5 text-muted text-sm">
          Join <span className="text-foreground font-semibold">12,400+</span>{" "}
          heads on the list.
        </p>
      </motion.div>
    </section>
  );
}
