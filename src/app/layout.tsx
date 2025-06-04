import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kukje Gallery - Contemporary Art in Seoul",
  description:
    "Kukje Gallery showcases contemporary art exhibitions, featuring both Korean and international artists. Located in Seoul, Korea.",
  keywords: [
    "art gallery",
    "contemporary art",
    "Seoul",
    "exhibitions",
    "Korean art",
  ],
  authors: [{ name: "Kukje Gallery" }],
  creator: "Kukje Gallery",
  publisher: "Kukje Gallery",
  openGraph: {
    title: "Kukje Gallery - Contemporary Art in Seoul",
    description:
      "Discover contemporary art exhibitions at Kukje Gallery in Seoul, Korea.",
    url: "https://kukjegallery.com",
    siteName: "Kukje Gallery",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kukje Gallery - Contemporary Art in Seoul",
    description:
      "Discover contemporary art exhibitions at Kukje Gallery in Seoul, Korea.",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className="font-sans antialiased">
        <div id="__next">{children}</div>
      </body>
    </html>
  );
}
