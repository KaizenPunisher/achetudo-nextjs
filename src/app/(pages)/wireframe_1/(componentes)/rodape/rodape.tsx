"use client";

import { useEffect, useState } from "react";

export default function Rodape() {
  const [animateRodape, setAnimateRodape] = useState("");

  useEffect(() => {
    const rolagem = () => {
      const value = window.scrollY;

      if (value > document.body.scrollHeight - window.innerHeight - 10) {
        setAnimateRodape("animate-rodape-up");
      }
      if (value < document.body.scrollHeight - window.innerHeight - 30) {
        setAnimateRodape("animate-rodape-down");
      }
    };
    window.addEventListener("scroll", rolagem);
  }, []);

  return (
    <footer
      className="relative bottom-0 left-0 z-30 m-auto h-auto w-full"
      id="rodape"
    >
      <div
        className={`${animateRodape} absolute flex w-screen justify-center bg-gray-800 pt-10 pb-20`}
      >
        <p className="text-white">© 2023 Dio Santos. All rights reserved.</p>
      </div>
    </footer>
  );
}
