"use server";

import { db } from "@/db";
import { empresasTable, enderecosTable } from "@/db/schema";
import { eq } from "drizzle-orm";

export const encontrarEmpresa = async (id: string) => {
  const empresa = await db
    .select()
    .from(empresasTable)
    .innerJoin(enderecosTable, eq(empresasTable.id, enderecosTable.empresaId))
    .where(eq(empresasTable.usuarioId, id));
  return empresa[0];
};
