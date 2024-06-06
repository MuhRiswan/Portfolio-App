"use client";
import React from "react";
import { motion } from "framer-motion";
import { ScanSearch } from "lucide-react";
import Image from "next/image";
import { aboutContent } from "@/lib/assets";
import { slideInFromLeft, slideInFromTop } from "@/lib/motion";

const radius = 11; // radius lingkaran luar dalam rem
const iconSize = 3.2; // ukuran ikon dalam rem

const About = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-2 items-center justify-center container mx-auto md:mt-30 py-10 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center flex-1 m-auto text-start">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={slideInFromTop}
          className="box-badge py-1 px-4 border-2 border-blue-700/90 "
        >
          <ScanSearch className="w-5 h-5 text-blue-600 mr-[10px]" />
          <motion.h1
            variants={slideInFromLeft(0.5)}
            className="text-sm sm:text-sm md:text-lg text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-violet-500 to-blue-600"
          >
            {aboutContent.title}
          </motion.h1>
        </motion.div>

        <motion.div variants={slideInFromLeft(0.8)}>
          <h4 className="font-medium text-blue-900 max-w-[600px] w-auto h-auto sm:text-base md:text-xl">
            {aboutContent.description}
          </h4>
        </motion.div>
      </div>

      <motion.div className="lg:ml-auto xl:w-[38rem] mt-4">
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
                <motion.li
                  key={app.id}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
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
                </motion.li>
              );
            })}
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default About;
