"use client";

import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay";
import { Spacer } from "@/components/spacer";
import { cicd, code, freetime, tools } from "@/data";
import { TechStackCard, TechStackCardProps } from "@/components/card";

const techStackCards: TechStackCardProps[] = [
  {
    title: "CI/CD",
    subtitle: "CI/CD and automation tools",
    tags: cicd,
  },
  {
    title: "Code",
    subtitle: "Languages and frameworks",
    tags: code,
  },
  {
    title: "Tools",
    subtitle: "Project management tools",
    tags: tools,
  },
];

export default function Home() {
  function calcAge() {
    const today = new Date();
    const birthDate = new Date("2002-12-28");
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) age--;
    return age;
  }
  return (
    <>
      <Image
        loading="eager"
        src="/memoji.png"
        width={120}
        height={120}
        alt="memoji"
      />
      <h1 className="font-bold text-xl">Ruben Claessens</h1>
      <h2 className="font-extrabold text-5xl pb-1 w-fit text-transparent bg-clip-text bg-gradient-to-br from-chart-1 to-[#EAEAEA]">
        DevOps
        <br />
        Engineer
      </h2>
      <p>
        A {calcAge()} years old <strong>DevOps Engineer</strong> who loves
        automating everything and turning ideas into code.
        <br />
      </p>
      <p>
        🚀 Building <strong>apps</strong>, automating workflows with{" "}
        <strong>CI/CD</strong> and managing <strong>infrastructure</strong> are
        what I enjoy most - whether for work or as a hobby.
      </p>
      <Separator />
      <h3 className="font-bold">Tech stack</h3>
      <div className="flex flex-col gap-7">
        {techStackCards.map((item) => {
          return (
            <TechStackCard
              key={item.title}
              title={item.title}
              subtitle={item.subtitle}
              tags={item.tags}
            />
          );
        })}
      </div>
      <Separator />
      <h3 className="font-bold">Free time</h3>
      <Carousel
        className="self-center"
        opts={{
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 3000,
            stopOnInteraction: false,
          }),
        ]}
      >
        <CarouselContent>
          {freetime.map((item) => (
            <CarouselItem
              key={item.title}
              className="md:basis-1/2 lg:basis-1/3 w-15"
            >
              <Card className="rounded-2xl">
                <CardContent className="flex flex-col items-center justify-center p-0">
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                  {<item.icon size={60}></item.icon>}
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="border-none" />
        <CarouselNext className="border-none" />
      </Carousel>

      <Spacer />
    </>
  );
}
