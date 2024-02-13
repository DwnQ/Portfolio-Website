import React from "react";
import Tag from "@/components/Tag";
import { randomUUID } from "crypto";

type Props = {};

const experience = [
  {
    position: "Software-Developer",
    employer: "@Mohrenbrauerei",
    employer_url: "https://www.mohrenbrauerei.at/",
    duration: "July 2021 – August 2021",
    description:
      "Gained hands-on experience in modern frontend development practices, worked with component-based architecture, state management, and UI testing using Jest or Vue Testing Library",
    technologies: ["CRA", "GraphQL", "Express JS", "MongoDB"],
  },
  {
    position: "Backend-Developer",
    employer: "@IMA Schelling",
    employer_url: "https://www.imaschelling.com/",
    duration: "July 2023 – October 2023",
    description:
      "Gained hands-on experience in modern frontend development practices, worked with component-based architecture, state management, and UI testing using Jest or Vue Testing Library",
    technologies: ["MOQ", "C#", "EF-CORE", "ASP.NET", "Xamarin"],
  },
  {
    position: "Frontend-Developer",
    employer: "@TOWA Digital",
    employer_url: "https://www.towa-digital.com/en/",
    duration: "August 2023 – October 2023",
    description:
      "Gained hands-on experience in modern frontend development practices, worked with component-based architecture, state management, and UI testing using Jest or Vue Testing Library",
    technologies: [
      "Vue",
      "Storyblok",
      "Spryker",
      "Nuxt",
      "Scrum ",
      "Wordpress",
    ],
  },
];

export default function index({}: Props) {
  return (
    <div className="flex flex-col m-3 hover:transform transition-transform duration-300">
      <h2 className="text-gray-600 dark:text-white mb-4 text-2xl font-semibold">
        Experience
      </h2>
      {experience?.map((experience) => (
        <a
          href={experience?.employer_url}
          target="_blank"
          className="group flex my-5 mr-5 hover-gunmetal  border rounded-xl p-5 transition-all border-transparent hover:border-solid  relative cursor-pointer"
          key={experience.employer}
        >
          <div className="text-black  flex-auto dark:text-white w-full">
            {experience.duration}
          </div>
          <div className="ml-5 text-black dark:text-white">
            <div className="flex flex-row mb-2">
              <h3 className="text-lg font-bold mr-2 ">{experience.position}</h3>
              <h3 className="text-lg font-bold ml-2">{experience.employer}</h3>
              <span className="material-symbols-outlined ml-auto absolute top-3 right-4  group-hover:visible group-hover:top-2 group-hover:right-2 transition-all ">
                arrow_outward
              </span>
            </div>
            <p>{experience.description}</p>
            <div className="tags-container my-2 dark:text-white">
              {experience.technologies.map((tag) => (
                <Tag key={tag} tag={tag} />
              ))}
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}
