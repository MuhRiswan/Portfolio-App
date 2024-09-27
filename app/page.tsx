import About from "@/components/main/About";
import HeroContent from "@/components/main/HeroContent";
import Preview from "@/components/main/Preview";
import Project from "@/components/main/Project";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroContent />
      <Preview />
      <About />
      <Project />
    </>
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    // </main>
  );
}
