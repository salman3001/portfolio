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
    <div className="  bg-base-100 p-10 flex flex-col">
      <div>
        <h1 id="projects" className="text-4xl text-rose-700 font-bold">
          My Trainings
        </h1>
        <div className="divider"></div>
      </div>
      <ul className="flex pl-5 flex-col justify-center gap-4   ">
        {trainingData.map((training) => (
          <li className="flex justify-between">
            <a
              href={training.link}
              target="_blank"
              className="tooltip tooltip-info text-start underline"
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
