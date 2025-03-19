"use client";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { ExternalLinkIcon } from "lucide-react";
import Image from "next/image";

export interface TechStackCardProps {
  title: string;
  subtitle: string;
  tags: string[];
}

export function TechStackCard({ title, subtitle, tags }: TechStackCardProps) {
  return (
    <Card className="p-2 pb-4 rounded-2xl gap-0 border-0 shadow-lg shadow-[#EAEAEA]/25 md:w-1/3">
      <CardHeader className="p-2">
        <CardTitle className="leading-6">{title}</CardTitle>
        <CardDescription>{subtitle}</CardDescription>
      </CardHeader>
      <CardContent className="px-2 flex flex-wrap gap-3">
        {tags.map((tag) => {
          return (
            <Badge className="rounded-full" key={tag}>
              {tag}
            </Badge>
          );
        })}
      </CardContent>
    </Card>
  );
}

export interface ExperienceCardProps {
  what: string;
  where: string;
  when: string;
  tags: string[];
}

export function ExperienceCard({
  what,
  where,
  when,
  tags,
}: ExperienceCardProps) {
  return (
    <Card className="p-2 rounded-2xl gap-0 border-0 shadow-lg shadow-[#EAEAEA]/25">
      <CardHeader className="p-2">
        <span className="flex flex-row gap-1">
          <CardTitle className="leading-6">{what}</CardTitle>
        </span>
        <CardDescription>📍 {where}</CardDescription>
        <CardDescription>
          {when.includes("now") ? "⏳" : "⌛"} {when}
        </CardDescription>
      </CardHeader>
      <CardContent className="px-2 flex flex-wrap gap-3">
        {tags.map((tag) => {
          return (
            <Badge className="rounded-full" key={tag}>
              {tag}
            </Badge>
          );
        })}
      </CardContent>
    </Card>
  );
}

export interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  repo: string;
  tags: string[];
}

export function ProjectCard({
  title,
  description,
  link,
  repo,
  tags,
}: ProjectCardProps) {
  return (
    <Card className="p-2 rounded-2xl gap-0 border-0 shadow-lg shadow-[#EAEAEA]/25 relative">
      <CardHeader className="p-2">
        <span className="flex flex-row gap-1">
          <CardTitle className="leading-6">{title}</CardTitle>
        </span>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="px-2 flex flex-wrap gap-3">
        {tags.map((tag) => {
          return (
            <Badge className="rounded-full" key={tag}>
              {tag}
            </Badge>
          );
        })}
      </CardContent>
      {link != "" ? (
        <a href={link} target="_blank" className="absolute top-3 right-3">
          <ExternalLinkIcon />
        </a>
      ) : null}
      {repo != "" ? (
        <a href={repo} target="_blank" className="absolute bottom-3 right-3">
          <Image
            src="/github-mark-white.png"
            alt="github logo"
            width={25}
            height={25}
          />
        </a>
      ) : null}
    </Card>
  );
}
