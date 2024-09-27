import React from "react";
import { Card } from "../ui/card";
import { FolderKanban } from "lucide-react";
import { projectContent } from "@/lib/assets";
import Image from "next/image";

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

          <h4 className="font-medium text-3xl text-blue-900">
            {projectContent.description}
          </h4>
        </div>
      </div>

      <div className="mt-5 w-full  h-full grid grid-cols-1 md:grid-cols-4 gap-4 items-center justify-center mx-auto">
        {projectContent.projects.map((project, index) => (
          <Card
            key={index}
            className="relative flex w-full h-full  flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg"
          >
            <div className="relative mx-4 mt-4 ">
              <Image
                src={project.img}
                alt={`${project.title}-${index}`}
                width={500}
                height={500}
                className="w-full h-full object-cover rounded-xl"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex w-full items-center justify-center rounded-full text-center  disabled:opacity-50 disabled:shadow-none">
                <h4 className=" text-xl font-semibold text-white bg-blue-900/20 ">
                  {project.imgTitle}
                </h4>
              </div>
            </div>
            <div className="p-6">
              <div className="mb-2 flex items-center justify-between">
                <h5 className=" text-xl font-medium text-blue-950 ">
                  {project.title}
                </h5>
              </div>
              <p className=" text-base font-light text-gray-700 line-clamp-4	">
                {project.description}
              </p>
              <div className="mt-3 flex items-center justify-between">
                <div className="flex items-center -space-x-2">
                  {/* <img
                    alt="natali craig"
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
                    className="relative inline-block h-9 w-9 rounded-full border-2 border-white object-cover object-center hover:z-10"
                  />
                  <img
                    alt="Tania Andrew"
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                    className="relative inline-block h-9 w-9 rounded-full border-2 border-white object-cover object-center hover:z-10"
                  /> */}

                  {project.tech.map((tech, index) => (
                    <Image
                      src={tech.img}
                      key={index}
                      alt={`img-${index}`}
                      width={500}
                      height={500}
                      className=" h-9 w-9 rounded-full border-2 border-blue-950/10 border-white bg-white object-cover object-center hover:z-10"
                    />
                  ))}
                </div>
                {/* <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                 January 10
               </p> */}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Card>
  );
};

export default Project;
