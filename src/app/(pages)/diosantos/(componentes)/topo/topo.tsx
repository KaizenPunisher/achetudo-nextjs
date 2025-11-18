"use client";
import Logo from "/public/pages/a61efd63-20d5-464d-86af-8fb1183eee41/logo.svg";
import Image from "next/image";
import Link from "next/link";

import React from "react";

export default function Topo() {
  return (
    <>
      <header className="fixed top-0 left-0 z-20 m-auto w-full bg-white/30 p-4 backdrop-blur-sm">
        <ul className="grid h-auto grid-cols-3 text-center text-xs">
          <a href="#portifolio" className="m-auto">
            <li className="text-xm m-auto pr-4">PORTIFÓLIO</li>
          </a>
          <li className="text-xm m-auto">
            <Link href="/diosantos" target="_self" className="float-right">
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
          <a href="#comecar" className="m-auto">
            <li className="text-xm m-auto pl-0">VAMOS COMEÇAR?</li>
          </a>
        </ul>
      </header>
    </>
  );
}
