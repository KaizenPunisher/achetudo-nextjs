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
      <div className="static m-0 h-full w-auto pb-35">
        <div className="relative m-auto mt-10 mb-0 w-fit rounded-xl border-1 border-white/10 bg-white/30 p-2 backdrop-blur-sm">
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
    </>
  );
}
