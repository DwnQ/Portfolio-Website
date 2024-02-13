import React from "react";
import Image from "next/image";
import Tag from "@/components/Tag";

type Projects = {
  name: string;
  description: string;
  image: string;
  tags: string[];
}[];

const projects: Projects = [
  {
    name: "Portfolio Website",
    description:
      "This website is built using Next.js, TypeScript, TailwindCSS, and deployed on Vercel.",
    image: "/images/portfolio.PNG",
    tags: ["Next.js", "TypeScript", "TailwindCSS", "Vercel"],
  },
  {
    name: "Find Mohr",
    description:
      "A full-stack web application to centralize article storage and enable efficient retrieval by users",
    image: "/images/findmohr.jpg",
    tags: [
      "GraphQL",
      "CRA",
      "JavaScript",
      "Node.js",
      "MongoDB Atlas",
      "Apollo",
    ],
  },
  {
    name: "Ticketline",
    description:
      "A comprehensive web application for selling tickets and merchandise, featuring robust authentication and role-based access.",
    image: "/images/ticketline.PNG",
    tags: ["JPA", "Angular", "TypeScript", " Spring Boot", "H20-Database"],
  },
];

export default function index({}) {
  return (
    <div className="flex flex-col m-3">
      <h2 className="text-gray-600 dark:text-white mb-4 text-2xl font-semibold">
        Projects
      </h2>
      {projects?.map((project) => (
        <a
          target="_blank"
          className="flex my-5 p-3 rounded-sm hover:transform transition-transform duration-300  hover-gunmetal-boxshadow border border-transparent  hover:border-solid shadow-b-2.5 -shadow-spread-2 shadow-slate-900/15"
          key={project.name}
          href={project.image}
        >
          <Image
            className="border  border-gray-500"
            src={project.image}
            alt={project.name}
            width={500}
            height={220}
          />
          <div className="ml-5 text-black dark:text-white">
            <h3 className="text-xl font-bold mb-2 ">{project.name}</h3>
            <p>{project.description}</p>
            <div className="tags-container my-2">
              {project.tags.map((tag, index) => (
                <Tag tag={tag} key={index} />
              ))}
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}
