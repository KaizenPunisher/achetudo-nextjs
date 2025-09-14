//import type { Metadata } from "next";
import { Comfortaa, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { Metadata } from "next/types";

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
  title: "PWA NextJS",
  description: "Conheça o centro comercial da Cidade Tiradentes aqui",
  generator: "Next.js",
  manifest: "/manifest.json",
  keywords: ["nextjs", "next14", "pwa", "next-pwa"],
  themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#fff" }],
  authors: [
    {
      name: "Kaizen",
      url: "https://github.com/KaizenPunisher/",
    },
  ],
  viewport:
    "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover",
  icons: [
    { rel: "apple-touch-icon", url: "icons/icon-128x128.png" },
    { rel: "icon", url: "icons/icon-128x128.png" },
  ],
};
/*
export const metadata: Metadata = {
  title: "Ache Tudo",
  description:
    "Sistema Web Mobile com objetivo de centralizar informações de comercios locais. Visando a facilidade de pesquisa de produtos e serviços em centros comerciais.",
};
*/
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable}`}>
      <head>
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Ache Tudo Cidade Tiradentes" />
        <meta
          property="og:description"
          content="Venha conhecer o centro comercial Cidade Tiradentes de maneira facil e rapida. Aqui você encontra todos os produtos e serviços ao alcance do seu Whatsapp"
        />
        <meta
          property="og:image"
          content="https://achetudotiradentes-nextjs-app.s3.sa-east-1.amazonaws.com/thumbs/thumb1.png"
        />
        <meta property="og:width" content="1200" />
        <meta property="og:height" content="630" />
        <meta property="og:locale" content="pt_BR" />
        <meta
          property="og:url"
          content="https://www.achetudotiradentes.com.br"
        />
        <meta property="og:site_name" content="Ache Tudo Cidade Tiradentes" />
      </head>
      <body className={`${comfortaa.className} antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
