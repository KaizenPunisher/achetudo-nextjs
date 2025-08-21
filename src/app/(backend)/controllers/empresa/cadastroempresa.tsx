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
import BotaoSalvar from "../../../(componentes)/botoes/botaosalvar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

const formSchema = z.object({
  nome: z.string().min(2).max(100),
  tipo: z.string(),
  cpf: z
    .string() // Changed from z.number()
    .min(11, "CPF deve ter 11 dígitos e somente numeros")
    .max(11, "CPF deve ter 11 dígitos e somente numeros")
    .transform((val) => val.replace(/\D/g, "")),
  cnpj: z
    .string() // Changed from z.number()
    .min(14, "CNPJ deve ter 14 dígitos e somente numeros")
    .max(14, "CNPJ deve ter 14 dígitos e somente numeros")
    .transform((val) => val.replace(/\D/g, "")),
  slug: z.string().min(2).max(100),
  descricao: z.string(),
  endereco: z.string().min(4, "Endereço deve ter pelo menos 4 caracteres"),
  telefone: z
    .string() // Changed from z.number()
    .min(11, "Telefone deve ter 11 dígitos e somente numeros")
    .max(11, "Telefone deve ter 11 dígitos e somente numeros"),
  usuarioid: z.string(),
  admid: z.string(),
});

type Props = {
  usuarioId: string;
};

function CadastroEmpresa({ usuarioId }: Props) {
  const [juridica, setJuridica] = useState("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),

    defaultValues: {
      nome: "",
      tipo: "",
      cpf: "",
      cnpj: "",
      slug: "",
      descricao: "",
      endereco: "",
      telefone: "",
      usuarioid: usuarioId,
      admid: process.env.NEXT_PUBLIC_TESTE_OG!,
    },
  });
  return (
    <Form {...form}>
      <form action={""} className="space-y-8 p-5">
        <input
          type="hidden"
          name="usuarioid"
          value={form.getValues("usuarioid")}
        />
        <input type="hidden" name="admid" value={form.getValues("admid")} />
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
              <Select onValueChange={setJuridica} defaultValue={field.value}>
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
        {juridica === "juridica" && (
          <FormField
            control={form.control}
            name="cnpj"
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
        {juridica === "fisica" && (
          <FormField
            control={form.control}
            name="cpf"
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
              <FormLabel>Descrição</FormLabel>
              <FormControl>
                <Input
                  placeholder="Digite a descrição da Empresa"
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
              <FormLabel>Telefone</FormLabel>
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
      </form>
    </Form>
  );
}

export default CadastroEmpresa;
