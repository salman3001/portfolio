import React from "react";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Projects from "./Projects";

export const Home = () => {
  return (
    <div className="">
      <Hero />
      <div className="container text-black mx-auto">
        <Projects />
      </div>
    </div>
  );
};
