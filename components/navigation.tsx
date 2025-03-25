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
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2">
      <div className="flex flex-row p-1 rounded-full backdrop-blur-lg bg-foreground/4">
        {navitems.map((item) => {
          return (
            <a
              className={`text-sm md:text-lg font-bold rounded-full p-2 md:p-3 ${
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
