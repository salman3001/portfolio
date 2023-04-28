import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Experience from "./Experience";
import Footer from "./Footer";
import Hero from "./Hero";
import Projects from "./Projects";
import Skills from "./Skills";
import Trainings from "./Trainings";
import Resume from "./Resume";

export const Home = () => {
  return (
    <div className="bg-base-100">
      <Hero />
      <div className="text-black mx-auto bg-base-100">
        <Projects />
        <Skills />
        <Experience />
        <Trainings />
        <AboutMe />
        <Contact />
        <Resume />
        <Footer />
      </div>
    </div>
  );
};
