import Link from "next/link";
import { FilePen, Trash2 } from "lucide-react";
import DeletarEmpresa from "./deletarempresa";

interface EmpresaType {
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
}

interface MostrarEmpresaProps {
  busca: EmpresaType;
}

const MostrarEmpresa = ({ busca }: MostrarEmpresaProps) => {
  return (
    <>
      <div
        className="relative rounded-lg bg-white p-4 pr-10 pb-15 shadow-md"
        id="#mostrarempresa"
      >
        <ul className="flex flex-wrap text-xs">
          <li className="p-2">
            <h3>Empresa</h3>
            <h5>{busca.empresas.nome}</h5>
          </li>
          <li className="p-2">
            <h3>CPF ou CNPJ</h3>
            <h5>{busca.empresas.documento}</h5>
          </li>
          <li className="p-2">
            <h3>Tipo de empresa</h3>
            <h5>{busca.empresas.tipo}</h5>
          </li>
          <li className="p-2">
            <h3>Sobre a empresa</h3>
            <h5>{busca.empresas.descricao}</h5>
          </li>
          <li className="p-2">
            <h3>Endereço</h3>
            <h5>{busca.enderecos.nome}</h5>
          </li>
          <li className="p-2">
            <h3>Telefone</h3>
            <h5>{busca.telefones.nome}</h5>
          </li>
          <li>
            <Link
              href="/gerenciador/editarempresa"
              className="absolute right-25 bottom-6 m-auto opacity-65 shadow-sm transition duration-800 hover:opacity-100"
            >
              <FilePen></FilePen>
            </Link>
            <a
              href="#deletarempresa"
              className="absolute right-10 bottom-6 m-auto opacity-65 shadow-sm transition duration-800 hover:opacity-100"
            >
              <Trash2 className="text-red-600" />
            </a>
            <DeletarEmpresa empresaprop={busca.empresas.id} />
          </li>
        </ul>
      </div>
    </>
  );
};
export default MostrarEmpresa;
