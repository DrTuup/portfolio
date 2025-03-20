import { ExperienceCard } from "@/components/card";
import { Spacer } from "@/components/spacer";
import { GradientTitle, SubTitle } from "@/components/title";
import { Separator } from "@/components/ui/separator";
import { education, work } from "@/data";

export default function Experience() {
  return (
    <>
      <GradientTitle text="Experience" />
      <Separator />
      <SubTitle text="Learning & Doing" />
      <Separator />
      <h3 className="font-bold md:text-xl">🎓 Education</h3>
      <div className="flex flex-row gap-4">
        {education.map((educationitem) => {
          return (
            <ExperienceCard
              key={educationitem.what}
              what={educationitem.what}
              where={educationitem.where}
              when={educationitem.when}
              tags={educationitem.tags}
            />
          );
        })}
      </div>
      <Separator className="md:m-2" />
      <h3 className="font-bold md:text-xl">💼 Work</h3>
      <div className="flex flex-row gap-4">
        {work.map((workitem) => {
          return (
            <ExperienceCard
              key={workitem.what}
              what={workitem.what}
              where={workitem.where}
              when={workitem.when}
              tags={workitem.tags}
            />
          );
        })}
      </div>
      <Spacer />
    </>
  );
}
