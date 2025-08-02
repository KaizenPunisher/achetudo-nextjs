import BotaoCadastro from "../(componentes)/botoes/cadastro";
import BotaoEntrar from "../(componentes)/botoes/entrar";

export default function Login() {
  return (
    <div className="float-right container h-auto w-auto pr-2">
      <BotaoCadastro />
      <BotaoEntrar />
    </div>
  );
}
