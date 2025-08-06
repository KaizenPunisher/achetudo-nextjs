import Link from "next/link";

export default function BotaoEntrar() {
  return (
    <div className="float-left">
      <Link
        href=""
        className="float-right mt-2 ml-3 w-24 rounded-3xl border-2 border-white bg-white p-2 text-center font-bold opacity-65 shadow-sm transition duration-700 hover:opacity-100"
      >
        <p>ENTRAR</p>
      </Link>
    </div>
  );
}
