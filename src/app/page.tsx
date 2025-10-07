import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/logo.svg";
import Saudacao from "./(componentes)/mensagensdosistema/saudacao";
import BotaoAnunciar from "./(componentes)/botoes/anunciar";
import ListarTodosAnuncios from "./(modulos)/listartodosanuncios";
import { Metadata } from "next";

export const metadata: Metadata = {
  description:
    "Venha conhecer o centro comercial Cidade Tiradentes de maneira facil e rapida. Aqui você encontra todos os produtos e serviços ao alcance do seu Whatsapp",
  openGraph: {
    title: "Ache Tudo Comércio Cidade Tiradentes",
    url: "https://www.achetudotiradentes.com.br",
    images: [
      {
        url: "/public/thumbs/thumb1.jpg", // O caminho para a imagem Open Graph
        width: 1200,
        height: 630,
      },
    ],
    siteName: "Ache Tudo Cidade Tiradentes",
    type: "website", // ou 'article', 'book', etc.
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
    { rel: "apple-touch-icon", url: "../../icon-128x128.png" },
    { rel: "icon", url: "../../icon-128x128.png" },
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

export default function Home() {
  return (
    <main
      id="principal"
      className="container mx-auto mt-0 box-border flex h-screen w-screen flex-col justify-center rounded-3xl border-20 border-white bg-gradient-to-b from-cyan-100 to-cyan-600 shadow-md shadow-gray-700"
    >
      <BotaoAnunciar />
      <header className="container m-auto h-min w-full">
        <div className="h-auto w-full text-center" id="titulo">
          <h4 className="px-3 font-semibold tracking-tight">
            Centro Comercial Cidade Tiradentes
          </h4>
        </div>
        <div className="m-auto w-81">
          <Link href="/achetudo" className="float-left m-auto" id="logo">
            <Image
              priority={false}
              alt="Ache Tudo Logo"
              src={Logo}
              width={80}
              className="pt-2 pb-2 pl-2"
            />
          </Link>
          <Saudacao />
        </div>
        <div
          className="font-botoes clear-both h-auto w-auto p-0"
          id="menu-principal"
        >
          <ul className="grid h-auto grid-cols-3 text-center text-xs">
            <li className="text-xm bg-white pt-2 pb-2 pl-2">PRODUTOS</li>
            <li className="text-xm bg-white pt-2 pb-2 pl-2">SERVIÇOS</li>
            <li className="text-xm bg-white pt-2 pb-2 pl-2">LOJAS</li>
          </ul>
        </div>
      </header>
      <section className="h-screen w-auto overflow-auto md:overflow-scroll">
        <ListarTodosAnuncios />
      </section>
    </main>
  );
}
