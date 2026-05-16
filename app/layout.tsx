import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/react";
import { fontVariables } from "@/lib/fonts";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import "./globals.css";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://hqleads.com.ar";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "hq.leads — Ingeniería comercial con IA para PyMES con producto.",
    template: "%s · hq.leads",
  },
  description:
    "hq.leads — Ingeniería comercial con IA para PyMES con producto. Sistemas que venden mientras dormís. Sin chamuyos.",
  keywords: [
    "paid media",
    "meta ads",
    "google ads",
    "agencia performance",
    "rosario",
    "argentina",
    "ingeniería comercial",
    "automatización IA",
    "PyMES",
  ],
  authors: [{ name: "Tomás Mattheus", url: SITE_URL }],
  creator: "hq.leads",
  publisher: "hq.leads",
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: SITE_URL,
    title: "hq.leads — Ingeniería comercial. No marketing.",
    description: "Sistemas comerciales para PyMES con producto. Sin chamuyos.",
    siteName: "hq.leads",
  },
  twitter: {
    card: "summary_large_image",
    title: "hq.leads — Ingeniería comercial. No marketing.",
    description: "Sistemas comerciales para PyMES con producto. Sin chamuyos.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export const viewport: Viewport = {
  themeColor: "#F0EBE0",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-AR" className={fontVariables}>
      <body>
        <Nav />
        <main className="min-h-[60vh]">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
