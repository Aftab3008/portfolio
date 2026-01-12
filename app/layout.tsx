import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Shaik Aftab | Software Developer",
    template: "%s | Shaik Aftab",
  },
  description:
    "Portfolio of Shaik Aftab — a passionate Software Developer specializing in full-stack web development with React, Next.js, Node.js, and cloud technologies. Building exceptional digital experiences.",
  keywords: [
    "Shaik Aftab",
    "Software Developer",
    "Full Stack Developer",
    "React Developer",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Web Developer",
    "Portfolio",
    "Hyderabad",
    "India",
  ],
  authors: [{ name: "Shaik Aftab", url: "https://github.com/Aftab3008" }],
  creator: "Shaik Aftab",
  metadataBase: new URL("https://www.aftabshaik.space"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.aftabshaik.space",
    siteName: "Shaik Aftab Portfolio",
    title: "Shaik Aftab | Software Developer",
    description:
      "Passionate Software Developer building exceptional digital experiences with React, Next.js, Node.js, and modern web technologies.",
    images: [
      {
        url: "/profile_image.png",
        width: 1200,
        height: 630,
        alt: "Shaik Aftab - Software Developer Portfolio",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/globe.svg",
    // shortcut: "",
    // apple: "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}
        suppressHydrationWarning
      >
        <SmoothScroll
          lerp={0.08}
          duration={1.2}
          wheelMultiplier={0.8}
          touchMultiplier={1.5}
          maxScrollDelta={115}
        >
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
