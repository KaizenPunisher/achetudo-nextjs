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
import { useState } from "react";
import { cadastrarEmpresa } from "../../models/empresa/cadastrarempresa";
import BotaoSalvar from "@/app/(componentes)/botoes/botaosalvar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const formSchema = z.object({
  nome: z.string().min(2, "Campo não pode ficar vazio").max(100),
  tipo: z.string(),
  documento: z
    .string() // Changed from z.number()
    .min(11, "Deve ter 11 dígitos e somente numeros")
    .max(11, "Deve ter 11 dígitos e somente numeros")
    .transform((val) => val.replace(/\D/g, "")),
  slug: z.string(),
  descricao: z.string(),
  aberturaHorario: z.string().optional(),
  fechamentoHorario: z.string().optional(),
  endereco: z.string().min(4, "Endereço deve ter pelo menos 4 caracteres"),
  telefone: z
    .string() // Changed from z.number()
    .min(11, "Telefone deve ter 11 dígitos e somente numeros")
    .max(11, "Telefone deve ter 11 dígitos e somente numeros"),
  usuarioid: z.string(),
});

type Props = {
  usuarioId: string;
};

function CadastroEmpresa({ usuarioId }: Props) {
  const [tipo, setTipo] = useState("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),

    defaultValues: {
      nome: "",
      tipo: "",
      documento: "",
      slug: "",
      descricao: "",
      aberturaHorario: "",
      fechamentoHorario: "",
      endereco: "",
      telefone: "",
      usuarioid: usuarioId,
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const formData = new FormData();
    Object.entries(values).forEach(([key, value]) => {
      formData.append(key, value as string);
    });

    await cadastrarEmpresa(formData);
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
              <FormLabel>Nome Fantasia</FormLabel>
              <FormControl>
                <Input placeholder="Nome da Empresa" type="text" {...field} />
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
              <FormLabel>Pessoa fisica ou juridica ?</FormLabel>
              <Select
                onValueChange={(value) => {
                  field.onChange(value); // atualiza no react-hook-form
                  setTipo(value); // mantém também no estado local, se precisar
                }}
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o tipo de empresa" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="fisica">
                    Pessoa Fisica (autonomo)
                  </SelectItem>
                  <SelectItem value="juridica">Pessoa Juridica</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        {tipo === "juridica" && (
          <FormField
            control={form.control}
            name="documento"
            render={({ field }) => (
              <FormItem id="cnpj">
                <FormLabel>CNPJ</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Digite o CNPJ da Empresa"
                    type="text"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        )}
        {tipo === "fisica" && (
          <FormField
            control={form.control}
            name="documento"
            render={({ field }) => (
              <FormItem>
                <FormLabel>CPF</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Digite o seu CPF"
                    type="text"
                    {...field}
                    id="cpf"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}
        <FormField
          control={form.control}
          name="descricao"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Sobre sua empresa, serviço ou produto</FormLabel>
              <FormControl>
                <Input placeholder="Descrição" type="text" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="aberturaHorario"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Horário de Abertura da empresa ou serviço</FormLabel>
              <FormControl>
                <Input placeholder="Exemplo: 09:00" type="text" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="fechamentoHorario"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Horário de Fechamento da empresa ou serviço</FormLabel>
              <FormControl>
                <Input placeholder="Exemplo: 18:00" type="text" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="endereco"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Endereço</FormLabel>
              <FormControl>
                <Input
                  placeholder="Digite o endereço da Empresa"
                  type="text"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="telefone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Telefone para contato (Whatsapp)</FormLabel>
              <FormControl>
                <Input
                  placeholder="Digite o telefone da Empresa"
                  type="text"
                  {...field}
                />
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

export default CadastroEmpresa;
