"use client";

import { authClient } from "@/lib/auth-client";

export default function Saudacao() {
  const { data: session } = authClient.useSession();
  return (
    <article className="float-right h-25 w-55 pt-5 pr-2 pb-2 pl-0 text-center text-wrap">
      <p className="text-xs">Bem vindo,</p>
      <p className="truncate text-base ...">
        {session?.user?.name || session?.user?.email || "Visitante"}{" "}
      </p>
    </article>
  );
}
