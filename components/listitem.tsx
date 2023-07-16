interface ListItemProps {
  text: string;
}

export default function ListItem({ text }: ListItemProps) {
  return <li className="my-2 text-foreground text-xl">{text}</li>;
}

interface SkillItemProps {}

export function SkillItem({}: SkillItemProps) {
  return <></>;
}
