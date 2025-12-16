import Image from "next/image";

import * as React from "react";
import Link from "next/link";

const ListarTodosAnuncios = () => {
  return (
    <>
      <ul className="m-0-auto font-inter w-auto text-xs">
        <li className="relative float-left m-0">
          <a
            href="#image-1"
            className="relative z-0 block h-43 w-43 sm:h-43 sm:w-43 md:h-45 md:w-45 lg:h-51 lg:w-51"
          >
            <Image
              alt="Teste"
              src="https://achetudotiradentes-nextjs-app.s3.sa-east-1.amazonaws.com/anuncios/d7026cdf-8c46-413e-8989-c15712e81520/d7026cdf-8c46-413e-8989-c15712e81520_1.jpg"
              width={0}
              height={0}
              sizes="100vw"
              priority={false}
              className="absolute h-full w-full"
            />
            <h3 className="absolute inset-x-0 bottom-0 z-10 h-11 overflow-hidden bg-white/80 pt-1 pr-2 pl-2 wrap-break-word">
              Landing Page Profissional - R$500,00
            </h3>
          </a>
          <div
            className="animate-fade-in-scale fixed top-0 left-0 -z-10 box-border hidden h-0 w-0 overflow-hidden bg-yellow-300 p-0 text-center opacity-0 target:z-40 target:block target:h-screen target:w-screen target:opacity-100"
            id="image-1"
          >
            <div className="relative m-auto box-border block h-80 w-screen rounded-2xl pt-0 shadow-xl/30 md:left-[-150px] md:h-90 md:w-110">
              <figure className="absolute box-border h-[100%] w-[100%] rounded-b-2xl bg-[url('https://achetudotiradentes-nextjs-app.s3.sa-east-1.amazonaws.com/anuncios/d7026cdf-8c46-413e-8989-c15712e81520/d7026cdf-8c46-413e-8989-c15712e81520_1.jpg')] bg-size-[100%_100%] bg-center bg-no-repeat"></figure>
              <figure className="animate-slider absolute box-border h-[100%] w-[100%] rounded-b-2xl bg-[url('https://achetudotiradentes-nextjs-app.s3.sa-east-1.amazonaws.com/anuncios/d7026cdf-8c46-413e-8989-c15712e81520/d7026cdf-8c46-413e-8989-c15712e81520_2.jpg')] bg-size-[100%_100%] bg-center bg-no-repeat opacity-0 transition-opacity delay-4000"></figure>
              <figure className="animate-slider absolute box-border h-[100%] w-[100%] rounded-b-2xl bg-[url('https://achetudotiradentes-nextjs-app.s3.sa-east-1.amazonaws.com/anuncios/d7026cdf-8c46-413e-8989-c15712e81520/d7026cdf-8c46-413e-8989-c15712e81520_3.jpg')] bg-size-[100%_100%] bg-center bg-no-repeat opacity-0 transition-opacity delay-10000"></figure>
            </div>
            <section className="font-comfortaa absolute top-66 left-11 box-border h-auto w-70 rounded-2xl bg-white p-3 md:top-10 md:left-135">
              <figure className="fixed top-67 left-5 h-15 w-30 bg-[url('https://achetudotiradentes-nextjs-app.s3.sa-east-1.amazonaws.com/icones/tarja.svg')] bg-size-[100%_100%] bg-center bg-no-repeat pt-3 md:top-12 md:left-129">
                <span className="text-center text-base text-white">
                  R$500,00
                </span>
              </figure>
              <div className="h-10 w-full pt-1 pl-20">
                <strong>Tenha um Site</strong>
              </div>
              <div className="h-auto w-auto">
                <h4>
                  Marque presença na internet com um site profissional. Apareça
                  no google sem esforço.
                </h4>
              </div>
              <div className="h-10 w-auto">
                <Link
                  href="https://wa.me/5511951235344"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <figure className="float-left h-10 w-6 bg-[url('https://achetudotiradentes-nextjs-app.s3.sa-east-1.amazonaws.com/icones/whatsapp.svg')] bg-size-[100%_100%] bg-center bg-no-repeat"></figure>
                  <span className="float-left pt-3 pl-1 text-green-700">
                    <strong className="box-border rounded-2xl bg-green-600 p-2 text-xs text-white shadow-lg/30">
                      Fale agora conosco no whatsapp
                    </strong>
                  </span>
                  <span className="clear-both"></span>
                </Link>
              </div>
              <div className="h-7 w-auto pt-1 pb-1">
                <strong className="float-left pr-1">Empresa</strong>
                <span className="float-left text-gray-500">- Dio Santos</span>
                <span className="clear-both"></span>
              </div>
              <div className="h-7 w-auto pt-1 pb-1">
                <strong className="float-left pr-1">Funcionamento</strong>
                <span className="float-left text-gray-500">
                  - Das 9:00 às 18:00
                </span>
                <span className="clear-both"></span>
              </div>
              <div className="float-start h-auto w-full pt-1 pb-1">
                <a href="#principal" className="float-left">
                  <div className="box-border h-10 w-25 rounded-2xl bg-gray-300 pt-3 text-black shadow-lg/25">
                    <span className="m-auto">Fechar</span>
                  </div>
                </a>
                <span className="clear-both"></span>
                <Link href="/achetudo" target="_blank" className="float-right">
                  <div className="box-border h-10 w-25 rounded-2xl bg-yellow-400 pt-3 shadow-lg/25">
                    <span className="m-auto">Nosso site</span>
                  </div>
                </Link>
              </div>
            </section>
          </div>
        </li>
      </ul>
    </>
  );
};

export default ListarTodosAnuncios;
