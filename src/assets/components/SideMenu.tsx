import { Dispatch } from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";

const SideMenu = ({
  setOpen,
  open,
}: {
  open: boolean;
  setOpen: Dispatch<React.SetStateAction<boolean>>;
}) => {
  const handleClick = () => {
    setOpen((state) => (state === true ? false : true));
  };

  return (
    <div
      className={`flex flex-col text-xl bg-gradient-to-tl to-black from-gray-800 sm:hidden h-screen fixed  ${
        open ? "translate-x-0" : "translate-x-full"
      } gap-8 w-full  justify-center items-center z-10 transition-transform`}
    >
      <a onClick={handleClick} href="#resume">
        Resume
      </a>{" "}
      <a onClick={handleClick} href="#skills">
        Skills
      </a>{" "}
      <a onClick={handleClick} href="#projects">
        Projects
      </a>{" "}
      <a onClick={handleClick} href="#experience">
        Experience
      </a>{" "}
      <a onClick={handleClick} href="#aboutme">
        About Me
      </a>
      <a onClick={handleClick} href="#contact">
        Contact
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
