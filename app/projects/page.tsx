import { ProjectCard } from "@/components/card";
import { Header } from "@/components/header";
import { GradientTitle, SubTitle } from "@/components/title";
import { Separator } from "@/components/ui/separator";
import { projects } from "@/data";

export default function Projects() {
  return (
    <>
      <Header>
        <GradientTitle text="Projects" />
        <Separator />
        <SubTitle text="Building & Creating" />
        <Separator />
      </Header>

      <div className="flex flex-col gap-4 w-full md:w-8/12">
        {projects.map((project, index) => {
          return (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              link={project.link}
              repo={project.repo}
              tags={project.tags}
            />
          );
        })}
      </div>
    </>
  );
}
