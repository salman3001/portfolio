import React from "react";
import ProjestCard from "./ProjestCard";
import { skillsData } from "../../data/skillsData";

const Skills = () => {
  return (
    <div className=" px-10 py-5  md:px-20 md:py-10 gap-8 flex flex-col">
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
