"use client";

import Link from "next/link";
import Image from "next/image";
import Logo from "../../../../public/logo.png";
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import CadastroEmpresa from "@/app/(backend)/controllers/empresa/cadastroempresa";
import { encontrarEmpresa } from "@/app/(backend)/models/empresa/encontrarempresa";
import { useEffect, useState } from "react";

type EmpresaResponse = {
  empresas: {
    id: string;
    nome: string;
    documento: string | null;
    tipo: string | null;
    slug: string | null;
    descricao: string | null;
    createdAt: Date;
    updatedAt: Date | null;
    remId: string | null;
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

const CadastramentoEmpresa = () => {
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

    if (empresa) {
      redirect("/autenticacao");
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
            <CadastroEmpresa usuarioId={session?.user?.id} />
          </div>
        </main>
      );
    }
  }
};
export default CadastramentoEmpresa;
