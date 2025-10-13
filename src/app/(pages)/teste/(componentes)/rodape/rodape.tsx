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
      className="relative bottom-0 left-0 z-40 m-0 h-auto w-full"
      id="rodape"
    >
      <div
        className={`${animateRodape} absolute w-screen justify-center bg-yellow-300 pt-10 pb-20`}
      >
        <div className="h-auto w-full border-2 border-black text-center">
          <h1 className="text-2xl">Quanto custa ?</h1>
        </div>
        <div>
          <p>© 2023 Dio Santos. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
