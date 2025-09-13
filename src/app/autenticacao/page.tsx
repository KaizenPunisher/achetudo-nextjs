"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/logo.svg";
import EntrarForm from "../(modulos)/entrar";
import CadastroForm from "../(modulos)/cadastro";
import { authClient } from "@/lib/auth-client";
//import { useRouter } from "next/navigation";
import { redirect } from "next/navigation";

const Autenticacao = () => {
  const { data: session } = authClient.useSession();

  if (session?.user?.name || session?.user?.email) {
    redirect("/gerenciador");
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
          <Tabs defaultValue="entrar">
            <TabsList>
              <TabsTrigger value="entrar">Entrar</TabsTrigger>
              <TabsTrigger value="cadastro">Cadastro</TabsTrigger>
            </TabsList>
            <TabsContent value="entrar">
              <EntrarForm />
            </TabsContent>
            <TabsContent value="cadastro">
              <CadastroForm />
            </TabsContent>
          </Tabs>
        </div>
      </main>
    );
  }
};

export default Autenticacao;
