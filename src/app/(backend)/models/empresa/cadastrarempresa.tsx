"use server";

import { db } from "@/db";
import { empresasTable } from "@/db/schema";

export const cadastrarEmpresa = async (form: FormData) => {
  await db
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
};
