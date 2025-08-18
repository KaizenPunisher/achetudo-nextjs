import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";

const BotaoCadastrarAnuncio = () => {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      Cadastrar Anúncio
    </Button>
  );
};

export default BotaoCadastrarAnuncio;
