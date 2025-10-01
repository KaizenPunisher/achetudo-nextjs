"use client";

import { useEffect } from "react";

export default function WireFrame_1() {
  useEffect(() => {
    const rolagem = () => {
      const value = window.scrollY;
      const slider = document.getElementById("slider") as HTMLElement;
      const chamada_1 = document.getElementById("chamada_1") as HTMLElement;
      const main = document.getElementById("main") as HTMLElement;
      if (slider) slider.style.top = `${value * -1}px`;
      if (value > 200) {
        chamada_1.style.left = `${(value - 200) * -1}px`;
      }
      if (value === main.offsetHeight - 100) {
      }
    };

    window.addEventListener("scroll", rolagem);
  }, []);

  return (
    <>
      <main
        className="relative top-0 left-0 m-auto flex h-full w-screen flex-col items-center justify-center bg-white bg-[url('https://achetudotiradentes-nextjs-app.s3.sa-east-1.amazonaws.com/pages/4570f0bd-125f-4319-846e-9e263ffa66ee/slide_1.jpg')] bg-size-[100%_100%] bg-position-[0rem_0rem] bg-no-repeat"
        id="main"
      >
        <header className="fixed top-0 left-0 z-20 m-auto w-full bg-gray-800 p-4">
          <div className="flex justify-center">
            <h1 className="text-2xl font-bold text-white">Dio Santos</h1>
          </div>
        </header>
        <div
          className="fixed top-0 left-0 z-10 h-60 w-50 border-4 border-black pt-20"
          id="chamada_1"
        >
          <figure className="h-150 w-40 bg-blue-500"></figure>
        </div>
        <div className="relative h-160 w-full bg-gray-600 lg:h-240" id="slider">
          <figure className="absolute h-full w-full bg-amber-600"></figure>
          <figure className="animate-slider absolute top-0 left-0 h-full w-full bg-red-700 opacity-0 transition-opacity delay-4000"></figure>
          <figure className="animate-slider absolute top-0 left-0 h-full w-full bg-green-700 opacity-0 transition-opacity delay-10000"></figure>
        </div>
        <div className="static m-auto h-full w-auto bg-amber-200">
          <h1 className="text-6xl font-bold">Dio Santos</h1>
          <p className="mt-4 text-center text-lg">
            Welcome to the Dio Santos page!
          </p>
          <h1 className="text-6xl font-bold">Dio Santos</h1>
          <p className="mt-4 text-center text-lg">
            Welcome to the Dio Santos page!
          </p>
          <h1 className="text-6xl font-bold">Dio Santos</h1>
          <p className="mt-4 text-center text-lg">
            Welcome to the Dio Santos page!
          </p>
          <h1 className="text-6xl font-bold">Dio Santos</h1>
          <p className="mt-4 text-center text-lg">
            Welcome to the Dio Santos page!
          </p>
          <h1 className="text-6xl font-bold">Dio Santos</h1>
          <p className="mt-4 text-center text-lg">
            Welcome to the Dio Santos page!
          </p>
          <h1 className="text-6xl font-bold">Dio Santos</h1>
          <p className="mt-4 text-center text-lg">
            Welcome to the Dio Santos page!
          </p>
          <h1 className="text-6xl font-bold">Dio Santos</h1>
          <p className="mt-4 text-center text-lg">
            Welcome to the Dio Santos page!
          </p>
          <h1 className="text-6xl font-bold">Dio Santos</h1>
          <p className="mt-4 text-center text-lg">
            Welcome to the Dio Santos page!
          </p>
          <h1 className="text-6xl font-bold">Dio Santos</h1>
          <p className="mt-4 text-center text-lg">
            Welcome to the Dio Santos page!
          </p>
          <h1 className="text-6xl font-bold">Dio Santos</h1>
          <p className="mt-4 text-center text-lg">
            Welcome to the Dio Santos page!
          </p>
          <h1 className="text-6xl font-bold">Dio Santos</h1>
          <p className="mt-4 text-center text-lg">
            Welcome to the Dio Santos page!
          </p>
          <h1 className="text-6xl font-bold">Dio Santos</h1>
          <p className="mt-4 text-center text-lg">
            Welcome to the Dio Santos page!
          </p>
          <h1 className="text-6xl font-bold">Dio Santos</h1>
          <p className="mt-4 text-center text-lg">
            Welcome to the Dio Santos page!
          </p>
        </div>
        <footer
          className="static bottom-0 left-0 m-auto w-full bg-gray-800 p-4"
          id="rodape"
        >
          <div className="flex justify-center">
            <p className="text-white">
              © 2023 Dio Santos. All rights reserved.
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
