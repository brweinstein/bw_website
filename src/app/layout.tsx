import type { Metadata } from "next";
import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ben Weinstein - Portfolio",
  description: "Honours Mathematics student at University of Waterloo, passionate about Rust, data science, and unique projects.",
  keywords: ["Ben Weinstein", "Portfolio", "University of Waterloo", "Mathematics", "Rust", "Data Science", "TypeScript", "Python"],
  authors: [{ name: "Ben Weinstein" }],
  openGraph: {
    title: "Ben Weinstein - Portfolio",
    description: "Honours Mathematics student at University of Waterloo, passionate about Rust, data science, and unique projects.",
    url: "https://weinstein.vercel.app",
    siteName: "Ben Weinstein Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ben Weinstein - Portfolio",
    description: "Honours Mathematics student at University of Waterloo, passionate about Rust, data science, and unique projects.",
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
        className={`${geistSans.variable} ${geistMono.variable} ${jetbrainsMono.variable} antialiased font-mono`}
      >
        {children}
      </body>
    </html>
  );
}
