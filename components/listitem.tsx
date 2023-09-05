interface ListItemProps {
  text: string;
}

export default function ListItem({ text }: ListItemProps) {
  return <li className="my-2 sm:my-4 text-foreground text-xl">{text}</li>;
}
