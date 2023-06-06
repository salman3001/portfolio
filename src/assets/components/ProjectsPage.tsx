import React from "react";
import { projectData } from "../../data/projectsData";
import Card from "./card";

const ProjectsPage = () => {
  return (
    <div className="py-[10vh] padding-1 flex flex-wrap justify-center items-center gap-6">
      {projectData.map((project, index) => (
        <div key={index}>
          {
            <Card
              discription={project.description}
              img={project.img}
              link={project.link}
              title={project.title}
            />
          }
        </div>
      ))}
    </div>
  );
};

export default ProjectsPage;
