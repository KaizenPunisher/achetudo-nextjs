"use client";

import { useEffect } from "react";

export default function Banner1() {
  useEffect(() => {
    const rolagem = () => {
      const value = window.scrollY;
      const banner_1 = document.getElementById("banner_1") as HTMLElement;

      if (value > 200) {
        banner_1.style.top = `${(value - 205) * -2}px`;
      }
    };
    window.addEventListener("scroll", rolagem);
  }, []);
  return (
    <div
      className="fixed top-0 left-0 z-10 h-auto w-auto pt-[50vh] pl-[15vw] transition-all duration-100 lg:pt-[54vh] lg:pl-[33vw]"
      id="banner_1"
    >
      <div className="z-50 m-auto w-65 rounded-3xl bg-white/60 p-2 lg:w-150 lg:p-4">
        <h1 className="text-center text-lg">
          O seu negócio na palma da mão do cliente!
        </h1>
      </div>
      <div className="mb-5"></div>
      <div className="z-20 m-auto h-50 w-29 bg-[url('https://achetudotiradentes-nextjs-app.s3.sa-east-1.amazonaws.com/pages/4570f0bd-125f-4319-846e-9e263ffa66ee/celular.png')] bg-size-[100%_100%] bg-position-[0rem_0rem] bg-no-repeat pt-[1.1rem] pl-[0.7rem]">
        <figure className="z-20 float-start mt-auto h-40 w-24 bg-[url('https://achetudotiradentes-nextjs-app.s3.sa-east-1.amazonaws.com/pages/4570f0bd-125f-4319-846e-9e263ffa66ee/slide_1.jpg')] bg-size-[220%_110%] bg-position-[-1rem_0rem] bg-no-repeat"></figure>
        <figure className="animate-slider z-20 float-none h-40 w-24 bg-[url('https://achetudotiradentes-nextjs-app.s3.sa-east-1.amazonaws.com/pages/4570f0bd-125f-4319-846e-9e263ffa66ee/slide_2.jpg')] bg-size-[170%_100%] bg-position-[-1rem_0rem] bg-no-repeat opacity-0 transition-opacity delay-4000"></figure>
        <figure className="animate-slider z-20 float-start mt-[-10rem] h-40 w-24 bg-[url('https://achetudotiradentes-nextjs-app.s3.sa-east-1.amazonaws.com/pages/4570f0bd-125f-4319-846e-9e263ffa66ee/slide_3.jpg')] bg-size-[170%_100%] bg-position-[0rem_0rem] bg-no-repeat opacity-0 transition-opacity delay-10000"></figure>
      </div>
      <div className="clear-both"></div>
    </div>
  );
}
