import { Dispatch } from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";

const SideMenu = ({
  setOpen,
}: {
  setOpen: Dispatch<React.SetStateAction<boolean>>;
}) => {
  const handleClick = () => {
    setOpen((state) => (state === true ? false : true));
  };

  return (
    <div className="flex flex-col text-xl bg-gradient-to-tl to-black from-gray-800 sm:hidden h-screen fixed gap-8 w-full justify-center items-center z-10 ">
      <a onClick={handleClick} href="#r">
        Resume
      </a>{" "}
      <a onClick={handleClick} href="#aboutme">
        About Me
      </a>
      <a onClick={handleClick} href="#contactme">
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
    </div>
  );
};

export default SideMenu;
