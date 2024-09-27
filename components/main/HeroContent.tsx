"use client";
import React from "react";
import { Sparkles } from "lucide-react";
import Image from "next/image";
import { heroContent } from "@/lib/assets";

const HeroContent = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-center container mt-10  md:mt-30 py-10 w-full z-[20]">
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <div className="box-badge py-3 px-2 border-2 border-blue-400/90">
          <Sparkles className="w-5 h-5 text-blue-600 mr-[10px]" />
          <h1 className="text-badge text-sm sm:text-base md:text-xl">
            {heroContent.title}
          </h1>
        </div>

        <div className="flex flex-col gap-2 mt-5 text-3xl font-medium md:font-normal text-bold text-blue-400 max-w-[600px] w-auto h-auto sm:text-5xl md:text-6xl">
          Transforming{" "}
          <span className="text-transparent py-2 bg-clip-text bg-gradient-to-r from-blue-400 via-violet-500 to-blue-600">
            Digital Dreams
          </span>{" "}
          into Reality
        </div>

        <p className="text-lg text-slate-400 max-w-[600px] w-auto h-auto sm:text-base md:text-lg">
          {heroContent.description}
        </p>
        <a
          href="#projects"
          className="py-2 button-primary text-center text-white cursor-pointer  w-full max-w-[200px] rounded-lg sm:py-3 sm:px-4 md:py-4 md:px-6"
        >
          View Projects
        </a>
      </div>
      <div className="w-full max-w-[400px] lg:max-w-[600px] h-full flex justify-center items-center">
        <Image
          src="/img/hero.svg"
          alt="hero"
          width={600}
          height={600}
          priority
        />
      </div>
    </div>
  );
};

export default HeroContent;
