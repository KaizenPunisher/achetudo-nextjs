"use server";

import { db } from "@/db";
import { empresasTable, enderecosTable, telefonesTable } from "@/db/schema";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";

export const editarEmpresa = async (form: FormData) => {
  try {
    const [result] = await db
      .update(empresasTable)
      .set({
        nome: form.get("nome") as string,
        tipo: form.get("tipo") as string,
        documento: form.get("documento") as string,
        descricao: form.get("descricao") as string,
        abertura_horario: form.get("aberturaHorario") as string | null,
        fechamento_horario: form.get("fechamentoHorario") as string | null,
      })
      .where(eq(empresasTable.usuarioId, `${form.get("usuarioid")}`))
      .returning({ empresaid: empresasTable.id });

    if (!result) {
      throw new Error("Erro ao editar empresa");
    } else {
      await db
        .update(enderecosTable)
        .set({
          nome: form.get("endereco") as string,
        })
        .where(eq(enderecosTable.empresaId, result.empresaid));

      await db
        .update(telefonesTable)
        .set({
          nome: form.get("telefone") as string,
        })
        .where(eq(telefonesTable.empresaId, result.empresaid));
    }
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
  redirect("/");
};
