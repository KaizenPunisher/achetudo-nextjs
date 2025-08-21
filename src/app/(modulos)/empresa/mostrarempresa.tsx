interface EmpresaType {
  empresas: {
    id: string;
    nome: string;
    cpf: string | null;
    cnpj: string | null;
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
      <div className="rounded-lg bg-white p-4 shadow-md">
        <ul className="flex flex-wrap text-xs">
          <li className="p-2">
            <h3>Empresa</h3>
            <h5>{busca.empresas.nome}</h5>
          </li>
          <li className="p-2">
            <h3>CPF ou CNPJ</h3>
            <h5>
              {busca.empresas.cpf} - {busca.empresas.cnpj}
            </h5>
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
        </ul>
      </div>
    </>
  );
};
export default MostrarEmpresa;
