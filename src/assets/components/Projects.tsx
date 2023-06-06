import React, { useEffect, useRef } from "react";
import { projectData } from "../../data/projectsData";
import Card from "./card";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { BsArrowRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import Slider from "./Slider";

const Projects = () => {
  const scrollRef = useRef<HTMLDivElement>();
  const navigate = useNavigate();

  const scrollHandler = (amount: number) => {
    scrollRef.current.scrollLeft += amount;
  };

  return (
    <div className="  bg-base-100 padding-1 padding-2   gap-8 flex flex-col">
      <div>
        <h1 id="projects" className="text-4xl text-primary2 font-bold">
          Projects
        </h1>
        <div className="divider"></div>
      </div>
      <div className="flex w-full justify-end text-rose-700 items-center gap-3">
        <a
          className="flex gap-2"
          onClick={(e) => {
            navigate("/projects");
          }}
        >
          View All Projects <BsArrowRight size={30} />
        </a>
      </div>
      <div>
        <Slider
          slides={projectData.map((data, index) => ({
            id: index,
            component: (
              <Card
                key={index}
                title={data.title}
                img={data.img}
                discription={data.description}
                link={data.link}
              />
            ),
          }))}
        />
      </div>
    </div>
  );
};

export default Projects;

// <div className="flex relative  items-center">
//   <div
//     className="absolute cursor-pointer text-rose-400 top-[42%] left-[-10px] shadow-sm  bg-slate-500 bg-opacity-20 rounded-full p-2"
//     onClick={() => scrollHandler(-200)}
//   >
//     <MdArrowBackIosNew size={40} />
//   </div>

//   <div
//     id="project-scroll"
//     ref={scrollRef}
//     className="flex scroll-smooth  overflow-scroll snap-x snap-mandatory scrollbar-hide p-8"
//   >
//     <div className="flex min-w-max justify-center gap-4  ">
//       {projectData.map((project, index) => (
//         <div key={index}>
//           <Card
//             discription={project.description}
//             title={project.title}
//             img={project.img}
//             link={project.link}
//           />
//         </div>
//       ))}
//     </div>
//   </div>
//   <div
//     className="absolute cursor-pointer shadow-sm  text-rose-400 top-[42%] right-[-10px] bg-slate-500 bg-opacity-20 rounded-full p-2"
//     onClick={() => scrollHandler(200)}
//   >
//     <MdArrowForwardIos size={40} />
//   </div>
// </div>;
