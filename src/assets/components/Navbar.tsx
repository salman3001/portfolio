import { Link, useLocation, useNavigate } from "react-router-dom";
import { BsGithub } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { BiMenu } from "react-icons/bi";
import { useEffect, useState } from "react";
import { MdOutlineEmail } from "react-icons/md";

interface INavbar {
  handelClick: () => void;
  open: boolean;
}
const Navbar = ({ handelClick, open }: INavbar) => {
  const location = useLocation();
  const isRoot = location.pathname === "/";
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

  console.log(scrollPosition);
  console.log(window.innerHeight);

  return (
    <>
      {(isRoot && scrollPosition < 50) ||
      scrollPosition > window.innerHeight ||
      open ? (
        <div
          className={` ${
            scrollPosition > window.innerHeight && !open
              ? "text-black bg-base-100 shadow-lg"
              : "text-white "
          }  fixed h-[8%]  w-full  z-30`}
        >
          <div className="padding-1 justify-between mx-auto w-full h-full flex">
            <div className="flex">
              <img
                src={import.meta.env.VITE_BASE_URL + "/images/SK-logo.png"}
                className="cursor-pointer hover:animate-pulse z-20"
                alt="SK"
                onClick={() => {
                  navigate("/");
                }}
              />
            </div>
            <div className="px-4 sm:flex hidden items-center justify-center gap-4">
              <a href="#resume">Resume</a>
              <a href="#experience">Experience</a>{" "}
              <a href="#aboutme">About Me</a>
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
              <BiMenu onClick={handelClick} size={25} />
            </div>
          </div>
        </div>
      ) : (
        <div
          className={` 
            text-black bg-base-100 shadow-lg
           fixed h-[8%]  w-full  z-30`}
        >
          <div className="padding-1 justify-between mx-auto w-full h-full flex">
            <div className="flex ">
              <img
                src={import.meta.env.VITE_BASE_URL + "/images/SK-logo.png"}
                className="cursor-pointer hover:animate-pulse z-20"
                alt="SK"
                onClick={() => {
                  navigate("/");
                }}
              />
            </div>
            <div className="px-4 sm:flex hidden items-center justify-center gap-4">
              <a>
                <Link to="/#resume"> Resume</Link>
              </a>
              <a href="#experience">
                {" "}
                <Link to="/#experience">Experience</Link>
              </a>{" "}
              <a href="#aboutme">
                <Link to="/#aboutme">About Me</Link>
              </a>
              <a href="#contact">
                <Link to="/#contact"> Contact</Link>
              </a>
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
              <BiMenu onClick={handelClick} size={25} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
