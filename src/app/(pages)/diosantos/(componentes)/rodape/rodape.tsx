"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Whatsapp from "../../../../../../public/whatsapp.png";

export default function Rodape() {
  const [animateRodape, setAnimateRodape] = useState("");
  const [hiddenRodape, setHiddenRodape] = useState("hidden");

  useEffect(() => {
    const rolagem = () => {
      const value = window.scrollY;

      if (value > document.body.scrollHeight - window.innerHeight - 20) {
        setAnimateRodape("animate-rodape-up");
        setTimeout(() => setHiddenRodape("block"), 1000);
      } else if (value < document.body.scrollHeight - window.innerHeight - 30) {
        setAnimateRodape("animate-rodape-down");
        setHiddenRodape("hidden");
      }
    };

    window.addEventListener("scroll", rolagem, { passive: true });
    // call once to set initial state
    rolagem();

    return () => {
      window.removeEventListener("scroll", rolagem);
    };
  }, []);

  return (
    <>
      <footer
        className="relative bottom-0 left-0 z-40 m-0 h-auto w-screen"
        id="rodape"
      >
        <div
          className={`${animateRodape} absolute flex w-screen justify-center bg-white/30 p-4 backdrop-blur-sm`}
          id="rodape-conteudo"
        >
          <div className="absolute w-screen pt-5 text-center">
            <p className="text-cyan-800">
              © 2023 Dio Santos. All rights reserved.
            </p>
          </div>
          <div
            className={`static ${hiddenRodape} w-screen pt-30 text-center transition-all duration-100`}
          >
            <div className="m-auto mt-0 h-full w-90">
              <div className="m-auto h-20 w-20 rounded-full bg-[url('https://achetudotiradentes-nextjs-app.s3.sa-east-1.amazonaws.com/pages/a61efd63-20d5-464d-86af-8fb1183eee41/perfil_1.png')] bg-size-[100%_100%] bg-position-[0rem_0rem] bg-no-repeat shadow-xl/30"></div>
              <div className="mb-5 h-auto w-auto rounded-xl border-1 border-white bg-cyan-100/20 p-5">
                <p>
                  Receba agora o meu questionário para entender suas
                  necessidades
                </p>
                <p>Envie um email para:</p>
                <br></br>
                <p>
                  <h1>
                    <i>oscar.gomes.junior@hotmail.com</i>
                  </h1>
                </p>
                <br></br>
                <p>
                  Ou mande uma mensagem agora no meu Whatsapp clicando no icone
                  abaixo !
                </p>
              </div>

              <Link
                href="https://wa.me/5511951235344?text=Olá,%20quero%20fazer%20um%20orçamento"
                target="_self"
                className="m-auto"
              >
                <figure className="m-auto h-auto w-auto">
                  <Image
                    priority={false}
                    alt="Ache Tudo Logo"
                    src={Whatsapp}
                    width={80}
                    className="m-auto"
                  />
                </figure>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
