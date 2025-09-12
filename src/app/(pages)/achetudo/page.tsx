import Image from "next/image";
import Logo from "../../../../public/logo.svg";

export default function AcheTudo() {
  return (
    <header className="h-25 w-full border-2 border-black">
      <figure className="m-auto w-81">
        <Image alt="Ache Tudo Logo" src={Logo} width={80} />
      </figure>
    </header>
  );
}
