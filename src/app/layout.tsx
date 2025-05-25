import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Silkscreen } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const inter = Inter({
  subsets : ["latin"],
  weight : ["400", "500", "600","700","800","900"]
})

const sansilk = Silkscreen({
  subsets: ["latin"],
  weight : ['400', '700']
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NeuroAi",
  description: "Ai Just Like Human Intelligence",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
