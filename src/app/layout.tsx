import type { Metadata } from "next";
import { Comfortaa } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const comfortaa = Comfortaa({ subsets: ["latin"], display: "fallback" });

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
      <body className={`${comfortaa.className} antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
