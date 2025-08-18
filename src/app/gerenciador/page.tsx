"use client";

import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/logo.png";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const Gerenciador = () => {
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
          <Link
            href="/gerenciador"
            className="block rounded-lg bg-white p-4 text-center shadow-md hover:bg-gray-100"
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
            className="block rounded-lg bg-yellow-400 p-4 text-center shadow-md hover:bg-yellow-300"
          >
            Voltar
          </Link>
        </div>
      </main>
    );
  }
};

export default Gerenciador;
