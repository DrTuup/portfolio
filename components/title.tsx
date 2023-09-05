interface TitleProps {
  text: string;
}
export default function Title({ text }: TitleProps) {
  return (
    <h1 className="text-3xl sm:text-5xl font-bold text-foreground">{text}</h1>
  );
}

export function Subtitle({ text }: TitleProps) {
  return <h1 className="text-xl font-bold">{text}</h1>;
}
