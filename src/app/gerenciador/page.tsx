"use client";

import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/logo.png";
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import { encontrarEmpresa } from "../(backend)/models/empresa/encontrarempresa";
import { useEffect, useState } from "react";
import MostrarEmpresa from "../(modulos)/empresa/mostrarempresa";

//
type EmpresaResponse = {
  empresas: {
    id: string;
    nome: string;
    cpf: string | null;
    cnpj: string | null;
    tipo: string;
    slug: string | null;
    descricao: string;
    createdAt: Date;
    updatedAt: Date | null;
    admId: string | null;
    usuarioId: string;
  };
  enderecos: {
    id: string;
    nome: string;
    createdAt: Date;
    updatedAt: Date | null;
    empresaId: string;
  };
  telefones: {
    id: string;
    nome: string;
    createdAt: Date;
    updatedAt: Date | null;
    empresaId: string;
  };
};

const Gerenciador = () => {
  const { data: session } = authClient.useSession();
  const [empresa, setEmpresa] = useState<EmpresaResponse | null>(null);

  if (!session?.user?.name || !session?.user?.email) {
    redirect("/autenticacao");
    //
  } else {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      const fetchEmpresa = async () => {
        const response = await encontrarEmpresa(session?.user?.id);
        setEmpresa(response);
      };
      fetchEmpresa();
    }, [session?.user?.id]);

    if (!empresa) {
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
          <div className="m-auto flex w-full max-w-sm flex-col gap-6">
            <Link
              href="/gerenciador/cadastrarempresa"
              className="block rounded-lg bg-yellow-400 p-4 text-center shadow-md hover:bg-yellow-300"
            >
              Cadastrar Empresa
            </Link>
            <Link
              href="/gerenciador"
              className="block rounded-lg bg-white p-4 text-center shadow-md hover:bg-gray-100"
            >
              Fazer Anúncio
            </Link>
            <Link
              href="/"
              className="block rounded-lg bg-white p-4 text-center shadow-md hover:bg-gray-100"
            >
              Voltar
            </Link>
          </div>
        </main>
      );
    } else {
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
          <div className="m-auto flex w-full max-w-sm flex-col gap-6">
            <MostrarEmpresa busca={empresa} />
            <Link
              href="/gerenciador"
              className="block rounded-lg bg-white p-4 text-center shadow-md hover:bg-gray-100"
            >
              Fazer Anúncio
            </Link>
            <Link
              href="/"
              className="block rounded-lg bg-yellow-400 p-4 text-center shadow-md hover:bg-yellow-300"
            >
              Voltar
            </Link>
          </div>
        </main>
      );
    }
  }
};

export default Gerenciador;
