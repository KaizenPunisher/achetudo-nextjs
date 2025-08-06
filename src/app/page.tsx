import Link from "next/link";
import Image from "next/image";
import Logo from "../app/(imagens)/logo.png";
import Login from "./(modulos)/login";
import Saudacao from "./(componentes)/mensagensdosistema/saudacao";

export default function Home() {
  return (
    <main
      id="principal"
      className="container m-2 mx-auto box-border flex h-screen w-screen flex-col justify-center rounded-3xl border-20 border-white bg-gradient-to-b from-cyan-100 to-cyan-600 shadow-md shadow-gray-700"
    >
      <header className="container h-min w-auto">
        <div className="float-start h-auto w-auto" id="titulo">
          <h4 className="px-8 font-semibold tracking-tight">
            Centro Comercial Cidade Tiradentes
          </h4>
        </div>
        <Link href="/" className="float-left" id="logo">
          <Image
            alt="Ache Tudo Logo"
            src={Logo}
            width={80}
            className="pt-2 pl-2"
          />
        </Link>
        <Login />
        <Saudacao />
        <div
          className="font-botoes clear-both h-auto w-auto p-0"
          id="menu-principal"
        >
          <ul className="grid h-auto grid-cols-2 text-center">
            <li className="bg-white pt-2 pb-2 pl-2">PRODUTOS</li>
            <li className="bg-white pt-2 pb-2 pl-2">SERVIÇOS</li>
          </ul>
        </div>
      </header>
      <section className="h-screen w-auto overflow-auto md:overflow-scroll">
        <ul className="m-0-auto w-auto">
          <li className="relative float-left m-0">
            <a
              href="#image-1"
              className="relative z-0 block h-40 w-40 bg-amber-800 p-10 sm:h-41 sm:w-41 md:h-45 md:w-45 lg:h-51 lg:w-51"
            >
              <Image alt="Ache Tudo Logo" src={Logo} className="block" />
            </a>
            <div
              className="animate-fade-in-scale fixed top-0 left-0 -z-10 hidden h-0 w-0 overflow-hidden bg-white p-0 text-center opacity-0 target:z-40 target:block target:h-screen target:w-screen target:opacity-100"
              id="image-1"
            >
              <a href="#principal" className="absolute z-50">
                x FECHAR
              </a>
              <Image
                alt="Ache Tudo Logo"
                src={Logo}
                className="relative m-auto mt-32 block h-80 w-70 border-2 border-black"
              />
              <div>
                <h3>
                  pointe <span>/point/</span>
                </h3>
                <p>Dance performed on the tips of the toes</p>
              </div>
            </div>
          </li>
          <li className="relative float-left m-0">
            <a
              href="#image-1"
              className="relative z-0 block h-40 w-40 bg-amber-800 p-10 sm:h-41 sm:w-41 md:h-45 md:w-45 lg:h-51 lg:w-51"
            >
              <Image alt="Ache Tudo Logo" src={Logo} className="block" />
            </a>
            <div
              className="animate-fade-in-scale fixed top-0 left-0 -z-10 hidden h-0 w-0 overflow-hidden bg-white p-0 text-center opacity-0 target:z-40 target:block target:h-screen target:w-screen target:opacity-100"
              id="image-1"
            >
              <a href="#principal" className="absolute z-50">
                x FECHAR
              </a>
              <Image
                alt="Ache Tudo Logo"
                src={Logo}
                className="relative m-auto mt-32 block h-80 w-70 border-2 border-black"
              />
              <div>
                <h3>
                  pointe <span>/point/</span>
                </h3>
                <p>Dance performed on the tips of the toes</p>
              </div>
            </div>
          </li>
          <li className="relative float-left m-0">
            <a
              href="#image-1"
              className="relative z-0 block h-40 w-40 bg-amber-800 p-10 sm:h-41 sm:w-41 md:h-45 md:w-45 lg:h-51 lg:w-51"
            >
              <Image alt="Ache Tudo Logo" src={Logo} className="block" />
            </a>
            <div
              className="animate-fade-in-scale fixed top-0 left-0 -z-10 hidden h-0 w-0 overflow-hidden bg-white p-0 text-center opacity-0 target:z-40 target:block target:h-screen target:w-screen target:opacity-100"
              id="image-1"
            >
              <a href="#principal" className="absolute z-50">
                x FECHAR
              </a>
              <Image
                alt="Ache Tudo Logo"
                src={Logo}
                className="relative m-auto mt-32 block h-80 w-70 border-2 border-black"
              />
              <div>
                <h3>
                  pointe <span>/point/</span>
                </h3>
                <p>Dance performed on the tips of the toes</p>
              </div>
            </div>
          </li>
          <li className="relative float-left m-0">
            <a
              href="#image-1"
              className="relative z-0 block h-40 w-40 bg-amber-800 p-10 sm:h-41 sm:w-41 md:h-45 md:w-45 lg:h-51 lg:w-51"
            >
              <Image alt="Ache Tudo Logo" src={Logo} className="block" />
            </a>
            <div
              className="animate-fade-in-scale fixed top-0 left-0 -z-10 hidden h-0 w-0 overflow-hidden bg-white p-0 text-center opacity-0 target:z-40 target:block target:h-screen target:w-screen target:opacity-100"
              id="image-1"
            >
              <a href="#principal" className="absolute z-50">
                x FECHAR
              </a>
              <Image
                alt="Ache Tudo Logo"
                src={Logo}
                className="relative m-auto mt-32 block h-80 w-70 border-2 border-black"
              />
              <div>
                <h3>
                  pointe <span>/point/</span>
                </h3>
                <p>Dance performed on the tips of the toes</p>
              </div>
            </div>
          </li>
          <li className="relative float-left m-0">
            <a
              href="#image-1"
              className="relative z-0 block h-40 w-40 bg-amber-800 p-10 sm:h-41 sm:w-41 md:h-45 md:w-45 lg:h-51 lg:w-51"
            >
              <Image alt="Ache Tudo Logo" src={Logo} className="block" />
            </a>
            <div
              className="animate-fade-in-scale fixed top-0 left-0 -z-10 hidden h-0 w-0 overflow-hidden bg-white p-0 text-center opacity-0 target:z-40 target:block target:h-screen target:w-screen target:opacity-100"
              id="image-1"
            >
              <a href="#principal" className="absolute z-50">
                x FECHAR
              </a>
              <Image
                alt="Ache Tudo Logo"
                src={Logo}
                className="relative m-auto mt-32 block h-80 w-70 border-2 border-black"
              />
              <div>
                <h3>
                  pointe <span>/point/</span>
                </h3>
                <p>Dance performed on the tips of the toes</p>
              </div>
            </div>
          </li>
          <li className="relative float-left m-0">
            <a
              href="#image-1"
              className="relative z-0 block h-40 w-40 bg-amber-800 p-10 sm:h-41 sm:w-41 md:h-45 md:w-45 lg:h-51 lg:w-51"
            >
              <Image alt="Ache Tudo Logo" src={Logo} className="block" />
            </a>
            <div
              className="animate-fade-in-scale fixed top-0 left-0 -z-10 hidden h-0 w-0 overflow-hidden bg-white p-0 text-center opacity-0 target:z-40 target:block target:h-screen target:w-screen target:opacity-100"
              id="image-1"
            >
              <a href="#principal" className="absolute z-50">
                x FECHAR
              </a>
              <Image
                alt="Ache Tudo Logo"
                src={Logo}
                className="relative m-auto mt-32 block h-80 w-70 border-2 border-black"
              />
              <div>
                <h3>
                  pointe <span>/point/</span>
                </h3>
                <p>Dance performed on the tips of the toes</p>
              </div>
            </div>
          </li>
          <li className="relative float-left m-0">
            <a
              href="#image-1"
              className="relative z-0 block h-40 w-40 bg-amber-800 p-10 sm:h-41 sm:w-41 md:h-45 md:w-45 lg:h-51 lg:w-51"
            >
              <Image alt="Ache Tudo Logo" src={Logo} className="block" />
            </a>
            <div
              className="animate-fade-in-scale fixed top-0 left-0 -z-10 hidden h-0 w-0 overflow-hidden bg-white p-0 text-center opacity-0 target:z-40 target:block target:h-screen target:w-screen target:opacity-100"
              id="image-1"
            >
              <a href="#principal" className="absolute z-50">
                x FECHAR
              </a>
              <Image
                alt="Ache Tudo Logo"
                src={Logo}
                className="relative m-auto mt-32 block h-80 w-70 border-2 border-black"
              />
              <div>
                <h3>
                  pointe <span>/point/</span>
                </h3>
                <p>Dance performed on the tips of the toes</p>
              </div>
            </div>
          </li>
          <li className="relative float-left m-0">
            <a
              href="#image-1"
              className="relative z-0 block h-40 w-40 bg-amber-800 p-10 sm:h-41 sm:w-41 md:h-45 md:w-45 lg:h-51 lg:w-51"
            >
              <Image alt="Ache Tudo Logo" src={Logo} className="block" />
            </a>
            <div
              className="animate-fade-in-scale fixed top-0 left-0 -z-10 hidden h-0 w-0 overflow-hidden bg-white p-0 text-center opacity-0 target:z-40 target:block target:h-screen target:w-screen target:opacity-100"
              id="image-1"
            >
              <a href="#principal" className="absolute z-50">
                x FECHAR
              </a>
              <Image
                alt="Ache Tudo Logo"
                src={Logo}
                className="relative m-auto mt-32 block h-80 w-70 border-2 border-black"
              />
              <div>
                <h3>
                  pointe <span>/point/</span>
                </h3>
                <p>Dance performed on the tips of the toes</p>
              </div>
            </div>
          </li>
          <li className="relative float-left m-0">
            <a
              href="#image-1"
              className="relative z-0 block h-40 w-40 bg-amber-800 p-10 sm:h-41 sm:w-41 md:h-45 md:w-45 lg:h-51 lg:w-51"
            >
              <Image alt="Ache Tudo Logo" src={Logo} className="block" />
            </a>
            <div
              className="animate-fade-in-scale fixed top-0 left-0 -z-10 hidden h-0 w-0 overflow-hidden bg-white p-0 text-center opacity-0 target:z-40 target:block target:h-screen target:w-screen target:opacity-100"
              id="image-1"
            >
              <a href="#principal" className="absolute z-50">
                x FECHAR
              </a>
              <Image
                alt="Ache Tudo Logo"
                src={Logo}
                className="relative m-auto mt-32 block h-80 w-70 border-2 border-black"
              />
              <div>
                <h3>
                  pointe <span>/point/</span>
                </h3>
                <p>Dance performed on the tips of the toes</p>
              </div>
            </div>
          </li>
        </ul>
      </section>
    </main>
  );
}
