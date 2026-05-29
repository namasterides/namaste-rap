"use client";

import { motion } from "framer-motion";
import { ShoppingBag, Tag } from "lucide-react";
import { products, type Product } from "@/lib/products";

const categoryGradient: Record<Product["category"], string> = {
  Tees: "from-primary/25 via-primary/5 to-transparent",
  Hoodies: "from-[#2d2d2d] via-surface to-transparent",
  Headwear: "from-secondary/20 via-secondary/5 to-transparent",
  Accessories: "from-primary/15 via-surface to-transparent",
};

const tagStyles: Record<NonNullable<Product["tag"]>, string> = {
  "New Drop": "bg-primary text-background",
  Limited: "bg-secondary text-background",
  "Best Seller": "bg-foreground text-background",
  "Fan Fave": "bg-primary/20 text-primary border border-primary/40",
};

function ColorSwatch({ color }: { color: string }) {
  return (
    <span
      className="w-4 h-4 rounded-full border border-border inline-block"
      style={{ background: color }}
    />
  );
}

export default function Shop() {
  return (
    <section id="shop" className="py-24 sm:py-32 px-5 sm:px-8 bg-surface/30">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14"
        >
          <div>
            <p className="text-primary text-xs uppercase tracking-[0.3em] font-semibold mb-3">
              Official Merch
            </p>
            <h2 className="font-display text-5xl sm:text-7xl lg:text-8xl leading-[0.9] uppercase">
              Rep the <br className="sm:hidden" />
              culture
            </h2>
          </div>
          <p className="text-foreground/50 text-sm max-w-xs sm:text-right leading-relaxed self-start sm:self-end">
            Gear for the ones who stay hungry.
            <br />
            Drop your email — shop launching soon.
          </p>
        </motion.div>

        {/* Product Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.09 } },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
                },
              }}
              className="group relative bg-surface border border-border hover:border-primary transition-colors duration-300 overflow-hidden flex flex-col"
            >
              {/* Placeholder Image Area */}
              <div
                className={`relative aspect-square w-full overflow-hidden bg-linear-to-br ${categoryGradient[product.category]} border-b border-border flex items-center justify-center`}
              >
                {/* Watermark category text */}
                <span className="absolute -right-3 -bottom-4 font-display text-[100px] leading-none text-foreground/5 select-none pointer-events-none uppercase">
                  {product.category.slice(0, 3)}
                </span>

                {/* Center icon */}
                <div className="relative flex flex-col items-center gap-3 opacity-30 group-hover:opacity-50 transition-opacity duration-300">
                  <ShoppingBag className="w-16 h-16 stroke-1 text-foreground" />
                  <span className="font-display text-xs uppercase tracking-[0.3em] text-foreground">
                    {product.category}
                  </span>
                </div>

                {/* Category badge */}
                <div className="absolute top-3 left-3 text-[10px] uppercase tracking-[0.25em] text-foreground/80 font-semibold bg-background/60 backdrop-blur-sm px-2 py-1 border border-border">
                  {product.category}
                </div>

                {/* Tag badge */}
                {product.tag && (
                  <div
                    className={`absolute top-3 right-3 text-[10px] uppercase tracking-[0.2em] font-bold px-2 py-1 ${tagStyles[product.tag]}`}
                  >
                    {product.tag}
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="relative p-6 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="font-display text-2xl sm:text-3xl uppercase leading-[0.95] tracking-wide">
                    {product.name}
                  </h3>
                  <span className="font-display text-xl text-primary shrink-0 leading-none mt-1">
                    ${product.price}
                  </span>
                </div>

                <p className="text-foreground/60 text-sm leading-relaxed mt-2 flex-1">
                  {product.description}
                </p>

                {/* Color swatches */}
                {product.colors.length > 0 && (
                  <div className="mt-4 flex items-center gap-2">
                    <Tag className="w-3 h-3 text-muted" />
                    <div className="flex items-center gap-1.5">
                      {product.colors.map((c) => (
                        <ColorSwatch key={c} color={c} />
                      ))}
                    </div>
                  </div>
                )}

                {/* CTA */}
                <div className="mt-6 pt-4 border-t border-border">
                  <button
                    disabled
                    className="w-full bg-primary/10 border border-primary/30 text-primary font-semibold text-sm py-3 uppercase tracking-[0.2em] cursor-not-allowed opacity-80 hover:opacity-100 transition-opacity"
                  >
                    Notify Me at Launch
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-14 border border-border bg-surface p-8 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div>
            <p className="font-display text-2xl uppercase tracking-wide">
              Shop drops first.
            </p>
            <p className="text-foreground/55 text-sm mt-1">
              Subscribers get early access and exclusive pricing.
            </p>
          </div>
          <a
            href="#newsletter"
            className="shrink-0 bg-primary text-background font-semibold text-sm px-7 py-3 hover:bg-[#ff6e3a] transition-colors tracking-wide uppercase"
          >
            Join the List
          </a>
        </motion.div>
      </div>
    </section>
  );
}
