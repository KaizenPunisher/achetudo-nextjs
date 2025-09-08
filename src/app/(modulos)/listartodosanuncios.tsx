import Image from "next/image";
import ImageTeste2 from "../../../public/1.jpg";

import * as React from "react";

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
            <div className="relative m-auto block h-100 w-screen border-5 border-black pt-0 md:w-160">
              <figure className="absolute h-[100%] w-[100%] border-2 border-blue-500 bg-[url('https://achetudotiradentes-nextjs-app.s3.sa-east-1.amazonaws.com/anuncio/d7026cdf-8c46-413e-8989-c15712e81520_1.jpg')] bg-size-[100%_100%] bg-center bg-no-repeat"></figure>
              <figure className="absolute h-[100%] w-[100%] border-2 border-blue-500 bg-[url('https://achetudotiradentes-nextjs-app.s3.sa-east-1.amazonaws.com/anuncio/d7026cdf-8c46-413e-8989-c15712e81520_2.jpg')] bg-size-[100%_100%] bg-center bg-no-repeat"></figure>
              <figure className="absolute h-[100%] w-[100%] border-2 border-blue-500 bg-[url('https://achetudotiradentes-nextjs-app.s3.sa-east-1.amazonaws.com/anuncio/d7026cdf-8c46-413e-8989-c15712e81520_3.jpg')] bg-size-[100%_100%] bg-center bg-no-repeat"></figure>
            </div>
            <div className="absolute top-80 left-15 h-50 w-70 bg-white p-5 md:left-130">
              <h3>
                Versão TESTE <span>/ 1.0 /</span>
              </h3>
              <p>Seu anuncio aqui !</p>
              <a href="#principal" className="absolute z-50">
                x FECHAR
              </a>
            </div>
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
