interface NavItemProps {
  name: string;
  href: string;
}

export default function NavItem(navItemProps: NavItemProps) {
  return (
    <a
      className="text-2xl text-foreground hover:text-primary transition duration-300"
      href={navItemProps.href}
    >
      {navItemProps.name}
    </a>
  );
}
