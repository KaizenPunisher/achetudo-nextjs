import Link from "next/link";
import Image from "next/image";
import Logo from "../app/(imagens)/logo.png";
import Login from "./(modulos)/login";
import Saudacao from "./(componentes)/mensagensdosistema/saudacao";

export default function Home() {
  return (
    <main className="container m-2 mx-auto box-border flex h-screen w-auto justify-center rounded-3xl border-20 border-white bg-gradient-to-b from-cyan-100 to-cyan-600 shadow-md shadow-gray-700">
      <div className="container mx-auto h-min">
        <div className="float-left container h-auto w-auto">
          <h4 className="float-left container px-5">
            Centro Comercial Cidade Tiradentes
          </h4>
        </div>
        <Link href="/" className="float-left">
          <Image
            alt="Ache Tudo Logo"
            src={Logo}
            width={80}
            className="pt-2 pl-1"
          />
        </Link>
        <Login />
        <Saudacao />
        <div className="font-botoes clear-both h-auto w-auto p-0">
          <ul className="grid h-auto grid-cols-2 text-center">
            <li className="bg-white pt-2 pb-2 pl-2">PRODUTOS</li>
            <li className="bg-white pt-2 pb-2 pl-2">SERVIÇOS</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
