import Image from "next/image";
import Logo from "../../../../public/logo.svg";

export default function AcheTudo() {
  return (
    <header className="containter relative border-2 border-black">
      <div className="h-130 w-full overflow-hidden rounded-b-full border-8 border-red-700">
        <section className="float-start box-border h-25 w-full justify-center rounded-3xl border-white bg-white p-2">
          <ul className="grid h-auto grid-cols-3 text-center text-xs">
            <li className="text-xm m-auto border-2 border-black">PRODUTOS</li>
            <li className="text-xm m-auto border-2 border-black">
              <figure className="m-auto w-auto border-2 border-blue-900">
                <Image
                  alt="Ache Tudo Logo"
                  src={Logo}
                  width={80}
                  className="border-2"
                />
              </figure>
            </li>
            <li className="text-xm m-auto border-2 border-black">LOJAS</li>
          </ul>
          <div className="fixed top-110 left-[33%] h-50 w-30 border-2 border-black"></div>
        </section>
        <figure className="h-full w-full bg-blue-900"></figure>
      </div>
    </header>
  );
}
