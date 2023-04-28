import React from "react";
import { BsDownload } from "react-icons/bs";

const Resume = () => {
  return (
    <div
      id="resume"
      className="  bg-base-100  padding-1 padding-2  flex flex-col"
    >
      <div>
        <h1 id="projects" className="text-4xl text-rose-700 font-bold">
          Resume
        </h1>
        <div className="divider"></div>
        <div className="flex flex-col justify-center items-center gap-8 text-rose-500">
          <p className="text-black text-2xl font-bold text-center">
            Click to download My Resume{" "}
          </p>
          <BsDownload size={50} />
        </div>
      </div>
    </div>
  );
};

export default Resume;
