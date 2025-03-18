import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

export interface TechStackCardProps {
  title: string;
  subtitle: string;
  tags: string[];
}

export function TechStackCard({ title, subtitle, tags }: TechStackCardProps) {
  return (
    <Card className="p-2 rounded-2xl gap-0 border-0 shadow-lg shadow-[#EAEAEA]/25">
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
