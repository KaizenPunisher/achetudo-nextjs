"use client";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import Image from "next/image";

export default function Conteudo() {
  return (
    <>
      <div className="static m-auto h-full w-auto pb-35">
        <div className="relative m-auto mt-0 mb-0 w-fit rounded-xl border-1 border-white/10 bg-white/30 p-2 backdrop-blur-sm">
          <h1>Trabalhos realizados</h1>
        </div>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-sm"
        >
          <CarouselContent>
            {Array.from({ length: 2 }).map((_, index) => {
              const n = index + 1;
              const link = ["/", "https://faroldaliberdade.com.br/"];

              return (
                <CarouselItem key={index} className="">
                  <div className="p-1">
                    <Card>
                      <CardContent
                        className={`m-7 flex aspect-square h-full w-auto items-center justify-center p-0`}
                      >
                        <Link
                          href={link[index]}
                          className="m-auto"
                          id="logo"
                          target="_blank"
                        >
                          <Image
                            alt="Ache Tudo Logo"
                            priority={false}
                            src={`https://achetudotiradentes-nextjs-app.s3.sa-east-1.amazonaws.com/pages/a61efd63-20d5-464d-86af-8fb1183eee41/portifolio_${n}.png`}
                            width={300}
                            height={300}
                          />
                        </Link>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <div className="relative m-auto h-full w-fit">
        <div className="absolute top-[-120px] left-[30%] z-1 h-40 w-40 rounded-full bg-[url('https://achetudotiradentes-nextjs-app.s3.sa-east-1.amazonaws.com/pages/a61efd63-20d5-464d-86af-8fb1183eee41/perfil_1.png')] bg-size-[100%_100%] bg-position-[0rem_0rem] bg-no-repeat shadow-xl/30"></div>
        <div className="relative h-auto w-95 rounded-xl border-1 border-white/10 bg-white/30 p-2 backdrop-blur-sm">
          <h2 className="m-10 text-center">
            Sou Oscar, Desenvolvedor Web Full Stack e estou aqui para ajudar a
            levar seu negócio para o próximo nível com soluções digitais
            personalizadas. Com experiência em criação de sites, lojas virtuais
            e aplicativos, estou pronto para transformar suas ideias em
            realidade. Vamos trabalhar juntos para impulsionar sua presença
            online e alcançar seus objetivos!
          </h2>
        </div>
      </div>
      <div className="m-auto h-full w-fit p-5">
        <div className="p-5 text-center">
          <h1 className="text-cyan-950">O que você deseja?</h1>
        </div>
        <div className="h-30 w-full bg-[url('https://achetudotiradentes-nextjs-app.s3.sa-east-1.amazonaws.com/pages/a61efd63-20d5-464d-86af-8fb1183eee41/produtos.png')] bg-size-[100%_100%] bg-position-[0rem_0rem] bg-no-repeat"></div>
        <div className="mt-5 mb-50 h-auto w-95 rounded-xl border-1 border-white/10 bg-white/30 p-2 backdrop-blur-sm">
          <div className="m-5 text-center">
            <h2 className="text-cyan-950">Vamos começar?</h2>
            <br />
            1∙ Receba meu questionário detalhado para entender suas
            necessidades.
            <br />
            <br />
            2∙ Analiso suas respostas e elaboro uma proposta personalizada.
            <br />
            <br />
            3∙ Após sua aprovação e pagamento da primeira parcela, inicio o
            desenvolvimento do seu projeto.
            <br />
            <br />
            4∙ Entrego o produto finalizado e ofereço suporte contínuo.
            <br />
            <br />
            <h2 className="text-cyan-950">
              Pronto para transformar sua presença digital? Entre em contato e
              vamos dar vida às suas ideias! Desça até o fim da pagina e entre
              contato com meu Whatsapp
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}
