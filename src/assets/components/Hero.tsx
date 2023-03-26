import { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import SideMenu from "./SideMenu";

const Hero = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handelClick = () => {
    setOpen((state: boolean) => (state === true ? false : true));
  };
  return (
    <>
      <Navbar handelClick={handelClick} />
      {open && <SideMenu setOpen={setOpen} />}
      <div className="hero">
        <div className="hero-overlay">
          <div className="flex justify-center container lg:pl-32   sm:w-[70%] h-full w-full px-10 ">
            <div className="flex flex-col items-center justify-center">
              <span className="text-2xl">
                Hi there! I am{" "}
                <span className="text-rose-700 text-3xl">Salman</span>, I Make
                full Stack Web Applications.
              </span>
              <br />I am specialized in Mern Stack developments. I have
              developed multiple projects using with Reactjs, ExpressJs, NestJs
              Mongodb and many more libraries and framework. With in depth
              knowledge of programming languages like typescript and javascript
              i can develope the com[plex applications to meet the clients
              need]. Check out my projects below.
              <div className="flex justify-center py-4 gap-4">
                <a className="btn-1 group" href="#projects">
                  View Projects
                  <AiOutlineArrowRight className="group-hover:rotate-90 transition-transform" />
                </a>
                <a href="#skills" className="btn-2 group">
                  View Skills{" "}
                  <div>
                    <AiOutlineArrowRight className="group-hover:rotate-90 transition-transform" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
