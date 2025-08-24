"use client";

import { authClient } from "@/lib/auth-client";

export default function Saudacao() {
  const { data: session } = authClient.useSession();
  return (
    <div className="float-left container m-auto h-23 w-56 pt-6 pl-0 text-center">
      <p className="text-xs">Bem vindo,</p>
      <p className="h-auto w-auto truncate text-base ...">
        {session?.user?.name || session?.user?.email || "Visitante"}
      </p>
    </div>
  );
}
