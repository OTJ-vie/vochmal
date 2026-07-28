import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import ScrollToTop from "@/components/ui/ScrollToTop";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vochmal.com"),
  title: {
    default: "Vochmal Limited — Diversified Excellence Across Nigeria",
    template: "%s | Vochmal Limited",
  },
  description:
    "Vochmal Limited is a leading Nigerian conglomerate operating across construction, mining, bakery, general procurement, service apartments, and oil & gas. International standards. Nigerian roots.",
  keywords: [
    "Vochmal Limited",
    "Nigerian construction company",
    "mining Nigeria",
    "service apartments Lagos",
    "oil and gas Nigeria",
    "general procurement Nigeria",
    "bakery Nigeria",
  ],
  alternates: {
    canonical: "https://vochmal.com",
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://vochmal.com",
    siteName: "Vochmal Limited",
    title: "Vochmal Limited — Diversified Excellence Across Nigeria",
    description:
      "A leading Nigerian conglomerate with six business divisions: construction, mining, bakery, procurement, service apartments, and oil & gas.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1590479773265-7464e5d48118?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Vochmal Limited",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vochmal Limited — Diversified Excellence Across Nigeria",
    description:
      "A leading Nigerian conglomerate with six business divisions: construction, mining, bakery, procurement, service apartments, and oil & gas.",
  },
  other: {
    "theme-color": "#0f172a",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`} suppressHydrationWarning>
      <body className="font-body min-h-screen flex flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
        <ScrollToTop />
      </body>
    </html>
  );
}
