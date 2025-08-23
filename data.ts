import {
  DumbbellIcon,
  Gamepad2Icon,
  LaptopIcon,
  LucideIcon,
  Volleyball,
} from "lucide-react";
import { ExperienceCardProps, ProjectCardProps } from "./components/card";

export const cicd: string[] = [
  "Terraform",
  "OpenTofu",
  "Ansible",
  "GitLab CI/CD",
  "Github Actions",
];

export const code: string[] = [
  "TypeScript",
  ".NET Core",
  "Golang",
  "Next.JS",
  "TailwindCSS",
  "Python",
];

export const tools: string[] = ["VS Code", "Git", "Postman", "Jira", "UML"];

export const freetime: { title: string; icon: LucideIcon }[] = [
  {
    title: "Play games",
    icon: Gamepad2Icon,
  },
  {
    title: "Build projects",
    icon: LaptopIcon,
  },
  {
    title: "Fitness",
    icon: DumbbellIcon,
  },
  {
    title: "Watch football",
    icon: Volleyball,
  },
];

export const education: ExperienceCardProps[] = [
  {
    what: "HBO-ICT Software Engineering",
    where: "Zuyd University of Applied Sciences",
    when: "Sept. 2020 - Nov. 2024",
    tags: [".NET Core", "Python", "SQL", "UML", "Git", "GitHub"],
  },
  {
    what: "HAVO",
    where: "Bernadinuscollege - Middle school",
    when: "Sept. 2015 - June 2020",
    tags: ["Mathematics", "Chemistry", "Physics"],
  },
];

export const work: ExperienceCardProps[] = [
  {
    what: "Intern",
    where: "Enexis Groep",
    when: "Feb. 2022 - Aug. 2022",
    tags: ["Splunk", "Git", "Agile Scrum"],
  },
  {
    what: "Cloud Engineer",
    where: "Enexis Groep",
    when: "Sept. 2022 - now",
    tags: [
      "Ansible",
      "Terraform",
      "Agile Scrum",
      "AWS",
      "Azure",
      "GitLab CI/CD",
    ],
  },
];

export const projects: ProjectCardProps[] = [
  {
    title: "rubenclaessens.nl",
    description: "A website about who I am and what I do",
    link: "https://rubenclaessens.nl",
    repo: "https://github.com/drtuup/portfolio",
    tags: ["Next.JS", "Vercel", "TailwindCSS", "Shadcn/ui"],
  },
  {
    title: "kilometerweter",
    description:
      "Basic CRUD application for monitoring the kilometers I drive.",
    link: "",
    repo: "https://github.com/DrTuup/kilometerweter-frontend",
    tags: ["Next.JS", "Golang", "Docker", "GitHub Actions", "Postgresql"],
  },
  {
    title: "rd4-sync",
    description:
      "RD4 (local garbage collection) calendar as a subscription for your own.",
    link: "",
    repo: "https://github.com/DrTuup/rd4-sync",
    tags: ["Python", "Cloudflare", "Flask", "Docker", "GitHub Actions"],
  },
  {
    title: "stitchify",
    description: "Application to turn images into crochet tapestry templates.",
    link: "https://stitchify-nu.vercel.app/",
    repo: "https://github.com/DrTuup/stitchify",
    tags: ["Next.JS", "Vercel", "TailwindCSS", "GitHub Actions"],
  },
];
