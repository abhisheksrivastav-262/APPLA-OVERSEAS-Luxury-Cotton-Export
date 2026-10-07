import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Floating, Preloader } from "@/components/Chrome";
import { SITE } from "@/data/site";

const display = Playfair_Display({ variable: "--font-display", subsets: ["latin"] });
const body = Inter({ variable: "--font-body", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "APPLA OVERSEAS | Premium Cotton Textile Manufacturer & Exporter",
  description: "APPLA OVERSEAS – luxury 100% cotton bedsheets, comforters, mattress protectors & hotel linen. OEM manufacturing & worldwide export from India to 25+ countries.",
  keywords: ["cotton bedsheets exporter", "hotel linen manufacturer India", "comforter exporter", "mattress protector OEM", "APPLA OVERSEAS"],
  openGraph: {
    title: "APPLA OVERSEAS – Crafting Premium Cotton Comfort for the World",
    description: "Luxury cotton bedding manufacturer & exporter. Hotel linen, comforters, protectors, OEM private label.",
    type: "website",
  },
  icons: { icon: "/wovica-logo.jpeg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <Preloader />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Floating />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org", "@type": "Organization",
          name: SITE.name, slogan: SITE.tagline,
          telephone: SITE.phone, email: SITE.email,
          address: { "@type": "PostalAddress", streetAddress: "779/1, Sisona Road, Basant Vihar, Saket", addressLocality: "Muzaffarnagar", postalCode: "251001", addressCountry: "IN" },
        })}} />
      </body>
    </html>
  );
}
