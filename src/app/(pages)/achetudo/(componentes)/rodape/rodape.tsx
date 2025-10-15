"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Rodape() {
  const [animateRodape, setAnimateRodape] = useState("");
  const [animateRodapeConteudo, setAnimateRodapeConteudo] = useState("");

  useEffect(() => {
    const rolagem = () => {
      const value = window.scrollY;

      if (value >= document.body.scrollHeight - window.innerHeight - 100) {
        setAnimateRodape("animate-rodape-up");
        setAnimateRodapeConteudo("animate-rodape-conteudo-mostrar");
      }
      if (value <= document.body.scrollHeight - window.innerHeight - 200) {
        setAnimateRodape("animate-rodape-down");
        setAnimateRodapeConteudo("animate-rodape-conteudo-esconder");
      }
    };
    window.addEventListener("scroll", rolagem);
  }, []);

  return (
    <footer
      className="relative bottom-0 left-0 z-40 m-0 h-auto w-full"
      id="rodape"
    >
      <div
        className={`${animateRodape} absolute m-0 w-screen justify-center bg-yellow-300 bg-[url('https://achetudotiradentes-nextjs-app.s3.sa-east-1.amazonaws.com/pages/4570f0bd-125f-4319-846e-9e263ffa66ee/fundo_footer_1.png')] bg-size-[50%_30%] bg-left-bottom bg-no-repeat pt-0 pb-20 lg:bg-size-[20%_40%] lg:bg-[30rem_29rem]`}
      >
        <div className="h-auto w-auto bg-amber-100 p-4 text-center">
          <h1 className="text-2xl">Quanto custa ?</h1>
        </div>
        <div className="m-auto h-auto w-auto lg:w-1/3">
          <section
            className={`h-0 w-auto overflow-hidden p-0 text-right ${animateRodapeConteudo}`}
          >
            <div>
              <h2 className="pt-4 pr-4 text-lg text-blue-950">
                Descrição do que você vai pagar
              </h2>
            </div>
            <div className="w-auto p-4">
              <p className="text-amber-800">
                <strong className="text-blue-950">R$500,00</strong> -- Estrutura
                Fixa e sem modificações dentro da hospedagem e dominio do Ache
                Tudo
                <br />
                <strong className="text-blue-950">
                  (renovação anual R$70,00)
                </strong>
              </p>
            </div>
            <div className="p-4">
              <h2 className="text-blue-950">
                <i>Serviço adcional 1 (OPCIONAL)</i>
              </h2>
              <p className="text-amber-800">
                <strong className="text-blue-950">R$300,00</strong> -- Cadastro
                da empresa no Google meu Negócio
              </p>
            </div>
            <div className="p-4">
              <h2 className="text-blue-950">
                <i>Serviço adcional 2 (OPCIONAL)</i>
              </h2>
              <p className="text-amber-800">
                <strong className="text-blue-950">R$1200,00</strong> -- Suporte
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
            <div className="clear-both"></div>
          </section>
        </div>
        <div className="relative top-[-11vh] h-auto bg-amber-500 p-6 text-center">
          <p>© 2023 Dio Santos.</p>
          <p> All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
