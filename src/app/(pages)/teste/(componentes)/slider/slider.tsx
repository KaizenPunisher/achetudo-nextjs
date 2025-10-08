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
    <div className="relative h-160 w-full bg-gray-600 lg:h-240" id="slider">
      <figure className="absolute h-full w-full bg-amber-600"></figure>
      <figure className="animate-slider absolute top-0 left-0 h-full w-full bg-red-700 opacity-0 transition-opacity delay-4000"></figure>
      <figure className="animate-slider absolute top-0 left-0 h-full w-full bg-green-700 opacity-0 transition-opacity delay-10000"></figure>
    </div>
  );
}
