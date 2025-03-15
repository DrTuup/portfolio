interface TitleProps {
  text: string;
}

export function GradientTitle({ text }: TitleProps) {
  return (
    <h1 className="font-extrabold text-5xl pb-1 w-full text-center text-transparent bg-clip-text bg-gradient-to-br from-chart-1 to-[#EAEAEA]">
      {text}
    </h1>
  );
}

export function SubTitle({ text }: TitleProps) {
  return <h3 className="w-full text-center">{text}</h3>;
}
