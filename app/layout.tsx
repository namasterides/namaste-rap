import type { Metadata } from "next";
import { Bebas_Neue, Inter, Permanent_Marker } from "next/font/google";
import "./globals.css";
import GrainOverlay from "@/components/GrainOverlay";

const display = Bebas_Neue({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const accent = Permanent_Marker({
  variable: "--font-accent",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Will Rap For Food — The podcast where bars come before brand deals",
  description:
    "The podcast where the bars come before the brand deals. Real conversations with rappers, producers, and the hungry minds shaping hip-hop.",
  openGraph: {
    title: "Will Rap For Food",
    description:
      "The podcast where the bars come before the brand deals. Real conversations with rappers, producers, and the hungry minds shaping hip-hop.",
    images: ["/og-image.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Will Rap For Food",
    description: "The podcast where the bars come before the brand deals.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${accent.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground relative overflow-x-hidden">
        <GrainOverlay />
        {children}
      </body>
    </html>
  );
}
