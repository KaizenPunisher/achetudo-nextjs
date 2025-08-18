"use client";

import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/logo.png";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import CadastroEmpresa from "@/app/(backend)/controllers/empresa/cadastroempresa";

const CadastramentoEmpresa = () => {
  const { data: session } = authClient.useSession();
  const router = useRouter();

  if (!session?.user?.name || !session?.user?.email) {
    router.push("/autenticacao");
  } else {
    return (
      <main
        id="principal"
        className="container mx-auto box-border h-auto w-screen justify-center rounded-3xl border-20 border-white bg-gradient-to-b from-cyan-100 to-cyan-600 p-4 shadow-md shadow-gray-700"
      >
        <Link href="/" className="m-auto" id="logo">
          <Image
            alt="Ache Tudo Logo"
            src={Logo}
            width={80}
            className="m-auto mb-3"
          />
        </Link>
        <div className="m-auto flex w-full max-w-sm flex-col gap-6">
          <CadastroEmpresa />
        </div>
      </main>
    );
  }
};

export default CadastramentoEmpresa;
