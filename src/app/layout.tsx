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
  title: "Ache Tudo",
  description: "Conheça o centro comercial da Cidade Tiradentes aqui",
  generator: "Next.js",
  manifest: "/manifest.json",
  keywords: [
    "Ache Tudo",
    "Cidade Tiradentes",
    "Ache Tudo Cidade Tiradentes",
    "Ache Tudo Tiradentes",
    "Comércio Tiradentes",
    "Comércio local Tiradentes",
    "Ache Tudo e Região",
  ],
  authors: [
    {
      name: "Kaizen",
      url: "https://github.com/KaizenPunisher/",
    },
  ],

  icons: [
    { rel: "apple-touch-icon", url: "icons/icon-128x128.png" },
    { rel: "icon", url: "icons/icon-128x128.png" },
  ],
};

export function generateViewport() {
  return {
    width: "device-width",
    initialScale: 1,
  };
}

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
