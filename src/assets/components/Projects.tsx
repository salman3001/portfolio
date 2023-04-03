import React, { useRef } from "react";
import { projectData } from "../../data/projectsData";
import Card from "./card";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

const Projects = () => {
  const scrollRef = useRef<HTMLDivElement>();

  const scrollHandler = (amount: number) => {
    scrollRef.current.scrollLeft += amount;
  };

  return (
    <div className="  bg-base-100 px-10 py-5  md:px-20 md:py-10  gap-8 flex flex-col">
      <h1 id="projects" className="text-4xl font-bold">
        My Projects
      </h1>
      <div className="flex relative  items-center">
        <div
          className="absolute cursor-pointer text-white top-[42%] left-[-40px] bg-slate-200 opacity-50 rounded-full p-2"
          onClick={() => scrollHandler(-200)}
        >
          <MdArrowBackIosNew size={50} />
        </div>

        <div
          id="project-scroll"
          ref={scrollRef}
          className="flex scroll-smooth  overflow-scroll snap-x snap-mandatory scrollbar-hide p-8"
        >
          <div className="flex min-w-max justify-center gap-4  ">
            {projectData.map((project) => (
              <Card
                discription={project.description}
                title={project.title}
                img={project.img}
                link={project.link}
              />
            ))}
          </div>
        </div>
        <div
          className="absolute cursor-pointer text-white top-[42%] right-[-40px] bg-slate-200 opacity-50 rounded-full p-2"
          onClick={() => scrollHandler(200)}
        >
          <MdArrowForwardIos size={50} />
        </div>
      </div>
    </div>
  );
};

export default Projects;
