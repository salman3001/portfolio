import { useNavigate } from "react-router-dom";
import { BsGithub } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { CiBurger } from "react-icons/ci";
import { useEffect, useState } from "react";
import { MdOutlineEmail } from "react-icons/md";

interface INavbar {
  handelClick: () => void;
  open: boolean;
}
const Navbar = ({ handelClick, open }: INavbar) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    const handelScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handelScroll);

    return () => {
      window.removeEventListener("scroll", handelScroll);
    };
  });

  return (
    <>
      {scrollPosition < 1 ||
      scrollPosition > window.innerHeight - 10 ||
      open ? (
        <div
          className={` ${
            scrollPosition > window.innerHeight - 10 &&
            !open &&
            "text-black bg-base-100 shadow-lg"
          }  fixed h-[8%]  w-full  z-30`}
        >
          <div className="container  justify-between mx-auto w-full h-full flex">
            <div className="flex px-4">
              <img
                src="/images/SK-logo.png"
                className="cursor-pointer hover:animate-pulse z-20"
                alt="SK"
                onClick={() => {
                  navigate("/");
                }}
              />
            </div>
            <div className="px-4 sm:flex hidden items-center justify-center gap-4">
              <a href="#resume">Resume</a> <a href="#aboutme">About Me</a>
              <a href="#contact">Contact</a>
              <a href="https://github.com/salman3001/" target="_blank">
                <BsGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/salman-k-b922a2144"
                target="_blank"
              >
                <AiFillLinkedin />
              </a>
              <a href="mailto:therodfighter@gmail.com" target="_blank">
                <MdOutlineEmail />
              </a>
            </div>
            <div className="px-2 z-20 sm:hidden text-5xl flex items-center justify-center ">
              <CiBurger onClick={handelClick} style={{ fontSize: "inherit" }} />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Navbar;
