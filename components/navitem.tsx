interface NavItemProps {
  name: string;
  href: string;
}

export default function NavItem(navItemProps: NavItemProps) {
  return (
    <a
      className="text-2xl hover:text-emerald-300 transition duration-300"
      href={navItemProps.href}
    >
      {navItemProps.name}
    </a>
  );
}
