"use client";
import Image from "next/image";
import Logo from "/public/logo.svg";
import Link from "next/link";
import React from "react";

export default function Topo() {
  return (
    <header className="fixed top-0 left-0 z-20 float-start m-auto box-border h-25 w-full justify-center rounded-b-3xl bg-white p-2">
      <div className="flex justify-center">
        <ul className="grid h-auto grid-cols-3 text-center text-xs">
          <a href="#vantagens " className="m-auto">
            <li className="text-xm m-auto pr-4">VANTAGENS</li>
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
            <li className="text-xm m-auto pl-0">COMPRAR</li>
          </a>
        </ul>
      </div>
    </header>
  );
}
