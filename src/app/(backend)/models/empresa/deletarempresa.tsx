"use server";

import { db } from "@/db";
import { empresasTable } from "@/db/schema";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";

export const deletarEmpresa = async (form: FormData) => {
  try {
    const [result] = await db
      .delete(empresasTable)
      .where(eq(empresasTable.id, `${form.get("empresaId")}`))
      .returning();

    if (!result) {
      throw new Error("Erro ao editar empresa");
    }
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
  redirect("/");
};
