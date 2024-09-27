// import {code} from "../public/img/coding"
export const navigationItems = [
  {
    name: "Home",
    href: "/#",
  },
  {
    name: "About",
    href: "/#about",
  },
  {
    name: "Projects",
    href: "/#projects",
  },
  // {
  //   name: "Contact",
  //   href: "/#contact",
  // },
  // {
  //   name: "Resume",
  //   href: "/#resume",
  // },
];

export const heroContent = {
  title: "Front End Developer",
  //   mainText: "Transforming Digital Dreams into Reality",
  description:
    "Crafting delightful digital experiences with 10 months+ of expertise in Front End Web Development. Explore my portfolio to witness your visions come alive.",
};

export const aboutContent = {
  title: "About Me",
  description: `Hello, I’m M. Riswan, A passionate Front End Developer dedicated to
  crafting clean, efficient code and stunning web interfaces. Always
  eager to learn and innovate, I transform ideas into captivating
  digital experiences.`,
  mainIcon: "/img/coding/code.svg",
  alt: "Code",
  // tabs: ["About", "Skills"],
  education: [
    {
      id: "0",
      title: "Front End & React Developer",
      description: "Dicoding",
      date: "2022",
    },
    {
      id: "1",
      title: "Bachelor of Computer Science",
      description: "University of Singaperbangsa Karawang",
      date: "2020 - 2024",
    },
  ],
  certifications: [
    {
      id: "0",
      title: "Dicoding",
      description: "Back End Developer Beginner",
      date: "2024",
    },
    {
      id: "1",
      title: "Dicoding",
      description: "Fundamental React Js",
      date: "2022",
    },
    {
      id: "2",
      title: "Dicoding",
      description: "Front End Web Developer Expert",
      date: "2022",
    },
  ],
  skills: [
    {
      id: "0",
      icon: "/img/icons/typescript.svg",
      title: "TypeScript",
    },
    {
      id: "1",
      icon: "/img/icons/javascript.svg",
      title: "JavaScript",
    },
    {
      id: "2",
      icon: "/img/icons/react-js.svg",
      title: "React",
    },
    {
      id: "3",
      icon: "/img/icons/next-js.svg",
      title: "Next.js",
    },
    {
      id: "4",
      icon: "/img/icons/tailwind-css.svg",
      title: "Tailwind",
    },
    {
      id: "5",
      icon: "/img/icons/figma.svg",
      title: "Figma",
    },
    {
      id: "6",
      icon: "/img/icons/github.svg",
      title: "Github",
    },
    {
      id: "7",
      icon: "/img/icons/node-js.svg",
      title: "Node.js",
    },
    {
      id: "8",
      icon: "/img/icons/postgreSql.svg",
      title: "PostgreSQL",
    },
    {
      id: "9",
      icon: "/img/icons/rest-api.svg",
      title: "REST API",
    },
  ],
  childIcons: [
    {
      id: "0",
      title: "Figma",
      icon: "/img/coding/figma.svg",
      width: 26,
      height: 36,
    },
    {
      id: "1",
      title: "jira",
      icon: "/img/coding/jira.svg",
      width: 34,
      height: 36,
    },
    {
      id: "2",
      title: "Discord",
      icon: "/img/coding/discord.svg",
      width: 36,
      height: 28,
    },
    {
      id: "3",
      title: "Slack",
      icon: "/img/coding/slack.svg",
      width: 34,
      height: 35,
    },
    {
      id: "4",
      title: "vscode",
      icon: "/img/coding/vscode.svg",
      width: 34,
      height: 34,
    },
    {
      id: "5",
      title: "Github",
      icon: "/img/coding/github.svg",
      width: 34,
      height: 34,
    },
    {
      id: "6",
      title: "Stackoverflow",
      icon: "/img/coding/stackoverflow.svg",
      width: 26,
      height: 34,
    },
    {
      id: "7",
      title: "chatGPT",
      icon: "/img/coding/chatgpt.svg",
      width: 38,
      height: 32,
    },
  ],
};

export const projectContent = {
  title: "My Project",
  description: `A small selection of recent projects`,
  projects: [
    {
      id: "0",
      img: "/img/projects/project-1.svg",
      imgTitle: "Gier - Dashboard Analytics",
      title: "Gier App, Serba Mulia Group",
      description:
        "Gier App is a dashboard analytics application built with Next.js, TypeScript, Tremor UI, and Tailwind CSS. The application is designed to help business units streamline their work and reduce manual labor. The application includes a dashboard that displays key metrics and KPIs, as well as tools for data visualization and reporting.",
      tech: [
        {
          id: "0",
          img: "/img/icons/react-js.svg",
        },
        {
          id: "1",
          img: "/img/icons/next-js.svg",
        },
        {
          id: "2",
          img: "/img/icons/typescript.svg",
        },
        {
          id: "3",
          img: "/img/icons/tailwind-css.svg",
        },
        {
          id: "4",
          img: "/img/icons/tremor.svg",
        },
      ],
    },
    {
      id: "1",
      img: "/img/projects/project-2.svg",
      imgTitle: "LMS - Learning Management System",
      title: "LMS App, Serba Mulia Group",
      description:
        "LMS (Learning Management System) is a application that provides video/learning materials for employees of Serba Mulia Group. The application includes features such as user authentication, course creation, video uploading, and user progress tracking. The application is designed to be user-friendly and easy to use, with a modern and responsive design",
      tech: [
        {
          id: "0",
          img: "/img/icons/react-js.svg",
        },
        {
          id: "1",
          img: "/img/icons/next-js.svg",
        },
        {
          id: "2",
          img: "/img/icons/typescript.svg",
        },
        {
          id: "3",
          img: "/img/icons/tailwind-css.svg",
        },
        {
          id: "4",
          img: "/img/icons/shadcn.svg",
        },
      ],
    },
    {
      id: "2",
      img: "/img/projects/project-3.svg",
      imgTitle: "Management System - Employee Management System",
      title: "Management App, Serba Mulia Auto",
      description:
        "I built an employee management system using Laravel Inertia React JS. The application is designed to help employees manage their workload by providing an user-friendly interface for them to track their tasks, projects, and progress. The application also allows for real-time communication between employees and their managers, making it easier for them to collaborate and stay on top of their work.",
      tech: [
        {
          id: "0",
          img: "/img/icons/laravel.svg",
        },
        {
          id: "1",
          img: "/img/icons/react-js.svg",
        },
        {
          id: "2",
          img: "/img/icons/inertia.svg",
        },
        {
          id: "3",
          img: "/img/icons/tailwind-css.svg",
        },
        {
          id: "4",
          img: "/img/icons/shadcn.svg",
        },
      ],
    },
    {
      id: "3",
      img: "/img/projects/project-4.svg",
      imgTitle: "Company Profile - Piagio Vista Motor",
      title: "Company Profile App, Serba Mulia Auto",
      description:
        "I built a company profile application for a business unit using Next.js, TypeScript, and Shadcn UI. The application displays information and branding for the dealer Vista Motor, which sells various vehicles from the Piagio brand. The application is designed to be user-friendly and modern, with a responsive design.",
      tech: [
        {
          id: "0",
          img: "/img/icons/react-js.svg",
        },
        {
          id: "1",
          img: "/img/icons/next-js.svg",
        },
        {
          id: "2",
          img: "/img/icons/typescript.svg",
        },
        {
          id: "3",
          img: "/img/icons/tailwind-css.svg",
        },
        {
          id: "4",
          img: "/img/icons/shadcn.svg",
        },
      ],
    },
  ],
};
