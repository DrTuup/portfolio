interface ListItemProps {
  text: string;
}

export default function ListItem({ text }: ListItemProps) {
  return <li className="my-2 text-foreground">{text}</li>;
}
