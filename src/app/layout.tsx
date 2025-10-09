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
  description:
    "Venha conhecer o centro comercial Cidade Tiradentes de maneira facil e rapida. Aqui você encontra todos os produtos e serviços ao alcance do seu Whatsapp",
  openGraph: {
    title: "Ache Tudo Comércio Cidade Tiradentes",
    images: [
      {
        url: "https://achetudotiradentes-nextjs-app.s3.sa-east-1.amazonaws.com/thumbs/thumb1.jpg", // O caminho para a imagem Open Graph
        width: 1200,
        height: 630,
      },
    ],
    siteName: "Ache Tudo Cidade Tiradentes",
    type: "website", // ou 'article', 'book', etc.
    url: "https://www.achetudotiradentes.com.br",
  },
  generator: "Next.js",
  manifest: "/manifest.json",
  keywords: [
    "Ache Tudo",
    "Cidade Tiradentes",
    "Ache Tudo Cidade Tiradentes",
    "Ache Tudo Tiradentes",
    "Comércio Cidade Tiradentes",
    "Comércio Tiradentes",
    "Ache Tudo e Região",
  ],
  authors: [
    {
      name: "Kaizen",
      url: "https://github.com/KaizenPunisher/",
    },
  ],
  icons: [
    { rel: "apple-touch-icon", url: "icon-128x128.png" },
    { rel: "icon", url: "icon-128x128.png" },
  ],
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
