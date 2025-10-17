import { Metadata } from "next";
import Topo from "./(componentes)/topo/topo";
import Banner1 from "./(componentes)/banner1/banner1";
import Slider from "./(componentes)/slider/slider";
import Conteudo from "./(componentes)/conteudo/conteudo";
import Rodape from "./(componentes)/rodape/rodape";

export function generateMetadata(): Metadata {
  return {
    description: "Site Landing Page profissional com o menor preço do mercado.",
    title: "Dio Santos Criação de Sites Landingpages",
    openGraph: {
      title: "Dio Santos Criação de Sites Landingpages",
      images: [
        {
          url: "https://achetudotiradentes-nextjs-app.s3.sa-east-1.amazonaws.com/pages/a61efd63-20d5-464d-86af-8fb1183eee41/thumbs/thumb.jpg", // O caminho para a imagem Open Graph
          width: 1200,
          height: 630,
        },
      ],
      siteName: "Dio Santos Criação de Sites Landingpages",
      type: "website", // ou 'article', 'book', etc.
      url: "https://www.achetudotiradentes.com.br/teste",
    },
    generator: "Next.js",
    keywords: [
      "Dio Santos Criação de Sites Landingpages",
      "Design de Sites",
      "Design de Landingpages",
      "Design de Sites Profissionais",
      "Design digital",
      "Criação de Sistemas Web",
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

export default function DioSantos() {
  return (
    <>
      <main
        className="relative top-0 left-0 m-0 flex h-full w-screen flex-col items-center justify-center bg-white bg-[url('https://achetudotiradentes-nextjs-app.s3.sa-east-1.amazonaws.com/pages/4570f0bd-125f-4319-846e-9e263ffa66ee/slide_1.jpg')] bg-size-[100%_100%] bg-position-[0rem_0rem] bg-no-repeat"
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
