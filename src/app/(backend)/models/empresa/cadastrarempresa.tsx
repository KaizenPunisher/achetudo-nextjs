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
        slug: form.get("id") as string,
        abertura_horario: form.get("aberturaHorario") as string,
        fechamento_horario: form.get("fechamentoHorario") as string,
        descricao: form.get("descricao") as string,
        remId: process.env.NEXT_PUBLIC_TESTE_OG! as string,
        usuarioId: form.get("usuarioid") as string,
        email: form.get("email") as string,
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
  redirect("/");
};
