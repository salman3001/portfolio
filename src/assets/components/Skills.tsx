import React from "react";
import ProjestCard from "./ProjestCard";
import { skillsData } from "../../data/skillsData";

const Skills = () => {
  return (
    <div className="min-h-screen  p-20 pt-40 gap-8 flex flex-col">
      <h1 id="skills" className="text-4xl">
        Skills
      </h1>
      <div className="flex gap-4 flex-wrap">
        {skillsData.map((skill) => (
          <ProjestCard
            title={skill.title}
            img={skill.img}
            description={skill.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
