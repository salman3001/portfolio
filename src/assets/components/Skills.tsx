import React, { HtmlHTMLAttributes, SyntheticEvent, useState } from "react";
import SkillsCard from "./SkillsCard";
import { skillsData } from "../../data/skillsData";

const Skills = () => {
  const [tab, setTab] = useState<
    | "All"
    | "Languages"
    | "UI"
    | "Frameworks"
    | "Liberaries"
    | "Databases"
    | "Testing"
  >("All");

  const ClickHandler = (e: SyntheticEvent<HTMLAnchorElement>) => {
    setTab(e.target.innerHTML);
  };
  return (
    <div className=" padding-1 padding-2  gap-8 flex flex-col bg">
      <div>
        <h1 id="skills" className="text-4xl text-rose-700 font-bold">
          Skills
        </h1>
        <div className="divider"></div>
      </div>
      <div className="flex  flex-col gap-6">
        <div>
          <div className="tabs justify-center sm:justify-start font-semibold">
            <a
              className={`tab tab-lifted ${
                tab === "All" && "tab-active text-rose-700"
              }`}
              onClick={ClickHandler}
            >
              All
            </a>
            <a
              className={`tab tab-lifted ${
                tab === "Languages" && "tab-active text-rose-700"
              }`}
              onClick={ClickHandler}
            >
              Languages
            </a>
            <a
              className={`tab tab-lifted ${
                tab === "UI" && "tab-active text-rose-700"
              }`}
              onClick={ClickHandler}
            >
              UI
            </a>
            <a
              className={`tab tab-lifted ${
                tab === "Frameworks" && "tab-active text-rose-700"
              }`}
              onClick={ClickHandler}
            >
              Frameworks
            </a>
            <a
              className={`tab tab-lifted ${
                tab === "Liberaries" && "tab-active text-rose-700"
              }`}
              onClick={ClickHandler}
            >
              Liberaries
            </a>
            <a
              className={`tab tab-lifted ${
                tab === "Databases" && "tab-active text-rose-700"
              }`}
              onClick={ClickHandler}
            >
              Databases
            </a>
          </div>
          <div className=" shadow-gray-400 shadow-inner pt-[4px]">
            <div className=" border-x border-b h-[350px] overflow-y-scroll ">
              {tab === "All" && (
                <div className="flex my-12 flex-wrap justify-center  items-center gap-4 h-full">
                  {skillsData.languages.map((skill, index) => (
                    <div key={index}>
                      <SkillsCard name={skill.name} img={skill.img} />
                    </div>
                  ))}
                  {skillsData.frameworks.frontend.map((skill, index) => (
                    <div key={index}>
                      <SkillsCard name={skill.name} img={skill.img} />
                    </div>
                  ))}
                  {skillsData.frameworks.backend.map((skill, index) => (
                    <div key={index}>
                      <SkillsCard name={skill.name} img={skill.img} />
                    </div>
                  ))}
                  {skillsData.ui.map((skill, index) => (
                    <div key={index}>
                      <SkillsCard name={skill.name} img={skill.img} />
                    </div>
                  ))}
                  {skillsData.liberaries.map((skill, index) => (
                    <div key={index}>
                      <SkillsCard name={skill.name} img={skill.img} />
                    </div>
                  ))}
                  {skillsData.Db.map((skill, index) => (
                    <div key={index}>
                      <SkillsCard name={skill.name} img={skill.img} />
                    </div>
                  ))}
                  {skillsData.testing.map((skill, index) => (
                    <div key={index}>
                      <SkillsCard name={skill.name} img={skill.img} />
                    </div>
                  ))}
                </div>
              )}
              {tab === "Languages" && (
                <div className="flex flex-wrap justify-center items-center gap-4 h-full">
                  {skillsData.languages.map((skill, index) => (
                    <div key={index}>
                      <SkillsCard name={skill.name} img={skill.img} />
                    </div>
                  ))}
                </div>
              )}

              {tab === "Frameworks" && (
                <div className="flex flex-wrap justify-center items-center gap-4 h-full">
                  {skillsData.frameworks.frontend.map((skill, index) => (
                    <div key={index}>
                      <SkillsCard name={skill.name} img={skill.img} />
                    </div>
                  ))}

                  {skillsData.frameworks.backend.map((skill, index) => (
                    <div key={index}>
                      <SkillsCard name={skill.name} img={skill.img} />
                    </div>
                  ))}
                </div>
              )}
              {tab === "UI" && (
                <div className="flex flex-wrap justify-center items-center gap-4 h-full">
                  {skillsData.ui.map((skill, index) => (
                    <div key={index}>
                      <SkillsCard name={skill.name} img={skill.img} />
                    </div>
                  ))}
                </div>
              )}
              {tab === "Liberaries" && (
                <div className="flex flex-wrap justify-center items-center gap-4 h-full">
                  {" "}
                  {skillsData.liberaries.map((skill, index) => (
                    <div key={index}>
                      <SkillsCard name={skill.name} img={skill.img} />
                    </div>
                  ))}
                </div>
              )}
              {tab === "Databases" && (
                <div className="flex flex-wrap justify-center items-center gap-4 h-full">
                  {skillsData.Db.map((skill, index) => (
                    <div key={index}>
                      <SkillsCard name={skill.name} img={skill.img} />
                    </div>
                  ))}
                </div>
              )}
              {tab === "Testing" && (
                <div className="flex flex-wrap justify-center items-center gap-4 h-full">
                  {skillsData.testing.map((skill, index) => (
                    <div key={index}>
                      <SkillsCard name={skill.name} img={skill.img} />
                    </div>
                  ))}
                </div>
              )}

              {/* aad */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
