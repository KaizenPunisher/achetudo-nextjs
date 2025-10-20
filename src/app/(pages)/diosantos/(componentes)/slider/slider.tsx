"use client";
import { useEffect } from "react";

export default function Slider() {
  useEffect(() => {
    const rolagem = () => {
      const value = window.scrollY;
      const slider = document.getElementById("slider") as HTMLElement;
      if (slider) slider.style.top = `${value * -1}px`;
      console.log(
        document.body.scrollHeight,
        window.innerHeight,
        window.scrollY,
      );
    };
    window.addEventListener("scroll", rolagem);
  }, []);
  return (
    <>
      <div
        className="relative m-0 h-100 w-full transition-all duration-100 lg:h-240"
        id="slider"
      >
        <figure className="absolute h-full w-full bg-[url('https://achetudotiradentes-nextjs-app.s3.sa-east-1.amazonaws.com/pages/a61efd63-20d5-464d-86af-8fb1183eee41/slide_1.png')] bg-size-[100%_100%] bg-position-[0rem_0rem] bg-no-repeat"></figure>
        <figure className="animate-slider absolute top-0 left-0 h-full w-full opacity-0 transition-opacity delay-4000"></figure>
        <figure className="animate-slider absolute top-0 left-0 h-full w-full opacity-0 transition-opacity delay-10000"></figure>
      </div>
    </>
  );
}
