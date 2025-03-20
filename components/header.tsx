import { ReactNode } from "react";

interface HeaderProps {
  children: ReactNode[];
}

export function Header({ children }: HeaderProps) {
  return <div className="flex flex-col w-full md:w-8/12 gap-4">{children}</div>;
}
