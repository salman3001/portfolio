import React, { useRef } from "react";
import ProjestCard from "./ProjestCard";
import { projectData } from "../../data/projectsData";
import Card from "./card";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

const Projects = () => {
  const scrollRef = useRef<HTMLDivElement>();

  const scroll = (amount: number) => {
    if (scrollRef.current?.scrollLeft !== null) {
      scrollRef.current?.scrollLeft += amount;
    }
  };

  return (
    <div className="min-h-screen bg-base-100 p-10 md:p-20  gap-8 flex flex-col">
      <h1 id="projects" className="text-4xl font-bold">
        Projects
      </h1>
      <div className="flex relative  items-center">
        <div className="absolute cursor-pointer text-gray-400 top-1/2 left-[-20px]">
          <MdArrowBackIosNew size={40} />
        </div>

        <div
          ref={scrollRef}
          className="flex  overflow-scroll snap-x snap-mandatory scrollbar-hide "
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
          className="absolute cursor-pointer top-1/2 text-gray-400 right-[-20px]"
          onClick={() => scroll(20)}
        >
          <MdArrowForwardIos size={40} />
        </div>
      </div>
    </div>
  );
};

export default Projects;
