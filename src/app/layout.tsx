import type { Metadata } from "next";
import { Inter, Pixelify_Sans, Silkscreen } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";



const inter = Inter({
  subsets : ["latin"],
  weight : ["400", "500", "600","700","800","900"]
})


const silkScreen = Silkscreen({
  subsets : ["latin"],
  weight : ["400", "700"],
  variable: '--font-silkscreen',
  display : 'swap'
})

const pixelSans = Pixelify_Sans({
  subsets : ["latin"],
  weight : ["400", "500", "600", "700"],
  variable : '--font-pixel-sans',
  display : "swap"
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
      <body className={`${inter.className} ${silkScreen.variable} ${pixelSans.variable} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
