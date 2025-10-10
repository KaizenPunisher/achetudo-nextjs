"use client";

import { useEffect } from "react";

export default function Banner1() {
  useEffect(() => {
    const rolagem = () => {
      const value = window.scrollY;
      const banner_1 = document.getElementById("banner_1") as HTMLElement;

      if (value > 200) {
        banner_1.style.top = `${(value - 205) * -1}px`;
      }
    };
    window.addEventListener("scroll", rolagem);
  }, []);
  return (
    <div
      className="fixed top-0 left-0 z-10 m-0 h-60 w-[73vw] border-4 border-black pt-50 transition-all duration-100 lg:w-[55vw]"
      id="banner_1"
    >
      <figure className="z-20 float-right h-50 w-29 bg-blue-500 bg-[url('https://achetudotiradentes-nextjs-app.s3.sa-east-1.amazonaws.com/pages/4570f0bd-125f-4319-846e-9e263ffa66ee/celular.png')] bg-size-[100%_100%] bg-position-[0rem_0rem] bg-no-repeat"></figure>
      <div className="clear-both"></div>
    </div>
  );
}
