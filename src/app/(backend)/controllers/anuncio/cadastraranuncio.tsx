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
import { cadastroAnuncio } from "../../models/anuncio/cadastroanuncio";
import BotaoCadastrarAnuncio from "../componentes/botaocadastraranuncio";

const formSchema = z.object({
  image: z.any(),
});

const CadastrarAnuncio = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      image: "",
    },
  });

  return (
    <Form {...form}>
      <form action={cadastroAnuncio} className="space-y-8 p-5">
        <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Foto de Perfil</FormLabel>
              <FormControl>
                <Input placeholder="Enter your email" type="file" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <BotaoCadastrarAnuncio />
      </form>
    </Form>
  );
};

export default CadastrarAnuncio;
