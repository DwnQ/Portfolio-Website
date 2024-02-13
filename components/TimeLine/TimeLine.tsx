import React, { FC } from "react";

interface TimeLineProps {}

export const TimeLine: FC<TimeLineProps> = ({}) => {
  return (
    <div className="flex w-full justify-center">
      <ol className="relative border-l border-gray-300 dark:border-gray-700 ">
        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 bg-gray-300 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            2017
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Start of my Journey as a Software Developer
          </h3>
          <ul className="list-inside text-base font-normal text-gray-500 dark:text-gray-400">
            <li>
              Fundamentals of C# and VBA
              <ul className="list-disc list-inside">
                <li>Types and variables</li>
                <li>Loops and If-Conditions</li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 bg-gray-300 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            2018
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Object-Oriented programming
          </h3>
          <ul className="list-inside text-base font-normal text-gray-500 dark:text-gray-400">
            <li>
              C# and Object-Oriented programming
              <ul className="list-disc list-inside">
                <li>Members of a Class</li>
                <li>Inheritance and Polymorphism</li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 bg-gray-300 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            2019
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Design Patterns, Web APIs
          </h3>
          <ul className="list-inside text-base font-normal text-gray-500 dark:text-gray-400">
            <li>
              Design Patterns
              <ul className="list-disc list-inside">
                <li>Repository-, Singelton-, Mediator Pattern</li>
              </ul>
            </li>
            <li>
              ASP.NET Web API
              <ul className="list-disc list-inside">
                <li>CRUD-Operations</li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 bg-gray-300 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            2020
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Data persistence - ORMs, Web APIs
          </h3>
          <ul className="list-disc list-inside text-base font-normal text-gray-500 dark:text-gray-400">
            <ul className="list-inside text-base font-normal text-gray-500 dark:text-gray-400">
              <li>
                MySQL
                <ul className="list-disc list-inside">
                  <li>EF-Core C#</li>
                </ul>
              </li>
              <li>
                MongoDB Atlas
                <ul className="list-disc list-inside">
                  <li>Mongoose NodeJS</li>
                </ul>
              </li>
              <li>
                NodeJS
                <ul className="list-disc list-inside">
                  <li>Apollo GraphQL</li>
                  <li>Mongoose</li>
                </ul>
              </li>
            </ul>
          </ul>
        </li>
        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 bg-gray-300 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            2021
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Web-Development
          </h3>
          <ul className="list-disc list-inside text-base font-normal text-gray-500 dark:text-gray-400">
            <ul className="list-inside text-base font-normal text-gray-500 dark:text-gray-400">
              <li>
                React JS
                <ul className="list-disc list-inside">
                  <li>Functional-Components</li>
                  <li>Hooks</li>
                </ul>
              </li>
              <li>
                CSS Frameworks
                <ul className="list-disc list-inside">
                  <li>Tailwind</li>
                  <li>Bootstrap</li>
                </ul>
              </li>
            </ul>
          </ul>
        </li>
        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 bg-gray-300 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            2022 - Currently
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Technische Universität Wien
          </h3>
          <ul className="list-disc list-inside text-base font-normal text-gray-500 dark:text-gray-400"></ul>
        </li>
      </ol>
    </div>
  );
};
