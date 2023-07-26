"use client";

import ArrowDownward from "@mui/icons-material/ArrowDownward";
import Image from "next/image";
import memoji from "@/assets/images/memoji.png";
import me from "@/assets/images/me_square.jpg";
import ParticleBackground from "@/components/particles";
import Navbar from "@/components/navbar";
import ListItem from "@/components/listitem";
import Title, { Subtitle } from "@/components/title";
import { Skillcard, ExperienceCard } from "@/components/card";
import {
  backend,
  education,
  freetime,
  frontend,
  professional,
  tolearn,
  tools,
  work,
} from "@/data";

export default function Home() {
  const calculateAge = () => {
    const today = new Date();
    const birthDate = new Date("2002-12-28");
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) age--;
    return age;
  };

  function sendMail() {
    console.log("send mail");
  }

  return (
    <>
      <Navbar />
      <div
        id="home"
        className="flex min-h-screen h-fit flex-row items-center justify-center"
      >
        <div className="flex flex-row items-center gap-40">
          <div className="flex flex-col justify-center gap-5">
            <p className="text-3xl font-semibold text-foreground">
              Hi there!👋🏻 I&apos;m
            </p>
            <Title text="Ruben Claessens" />
            <p className="text-2xl text-primary text-emerald-400">
              Software Engineer
            </p>
            <p className="text-2xl text-foreground max-w-[30ch]">
              I&apos;m a Software Engineer who loves writing ideas into code.
            </p>
          </div>
          <Image src={memoji} alt="memoji" className="scale-75" />
        </div>
        <p className="absolute bottom-20 text-foreground">Get to know me!</p>
        <ArrowDownward
          fontSize="large"
          className="absolute bottom-5 animate-bounce-arrow scale-150 text-primary"
        />
      </div>
      <div
        id="about"
        className="flex min-h-screen h-fit flex-col items-center justify-center gap-10"
      >
        <Title text="About me" />
        <div className="flex flex-row justify-center items-center gap-32 rounded-md m-10">
          <div className="text-xl text-foreground w-1/5 outline outline-2 outline-primary p-5 h-fit rounded-[40px_40px_10px_40px]">
            In my free time I like to:
            <ul className="list-disc list-inside list-image-[url(../assets/images/check-mark.png)]">
              {freetime.map((activity) => (
                <ListItem key={activity} text={activity} />
              ))}
            </ul>
          </div>
          <Image src={me} alt="me" height={350} className="rounded-full" />
          <p className="text-xl text-foreground w-1/5 outline outline-2 outline-primary p-5 h-fit rounded-[40px_40px_40px_10px]">
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
      <div
        id="skills"
        className="flex min-h-screen h-fit flex-col items-center justify-center gap-10"
      >
        <Title text="Skills" />
        <div className="flex flex-row justify-center w-4/5 items-stretch gap-16">
          <Skillcard title="Professional skills">
            <ul className="list-disc list-inside list-image-[url(../assets/images/check-mark.png)]">
              {professional.map((skill) => (
                <div key={skill.title}>
                  <p key={skill.title} className="my-2 text-xl">
                    {skill.title}
                  </p>
                  <span>
                    <progress
                      key={skill.value}
                      className="progress progress-primary w-40"
                      value={skill.value}
                      max="100"
                    />{" "}
                    {skill.value}%
                  </span>
                </div>
              ))}
            </ul>
          </Skillcard>
          <Skillcard title="Development skills">
            <p className="text-lg">Front-end</p>
            <div className="flex flex-wrap gap-2 p-2">
              {frontend.map((skill) => (
                <div
                  key={skill}
                  className="badge badge-lg badge-primary badge-outline"
                >
                  {skill}
                </div>
              ))}
            </div>
            <p className="text-lg">Back-end</p>
            <div className="flex flex-wrap gap-2 p-2">
              {backend.map((skill) => (
                <div
                  key={skill}
                  className="badge badge-lg badge-primary badge-outline"
                >
                  {skill}
                </div>
              ))}
            </div>

            <p className="text-lg">Tools</p>
            <div className="flex flex-wrap gap-2 p-2">
              {tools.map((skill) => (
                <div
                  key={skill}
                  className="badge badge-lg badge-primary badge-outline"
                >
                  {skill}
                </div>
              ))}
            </div>
          </Skillcard>
          <Skillcard title="Want to learn">
            <ul className="list-disc list-inside list-image-[url(../assets/images/check-mark.png)]">
              {tolearn.map((skill) => (
                <ListItem key={skill} text={skill} />
              ))}
            </ul>
          </Skillcard>
        </div>
      </div>
      <div
        id="experience"
        className="flex flex-col min-h-screen h-fit items-center justify-center gap-10"
      >
        <Title text="Work and education" />
        <div className="flex flex-row justify-between items-stretch">
          <div className="flex flex-col items-center justify-stretch gap-3">
            <Subtitle text="Work" />
            {work.map((job) => (
              <ExperienceCard
                key={job.title}
                title={job.title}
                time={job.time}
                description={job.description}
                tags={job.tags}
              />
            ))}
          </div>
          <div className="flex flex-col items-center justify-stretch gap-3">
            <Subtitle text="Education" />
            {education.map((job) => (
              <ExperienceCard
                key={job.title}
                title={job.title}
                time={job.time}
                description={job.description}
                tags={job.tags}
              />
            ))}
          </div>
        </div>
      </div>
      <div
        id="contact"
        className="flex flex-col min-h-screen h-fit items-center justify-center gap-10"
      >
        <Title text="Contact" />
        <div className="flex flex-col items-center justify-center gap-5 w-3/5">
          <p className="text-2xl text-foreground">
            Want to get in touch? Feel free to contact me!
          </p>
          <form className="flex flex-row justify-evenly gap-5 w-full">
            <div className="flex flex-col w-1/2">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-foreground">
                    What is your name?
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Full name"
                  className="input input-bordered input-primary text-foreground"
                />
              </div>{" "}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-foreground">
                    What is your email?
                  </span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  className="input input-bordered input-primary text-foreground"
                />
              </div>
            </div>
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text text-foreground">
                  Leave a message!
                </span>
              </label>
              <textarea
                className="textarea textarea-bordered textarea-primary text-foreground h-full"
                placeholder="Message"
              />
            </div>{" "}
          </form>
          <button
            className="text-foreground hover:bg-primary w-fit transition duration-300 p-3 rounded-lg outline outline-primary"
            onClick={sendMail}
          >
            Send
          </button>{" "}
        </div>
      </div>
      <ParticleBackground />
    </>
  );
}
