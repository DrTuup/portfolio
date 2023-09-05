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
        className="flex flex-col items-center justify-evenly text-center min-h-screen h-fit m-5 lg:p-10 lg:m-0"
      >
        <div className="flex flex-col items-center gap-7 lg:flex-row">
          <div className="flex flex-col gap-7 lg:text-left">
            <p className="text-foreground sm:text-2xl">Hi there!👋🏻 I&apos;m</p>
            <Title text="Ruben Claessens" />
            <p className="text-primary sm:text-2xl">Software Engineer</p>
            <p className="text-foreground max-w-[25ch] sm:max-w-[30ch] sm:text-2xl">
              I&apos;m a Software Engineer who loves turning ideas into code.
            </p>
          </div>
          <Image
            src={memoji}
            alt="memoji"
            className="w-[150px] sm:w-[225px] h-[150px] sm:h-[225px]"
          />
        </div>
        <div className="flex flex-col items-center">
          <p className="text-foreground sm:text-2xl">Get to know me!</p>
          <ArrowDownward
            fontSize="large"
            className="text-primary animate-bounce-arrow"
          />
        </div>
      </div>
      <div
        id="about"
        className="flex flex-col items-center justify-center text-center min-h-screen h-fit gap-7 p-10"
      >
        <Title text="About me" />
        <div className="flex flex-col items-center gap-7 lg:flex-row lg:justify-evenly lg:w-full">
          <div>
            <p className="text-foreground text-xl sm:text-xl">
              In my free time I like to:
            </p>
            <ul className="list-disc list-inside list-image-[url(../assets/images/check-mark.png)]">
              {freetime
                .sort((a, b) => a.length - b.length)
                .reverse()
                .map((activity) => (
                  <ListItem key={activity} text={activity} />
                ))}
            </ul>
          </div>
          <Image
            src={me}
            alt="me"
            className="rounded-full w-[150px] sm:w-[225px] h-[150px] sm:h-[225px]"
          />
          <p className="text-foreground sm:text-xl sm:max-w-[35ch] lg:max-w-[20ch]">
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
        className="flex flex-col items-center justify-center text-center min-h-screen h-fit m-5 gap-7 lg:p-10"
      >
        <Title text="Skills" />
        <div className="flex flex-col items-center justify-center gap-7 lg:flex-row">
          <Skillcard title="Professional skills">
            <ul className="list-disc list-inside list-image-[url(../assets/images/check-mark.png)] text-left text-sm">
              {professional.map((skill) => (
                <div key={skill.title}>
                  <p key={skill.title} className="my-2 text-lg">
                    {skill.title}
                  </p>
                  <span>
                    <progress
                      key={skill.value}
                      className="progress progress-primary w-3/5"
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
            <p className="text-lg text-left">Front-end</p>
            <div className="flex flex-wrap gap-2 p-2">
              {frontend.map((skill) => (
                <div
                  key={skill}
                  className="badge badge-md badge-primary badge-outline"
                >
                  {skill}
                </div>
              ))}
            </div>
            <p className="text-left text-lg">Back-end</p>
            <div className="flex flex-wrap gap-2 p-2">
              {backend.map((skill) => (
                <div
                  key={skill}
                  className="badge badge-md badge-primary badge-outline"
                >
                  {skill}
                </div>
              ))}
            </div>

            <p className="text-left text-lg">Tools</p>
            <div className="flex flex-wrap gap-2 p-2">
              {tools.map((skill) => (
                <div
                  key={skill}
                  className="badge badge-md badge-primary badge-outline"
                >
                  {skill}
                </div>
              ))}
            </div>
          </Skillcard>
          <Skillcard title="Want to learn">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col items-center gap-1 text-foreground">
                <Image
                  alt="swift"
                  width={50}
                  height={50}
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg"
                />
                Swift
              </div>
              <div className="flex justify-center gap-20">
                <div className="flex flex-col items-center gap-1 text-foreground">
                  <Image
                    alt="kunernetes"
                    width={50}
                    height={50}
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg"
                  />
                  K8s
                </div>
                <div className="flex flex-col items-center gap-1 text-foreground">
                  <Image
                    alt="flutter"
                    width={50}
                    height={50}
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg"
                  />
                  Flutter
                </div>
              </div>
              <div className="flex flex-col items-center gap-1 text-foreground">
                <Image
                  alt="pytorch"
                  width={50}
                  height={50}
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg"
                />
                PyTorch
              </div>
            </div>
          </Skillcard>
        </div>
      </div>
      <div
        id="experience"
        className="flex flex-col items-center justify-center text-center min-h-screen h-fit mt-24 gap-7 lg:p-10"
      >
        <Title text="Work and education" />
        <div className="flex flex-col items-center gap-6 lg:flex-row">
          <div className="flex flex-col items-center gap-4">
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
          <div className="flex flex-col items-center gap-4">
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
        className="flex flex-col items-center justify-center text-center min-h-screen h-fit m-5"
      >
        <Title text="Contact" />
        <p className="text-lg text-foreground p-3">
          Want to get in touch? Feel free to contact me!
        </p>
        <div className="flex flex-col items-center justify-center gap-5 w-4/5">
          <form className="flex flex-col items-center w-4/5">
            <div className="flex flex-col w-full">
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
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-foreground">
                  Leave a message!
                </span>
              </label>
              <textarea
                className="textarea textarea-bordered textarea-primary text-foreground"
                placeholder="Message"
              />
            </div>{" "}
          </form>
          <button
            className="outline outline-primary rounded-lg p-2 w-1/4 hover:bg-primary hover:text-background transition-all duration-300"
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
