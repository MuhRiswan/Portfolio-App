"use client";

import React from "react";
import { motion } from "framer-motion";
import { ScanSearch } from "lucide-react";

const About = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="grid grid-cols-2 items-center justify-center container  md:mt-30 py-10 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center flex-1 m-auto text-start">
        <motion.div className="box-badge py-2 px-4 border-2 border-blue-700/90 ">
          <ScanSearch className="w-5 h-5 text-blue-600 mr-[10px]" />
          <h1 className=" text-sm sm:text-sm md:text-lg text-transparent  bg-clip-text bg-gradient-to-r from-blue-500 via-violet-500 to-blue-600">
            About Me
          </h1>
        </motion.div>

        <motion.div>
          <h4 className="font-medium  text-blue-900 max-w-[600px]  w-auto h-auto sm:text-base md:text-xl">
            Hello, I’m M. Riswan! A passionate Front End Developer dedicated to
            crafting clean, efficient code and stunning web interfaces. Always
            eager to learn and innovate, I transform ideas into captivating
            digital experiences.
          </h4>
        </motion.div>
      </div>

      <motion.div
        // variants={slideInFromRight(0.5)}
        className="w-full max-w-[400px] lg:max-w-[600px] h-full flex justify-center items-center"
      >
        <div className="relative flex w-[22rem] aspect-square border border-blue-900 rounded-full  scale-75 md:scale-100">
          <div className="flex w-60 aspect-square m-auto border border-blue-900 rounded-full"></div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default About;
