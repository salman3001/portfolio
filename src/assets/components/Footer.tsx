import { AiFillLinkedin } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="flex flex-wrap  gap-4  bg-[#f1f3f3] items-center padding-1 py-2  border     text-gray-500 border-base-300 w-full">
      <div className="flex  items-center  ">
        <img
          src={import.meta.env.VITE_BASE_URL + "/images/SK-logo.png"}
          alt=""
          className="w-10 h-10"
        />
        <div>
          <p className="text-xs">Salman Khan</p>
        </div>
      </div>
      <p className="text-xs">Copyrights 2023</p>
      <div className="flex    gap-5 items-center w-full max-w-[250px] ">
        <a
          href="https://github.com/salman3001/"
          target="_blank"
          className="flex text-xs gap-1"
        >
          <BsGithub size={20} /> Github
        </a>
        <a
          href="https://www.linkedin.com/in/salman-k-b922a2144"
          target="_blank"
          className="flex text-xs gap-1"
        >
          <AiFillLinkedin size={20} /> Linkedin
        </a>
        <a
          href="mailto:therodfighter@gmail.com"
          target="_blank"
          className="flex text-xs gap-1"
        >
          <MdOutlineEmail size={20} /> Email
        </a>
      </div>
    </footer>
  );
};

export default Footer;
