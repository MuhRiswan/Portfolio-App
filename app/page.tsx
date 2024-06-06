import About from "@/components/main/About";
import HeroContent from "@/components/main/HeroContent";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroContent />
      <About />
    </>
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    // </main>
  );
}
