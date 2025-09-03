"use client";

import Link from "next/link";
import Image from "next/image";
import Logo from "../../../../public/logo.png";
import Whatsapp from "../../../../public/whatsapp.png";
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";

const FazerAnuncio = () => {
  const { data: session } = authClient.useSession();

  if (!session?.user?.name || !session?.user?.email) {
    redirect("/autenticacao");
  }

  return (
    <main
      id="principal"
      className="container mx-auto box-border h-auto w-screen justify-center rounded-3xl border-20 border-white bg-gradient-to-b from-cyan-100 to-cyan-600 p-4 shadow-md shadow-gray-700"
    >
      <Link href="/" className="m-auto" id="logo">
        <Image
          alt="Ache Tudo Logo"
          priority={false}
          src={Logo}
          width={80}
          className="m-auto mb-3"
        />
      </Link>
      <div className="m-auto flex w-full max-w-sm flex-col gap-6 text-center">
        <h1>Bem vindo ao Ache Tudo!</h1>
        <p>
          Olá, Sou Oscar Gomes desenvolvedor responsavel pelo Ache Tudo. Estou
          aqui para ajudar você a fazer seu anúncio.
        </p>
        <p>
          Cada anuncio terá um custo mensal de R$5,00 para custear a manutenção
          da plataforma e hospedagem das imagens
        </p>
        <p>Serão 3 fotos com uma descrição breve</p>
        <p>
          A descrição poderá ser editada a qualquer instante. Porém as fotos
          <strong> NÃO PODERÃO SER EDITADAS OU TROCADAS</strong>
        </p>
        <p>
          <strong>
            Para poder editar as fotos futuramente, será necessário assinar o
            plano mensal de suporte. no valor de R$6,00 podendo ter no máximo 3
            edições por mês.
          </strong>
        </p>
        <p>
          Fale comigo através do Whatsapp para mais detalhes ou contratar o
          anuncio
        </p>
        <Link
          href="https://wa.me/5511951235344?text=Olá,%20quero%20contratar%20o%20anúncio"
          className="text-amber-50"
        >
          <Image
            alt="Whatsapp"
            priority={false}
            src={Whatsapp}
            width={50}
            className="m-auto mb-3"
          />
          Iniciar conversa
        </Link>
      </div>
    </main>
  );
};

export default FazerAnuncio;
