import React from "react";
import AboutMe from "./AboutMe";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Skills from "./Skills";
import Trainings from "./Trainings";

export const Home = () => {
  return (
    <div className="">
      <Hero />
      <div className="container text-black mx-auto">
        <Projects />
        <Skills />
        <Trainings />
        <AboutMe />
      </div>
    </div>
  );
};
