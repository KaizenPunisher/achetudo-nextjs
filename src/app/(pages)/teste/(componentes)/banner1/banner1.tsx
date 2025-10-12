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
      className="fixed top-0 left-0 z-10 m-0 h-auto w-[73vw] border-4 border-black pt-50 transition-all duration-100 lg:h-auto lg:w-[55vw]"
      id="banner_1"
    >
      <div className="z-20 float-right m-auto h-50 w-29 bg-[url('https://achetudotiradentes-nextjs-app.s3.sa-east-1.amazonaws.com/pages/4570f0bd-125f-4319-846e-9e263ffa66ee/celular.png')] bg-size-[100%_100%] bg-position-[0rem_0rem] bg-no-repeat">
        <figure className="z-20 float-start mt-0 h-40 w-24 bg-[url('https://achetudotiradentes-nextjs-app.s3.sa-east-1.amazonaws.com/pages/4570f0bd-125f-4319-846e-9e263ffa66ee/slide_1.jpg')] bg-size-[220%_110%] bg-position-[-1rem_0rem] bg-no-repeat"></figure>
        <figure className="animate-slider z-20 float-none h-40 w-24 bg-[url('https://achetudotiradentes-nextjs-app.s3.sa-east-1.amazonaws.com/pages/4570f0bd-125f-4319-846e-9e263ffa66ee/slide_2.jpg')] bg-size-[170%_100%] bg-position-[-1rem_0rem] bg-no-repeat opacity-0 transition-opacity delay-4000"></figure>
        <figure className="animate-slider z-20 float-none h-40 w-24 bg-[url('https://achetudotiradentes-nextjs-app.s3.sa-east-1.amazonaws.com/pages/4570f0bd-125f-4319-846e-9e263ffa66ee/slide_3.jpg')] bg-size-[170%_100%] bg-position-[0rem_0rem] bg-no-repeat opacity-0 transition-opacity delay-10000"></figure>
      </div>
      <div className="clear-both"></div>
    </div>
  );
}
