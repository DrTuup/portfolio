import Image from "next/image";
import notfound from "@/assets/images/not-found.png";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-4">
      <Image
        src={notfound}
        alt="memoji-not-found"
        className="w-[150px] h-[150px]"
      />

      <h1 className="text-4xl font-bold text-foreground m-0 p-0">404</h1>
      <p className="text-lg font-bold text-foreground m-0 p-0">
        Page Not Found
      </p>
      <a
        href="/"
        className="text-foreground hover:bg-primary w-fit transition duration-300 p-3 rounded-lg outline outline-primary"
      >
        Return to home
      </a>
    </div>
  );
}
