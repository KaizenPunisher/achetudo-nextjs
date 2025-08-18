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

const formSchema = z.object({
  nome: z.string().min(2).max(100),
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
  tipo: z.string().optional(),
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
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),

    defaultValues: {
      nome: "",
      cpf: "",
      cnpj: "",
      tipo: "",
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
        <FormField
          control={form.control}
          name="nome"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome</FormLabel>
              <FormControl>
                <Input
                  placeholder="Digite o nome da Empresa ou nome Fantasia"
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
          name="cpf"
          render={({ field }) => (
            <FormItem>
              <FormLabel>CPF</FormLabel>
              <FormControl>
                <Input
                  placeholder="Digite o CPF da Empresa"
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
          name="cnpj"
          render={({ field }) => (
            <FormItem>
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
        <FormField
          control={form.control}
          name="tipo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tipo</FormLabel>
              <FormControl>
                <Input
                  placeholder="Digite o tipo da Empresa"
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
          name="slug"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Slug</FormLabel>
              <FormControl>
                <Input
                  placeholder="Digite o slug da Empresa"
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
