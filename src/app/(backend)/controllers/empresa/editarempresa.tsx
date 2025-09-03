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
import BotaoSalvar from "@/app/(componentes)/botoes/botaosalvar";
import { editarEmpresa } from "../../models/empresa/editarempresa";

const formSchema = z.object({
  nome: z.string(),
  tipo: z.string(),
  documento: z.string().transform((val) => val.replace(/\D/g, "")),
  descricao: z.string(),
  aberturaHorario: z.string().optional(),
  fechamentoHorario: z.string().optional(),
  email: z.string().email("Email inválido"),
  endereco: z.string(),
  telefone: z.string(),
  usuarioid: z.string().uuid(),
  remid: z.string().uuid(),
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
    descricao: string;
    abertura_horario: string | null;
    fechamento_horario: string | null;
    createdAt: Date;
    updatedAt: Date | null;
    remId: string | null;
    usuarioId: string;
    email: string | null;
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
  const [empresa, setEmpresa] = useState<EmpresaResponse | null>(null);

  useEffect(() => {
    const fetchEmpresa = async () => {
      const response = await encontrarEmpresa(usuarioId);
      setEmpresa(response);
      setTipo(response.empresas.tipo);
    };
    fetchEmpresa();
  }, [usuarioId]);

  const [tipo, setTipo] = useState("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),

    defaultValues: {
      nome: "",
      tipo: "",
      documento: "",
      descricao: "",
      aberturaHorario: "",
      fechamentoHorario: "",
      endereco: "",
      telefone: "",
      usuarioid: usuarioId,
      email: "",
      remid: process.env.NEXT_PUBLIC_TESTE_OG!,
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const formData = new FormData();

    if (values.nome === "") {
      values.nome = empresa?.empresas.nome as string;
    }
    if (values.tipo === "") {
      values.tipo = empresa?.empresas.tipo as string;
    }
    if (values.documento === "") {
      values.documento = empresa?.empresas.documento as string;
    }
    if (values.descricao === "") {
      values.descricao = empresa?.empresas.descricao as string;
    }
    if (values.aberturaHorario === "") {
      values.aberturaHorario = empresa?.empresas.abertura_horario as string;
    }
    if (values.fechamentoHorario === "") {
      values.fechamentoHorario = empresa?.empresas.fechamento_horario as string;
    }
    if (values.email === "") {
      values.email = empresa?.empresas.email as string;
    }
    if (values.endereco === "") {
      values.endereco = empresa?.enderecos.nome as string;
    }
    if (values.telefone === "") {
      values.telefone = empresa?.telefones.nome as string;
    }

    Object.entries(values).forEach(([key, value]) => {
      formData.append(key, value as string);
    });

    await editarEmpresa(formData);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 p-5">
        <input
          type="hidden"
          name="usuarioid"
          value={form.getValues("usuarioid")}
        />
        <input type="hidden" name="remid" value={form.getValues("remid")} />
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
          name="aberturaHorario"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Horário de Abertura da empresa ou serviço</FormLabel>
              <FormControl>
                <Input
                  placeholder={`${empresa?.empresas.abertura_horario}`}
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
          name="fechamentoHorario"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Horário de Fechamento da empresa ou serviço</FormLabel>
              <FormControl>
                <Input
                  placeholder={`${empresa?.empresas.fechamento_horario}`}
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
                  placeholder={`${empresa?.empresas.email}`}
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
};
export default EditarEmpresa;
