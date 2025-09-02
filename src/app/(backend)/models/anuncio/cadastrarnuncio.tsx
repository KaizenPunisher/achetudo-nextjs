"use server";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
//import { db } from "@/db";
import { redirect } from "next/navigation";
//import { anunciosTable } from "@/db/schema";

export const cadastrarAnuncio = async (form: FormData) => {
  try {
    //upload
    const file = form.get("image") as File;
    const buffer = (await file.arrayBuffer()) as unknown as Buffer;
    const client = new S3Client();

    const command = new PutObjectCommand({
      Bucket: process.env.AWS_S3_BUCKET_NAME,
      ACL: "public-read",
      Key: "anuncio/teste.jpg",
      Body: buffer,
    });

    const uploadResult = await client.send(command);

    if (!uploadResult) {
      throw new Error("Erro no upload", uploadResult);
    } else {
      console.log("Upload successful:", uploadResult);
      /*
      await db
        .insert(anunciosTable)
        .values({
          nome: form.get("nome") as string,
          documento: form.get("documento") as string,
          tipo: form.get("tipo") as string,
          slug: form.get("nome") as string,
          abertura_horario: form.get("aberturaHorario") as string,
          fechamento_horario: form.get("fechamentoHorario") as string,
          descricao: form.get("descricao") as string,
          remId: process.env.NEXT_PUBLIC_TESTE_OG! as string,
          usuarioId: form.get("usuarioid") as string,
        })
        .returning({ id: anunciosTable.id });
      */
    }
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
  redirect("/");
  // upload file to aws s3
};

{
  /* 
"use server";

import { db } from "@/app/_lib/prisma";
import {
  ListObjectsCommand,
  PutObjectCommand,
  S3Client,
} from "@aws-sdk/client-s3";
import { redirect } from "next/navigation";

export const cadastroAnuncio = async (form: FormData) => {
  const email = form.get("email") as string;
  const password = form.get("password") as string;
  const file = form.get("image") as File;

  const user = await db.user.create({
    data: {
      email,
      password,
    },
  });

  const buffer = (await file.arrayBuffer()) as Buffer;

  // upload file to aws s3
  const client = new S3Client();

  const key = `profile-pictures/${user.id}.${file.type.split("/")[1]}`;

  const command = new PutObjectCommand({
    Bucket: process.env.AWS_S3_BUCKET_NAME,
    ACL: "public-read",
    Key: key,
    Body: buffer,
  });

  await client.send(command);

  await db.user.update({
    where: {
      id: user.id,
    },
    data: {
      imageUrl: `https://${process.env.AWS_S3_BUCKET_NAME}.s3.amazonaws.com/${key}`,
    },
  });

  redirect("/");
};
*/
}
