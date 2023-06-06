import React, { useEffect, useRef } from "react";
import { projectData } from "../../data/projectsData";
import Card from "./card";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

const Projects = () => {
  const scrollRef = useRef<HTMLDivElement>();

  const scrollHandler = (amount: number) => {
    scrollRef.current.scrollLeft += amount;
  };

  // useEffect(() => {
  //   let ScrollTime = setInterval(() => {
  //     if (scrollRef.current.scrollLeft < scrollRef.current.scrollWidth - 600) {
  //       scrollRef.current.scrollLeft += 400;
  //       console.log(scrollRef.current?.scrollWidth);
  //       console.log(scrollRef.current?.scrollLeft);
  //     } else {
  //       scrollRef.current.scrollLeft = 0;
  //     }
  //   }, 2000);

  //   return () => clearInterval(ScrollTime);
  // }, []);

  return (
    <div className="  bg-base-100 padding-1 padding-2   gap-8 flex flex-col">
      <div>
        <h1 id="projects" className="text-4xl text-rose-700 font-bold">
          Projects
        </h1>
        <div className="divider"></div>
      </div>
      <div className="flex relative  items-center">
        <div
          className="absolute cursor-pointer text-rose-400 top-[42%] left-[-10px] shadow-sm  bg-slate-500 bg-opacity-20 rounded-full p-2"
          onClick={() => scrollHandler(-200)}
        >
          <MdArrowBackIosNew size={40} />
        </div>

        <div
          id="project-scroll"
          ref={scrollRef}
          className="flex scroll-smooth  overflow-scroll snap-x snap-mandatory scrollbar-hide p-8"
        >
          <div className="flex min-w-max justify-center gap-4  ">
            {projectData.map((project, index) => (
              <div key={index}>
                <Card
                  discription={project.description}
                  title={project.title}
                  img={project.img}
                  link={project.link}
                />
              </div>
            ))}
          </div>
        </div>
        <div
          className="absolute cursor-pointer shadow-sm  text-rose-400 top-[42%] right-[-10px] bg-slate-500 bg-opacity-20 rounded-full p-2"
          onClick={() => scrollHandler(200)}
        >
          <MdArrowForwardIos size={40} />
        </div>
      </div>
    </div>
  );
};

export default Projects;
