import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Inter } from "next/font/google";
import "./globals.css";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/config/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s | ${site.brand}`,
  },
  description: site.description,
  keywords: [
    "frisör Arvika",
    "herrfrisör Arvika",
    "taper fade Arvika",
    "klippning Arvika",
    "barber Arvika",
    "skäggtrim Arvika",
    "devcutz",
    "Devin Söderberg",
    "Noiz Barbershop",
  ],
  authors: [{ name: site.person.name, url: site.url }],
  creator: site.person.name,
  openGraph: {
    type: "website",
    locale: "sv_SE",
    url: site.url,
    siteName: site.brand,
    title: site.title,
    description: site.description,
    /** Delningsbild: `opengraph-image.tsx` (next/og) – inte hero-fotot. */
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    /** Delningsbild: `twitter-image.tsx` */
  },
  alternates: {
    canonical: site.url,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0f0f0f",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <body className={`${inter.variable} min-h-dvh bg-background font-sans antialiased`}>
        <JsonLd />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
