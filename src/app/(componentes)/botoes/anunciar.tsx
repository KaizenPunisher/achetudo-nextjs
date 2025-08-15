import Link from "next/link";

export default function BotaoAnunciar() {
  return (
    <div className="float-left">
      <Link
        href="/autenticacao"
        className="float-right mt-2 mb-1 ml-3 w-40 rounded-3xl border-2 border-white bg-white p-2 text-center font-bold opacity-65 shadow-sm transition duration-700 hover:opacity-100"
      >
        <p className="text-center">ANUNCIE AQUI</p>
      </Link>
    </div>
  );
}
