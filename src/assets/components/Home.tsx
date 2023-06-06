import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";
import Trainings from "./Trainings";
import Resume from "./Resume";
import ScrollToHashElement from "../utils/ScrollToHashElement";

export const Home = () => {
  return (
    <>
      <ScrollToHashElement />

      <Projects />
      <Skills />
      <Experience />
      <Trainings />
      <AboutMe />
      <Contact />
      <Resume />
    </>
  );
};
