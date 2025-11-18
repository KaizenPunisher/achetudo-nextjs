"use client";
import { useEffect } from "react";

export default function Slider() {
  useEffect(() => {
    const rolagem = () => {
      const value = window.scrollY;
      const slider = document.getElementById("slider") as HTMLElement;
      if (slider) slider.style.top = `${value * -1}px`;
    };
    window.addEventListener("scroll", rolagem);
  }, []);
  return (
    <>
      <div
        className="relative m-0 mt-30 mb-10 h-50 w-screen transition-all duration-100 lg:h-100 lg:w-3/4"
        id="slider"
      >
        <div className="relative m-auto w-fit justify-center text-center">
          <p className="font-erasdemi text-xl">Porque a web é para todos</p>
          <p className="font-eraslight">Sites e Sistemas</p>
        </div>
        <figure className="absolute h-full w-full bg-[url('https://achetudotiradentes-nextjs-app.s3.sa-east-1.amazonaws.com/pages/a61efd63-20d5-464d-86af-8fb1183eee41/slide_1.png')] bg-size-[100%_100%] bg-position-[0rem_0rem] bg-no-repeat"></figure>
        <figure className="animate-slider absolute top-0 left-0 h-full w-full opacity-0 transition-opacity delay-4000"></figure>
        <figure className="animate-slider absolute top-0 left-0 h-full w-full opacity-0 transition-opacity delay-10000"></figure>
      </div>
    </>
  );
}
