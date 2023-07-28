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

