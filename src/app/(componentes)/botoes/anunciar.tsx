"use client";

import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { LogOutIcon } from "lucide-react";

export default function BotaoAnunciar() {
  const { data: session } = authClient.useSession();

  return (
    <div className="float-left">
      {session?.user ? (
        <>
          <Button
            variant="outline"
            size="icon"
            onClick={() => authClient.signOut()}
            className="float-right mt-3 mb-1 ml-3"
          >
            <LogOutIcon />
          </Button>
          <Link
            href="/autenticacao"
            className="float-right mt-2 mb-1 ml-3 w-40 rounded-3xl border-2 border-white bg-white p-2 text-center font-bold opacity-65 shadow-sm transition duration-700 hover:opacity-100"
          >
            <p className="text-center">Gerenciador</p>
          </Link>
        </>
      ) : (
        <>
          <Link
            href="/autenticacao"
            className="float-right mt-2 mb-1 ml-3 w-40 rounded-3xl border-2 border-white bg-white p-2 text-center font-bold opacity-65 shadow-sm transition duration-700 hover:opacity-100"
          >
            <p className="text-center">ANUNCIE AQUI</p>
          </Link>
        </>
      )}
    </div>
  );
}
