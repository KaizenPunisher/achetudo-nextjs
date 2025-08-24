import type { Metadata } from "next";
import { Comfortaa, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

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

export const metadata: Metadata = {
  title: "Ache Tudo",
  description:
    "Sistema Web Mobile com objetivo de centralizar informações de comercios locais. Visando a facilidade de pesquisa de produtos e serviços em centros comerciais.",
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
