import {
  DumbbellIcon,
  Gamepad2Icon,
  LaptopIcon,
  LucideIcon,
  Volleyball,
} from "lucide-react";

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
