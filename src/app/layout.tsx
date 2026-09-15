import type { Metadata, Viewport } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Emmanuel Oso — Backend Software Engineer",
  description:
    "Backend software engineer building payment infrastructure in Java, Spring Boot, and PHP.",
  keywords: [
    "Emmanuel Oso",
    "Backend Engineer",
    "Software Engineer",
    "Java",
    "Spring Boot",
    "PHP",
    "NIBSS",
    "Payments",
  ],
  authors: [{ name: "Emmanuel Oso" }],
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} dark`}>
      <body className="font-mono bg-[var(--bg)] text-[var(--fg)] min-h-screen">
        {children}
      </body>
    </html>
  );
}
