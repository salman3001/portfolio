import { Dispatch } from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { useLocation, Link } from "react-router-dom";

const SideMenu = ({
  setOpen,
  open,
}: {
  open: boolean;
  setOpen: Dispatch<React.SetStateAction<boolean>>;
}) => {
  const location = useLocation();
  const isRoot = location.pathname === "/";

  const handleClick = () => {
    setOpen((state) => (state === true ? false : true));
  };

  return (
    <div
      className={`flex flex-col text-white text-xl bg-gradient-to-tl to-black from-gray-800 sm:hidden h-screen fixed  ${
        open ? "translate-x-0" : "translate-x-full"
      } gap-8 w-full  justify-center items-center z-10 transition-transform`}
    >
      <a href="#resume" onClick={handleClick}>
        <Link to="/#resume"> Resume</Link>
      </a>{" "}
      <a onClick={handleClick} href="#experience">
        <Link to="/#experience"> Experience</Link>
      </a>{" "}
      <a onClick={handleClick} href="#aboutme">
        <Link to="/#aboutme">About Me</Link>
      </a>
      <a onClick={handleClick} href="#contact">
        <Link to="/#contact"> Contact</Link>
      </a>
      <a onClick={handleClick} href="#contact">
        <Link to="/projects"> All Projects</Link>
      </a>
      <a
        onClick={handleClick}
        href="https://github.com/salman3001/"
        target="_blank"
      >
        <BsGithub />
      </a>
      <a
        onClick={handleClick}
        href="https://www.linkedin.com/in/salman-k-b922a2144"
        target="_blank"
      >
        <AiFillLinkedin />
      </a>
      <a href="mailto:therodfighter@gmail.com" target="_blank">
        <MdOutlineEmail />
      </a>
    </div>
  );
};

export default SideMenu;
