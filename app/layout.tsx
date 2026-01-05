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
  title: "Aftab Shaik - Software Engineer",
  description:
    "Portfolio website of Aftab Shaik, a software engineer specializing in full-stack web development, React, Node.js, and cloud technologies.",
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
