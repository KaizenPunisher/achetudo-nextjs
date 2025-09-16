"use client";

import Image from "next/image";
import Logo from "../../../../public/logo.svg";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function AcheTudo() {
  const [animateCelular, setAnimateCelular] = useState("");
  const [animateHeader, setAnimateHeader] = useState("");
  const [animateMenu, setAnimateMenu] = useState("");

  useEffect(() => {
    const rolagem = () => {
      const value = window.scrollY;
      const celular = document.getElementById("celular");
      const header = document.getElementById("header");

      if (value >= 100) {
        if (celular) {
          setAnimateCelular("animate-celular-up");
        }
      }
      if (value == 0) {
        if (celular) {
          setAnimateCelular("animate-celular-down");
        }
      }

      if (value >= 100) {
        if (header) {
          setAnimateHeader("animate-header-up");
        }
      }
      if (value <= 0) {
        setAnimateHeader("animate-header-down");
      }

      if (value >= 300) {
        if (header) {
          setAnimateMenu("animate-menu-up");
        }
      }
      if (value <= 250) {
        setAnimateMenu("animate-menu-down");
      }
    };

    window.addEventListener("scroll", rolagem);
  }, []);

  return (
    <>
      <header id="header" className={`containter relative ${animateHeader}`}>
        <div className="h-130 w-full overflow-hidden rounded-b-full shadow-lg/30">
          <div
            id="menu"
            className={`fixed top-0 left-0 z-20 float-start box-border h-25 w-full justify-center rounded-b-3xl border-white bg-white p-2 ${animateMenu}`}
          >
            <ul className="grid h-auto grid-cols-3 text-center text-xs">
              <a href="#vantagens " className="m-auto">
                <li className="text-xm m-auto">VANTAGENS</li>
              </a>
              <li className="text-xm m-auto">
                <Link href="/" target="_self" className="float-right">
                  <figure className="m-auto w-auto">
                    <Image
                      priority={false}
                      alt="Ache Tudo Logo"
                      src={Logo}
                      width={80}
                    />
                  </figure>
                </Link>
              </li>
              <li className="text-xm m-auto border-2 border-black">COMPRAR</li>
            </ul>
            <div
              id="celular"
              className={`fixed top-110 left-[35%] z-20 h-50 w-29 pt-4 pl-2 ${animateCelular} bg-[url('https://achetudotiradentes-nextjs-app.s3.sa-east-1.amazonaws.com/pages/4570f0bd-125f-4319-846e-9e263ffa66ee/celular.png')] bg-size-[100%_100%] bg-position-[0rem_0rem] bg-no-repeat`}
            >
              <figure className="absolute m-auto h-40 w-24 bg-[url('https://achetudotiradentes-nextjs-app.s3.sa-east-1.amazonaws.com/pages/4570f0bd-125f-4319-846e-9e263ffa66ee/slide_1.jpg')] bg-size-[220%_110%] bg-position-[-1rem_0rem] bg-no-repeat"></figure>
              <figure className="animate-slider absolute m-auto h-40 w-24 bg-[url('https://achetudotiradentes-nextjs-app.s3.sa-east-1.amazonaws.com/pages/4570f0bd-125f-4319-846e-9e263ffa66ee/slide_2.jpg')] bg-size-[170%_100%] bg-position-[-1rem_0rem] bg-no-repeat opacity-0 transition-opacity delay-4000"></figure>
              <figure className="animate-slider absolute m-auto h-40 w-24 bg-[url('https://achetudotiradentes-nextjs-app.s3.sa-east-1.amazonaws.com/pages/4570f0bd-125f-4319-846e-9e263ffa66ee/slide_3.jpg')] bg-size-[170%_100%] bg-position-[0rem_0rem] bg-no-repeat opacity-0 transition-opacity delay-10000"></figure>
              <div className="clear-both"></div>
            </div>
          </div>
          <div className="relative z-[-1] h-full w-full bg-white">
            <figure className="absolute h-full w-full bg-[url('https://achetudotiradentes-nextjs-app.s3.sa-east-1.amazonaws.com/pages/4570f0bd-125f-4319-846e-9e263ffa66ee/slide_1.jpg')] bg-size-[220%_110%] bg-position-[-5rem_4rem] bg-no-repeat"></figure>
            <figure className="animate-slider absolute h-full w-full bg-[url('https://achetudotiradentes-nextjs-app.s3.sa-east-1.amazonaws.com/pages/4570f0bd-125f-4319-846e-9e263ffa66ee/slide_2.jpg')] bg-size-[170%_100%] bg-position-[-5rem_4rem] bg-no-repeat opacity-0 transition-opacity delay-4000"></figure>
            <figure className="animate-slider absolute h-full w-full bg-[url('https://achetudotiradentes-nextjs-app.s3.sa-east-1.amazonaws.com/pages/4570f0bd-125f-4319-846e-9e263ffa66ee/slide_3.jpg')] bg-size-[170%_100%] bg-position-[-2rem_1rem] bg-no-repeat opacity-0 transition-opacity delay-10000"></figure>
          </div>
          <div className="clear-both"></div>
        </div>
      </header>
      <section className="relative top-[-190px] z-[-2] h-auto w-full bg-[url('https://achetudotiradentes-nextjs-app.s3.sa-east-1.amazonaws.com/pages/4570f0bd-125f-4319-846e-9e263ffa66ee/fundo_chamada_1.jpg')] bg-size-[250%_100%] bg-center bg-no-repeat">
        <div className="w-full pt-30 pb-5 pl-9" id="vantagens">
          <span className="font-bold text-blue-950 text-shadow-lg">
            Quais as vantagens em ter um site ?
          </span>
        </div>
        <div className="h-113 pt-2 pr-0 pb-0 pl-2">
          <div className="h-auto pr-2 pb-2">
            <div className="float-left h-40 w-41 justify-center rounded-3xl border-1 border-white p-4 text-center backdrop-blur-sm">
              <span>
                Apareça nas pesquisa do google e localização google maps.
              </span>
            </div>
            <div className="float-right h-40 w-41 justify-center rounded-3xl border-1 border-white p-4 text-center backdrop-blur-sm">
              <span>Contato do cliente diretamente por email ou Whatsapp.</span>
            </div>
            <div className="clear-both"></div>
          </div>
          <div className="h-auto pr-2 pb-2">
            <div className="float-left h-40 w-41 rounded-3xl border-1 border-white p-4 text-center backdrop-blur-sm">
              <span>
                Sua loja e produtos viram um cartão de visita virtual na
                internet.
              </span>
            </div>
            <div className="float-right h-40 w-41 rounded-3xl border-1 border-white p-4 text-center backdrop-blur-sm">
              <span>
                Mostre sua loja ou produto nas redes sociais usando o site.
              </span>
            </div>
            <div className="clear-both"></div>
          </div>
          <div className="relative top-[-92px] z-[-1] clear-both m-auto h-50 w-50 bg-[url('https://achetudotiradentes-nextjs-app.s3.sa-east-1.amazonaws.com/pages/4570f0bd-125f-4319-846e-9e263ffa66ee/fundo_chamada_2.png')] bg-size-[100%_100%] bg-center bg-no-repeat"></div>
        </div>
      </section>
      <footer className="fixed top-0 h-full w-full border-5 border-blue-900"></footer>
    </>
  );
}
