"use client";

import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/logo.svg";
import Saudacao from "./(componentes)/mensagensdosistema/saudacao";
import BotaoAnunciar from "./(componentes)/botoes/anunciar";
import { useState } from "react";

export default function Home() {
  const [iframeSrc, setIframeSrc] = useState("");
  const handleMenuClick = (newSrc: string) => {
    setIframeSrc(newSrc);
  };

  return (
    <div className="bg-yellow-300">
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
              <li>
                <button
                  className="text-xm h-full w-full cursor-pointer bg-white pt-2 pb-2 pl-2 hover:bg-gray-100"
                  onClick={() => handleMenuClick("/listagem/produtos")}
                >
                  PRODUTOS
                </button>
              </li>
              <li>
                <button
                  className="text-xm h-full w-full cursor-pointer bg-white pt-2 pb-2 pl-2 hover:bg-gray-100"
                  onClick={() => handleMenuClick("/listagem/servicos")}
                >
                  SERVIÇOS
                </button>
              </li>
              <li>
                <button
                  className="text-xm h-full w-full cursor-pointer bg-white pt-2 pb-2 pl-2 hover:bg-gray-100"
                  onClick={() => handleMenuClick("/listagem/lojas")}
                >
                  LOJAS
                </button>
              </li>
            </ul>
          </div>
        </header>
        <section className="h-screen w-auto overflow-auto md:overflow-scroll">
          <iframe
            id="meuIframeJs"
            src={iframeSrc || "/listagem/lojas"}
            width="355"
            height="560"
            frameBorder="0"
            allowFullScreen
            className="h-full w-full"
          >
            Seu navegador não suporta iframes.
          </iframe>
        </section>
      </main>
    </div>
  );
}
