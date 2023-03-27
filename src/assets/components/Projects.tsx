import React from "react";
import ProjestCard from "./ProjestCard";
import { projectData } from "../../data/projectsData";
import Card from "./card";

const Projects = () => {
  return (
    <div className="min-h-screen bg-base-100 p-20 pt-40 gap-8 flex flex-col">
      <h1 id="projects" className="text-4xl">
        Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 gap-4 flex-wrap">
        {projectData.map((project) => (
          <Card
            discription={project.description}
            title={project.title}
            img={project.img}
          />
          //   <ProjestCard
          //     title={project.title}
          //     img={project.img}
          //     description={project.description}
          //   />
        ))}
      </div>
    </div>
  );
};

export default Projects;
