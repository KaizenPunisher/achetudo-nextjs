"use client";

import Image from "next/image";
import Logo from "../../../../public/logo.svg";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function AcheTudo() {
  const [animateCelularUp, setAnimateCelularUp] = useState("");
  useEffect(() => {
    const rolagem = () => {
      const value = window.scrollY;
      const celular = document.getElementById("celular");
      if (value >= 100) {
        if (celular) {
          setAnimateCelularUp("animate-celular-up");
        }
      }
      if (value == 0) {
        if (celular) {
          setAnimateCelularUp("animate-celular-down");
        }
      }
    };

    window.addEventListener("scroll", rolagem);
  }, []);

  return (
    <>
      <header id="header" className="containter relative border-2 border-black">
        <div className="h-130 w-full overflow-hidden rounded-b-full border-8 border-red-700">
          <div
            id="menu"
            className="float-start box-border h-25 w-full justify-center rounded-3xl border-white bg-white p-2"
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
              className={`fixed top-110 left-[35%] h-50 w-30 border-2 border-black ${animateCelularUp}`}
            ></div>
          </div>
          <figure className="h-full w-full bg-blue-900"></figure>
          <div className="clear-both"></div>
        </div>
      </header>
      <section className="relative top-[-190px] z-[-1] h-150 w-full bg-amber-700"></section>
    </>
  );
}
