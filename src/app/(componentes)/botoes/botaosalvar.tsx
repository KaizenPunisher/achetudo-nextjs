import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";

const BotaoSalvar = () => {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      Salvar
    </Button>
  );
};

export default BotaoSalvar;
