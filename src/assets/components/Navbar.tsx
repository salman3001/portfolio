import { useNavigate } from "react-router-dom";
import { BsGithub } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { CiBurger } from "react-icons/ci";
import { useEffect, useState } from "react";

interface INavbar {
  handelClick: () => void;
}
const Navbar = ({ handelClick }: INavbar) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  console.log(scrollPosition);

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
      {scrollPosition < 1 || scrollPosition > window.innerHeight - 10 ? (
        <div
          className={` ${
            scrollPosition > window.innerHeight - 10 &&
            "text-black bg-base-100 shadow-lg"
          }  fixed h-[8%] px-5 w-full  z-30`}
        >
          <div className="container justify-between mx-auto w-full h-full flex">
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
            <div className="px-4 sm:flex hidden items-center justify-center gap-3">
              <a href="#resume">Resume</a> <a href="#">About Me</a>
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
            </div>
            <div className="px-4 z-20 sm:hidden flex items-center justify-center gap-3">
              <CiBurger size={35} onClick={handelClick} />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Navbar;
