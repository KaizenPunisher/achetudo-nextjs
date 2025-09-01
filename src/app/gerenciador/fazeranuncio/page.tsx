import Link from "next/link";
import Image from "next/image";
import Logo from "../../../../public/logo.png";

const FazerAnuncio = () => {
  return (
    <main
      id="principal"
      className="container mx-auto box-border h-auto w-screen justify-center rounded-3xl border-20 border-white bg-gradient-to-b from-cyan-100 to-cyan-600 p-4 shadow-md shadow-gray-700"
    >
      <Link href="/" className="m-auto" id="logo">
        <Image
          alt="Ache Tudo Logo"
          priority={false}
          src={Logo}
          width={80}
          className="m-auto mb-3"
        />
      </Link>
      <div className="m-auto flex w-full max-w-sm flex-col gap-6"></div>
    </main>
  );
};
export default FazerAnuncio;
