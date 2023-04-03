import React, { useEffect, useRef } from "react";
import ProjestCard from "./ProjestCard";
import { projectData } from "../../data/projectsData";
import Card from "./card";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

const divelem = document.querySelector("#project-scroll");
const scrollHandler = (amount: number) => {
  divelem.scrollLeft += amount;
};

const Projects = () => {
  useEffect(() => {}, []);

  return (
    <div className="min-h-screen  bg-base-100 p-10 md:p-20  gap-8 flex flex-col">
      <h1 id="projects" className="text-4xl font-bold">
        My Projects
      </h1>
      <div className="flex relative  items-center">
        <div
          className="absolute cursor-pointer text-white top-[42%] left-[-40px] bg-slate-400 opacity-50 rounded-full p-2"
          onClick={() => scrollHandler(-200)}
        >
          <MdArrowBackIosNew size={60} />
        </div>

        <div
          id="project-scroll"
          className="flex scroll-smooth  overflow-scroll snap-x snap-mandatory scrollbar-hide p-4"
        >
          <div className="flex min-w-max justify-center gap-4  ">
            {projectData.map((project) => (
              <Card
                discription={project.description}
                title={project.title}
                img={project.img}
              />
            ))}
          </div>
        </div>
        <div
          className="absolute cursor-pointer text-white top-[42%] right-[-40px] bg-slate-400 opacity-50 rounded-full p-2"
          onClick={() => scrollHandler(200)}
        >
          <MdArrowForwardIos size={60} />
        </div>
      </div>
    </div>
  );
};

export default Projects;
