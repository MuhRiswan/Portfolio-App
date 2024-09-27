"use client";
import React from "react";
import { Book, Circle, GraduationCap, ScanSearch } from "lucide-react";
import Image from "next/image";
import { aboutContent } from "@/lib/assets";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const radius = 11; // radius lingkaran luar dalam rem
const iconSize = 3.2; // ukuran ikon dalam rem

const About = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-start container mx-auto md:mt-30 py-10 w-full z-[20] gap-8">
      {/* Left Side */}
      <div className="h-full w-full flex flex-col gap-5 text-start">
        <div className="box-badge py-1 px-4 border-2 border-blue-700/90 flex items-center">
          <ScanSearch className="w-5 h-5 text-blue-600 mr-[10px]" />
          <h1 className="text-sm sm:text-sm md:text-lg text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-violet-500 to-blue-600">
            {aboutContent.title}
          </h1>
        </div>

        <h4 className="font-medium text-blue-950 max-w-[600px] sm:text-base md:text-xl">
          {aboutContent.description}
        </h4>

        <Tabs defaultValue="skills" className="w-full max-w-full">
          <TabsList>
            <TabsTrigger className="text-base font-semibold" value="skills">
              Skills
            </TabsTrigger>
            <TabsTrigger className="text-base font-semibold" value="education">
              Education
            </TabsTrigger>
            <TabsTrigger
              className="text-base font-semibold"
              value="certifications"
            >
              Certifications
            </TabsTrigger>
          </TabsList>
          <TabsContent value="skills" className="min-h-52 max-h-52">
            <div className="grid grid-rows-4 grid-flow-col gap-2 w-fit">
              {aboutContent.skills.map((skill, index) => (
                <div key={index} className="flex items-center me-3 w-fit ">
                  <Circle className="w-3 h-3 me-1 text-blue-950 fill-blue-950" />
                  <Image
                    src={skill.icon}
                    width={32}
                    height={32}
                    className="w-8 h-w-8 md:w-10 md:h-10"
                    alt={`${skill.title}`}
                  />
                  <p className="ms-1 hidden sm:block text-blue-950">
                    {skill.title}
                  </p>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="education" className="min-h-52 max-h-52">
            <div className="grid grid-rows-4 grid-flow-col gap-2 w-fit">
              {aboutContent.education.map((edu, index) => (
                <div key={index} className="flex gap-2 w-fit">
                  <Circle className="w-3 h-3 me-1 text-blue-950 fill-blue-950" />
                  <div className="flex -mt-1 flex-col gap-1">
                    <p className="text-blue-950 text-sm font-semibold">
                      {edu.description}
                    </p>
                    <p className="text-blue-950/80 text-sm">{edu.title}</p>
                    <p className="text-blue-950 text-sm">{edu.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="certifications" className="min-h-52 max-h-52">
            <div className="grid grid-rows-4 grid-flow-col gap-2 w-fit">
              {aboutContent.certifications.map((edu, index) => (
                // <div className="flex flex-col me-3 w-fit ">
                //   <div key={index} className="flex items-center me-3 w-fit ">
                //     <Circle className="w-3 h-3 me-1 text-blue-950 fill-blue-950" />
                //     {/* <Image
                //     src={skill.icon}
                //     width={32}
                //     height={32}
                //     className="w-8 h-w-8 md:w-10 md:h-10"
                //     alt={`${skill.title}`}
                //   /> */}
                //     {/* <GraduationCap className="w-8 h-w-8 md:w-10 md:h-10 text-blue-800 fill-blue-800" /> */}
                //     <p className="ms-1  text-blue-950">{edu.title}</p>
                //   </div>
                //   <div className="flex flex-col gap-1">
                //     <p className="text-blue-950 text-sm">{edu.description}</p>
                //   </div>
                // </div>
                <div key={index} className="flex gap-2 w-fit">
                  <Circle className="w-3 h-3 me-1 text-blue-950 fill-blue-950" />
                  <div className="flex -mt-1 flex-col gap-1">
                    <div className="flex items-center gap-1">
                      <Book className="w-4 h-4 text-blue-950" />
                      <p className="text-blue-950 text-sm font-semibold">
                        {edu.description}
                      </p>
                    </div>
                    <p className="text-blue-950/80 text-sm">{edu.title}</p>
                    <p className="text-blue-950 text-sm">{edu.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Right Side */}
      <div className="lg:ml-auto xl:w-[38rem] max-w-full mt-4">
        <div className="relative left-1/2 flex w-[22rem] aspect-square border border-blue-900 rounded-full -translate-x-1/2 scale-75 md:scale-100">
          <div className="flex w-60 aspect-square m-auto border border-blue-900 rounded-full">
            <div className="w-[6rem] aspect-square m-auto p-[0.2rem] border border-conic-gradient rounded-full">
              <div className="flex items-center justify-center w-full h-full bg-blue-50 rounded-full">
                <Image
                  src={aboutContent.mainIcon}
                  width={48}
                  height={48}
                  alt="brainwave"
                />
              </div>
            </div>
          </div>

          <ul className="absolute inset-0 flex items-center justify-center">
            {aboutContent.childIcons.map((app, index) => {
              const angle = (index / aboutContent.childIcons.length) * 360;
              const x =
                radius * Math.cos((angle * Math.PI) / 180) - iconSize / 2;
              const y =
                radius * Math.sin((angle * Math.PI) / 180) - iconSize / 2;

              return (
                <li
                  key={app.id}
                  className="absolute flex items-center justify-center w-[3.2rem] h-[3.2rem]"
                  style={{
                    left: `calc(50% + ${x}rem)`,
                    top: `calc(50% + ${y}rem)`,
                  }}
                >
                  <div className="flex items-center justify-center w-full h-full bg-blue-100 border border-blue-100/70 rounded-xl">
                    <Image
                      className="m-auto"
                      width={app.width}
                      height={app.height}
                      alt={app.title}
                      src={app.icon}
                    />
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
