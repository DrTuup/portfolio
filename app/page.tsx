import Image from "next/image";

export default function Home() {
  function calcAge() {
    const today = new Date();
    const birthDate = new Date("2002-12-28");
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) age--;
    return age;
  }
  return (
    <div className="max-w-screen w-screen min-h-screen flex flex-col p-5 gap-4">
      <Image src="/memoji.png" width={120} height={120} alt="memoji" />
      <h1 className="font-bold text-2xl text-primary">
        Ruben
        <br />
        Claessens
      </h1>
      <h2 className="font-bold w-fit p-2 rounded-md bg-[var(--chart-1)]">
        DevOps Engineer
      </h2>
      <p className="">
        A {calcAge()} years old <strong>DevOps Engineer</strong> who loves
        automating everything and turning ideas into code. <br />
      </p>
    </div>
  );
}
