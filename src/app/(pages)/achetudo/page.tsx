"use client";

import Image from "next/image";
import Logo from "../../../../public/logo.svg";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function AcheTudo() {
  const [animateCelular, setAnimateCelular] = useState("");
  const [animateHeader, setAnimateHeader] = useState("");
  const [animateMenu, setAnimateMenu] = useState("");
  const [animateFooter, setAnimateFooter] = useState("");
  const [footerOn, setFooterOn] = useState(0);

  useEffect(() => {
    const rolagem = () => {
      const value = window.scrollY;
      const celular = document.getElementById("celular");
      const header = document.getElementById("header");

      if (value >= 58) {
        if (celular) {
          setAnimateCelular("animate-celular-up");
        }
      }
      if (value === 0) {
        if (celular) {
          setAnimateCelular("animate-celular-down");
        }
      }

      if (value >= 100) {
        if (header) {
          setAnimateHeader("animate-header-up");
        }
      }
      if (value === 0) {
        setAnimateHeader("animate-header-down");
      }

      if (value >= 230) {
        if (header) {
          setAnimateMenu("animate-menu-up");
        }
      }
      if (value <= 0) {
        setAnimateMenu("animate-menu-down");
      }

      if (value > 400) {
        if (header) {
          setAnimateFooter("animate-footer-up");
          setFooterOn(0 + 1);
        }
      }
      if (value <= 400 && footerOn > 0) {
        setAnimateFooter("animate-footer-down");
      }
    };

    window.addEventListener("scroll", rolagem);
  }, [footerOn]);

  return (
    <>
      <header id="header" className={`containter relative ${animateHeader}`}>
        <div className="h-130 w-full overflow-hidden rounded-b-full shadow-lg/30 lg:h-screen lg:rounded-none">
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
              <a href="#comprar" className="m-auto">
                <li className="text-xm m-auto">COMPRAR</li>
              </a>
            </ul>
            <div
              id="celular"
              className={`fixed top-100 left-[35%] z-20 h-50 w-29 pt-4 pl-2 lg:left-[45%] ${animateCelular} bg-[url('https://achetudotiradentes-nextjs-app.s3.sa-east-1.amazonaws.com/pages/4570f0bd-125f-4319-846e-9e263ffa66ee/celular.png')] bg-size-[100%_100%] bg-position-[0rem_0rem] bg-no-repeat`}
            >
              <figure className="absolute m-auto h-40 w-24 bg-[url('https://achetudotiradentes-nextjs-app.s3.sa-east-1.amazonaws.com/pages/4570f0bd-125f-4319-846e-9e263ffa66ee/slide_1.jpg')] bg-size-[220%_110%] bg-position-[-1rem_0rem] bg-no-repeat"></figure>
              <figure className="animate-slider absolute m-auto h-40 w-24 bg-[url('https://achetudotiradentes-nextjs-app.s3.sa-east-1.amazonaws.com/pages/4570f0bd-125f-4319-846e-9e263ffa66ee/slide_2.jpg')] bg-size-[170%_100%] bg-position-[-1rem_0rem] bg-no-repeat opacity-0 transition-opacity delay-4000"></figure>
              <figure className="animate-slider absolute m-auto h-40 w-24 bg-[url('https://achetudotiradentes-nextjs-app.s3.sa-east-1.amazonaws.com/pages/4570f0bd-125f-4319-846e-9e263ffa66ee/slide_3.jpg')] bg-size-[170%_100%] bg-position-[0rem_0rem] bg-no-repeat opacity-0 transition-opacity delay-10000"></figure>
              <div className="clear-both"></div>
            </div>
          </div>
          <div className="relative z-[-1] h-full w-full bg-white">
            <figure className="absolute h-full w-full bg-[url('https://achetudotiradentes-nextjs-app.s3.sa-east-1.amazonaws.com/pages/4570f0bd-125f-4319-846e-9e263ffa66ee/slide_1.jpg')] bg-size-[220%_110%] bg-position-[-5rem_4rem] bg-no-repeat lg:bg-cover lg:bg-center"></figure>
            <figure className="animate-slider absolute h-full w-full bg-[url('https://achetudotiradentes-nextjs-app.s3.sa-east-1.amazonaws.com/pages/4570f0bd-125f-4319-846e-9e263ffa66ee/slide_2.jpg')] bg-size-[170%_100%] bg-position-[-5rem_4rem] bg-no-repeat opacity-0 transition-opacity delay-4000 lg:bg-cover lg:bg-center"></figure>
            <figure className="animate-slider absolute h-full w-full bg-[url('https://achetudotiradentes-nextjs-app.s3.sa-east-1.amazonaws.com/pages/4570f0bd-125f-4319-846e-9e263ffa66ee/slide_3.jpg')] bg-size-[170%_100%] bg-position-[-2rem_1rem] bg-no-repeat opacity-0 transition-opacity delay-10000 lg:bg-cover lg:bg-center"></figure>
          </div>
          <div className="clear-both"></div>
        </div>
      </header>
      <section className="relative top-[-290px] z-[-2] h-full w-full bg-[url('https://achetudotiradentes-nextjs-app.s3.sa-east-1.amazonaws.com/pages/4570f0bd-125f-4319-846e-9e263ffa66ee/fundo_chamada_1.jpg')] bg-size-[250%_100%] bg-center bg-no-repeat">
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
      <footer
        className={`absolute top-210 h-screen w-screen bg-amber-300 ${animateFooter} bg-[url('https://achetudotiradentes-nextjs-app.s3.sa-east-1.amazonaws.com/pages/4570f0bd-125f-4319-846e-9e263ffa66ee/fundo_footer_1.png')] bg-size-[50%_30%] bg-left-bottom bg-no-repeat`}
        id="comprar"
      >
        <div className="h-30 pt-20 pb-0 pl-22">
          <h1 className="text-2xl">Quanto custa ?</h1>
        </div>
        <section className="text-right">
          <div className="p-2">
            <h2 className="p-2 text-lg text-blue-950">
              Descrição do que você vai pagar
            </h2>
            <p className="text-[#7d909a]">
              <strong className="text-blue-950">R$500,00</strong> -- Estrutura
              Fixa e sem modificações dentro da hospedagem e dominio do Ache
              Tudo
              <strong className="text-blue-950">
                (renovação anual R$70,00)
              </strong>
            </p>
          </div>
          <div className="p-2">
            <h2 className="text-blue-950">Serviço adcional 1 (OPCIONAL)</h2>
            <p className="text-[#7d909a]">
              <strong className="text-blue-950">R$200,00</strong> -- Cadastro da
              empresa no Google meu Negócio
            </p>
          </div>
          <div className="p-2">
            <h2 className="text-blue-950">Serviço adcional 2 (OPCIONAL)</h2>
            <p className="text-[#7d909a]">
              <strong className="text-blue-950">R$4800,00</strong> -- Suporte
              anual para alteração no site
            </p>
          </div>
          <div className="float-right w-50 pt-6 text-center">
            <p className="text-sm">
              Fale comigo através do Whatsapp para mais detalhes
            </p>
            <Link
              href="https://wa.me/5511951235344?text=Olá,%20quero%20contratar%20o%20anúncio"
              className="text-white"
            >
              <Image
                alt="Whatsapp"
                priority={false}
                src="https://achetudotiradentes-nextjs-app.s3.sa-east-1.amazonaws.com/icones/whatsapp.svg"
                width={50}
                height={50}
                className="m-auto mb-3"
              />
              Iniciar conversa
            </Link>
          </div>
        </section>
      </footer>
    </>
  );
}
