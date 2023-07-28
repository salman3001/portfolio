import React from "react";

const Experience = () => {
  return (
    <div
      id="experience"
      className="  bg-base-100 padding-1 padding-2  flex flex-col text-black"
    >
      <div>
        <h1 id="projects" className="text-4xl font-bold">
          Exprience
        </h1>
        <div className="divider"></div>
        <div>
          <div className="pb-6">
            <h1 className="text-2xl font-bold">
              Full Stack Developer (Freelance)
            </h1>
            <p className="text-gray-500">
              Wizards and Solution Pivate Ltd. India
            </p>
            <p>Since Feburary. 2023</p>
          </div>
          <div className="">
            <h1 className="text-2xl font-bold">
              Self Learning / Demo Projects
            </h1>
            <p className="text-gray-500">Since March 2022</p>
          </div>
        </div>
      </div>
      <ul className="flex pl-2 flex-col justify-center gap-4   ">
        <li className="flex justify-between"></li>
      </ul>
    </div>
  );
};

export default Experience;
