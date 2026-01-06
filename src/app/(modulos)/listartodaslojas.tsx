import Image from "next/image";

import * as React from "react";
import Link from "next/link";

const ListarTodasLojas = () => {
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
              src="https://achetudotiradentes-nextjs-app.s3.sa-east-1.amazonaws.com/empresas/a61efd63-20d5-464d-86af-8fb1183eee41/a61efd63-20d5-464d-86af-8fb1183eee41_1.jpg"
              width={0}
              height={0}
              sizes="100vw"
              priority={false}
              className="absolute h-full w-full"
            />
            <h3 className="absolute inset-x-0 bottom-0 z-10 h-11 overflow-hidden bg-white/80 pt-1 pr-2 pl-2 wrap-break-word">
              Landing Page Profissional
            </h3>
          </a>
          <div
            className="animate-fade-in-scale fixed top-0 left-0 -z-10 box-border hidden h-0 w-0 overflow-hidden bg-yellow-300 p-0 text-center opacity-0 target:z-40 target:block target:h-screen target:w-screen target:opacity-100"
            id="image-1"
          >
            <div className="relative m-auto box-border block h-80 w-screen rounded-2xl pt-0 shadow-xl/30 md:left-[-150px] md:h-90 md:w-110">
              <figure className="absolute box-border h-[100%] w-[100%] rounded-b-2xl bg-[url('https://achetudotiradentes-nextjs-app.s3.sa-east-1.amazonaws.com/empresas/a61efd63-20d5-464d-86af-8fb1183eee41/a61efd63-20d5-464d-86af-8fb1183eee41_1.jpg')] bg-size-[100%_100%] bg-center bg-no-repeat"></figure>
              <figure className="animate-slider absolute box-border h-[100%] w-[100%] rounded-b-2xl bg-[url('https://achetudotiradentes-nextjs-app.s3.sa-east-1.amazonaws.com/empresas/a61efd63-20d5-464d-86af-8fb1183eee41/a61efd63-20d5-464d-86af-8fb1183eee41_2.jpg')] bg-size-[100%_100%] bg-center bg-no-repeat opacity-0 transition-opacity delay-4000"></figure>
              <figure className="animate-slider absolute box-border h-[100%] w-[100%] rounded-b-2xl bg-[url('https://achetudotiradentes-nextjs-app.s3.sa-east-1.amazonaws.com/empresas/a61efd63-20d5-464d-86af-8fb1183eee41/a61efd63-20d5-464d-86af-8fb1183eee41_3.jpg')] bg-size-[100%_100%] bg-center bg-no-repeat opacity-0 transition-opacity delay-10000"></figure>
            </div>
            <section className="font-comfortaa absolute top-58 left-1 box-border h-auto w-85 rounded-2xl bg-white p-3 md:top-10 md:left-135">
              <div className="float-start h-auto w-full pt-1 pb-1">
                <div className="pb-3 text-center">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.3944499045506!2d-46.398615299999996!3d-23.590182499999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce6f2ad55e1983%3A0x3870f652a83f01de!2sDio%20Santos!5e0!3m2!1spt-BR!2sbr!4v1767630450794!5m2!1spt-BR!2sbr"
                    width="315"
                    height="210"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <a href="#principal" className="float-left">
                  <div className="box-border h-10 w-25 rounded-2xl bg-gray-300 pt-3 text-black shadow-lg/25">
                    <span className="m-auto">Fechar</span>
                  </div>
                </a>
                <span className="clear-both"></span>
                <Link href="/diosantos" target="_blank" className="float-right">
                  <div className="box-border h-10 w-25 rounded-2xl bg-yellow-400 pt-3 shadow-lg/25">
                    <span className="m-auto">Nosso site</span>
                  </div>
                </Link>
              </div>
            </section>
          </div>
        </li>
        <li className="relative float-left m-0"></li>
      </ul>
    </>
  );
};

export default ListarTodasLojas;
