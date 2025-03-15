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
    <Card className="p-2 rounded-2xl gap-0 border-0 shadow-lg shadow-[#EAEAEA]/50">
      <CardHeader className="p-2">
        <CardTitle className="text-">{title}</CardTitle>
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
