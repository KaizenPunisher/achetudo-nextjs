"use client";

import Image from "next/image";
import Logo from "../../../../public/logo.svg";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function AcheTudo() {
  const [animateCelular, setAnimateCelular] = useState("");
  const [animateHeader, setAnimateHeader] = useState("");

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

      if (value >= 150) {
        if (header) {
          setAnimateHeader("animate-header-up");
        }
      }
      if (value == 0) {
        setAnimateHeader("animate-header-down");
      }
    };

    window.addEventListener("scroll", rolagem);
  }, []);

  return (
    <>
      <header
        id="header"
        className={`containter relative border-2 border-black ${animateHeader}`}
      >
        <div className="h-130 w-full overflow-hidden rounded-b-full border-8 border-red-700">
          <div
            id="menu"
            className="fixed top-0 left-0 float-start box-border h-25 w-full justify-center rounded-3xl border-white bg-white p-2"
          >
            <ul className="grid h-auto grid-cols-3 text-center text-xs">
              <li className="text-xm m-auto border-2 border-black">PRODUTOS</li>
              <li className="text-xm m-auto border-2 border-black">
                <Link href="/" target="_self" className="float-right">
                  <figure className="m-auto w-auto border-2 border-blue-900">
                    <Image
                      priority={false}
                      alt="Ache Tudo Logo"
                      src={Logo}
                      width={80}
                      className="border-2"
                    />
                  </figure>
                </Link>
              </li>
              <li className="text-xm m-auto border-2 border-black">LOJAS</li>
            </ul>
            <div
              id="celular"
              className={`fixed top-110 left-[35%] z-20 h-50 w-29 border-2 border-black pt-4 pl-4 ${animateCelular}`}
            >
              <figure className="absolute m-auto h-40 w-20 bg-blue-900"></figure>
              <figure className="animate-slider absolute m-auto h-40 w-20 bg-green-900 opacity-0 transition-opacity delay-4000"></figure>
              <figure className="animate-slider absolute m-auto h-40 w-20 bg-yellow-500 opacity-0 transition-opacity delay-10000"></figure>
              <div className="clear-both"></div>
            </div>
          </div>
          <div className="relative z-[-1] h-full w-full border-3 border-white">
            <figure className="absolute h-full w-full bg-blue-900"></figure>
            <figure className="animate-slider absolute h-full w-full bg-green-900 opacity-0 transition-opacity delay-4000"></figure>
            <figure className="animate-slider absolute h-full w-full bg-yellow-500 opacity-0 transition-opacity delay-10000"></figure>
          </div>
          <div className="clear-both"></div>
        </div>
      </header>
      <section className="relative top-[-190px] z-[-2] h-150 w-full bg-amber-700"></section>
    </>
  );
}
