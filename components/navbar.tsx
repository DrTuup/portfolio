import Image from "next/image";
import NavItem from "./navitem";
import logo from "../images/logo.png";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full flex flex-row gap-20 p-5 justify-between z-10 backdrop-blur-md">
      <Image src={logo} alt="logo" className="self-start scale-75" />
      <div className="flex flex-row gap-20 items-center mr-20">
        <NavItem href="#about" name="About" />
        <NavItem href="#Skills" name="Skills" />
        <NavItem href="#Contact" name="Contact" />
      </div>
    </nav>
  );
}
