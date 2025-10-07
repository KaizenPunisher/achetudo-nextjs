"use client";

import { useEffect, useState } from "react";
import { Metadata } from "next";

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
  const [animateRodape, setAnimateRodape] = useState("");

  useEffect(() => {
    const rolagem = () => {
      const value = window.scrollY;
      const slider = document.getElementById("slider") as HTMLElement;
      const chamada_1 = document.getElementById("chamada_1") as HTMLElement;

      if (slider) slider.style.top = `${value * -1}px`;
      if (value > 200) {
        chamada_1.style.left = `${(value - 205) * -1}px`;
      }
      console.log(
        document.body.scrollHeight,
        window.innerHeight,
        window.scrollY,
      );

      if (value > document.body.scrollHeight - window.innerHeight - 10) {
        setAnimateRodape("animate-rodape-up");
      }
      if (value < document.body.scrollHeight - window.innerHeight - 30) {
        setAnimateRodape("animate-rodape-down");
      }
    };

    window.addEventListener("scroll", rolagem);
  }, []);

  return (
    <>
      <main
        className="relative top-0 left-0 m-auto flex h-full w-screen flex-col items-center justify-center bg-white bg-[url('https://achetudotiradentes-nextjs-app.s3.sa-east-1.amazonaws.com/pages/4570f0bd-125f-4319-846e-9e263ffa66ee/slide_1.jpg')] bg-size-[100%_100%] bg-position-[0rem_0rem] bg-no-repeat"
        id="main"
      >
        <header className="fixed top-0 left-0 z-20 m-auto w-full bg-gray-800 p-4">
          <div className="flex justify-center">
            <h1 className="text-2xl font-bold text-white">Dio Santos</h1>
          </div>
        </header>
        <div
          className="fixed top-0 left-0 z-10 h-60 w-50 border-4 border-black pt-20"
          id="chamada_1"
        >
          <figure className="h-150 w-40 bg-blue-500"></figure>
        </div>
        <div className="relative h-160 w-full bg-gray-600 lg:h-240" id="slider">
          <figure className="absolute h-full w-full bg-amber-600"></figure>
          <figure className="animate-slider absolute top-0 left-0 h-full w-full bg-red-700 opacity-0 transition-opacity delay-4000"></figure>
          <figure className="animate-slider absolute top-0 left-0 h-full w-full bg-green-700 opacity-0 transition-opacity delay-10000"></figure>
        </div>
        <div className="static m-auto h-full w-auto bg-amber-200 pb-35">
          <h1 className="text-6xl font-bold">Dio Santos</h1>
          <p className="mt-4 text-center text-lg">
            Welcome to the Dio Santos page!
          </p>
          <h1 className="text-6xl font-bold">Dio Santos</h1>
          <p className="mt-4 text-center text-lg">
            Welcome to the Dio Santos page!
          </p>
          <h1 className="text-6xl font-bold">Dio Santos</h1>
          <p className="mt-4 text-center text-lg">
            Welcome to the Dio Santos page!
          </p>
          <h1 className="text-6xl font-bold">Dio Santos</h1>
          <p className="mt-4 text-center text-lg">
            Welcome to the Dio Santos page!
          </p>
          <h1 className="text-6xl font-bold">Dio Santos</h1>
          <p className="mt-4 text-center text-lg">
            Welcome to the Dio Santos page!
          </p>
          <h1 className="text-6xl font-bold">Dio Santos</h1>
          <p className="mt-4 text-center text-lg">
            Welcome to the Dio Santos page!
          </p>
          <h1 className="text-6xl font-bold">Dio Santos</h1>
          <p className="mt-4 text-center text-lg">
            Welcome to the Dio Santos page!
          </p>
          <h1 className="text-6xl font-bold">Dio Santos</h1>
          <p className="mt-4 text-center text-lg">
            Welcome to the Dio Santos page!
          </p>
          <h1 className="text-6xl font-bold">Dio Santos</h1>
          <p className="mt-4 text-center text-lg">
            Welcome to the Dio Santos page!
          </p>
          <h1 className="text-6xl font-bold">Dio Santos</h1>
          <p className="mt-4 text-center text-lg">
            Welcome to the Dio Santos page!
          </p>
          <h1 className="text-6xl font-bold">Dio Santos</h1>
          <p className="mt-4 text-center text-lg">
            Welcome to the Dio Santos page!
          </p>
          <h1 className="text-6xl font-bold">Dio Santos</h1>
          <p className="mt-4 text-center text-lg">
            Welcome to the Dio Santos page!
          </p>
          <h1 className="text-6xl font-bold">FINAL</h1>
          <p className="mt-4 text-center text-lg">FINAL!</p>
        </div>
        <footer
          className="relative bottom-0 left-0 z-30 m-auto h-auto w-full"
          id="rodape"
        >
          <div
            className={`${animateRodape} absolute flex w-screen justify-center bg-gray-800 pt-10 pb-20`}
          >
            <p className="text-white">
              © 2023 Dio Santos. All rights reserved.
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
