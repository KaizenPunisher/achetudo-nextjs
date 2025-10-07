import { Comfortaa, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { Metadata } from "next";

const comfortaa = Comfortaa({
  subsets: ["latin"],
  display: "fallback",
  variable: "--font-comfortaa",
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-inter",
});

export function generateViewport() {
  return {
    width: "device-width",
    initialScale: 1,
  };
}

export const metadata: Metadata = {
  title: {
    default: "Ache Tudo Comércio Cidade Tiradentes",
    template: "%s | Ache Tudo",
    absolute: "Comércio Cidade Tiradentes - Ache Tudo",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable}`}>
      <body className={`${comfortaa.className} antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
