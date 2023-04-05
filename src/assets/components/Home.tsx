import React from "react";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Skills from "./Skills";
import Trainings from "./Trainings";

export const Home = () => {
  return (
    <div className="">
      <Hero />
      <div className="container text-black mx-auto bg-white">
        <Projects />
        <Skills />
        <Trainings />
        <AboutMe />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};
