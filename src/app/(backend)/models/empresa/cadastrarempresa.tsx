"use server";

import { db } from "@/db";
import { empresasTable, enderecosTable, telefonesTable } from "@/db/schema";
import { redirect } from "next/navigation";

export const cadastrarEmpresa = async (form: FormData) => {
  try {
    const [result] = await db
      .insert(empresasTable)
      .values({
        nome: form.get("nome") as string,
        documento: form.get("documento") as string,
        tipo: form.get("tipo") as string,
        slug: "" as string,
        descricao: form.get("descricao") as string,
        admId: form.get("admid") as string,
        usuarioId: form.get("usuarioid") as string,
      })
      .returning({ id: empresasTable.id });

    if (!result) {
      throw new Error("Erro ao cadastrar empresa");
    } else {
      await db.insert(enderecosTable).values({
        nome: form.get("endereco") as string,
        empresaId: result.id,
      });
      await db.insert(telefonesTable).values({
        nome: form.get("telefone") as string,
        empresaId: result.id,
      });
    }
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
  redirect("/gerenciador");
};
