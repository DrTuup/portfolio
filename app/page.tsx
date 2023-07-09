"use client";

import ArrowDownward from "@mui/icons-material/ArrowDownward";
import Image from "next/image";
import image from "@/images/memoji.png";
import Navbar from "@/components/navbar";
import { IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/Github";
import LinkedIn from "@mui/icons-material/LinkedIn";
import Spacer from "@/components/spacer";
import ParticleBackground from "@/components/particles";

export default function Home() {
  return (
    <>
      <Navbar />
      <ParticleBackground />
      <div className="flex min-h-screen h-fit flex-row items-center justify-center p-50">
        <div className="flex flex-row items-center gap-40">
          <div className="flex flex-col justify-center gap-5">
            <h1 className="text-7xl font-bold">
              Ruben <br /> Claessens
            </h1>
            <p className="text-3xl font-semibold primaryrgb">
              Full-stack developer 👨🏻‍💻
            </p>
            <Spacer />
            <div className="flex flex-row gap-5">
              <IconButton
                target="_blank"
                href="https://github.com/DrTuup"
                className="w-fit h-fit rounded foregroundrgb outline outline-2 outline-emerald-300 p-3 hover:scale-110 transition-all duration-300"
              >
                Github &nbsp;
                <GitHubIcon fontSize="large" />
              </IconButton>
              <IconButton
                target="_blank"
                href="https://www.linkedin.com/in/ruben-claessens/"
                className="w-fit h-fit rounded foregroundrgb outline outline-2 outline-emerald-300 p-3 hover:scale-110 transition-all duration-300"
              >
                LinkedIn &nbsp;
                <LinkedIn fontSize="large" />
              </IconButton>
            </div>
          </div>
          <Image src={image} alt="memoji" className="scale-75" />
        </div>
        <p className="absolute bottom-20">Get to know me!</p>
        <ArrowDownward
          fontSize="large"
          className="absolute bottom-5 animate-bounce-arrow scale-150 primaryrgb"
        />
      </div>
      <div className="h-screen"></div>
    </>
  );
}
