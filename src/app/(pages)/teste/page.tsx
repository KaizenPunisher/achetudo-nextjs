import { Metadata } from "next";
import Topo from "./(componentes)/topo/topo";
import Banner1 from "./(componentes)/banner1/banner1";
import Slider from "./(componentes)/slider/slider";
import Conteudo from "./(componentes)/conteudo/conteudo";
import Rodape from "./(componentes)/rodape/rodape";

export function generateMetadata(): Metadata {
  return {
    description:
      "Pagina de teste para desenvolvimento de novas funcionalidades.",
    title: "Pagina de Teste 1",
    openGraph: {
      title: "Pagina de Teste_1",
      images: [
        {
          url: "https://achetudotiradentes-nextjs-app.s3.sa-east-1.amazonaws.com/thumbs/thumb2.jpg", // O caminho para a imagem Open Graph
          width: 1200,
          height: 630,
        },
      ],
      siteName: "Site name TESTE",
      type: "website", // ou 'article', 'book', etc.
      url: "https://www.achetudotiradentes.com.br/teste",
    },
    generator: "Next.js",
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
}

export default function Teste() {
  return (
    <>
      <main
        className="relative top-0 left-0 m-auto flex h-full w-screen flex-col items-center justify-center bg-white bg-[url('https://achetudotiradentes-nextjs-app.s3.sa-east-1.amazonaws.com/pages/4570f0bd-125f-4319-846e-9e263ffa66ee/slide_1.jpg')] bg-size-[100%_100%] bg-position-[0rem_0rem] bg-no-repeat"
        id="main"
      >
        <Topo />
        <Banner1 />
        <Slider />
        <Conteudo />
        <Rodape />
      </main>
    </>
  );
}
