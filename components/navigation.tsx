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
    <div className="w-full flex justify-center align-center fixed bottom-0">
      <div className="my-8 mx-4 flex flex-row p-1 rounded-full backdrop-blur-md">
        {navitems.map((item) => {
          return (
            <a
              className={`text-sm font-bold rounded-full p-2 ${
                pathname === item.href ? `outline outline-[var(--chart-1)]` : ``
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
