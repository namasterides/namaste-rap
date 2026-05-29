"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const links = [
  { label: "Episodes", href: "#episodes" },
  { label: "About", href: "#about" },
  { label: "Guests", href: "#guests" },
  { label: "Shop", href: "#shop" },
  { label: "Listen", href: "#listen" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-5 sm:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 leading-none">
          <Image
            src="/logo.png"
            alt="Will Rap For Food"
            width={140}
            height={56}
            priority
            className="h-10 sm:h-11 w-auto"
          />
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-foreground/80 hover:text-foreground transition-colors tracking-wide"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#listen"
          className="bg-primary text-background font-semibold text-sm px-5 py-2.5 rounded-md hover:bg-[#ff6e3a] transition-colors tracking-wide"
        >
          Subscribe
        </a>
      </nav>
    </header>
  );
}
