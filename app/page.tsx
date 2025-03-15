"use client";

import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay";
import { Spacer } from "@/components/spacer";
import { Badge } from "@/components/ui/badge";
import { cicd, code, freetime, tools } from "@/data";

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
    <div className="w-screen min-h-screen flex flex-col p-5 gap-4">
      <Image
        loading="eager"
        src="/memoji.png"
        width={120}
        height={120}
        alt="memoji"
      />
      <h1 className="font-bold text-2xl text-primary">Ruben Claessens</h1>
      <h2 className="font-bold w-fit p-2 rounded-md bg-[var(--chart-1)]">
        DevOps Engineer
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
      <Card className="p-2 rounded-2xl gap-0">
        <CardHeader className="p-2">
          <CardTitle>CI/CD</CardTitle>
          <CardDescription>CI/CD and automation tools</CardDescription>
        </CardHeader>
        <CardContent className="px-2 flex flex-wrap gap-2">
          {cicd.map((item) => {
            return <Badge key={item}>{item}</Badge>;
          })}
        </CardContent>
      </Card>
      <Card className="p-2 rounded-2xl gap-0">
        <CardHeader className="p-2">
          <CardTitle>Code</CardTitle>
          <CardDescription>Languages and frameworks</CardDescription>
        </CardHeader>
        <CardContent className="px-2 flex flex-wrap gap-2">
          {code.map((item) => {
            return <Badge key={item}>{item}</Badge>;
          })}
        </CardContent>
      </Card>
      <Card className="p-2 rounded-2xl gap-0">
        <CardHeader className="p-2">
          <CardTitle>Tools</CardTitle>
          <CardDescription>Project management tools</CardDescription>
        </CardHeader>
        <CardContent className="px-2 flex flex-wrap gap-2">
          {tools.map((item) => {
            return <Badge key={item}>{item}</Badge>;
          })}
        </CardContent>
      </Card>
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
          }),
        ]}
      >
        <CarouselContent>
          {freetime.map((item) => (
            <CarouselItem
              key={item.title}
              className="md:basis-1/2 lg:basis-1/3 w-15"
            >
              <Card>
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
    </div>
  );
}
