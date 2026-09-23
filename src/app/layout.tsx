import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/ThemeProvider";
import { SmoothScroll } from "../components/SmoothScroll";
import { ScrollProgress } from "../components/ScrollProgress";
import { Preloader } from "../components/Preloader";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://roja-portfolio.vercel.app"),
  title: "ROJA J | Aspiring Software Development Engineer | Full-Stack & AI Developer",
  description:
    "Portfolio of Roja J — Aspiring Software Development Engineer specializing in Full-Stack and AI Development. B.Tech IT graduate skilled at building scalable, impactful solutions.",
  authors: [{ name: "Roja J" }],
  keywords: [
    "Roja J",
    "Software Development Engineer",
    "Full-Stack Developer",
    "AI Developer",
    "Machine Learning",
    "Computer Vision",
    "B.Tech Information Technology",
    "Portfolio",
  ],
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "ROJA J | Aspiring Software Development Engineer",
    description:
      "Aspiring Software Development Engineer | Full-Stack & AI Developer. Turning ideas into working, scalable applications.",
    url: "https://roja-portfolio.vercel.app",
    siteName: "Roja J Portfolio",
    images: [
      {
        url: "/images/profile.jpg",
        width: 800,
        height: 800,
        alt: "Roja J Headshot",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ROJA J | Aspiring Software Development Engineer",
    description: "Aspiring Software Development Engineer | Full-Stack & AI Developer Portfolio.",
    images: ["/images/profile.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased min-h-screen relative`}>
        <ThemeProvider>
          <SmoothScroll>
            {/* Ambient CSS Noise Texture Grain Overlay */}
            <div className="grain-overlay" aria-hidden="true" />
            
            {/* Top Fixed Scroll Progress */}
            <ScrollProgress />

            {/* 1.2s Monogram Preloader */}
            <Preloader />

            {children}
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
