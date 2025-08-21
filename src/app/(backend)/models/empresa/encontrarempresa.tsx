"use server";

import { db } from "@/db";
import { empresasTable, enderecosTable, telefonesTable } from "@/db/schema";
import { eq } from "drizzle-orm";

export const encontrarEmpresa = async (id: string) => {
  const empresa = await db
    .select()
    .from(empresasTable)
    .innerJoin(enderecosTable, eq(empresasTable.id, enderecosTable.empresaId))
    .innerJoin(telefonesTable, eq(empresasTable.id, telefonesTable.empresaId))
    .where(eq(empresasTable.usuarioId, id));
  return empresa[0];
};
