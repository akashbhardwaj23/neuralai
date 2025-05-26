import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";



const inter = Inter({
  subsets : ["latin"],
  weight : ["400", "500", "600","700","800","900"]
})


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
