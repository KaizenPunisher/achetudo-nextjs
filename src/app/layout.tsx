import type { Metadata } from "next";
import { Anton, Comfortaa } from "next/font/google";
import "./globals.css";

const anton = Anton({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
  variable: "--font-anton",
});

const comfortaa = Comfortaa({
  subsets: ["latin"],
  display: "swap",
  weight: ["600", "700"],
  variable: "--font-comfortaa",
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
    <html lang="pt-BR">
      <body className={`${anton.variable} ${comfortaa.variable}`}>
        {children}
      </body>
    </html>
  );
}
