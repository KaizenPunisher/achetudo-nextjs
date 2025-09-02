"use client";

import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import BotaoSalvar from "@/app/(componentes)/botoes/botaosalvar";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  nome: z.string().min(2, "Campo não pode ficar vazio").max(100),
  tipo: z.string(),
  imagem1: z.string().optional(),
  precoemcentavos: z
    .string()
    .transform((val) => String(val.replace(/\D/g, ""))),
  descricao: z.string(),
  usuarioid: z.string(),
});

type Props = {
  usuarioId: string;
};

function CadastroAnuncio({ usuarioId }: Props) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),

    defaultValues: {
      nome: "",
      tipo: "",
      imagem1: "",
      precoemcentavos: "",
      descricao: "",
      usuarioid: usuarioId,
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const formData = new FormData();
    Object.entries(values).forEach(([key, value]) => {
      formData.append(key, value as string);
    });
    console.log(Object.fromEntries(formData));
    //await cadastrarAnuncio(formData);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 p-5">
        <input
          type="hidden"
          name="usuarioid"
          value={form.getValues("usuarioid")}
        />
        <FormField
          control={form.control}
          name="nome"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome do Anuncio</FormLabel>
              <FormControl>
                <Input placeholder="Nome do Anuncio" type="text" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="tipo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tipo de Anuncio</FormLabel>
              <Select
                onValueChange={(value) => {
                  field.onChange(value); // atualiza no react-hook-form
                }}
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o tipo de anuncio" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="outros">Outros</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="imagem1"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Imagem 1</FormLabel>
              <FormControl>
                <Input placeholder="Descrição" type="text" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="precoemcentavos"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Preço</FormLabel>
              <FormControl>
                <Input placeholder="Preço" type="text" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="descricao"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Descrição</FormLabel>
              <FormControl>
                <Input placeholder="Descrição" type="text" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <BotaoSalvar />
        <Link href="/gerenciador">
          <Button
            type="button"
            className="w-full cursor-pointer bg-amber-50 text-black hover:bg-amber-200"
          >
            Voltar
          </Button>
        </Link>
      </form>
    </Form>
  );
}

export default CadastroAnuncio;
