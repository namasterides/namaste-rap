import { Instagram, XTwitter, TikTok, YouTube } from "@/components/SocialIcons";
import Link from "next/link";

const siteLinks = [
  { label: "Episodes", href: "#episodes" },
  { label: "Guests", href: "#guests" },
  { label: "Merch", href: "#" },
  { label: "Contact", href: "#" },
];

const platforms = [
  { label: "Spotify", href: "#" },
  { label: "Apple Podcasts", href: "#" },
  { label: "YouTube Music", href: "#" },
  { label: "Amazon Music", href: "#" },
  { label: "Overcast", href: "#" },
];

const socials = [
  { label: "Instagram", href: "#", Icon: Instagram },
  { label: "Twitter / X", href: "#", Icon: XTwitter },
  { label: "TikTok", href: "#", Icon: TikTok },
  { label: "YouTube", href: "#", Icon: YouTube },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10">
          <div>
            <Link
              href="/"
              className="font-display text-4xl tracking-wide leading-none flex items-baseline"
            >
              <span>WRFF</span>
              <span className="text-primary text-5xl leading-none ml-0.5">.</span>
            </Link>
            <p className="mt-5 text-foreground/65 text-sm max-w-xs leading-relaxed">
              Real conversations with the artists, producers, and operators
              shaping hip-hop.
            </p>
            <div className="mt-7 flex items-center gap-3">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-muted text-[11px] uppercase tracking-[0.3em] mb-5">
              Explore
            </p>
            <ul className="space-y-3">
              {siteLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-foreground/85 hover:text-primary transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-muted text-[11px] uppercase tracking-[0.3em] mb-5">
              Listen On
            </p>
            <ul className="space-y-3">
              {platforms.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-foreground/85 hover:text-primary transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-muted uppercase tracking-[0.2em]">
          <p>© 2026 Will Rap For Food Podcast. All bars reserved.</p>
          <p className="font-accent normal-case text-secondary/70 tracking-normal text-base">
            stay hungry.
          </p>
        </div>
      </div>
    </footer>
  );
}
