import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "H.A.B. Sales Invest AB | B2B Säljkonsulter",
  description:
    "Över 20 års erfarenhet av att bygga lönsam B2B-försäljning. Säljstrategi, outsourcad säljstyrka och säljträning.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
