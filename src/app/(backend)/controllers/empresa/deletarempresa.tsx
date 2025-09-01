import BotaoSalvar from "@/app/(componentes)/botoes/botaosalvar";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { CircleX } from "lucide-react";
import { useForm } from "react-hook-form";
import z from "zod";
import { deletarEmpresa } from "../../models/empresa/deletarempresa";

const formSchema = z.object({
  empresaId: z.string(),
  deletarEmpresa: z
    .string()
    .includes("DELETAR", { message: "Digite DELETAR tudo maiúsculo !" }),
});

interface Props {
  empresaprop: string;
}

const DeletarEmpresa = ({ empresaprop }: Props) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      empresaId: empresaprop,
      deletarEmpresa: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const formData = new FormData();
    Object.entries(values).forEach(([key, value]) => {
      formData.append(key, value as string);
    });
    await deletarEmpresa(formData);
  };

  return (
    <div
      className="animate-fade-in-scale absolute top-0 right-0 hidden h-full w-full rounded-lg bg-red-100 pr-1 opacity-0 target:block target:opacity-100"
      id="deletarempresa"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 p-5">
          <input type="hidden" name="empresaId" value={empresaprop} />
          <FormField
            control={form.control}
            name="deletarEmpresa"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Você tem certeza que deseja excluir?</FormLabel>
                <FormDescription>
                  <p>
                    Digite <strong>DELETAR</strong>
                  </p>
                </FormDescription>
                <FormControl>
                  <Input
                    placeholder="Isso apagará todos os anuncios"
                    type="text"
                    {...field}
                    className="border-1 border-red-600"
                  />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />
          <BotaoSalvar />
          <a href="#mostrarempresa" className="absolute top-2 right-2">
            <CircleX />
          </a>
        </form>
      </Form>
    </div>
  );
};

export default DeletarEmpresa;
