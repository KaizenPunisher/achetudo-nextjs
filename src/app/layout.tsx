//import type { Metadata } from "next";
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
          content="https://achetudotiradentes-nextjs-app.s3.sa-east-1.amazonaws.com/thumbs/d7026cdf-8c46-413e-8989-c15712e81520_1.jpg"
        />
        <meta property="og:width" content="1200" />
        <meta property="og:height" content="630" />
        <meta property="og:locale" content="pt_BR" />
        <meta
          property="og:url"
          content="https://www.achetudotiradentes.com.br"
        />
        <meta property="og:site_name" content="Ache Tudo Cidade Tiradentes" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ache Tudo Cidade Tiradentes" />
        <meta
          name="twitter:description"
          content="Venha conhecer o centro comercial Cidade Tiradentes de maneira facil e rapida. Aqui você encontra todos os produtos e serviços ao alcance do seu Whatsapp"
        />
      </head>
      <body className={`${comfortaa.className} antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
