"use server";

import { db } from "@/db";
import { empresasTable } from "@/db/schema";
import { redirect } from "next/navigation";

export const cadastrarEmpresa = async (form: FormData) => {
  try {
    const [result] = await db
      .insert(empresasTable)
      .values({
        nome: form.get("nome") as string,
        cpf: form.get("cpf") as string,
        cnpj: form.get("cnpj") as string,
        tipo: form.get("tipo") as string,
        slug: form.get("slug") as string,
        descricao: form.get("descricao") as string,
        admId: form.get("admid") as string,
        usuarioId: form.get("usuarioid") as string,
      })
      .returning({ id: empresasTable.id });

    if (!result) {
      throw new Error("Erro ao cadastrar empresa");

      redirect("/gerenciador");
    }
    redirect("/gerenciador");
  } catch (error) {
    console.error("Error ao cadastrar empresa:", error);
    throw error;
  }
};
