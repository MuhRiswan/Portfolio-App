import React from "react";
import { Card } from "../ui/card";
import { FolderKanban } from "lucide-react";
import { projectContent } from "@/lib/assets";

const Project = () => {
  return (
    <Card className="border-0 container md:mt-30 py-10 w-full z-[20]">
      <div className="flex text-center items-center justify-center">
        <div className="flex flex-col w-full max-w-[600px] gap-5 text-center items-center justify-center">
          <div className="box-badge py-1 px-4 border-2 border-blue-700/90">
            <FolderKanban className="w-5 h-5 text-blue-600 mr-[10px]" />
            <h1 className="text-sm sm:text-sm md:text-lg text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-violet-500 to-blue-600">
              {projectContent.title}
            </h1>
          </div>

          <h4 className="font-medium text-2xl text-blue-900">
            {projectContent.description}
          </h4>
        </div>
      </div>
    </Card>
  );
};

export default Project;
