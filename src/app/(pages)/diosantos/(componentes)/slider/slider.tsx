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
        className="relative m-0 h-160 w-full transition-all duration-100 lg:h-240"
        id="slider"
      >
        <figure className="absolute h-full w-full"></figure>
        <figure className="animate-slider absolute top-0 left-0 h-full w-full opacity-0 transition-opacity delay-4000"></figure>
        <figure className="animate-slider absolute top-0 left-0 h-full w-full opacity-0 transition-opacity delay-10000"></figure>
      </div>
    </>
  );
}
