import React, { useRef } from "react";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { projectData } from "../../data/projectsData";
import { trainingData } from "../../data/trainingData";
import Card from "./card";
import TrainingCard from "./TrainingCard";

const Trainings = () => {
  const scrollRef = useRef<HTMLDivElement>();

  const scrollHandler = (amount: number) => {
    scrollRef.current.scrollLeft += amount;
  };

  return (
    <div className="  bg-base-100  padding-1 padding-2  flex flex-col">
      <div>
        <h1 id="projects" className="text-4xl text-rose-700 font-bold">
          Trainings
        </h1>
        <div className="divider"></div>
      </div>
      <ul className="flex pl-2 flex-col justify-center gap-4  max-w-lg">
        {trainingData.map((training, index) => (
          <li
            key={index}
            className="flex justify-between border-b-2 border-rose-300 p-2"
          >
            <a
              href={training.link}
              target="_blank"
              className="tooltip tooltip-info text-start text-xl "
              data-tip="Click to check certificate"
            >
              {training.name}
            </a>
            <p className="opacity-50 text-end"> -- by {training.from}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Trainings;
