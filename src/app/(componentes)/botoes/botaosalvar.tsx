import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";

const BotaoSalvar = () => {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      Salvar
    </Button>
  );
};

export default BotaoSalvar;
