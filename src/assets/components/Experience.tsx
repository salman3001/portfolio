import React from "react";

const Experience = () => {
  return (
    <div className="  bg-base-100 padding-1 padding-2  flex flex-col text-black">
      <div>
        <h1 id="projects" className="text-4xl text-rose-700 font-bold">
          Exprience
        </h1>
        <div className="divider"></div>
        <div>
          <div className="pb-6">
            <h1 className="text-3xl font-bold">
              Frontend Developer (Remote Job)
            </h1>
            <p className="text-gray-500">
              Wizards and Soluti on Pivate Ltd. India
            </p>
            <p>Since March 2023</p>
          </div>
          <div className="">
            <h1 className="text-3xl font-bold">
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
