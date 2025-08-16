"use client";

import { authClient } from "@/lib/auth-client";

export default function Saudacao() {
  const { data: session } = authClient.useSession();
  return (
    <div className="float-right container h-auto w-54 pt-1">
      <p className="text-xs">Bem vindo,</p>
      <p className="h-auto w-auto truncate text-base ...">
        {session?.user?.name || session?.user?.email || "Visitante"}
      </p>
    </div>
  );
}
