import type { Metadata, Viewport } from "next";
import { Fraunces, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import config from "@/config/restaurant.json";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz", "SOFT"]
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap"
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap"
});

export const metadata: Metadata = {
  title: `${config.name} | Wraps, Bowls und Säfte in Heidelberg`,
  description:
    "Exotica City in Heidelberg, Poststraße 12. Handgerollte Wraps, Bowls, Böreks, Salate und frisch gepresste Säfte. Vor euren Augen am Tresen zubereitet.",
  keywords: ["Exotica City", "Wraps Heidelberg", "Säfte Bergheim", "Imbiss Poststraße", "Falafel Heidelberg"],
  openGraph: {
    title: `${config.name} | Wraps, Bowls und Säfte in Heidelberg`,
    description:
      "Handgerollte Wraps, Bowls und frisch gepresste Säfte. Mitten in Bergheim, Heidelberg.",
    locale: "de_DE",
    type: "website"
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#FDF6EF"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${fraunces.variable} ${geist.variable} ${geistMono.variable}`}>
      <body className="grain bg-bone text-ink">
        {children}
      </body>
    </html>
  );
}
