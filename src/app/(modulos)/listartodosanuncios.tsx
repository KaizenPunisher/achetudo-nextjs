import Image from "next/image";
import ImageTeste2 from "../../../public/1.jpg";

import * as React from "react";
import Link from "next/link";

const ListarTodosAnuncios = () => {
  return (
    <>
      <ul className="m-0-auto font-inter w-auto text-xs">
        <li className="relative float-left m-0">
          <a
            href="#image-1"
            className="relative z-0 block h-40 w-40 sm:h-43 sm:w-43 md:h-45 md:w-45 lg:h-51 lg:w-51"
          >
            <Image
              alt="Teste"
              src="https://achetudotiradentes-nextjs-app.s3.sa-east-1.amazonaws.com/anuncio/d7026cdf-8c46-413e-8989-c15712e81520_1.jpg"
              width={0}
              height={0}
              sizes="100vw"
              priority={false}
              className="absolute h-full w-full"
            />
            <h3 className="absolute inset-x-0 bottom-0 z-10 h-11 overflow-hidden bg-white/80 p-2 wrap-break-word">
              Mercadinho Familia
            </h3>
          </a>
          <div
            className="animate-fade-in-scale fixed top-0 left-0 -z-10 hidden h-0 w-0 overflow-hidden border-2 border-black bg-yellow-300 p-0 text-center opacity-0 target:z-40 target:block target:h-screen target:w-screen target:opacity-100"
            id="image-1"
          >
            <div className="relative m-auto block h-80 w-screen border-5 border-black pt-0 md:h-90 md:w-110">
              <figure className="absolute h-[100%] w-[100%] bg-[url('https://achetudotiradentes-nextjs-app.s3.sa-east-1.amazonaws.com/anuncio/d7026cdf-8c46-413e-8989-c15712e81520_1.jpg')] bg-size-[100%_100%] bg-center bg-no-repeat"></figure>
              <figure className="animate-slider absolute h-[100%] w-[100%] bg-[url('https://achetudotiradentes-nextjs-app.s3.sa-east-1.amazonaws.com/anuncio/d7026cdf-8c46-413e-8989-c15712e81520_2.jpg')] bg-size-[100%_100%] bg-center bg-no-repeat opacity-0 transition-opacity delay-4000"></figure>
              <figure className="animate-slider absolute h-[100%] w-[100%] bg-[url('https://achetudotiradentes-nextjs-app.s3.sa-east-1.amazonaws.com/anuncio/d7026cdf-8c46-413e-8989-c15712e81520_3.jpg')] bg-size-[100%_100%] bg-center bg-no-repeat opacity-0 transition-opacity delay-10000"></figure>
            </div>
            <section className="absolute top-70 left-15 h-auto w-70 bg-white p-1 md:top-80 md:left-135">
              <figure className="fixed top-71 left-9 h-15 w-30 bg-[url('https://achetudotiradentes-nextjs-app.s3.sa-east-1.amazonaws.com/icones/tarja.svg')] bg-size-[100%_100%] bg-center bg-no-repeat pt-3 md:top-81 md:left-130">
                <span className="text-center text-base text-white">
                  R$500,00
                </span>
              </figure>
              <div className="h-10 w-full border-2 border-black pt-2 pl-10">
                <strong>Sites Landing Page</strong>
              </div>
              <div className="h-auto w-auto border-2 border-black p-1">
                <h4>
                  Marque presença na internet com um site profissional. Apareça
                  no google sem esforço.
                </h4>
              </div>
              <div className="h-10 w-auto border-2 border-black">
                <Link
                  href="https://wa.me/5511951235344"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <figure className="float-left h-10 w-10 border-2 border-black bg-[url('https://achetudotiradentes-nextjs-app.s3.sa-east-1.amazonaws.com/icones/whatsapp.svg')] bg-size-[100%_100%] bg-center bg-no-repeat"></figure>
                  <span className="float-left border-2 border-black pt-2 pl-2 text-gray-500">
                    Fale agora conosco no whatsap
                  </span>
                  <span className="clear-both"></span>
                </Link>
              </div>
              <div className="h-7 w-auto border-2 border-black pt-1 pb-1">
                <strong className="float-left pr-1">Empresa</strong>
                <span className="float-left text-gray-500">- Dio Santos</span>
                <span className="clear-both"></span>
              </div>
              <div className="h-7 w-auto border-2 border-black pt-1 pb-1">
                <strong className="float-left pr-1">Funcionamento</strong>
                <span className="float-left text-gray-500">
                  - Das 9:00 às 18:00
                </span>
                <span className="clear-both"></span>
              </div>
              <div className="h-auto w-auto border-4 border-black pt-1 pb-1">
                <Link href="https://wa.me/5511951235344" target="_blank">
                  <div className="h-9 w-30 bg-yellow-400 pt-2">
                    <span className="m-auto">Visite nosso site</span>
                  </div>
                </Link>
              </div>

              <p>Seu anuncio aqui !</p>
              <a href="#principal" className="absolute z-50">
                x FECHAR
              </a>
            </section>
          </div>
        </li>
        <li className="relative float-left m-0">
          <a
            href="#image-2"
            className="relative z-0 block h-40 w-40 sm:h-43 sm:w-43 md:h-45 md:w-45 lg:h-51 lg:w-51"
          >
            <Image
              alt="Teste"
              src={ImageTeste2}
              width={0}
              height={0}
              sizes="100vw"
              className="absolute h-full w-full"
            />
            <h1 className="absolute inset-x-0 bottom-0 z-10 h-11 overflow-hidden bg-white/80 p-2 wrap-break-word">
              Boné Preto ótima qualidade
            </h1>
          </a>
          <div
            className="animate-fade-in-scale fixed top-0 left-0 -z-10 hidden h-0 w-0 overflow-hidden bg-white p-0 text-center opacity-0 target:z-40 target:block target:h-screen target:w-screen target:opacity-100"
            id="image-2"
          >
            <a href="#principal" className="absolute z-50">
              x FECHAR
            </a>
            <Image
              alt="Teste"
              src={ImageTeste2}
              className="relative m-auto mt-32 block h-80 w-70 border-2 border-black"
            />
            <div>
              <h3>
                Versão TESTE <span>/ 1.0 /</span>
              </h3>
              <p>Seu anuncio aqui !</p>
            </div>
          </div>
        </li>
      </ul>
    </>
  );
};

export default ListarTodosAnuncios;
