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
      <Navbar handelClick={handelClick} open={open} />
      {open && <SideMenu setOpen={setOpen} />}
      <div
        className={`hero ${
          import.meta.env.VITE_BASE_URL != ""
            ? "sm:bg-[url('/portfolio/images/profile-pic.jpg')] bg-[url('/portfolio/images/profile-pic-sm.jpg')]"
            : "sm:bg-[url('/images/profile-pic.jpg')] bg-[url('/images/profile-pic-sm.jpg')]"
        }`}
      >
        <div className="hero-overlay">
          <div className="container flex py-16 min-h-screen justify-center h-full  px-10 ">
            <div className="flex flex-col  items-center justify-center max-w-5xl">
              {/* avatar */}
              {/* <div className="avatar py-5">
                <div className="w-40 rounded-full">
                  <img
                    src={
                      import.meta.env.VITE_BASE_URL +
                      "/images/profile-pic-sm.jpg"
                    }
                    alt=""
                  />
                </div>
              </div> */}
              <span className="text-2xl">
                Hi there! I am{" "}
                <span className="text-rose-700 text-3xl">Salman</span>, I Make
                full Stack Web Applications.
              </span>
              <br />I am specialized in Mern Stack developments. I have
              developed multiple projects with Reactjs, ExpressJs, NestJs
              Mongodb and many more libraries. With in depth knowledge of
              programming languages like typescript and javascript i can
              develope the complex applications to meet the clients need. Check
              out my projects below.
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
