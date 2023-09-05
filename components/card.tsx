interface SkillcardProps {
  title: string;
  children?: React.ReactNode;
}

export function Skillcard({ title, children }: SkillcardProps) {
  return (
    <div className="bg-background w-full sm:w-fit md:w-full lg:w-fit rounded-md shadow-card-shadow p-8">
      <h1 className="text-2xl font-bold mb-5 text-foreground">{title}</h1>
      {children}
    </div>
  );
}

interface ExperienceCardProps {
  title: string;
  time: string;
  description: string;
  tags: string[];
  children?: React.ReactNode;
}

export function ExperienceCard({
  title,
  time,
  description: explanation,
  tags,
}: ExperienceCardProps) {
  return (
    <div className="flex flex-grow flex-col bg-background rounded-md shadow-card-shadow p-5 w-full md:w-4/5 lg:w-full lg:h-full lg:p-3">
      <h1 className="font-bold text-xl mb-1 text-foreground lg:text-base">
        {title}
      </h1>
      <p className="my-2">{time}</p>
      <hr />
      <p className="my-2">{explanation}</p>
      <hr />
      <div className="flex flex-wrap gap-2 mt-2">
        {tags.map((tag) => (
          <div key={tag} className="badge badge-lg badge-primary badge-outline">
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
}
