import React from "react";
import ProjestCard from "./ProjestCard";
import { projectData } from "../../data/projectsData";

const Projects = () => {
  return (
    <div className="min-h-screen  p-20 pt-40 gap-8 flex flex-col">
      <h1 id="projects" className="text-4xl">
        Projects
      </h1>
      <div className="flex gap-4 flex-wrap">
        {projectData.map((project) => (
          <ProjestCard
            title={project.title}
            img={project.img}
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
