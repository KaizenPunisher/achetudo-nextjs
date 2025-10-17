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
    <>
      <div
        className="fixed top-0 left-0 z-10 m-0 h-60 w-[73vw] border-4 border-black pt-50 transition-all duration-100 lg:w-[55vw]"
        id="banner_1"
      >
        <figure className="float-right h-50 w-40 bg-blue-500"></figure>
        <div className="clear-both"></div>
      </div>
    </>
  );
}
