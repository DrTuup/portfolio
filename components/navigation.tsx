"use client";
import { NavItem } from "@/models/navitem";
import { usePathname } from "next/navigation";

const navitems: NavItem[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Experience",
    href: "/experience",
  },
  {
    title: "Projects",
    href: "/projects",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export function Navigation() {
  const pathname = usePathname();
  return (
    <div className="w-full flex justify-self-center fixed bottom-0">
      <div className="w-fit mx-4 my-8 flex flex-row p-1 rounded-full backdrop-blur-md bg-foreground/4">
        {navitems.map((item) => {
          return (
            <a
              className={`text-sm font-bold rounded-full p-2 ${
                pathname === item.href
                  ? `bg-gradient-to-br text-transparent bg-clip-text from-chart-1 to-[#EAEAEA]`
                  : ``
              }`}
              key={item.title}
              href={item.href}
            >
              {item.title}
            </a>
          );
        })}
      </div>
    </div>
  );
}
