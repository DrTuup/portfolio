interface CardProps {
  title: string;
  children?: React.ReactNode;
}

export function Card({ title, children }: CardProps) {
  return (
    <div className="bg-background rounded-md shadow-card-shadow outline-1 p-8">
      <h1 className="font-bold text-3xl mb-5 text-foreground">{title}</h1>
      {children}
    </div>
  );
}
