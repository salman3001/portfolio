import { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import Navbar from "./Navbar";
import SideMenu from "./SideMenu";

const Hero = () => {
  const [open, setOpen] = useState(false);

  const handelClick = () => {
    setOpen((state: boolean) => (state === true ? false : true));
  };
  return (
    <>
      <Navbar handelClick={handelClick} open={open} />
      <SideMenu open={open} setOpen={setOpen} />
      <div
        className={`hero ${
          import.meta.env.VITE_BASE_URL !== ""
            ? "sm:bg-[url('/portfolio/images/profile-pic.jpg')] bg-[url('/portfolio/images/profile-pic-sm.jpg')]"
            : "sm:bg-[url('/images/profile-pic.jpg')] bg-[url('/images/profile-pic-sm.jpg')]"
        }`}
      >
        <div className="hero-overlay">
          <div className="flex min-h-screen  w-full h-full  padding-1 padding-2">
            <div className="flex flex-col   justify-center max-w-5xl pb-10 pt-20">
              <div className="space-y-8">
                <span className="text-5xl text-left w-full">
                  Hi there! I am <span className="text-rose-700 ">Salman</span>,
                  I Make full Stack Web Applications.
                </span>

                <p className="text-2xl">
                  I am specialized in Mern Stack developments. I have developed
                  multiple projects with Reactjs, ExpressJs, NestJs Mongodb and
                  many more libraries. With in depth knowledge of programming
                  languages like typescript and javascript i can develope the
                  complex applications to meet the clients need. Check out my
                  projects below.
                </p>
                <div className="flex justify-start py-4 gap-4 w-full">
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
      </div>
    </>
  );
};

export default Hero;
