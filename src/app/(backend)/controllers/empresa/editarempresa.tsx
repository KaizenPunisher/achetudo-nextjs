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
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { encontrarEmpresa } from "../../models/empresa/encontrarempresa";
import Link from "next/link";

const formSchema = z.object({
  nome: z.string().min(2, "Digite o nome da empresa").max(100),
  tipo: z.string(),
  documento: z
    .string() // Changed from z.number()
    .min(11, "Deve ter 11 dígitos e somente numeros")
    .max(11, "Deve ter 11 dígitos e somente numeros")
    .transform((val) => val.replace(/\D/g, "")),
  slug: z.string(),
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

type EmpresaResponse = {
  empresas: {
    id: string;
    nome: string;
    documento: string;
    tipo: string;
    slug: string | null;
    descricao: string;
    createdAt: Date;
    updatedAt: Date | null;
    admId: string | null;
    usuarioId: string;
  };
  enderecos: {
    id: string;
    nome: string;
    createdAt: Date;
    updatedAt: Date | null;
    empresaId: string;
  };
  telefones: {
    id: string;
    nome: string;
    createdAt: Date;
    updatedAt: Date | null;
    empresaId: string;
  };
};

const EditarEmpresa = ({ usuarioId }: Props) => {
  const [tipo, setTipo] = useState("");
  const [empresa, setEmpresa] = useState<EmpresaResponse | null>(null);

  useEffect(() => {
    const fetchEmpresa = async () => {
      const response = await encontrarEmpresa(usuarioId);
      setEmpresa(response);
      setTipo(response.empresas.tipo);
    };
    fetchEmpresa();
  }, [usuarioId]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),

    defaultValues: {
      nome: "",
      tipo: "",
      documento: "",
      slug: "",
      descricao: "",
      endereco: "",
      telefone: "",
      usuarioid: usuarioId,
      admid: process.env.NEXT_PUBLIC_TESTE_OG!,
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const formData = new FormData();
    Object.entries(values).forEach(([key, value]) => {
      formData.append(key, value as string);
    });
    console.log(JSON.stringify(FormData));
    //await cadastrarEmpresa(formData);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 p-5">
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
                <Input
                  placeholder={`${empresa?.empresas.nome}`}
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
                    <SelectValue placeholder={`${empresa?.empresas.tipo}`} />
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
                    placeholder={`${empresa?.empresas.documento}`}
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
                    placeholder={`${empresa?.empresas.documento}`}
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
              <FormLabel>Sobre sua empresa ou serviço</FormLabel>
              <FormControl>
                <Input
                  placeholder={`${empresa?.empresas.descricao}`}
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
                  placeholder={`${empresa?.enderecos.nome}`}
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
              <FormLabel>Telefone para contato</FormLabel>
              <FormControl>
                <Input
                  placeholder={`${empresa?.telefones.nome}`}
                  type="text"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full cursor-pointer">
          Salvar
        </Button>
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
};
export default EditarEmpresa;
