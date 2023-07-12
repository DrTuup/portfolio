"use client";

import ArrowDownward from "@mui/icons-material/ArrowDownward";
import Image from "next/image";
import memoji from "@/assets/images/memoji.png";
import me from "@/assets/images/me_square.jpg";
import ParticleBackground from "@/components/particles";
import Navbar from "@/components/navbar";
import ListItem from "@/components/listitem";

export default function Home() {
  const calculateAge = () => {
    const today = new Date();
    const birthDate = new Date("2002-12-28");
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) age--;
    return age;
  };

  return (
    <>
      <ParticleBackground />
      <Navbar />
      <div
        id="home"
        className="flex min-h-screen h-fit flex-row items-center justify-center"
      >
        <div className="flex flex-row items-center gap-40">
          <div className="flex flex-col justify-center gap-5">
            <p className="text-3xl font-semibold text-white">
              Hi there!👋🏻 I&apos;m
            </p>
            <h1 className="text-6xl font-bold">Ruben Claessens</h1>
            <p className="text-2xl  text-emerald-400">Software Engineer</p>
            {/* <div className="flex flex-row gap-5">
              <IconButton
                target="_blank"
                href="https://github.com/DrTuup"
                className="w-fit h-fit rounded text-white outline outline-2 outline-emerald-400 p-3 hover:scale-110 transition-all duration-300"
              >
                Github &nbsp;
                <GitHubIcon fontSize="large" />
              </IconButton>
              <IconButton
                target="_blank"
                href="https://www.linkedin.com/in/ruben-claessens/"
                className="w-fit h-fit rounded text-white outline outline-2 outline-emerald-400 p-3 hover:scale-110 transition-all duration-300"
              >
                LinkedIn &nbsp;
                <LinkedIn fontSize="large" />
              </IconButton>
            </div> */}
            <p className="text-2xl text-white max-w-[30ch]">
              I&apos;m a Software Engineer who loves writing ideas into code.
            </p>
          </div>
          <Image src={memoji} alt="memoji" className="scale-75" />
        </div>
        <p className="absolute bottom-20">Get to know me!</p>
        <ArrowDownward
          fontSize="large"
          className="absolute bottom-5 animate-bounce-arrow scale-150 text-emerald-400"
        />
      </div>
      <div
        id="about"
        className="flex min-h-screen h-fit flex-col items-center justify-center gap-28"
      >
        <h1 className="text-6xl font-bold">About me</h1>
        <div className="flex flex-row justify-center items-center gap-64 rounded-md m-10">
          <div className="text-xl text-white max-w-[40ch] outline outline-2 outline-emerald-400 p-5 h-fit w-1/5 rounded-[40px_40px_10px_40px]">
            In my free time I like to:
            <ul className="list-disc list-inside list-image-[url(../assets/images/check-mark.png)]">
              <ListItem text="Build new projects 💻" />
              <ListItem text="Play games 🎮" />
              <ListItem text="Listen to and make music 🎧" />
              <ListItem text="Fitness 💪🏻" />
            </ul>
          </div>
          <Image src={me} alt="me" height={350} className="rounded-full" />
          <p className="text-xl text-white max-w-[40ch] outline outline-2 outline-emerald-400 p-5 h-fit w-1/5 rounded-[40px_40px_40px_10px]">
            I&apos;m a {calculateAge()} year old Software Engineer from the
            Netherlands. I love to turn ideas into code and I&apos;m always open
            to learn new things.
            <br />
            <br />
            I&apos;m currently studying HBO-ICT at Zuyd University of Applied
            Sciences.
          </p>
        </div>
      </div>
    </>
  );
}
