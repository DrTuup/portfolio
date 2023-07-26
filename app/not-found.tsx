import { Button } from "@mui/material";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <>
      <div
        id="home"
        className="flex min-h-screen h-fit flex-row items-center justify-center"
      >
        <div className="flex flex-row items-center gap-40">
          <div className="flex flex-col justify-center gap-5">
            <p className="text-3xl font-semibold text-foreground">
              Oops, this page doesn&apos;t exist!
            </p>
            <Link
              href="/"
              className="text-foreground hover:bg-primary w-fit transition duration-300 p-3 rounded-lg outline outline-primary"
            >
              Return to home
            </Link>
          </div>
        </div>
      </div>
      ;
    </>
  );
}
