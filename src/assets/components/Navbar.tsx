import { useNavigate } from "react-router-dom";
import { BsGithub } from "react-icons/bs";
import { AiFillLinkedin, AiOutlineArrowRight } from "react-icons/ai";
import { CiBurger } from "react-icons/ci";
import { useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handelClick = () => {
    setOpen((state) => (state === true ? false : true));
  };

  return (
    <div className="bg-gradient-to-tl  to-black from-gray-800 h-screen w-full mx-auto">
      {/* Nav */}
      <div className="flex container mx-auto h-[10%] justify-between ">
        <div className="flex px-4 ">
          <img
            src="/public/images/SK-logo.png"
            className="cursor-pointer hover:animate-pulse z-20"
            alt="SK"
            onClick={() => {
              navigate("/");
            }}
          />
        </div>
        <div className="px-4 sm:flex hidden items-center justify-center gap-3">
          <a href="#">Resume</a> <a href="#">About Me</a>
          <a href="#">Contact</a>
          <a href="#">
            <BsGithub />
          </a>
          <a href="#">
            <AiFillLinkedin />
          </a>
        </div>
        <div className="px-4 z-20 sm:hidden flex items-center justify-center gap-3">
          <CiBurger size={35} onClick={handelClick} />
        </div>
        {open && <SideMenu />}
      </div>

      {/* hero */}
      <div className="hero">
        <div className="hero-overlay">
          <div className="flex justify-center  sm:w-[70%] h-full w-full px-10 ">
            <div className="flex flex-col items-center justify-center">
              <span className="text-2xl">
                Hi there! I am{" "}
                <span className="text-rose-700 text-3xl">Salman</span>, I Make
                full Stack Web Applications.
              </span>
              <br />I am specialized in Mern Stack developments. I have
              developed multiple projects using with ExpressJs, NestJs Mongodb
              and many more with in depth knowledge of typescript and
              javascript. Check out my projects below.
              <div className="flex justify-center py-4 gap-4">
                <button className="btn-1 group">
                  View Projects
                  <AiOutlineArrowRight className="group-hover:rotate-90 transition-transform" />
                </button>
                <button className="btn-2 group">
                  View Skills{" "}
                  <div>
                    <AiOutlineArrowRight className="group-hover:rotate-90 transition-transform" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SideMenu = () => {
  return (
    <div className="flex flex-col text-xl bg-gradient-to-tl to-black from-gray-800 sm:hidden h-screen fixed gap-8 w-full justify-center items-center z-10 ">
      <a href="#">Resume</a> <a href="#">About Me</a>
      <a href="#">Contact</a>
      <a href="#">
        <BsGithub />
      </a>
      <a href="#">
        <AiFillLinkedin />
      </a>
    </div>
  );
};

export default Navbar;
