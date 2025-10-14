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
    <div
      className="relative m-0 h-160 w-full overflow-hidden bg-gray-600 shadow-lg/30 transition-all duration-100 lg:h-240"
      id="slider"
    >
      <figure className="absolute h-full w-full bg-amber-600 bg-[url('https://achetudotiradentes-nextjs-app.s3.sa-east-1.amazonaws.com/pages/4570f0bd-125f-4319-846e-9e263ffa66ee/slide_1.jpg')] bg-size-[150%_100%] bg-position-[-1rem_0rem] bg-no-repeat"></figure>
      <figure className="animate-slider absolute top-0 left-0 h-full w-full bg-red-700 bg-[url('https://achetudotiradentes-nextjs-app.s3.sa-east-1.amazonaws.com/pages/4570f0bd-125f-4319-846e-9e263ffa66ee/slide_2.jpg')] bg-size-[150%_100%] bg-position-[-1rem_0rem] bg-no-repeat opacity-0 transition-opacity delay-4000"></figure>
      <figure className="animate-slider absolute top-0 left-0 h-full w-full bg-green-700 bg-[url('https://achetudotiradentes-nextjs-app.s3.sa-east-1.amazonaws.com/pages/4570f0bd-125f-4319-846e-9e263ffa66ee/slide_3.jpg')] bg-size-[150%_100%] bg-position-[0rem_0rem] bg-no-repeat opacity-0 transition-opacity delay-10000"></figure>
    </div>
  );
}
