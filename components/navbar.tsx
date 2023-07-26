import Image from "next/image";
import NavItem from "./navitem";
import logo from "@/assets/images/logo.png";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full flex flex-row gap-20 p-3 justify-between z-20 backdrop-blur-md">
      <a href="#home">
        <Image src={logo} alt="logo" className="self-start scale-75" />
      </a>
      <div className="flex flex-row gap-20 items-center mr-20">
        <NavItem href="#about" name="About" />
        <NavItem href="#skills" name="Skills" />
        <NavItem href="#experience" name="Work and education" />
        <NavItem href="#contact" name="Contact" />
      </div>
    </nav>
  );
}
