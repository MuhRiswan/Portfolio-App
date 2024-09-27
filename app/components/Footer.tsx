import { Button } from "@/components/ui/button";
import { Copyright, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-transparent relative bottom-0 shadow-lg  z-30">
      <div className="py-12 mx-auto container">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <div className="mt-10 ">
              <div className="flex items-center">
                <span className="text-blue-400 mr-0.5">
                  <Copyright size={20} />
                </span>
                <h1 className="text-xl font-medium text-blue-400">
                  M RISWAN
                  <span className="text-blue-600 font-bold text-2xl">.</span>
                </h1>
              </div>
            </div>
            <p className="max-w-lg text-xl font-semibold tracking-tight mt-3 xl:text-base text-gray-900">
              A software engineer with a passion for learning.
            </p>
          </div>
          <div>
            <p className="font-semibold text-xl text-gray-900">Navigation</p>
            <div className="grid grid-cols-1 md:grid-rows-3 md:grid-flow-col mt-5 gap-3 w-fit">
              <Link
                href="/"
                className=" transition-colors duration-300 text-gray-600"
              >
                Home
              </Link>
              <Link
                href="/#about"
                className=" transition-colors duration-300 text-gray-600"
              >
                About
              </Link>
              <Link
                href="/#projects"
                className=" transition-colors duration-300 text-gray-600"
              >
                Projects
              </Link>
              <Link
                href="/#contact"
                className=" transition-colors duration-300 text-gray-600"
              >
                Contact
              </Link>
              <Link
                href="/#resume"
                className=" transition-colors duration-300 text-gray-600"
              >
                Resume
              </Link>
            </div>
          </div>
          <div>
            <p className="font-semibold text-xl text-gray-900">Social Media</p>
            <div className="flex flex-col items-start mt-5  text-gray-600">
              <p className=" transition-colors duration-300 ">
                Let&apos;s work together or have a chat about a project you have
                in mind. Feel free to contact me on my social media platforms.
              </p>
              <div className="grid grid-cols-4 mt-2 gap-2">
                <Link
                  href="https://github.com/MuhRiswan"
                  target="_blank"
                  className="bg-blue-200 text-primary-foreground hover:bg-primary/90 flex p-2 rounded-full"
                >
                  <svg
                    className="w-5 h-5 text-blue-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/m-riswan/"
                  target="_blank"
                  className="bg-blue-200 text-primary-foreground hover:bg-primary/90 flex p-2 rounded-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="100"
                    height="100"
                    viewBox="0 0 48 48"
                    className="w-5 h-5 text-blue-500"
                  >
                    <path
                      fill="#0288D1"
                      d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
                    ></path>
                    <path
                      fill="#FFF"
                      d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
