import React from "react";
import { Card } from "@/components/ui/card";
import { ShieldCheck, Lightbulb, TrendingUp, BadgeCheck } from "lucide-react";

const Preview = () => {
  return (
    <Card className="container w-[90%] bg-gradient-to-r from-blue-100/40 via-violet-100/40 to-blue-100/40 lg:-mt-10 max-w-7xl rounded-lg md:mt-30 py-10 z-[20] shadow-md">
      {/* Header Section */}
      <div className="box-badge py-1 px-4 border-2 mx-auto border-blue-700/90 flex items-center">
        <BadgeCheck className="w-5 h-5 text-blue-600 mr-[10px]" />
        <h1 className="text-sm sm:text-sm md:text-lg text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-violet-500 to-blue-600">
          Why choose me
        </h1>
      </div>
      {/* Introduction Text */}
      <p className="text-center w-full max-w-3xl mx-auto text-sm sm:text-base md:text-lg mt-3">
        As a front-end developer with over one year experience in building
        responsive and user-friendly web applications, I focus on delivering
        solutions with strong UI/UX design. I stay current with industry trends
        and ensure high-quality results using technologies like Next.js,
        TypeScript, and Tailwind CSS.
      </p>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center mt-5 w-full">
        {/* Feature 1: Secure Solutions */}
        <Card className="w-full h-full bg-blue-100 rounded-lg shadow-sm p-5 border-dashed border border-blue-500 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
          <div className="flex flex-col sm:flex-row justify-start items-center gap-4">
            <div className="bg-blue-200 flex p-2 rounded-md">
              <ShieldCheck className="h-5 w-5 text-blue-500" />
            </div>
            <div className="text-center sm:text-left">
              <h1 className="text-gray-700 font-bold tracking-wider">
                Secure and Efficient Development
              </h1>
              <p className="text-gray-500 font-semibold">
                I focus on building secure, scalable, and high-performance web
                applications, ensuring smooth operations and data protection.
              </p>
            </div>
          </div>
        </Card>

        {/* Feature 2: Innovation */}
        <Card className="w-full h-full bg-blue-100 rounded-lg shadow-sm p-5 border-dashed border border-blue-500 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
          <div className="flex flex-col sm:flex-row justify-start items-center gap-4">
            <div className="bg-blue-200 flex p-2 rounded-md">
              <Lightbulb className="h-5 w-5 text-blue-500" />
            </div>
            <div className="text-center sm:text-left">
              <h1 className="text-gray-700 font-bold tracking-wider">
                Innovative Solutions with Modern Tools
              </h1>
              <p className="text-gray-500 font-semibold">
                With expertise in modern technologies like Next.js and
                TypeScript, I deliver cutting-edge solutions tailored to your
                needs.
              </p>
            </div>
          </div>
        </Card>

        {/* Feature 3: Growth-Oriented Approach */}
        <Card className="w-full h-full bg-blue-100 rounded-lg shadow-sm p-5 border-dashed border border-blue-500 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
          <div className="flex flex-col sm:flex-row justify-start items-center gap-4">
            <div className="bg-blue-200 flex p-2 rounded-md">
              <TrendingUp className="h-5 w-5 text-blue-500" />
            </div>
            <div className="text-center sm:text-left">
              <h1 className="text-gray-700 font-bold tracking-wider">
                Driven by Results and Growth
              </h1>
              <p className="text-gray-500 font-semibold">
                My goal is to help businesses grow by providing innovative web
                solutions that enhance user experience and drive engagement.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </Card>
  );
};

export default Preview;
