interface TitleProps {
  text: string;
}
export default function Title({ text }: TitleProps) {
  return <h1 className="text-6xl font-bold text-foreground">{text}</h1>;
}